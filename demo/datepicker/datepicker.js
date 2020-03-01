"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const style_1 = require("./style");
const moment = require("moment");
var Mode;
(function (Mode) {
    Mode["date"] = "date";
    Mode["datetime"] = "datetime";
    Mode["time"] = "time";
})(Mode = exports.Mode || (exports.Mode = {}));
var AndroidDatetimeMode;
(function (AndroidDatetimeMode) {
    AndroidDatetimeMode["default"] = "default";
    AndroidDatetimeMode["calendar"] = "calendar";
    AndroidDatetimeMode["spinner"] = "spinner";
})(AndroidDatetimeMode = exports.AndroidDatetimeMode || (exports.AndroidDatetimeMode = {}));
var AndroidTimeMode;
(function (AndroidTimeMode) {
    AndroidTimeMode["default"] = "default";
    AndroidTimeMode["clock"] = "clock";
    AndroidTimeMode["spinner"] = "spinner";
})(AndroidTimeMode = exports.AndroidTimeMode || (exports.AndroidTimeMode = {}));
var Format;
(function (Format) {
    Format["date"] = "YYYY-MM-DD";
    Format["datetime"] = "YYYY-MM-DD HH:mm";
    Format["time"] = "HH:mm";
})(Format = exports.Format || (exports.Format = {}));
const SUPPORTED_ORIENTATIONS = [
    'portrait',
    'portrait-upside-down',
    'landscape',
    'landscape-left',
    'landscape-right',
];
class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: this.getDate(),
            modalVisible: false,
            animatedHeight: new react_native_1.Animated.Value(props.height),
            opacity: new react_native_1.Animated.Value(0),
            allowPointerEvents: true,
        };
        this.getDate = this.getDate.bind(this);
        this.getDateStr = this.getDateStr.bind(this);
        this.datePicked = this.datePicked.bind(this);
        this.onPressDate = this.onPressDate.bind(this);
        this.onPressCancel = this.onPressCancel.bind(this);
        this.onPressConfirm = this.onPressConfirm.bind(this);
        this._onDateChange = this._onDateChange.bind(this);
        this.onPressMask = this.onPressMask.bind(this);
        this.onDatePicked = this.onDatePicked.bind(this);
        this.onTimePicked = this.onTimePicked.bind(this);
        this.onDatetimePicked = this.onDatetimePicked.bind(this);
        this.onDatetimeTimePicked = this.onDatetimeTimePicked.bind(this);
        this.setModalVisible = this.setModalVisible.bind(this);
    }
    render() {
        const { mode, style, customStyles, disabled, minDate, maxDate, minuteInterval, timeZoneOffsetInMinutes, cancelBtnText, confirmBtnText, TouchableComponent, allowFontScaling, locale, height, } = this.props;
        const dateInputStyle = [
            style_1.default.dateInput, customStyles.dateInput,
            disabled && style_1.default.disabled,
            disabled && customStyles.disabled,
        ];
        return (<TouchableComponent style={[style_1.default.dateTouch, style]} underlayColor={'transparent'} onPress={this.onPressDate}>
				<react_native_1.View style={[style_1.default.dateTouchBody, customStyles.dateTouchBody]}>
					{!this.props.hideText ?
            <react_native_1.View style={dateInputStyle}>
								{this.getTitleElement()}
							</react_native_1.View>
            :
                <react_native_1.View />}
					{this._renderIcon()}
					{react_native_1.Platform.OS === 'ios' && <react_native_1.Modal transparent={true} animationType="none" visible={this.state.modalVisible} supportedOrientations={SUPPORTED_ORIENTATIONS} onRequestClose={() => { this.setModalVisible(false); }}>
						<react_native_1.View style={{ flex: 1 }}>
							<react_native_1.Animated.View style={{ flex: 1, opacity: this.state.opacity }}>
								<TouchableComponent style={style_1.default.datePickerMask} activeOpacity={1} underlayColor={'#00000077'} onPress={this.onPressMask}>
									<TouchableComponent underlayColor={'#fff'} style={{ flex: 1 }}>
										<react_native_1.Animated.View style={[
            style_1.default.datePickerCon,
            { height, transform: [{ translateY: this.state.animatedHeight }] },
            customStyles.datePickerCon,
        ]}>
											<react_native_1.View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
												<react_native_1.DatePickerIOS date={this.state.date} mode={mode} minimumDate={minDate ? this.getDate(minDate) : undefined} maximumDate={maxDate ? this.getDate(maxDate) : undefined} onDateChange={this._onDateChange} minuteInterval={minuteInterval} timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : undefined} style={[style_1.default.datePicker, customStyles.datePicker]} locale={locale}/>
											</react_native_1.View>
											<TouchableComponent underlayColor={'transparent'} onPress={this.onPressCancel} style={[style_1.default.btnText, style_1.default.btnCancel, customStyles.btnCancel]}>
												<react_native_1.Text allowFontScaling={allowFontScaling} style={[style_1.default.btnTextText, style_1.default.btnTextCancel, customStyles.btnTextCancel]}>
													{cancelBtnText}
												</react_native_1.Text>
											</TouchableComponent>
											<TouchableComponent underlayColor={'transparent'} onPress={this.onPressConfirm} style={[style_1.default.btnText, style_1.default.btnConfirm, customStyles.btnConfirm]}>
												<react_native_1.Text allowFontScaling={allowFontScaling} style={[style_1.default.btnTextText, customStyles.btnTextConfirm]}>
													{confirmBtnText}
												</react_native_1.Text>
											</TouchableComponent>
										</react_native_1.Animated.View>
									</TouchableComponent>
								</TouchableComponent>
							</react_native_1.Animated.View>
						</react_native_1.View>
					</react_native_1.Modal>}
				</react_native_1.View>
			</TouchableComponent>);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.date !== this.props.date) {
            this.setState({ date: this.getDate(nextProps.date) });
        }
    }
    onStartShouldSetResponder(e) {
        return true;
    }
    onMoveShouldSetResponder(e) {
        return true;
    }
    setModalVisible(visible) {
        const { height, duration } = this.props;
        // slide animation
        if (visible) {
            this.setState({ modalVisible: visible });
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.state.animatedHeight, {
                    toValue: 0,
                    duration,
                }),
                react_native_1.Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration,
                }),
            ]).start();
        }
        else {
            react_native_1.Animated.parallel([
                react_native_1.Animated.timing(this.state.animatedHeight, {
                    toValue: height,
                    duration,
                }),
                react_native_1.Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration,
                }),
            ]).start(() => {
                this.setState({ modalVisible: visible });
            });
        }
    }
    onPressMask() {
        if (typeof this.props.onPressMask === 'function') {
            this.props.onPressMask();
        }
        else {
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
        const { mode, minDate, maxDate, format = Format[mode] } = this.props;
        if (!date) {
            const now = new Date();
            if (minDate) {
                const minDateInstance = this.getDate(minDate);
                if (now < minDateInstance) {
                    return minDateInstance;
                }
            }
            if (maxDate) {
                const maxDateInstance = this.getDate(maxDate);
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
    getDateStr(date = this.props.date) {
        const { mode, format = Format[mode] } = this.props;
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
        const { date, placeholder, customStyles, allowFontScaling } = this.props;
        if (!date && placeholder) {
            return (<react_native_1.Text allowFontScaling={allowFontScaling} style={[style_1.default.placeholderText, customStyles.placeholderText]}>
					{placeholder}
				</react_native_1.Text>);
        }
        return (<react_native_1.Text allowFontScaling={allowFontScaling} style={[style_1.default.dateText, customStyles.dateText]}>
				{this.getDateStr()}
			</react_native_1.Text>);
    }
    _onDateChange(date) {
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
    onDatePicked({ action, year, month, day }) {
        if (action !== react_native_1.DatePickerAndroid.dismissedAction && year && month && day) {
            this.setState({
                date: new Date(year, month, day),
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    }
    onTimePicked({ action, hour, minute }) {
        if (action !== react_native_1.DatePickerAndroid.dismissedAction && hour && minute) {
            this.setState({
                date: moment().hour(hour).minute(minute).toDate(),
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    }
    async onDatetimePicked({ action, year, month, day }) {
        const { mode, androidTimeMode, format = Format[mode], is24Hour = !format.match(/h|a/) } = this.props;
        if (action !== react_native_1.DatePickerAndroid.dismissedAction) {
            const timeMoment = moment(this.state.date);
            const timePickerResult = await react_native_1.TimePickerAndroid.open({
                hour: timeMoment.hour(),
                minute: timeMoment.minutes(),
                is24Hour,
                mode: androidTimeMode,
            });
            if (year && month && day) {
                const args = { year, month, day, timePickerResult };
                this.onDatetimeTimePicked.call(this, args);
            }
        }
        else {
            this.onPressCancel();
        }
    }
    onDatetimeTimePicked(args) {
        const { year, month, day, timePickerResult } = args;
        const { action, hour, minute } = timePickerResult;
        if (action !== react_native_1.DatePickerAndroid.dismissedAction) {
            this.setState({
                date: new Date(year, month, day, hour, minute),
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    }
    async onPressDate() {
        if (this.props.disabled) {
            return;
        }
        react_native_1.Keyboard.dismiss();
        // reset state
        this.setState({
            date: this.getDate(),
        });
        if (react_native_1.Platform.OS === 'ios') {
            this.setModalVisible(true);
        }
        else {
            const { mode, androidDatetimeMode, androidTimeMode, format = Format[mode], minDate, maxDate, is24Hour = !format.match(/h|a/) } = this.props;
            if (mode === 'date') {
                const result = await react_native_1.DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate ? this.getDate(minDate) : undefined,
                    maxDate: maxDate ? this.getDate(maxDate) : undefined,
                    mode: androidDatetimeMode,
                });
                this.onDatePicked(result);
            }
            else if (mode === 'time') {
                const timeMoment = moment(this.state.date);
                const result = await react_native_1.TimePickerAndroid.open({
                    hour: timeMoment.hour(),
                    minute: timeMoment.minutes(),
                    is24Hour,
                    mode: androidTimeMode,
                });
                this.onTimePicked(result);
            }
            else if (mode === 'datetime') {
                const result = await react_native_1.DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate ? this.getDate(minDate) : undefined,
                    maxDate: maxDate ? this.getDate(maxDate) : undefined,
                    mode: androidDatetimeMode,
                });
                this.onDatetimePicked(result);
            }
            else {
                throw new Error('android datepicker mode not matching. please check mode property');
            }
        }
        if (typeof this.props.onOpenModal === 'function') {
            this.props.onOpenModal();
        }
    }
    _renderIcon() {
        const { showIcon, iconSource, iconComponent, customStyles, } = this.props;
        if (showIcon) {
            if (iconComponent) {
                return iconComponent;
            }
            return (<react_native_1.Image style={[style_1.default.dateIcon, customStyles.dateIcon]} source={iconSource || require('../date_icon.png')}/>);
        }
        return null;
    }
}
DatePicker.defaultProps = {
    mode: Mode.date,
    androidDatetimeMode: AndroidDatetimeMode.default,
    androidTimeMode: AndroidTimeMode.default,
    date: '',
    height: 259,
    // slide animation duration time, default to 300ms, IOS only
    duration: 300,
    confirmBtnText: 'Confirm',
    cancelBtnText: 'Cancel',
    iconSource: require('../date_icon.png'),
    customStyles: {
        placeholderText: {},
        dateText: {},
        btnTextConfirm: {},
        btnConfirm: {},
        btnTextCancel: {},
        btnCancel: {},
        datePicker: {},
        dateIcon: {},
        datePickerCon: {},
        dateInput: {},
        disabled: {},
        dateTouchBody: {},
    },
    // whether or not show the icon
    showIcon: true,
    disabled: false,
    allowFontScaling: true,
    hideText: false,
    placeholder: '',
    TouchableComponent: react_native_1.TouchableHighlight,
};
exports.default = DatePicker;
//# sourceMappingURL=datepicker.js.map