"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_native_1 = require("react-native");
const style_1 = require("./style");
const moment_1 = require("moment");
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
class DatePicker extends react_1.Component {
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
        this.onDateChange = this.onDateChange.bind(this);
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
												<react_native_1.DatePickerIOS date={this.state.date} mode={mode} minimumDate={minDate ? this.getDate(minDate) : undefined} maximumDate={maxDate ? this.getDate(maxDate) : undefined} onDateChange={this.onDateChange} minuteInterval={minuteInterval} timeZoneOffsetInMinutes={timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes : undefined} style={[style_1.default.datePicker, customStyles.datePicker]} locale={locale}/>
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
    // onStartShouldSetResponder(e) {
    //   return true;
    // }
    // onMoveShouldSetResponder(e) {
    //   return true;
    // }
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
        return moment_1.default(date, format).toDate();
    }
    getDateStr(date = this.props.date) {
        const { mode, format = Format[mode] } = this.props;
        const dateInstance = date instanceof Date
            ? date
            : this.getDate(date);
        if (typeof this.props.getDateStr === 'function') {
            return this.props.getDateStr(dateInstance);
        }
        return moment_1.default(dateInstance).format(format);
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
    onDateChange(date) {
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
                date: moment_1.default().hour(hour).minute(minute).toDate(),
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
            const timeMoment = moment_1.default(this.state.date);
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
                const timeMoment = moment_1.default(this.state.date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NldW5nam9vbmxlZS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtZGF0ZXBpY2tlci9zcmMvZGF0ZXBpY2tlci50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBeUM7QUFDekMsK0NBcUJzQjtBQUN0QixtQ0FBNEI7QUFDNUIsbUNBQTRCO0FBa0Q1QixJQUFZLElBSVg7QUFKRCxXQUFZLElBQUk7SUFDZixxQkFBYSxDQUFBO0lBQ2IsNkJBQXFCLENBQUE7SUFDckIscUJBQWEsQ0FBQTtBQUNkLENBQUMsRUFKVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFJZjtBQUVELElBQVksbUJBSVg7QUFKRCxXQUFZLG1CQUFtQjtJQUM5QiwwQ0FBbUIsQ0FBQTtJQUNuQiw0Q0FBcUIsQ0FBQTtJQUNyQiwwQ0FBbUIsQ0FBQTtBQUNwQixDQUFDLEVBSlcsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFJOUI7QUFFRCxJQUFZLGVBSVg7QUFKRCxXQUFZLGVBQWU7SUFDMUIsc0NBQW1CLENBQUE7SUFDbkIsa0NBQWUsQ0FBQTtJQUNmLHNDQUFtQixDQUFBO0FBQ3BCLENBQUMsRUFKVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUkxQjtBQUVELElBQVksTUFJWDtBQUpELFdBQVksTUFBTTtJQUNqQiw2QkFBbUIsQ0FBQTtJQUNuQix1Q0FBNkIsQ0FBQTtJQUM3Qix3QkFBYyxDQUFBO0FBQ2YsQ0FBQyxFQUpXLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQUlqQjtBQXNCRCxNQUFNLHNCQUFzQixHQUE0QjtJQUN2RCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ2pCLENBQUM7QUFTRixNQUFNLFVBQVcsU0FBUSxpQkFBeUI7SUFzQ2pELFlBQVksS0FBYTtRQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1osSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFP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QUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixhQUFhLEVBQUUsRUFBRTtLQUNqQjtJQUVELCtCQUErQjtJQUMvQixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxLQUFLO0lBQ2YsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsS0FBSztJQUNmLFdBQVcsRUFBRSxFQUFFO0lBQ2Ysa0JBQWtCLEVBQUUsaUNBQWtCO0NBQ3RDLENBQUM7QUF5Ykgsa0JBQWUsVUFBVSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXVuZ2pvb25sZWUvUHJvamVjdHMvcmVhY3QtbmF0aXZlLWRhdGVwaWNrZXIvc3JjL2RhdGVwaWNrZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRWaWV3LFxuXHRUZXh0LFxuXHRJbWFnZSxcblx0TW9kYWwsXG5cdFRvdWNoYWJsZUhpZ2hsaWdodCxcblx0VG91Y2hhYmxlSGlnaGxpZ2h0UHJvcHMsXG5cdFRvdWNoYWJsZU5hdGl2ZUZlZWRiYWNrUHJvcHMsXG5cdFRvdWNoYWJsZU9wYWNpdHlQcm9wcyxcblx0VG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrUHJvcHMsXG5cdERhdGVQaWNrZXJBbmRyb2lkLFxuXHRUaW1lUGlja2VyQW5kcm9pZCxcblx0RGF0ZVBpY2tlcklPUyxcblx0UGxhdGZvcm0sXG5cdEFuaW1hdGVkLFxuXHRLZXlib2FyZCxcblx0Vmlld1N0eWxlLFxuXHRJbWFnZVN0eWxlLFxuXHRUZXh0U3R5bGUsXG5cdFN0eWxlUHJvcCxcblx0SW1hZ2VTb3VyY2VQcm9wVHlwZSxcbn0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cdHN0eWxlPzogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGhlaWdodDogbnVtYmVyO1xuXHRkYXRlPzogc3RyaW5nIHwgRGF0ZTtcblx0bWluRGF0ZT86IHN0cmluZyB8IERhdGU7XG5cdG1heERhdGU/OiBzdHJpbmcgfCBEYXRlO1xuXHRkdXJhdGlvbj86IG51bWJlcjtcblx0bW9kZTogTW9kZTtcblx0Zm9ybWF0PzogRm9ybWF0O1xuXHRhbmRyb2lkRGF0ZXRpbWVNb2RlPzogQW5kcm9pZERhdGV0aW1lTW9kZTtcblx0YW5kcm9pZFRpbWVNb2RlPzogQW5kcm9pZFRpbWVNb2RlO1xuXHRjb25maXJtQnRuVGV4dD86IHN0cmluZztcblx0Y2FuY2VsQnRuVGV4dD86IHN0cmluZztcblx0Y3VzdG9tU3R5bGVzOiBJQ3VzdG9tU3R5bGVzO1xuXHRzaG93SWNvbj86IGJvb2xlYW47XG5cdGRpc2FibGVkPzogYm9vbGVhbjtcblx0YWxsb3dGb250U2NhbGluZz86IGJvb2xlYW47XG5cdGhpZGVUZXh0PzogYm9vbGVhbjtcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XG5cdFRvdWNoYWJsZUNvbXBvbmVudDogVG91Y2hhYmxlO1xuXHRpczI0SG91cj86IGJvb2xlYW47XG5cdGljb25Tb3VyY2U/OiBJbWFnZVNvdXJjZVByb3BUeXBlO1xuXHRtaW51dGVJbnRlcnZhbD86IE1pbnV0ZUludGVydmFsO1xuXHR0aW1lWm9uZU9mZnNldEluTWludXRlcz86IG51bWJlcjtcblx0bG9jYWxlPzogc3RyaW5nO1xuXHRpY29uQ29tcG9uZW50PzogQ29tcG9uZW50O1xuXHRnZXREYXRlU3RyPzogKGRhdGU6IERhdGUpID0+IHN0cmluZztcblx0b25EYXRlQ2hhbmdlOiAoZGF0ZVN0cjogc3RyaW5nLCBkYXRlOiBEYXRlIHwgc3RyaW5nKSA9PiBhbnk7XG5cdG9uUHJlc3NNYXNrPzogKCkgPT4gdm9pZDtcblx0b25DbG9zZU1vZGFsPzogKCkgPT4gdm9pZDtcblx0b25PcGVuTW9kYWw/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSUN1c3RvbVN0eWxlcyB7XG5cdHBsYWNlaG9sZGVyVGV4dDogU3R5bGVQcm9wPFRleHRTdHlsZT47XG5cdGRhdGVUZXh0OiBTdHlsZVByb3A8VGV4dFN0eWxlPjtcblx0YnRuVGV4dENvbmZpcm06IFN0eWxlUHJvcDxUZXh0U3R5bGU+O1xuXHRidG5Db25maXJtOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0YnRuVGV4dENhbmNlbDogU3R5bGVQcm9wPFRleHRTdHlsZT47XG5cdGJ0bkNhbmNlbDogU3R5bGVQcm9wPFZpZXdTdHlsZT47XG5cdGRhdGVQaWNrZXI6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRkYXRlSWNvbjogU3R5bGVQcm9wPEltYWdlU3R5bGU+O1xuXHRkYXRlUGlja2VyQ29uOiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZGF0ZUlucHV0OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcblx0ZGlzYWJsZWQ6IFN0eWxlUHJvcDxWaWV3U3R5bGU+O1xuXHRkYXRlVG91Y2hCb2R5OiBTdHlsZVByb3A8Vmlld1N0eWxlPjtcbn1cblxuZXhwb3J0IGVudW0gTW9kZSB7XG5cdGRhdGUgPSAnZGF0ZScsXG5cdGRhdGV0aW1lID0gJ2RhdGV0aW1lJyxcblx0dGltZSA9ICd0aW1lJyxcbn1cblxuZXhwb3J0IGVudW0gQW5kcm9pZERhdGV0aW1lTW9kZSB7XG5cdGRlZmF1bHQgPSAnZGVmYXVsdCcsXG5cdGNhbGVuZGFyID0gJ2NhbGVuZGFyJyxcblx0c3Bpbm5lciA9ICdzcGlubmVyJyxcbn1cblxuZXhwb3J0IGVudW0gQW5kcm9pZFRpbWVNb2RlIHtcblx0ZGVmYXVsdCA9ICdkZWZhdWx0Jyxcblx0Y2xvY2sgPSAnY2xvY2snLFxuXHRzcGlubmVyID0gJ3NwaW5uZXInLFxufVxuXG5leHBvcnQgZW51bSBGb3JtYXQge1xuXHRkYXRlID0gJ1lZWVktTU0tREQnLFxuXHRkYXRldGltZSA9ICdZWVlZLU1NLUREIEhIOm1tJyxcblx0dGltZSA9ICdISDptbScsXG59XG5cbmludGVyZmFjZSBJRGF0ZVBpY2tlckFuZHJvaWRPcGVuUmV0dXJuIHtcblx0YWN0aW9uOiAnZGF0ZVNldEFjdGlvbicgfCAnZGlzbWlzc2VkQWN0aW9uJztcblx0eWVhcj86IG51bWJlcjtcblx0bW9udGg/OiBudW1iZXI7XG5cdGRheT86IG51bWJlcjtcbn1cbmludGVyZmFjZSBJVGltZVBpY2tlckFuZHJvaWRPcGVuUmV0dXJuIHtcblx0YWN0aW9uOiAndGltZVNldEFjdGlvbicgfCAnZGlzbWlzc2VkQWN0aW9uJztcblx0aG91cj86IG51bWJlcjtcblx0bWludXRlPzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblx0ZGF0ZTogRGF0ZTtcblx0bW9kYWxWaXNpYmxlOiBib29sZWFuO1xuXHRhbmltYXRlZEhlaWdodDogQW5pbWF0ZWQuVmFsdWU7XG5cdG9wYWNpdHk6IEFuaW1hdGVkLlZhbHVlO1xuXHRhbGxvd1BvaW50ZXJFdmVudHM6IGJvb2xlYW47XG59XG5cbmNvbnN0IFNVUFBPUlRFRF9PUklFTlRBVElPTlM6IFN1cHBvcnRlZE9yaWVudGF0aW9uc1tdID0gW1xuXHQncG9ydHJhaXQnLFxuXHQncG9ydHJhaXQtdXBzaWRlLWRvd24nLFxuXHQnbGFuZHNjYXBlJyxcblx0J2xhbmRzY2FwZS1sZWZ0Jyxcblx0J2xhbmRzY2FwZS1yaWdodCcsXG5dO1xuXG50eXBlIFN1cHBvcnRlZE9yaWVudGF0aW9ucyA9ICdwb3J0cmFpdCcgfCAncG9ydHJhaXQtdXBzaWRlLWRvd24nIHwgJ2xhbmRzY2FwZScgfCAnbGFuZHNjYXBlLWxlZnQnIHwgJ2xhbmRzY2FwZS1yaWdodCc7XG50eXBlIFRvdWNoYWJsZSA9IFJlYWN0LkNvbXBvbmVudFR5cGU8VG91Y2hhYmxlSGlnaGxpZ2h0UHJvcHM+IHxcblx0UmVhY3QuQ29tcG9uZW50VHlwZTxUb3VjaGFibGVOYXRpdmVGZWVkYmFja1Byb3BzPiB8XG5cdFJlYWN0LkNvbXBvbmVudFR5cGU8VG91Y2hhYmxlT3BhY2l0eVByb3BzPiB8XG5cdFJlYWN0LkNvbXBvbmVudFR5cGU8VG91Y2hhYmxlV2l0aG91dEZlZWRiYWNrUHJvcHM+O1xudHlwZSBNaW51dGVJbnRlcnZhbCA9IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDEwIHwgMTIgfCAxNSB8IDIwIHwgMzAgfCB1bmRlZmluZWQ7XG5cbmNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblx0cHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8SVByb3BzPiA9IHtcblx0XHRtb2RlOiBNb2RlLmRhdGUsXG5cdFx0YW5kcm9pZERhdGV0aW1lTW9kZTogQW5kcm9pZERhdGV0aW1lTW9kZS5kZWZhdWx0LFxuXHRcdGFuZHJvaWRUaW1lTW9kZTogQW5kcm9pZFRpbWVNb2RlLmRlZmF1bHQsXG5cdFx0ZGF0ZTogJycsXG5cdFx0aGVpZ2h0OiAyNTksXG5cblx0XHQvLyBzbGlkZSBhbmltYXRpb24gZHVyYXRpb24gdGltZSwgZGVmYXVsdCB0byAzMDBtcywgSU9TIG9ubHlcblx0XHRkdXJhdGlvbjogMzAwLFxuXHRcdGNvbmZpcm1CdG5UZXh0OiAnQ29uZmlybScsXG5cdFx0Y2FuY2VsQnRuVGV4dDogJ0NhbmNlbCcsXG5cdFx0aWNvblNvdXJjZTogcmVxdWlyZSgnLi4vZGF0ZV9pY29uLnBuZycpLFxuXHRcdGN1c3RvbVN0eWxlczoge1xuXHRcdFx0cGxhY2Vob2xkZXJUZXh0OiB7fSxcblx0XHRcdGRhdGVUZXh0OiB7fSxcblx0XHRcdGJ0blRleHRDb25maXJtOiB7fSxcblx0XHRcdGJ0bkNvbmZpcm06IHt9LFxuXHRcdFx0YnRuVGV4dENhbmNlbDoge30sXG5cdFx0XHRidG5DYW5jZWw6IHt9LFxuXHRcdFx0ZGF0ZVBpY2tlcjoge30sXG5cdFx0XHRkYXRlSWNvbjoge30sXG5cdFx0XHRkYXRlUGlja2VyQ29uOiB7fSxcblx0XHRcdGRhdGVJbnB1dDoge30sXG5cdFx0XHRkaXNhYmxlZDoge30sXG5cdFx0XHRkYXRlVG91Y2hCb2R5OiB7fSxcblx0XHR9LFxuXG5cdFx0Ly8gd2hldGhlciBvciBub3Qgc2hvdyB0aGUgaWNvblxuXHRcdHNob3dJY29uOiB0cnVlLFxuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0XHRhbGxvd0ZvbnRTY2FsaW5nOiB0cnVlLFxuXHRcdGhpZGVUZXh0OiBmYWxzZSxcblx0XHRwbGFjZWhvbGRlcjogJycsXG5cdFx0VG91Y2hhYmxlQ29tcG9uZW50OiBUb3VjaGFibGVIaWdobGlnaHQsXG5cdH07XG5cdHB1YmxpYyByZWFkb25seSBzdGF0ZTogSVN0YXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZGF0ZTogdGhpcy5nZXREYXRlKCksXG5cdFx0XHRtb2RhbFZpc2libGU6IGZhbHNlLFxuXHRcdFx0YW5pbWF0ZWRIZWlnaHQ6IG5ldyBBbmltYXRlZC5WYWx1ZShwcm9wcy5oZWlnaHQpLFxuXHRcdFx0b3BhY2l0eTogbmV3IEFuaW1hdGVkLlZhbHVlKDApLFxuXHRcdFx0YWxsb3dQb2ludGVyRXZlbnRzOiB0cnVlLFxuXHRcdH07XG5cblx0XHR0aGlzLmdldERhdGUgPSB0aGlzLmdldERhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdldERhdGVTdHIgPSB0aGlzLmdldERhdGVTdHIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRhdGVQaWNrZWQgPSB0aGlzLmRhdGVQaWNrZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uUHJlc3NEYXRlID0gdGhpcy5vblByZXNzRGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25QcmVzc0NhbmNlbCA9IHRoaXMub25QcmVzc0NhbmNlbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25QcmVzc0NvbmZpcm0gPSB0aGlzLm9uUHJlc3NDb25maXJtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkRhdGVDaGFuZ2UgPSB0aGlzLm9uRGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25QcmVzc01hc2sgPSB0aGlzLm9uUHJlc3NNYXNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkRhdGVQaWNrZWQgPSB0aGlzLm9uRGF0ZVBpY2tlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25UaW1lUGlja2VkID0gdGhpcy5vblRpbWVQaWNrZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uRGF0ZXRpbWVQaWNrZWQgPSB0aGlzLm9uRGF0ZXRpbWVQaWNrZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uRGF0ZXRpbWVUaW1lUGlja2VkID0gdGhpcy5vbkRhdGV0aW1lVGltZVBpY2tlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2V0TW9kYWxWaXNpYmxlID0gdGhpcy5zZXRNb2RhbFZpc2libGUuYmluZCh0aGlzKTtcblx0fVxuXG5cdHB1YmxpYyByZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bW9kZSxcblx0XHRcdHN0eWxlLFxuXHRcdFx0Y3VzdG9tU3R5bGVzLFxuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRtaW5EYXRlLFxuXHRcdFx0bWF4RGF0ZSxcblx0XHRcdG1pbnV0ZUludGVydmFsLFxuXHRcdFx0dGltZVpvbmVPZmZzZXRJbk1pbnV0ZXMsXG5cdFx0XHRjYW5jZWxCdG5UZXh0LFxuXHRcdFx0Y29uZmlybUJ0blRleHQsXG5cdFx0XHRUb3VjaGFibGVDb21wb25lbnQsXG5cdFx0XHRhbGxvd0ZvbnRTY2FsaW5nLFxuXHRcdFx0bG9jYWxlLFxuXHRcdFx0aGVpZ2h0LFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgZGF0ZUlucHV0U3R5bGUgPSBbXG5cdFx0XHRTdHlsZS5kYXRlSW5wdXQsIGN1c3RvbVN0eWxlcy5kYXRlSW5wdXQsXG5cdFx0XHRkaXNhYmxlZCAmJiBTdHlsZS5kaXNhYmxlZCxcblx0XHRcdGRpc2FibGVkICYmIGN1c3RvbVN0eWxlcy5kaXNhYmxlZCxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxUb3VjaGFibGVDb21wb25lbnRcblx0XHRcdFx0c3R5bGU9e1tTdHlsZS5kYXRlVG91Y2gsIHN0eWxlXX1cblx0XHRcdFx0dW5kZXJsYXlDb2xvcj17J3RyYW5zcGFyZW50J31cblx0XHRcdFx0b25QcmVzcz17dGhpcy5vblByZXNzRGF0ZX1cblx0XHRcdD5cblx0XHRcdFx0PFZpZXcgc3R5bGU9e1tTdHlsZS5kYXRlVG91Y2hCb2R5LCBjdXN0b21TdHlsZXMuZGF0ZVRvdWNoQm9keV19PlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCF0aGlzLnByb3BzLmhpZGVUZXh0ID9cblx0XHRcdFx0XHRcdFx0PFZpZXcgc3R5bGU9e2RhdGVJbnB1dFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5nZXRUaXRsZUVsZW1lbnQoKX1cblx0XHRcdFx0XHRcdFx0PC9WaWV3PlxuXHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdDxWaWV3Lz5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e3RoaXMuX3JlbmRlckljb24oKX1cblx0XHRcdFx0XHR7UGxhdGZvcm0uT1MgPT09ICdpb3MnICYmIDxNb2RhbFxuXHRcdFx0XHRcdFx0dHJhbnNwYXJlbnQ9e3RydWV9XG5cdFx0XHRcdFx0XHRhbmltYXRpb25UeXBlPVwibm9uZVwiXG5cdFx0XHRcdFx0XHR2aXNpYmxlPXt0aGlzLnN0YXRlLm1vZGFsVmlzaWJsZX1cblx0XHRcdFx0XHRcdHN1cHBvcnRlZE9yaWVudGF0aW9ucz17U1VQUE9SVEVEX09SSUVOVEFUSU9OU31cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7dGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpOyB9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxWaWV3XG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7ZmxleDogMX19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxBbmltYXRlZC5WaWV3IHN0eWxlPXt7ZmxleDogMSwgb3BhY2l0eTogdGhpcy5zdGF0ZS5vcGFjaXR5fX0+XG5cdFx0XHRcdFx0XHRcdFx0PFRvdWNoYWJsZUNvbXBvbmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e1N0eWxlLmRhdGVQaWNrZXJNYXNrfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlT3BhY2l0eT17MX1cblx0XHRcdFx0XHRcdFx0XHRcdHVuZGVybGF5Q29sb3I9eycjMDAwMDAwNzcnfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25QcmVzcz17dGhpcy5vblByZXNzTWFza31cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG91Y2hhYmxlQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuZGVybGF5Q29sb3I9eycjZmZmJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tmbGV4OiAxfX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEFuaW1hdGVkLlZpZXdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U3R5bGUuZGF0ZVBpY2tlckNvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtoZWlnaHQsIHRyYW5zZm9ybTogW3t0cmFuc2xhdGVZOiB0aGlzLnN0YXRlLmFuaW1hdGVkSGVpZ2h0fV19LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y3VzdG9tU3R5bGVzLmRhdGVQaWNrZXJDb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxWaWV3IHBvaW50ZXJFdmVudHM9e3RoaXMuc3RhdGUuYWxsb3dQb2ludGVyRXZlbnRzID8gJ2F1dG8nIDogJ25vbmUnfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxEYXRlUGlja2VySU9TXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGU9e3RoaXMuc3RhdGUuZGF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZT17bW9kZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluaW11bURhdGU9e21pbkRhdGUgPyB0aGlzLmdldERhdGUobWluRGF0ZSkgOiB1bmRlZmluZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heGltdW1EYXRlPXttYXhEYXRlID8gdGhpcy5nZXREYXRlKG1heERhdGUpIDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkRhdGVDaGFuZ2U9e3RoaXMub25EYXRlQ2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW51dGVJbnRlcnZhbD17bWludXRlSW50ZXJ2YWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpbWVab25lT2Zmc2V0SW5NaW51dGVzPXt0aW1lWm9uZU9mZnNldEluTWludXRlcyA/IHRpbWVab25lT2Zmc2V0SW5NaW51dGVzIDogdW5kZWZpbmVkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17W1N0eWxlLmRhdGVQaWNrZXIsIGN1c3RvbVN0eWxlcy5kYXRlUGlja2VyXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxlPXtsb2NhbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VG91Y2hhYmxlQ29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmRlcmxheUNvbG9yPXsndHJhbnNwYXJlbnQnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25QcmVzcz17dGhpcy5vblByZXNzQ2FuY2VsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e1tTdHlsZS5idG5UZXh0LCBTdHlsZS5idG5DYW5jZWwsIGN1c3RvbVN0eWxlcy5idG5DYW5jZWxdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFsbG93Rm9udFNjYWxpbmc9e2FsbG93Rm9udFNjYWxpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXtbU3R5bGUuYnRuVGV4dFRleHQsIFN0eWxlLmJ0blRleHRDYW5jZWwsIGN1c3RvbVN0eWxlcy5idG5UZXh0Q2FuY2VsXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NhbmNlbEJ0blRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub3VjaGFibGVDb21wb25lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRvdWNoYWJsZUNvbXBvbmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5kZXJsYXlDb2xvcj17J3RyYW5zcGFyZW50J31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uUHJlc3M9e3RoaXMub25QcmVzc0NvbmZpcm19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17W1N0eWxlLmJ0blRleHQsIFN0eWxlLmJ0bkNvbmZpcm0sIGN1c3RvbVN0eWxlcy5idG5Db25maXJtXX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBhbGxvd0ZvbnRTY2FsaW5nPXthbGxvd0ZvbnRTY2FsaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17W1N0eWxlLmJ0blRleHRUZXh0LCBjdXN0b21TdHlsZXMuYnRuVGV4dENvbmZpcm1dfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Y29uZmlybUJ0blRleHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Ub3VjaGFibGVDb21wb25lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZWQuVmlldz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvVG91Y2hhYmxlQ29tcG9uZW50PlxuXHRcdFx0XHRcdFx0XHRcdDwvVG91Y2hhYmxlQ29tcG9uZW50PlxuXHRcdFx0XHRcdFx0XHQ8L0FuaW1hdGVkLlZpZXc+XG5cdFx0XHRcdFx0XHQ8L1ZpZXc+XG5cdFx0XHRcdFx0PC9Nb2RhbD59XG5cdFx0XHRcdDwvVmlldz5cblx0XHRcdDwvVG91Y2hhYmxlQ29tcG9uZW50PlxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBJUHJvcHMpIHtcblx0XHRpZiAobmV4dFByb3BzLmRhdGUgIT09IHRoaXMucHJvcHMuZGF0ZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7ZGF0ZTogdGhpcy5nZXREYXRlKG5leHRQcm9wcy5kYXRlKX0pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgc2V0TW9kYWxWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcblx0XHRjb25zdCB7IGhlaWdodCwgZHVyYXRpb24gfSA9IHRoaXMucHJvcHM7XG5cblx0XHQvLyBzbGlkZSBhbmltYXRpb25cblx0XHRpZiAodmlzaWJsZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bW9kYWxWaXNpYmxlOiB2aXNpYmxlfSk7XG5cdFx0XHRBbmltYXRlZC5wYXJhbGxlbChbXG5cdFx0XHRcdEFuaW1hdGVkLnRpbWluZyhcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmFuaW1hdGVkSGVpZ2h0LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRvVmFsdWU6IDAsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRBbmltYXRlZC50aW1pbmcoXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGFjaXR5LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRvVmFsdWU6IDEsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0XSkuc3RhcnQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0ZWQucGFyYWxsZWwoW1xuXHRcdFx0XHRBbmltYXRlZC50aW1pbmcoXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5hbmltYXRlZEhlaWdodCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0b1ZhbHVlOiBoZWlnaHQsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0XHRBbmltYXRlZC50aW1pbmcoXG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5vcGFjaXR5LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRvVmFsdWU6IDAsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHQpLFxuXHRcdFx0XSkuc3RhcnQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHttb2RhbFZpc2libGU6IHZpc2libGV9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIG9uU3RhcnRTaG91bGRTZXRSZXNwb25kZXIoZSkge1xuXHQvLyAgIHJldHVybiB0cnVlO1xuXHQvLyB9XG5cblx0Ly8gb25Nb3ZlU2hvdWxkU2V0UmVzcG9uZGVyKGUpIHtcblx0Ly8gICByZXR1cm4gdHJ1ZTtcblx0Ly8gfVxuXG5cdHByaXZhdGUgb25QcmVzc01hc2soKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uUHJlc3NNYXNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uUHJlc3NNYXNrKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25QcmVzc0NhbmNlbCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25QcmVzc0NhbmNlbCgpIHtcblx0XHR0aGlzLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25DbG9zZU1vZGFsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uQ2xvc2VNb2RhbCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25QcmVzc0NvbmZpcm0oKSB7XG5cdFx0dGhpcy5kYXRlUGlja2VkKCk7XG5cdFx0dGhpcy5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xvc2VNb2RhbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNsb3NlTW9kYWwoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldERhdGUoZGF0ZSA9IHRoaXMucHJvcHMuZGF0ZSkge1xuXHRcdGNvbnN0IHttb2RlLCBtaW5EYXRlLCBtYXhEYXRlLCBmb3JtYXQgPSBGb3JtYXRbbW9kZV19ID0gdGhpcy5wcm9wcztcblxuXHRcdGlmICghZGF0ZSkge1xuXHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRcdGlmIChtaW5EYXRlKSB7XG5cdFx0XHRcdGNvbnN0IG1pbkRhdGVJbnN0YW5jZTogRGF0ZSA9IHRoaXMuZ2V0RGF0ZShtaW5EYXRlKTtcblxuXHRcdFx0XHRpZiAobm93IDwgbWluRGF0ZUluc3RhbmNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1pbkRhdGVJbnN0YW5jZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobWF4RGF0ZSkge1xuXHRcdFx0XHRjb25zdCBtYXhEYXRlSW5zdGFuY2U6IERhdGUgPSB0aGlzLmdldERhdGUobWF4RGF0ZSk7XG5cblx0XHRcdFx0aWYgKG5vdyA+IG1heERhdGVJbnN0YW5jZSkge1xuXHRcdFx0XHRcdHJldHVybiBtYXhEYXRlSW5zdGFuY2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vdztcblx0XHR9XG5cblx0XHRpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdHJldHVybiBkYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtb21lbnQoZGF0ZSwgZm9ybWF0KS50b0RhdGUoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RGF0ZVN0cihkYXRlID0gdGhpcy5wcm9wcy5kYXRlKSB7XG5cdFx0Y29uc3Qge21vZGUsIGZvcm1hdCA9IEZvcm1hdFttb2RlXX0gPSB0aGlzLnByb3BzO1xuXG5cdFx0Y29uc3QgZGF0ZUluc3RhbmNlID0gZGF0ZSBpbnN0YW5jZW9mIERhdGVcblx0XHRcdD8gZGF0ZVxuXHRcdFx0OiB0aGlzLmdldERhdGUoZGF0ZSk7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMuZ2V0RGF0ZVN0ciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHMuZ2V0RGF0ZVN0cihkYXRlSW5zdGFuY2UpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtb21lbnQoZGF0ZUluc3RhbmNlKS5mb3JtYXQoZm9ybWF0KTtcblx0fVxuXG5cdHByaXZhdGUgZGF0ZVBpY2tlZCgpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMucHJvcHMub25EYXRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRGF0ZUNoYW5nZSh0aGlzLmdldERhdGVTdHIodGhpcy5zdGF0ZS5kYXRlKSwgdGhpcy5zdGF0ZS5kYXRlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldFRpdGxlRWxlbWVudCgpIHtcblx0XHRjb25zdCB7ZGF0ZSwgcGxhY2Vob2xkZXIsIGN1c3RvbVN0eWxlcywgYWxsb3dGb250U2NhbGluZ30gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKCFkYXRlICYmIHBsYWNlaG9sZGVyKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8VGV4dCBhbGxvd0ZvbnRTY2FsaW5nPXthbGxvd0ZvbnRTY2FsaW5nfSBzdHlsZT17W1N0eWxlLnBsYWNlaG9sZGVyVGV4dCwgY3VzdG9tU3R5bGVzLnBsYWNlaG9sZGVyVGV4dF19PlxuXHRcdFx0XHRcdHtwbGFjZWhvbGRlcn1cblx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxUZXh0IGFsbG93Rm9udFNjYWxpbmc9e2FsbG93Rm9udFNjYWxpbmd9IHN0eWxlPXtbU3R5bGUuZGF0ZVRleHQsIGN1c3RvbVN0eWxlcy5kYXRlVGV4dF19PlxuXHRcdFx0XHR7dGhpcy5nZXREYXRlU3RyKCl9XG5cdFx0XHQ8L1RleHQ+XG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgb25EYXRlQ2hhbmdlKGRhdGU6IERhdGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGFsbG93UG9pbnRlckV2ZW50czogZmFsc2UsXG5cdFx0XHRkYXRlLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGFsbG93UG9pbnRlckV2ZW50czogdHJ1ZSxcblx0XHRcdH0pO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG5cdFx0fSwgMjAwKTtcblx0fVxuXG5cdHByaXZhdGUgb25EYXRlUGlja2VkKHsgYWN0aW9uLCB5ZWFyLCBtb250aCwgZGF5IH06IElEYXRlUGlja2VyQW5kcm9pZE9wZW5SZXR1cm4pIHtcblx0XHRpZiAoYWN0aW9uICE9PSBEYXRlUGlja2VyQW5kcm9pZC5kaXNtaXNzZWRBY3Rpb24gJiYgeWVhciAmJiBtb250aCAmJiBkYXkpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRlOiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5kYXRlUGlja2VkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25QcmVzc0NhbmNlbCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgb25UaW1lUGlja2VkKHthY3Rpb24sIGhvdXIsIG1pbnV0ZX06IElUaW1lUGlja2VyQW5kcm9pZE9wZW5SZXR1cm4pIHtcblx0XHRpZiAoYWN0aW9uICE9PSBEYXRlUGlja2VyQW5kcm9pZC5kaXNtaXNzZWRBY3Rpb24gJiYgaG91ciAmJiBtaW51dGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRkYXRlOiBtb21lbnQoKS5ob3VyKGhvdXIpLm1pbnV0ZShtaW51dGUpLnRvRGF0ZSgpLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmRhdGVQaWNrZWQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vblByZXNzQ2FuY2VsKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBhc3luYyBvbkRhdGV0aW1lUGlja2VkKHthY3Rpb24sIHllYXIsIG1vbnRoLCBkYXl9OiBJRGF0ZVBpY2tlckFuZHJvaWRPcGVuUmV0dXJuKSB7XG5cdFx0Y29uc3Qge21vZGUsIGFuZHJvaWRUaW1lTW9kZSwgZm9ybWF0ID0gRm9ybWF0W21vZGVdLCBpczI0SG91ciA9ICFmb3JtYXQubWF0Y2goL2h8YS8pfSA9IHRoaXMucHJvcHM7XG5cblx0XHRpZiAoYWN0aW9uICE9PSBEYXRlUGlja2VyQW5kcm9pZC5kaXNtaXNzZWRBY3Rpb24pIHtcblx0XHRcdGNvbnN0IHRpbWVNb21lbnQgPSBtb21lbnQodGhpcy5zdGF0ZS5kYXRlKTtcblxuXHRcdFx0Y29uc3QgdGltZVBpY2tlclJlc3VsdCA9IGF3YWl0IFRpbWVQaWNrZXJBbmRyb2lkLm9wZW4oe1xuXHRcdFx0XHRob3VyOiB0aW1lTW9tZW50LmhvdXIoKSxcblx0XHRcdFx0bWludXRlOiB0aW1lTW9tZW50Lm1pbnV0ZXMoKSxcblx0XHRcdFx0aXMyNEhvdXIsXG5cdFx0XHRcdG1vZGU6IGFuZHJvaWRUaW1lTW9kZSxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHllYXIgJiYgbW9udGggJiYgZGF5KSB7XG5cdFx0XHRcdGNvbnN0IGFyZ3MgPSB7IHllYXIsIG1vbnRoLCBkYXksIHRpbWVQaWNrZXJSZXN1bHQgfTtcblx0XHRcdFx0dGhpcy5vbkRhdGV0aW1lVGltZVBpY2tlZC5jYWxsKHRoaXMsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9uUHJlc3NDYW5jZWwoKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIG9uRGF0ZXRpbWVUaW1lUGlja2VkKFxuXHRcdGFyZ3M6IHsgeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlciwgdGltZVBpY2tlclJlc3VsdDogSVRpbWVQaWNrZXJBbmRyb2lkT3BlblJldHVybiB9LFxuXHQpIHtcblx0XHRjb25zdCB7IHllYXIsIG1vbnRoLCBkYXksIHRpbWVQaWNrZXJSZXN1bHQgfSA9IGFyZ3M7XG5cdFx0Y29uc3Qge2FjdGlvbiwgaG91ciwgbWludXRlfSA9IHRpbWVQaWNrZXJSZXN1bHQ7XG5cdFx0aWYgKGFjdGlvbiAhPT0gRGF0ZVBpY2tlckFuZHJvaWQuZGlzbWlzc2VkQWN0aW9uKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZGF0ZTogbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlKSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5kYXRlUGlja2VkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub25QcmVzc0NhbmNlbCgpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXN5bmMgb25QcmVzc0RhdGUoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRLZXlib2FyZC5kaXNtaXNzKCk7XG5cblx0XHQvLyByZXNldCBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZGF0ZTogdGhpcy5nZXREYXRlKCksXG5cdFx0fSk7XG5cblx0XHRpZiAoUGxhdGZvcm0uT1MgPT09ICdpb3MnKSB7XG5cdFx0XHR0aGlzLnNldE1vZGFsVmlzaWJsZSh0cnVlKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCB7bW9kZSwgYW5kcm9pZERhdGV0aW1lTW9kZSwgYW5kcm9pZFRpbWVNb2RlLCBmb3JtYXQgPSBGb3JtYXRbbW9kZV0sIG1pbkRhdGUsIG1heERhdGUsIGlzMjRIb3VyID0gIWZvcm1hdC5tYXRjaCgvaHxhLyl9ID0gdGhpcy5wcm9wcztcblxuXHRcdFx0aWYgKG1vZGUgPT09ICdkYXRlJykge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBEYXRlUGlja2VyQW5kcm9pZC5vcGVuKHtcblx0XHRcdFx0XHRkYXRlOiB0aGlzLnN0YXRlLmRhdGUsXG5cdFx0XHRcdFx0bWluRGF0ZTogbWluRGF0ZSA/IHRoaXMuZ2V0RGF0ZShtaW5EYXRlKSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRtYXhEYXRlOiBtYXhEYXRlID8gdGhpcy5nZXREYXRlKG1heERhdGUpIDogdW5kZWZpbmVkLFxuXHRcdFx0XHRcdG1vZGU6IGFuZHJvaWREYXRldGltZU1vZGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLm9uRGF0ZVBpY2tlZChyZXN1bHQpO1xuXHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSAndGltZScpIHtcblx0XHRcdFx0Y29uc3QgdGltZU1vbWVudCA9IG1vbWVudCh0aGlzLnN0YXRlLmRhdGUpO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBUaW1lUGlja2VyQW5kcm9pZC5vcGVuKHtcblx0XHRcdFx0XHRob3VyOiB0aW1lTW9tZW50LmhvdXIoKSxcblx0XHRcdFx0XHRtaW51dGU6IHRpbWVNb21lbnQubWludXRlcygpLFxuXHRcdFx0XHRcdGlzMjRIb3VyLFxuXHRcdFx0XHRcdG1vZGU6IGFuZHJvaWRUaW1lTW9kZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMub25UaW1lUGlja2VkKHJlc3VsdCk7XG5cdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09ICdkYXRldGltZScpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgRGF0ZVBpY2tlckFuZHJvaWQub3Blbih7XG5cdFx0XHRcdFx0ZGF0ZTogdGhpcy5zdGF0ZS5kYXRlLFxuXHRcdFx0XHRcdG1pbkRhdGU6IG1pbkRhdGUgPyB0aGlzLmdldERhdGUobWluRGF0ZSkgOiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0bWF4RGF0ZTogbWF4RGF0ZSA/IHRoaXMuZ2V0RGF0ZShtYXhEYXRlKSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRtb2RlOiBhbmRyb2lkRGF0ZXRpbWVNb2RlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5vbkRhdGV0aW1lUGlja2VkKHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uT3Blbk1vZGFsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uT3Blbk1vZGFsKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfcmVuZGVySWNvbigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRzaG93SWNvbixcblx0XHRcdGljb25Tb3VyY2UsXG5cdFx0XHRpY29uQ29tcG9uZW50LFxuXHRcdFx0Y3VzdG9tU3R5bGVzLFxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0aWYgKHNob3dJY29uKSB7XG5cdFx0XHRpZiAoaWNvbkNvbXBvbmVudCkge1xuXHRcdFx0XHRyZXR1cm4gaWNvbkNvbXBvbmVudDtcblx0XHRcdH1cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdHN0eWxlPXtbU3R5bGUuZGF0ZUljb24sIGN1c3RvbVN0eWxlcy5kYXRlSWNvbl19XG5cdFx0XHRcdFx0c291cmNlPXtpY29uU291cmNlIHx8IHJlcXVpcmUoJy4uL2RhdGVfaWNvbi5wbmcnKX1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZVBpY2tlcjtcbiJdLCJ2ZXJzaW9uIjozfQ==