
import React, { Component } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	Button,
} from 'react-native';
// import DatePicker, { Mode } from 'simple-react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker
import DatePciker from './datepicker/newDatepikcer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date(), dateTime: '', time: '', visible: false };
	}
	public render() {
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={{ marginBottom: 20 }}>Hello! simple date picker!</Text>
					<Text style={{ marginBottom: 20 }}>time is {String(this.state.date)}</Text>
					<Button onPress={() => this.setState({ visible: true })} title='show' />
					<DatePciker visible={true} onDateChange={(date) => this.setState({ date })} date={this.state.date} />
					{/* <DatePicker mode={Mode.datetime} onDateChange={(dateTime) => this.setState({ dateTime })} date={this.state.dateTime} placeholder='click here' />
					<DatePicker mode={Mode.time} onDateChange={(time) => this.setState({ time })} date={this.state.time} is24Hour={true} placeholder='click here' /> */}
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
