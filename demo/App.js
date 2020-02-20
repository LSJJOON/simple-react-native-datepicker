/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import SampleComponent from '@lsj/react-native-datepicker';

const App: () => React$Node = () => {
  return (
    <View>
      <SampleComponent text={'demo'}/>
    </View>
  );
};

export default App;
