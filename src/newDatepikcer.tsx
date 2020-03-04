import * as React from 'react';
import RNDateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {
	Platform,
	TouchableWithoutFeedback,
	Modal,
} from 'react-native';
import * as moment from 'moment';

export interface IProps {
	visible?: boolean;
	format?: string;
	mode: Mode;
	minuteInterval?: MinuteInterval;
	onDateChange: (dateStr: string, date: Date | string) => any;
	date: string | Date;
}

enum Format {
	date = 'YYYY-MM-DD',
	datetime = 'YYYY-MM-DD HH:mm',
	time = 'HH:mm',
}

export interface IDeafaultProps {
	visible: boolean;
	mode: Mode;
	date: string | Date;
}

interface IState {
	visible: boolean;
	date: Date;
}

const SUPPORTED_ORIENTATIONS: SupportedOrientations[] = [
	'portrait',
	'portrait-upside-down',
	'landscape',
	'landscape-left',
	'landscape-right',
];
type Mode = 'date' | 'datetime' | 'time';
type SupportedOrientations = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
type MinuteInterval = 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | undefined;

class DatePicker extends React.Component<IProps> {
	public static defaultProps: IDeafaultProps = {
		visible: true,
		mode: 'date',
		date: new Date(),
	};

	public readonly state: IState;

	constructor(props: IProps) {
		super(props);

		this.state = {
			visible: props.visible || true,
			date: props.date ? new Date(props.date) : new Date(),
		};
	}

	public render() {
		const DateTimePicker = ((this.state.visible) &&
			<RNDateTimePicker
				value={this.state.date}
				minuteInterval={this.props.minuteInterval}
				onChange={(event, date) => this._onDateChange(event, date)}
			/>);
		return (
			Platform.OS === 'android' ? DateTimePicker :
			<Modal
				transparent={true}
				animationType="none"
				visible={this.state.visible}
				supportedOrientations={SUPPORTED_ORIENTATIONS}
				onRequestClose={() => this._hideModal()}
			>
				{/** toucahble */}
			</Modal>
		);
	}

	private _onDateChange(event: Event, date: Date | undefined) {
		if (date === undefined) { // dismissAction
			this._cancelHandler();
		}
	}

	private _cancelHandler() {
		this._hideDatePicker();
	}

	private _showDatePicker() {
		if (Platform.OS === 'android') {
			this.setState({ visible: true });
		} else if (Platform.OS === 'ios') {
			this._showModal();
		}
	}

	private _hideDatePicker() {
		if (Platform.OS === 'android') {
			this.setState({ visible: false });
		} else if (Platform.OS === 'ios') {
			this._hideModal();
		}
	}

	/** @description show modal for ios */
	private _showModal() {
		// show modal with animation
	}

	/** @description hide modal for ios */
	private _hideModal() {
		// hide modal with animation
	}
}

export default DatePicker;
