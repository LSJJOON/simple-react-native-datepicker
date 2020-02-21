import { Component } from 'react';
declare class DatePicker extends Component {
    constructor(props: any);
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    setModalVisible(visible: any): void;
    onStartShouldSetResponder(e: any): boolean;
    onMoveShouldSetResponder(e: any): boolean;
    onPressMask(): void;
    onPressCancel(): void;
    onPressConfirm(): void;
    getDate(date?: any): any;
    getDateStr(date?: any): any;
    datePicked(): void;
    getTitleElement(): JSX.Element;
    onDateChange(date: any): void;
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
