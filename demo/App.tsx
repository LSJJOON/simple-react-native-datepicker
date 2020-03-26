import React, { Component } from 'react';
import { View, SafeAreaView, Text, Button } from 'react-native';
// import DatePicker, { Mode } from 'simple-react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker
import DatePciker from './datepicker/newDatepikcer';

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
					<Text style={{ marginBottom: 20 }}>time is {String(this.state.date)}</Text>
					<Button
						onPress={() => {
							this.setState({ visible: true });
						}}
						title="show"
					/>
					<DatePciker
						visible={this.state.visible}
						onDateChange={(date) => this.setState({ date, visible: false })}
						date={this.state.date}
						cancelTextStyle={{ color: 'red' }}
						textColor="red"
						format="YYYY[year] MM[month]"
					/>
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
