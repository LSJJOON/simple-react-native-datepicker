import * as React from 'react';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {
	Platform,
	TouchableWithoutFeedback,
	TouchableOpacity,
	Animated,
	Modal,
	View,
	Text,
	StyleProp,
	TextStyle,
} from 'react-native';
import moment from 'moment';
import styles, { IOS_DATEPICKER_HEIGHT } from './style';
const IOS_DEFAULT_TINT_COLOR = '#007AFF';

export interface IProps {
	visible: boolean;
	format?: string;
	mode: Mode;
	minuteInterval?: MinuteInterval;
	onDateChange: (dateStr?: string, date?: Date) => any;
	date: string | Date;
	display?: Display;
	maximumDate?: Date;
	minimumDate?: Date;
	timeZoneOffsetInMinutes?: number;
	textColor?: string;
	locale?: string;
	is24Hour?: boolean;
	confirmText?: string;
	cancelText?: string;
	confirmTextStyle?: StyleProp<TextStyle>;
	cancelTextStyle?: StyleProp<TextStyle>;
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
	confirmText: string;
	cancelText: string;
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
type Mode = 'date' | 'datetime' | 'time' | 'countdown';
type SupportedOrientations = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;
type Display = 'default' | 'calendar' | 'spinner' | 'clock';

class DatePicker extends React.Component<IProps> {
	public static defaultProps: IDeafaultProps = {
		visible: true,
		mode: 'date',
		date: new Date(),
		confirmText: 'Confirm',
		cancelText: 'Cancel',
	};

	public readonly state: IState;

	constructor(props: IProps) {
		super(props);
		const firstOpacity = props.visible ? 1 : 0;
		const firstTranslateY = props.visible ? 0 : IOS_DATEPICKER_HEIGHT;
		this.state = {
			visible: props.visible === true ? true : false,
			date: props.date ? new Date(props.date) : new Date(),
			animatedOpacity: new Animated.Value(firstOpacity),
			animatedTranslateY: new Animated.Value(firstTranslateY),
		};
	}

	public render() {
		const {
			mode,
			display,
			minimumDate,
			maximumDate,
			timeZoneOffsetInMinutes,
			textColor,
			locale,
			is24Hour,
			confirmText,
			cancelText,
			confirmTextStyle,
			cancelTextStyle,
		} = this.props;
		const DateTimePicker = (
			<RNDateTimePicker
				value={this.state.date}
				minuteInterval={this.props.minuteInterval}
				onChange={(event, date) => this._onDateChange(event, date)}
				mode={mode}
				display={display}
				maximumDate={maximumDate}
				minimumDate={minimumDate}
				timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
				textColor={textColor}
				locale={locale}
				is24Hour={is24Hour}
			/>
		);
		return !this.state.visible ? null : Platform.OS === 'android' ? (
			DateTimePicker
		) : (
			<Modal
				transparent={true}
				animationType="none"
				visible={this.state.visible}
				supportedOrientations={SUPPORTED_ORIENTATIONS}
				onRequestClose={() => this._hideModal()}
			>
				<View style={{ flex: 1 }}>
					<Animated.View
						style={{
							flex: 1,
							backgroundColor: '#000000',
							opacity: this.state.animatedOpacity,
						}}
					>
						<TouchableWithoutFeedback onPress={() => this._cancelHandler()}>
							<View style={{ flex: 1 }}></View>
						</TouchableWithoutFeedback>
						<Animated.View
							style={[styles.datePickerCon, { transform: [{ translateY: this.state.animatedTranslateY }] }]}
						>
							<View
								style={{
									backgroundColor: '#fff',
									flex: 1,
									flexDirection: 'row',
									height: IOS_DATEPICKER_HEIGHT,
									alignContent: 'center',
								}}
							>
								<TouchableOpacity
									style={{
										left: 0,
										marginLeft: 24,
										marginTop: 8,
										height: '100%',
									}}
									onPress={() => this._cancelHandler()}
								>
									<Text style={[{ color: 'red', fontWeight: '600' }, cancelTextStyle]}>{cancelText}</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										right: 0,
										marginRight: 24,
										marginTop: 8,
										position: 'absolute',
										height: '100%',
									}}
									onPress={() => this._submitDate()}
								>
									<Text style={[{ color: IOS_DEFAULT_TINT_COLOR, fontWeight: '600' }, confirmTextStyle]}>
										{confirmText}
									</Text>
								</TouchableOpacity>
							</View>
							{DateTimePicker}
						</Animated.View>
					</Animated.View>
				</View>
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
		if (date === undefined) {
			return this._cancelHandler();
		}
		const nextState = { date, visible: Platform.OS === 'ios' };

		this.setState(nextState);
		if (Platform.OS === 'android') {
			this._submitDate();
		}
	}

	private _submitDate() {
		const date = this.state.date;
		const dateStr = dateToStr(date, this.props.format || DefaultFormat[this.props.mode]);
		this.props.onDateChange(dateStr, date);
	}

	private _cancelHandler() {
		this.props.onDateChange(undefined, undefined);
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
			Animated.timing(this.state.animatedTranslateY, {
				toValue: isShow ? SHOW_TRANSLATE_Y : HIDE_TRANSLATE_Y,
				duration: ANIMATION_DURATION,
			}),
			Animated.timing(this.state.animatedOpacity, {
				toValue: isShow ? SHOW_OPACITY : HIDE_OPACITY,
				duration: ANIMATION_DURATION,
			}),
		]).start(() => {
			if (!isShow) {
				this.setState({ visible: false });
			}
		});
	}
}

export function dateToStr(date: Date, format: string): string {
	return moment(date).format(format);
}

export default DatePicker;
