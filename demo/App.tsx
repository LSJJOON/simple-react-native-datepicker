
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
		console.log(this.state.visible)
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<View>
					<Text style={{ marginBottom: 20 }}>Hello! simple date picker!</Text>
					<Text style={{ marginBottom: 20 }}>time is {String(this.state.date)}</Text>
					<Button onPress={() => {
						console.log(this.state.visible)
						this.setState({ visible: !this.state.visible });
						}} title='show' />
					<DatePciker visible={this.state.visible} onDateChange={(date) => this.setState({ date })} date={this.state.date} />
				</View>
			</SafeAreaView>
		);
	}
}

export default App;
