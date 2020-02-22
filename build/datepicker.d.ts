import { Component } from 'react';
import { TouchableHighlight, Animated, TextStyle, Touchable, StyleProp } from 'react-native';
interface IProps {
    height: number;
    date: string | Date;
    minDate: string | Date;
    maxDate: string | Date;
    duration: number;
    mode: Mode;
    format: Format;
    androidMode: AndroidMode;
    confirmBtnText: string;
    cancelBtnText: string;
    customStyles: CustomStyles;
    showIcon: boolean;
    disabled: boolean;
    allowFontScaling: boolean;
    hideText: boolean;
    placeholder: string;
    TouchableComponent: Touchable;
    supportedOrientations: SupportedOrientations;
    getDateStr: (date: Date) => string;
    onDateChange: (dateStr: string, date: Date | string) => any;
    onPressMask: Function | undefined;
    onCloseModal: Function | undefined;
}
interface CustomStyles {
    placeholderText: StyleProp<TextStyle>;
    dateText: StyleProp<TextStyle>;
    btnTextConfirm: StyleProp<TextStyle>;
}
export declare enum Mode {
    date = "date",
    datetime = "datetime",
    time = "time"
}
export declare enum AndroidMode {
    default = "default",
    calendar = "calendar",
    spinner = "spinner"
}
export declare enum Format {
    date = "YYYY-MM-DD",
    datetime = "YYYY-MM-DD HH:mm",
    time = "HH:mm"
}
interface IState {
    date: string | Date;
    modalVisible: boolean;
    animatedHeight: Animated.Value;
    opacity: Animated.Value;
    allowPointerEvents: boolean;
}
export declare enum SupportedOrientations {
    portrait = "portrait",
    portraitUpsideDown = "portrait-upside-down",
    landscape = "landscape"
}
declare class DatePicker extends Component<IProps> {
    readonly state: IState;
    static defaultProps: {
        mode: string;
        androidMode: string;
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
    onDatePicked({ action, year, month, day }: {
        action: any;
        year: any;
        month: any;
        day: any;
    }): void;
    onTimePicked({ action, hour, minute }: {
        action: any;
        hour: any;
        minute: any;
    }): void;
    onDatetimePicked({ action, year, month, day }: {
        action: any;
        year: any;
        month: any;
        day: any;
    }): void;
    onDatetimeTimePicked(year: any, month: any, day: any, { action, hour, minute }: {
        action: any;
        hour: any;
        minute: any;
    }): void;
    onPressDate(): true | undefined;
    _renderIcon(): any;
    render(): JSX.Element;
}
export default DatePicker;
