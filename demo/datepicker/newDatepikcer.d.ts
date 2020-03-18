import * as React from 'react';
import { Animated } from 'react-native';
export interface IProps {
    visible?: boolean;
    format?: string;
    mode: Mode;
    minuteInterval?: MinuteInterval;
    onDateChange: (date: Date, dateStr: string) => any;
    date: string | Date;
}
export interface IDeafaultProps {
    visible: boolean;
    mode: Mode;
    date: string | Date;
}
interface IState {
    visible: boolean;
    date: Date;
    animatedOpacity: Animated.Value;
    animatedTranslateY: Animated.Value;
}
declare type Mode = 'date' | 'datetime' | 'time';
declare type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;
declare class DatePicker extends React.Component<IProps> {
    static defaultProps: IDeafaultProps;
    readonly state: IState;
    constructor(props: IProps);
    render(): false | JSX.Element;
    private _onDateChange;
    private _cancelHandler;
    private _showDatePicker;
    private _hideDatePicker;
    /** @description show modal for ios */
    private _showModal;
    /** @description hide modal for ios */
    private _hideModal;
    private _animatedModal;
}
export declare function dateToStr(date: Date, format?: string | undefined): string;
export default DatePicker;
