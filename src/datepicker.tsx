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
	StyleSheet,
} from 'react-native';
import * as moment from 'moment';
const IOS_DEFAULT_TINT_COLOR = '#007AFF';
const IOS_DATEPICKER_HEIGHT = 259;
const SHOW_OPACITY = 0.7;
const HIDE_OPACITY = 0;
const SHOW_TRANSLATE_Y = 0;
const HIDE_TRANSLATE_Y = IOS_DATEPICKER_HEIGHT;

interface IBaseProps {
	visible: boolean;
	format?: string;
	onDateChange: (dateStr?: string, date?: Date) => any;
	date: string | Date;
	maximumDate?: Date;
	minimumDate?: Date;
}

interface IIOSProps extends IBaseProps {
	mode: IOSMode;
	timeZoneOffsetInMinutes?: number;
	textColor?: string;
	locale?: string;
	minuteInterval?: MinuteInterval;
	confirmText?: string;
	cancelText?: string;
	confirmTextStyle?: StyleProp<TextStyle>;
	cancelTextStyle?: StyleProp<TextStyle>;
}

interface IAndroidProps extends IBaseProps {
	mode: AndroidMode;
	display?: Display;
	is24Hour?: boolean;
}

export type IProps = IIOSProps | IAndroidProps;

enum DefaultFormat {
	date = 'YYYY-MM-DD',
	datetime = 'YYYY-MM-DD HH:mm',
	time = 'HH:mm',
	countdown = 'HH:mm',
}

export interface IDeafaultProps {
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
type IOSMode = 'date' | 'datetime' | 'time' | 'countdown';
type AndroidMode = 'date' | 'time';
type Mode = IOSMode | AndroidMode;
type SupportedOrientations = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;
type Display = 'default' | 'calendar' | 'spinner' | 'clock';

class DatePicker extends React.Component<IProps> {
	public static defaultProps: IDeafaultProps = {
		mode: 'date',
		date: new Date(),
		confirmText: 'Confirm',
		cancelText: 'Cancel',
	};

	public readonly state: IState;

	constructor(props: IProps) {
		super(props);
		const firstOpacity = props.visible ? SHOW_OPACITY : HIDE_OPACITY;
		const firstTranslateY = props.visible ? SHOW_TRANSLATE_Y : HIDE_TRANSLATE_Y;
		this.state = {
			visible: props.visible === true ? true : false,
			date: props.date ? new Date(props.date) : new Date(),
			animatedOpacity: new Animated.Value(firstOpacity),
			animatedTranslateY: new Animated.Value(firstTranslateY),
		};
	}

	public render() {
		const props = this.props;
		const { minimumDate, maximumDate } = props;

		const androidProps = props as IAndroidProps;
		const { mode: androidMode, display, is24Hour } = androidProps;
		const iosProps = props as IIOSProps;
		const {
			mode: iosMode,
			timeZoneOffsetInMinutes,
			textColor,
			locale,
			confirmText,
			cancelText,
			confirmTextStyle,
			cancelTextStyle,
			minuteInterval,
		} = iosProps;

		const DateTimePicker = (
			<RNDateTimePicker
				value={this.state.date}
				minuteInterval={minuteInterval}
				onChange={(event, date) => this._onDateChange(event, date)}
				mode={androidMode || iosMode}
				maximumDate={maximumDate}
				minimumDate={minimumDate}
				timeZoneOffsetInMinutes={timeZoneOffsetInMinutes}
				textColor={textColor}
				locale={locale}
				display={display}
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
				<View style={styles.container}>
					<Animated.View
						style={[
							styles.blackBackLayer,
							{
								opacity: this.state.animatedOpacity,
							},
						]}
					>
						<TouchableWithoutFeedback onPress={() => this._cancelHandler()}>
							<View style={styles.touchableBackLayer}></View>
						</TouchableWithoutFeedback>
						<Animated.View
							style={[styles.iosBottomContainer, { transform: [{ translateY: this.state.animatedTranslateY }] }]}
						>
							<View style={styles.iosButtonContainer}>
								<TouchableOpacity style={styles.cancelButton} onPress={() => this._cancelHandler()}>
									<Text style={[styles.defaultCancelTxt, cancelTextStyle]}>{cancelText}</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.confirmButton} onPress={() => this._submitDate()}>
									<Text style={[styles.defaultConfirmTxt, confirmTextStyle]}>{confirmText}</Text>
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
		this.props.onDateChange();
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

const styles = StyleSheet.create({
	container: { flex: 1 },
	blackBackLayer: { flex: 1, backgroundColor: '#000000' },
	touchableBackLayer: { flex: 1 },
	iosBottomContainer: { backgroundColor: '#fff', height: IOS_DATEPICKER_HEIGHT },
	iosButtonContainer: {
		backgroundColor: '#fff',
		flex: 1,
		flexDirection: 'row',
		alignContent: 'center',
	},
	cancelButton: {
		left: 0,
		marginLeft: 24,
		marginTop: 8,
		height: '100%',
	},
	confirmButton: {
		right: 0,
		marginRight: 24,
		marginTop: 8,
		position: 'absolute',
		height: '100%',
	},
	defaultCancelTxt: { color: '#0a0a0a', fontWeight: '600' },
	defaultConfirmTxt: { color: IOS_DEFAULT_TINT_COLOR, fontWeight: '600' },
});

export default DatePicker;
