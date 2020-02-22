import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
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
	DatePickerAndroidOpenReturn,
	TimePickerAndroidOpenReturn,
} from 'react-native';
import Style from './style';
import moment from 'moment';

interface IProps {
	style: StyleProp<ViewStyle>
	height: number;
	date: string | Date;
	minDate: string | Date;
	maxDate: string | Date;
	duration: number;
	mode: Mode;
	format: Format
	androidDatetimeMode: AndroidDatetimeMode;
	androidTimeMode: AndroidTimeMode;
	confirmBtnText: string;
	cancelBtnText: string;
	customStyles: CustomStyles;
	showIcon: boolean;
	disabled: boolean;
	allowFontScaling: boolean;
	hideText: boolean;
	placeholder: string;
	TouchableComponent: Touchable;
	is24Hour?: boolean;
	getDateStr: (date: Date) => string;
	onDateChange: (dateStr: string, date: Date | string) => any;
	onPressMask: Function | undefined;
	onCloseModal: Function | undefined;
}


interface CustomStyles {
	placeholderText: StyleProp<TextStyle>;
	dateText: StyleProp<TextStyle>;
	btnTextConfirm: StyleProp<TextStyle>;
	btnConfirm: StyleProp<ViewStyle>,
	btnTextCancel: StyleProp<TextStyle>
	btnCancel: StyleProp<ViewStyle>
	datePicker: StyleProp<ViewStyle>
}

type Touchable = TouchableHighlight | TouchableNativeFeedback | TouchableOpacity | TouchableWithoutFeedback;

export enum Mode {
	date = 'date',
	datetime = 'datetime',
	time = 'time'
};

export enum AndroidDatetimeMode { 
	default = 'default',
	calendar = 'calendar',
	spinner = 'spinner'
}

export enum AndroidTimeMode { 
	default = 'default',
	clock = 'clock',
	spinner = 'spinner'
}

export enum Format { 
	date = 'YYYY-MM-DD',
	datetime = 'YYYY-MM-DD HH:mm',
	time = 'HH:mm'
}

interface IState {
	date: Date;
	modalVisible: boolean;
	animatedHeight: Animated.Value;
	opacity: Animated.Value;
	allowPointerEvents: boolean;
}
enum SupportedOrientations {
	portrait = 'portrait',
	portraitUpsideDown = 'portrait-upside-down',
	landscape = 'landscape',
	landscapeLeft = 'landscape-left',
	landscapeRight = 'landscape-right',
}
const SUPPORTED_ORIENTATIONS: SupportedOrientations[] = [
	SupportedOrientations.portrait,
	SupportedOrientations.portraitUpsideDown,
	SupportedOrientations.landscape,
	SupportedOrientations.landscapeLeft,
	SupportedOrientations.landscapeRight,
];

class DatePicker extends Component<IProps> {
	public readonly state: IState;
	static defaultProps = {
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
		modalOnResponderTerminationRequest: () => true
	};

