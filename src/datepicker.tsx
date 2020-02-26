import React, { Component, ComponentClass } from 'react';
import {
	View,
	Text,
	Image,
	Modal,
	TouchableHighlight,
	TouchableHighlightProps,
	TouchableNativeFeedbackProps,
	TouchableOpacityProps,
	TouchableWithoutFeedbackProps,
	DatePickerAndroid,
	TimePickerAndroid,
	DatePickerIOS,
	Platform,
	Animated,
	Keyboard,
	ViewStyle,
	ImageStyle,
	TextStyle,
	StyleProp,
	ImageSourcePropType,
} from 'react-native';
import Style from './style';
import moment from 'moment';

interface IProps {
	style?: StyleProp<ViewStyle>;
	height?: number;
	date?: string | Date;
	minDate?: string | Date;
	maxDate?: string | Date;
	duration?: number;
	mode?: Mode;
	format?: Format;
	androidDatetimeMode?: AndroidDatetimeMode;
	androidTimeMode?: AndroidTimeMode;
	confirmBtnText?: string;
	cancelBtnText?: string;
	customStyles?: ICustomStyles;
	showIcon?: boolean;
	disabled?: boolean;
	allowFontScaling?: boolean;
	hideText?: boolean;
	placeholder?: string;
	TouchableComponent?: Touchable;
	is24Hour?: boolean;
	iconSource?: ImageSourcePropType;
	minuteInterval?: MinuteInterval;
	timeZoneOffsetInMinutes?: number;
	locale?: string;
	iconComponent?: Component;
	getDateStr?: (date: Date) => string;
	onDateChange: (dateStr: string, date: Date | string) => any;
	onPressMask?: () => void;
	onCloseModal?: () => void;
	onOpenModal?: () => void;
}

interface ICustomStyles {
	placeholderText: StyleProp<TextStyle>;
	dateText: StyleProp<TextStyle>;
	btnTextConfirm: StyleProp<TextStyle>;
	btnConfirm: StyleProp<ViewStyle>;
	btnTextCancel: StyleProp<TextStyle>;
	btnCancel: StyleProp<ViewStyle>;
	datePicker: StyleProp<ViewStyle>;
	dateIcon: StyleProp<ImageStyle>;
	datePickerCon: StyleProp<ViewStyle>;
	dateInput: StyleProp<ViewStyle>;
	disabled: StyleProp<ViewStyle>;
	dateTouchBody: StyleProp<ViewStyle>;
}

export enum Mode {
	date = 'date',
	datetime = 'datetime',
	time = 'time',
}

export enum AndroidDatetimeMode {
	default = 'default',
	calendar = 'calendar',
	spinner = 'spinner',
}

export enum AndroidTimeMode {
	default = 'default',
	clock = 'clock',
	spinner = 'spinner',
}

export enum Format {
	date = 'YYYY-MM-DD',
	datetime = 'YYYY-MM-DD HH:mm',
	time = 'HH:mm',
}

interface IDatePickerAndroidOpenReturn {
	action: 'dateSetAction' | 'dismissedAction';
	year?: number;
	month?: number;
	day?: number;
}
interface ITimePickerAndroidOpenReturn {
	action: 'timeSetAction' | 'dismissedAction';
	hour?: number;
	minute?: number;
}

interface IState {
	date: Date;
	modalVisible: boolean;
	animatedHeight: Animated.Value;
	opacity: Animated.Value;
	allowPointerEvents: boolean;
}

const SUPPORTED_ORIENTATIONS: SupportedOrientations[] = [
	'portrait',
	'portrait-upside-down',
	'landscape',
	'landscape-left',
	'landscape-right',
];

type SupportedOrientations = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
type Touchable = ComponentClass<TouchableHighlightProps> |
	ComponentClass<TouchableNativeFeedbackProps> |
	ComponentClass<TouchableOpacityProps> |
	ComponentClass<TouchableWithoutFeedbackProps>;
type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;

