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
} from 'react-native';
import DatePicker from './datepicker'

class App extends Component {
	render () {
		return (
			<SafeAreaView>
      	<DatePicker />
    	</SafeAreaView>
		);
	}
}

export default App;
