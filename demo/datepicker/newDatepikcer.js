"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const datetimepicker_1 = require("@react-native-community/datetimepicker");
const react_native_1 = require("react-native");
const style_1 = require("./style");
var DefaultFormat;
(function (DefaultFormat) {
    DefaultFormat["date"] = "YYYY-MM-DD";
    DefaultFormat["datetime"] = "YYYY-MM-DD HH:mm";
    DefaultFormat["time"] = "HH:mm";
})(DefaultFormat || (DefaultFormat = {}));
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
        const firstOpacity = (props.visible) ? 1 : 0;
        const firstTranslateY = (props.visible) ? 0 : style_1.IOS_DATEPICKER_HEIGHT;
        this.state = {
            visible: props.visible || true,
            date: props.date ? new Date(props.date) : new Date(),
            animatedOpacity: new react_native_1.Animated.Value(firstOpacity),
            animatedTranslateY: new react_native_1.Animated.Value(firstTranslateY),
        };
    }
    render() {
        const DateTimePicker = ((this.state.visible) &&
            <datetimepicker_1.default value={this.state.date} minuteInterval={this.props.minuteInterval} onChange={(event, date) => this._onDateChange(event, date)}/>);
        return (react_native_1.Platform.OS === 'android' ? DateTimePicker :
            <react_native_1.Modal transparent={true} animationType="none" visible={this.state.visible} supportedOrientations={SUPPORTED_ORIENTATIONS} onRequestClose={() => this._hideModal()}>
				<react_native_1.Animated.View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: '#00000077', opacity: this.state.animatedOpacity }}>
					<react_native_1.TouchableWithoutFeedback style={style_1.default.datePickerMask} onPress={() => this._hideModal()}>
						<react_native_1.Animated.View style={[
                style_1.default.datePickerCon,
                { transform: [{ translateY: this.state.animatedTranslateY }] },
            ]}>
							{DateTimePicker}
						</react_native_1.Animated.View>
					</react_native_1.TouchableWithoutFeedback>
				</react_native_1.Animated.View>
			</react_native_1.Modal>);
    }
    _onDateChange(event, date) {
        if (date === undefined) { // dismissAction
            return this._cancelHandler();
        }
        const dateStr = dateToStr(date, this.props.format || DefaultFormat[this.props.mode]);
        this.setState({ date, visible: false });
        this.props.onDateChange(date, dateStr);
    }
    _cancelHandler() {
        this._hideDatePicker();
    }
    _showDatePicker() {
        if (react_native_1.Platform.OS === 'android') {
            this.setState({ visible: true });
        }
        else if (react_native_1.Platform.OS === 'ios') {
            this._showModal();
        }
    }
    _hideDatePicker() {
        if (react_native_1.Platform.OS === 'android') {
            this.setState({ visible: false });
        }
        else if (react_native_1.Platform.OS === 'ios') {
            this._hideModal();
        }
    }
    /** @description show modal for ios */
    _showModal() {
        this._animatedModal(true);
        this.setState({ visible: true });
    }
    /** @description hide modal for ios */
    _hideModal() {
        this._animatedModal(false);
        this.setState({ visible: false });
    }
    _animatedModal(isShow) {
        const ANIMATION_DURATION = 300;
        const SHOW_OPACITY = 1;
        const HIDE_OPACITY = 0;
        const SHOW_TRANSLATE_Y = 0;
        const HIDE_TRANSLATE_Y = style_1.IOS_DATEPICKER_HEIGHT;
        react_native_1.Animated.parallel([
            react_native_1.Animated.timing(this.state.animatedTranslateY, {
                toValue: (isShow) ? SHOW_TRANSLATE_Y : HIDE_TRANSLATE_Y,
                duration: ANIMATION_DURATION,
            }),
            react_native_1.Animated.timing(this.state.animatedOpacity, {
                toValue: (isShow) ? SHOW_OPACITY : HIDE_OPACITY,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    }
}
DatePicker.defaultProps = {
    visible: true,
    mode: 'date',
    date: new Date(),
};
function dateToStr(date, format) {
    return '';
}
exports.dateToStr = dateToStr;
exports.default = DatePicker;
//# sourceMappingURL=newDatepikcer.js.map
