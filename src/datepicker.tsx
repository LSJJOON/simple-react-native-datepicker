import * as React from 'react';
import { View, Text } from 'react-native';
    
interface IProps {
	text: string;
}
	
const SampleComponent = (props: IProps) => {
	const { text } = props;
	return <View><Text>Hello {text}</Text></View>
}
	
export default SampleComponent;
