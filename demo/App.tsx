import React, { Component } from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
import DatePicker from 'simple-react-native-datepicker';

interface IState {
	visible: boolean;
	dateStr?: string;
	date?: Date;
}

class App extends Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = { dateStr: '', date: new Date(), visible: false };
	}
	public render() {
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
				<View>
					<Text style={{ marginBottom: 20, color: '#fff' }}>Hello! simple date picker!</Text>
					<Text style={{ marginBottom: 20, color: '#fff' }}>time is {String(this.state.dateStr)}</Text>
					<Button onPress={() => this.showDatePicker()} title="show" />
					<DatePicker
						visible={this.state.visible}
						onDateChange={(dateStr, date) => this.onDateChange(dateStr, date)}
						date={this.state.date}
					/>
				</View>
			</SafeAreaView>
		);
	}

	public showDatePicker() {
		this.setState({ visible: true });
	}

	public onDateChange(dateStr?: string, date?: Date) {
		if (dateStr === undefined) {
			dateStr = 'canceled';
		}
		this.setState({ dateStr, date, visible: false });
	}
}

export default App;
