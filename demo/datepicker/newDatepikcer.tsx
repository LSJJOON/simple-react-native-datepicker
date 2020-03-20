import * as React from 'react';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {
	Platform,
	TouchableWithoutFeedback,
	Animated,
	Modal,
	View
} from 'react-native';
import * as moment from 'moment';
import styles, { IOS_DATEPICKER_HEIGHT } from './style';

export interface IProps {
	visible?: boolean;
	format?: string;
	mode: Mode;
	minuteInterval?: MinuteInterval;
	onDateChange: (date: Date, dateStr: string) => any;
	date: string | Date;
}

enum DefaultFormat {
	date = 'YYYY-MM-DD',
	datetime = 'YYYY-MM-DD HH:mm',
	time = 'HH:mm',
}

export interface IDeafaultProps {
	visible: boolean;
	mode: Mode;
	date: string | Date;
}

interface IState {
	visible: boolean;
	date: Date;
	animatedOpacity: Animated.Value;
	animatedTranslateY: Animated.Value;
}

const SUPPORTED_ORIENTATIONS: SupportedOrientations[] = [
	'portrait',
	'portrait-upside-down',
	'landscape',
	'landscape-left',
	'landscape-right',
];
type Mode = 'date' | 'datetime' | 'time';
type SupportedOrientations = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;

class DatePicker extends React.Component<IProps> {
	public static defaultProps: IDeafaultProps = {
		visible: true,
		mode: 'date',
		date: new Date(),
	};

	public readonly state: IState;

	constructor(props: IProps) {
		super(props);
		const firstOpacity = (props.visible) ? 1 : 0;
		const firstTranslateY = (props.visible) ? 0 : IOS_DATEPICKER_HEIGHT;
		this.state = {
			visible: (props.visible === true) ? true : false,
			date: props.date ? new Date(props.date) : new Date(),
			animatedOpacity: new Animated.Value(firstOpacity),
			animatedTranslateY: new Animated.Value(firstTranslateY),
		};
	}

	public render() {
		const DateTimePicker = (
			<RNDateTimePicker
				value={this.state.date}
				minuteInterval={this.props.minuteInterval}
				onChange={(event, date) => this._onDateChange(event, date)}
			/>);
		return !this.state.visible ? null : (
			Platform.OS === 'android' ? DateTimePicker :
			<Modal
				transparent={true}
				animationType="none"
				visible={this.state.visible}
				supportedOrientations={SUPPORTED_ORIENTATIONS}
				onRequestClose={() => this._hideModal()}
			>
				<Animated.View style={{flex: 1, backgroundColor: '#000000', opacity: this.state.animatedOpacity}}>
					<TouchableWithoutFeedback onPress={() => this._hideDatePicker()}>
						<View style={{ flex: 1 }}></View>
					</TouchableWithoutFeedback>
					<Animated.View
						style={[
							styles.datePickerCon,
							{ transform: [{translateY: this.state.animatedTranslateY }]},
						]}
					>
						{DateTimePicker}
					</Animated.View>
				</Animated.View>
			</Modal>
		);
	}

	public UNSAFE_componentWillReceiveProps(nextProps: IProps) {
		const { visible } = nextProps;
		if (this.state.visible !== visible) {
			visible ? this._showDatePicker() : this._hideDatePicker();
		}
	}

	private _onDateChange(event: Event, date: Date | undefined) {
		if (date === undefined) { // dismissAction
			return this._cancelHandler();
		}

		const dateStr = dateToStr(date, this.props.format || DefaultFormat[this.props.mode]);
		this.setState({ date, visible: false });
		this.props.onDateChange(date, dateStr);
	}

	private _cancelHandler() {
		this._hideDatePicker();
	}

	private _showDatePicker() {
		if (Platform.OS === 'android') {
			this.setState({ visible: true });
		} else if (Platform.OS === 'ios') {
			this._showModal();
		}
	}

	private _hideDatePicker() {
		if (Platform.OS === 'android') {
			this.setState({ visible: false });
		} else if (Platform.OS === 'ios') {
			this._hideModal();
		}
	}

	/** @description show modal for ios */
	private _showModal() {
		this._animatedModal(true);
	}

	/** @description hide modal for ios */
	private _hideModal() {
		this._animatedModal(false);
	}

	private _animatedModal(isShow: boolean) {
		const ANIMATION_DURATION = 300;
		const SHOW_OPACITY = 0.7;
		const HIDE_OPACITY = 0;
		const SHOW_TRANSLATE_Y = 0;
		const HIDE_TRANSLATE_Y = IOS_DATEPICKER_HEIGHT;
		if (isShow) {
			this.setState({ visible: true });
		}
		Animated.parallel([
			Animated.timing(
				this.state.animatedTranslateY,
				{
					toValue: (isShow) ? SHOW_TRANSLATE_Y : HIDE_TRANSLATE_Y,
					duration: ANIMATION_DURATION,
				},
			),
			Animated.timing(
				this.state.animatedOpacity,
				{
					toValue: (isShow) ? SHOW_OPACITY : HIDE_OPACITY,
					duration: ANIMATION_DURATION,
				},
			),
		]).start(() => {
			if (!isShow) {
				this.setState({ visible: false });
			}
		});
	}
}

export function dateToStr(date: Date, format?: string | undefined): string {
	return '';
}

export default DatePicker;