class DatePicker extends Component<IProps> {
	public static defaultProps = {
		mode: 'date',
		androidDatetimeMode: AndroidDatetimeMode.default,
		androidTimeMode: AndroidTimeMode.default,
		date: '',
		height: 259,

		// slide animation duration time, default to 300ms, IOS only
		duration: 300,
		confirmBtnText: 'Confirm',
		cancelBtnText: 'Cancel',
		iconSource: require('./date_icon.png'),
		customStyles: {},

		// whether or not show the icon
		showIcon: true,
		disabled: false,
		allowFontScaling: true,
		hideText: false,
		placeholder: '',
		TouchableComponent: TouchableHighlight,
		modalOnResponderTerminationRequest: () => true,
	};
	public readonly state: IState;

	constructor(props: IProps) {
		super(props);

		this.state = {
			date: this.getDate(),
			modalVisible: false,
			animatedHeight: new Animated.Value(props.height),
			opacity: new Animated.Value(0),
			allowPointerEvents: true,
		};

		this.getDate = this.getDate.bind(this);
		this.getDateStr = this.getDateStr.bind(this);
		this.datePicked = this.datePicked.bind(this);
		this.onPressDate = this.onPressDate.bind(this);
		this.onPressCancel = this.onPressCancel.bind(this);
		this.onPressConfirm = this.onPressConfirm.bind(this);
		this.onDateChange = this.onDateChange.bind(this);
		this.onPressMask = this.onPressMask.bind(this);
		this.onDatePicked = this.onDatePicked.bind(this);
		this.onTimePicked = this.onTimePicked.bind(this);
		this.onDatetimePicked = this.onDatetimePicked.bind(this);
		this.onDatetimeTimePicked = this.onDatetimeTimePicked.bind(this);
		this.setModalVisible = this.setModalVisible.bind(this);
	}

