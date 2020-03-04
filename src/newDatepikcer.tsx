import * as React from 'react';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {
	Platform,
	TouchableWithoutFeedback,
	Animated,
	Modal,
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

		this.state = {
			visible: props.visible || true,
			date: props.date ? new Date(props.date) : new Date(),
			animatedOpacity: new Animated.Value(0),
			animatedTranslateY: new Animated.Value(IOS_DATEPICKER_HEIGHT),
		};
	}

	public render() {
		const DateTimePicker = ((this.state.visible) &&
			<RNDateTimePicker
				value={this.state.date}
				minuteInterval={this.props.minuteInterval}
				onChange={(event, date) => this._onDateChange(event, date)}
			/>);

		return (
			Platform.OS === 'android' ? DateTimePicker :
			<Modal
				transparent={true}
				animationType="none"
				visible={this.state.visible}
				supportedOrientations={SUPPORTED_ORIENTATIONS}
				onRequestClose={() => this._hideModal()}
			>
				<Animated.View style={{flex: 1, opacity: this.state.animatedOpacity}}>
					<TouchableWithoutFeedback
						style={styles.datePickerMask}
						onPress={() => this._hideModal()}
					>
						<Animated.View
							style={[
								styles.datePickerCon,
								{ transform: [{translateY: this.state.animatedTranslateY }]},
							]}
						>
							{DateTimePicker}
						</Animated.View>
					</TouchableWithoutFeedback>
				</Animated.View>
			</Modal>
		);
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
		this.setState({ visible: true });
	}

	/** @description hide modal for ios */
	private _hideModal() {
		this._animatedModal(false);
		this.setState({ visible: false });
	}

	private _animatedModal(isShow: boolean) {
		const ANIMATION_DURATION = 300;
		const SHOW_OPACITY = 1;
		const HIDE_OPACITY = 0;
		const SHOW_TRANSLATE_Y = 0;
		const HIDE_TRANSLATE_Y = IOS_DATEPICKER_HEIGHT;

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
		]).start();
	}
}

export function dateToStr(date: Date, format?: string | undefined): string {
	return '';
}

export default DatePicker;