  constructor(props: IProps) {
    super(props);

    this.state = {
      date: this.getDate(),
      modalVisible: false,
      animatedHeight: new Animated.Value(props.height),
      opacity: new Animated.Value(0),
      allowPointerEvents: true
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
	
	UNSAFE_componentWillReceiveProps(nextProps: IProps) {
		if (nextProps.date !== this.props.date) {
      this.setState({date: this.getDate(nextProps.date)});
    }
	}

  setModalVisible(visible: boolean) {
    const { height, duration } = this.props;

    // slide animation
    if (visible) {
      this.setState({modalVisible: visible});
      Animated.parallel([
        Animated.timing(
          this.state.animatedHeight,
          {
            toValue: 0,
            duration: duration
          }
        ),
        Animated.timing(
          this.state.opacity,
          {
            toValue: 1,
            duration: duration
          }
        )
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(
          this.state.animatedHeight,
          {
            toValue: height,
            duration: duration
          }
        ),
        Animated.timing(
          this.state.opacity,
          {
            toValue: 0,
            duration: duration
          }
        )
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

  onPressMask() {
    if (typeof this.props.onPressMask === 'function') {
      this.props.onPressMask();
    } else {
      this.onPressCancel();
    }
  }

  onPressCancel() {
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

  onPressConfirm() {
    this.datePicked();
    this.setModalVisible(false);

    if (typeof this.props.onCloseModal === 'function') {
      this.props.onCloseModal();
    }
  }

  getDate(date = this.props.date) {
    const {mode, minDate, maxDate, format = Format[mode]} = this.props;

    if (!date) {
      let now = new Date();
      if (minDate) {
        let _minDate: Date = this.getDate(minDate);

        if (now < _minDate) {
          return _minDate;
        }
      }

      if (maxDate) {
        let _maxDate: Date = this.getDate(maxDate);

        if (now > _maxDate) {
          return _maxDate;
        }
      }

      return now;
    }

    if (date instanceof Date) {
      return date;
    }

    return moment(date, format).toDate();
  }

  getDateStr(date = this.props.date) {
    const {mode, format = Format[mode]} = this.props;

    const dateInstance = date instanceof Date
      ? date
      : this.getDate(date);

    if (typeof this.props.getDateStr === 'function') {
      return this.props.getDateStr(dateInstance);
    }

    return moment(dateInstance).format(format);
  }

  datePicked() {
    if (typeof this.props.onDateChange === 'function') {
      this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
    }
  }

  getTitleElement() {
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

  onDateChange(date: Date) {
    this.setState({
      allowPointerEvents: false,
      date: date
    });
    const timeoutId = setTimeout(() => {
      this.setState({
        allowPointerEvents: true
      });
      clearTimeout(timeoutId);
    }, 200);
  }

  onDatePicked({action, year, month, day}: DatePickerAndroidOpenReturn) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: new Date(year, month, day)
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  onTimePicked({action, hour, minute}: TimePickerAndroidOpenReturn) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: moment().hour(hour).minute(minute).toDate()
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  async onDatetimePicked({action, year, month, day}: DatePickerAndroidOpenReturn) {
    const {mode, androidTimeMode, format = Format[mode], is24Hour = !format.match(/h|a/)} = this.props;

    if (action !== DatePickerAndroid.dismissedAction) {
      let timeMoment = moment(this.state.date);

      const result = await TimePickerAndroid.open({
        hour: timeMoment.hour(),
        minute: timeMoment.minutes(),
        is24Hour: is24Hour,
        mode: androidTimeMode
			});
			this.onDatetimeTimePicked.call(this, year, month, day, result);
    } else {
      this.onPressCancel();
    }
  }

  onDatetimeTimePicked(year: number, month: number, day: number, {action, hour, minute}: TimePickerAndroidOpenReturn) {
    if (action !== DatePickerAndroid.dismissedAction) {
      this.setState({
        date: new Date(year, month, day, hour, minute)
      });
      this.datePicked();
    } else {
      this.onPressCancel();
    }
  }

  async onPressDate() {
    if (this.props.disabled) {
      return true;
    }

    Keyboard.dismiss();

    // reset state
    this.setState({
      date: this.getDate()
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
          mode: androidDatetimeMode
				});
				this.onDatePicked(result);
      } else if (mode === 'time') {
        let timeMoment = moment(this.state.date);
				const result = await TimePickerAndroid.open({
          hour: timeMoment.hour(),
          minute: timeMoment.minutes(),
          is24Hour: is24Hour,
          mode: androidTimeMode
				});
				this.onTimePicked(result);
      } else if (mode === 'datetime') {
				const result = await DatePickerAndroid.open({
          date: this.state.date,
          minDate: minDate ? this.getDate(minDate) : undefined,
          maxDate: maxDate ? this.getDate(maxDate) : undefined,
          mode: androidDatetimeMode
				});
				this.onDatetimePicked(result);
      }
    }

    if (typeof this.props.onOpenModal === 'function') {
      this.props.onOpenModal();
    }
  }

  _renderIcon() {
    const {
      showIcon,
      iconSource,
      iconComponent,
      customStyles
    } = this.props;

    if (showIcon) {
      if (iconComponent) {
        return iconComponent;
      }
      return (
        <Image
          style={[Style.dateIcon, customStyles.dateIcon]}
          source={iconSource}
        />
      );
    }

    return null;
  }

  render() {
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
      testID,
      cancelBtnTestID,
      confirmBtnTestID,
      allowFontScaling,
      locale,
			height,
    } = this.props;

    const dateInputStyle = [
      Style.dateInput, customStyles.dateInput,
      disabled && Style.disabled,
      disabled && customStyles.disabled
    ];

    return (
      <TouchableComponent
        style={[Style.dateTouch, style]}
        underlayColor={'transparent'}
        onPress={this.onPressDate}
        testID={testID}
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
            onRequestClose={() => {this.setModalVisible(false);}}
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
                        customStyles.datePickerCon
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
                          timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : null}
                          style={[Style.datePicker, customStyles.datePicker]}
                          locale={locale}
                        />
                      </View>
                      <TouchableComponent
                        underlayColor={'transparent'}
                        onPress={this.onPressCancel}
                        style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}
                        testID={cancelBtnTestID}
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
                        testID={confirmBtnTestID}
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
}

export default DatePicker;