	public render() {
		const {
			mode,
			style,
			customStyles,
			disabled,
			minDate,
			maxDate,
			minuteInterval,
			timeZoneOffsetInMinutes,
			cancelBtnText,
			confirmBtnText,
			TouchableComponent,
			allowFontScaling,
			locale,
			height,
		} = this.props;

		const dateInputStyle = [
			Style.dateInput, customStyles.dateInput,
			disabled && Style.disabled,
			disabled && customStyles.disabled,
		];

		return (
			<TouchableComponent
				style={[Style.dateTouch, style]}
				underlayColor={'transparent'}
				onPress={this.onPressDate}
			>
				<View style={[Style.dateTouchBody, customStyles.dateTouchBody]}>
					{
						!this.props.hideText ?
							<View style={dateInputStyle}>
								{this.getTitleElement()}
							</View>
							:
							<View/>
					}
					{this._renderIcon()}
					{Platform.OS === 'ios' && <Modal
						transparent={true}
						animationType="none"
						visible={this.state.modalVisible}
						supportedOrientations={SUPPORTED_ORIENTATIONS}
						onRequestClose={() => {this.setModalVisible(false); }}
					>
						<View
							style={{flex: 1}}
						>
							<Animated.View style={{flex: 1, opacity: this.state.opacity}}>
								<TouchableComponent
									style={Style.datePickerMask}
									activeOpacity={1}
									underlayColor={'#00000077'}
									onPress={this.onPressMask}
								>
									<TouchableComponent
										underlayColor={'#fff'}
										style={{flex: 1}}
									>
										<Animated.View
											style={[
												Style.datePickerCon,
												{height, transform: [{translateY: this.state.animatedHeight}]},
												customStyles.datePickerCon,
											]}
										>
											<View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
												<DatePickerIOS
													date={this.state.date}
													mode={mode}
													minimumDate={minDate ? this.getDate(minDate) : undefined}
													maximumDate={maxDate ? this.getDate(maxDate) : undefined}
													onDateChange={this.onDateChange}
													minuteInterval={minuteInterval}
													timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : undefined}
													style={[Style.datePicker, customStyles.datePicker]}
													locale={locale}
												/>
											</View>
											<TouchableComponent
												underlayColor={'transparent'}
												onPress={this.onPressCancel}
												style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}
											>
												<Text
													allowFontScaling={allowFontScaling}
													style={[Style.btnTextText, Style.btnTextCancel, customStyles.btnTextCancel]}
												>
													{cancelBtnText}
												</Text>
											</TouchableComponent>
											<TouchableComponent
												underlayColor={'transparent'}
												onPress={this.onPressConfirm}
												style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}
											>
												<Text allowFontScaling={allowFontScaling}
													style={[Style.btnTextText, customStyles.btnTextConfirm]}
												>
													{confirmBtnText}
												</Text>
											</TouchableComponent>
										</Animated.View>
									</TouchableComponent>
								</TouchableComponent>
							</Animated.View>
						</View>
					</Modal>}
				</View>
			</TouchableComponent>
		);
	}

	public UNSAFE_componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.date !== this.props.date) {
			this.setState({date: this.getDate(nextProps.date)});
		}
	}

	private setModalVisible(visible: boolean) {
		const { height, duration } = this.props;

		// slide animation
		if (visible) {
			this.setState({modalVisible: visible});
			Animated.parallel([
				Animated.timing(
					this.state.animatedHeight,
					{
						toValue: 0,
						duration,
					},
				),
				Animated.timing(
					this.state.opacity,
					{
						toValue: 1,
						duration,
					},
				),
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(
					this.state.animatedHeight,
					{
						toValue: height,
						duration,
					},
				),
				Animated.timing(
					this.state.opacity,
					{
						toValue: 0,
						duration,
					},
				),
			]).start(() => {
				this.setState({modalVisible: visible});
			});
		}
	}

	// onStartShouldSetResponder(e) {
	//   return true;
	// }

	// onMoveShouldSetResponder(e) {
	//   return true;
	// }

	private onPressMask() {
		if (typeof this.props.onPressMask === 'function') {
			this.props.onPressMask();
		} else {
			this.onPressCancel();
		}
	}

	private onPressCancel() {
		this.setModalVisible(false);

		if (typeof this.props.onCloseModal === 'function') {
			this.props.onCloseModal();
		}
	}

	private onPressConfirm() {
		this.datePicked();
		this.setModalVisible(false);

		if (typeof this.props.onCloseModal === 'function') {
			this.props.onCloseModal();
		}
	}

	private getDate(date = this.props.date) {
		const {mode, minDate, maxDate, format = Format[mode]} = this.props;

		if (!date) {
			const now = new Date();
			if (minDate) {
				const minDateInstance: Date = this.getDate(minDate);

				if (now < minDateInstance) {
					return minDateInstance;
				}
			}

			if (maxDate) {
				const maxDateInstance: Date = this.getDate(maxDate);

				if (now > maxDateInstance) {
					return maxDateInstance;
				}
			}

			return now;
		}

		if (date instanceof Date) {
			return date;
		}

		return moment(date, format).toDate();
	}

	private getDateStr(date = this.props.date) {
		const {mode, format = Format[mode]} = this.props;

		const dateInstance = date instanceof Date
			? date
			: this.getDate(date);

		if (typeof this.props.getDateStr === 'function') {
			return this.props.getDateStr(dateInstance);
		}

		return moment(dateInstance).format(format);
	}

	private datePicked() {
		if (typeof this.props.onDateChange === 'function') {
			this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
		}
	}

	private getTitleElement() {
		const {date, placeholder, customStyles, allowFontScaling} = this.props;

		if (!date && placeholder) {
			return (
				<Text allowFontScaling={allowFontScaling} style={[Style.placeholderText, customStyles.placeholderText]}>
					{placeholder}
				</Text>
			);
		}
		return (
			<Text allowFontScaling={allowFontScaling} style={[Style.dateText, customStyles.dateText]}>
				{this.getDateStr()}
			</Text>
		);
	}

	private onDateChange(date: Date) {
		this.setState({
			allowPointerEvents: false,
			date,
		});
		const timeoutId = setTimeout(() => {
			this.setState({
				allowPointerEvents: true,
			});
			clearTimeout(timeoutId);
		}, 200);
	}

	private onDatePicked({ action, year, month, day }: IDatePickerAndroidOpenReturn) {
		if (action !== DatePickerAndroid.dismissedAction && year && month && day) {
			this.setState({
				date: new Date(year, month, day),
			});
			this.datePicked();
		} else {
			this.onPressCancel();
		}
	}

	private onTimePicked({action, hour, minute}: ITimePickerAndroidOpenReturn) {
		if (action !== DatePickerAndroid.dismissedAction && hour && minute) {
			this.setState({
				date: moment().hour(hour).minute(minute).toDate(),
			});
			this.datePicked();
		} else {
			this.onPressCancel();
		}
	}

	private async onDatetimePicked({action, year, month, day}: IDatePickerAndroidOpenReturn) {
		const {mode, androidTimeMode, format = Format[mode], is24Hour = !format.match(/h|a/)} = this.props;

		if (action !== DatePickerAndroid.dismissedAction) {
			const timeMoment = moment(this.state.date);

			const timePickerResult = await TimePickerAndroid.open({
				hour: timeMoment.hour(),
				minute: timeMoment.minutes(),
				is24Hour,
				mode: androidTimeMode,
			});
			const args = { year, month, day, timePickerResult };
			this.onDatetimeTimePicked.call(this, args);
		} else {
			this.onPressCancel();
		}
	}

	private onDatetimeTimePicked(
		year: number, month: number, day: number, timePickerResult: ITimePickerAndroidOpenReturn,
	) {
		const {action, hour, minute} = timePickerResult;
		if (action !== DatePickerAndroid.dismissedAction) {
			this.setState({
				date: new Date(year, month, day, hour, minute),
			});
			this.datePicked();
		} else {
			this.onPressCancel();
		}
	}

	private async onPressDate() {
		if (this.props.disabled) {
			return;
		}

		Keyboard.dismiss();

		// reset state
		this.setState({
			date: this.getDate(),
		});

		if (Platform.OS === 'ios') {
			this.setModalVisible(true);
		} else {

			const {mode, androidDatetimeMode, androidTimeMode, format = Format[mode], minDate, maxDate, is24Hour = !format.match(/h|a/)} = this.props;

			if (mode === 'date') {
				const result = await DatePickerAndroid.open({
					date: this.state.date,
					minDate: minDate ? this.getDate(minDate) : undefined,
					maxDate: maxDate ? this.getDate(maxDate) : undefined,
					mode: androidDatetimeMode,
				});
				this.onDatePicked(result);
			} else if (mode === 'time') {
				const timeMoment = moment(this.state.date);
				const result = await TimePickerAndroid.open({
					hour: timeMoment.hour(),
					minute: timeMoment.minutes(),
					is24Hour,
					mode: androidTimeMode,
				});
				this.onTimePicked(result);
			} else if (mode === 'datetime') {
				const result = await DatePickerAndroid.open({
					date: this.state.date,
					minDate: minDate ? this.getDate(minDate) : undefined,
					maxDate: maxDate ? this.getDate(maxDate) : undefined,
					mode: androidDatetimeMode,
				});
				this.onDatetimePicked(result);
			}
		}

		if (typeof this.props.onOpenModal === 'function') {
			this.props.onOpenModal();
		}
	}

	private _renderIcon() {
		const {
			showIcon,
			iconSource,
			iconComponent,
			customStyles,
		} = this.props;

		if (showIcon) {
			if (iconComponent) {
				return iconComponent;
			}
			return (
				<Image
					style={[Style.dateIcon, customStyles.dateIcon]}
					source={iconSource || require('./date_icon.png')}
				/>
			);
		}

		return null;
	}
}

export default DatePicker;
