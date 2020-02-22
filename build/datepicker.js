var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React, { Component } from 'react';
import { View, Text, Image, Modal, TouchableHighlight, DatePickerAndroid, TimePickerAndroid, DatePickerIOS, Platform, Animated, Keyboard } from 'react-native';
import Style from './style';
import moment from 'moment';
export var Mode;
(function (Mode) {
    Mode["date"] = "date";
    Mode["datetime"] = "datetime";
    Mode["time"] = "time";
})(Mode || (Mode = {}));
;
export var AndroidMode;
(function (AndroidMode) {
    AndroidMode["default"] = "default";
    AndroidMode["calendar"] = "calendar";
    AndroidMode["spinner"] = "spinner";
})(AndroidMode || (AndroidMode = {}));
export var Format;
(function (Format) {
    Format["date"] = "YYYY-MM-DD";
    Format["datetime"] = "YYYY-MM-DD HH:mm";
    Format["time"] = "HH:mm";
})(Format || (Format = {}));
export var SupportedOrientations;
(function (SupportedOrientations) {
    SupportedOrientations["portrait"] = "portrait";
    SupportedOrientations["portraitUpsideDown"] = "portrait-upside-down";
    SupportedOrientations["landscape"] = "landscape";
})(SupportedOrientations || (SupportedOrientations = {}));
var SUPPORTED_ORIENTATIONS = ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'];
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            date: _this.getDate(),
            modalVisible: false,
            animatedHeight: new Animated.Value(props.height),
            opacity: new Animated.Value(0),
            allowPointerEvents: true
        };
        _this.getDate = _this.getDate.bind(_this);
        _this.getDateStr = _this.getDateStr.bind(_this);
        _this.datePicked = _this.datePicked.bind(_this);
        _this.onPressDate = _this.onPressDate.bind(_this);
        _this.onPressCancel = _this.onPressCancel.bind(_this);
        _this.onPressConfirm = _this.onPressConfirm.bind(_this);
        _this.onDateChange = _this.onDateChange.bind(_this);
        _this.onPressMask = _this.onPressMask.bind(_this);
        _this.onDatePicked = _this.onDatePicked.bind(_this);
        _this.onTimePicked = _this.onTimePicked.bind(_this);
        _this.onDatetimePicked = _this.onDatetimePicked.bind(_this);
        _this.onDatetimeTimePicked = _this.onDatetimeTimePicked.bind(_this);
        _this.setModalVisible = _this.setModalVisible.bind(_this);
        return _this;
    }
    DatePicker.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (nextProps.date !== this.props.date) {
            this.setState({ date: this.getDate(nextProps.date) });
        }
    };
    DatePicker.prototype.setModalVisible = function (visible) {
        var _this = this;
        var _a = this.props, height = _a.height, duration = _a.duration;
        // slide animation
        if (visible) {
            this.setState({ modalVisible: visible });
            Animated.parallel([
                Animated.timing(this.state.animatedHeight, {
                    toValue: 0,
                    duration: duration
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: duration
                })
            ]).start();
        }
        else {
            Animated.parallel([
                Animated.timing(this.state.animatedHeight, {
                    toValue: height,
                    duration: duration
                }),
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: duration
                })
            ]).start(function () {
                _this.setState({ modalVisible: visible });
            });
        }
    };
    // onStartShouldSetResponder(e) {
    //   return true;
    // }
    // onMoveShouldSetResponder(e) {
    //   return true;
    // }
    DatePicker.prototype.onPressMask = function () {
        if (typeof this.props.onPressMask === 'function') {
            this.props.onPressMask();
        }
        else {
            this.onPressCancel();
        }
    };
    DatePicker.prototype.onPressCancel = function () {
        this.setModalVisible(false);
        if (typeof this.props.onCloseModal === 'function') {
            this.props.onCloseModal();
        }
    };
    DatePicker.prototype.onPressConfirm = function () {
        this.datePicked();
        this.setModalVisible(false);
        if (typeof this.props.onCloseModal === 'function') {
            this.props.onCloseModal();
        }
    };
    DatePicker.prototype.getDate = function (date) {
        if (date === void 0) { date = this.props.date; }
        var _a = this.props, mode = _a.mode, minDate = _a.minDate, maxDate = _a.maxDate, _b = _a.format, format = _b === void 0 ? Format[mode] : _b;
        if (!date) {
            var now = new Date();
            if (minDate) {
                var _minDate = this.getDate(minDate);
                if (now < _minDate) {
                    return _minDate;
                }
            }
            if (maxDate) {
                var _maxDate = this.getDate(maxDate);
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
    };
    DatePicker.prototype.getDateStr = function (date) {
        if (date === void 0) { date = this.props.date; }
        var _a = this.props, mode = _a.mode, _b = _a.format, format = _b === void 0 ? Format[mode] : _b;
        var dateInstance = date instanceof Date
            ? date
            : this.getDate(date);
        if (typeof this.props.getDateStr === 'function') {
            return this.props.getDateStr(dateInstance);
        }
        return moment(dateInstance).format(format);
    };
    DatePicker.prototype.datePicked = function () {
        if (typeof this.props.onDateChange === 'function') {
            this.props.onDateChange(this.getDateStr(this.state.date), this.state.date);
        }
    };
    DatePicker.prototype.getTitleElement = function () {
        var _a = this.props, date = _a.date, placeholder = _a.placeholder, customStyles = _a.customStyles, allowFontScaling = _a.allowFontScaling;
        if (!date && placeholder) {
            return (React.createElement(Text, { allowFontScaling: allowFontScaling, style: [Style.placeholderText, customStyles.placeholderText] }, placeholder));
        }
        return (React.createElement(Text, { allowFontScaling: allowFontScaling, style: [Style.dateText, customStyles.dateText] }, this.getDateStr()));
    };
    DatePicker.prototype.onDateChange = function (date) {
        var _this = this;
        this.setState({
            allowPointerEvents: false,
            date: date
        });
        var timeoutId = setTimeout(function () {
            _this.setState({
                allowPointerEvents: true
            });
            clearTimeout(timeoutId);
        }, 200);
    };
    DatePicker.prototype.onDatePicked = function (_a) {
        var action = _a.action, year = _a.year, month = _a.month, day = _a.day;
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({
                date: new Date(year, month, day)
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    };
    DatePicker.prototype.onTimePicked = function (_a) {
        var action = _a.action, hour = _a.hour, minute = _a.minute;
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({
                date: moment().hour(hour).minute(minute).toDate()
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    };
    DatePicker.prototype.onDatetimePicked = function (_a) {
        var action = _a.action, year = _a.year, month = _a.month, day = _a.day;
        var _b = this.props, mode = _b.mode, androidMode = _b.androidMode, _c = _b.format, format = _c === void 0 ? Format[mode] : _c, _d = _b.is24Hour, is24Hour = _d === void 0 ? !format.match(/h|a/) : _d;
        if (action !== DatePickerAndroid.dismissedAction) {
            var timeMoment = moment(this.state.date);
            TimePickerAndroid.open({
                hour: timeMoment.hour(),
                minute: timeMoment.minutes(),
                is24Hour: is24Hour,
                mode: androidMode
            }).then(this.onDatetimeTimePicked.bind(this, year, month, day));
        }
        else {
            this.onPressCancel();
        }
    };
    DatePicker.prototype.onDatetimeTimePicked = function (year, month, day, _a) {
        var action = _a.action, hour = _a.hour, minute = _a.minute;
        if (action !== DatePickerAndroid.dismissedAction) {
            this.setState({
                date: new Date(year, month, day, hour, minute)
            });
            this.datePicked();
        }
        else {
            this.onPressCancel();
        }
    };
    DatePicker.prototype.onPressDate = function () {
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
        }
        else {
            var _a = this.props, mode = _a.mode, androidMode = _a.androidMode, _b = _a.format, format = _b === void 0 ? Format[mode] : _b, minDate = _a.minDate, maxDate = _a.maxDate, _c = _a.is24Hour, is24Hour = _c === void 0 ? !format.match(/h|a/) : _c;
            if (mode === 'date') {
                DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate && this.getDate(minDate),
                    maxDate: maxDate && this.getDate(maxDate),
                    mode: androidMode
                }).then(this.onDatePicked);
            }
            else if (mode === 'time') {
                var timeMoment = moment(this.state.date);
                TimePickerAndroid.open({
                    hour: timeMoment.hour(),
                    minute: timeMoment.minutes(),
                    is24Hour: is24Hour,
                    mode: androidMode
                }).then(this.onTimePicked);
            }
            else if (mode === 'datetime') {
                DatePickerAndroid.open({
                    date: this.state.date,
                    minDate: minDate && this.getDate(minDate),
                    maxDate: maxDate && this.getDate(maxDate),
                    mode: androidMode
                }).then(this.onDatetimePicked);
            }
        }
        if (typeof this.props.onOpenModal === 'function') {
            this.props.onOpenModal();
        }
    };
    DatePicker.prototype._renderIcon = function () {
        var _a = this.props, showIcon = _a.showIcon, iconSource = _a.iconSource, iconComponent = _a.iconComponent, customStyles = _a.customStyles;
        if (showIcon) {
            if (iconComponent) {
                return iconComponent;
            }
            return (React.createElement(Image, { style: [Style.dateIcon, customStyles.dateIcon], source: iconSource }));
        }
        return null;
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, mode = _a.mode, style = _a.style, customStyles = _a.customStyles, disabled = _a.disabled, minDate = _a.minDate, maxDate = _a.maxDate, minuteInterval = _a.minuteInterval, timeZoneOffsetInMinutes = _a.timeZoneOffsetInMinutes, cancelBtnText = _a.cancelBtnText, confirmBtnText = _a.confirmBtnText, TouchableComponent = _a.TouchableComponent, testID = _a.testID, cancelBtnTestID = _a.cancelBtnTestID, confirmBtnTestID = _a.confirmBtnTestID, allowFontScaling = _a.allowFontScaling, locale = _a.locale, height = _a.height;
        var dateInputStyle = [
            Style.dateInput, customStyles.dateInput,
            disabled && Style.disabled,
            disabled && customStyles.disabled
        ];
        return (React.createElement(TouchableComponent, { style: [Style.dateTouch, style], underlayColor: 'transparent', onPress: this.onPressDate, testID: testID },
            React.createElement(View, { style: [Style.dateTouchBody, customStyles.dateTouchBody] },
                !this.props.hideText ?
                    React.createElement(View, { style: dateInputStyle }, this.getTitleElement())
                    :
                        React.createElement(View, null),
                this._renderIcon(),
                Platform.OS === 'ios' && React.createElement(Modal, { transparent: true, animationType: "none", visible: this.state.modalVisible, supportedOrientations: SUPPORTED_ORIENTATIONS, onRequestClose: function () { _this.setModalVisible(false); } },
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Animated.View, { style: { flex: 1, opacity: this.state.opacity } },
                            React.createElement(TouchableComponent, { style: Style.datePickerMask, activeOpacity: 1, underlayColor: '#00000077', onPress: this.onPressMask },
                                React.createElement(TouchableComponent, { underlayColor: '#fff', style: { flex: 1 } },
                                    React.createElement(Animated.View, { style: [
                                            Style.datePickerCon,
                                            { height: height, transform: [{ translateY: this.state.animatedHeight }] },
                                            customStyles.datePickerCon
                                        ] },
                                        React.createElement(View, { pointerEvents: this.state.allowPointerEvents ? 'auto' : 'none' },
                                            React.createElement(DatePickerIOS, { date: this.state.date, mode: mode, minimumDate: minDate && this.getDate(minDate), maximumDate: maxDate && this.getDate(maxDate), onDateChange: this.onDateChange, minuteInterval: minuteInterval, timeZoneOffsetInMinutes: timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : null, style: [Style.datePicker, customStyles.datePicker], locale: locale })),
                                        React.createElement(TouchableComponent, { underlayColor: 'transparent', onPress: this.onPressCancel, style: [Style.btnText, Style.btnCancel, customStyles.btnCancel], testID: cancelBtnTestID },
                                            React.createElement(Text, { allowFontScaling: allowFontScaling, style: [Style.btnTextText, Style.btnTextCancel, customStyles.btnTextCancel] }, cancelBtnText)),
                                        React.createElement(TouchableComponent, { underlayColor: 'transparent', onPress: this.onPressConfirm, style: [Style.btnText, Style.btnConfirm, customStyles.btnConfirm], testID: confirmBtnTestID },
                                            React.createElement(Text, { allowFontScaling: allowFontScaling, style: [Style.btnTextText, customStyles.btnTextConfirm] }, confirmBtnText)))))))))));
    };
    DatePicker.defaultProps = {
        mode: 'date',
        androidMode: 'default',
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
        modalOnResponderTerminationRequest: function () { return true; }
    };
    return DatePicker;
}(Component));
export default DatePicker;
//# sourceMappingURL=datepicker.js.map