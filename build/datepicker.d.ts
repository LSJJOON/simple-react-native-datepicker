import { Component } from 'react';
import { TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, Animated, ViewStyle, TextStyle, StyleProp, DatePickerAndroidOpenReturn, TimePickerAndroidOpenReturn } from 'react-native';
interface IProps {
    style: StyleProp<ViewStyle>;
    height: number;
    date: string | Date;
    minDate: string | Date;
    maxDate: string | Date;
    duration: number;
    mode: Mode;
    format: Format;
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
    btnConfirm: StyleProp<ViewStyle>;
    btnTextCancel: StyleProp<TextStyle>;
    btnCancel: StyleProp<ViewStyle>;
    datePicker: StyleProp<ViewStyle>;
}
declare type Touchable = TouchableHighlight | TouchableNativeFeedback | TouchableOpacity | TouchableWithoutFeedback;
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
declare class DatePicker extends Component<IProps> {
    readonly state: IState;
    static defaultProps: {
        mode: string;
        androidDatetimeMode: AndroidDatetimeMode;
        androidTimeMode: AndroidTimeMode;
        date: string;
        height: number;
        duration: number;
        confirmBtnText: string;
        cancelBtnText: string;
        iconSource: any;
        customStyles: {};
        showIcon: boolean;
        disabled: boolean;
        allowFontScaling: boolean;
        hideText: boolean;
        placeholder: string;
        TouchableComponent: typeof TouchableHighlight;
        modalOnResponderTerminationRequest: () => boolean;
    };
    constructor(props: IProps);
    UNSAFE_componentWillReceiveProps(nextProps: IProps): void;
    setModalVisible(visible: boolean): void;
    onPressMask(): void;
    onPressCancel(): void;
    onPressConfirm(): void;
    getDate(date?: string | Date): Date;
    getDateStr(date?: string | Date): string;
    datePicked(): void;
    getTitleElement(): JSX.Element;
    onDateChange(date: Date): void;
    onDatePicked({ action, year, month, day }: DatePickerAndroidOpenReturn): void;
    onTimePicked({ action, hour, minute }: TimePickerAndroidOpenReturn): void;
    onDatetimePicked({ action, year, month, day }: DatePickerAndroidOpenReturn): Promise<void>;
    onDatetimeTimePicked(year: number, month: number, day: number, { action, hour, minute }: TimePickerAndroidOpenReturn): void;
    onPressDate(): Promise<true | undefined>;
    _renderIcon(): any;
    render(): JSX.Element;
}
export default DatePicker;
