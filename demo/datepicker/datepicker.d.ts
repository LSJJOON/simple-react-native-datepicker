import { Component, ComponentClass } from 'react';
import { TouchableHighlightProps, TouchableNativeFeedbackProps, TouchableOpacityProps, TouchableWithoutFeedbackProps, Animated, ViewStyle, ImageStyle, TextStyle, StyleProp, ImageSourcePropType } from 'react-native';
interface IProps {
    style?: StyleProp<ViewStyle>;
    height: number;
    date?: string | Date;
    minDate?: string | Date;
    maxDate?: string | Date;
    duration?: number;
    mode: Mode;
    format?: Format;
    androidDatetimeMode?: AndroidDatetimeMode;
    androidTimeMode?: AndroidTimeMode;
    confirmBtnText?: string;
    cancelBtnText?: string;
    customStyles: ICustomStyles;
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
export declare enum Mode {
    date = "date",
    datetime = "datetime",
    time = "time"
}
export declare enum AndroidDatetimeMode {
    default = "default",
    calendar = "calendar",
    spinner = "spinner"
}
export declare enum AndroidTimeMode {
    default = "default",
    clock = "clock",
    spinner = "spinner"
}
export declare enum Format {
    date = "YYYY-MM-DD",
    datetime = "YYYY-MM-DD HH:mm",
    time = "HH:mm"
}
interface IState {
    date: Date;
    modalVisible: boolean;
    animatedHeight: Animated.Value;
    opacity: Animated.Value;
    allowPointerEvents: boolean;
}
declare type Touchable = ComponentClass<TouchableHighlightProps> | ComponentClass<TouchableNativeFeedbackProps> | ComponentClass<TouchableOpacityProps> | ComponentClass<TouchableWithoutFeedbackProps>;
declare type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;
declare class DatePicker extends Component<IProps, IState> {
    static defaultProps: Partial<IProps>;
    readonly state: IState;
    constructor(props: IProps);
    render(): JSX.Element;
    UNSAFE_componentWillReceiveProps(nextProps: IProps): void;
    private setModalVisible;
    private onPressMask;
    private onPressCancel;
    private onPressConfirm;
    private getDate;
    private getDateStr;
    private datePicked;
    private getTitleElement;
    private onDateChange;
    private onDatePicked;
    private onTimePicked;
    private onDatetimePicked;
    private onDatetimeTimePicked;
    private onPressDate;
    private _renderIcon;
}
export default DatePicker;
