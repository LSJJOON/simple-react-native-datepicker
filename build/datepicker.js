var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Component } from 'react';
import { View, Text, Image, Modal, TouchableHighlight, DatePickerAndroid, TimePickerAndroid, DatePickerIOS, Platform, Animated, Keyboard, } from 'react-native';
import Style from './style';
import moment from 'moment';
export var Mode;
(function (Mode) {
    Mode["date"] = "date";
    Mode["datetime"] = "datetime";
    Mode["time"] = "time";
})(Mode || (Mode = {}));
export var AndroidDatetimeMode;
(function (AndroidDatetimeMode) {
    AndroidDatetimeMode["default"] = "default";
    AndroidDatetimeMode["calendar"] = "calendar";
    AndroidDatetimeMode["spinner"] = "spinner";
})(AndroidDatetimeMode || (AndroidDatetimeMode = {}));
export var AndroidTimeMode;
(function (AndroidTimeMode) {
    AndroidTimeMode["default"] = "default";
    AndroidTimeMode["clock"] = "clock";
    AndroidTimeMode["spinner"] = "spinner";
})(AndroidTimeMode || (AndroidTimeMode = {}));
export var Format;
(function (Format) {
    Format["date"] = "YYYY-MM-DD";
    Format["datetime"] = "YYYY-MM-DD HH:mm";
    Format["time"] = "HH:mm";
})(Format || (Format = {}));
var SUPPORTED_ORIENTATIONS = [
    'portrait',
    'portrait-upside-down',
    'landscape',
    'landscape-left',
    'landscape-right',
];
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
    DatePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, mode = _a.mode, style = _a.style, customStyles = _a.customStyles, disabled = _a.disabled, minDate = _a.minDate, maxDate = _a.maxDate, minuteInterval = _a.minuteInterval, timeZoneOffsetInMinutes = _a.timeZoneOffsetInMinutes, cancelBtnText = _a.cancelBtnText, confirmBtnText = _a.confirmBtnText, TouchableComponent = _a.TouchableComponent, allowFontScaling = _a.allowFontScaling, locale = _a.locale, height = _a.height;
        var dateInputStyle = [
            Style.dateInput, customStyles.dateInput,
            disabled && Style.disabled,
            disabled && customStyles.disabled,
        ];
        return (<TouchableComponent style={[Style.dateTouch, style]} underlayColor={'transparent'} onPress={this.onPressDate}>
				<View style={[Style.dateTouchBody, customStyles.dateTouchBody]}>
					{!this.props.hideText ?
            <View style={dateInputStyle}>
								{this.getTitleElement()}
							</View>
            :
                <View />}
					{this._renderIcon()}
					{Platform.OS === 'ios' && <Modal transparent={true} animationType="none" visible={this.state.modalVisible} supportedOrientations={SUPPORTED_ORIENTATIONS} onRequestClose={function () { _this.setModalVisible(false); }}>
						<View style={{ flex: 1 }}>
							<Animated.View style={{ flex: 1, opacity: this.state.opacity }}>
								<TouchableComponent style={Style.datePickerMask} activeOpacity={1} underlayColor={'#00000077'} onPress={this.onPressMask}>
									<TouchableComponent underlayColor={'#fff'} style={{ flex: 1 }}>
										<Animated.View style={[
            Style.datePickerCon,
            { height: height, transform: [{ translateY: this.state.animatedHeight }] },
            customStyles.datePickerCon,
        ]}>
											<View pointerEvents={this.state.allowPointerEvents ? 'auto' : 'none'}>
												<DatePickerIOS date={this.state.date} mode={mode} minimumDate={minDate ? this.getDate(minDate) : undefined} maximumDate={maxDate ? this.getDate(maxDate) : undefined} onDateChange={this.onDateChange} minuteInterval={minuteInterval} timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : undefined} style={[Style.datePicker, customStyles.datePicker]} locale={locale}/>
											</View>
											<TouchableComponent underlayColor={'transparent'} onPress={this.onPressCancel} style={[Style.btnText, Style.btnCancel, customStyles.btnCancel]}>
												<Text allowFontScaling={allowFontScaling} style={[Style.btnTextText, Style.btnTextCancel, customStyles.btnTextCancel]}>
													{cancelBtnText}
												</Text>
											</TouchableComponent>
											<TouchableComponent underlayColor={'transparent'} onPress={this.onPressConfirm} style={[Style.btnText, Style.btnConfirm, customStyles.btnConfirm]}>
												<Text allowFontScaling={allowFontScaling} style={[Style.btnTextText, customStyles.btnTextConfirm]}>
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
			</TouchableComponent>);
    };
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
                }),
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
                }),
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
                var minDateInstance = this.getDate(minDate);
                if (now < minDateInstance) {
                    return minDateInstance;
                }
            }
            if (maxDate) {
                var maxDateInstance = this.getDate(maxDate);
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
            return (<Text allowFontScaling={allowFontScaling} style={[Style.placeholderText, customStyles.placeholderText]}>
					{placeholder}
				</Text>);
        }
        return (<Text allowFontScaling={allowFontScaling} style={[Style.dateText, customStyles.dateText]}>
				{this.getDateStr()}
			</Text>);
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
        if (action !== DatePickerAndroid.dismissedAction && year && month && day) {
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
        if (action !== DatePickerAndroid.dismissedAction && hour && minute) {
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
        return __awaiter(this, void 0, void 0, function () {
            var _b, mode, androidTimeMode, _c, format, _d, is24Hour, timeMoment, timePickerResult, args;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = this.props, mode = _b.mode, androidTimeMode = _b.androidTimeMode, _c = _b.format, format = _c === void 0 ? Format[mode] : _c, _d = _b.is24Hour, is24Hour = _d === void 0 ? !format.match(/h|a/) : _d;
                        if (!(action !== DatePickerAndroid.dismissedAction)) return [3 /*break*/, 2];
                        timeMoment = moment(this.state.date);
                        return [4 /*yield*/, TimePickerAndroid.open({
                                hour: timeMoment.hour(),
                                minute: timeMoment.minutes(),
                                is24Hour: is24Hour,
                                mode: androidTimeMode
                            })];
                    case 1:
                        timePickerResult = _e.sent();
                        args = { year: year, month: month, day: day, timePickerResult: timePickerResult };
                        this.onDatetimeTimePicked.call(this, args);
                        return [3 /*break*/, 3];
                    case 2:
                        this.onPressCancel();
                        _e.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DatePicker.prototype.onDatetimeTimePicked = function (year, month, day, timePickerResult) {
        var action = timePickerResult.action, hour = timePickerResult.hour, minute = timePickerResult.minute;
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, mode, androidDatetimeMode, androidTimeMode, _b, format, minDate, maxDate, _c, is24Hour, result, timeMoment, result, result;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.props.disabled) {
                            return [2 /*return*/];
                        }
                        Keyboard.dismiss();
                        // reset state
                        this.setState({
                            date: this.getDate()
                        });
                        if (!(Platform.OS === 'ios')) return [3 /*break*/, 1];
                        this.setModalVisible(true);
                        return [3 /*break*/, 7];
                    case 1:
                        _a = this.props, mode = _a.mode, androidDatetimeMode = _a.androidDatetimeMode, androidTimeMode = _a.androidTimeMode, _b = _a.format, format = _b === void 0 ? Format[mode] : _b, minDate = _a.minDate, maxDate = _a.maxDate, _c = _a.is24Hour, is24Hour = _c === void 0 ? !format.match(/h|a/) : _c;
                        if (!(mode === 'date')) return [3 /*break*/, 3];
                        return [4 /*yield*/, DatePickerAndroid.open({
                                date: this.state.date,
                                minDate: minDate ? this.getDate(minDate) : undefined,
                                maxDate: maxDate ? this.getDate(maxDate) : undefined,
                                mode: androidDatetimeMode
                            })];
                    case 2:
                        result = _d.sent();
                        this.onDatePicked(result);
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(mode === 'time')) return [3 /*break*/, 5];
                        timeMoment = moment(this.state.date);
                        return [4 /*yield*/, TimePickerAndroid.open({
                                hour: timeMoment.hour(),
                                minute: timeMoment.minutes(),
                                is24Hour: is24Hour,
                                mode: androidTimeMode
                            })];
                    case 4:
                        result = _d.sent();
                        this.onTimePicked(result);
                        return [3 /*break*/, 7];
                    case 5:
                        if (!(mode === 'datetime')) return [3 /*break*/, 7];
                        return [4 /*yield*/, DatePickerAndroid.open({
                                date: this.state.date,
                                minDate: minDate ? this.getDate(minDate) : undefined,
                                maxDate: maxDate ? this.getDate(maxDate) : undefined,
                                mode: androidDatetimeMode
                            })];
                    case 6:
                        result = _d.sent();
                        this.onDatetimePicked(result);
                        _d.label = 7;
                    case 7:
                        if (typeof this.props.onOpenModal === 'function') {
                            this.props.onOpenModal();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DatePicker.prototype._renderIcon = function () {
        var _a = this.props, showIcon = _a.showIcon, iconSource = _a.iconSource, iconComponent = _a.iconComponent, customStyles = _a.customStyles;
        if (showIcon) {
            if (iconComponent) {
                return iconComponent;
            }
            return (<Image style={[Style.dateIcon, customStyles.dateIcon]} source={iconSource || require('../date_icon.png')}/>);
        }
        return null;
    };
    DatePicker.defaultProps = {
        mode: Mode.date,
        androidDatetimeMode: AndroidDatetimeMode["default"],
        androidTimeMode: AndroidTimeMode["default"],
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
            dateTouchBody: {}
        },
        // whether or not show the icon
        showIcon: true,
        disabled: false,
        allowFontScaling: true,
        hideText: false,
        placeholder: '',
        TouchableComponent: TouchableHighlight
    };
    return DatePicker;
}(Component));
export default DatePicker;
//# sourceMappingURL=datepicker.js.map