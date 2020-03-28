import React, { Component } from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
// import DatePicker, { Mode } from 'simple-react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker
import DatePciker from './datepicker/newDatepikcer';

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
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={{ marginBottom: 20 }}>Hello! simple date picker!</Text>
					<Text style={{ marginBottom: 20 }}>time is {String(this.state.dateStr)}</Text>
					<Button
						onPress={() => {
							this.setState({ visible: true });
						}}
						title="show"
					/>
					<DatePciker
						visible={this.state.visible}
						onDateChange={(dateStr, date) => this.setState({ dateStr, date, visible: false })}
						date={this.state.date}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
