import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
	Platform,
} from 'react-native';

export interface IProps {

}

export interface IDeafaultProps {
}

interface IState {
}

class DatePicker extends React.Component<IProps> {
	public static defaultProps: IDeafaultProps = {};
	public readonly state: IState;

	constructor(props: IProps) {
		super(props);

		this.state = {
		};
	}

	public render() {
		return (<DateTimePicker value={new Date()} />);
	}
}
