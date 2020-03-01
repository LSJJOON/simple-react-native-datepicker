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
} from 'react-native';
import DatePicker, { Mode } from 'simple-react-native-datepicker';

class App extends Component {
	constructor() {
		super();
		this.state = { date: '', dateTime: '', time: '' };
	}
	public render() {
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={{ marginBottom: 20 }}>Hello! simple date picker!</Text>
					<DatePicker onDateChange={(date) => this.setState({ date })} date={this.state.date} placeholder='click here' />
					<DatePicker mode={Mode.datetime} onDateChange={(dateTime) => this.setState({ dateTime })} date={this.state.dateTime} placeholder='click here' />
					<DatePicker mode={Mode.time} onDateChange={(time) => this.setState({ time })} date={this.state.time} is24Hour={true} placeholder='click here' />
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
