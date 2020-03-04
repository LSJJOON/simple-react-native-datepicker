/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	Button,
} from 'react-native';
import DatePicker, { Mode } from 'simple-react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '', dateTime: '', time: '', visible: false };
	}
	public render() {
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={{ marginBottom: 20 }}>Hello! simple date picker!</Text>
					<Button onPress={() => this.setState({ visible: !this.state.visible })} title='show' />
					{this.state.visible && <DateTimePicker value={new Date()} onChange={(event, date) => console.log(date)} display='spinner' />}
					{/* <DatePicker onDateChange={(date) => this.setState({ date })} date={this.state.date} placeholder='click here' />
					<DatePicker mode={Mode.datetime} onDateChange={(dateTime) => this.setState({ dateTime })} date={this.state.dateTime} placeholder='click here' />
					<DatePicker mode={Mode.time} onDateChange={(time) => this.setState({ time })} date={this.state.time} is24Hour={true} placeholder='click here' /> */}
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
