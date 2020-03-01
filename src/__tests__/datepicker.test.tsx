import * as React from 'react';
// import React, { Component } from 'react';
import {Platform, Animated, DatePickerAndroid, Modal, View} from 'react-native';
import * as Moment from 'moment';
import DatePicker, { Format, Mode } from '../datepicker';
import 'jsdom-global/register';
import {shallow, configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const originalConsoleError = console.error;
console.error = (message: string) => {
	if (message.startsWith('Warning:')) {
		return;
	}

	originalConsoleError(message);
};

import * as renderer from 'react-test-renderer';

describe('DatePicker', () => {

	it ('renders correctly (snapshot test)', () => {
		const tree = renderer.create(<DatePicker date='2019-01-01' />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	describe('props and state values test start!', () => {
		it('default values correctly', () => {
			const datePicker = mount(<DatePicker />);
			const defaultProps = datePicker.props();

			expect(defaultProps.mode).toEqual('date');
			expect(defaultProps.duration).toEqual(300);
			expect(defaultProps.height).toBeGreaterThan(200);
			expect(defaultProps.confirmBtnText).toEqual('Confirm');
			expect(defaultProps.cancelBtnText).toEqual('Cancel');
			expect(defaultProps.customStyles).toMatchObject({});
			expect(defaultProps.showIcon).toEqual(true);
			expect(defaultProps.disabled).toEqual(false);
		});

		it('state values correctly', () => {
			const datePicker = mount(<DatePicker />);
			expect(datePicker.state('date')).toBeInstanceOf(Date);
			expect(datePicker.state('modalVisible')).toEqual(false);
			expect(datePicker.state('animatedHeight')).toBeInstanceOf(Animated.Value);
			expect(datePicker.instance()._renderIcon()).toBeTruthy();
		});

		it('custom props setting component correctly', () => {
			const datePicker1 = mount(
			<DatePicker
				onDateChange={() => 1}
				date="2016-05-11"
				format={Format.date}
				mode={Mode.datetime}
				duration={400}
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				iconSource={{}}
				customStyles={{ placeholderText: { color: '#red' } }}
				disabled={true}
				showIcon={false}
			/>
		);
			expect(datePicker1.props().mode).toEqual('datetime');
			expect(datePicker1.props().format).toEqual('YYYY-MM-DD');
			expect(datePicker1.props().duration).toEqual(400);
			expect(datePicker1.props().confirmBtnText).toEqual('Confirm');
			expect(datePicker1.props().cancelBtnText).toEqual('Cancel');
			expect(datePicker1.props().iconSource).toMatchObject({});
			expect(datePicker1.props().customStyles).toMatchObject({ placeholderText: { color: '#red' } });
			expect(datePicker1.props().showIcon).toEqual(false);
			expect(datePicker1.props().disabled).toEqual(true);
			expect(datePicker1.state('date')).toMatchObject(Moment('2016-05-11', 'YYYY-MM-DD').toDate());
			expect(datePicker1.instance()._renderIcon()).toEqual(null);

			const wrapper = shallow(<DatePicker date={new Date('2016/09/09')} />);
			expect(wrapper.instance().getDateStr()).toEqual('2016-09-09');

			const wrapper2 = shallow(<DatePicker showIcon={false} date={{ test: 123 }} />);
			expect(wrapper2.instance().getDateStr()).toEqual('Invalid date');
		});

		it('iconComponent setting correctly', () => {
			const iconComponent = shallow(<View>iconComponent</View>);
			const wrapper = shallow(<DatePicker date={new Date('2016/09/09')} iconComponent={iconComponent}/>);
			const datePicker = wrapper.instance();
			expect(datePicker._renderIcon()).toEqual(iconComponent);

			const wrapper2 = shallow(<DatePicker showIcon={false} date={{ test: 123 }} />);
			expect(wrapper2.find('Image').length).toEqual(0);
			expect(wrapper2.instance()._renderIcon()).toEqual(null);
		});

		it('default selected value correctly', () => {
			let dateStr = null;
			const wrapper = shallow(<DatePicker date="" onDateChange={(date) => {
				dateStr = date;
			}}/>);
			const datePicker = wrapper.instance();

			datePicker.onPressConfirm();

			expect(dateStr).toEqual(Moment().format('YYYY-MM-DD'));
		});

		it('default selected Date with minDate and maxDate', () => {
			let dateStr = null;
			let dateStrMax = null;
			let dateStrNormal = null;

			const wrapper = shallow(<DatePicker date="" minDate="3000-09-09" onDateChange={(date) => {
				dateStr = date;
			}}/>);
			const datePicker = wrapper.instance();

			datePicker.onPressConfirm();

			expect(dateStr).toEqual('3000-09-09');

			const wrapperMax = shallow(<DatePicker date="" maxDate="2016-07-07" onDateChange={(date) => {
				dateStrMax = date;
			}}/>);
			const datePickerMax = wrapperMax.instance();

			datePickerMax.onPressConfirm();

			expect(dateStrMax).toEqual('2016-07-07');

			const wrapperNormal = shallow(
				<DatePicker date="" minDate="2016-07-07" maxDate="3000-09-09" onDateChange={(date) => { dateStrNormal = date; }}/>
			);
			const datePickerNormal = wrapperNormal.instance();

			datePickerNormal.onPressConfirm();

			expect(dateStrNormal).toEqual(Moment().format('YYYY-MM-DD'));
		});

		it('setModalVisible', () => {
			const wrapper = shallow(<DatePicker />);
			const datePicker = wrapper.instance();

			datePicker.setModalVisible(true);

			expect(wrapper.state('modalVisible')).toEqual(true);
			expect(wrapper.state('animatedHeight')._animation._toValue).toEqual(0);

			datePicker.setModalVisible(false);
			expect(wrapper.state('animatedHeight')._animation._toValue).toBeGreaterThan(200);
		});

		it('onPressCancel', () => {
			const setModalVisible = jest.fn();
			const onCloseModal = jest.fn();
			const wrapper = shallow(<DatePicker onCloseModal={onCloseModal}/>);
			const datePicker = wrapper.instance();
			datePicker.setModalVisible = setModalVisible;

			datePicker.onPressCancel();

			expect(setModalVisible).toHaveBeenCalledWith(false);
			expect(onCloseModal).toHaveBeenCalledTimes(1);
		});

		it('onPressMask', () => {
			const onPressMask = jest.fn();
			const wrapper = shallow(<DatePicker onPressMask={onPressMask}/>);
			const datePicker = wrapper.instance();

			datePicker.onPressMask();

			expect(onPressMask).toHaveBeenCalledTimes(1);

			// call onPressCancel when without onPressMask cb func
			const onPressCancel = jest.fn();
			const wrapper1 = shallow(<DatePicker />);
			const datePicker1 = wrapper1.instance();
			datePicker1.onPressCancel = onPressCancel;

			datePicker1.onPressMask();

			expect(onPressCancel).toHaveBeenCalledTimes(1);
		});

		it('onPressConfirm', () => {
			const setModalVisible = jest.fn();
			const datePicked = jest.fn();
			const onCloseModal = jest.fn();
			const wrapper = shallow(<DatePicker onCloseModal={onCloseModal}/>);
			const datePicker = wrapper.instance();
			datePicker.setModalVisible = setModalVisible;
			datePicker.datePicked = datePicked;

			datePicker.onPressConfirm();

			expect(setModalVisible).toHaveBeenCalledWith(false);
			expect(datePicked).toHaveBeenCalledTimes(1);
			expect(onCloseModal).toHaveBeenCalledTimes(1);
		});

		it('getDate', () => {
			const wrapper = shallow(<DatePicker date="2016-06-04"/>);
			const datePicker = wrapper.instance();

			expect(datePicker.getDate()).toMatchObject(Moment('2016-06-04', 'YYYY-MM-DD').toDate());
			expect(datePicker.getDate('2016-06-06')).toMatchObject(Moment('2016-06-06', 'YYYY-MM-DD').toDate());

			const date = new Date();
			expect(datePicker.getDate(date)).toEqual(date);
		});

		it('getDateStr', () => {
			const wrapper = shallow(<DatePicker date="2016-06-01"/>);
			const datePicker = wrapper.instance();

			expect(datePicker.getDateStr()).toEqual('2016-06-01');
			expect(datePicker.getDateStr(new Date('2016-06-02'))).toEqual('2016-06-02');
			expect(datePicker.getDateStr('2016-06-03')).toEqual('2016-06-03');

			wrapper.setProps({format: 'YYYY/MM/DD'});
			expect(datePicker.getDateStr(new Date('2016-06-02'))).toEqual('2016/06/02');
		});

		it('datePicked', () => {
			const onDateChange = jest.fn();
			const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
			const datePicker = wrapper.instance();
			const date = new Date('2016-06-06');
			wrapper.setState({date});

			datePicker.datePicked();

			expect(onDateChange).toHaveBeenCalledWith('2016-06-06', date);
		});

		it('onDatePicked', () => {
			const onDateChange = jest.fn();
			const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
			const datePicker = wrapper.instance();

			datePicker.onDatePicked({action: DatePickerAndroid.dismissedAction, year: 2016, month: 5, day: 12});
			datePicker.onDatePicked({action: '', year: 2016, month: 5, day: 12});

			expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 12));
			expect(onDateChange).toHaveBeenCalledTimes(1);
		});

		it('onTimePicked', () => {
			const onDateChange = jest.fn();
			const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
			const datePicker = wrapper.instance();

			datePicker.onTimePicked({action: DatePickerAndroid.dismissedAction, hour: 12, minute: 10});
			datePicker.onTimePicked({action: '', hour: 12, minute: 10});

			expect(wrapper.state('date').getHours()).toEqual(12);
			expect(wrapper.state('date').getMinutes()).toEqual(10);
			expect(onDateChange).toHaveBeenCalledTimes(1);
		});

		it('onDatetimeTimePicked', () => {
			const onDateChange = jest.fn();
			const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
			const datePicker = wrapper.instance();

			datePicker.onDatetimePicked(
				{timePickerResult: { action: DatePickerAndroid.dismissedAction }, year: 2016, month: 12, day: 12}
			);
			datePicker.onDatetimePicked({action: '', year: 2016, month: 12, day: 12});
			datePicker.onDatetimeTimePicked({
				year: 2016, month: 6, day: 1, timePickerResult: { action: DatePickerAndroid.dismissedAction, hour: 12, minute: 10 }
			});
			datePicker.onDatetimeTimePicked({
				year: 2016, month: 6, day: 1, timePickerResult: { action: DatePickerAndroid.dateSetAction, hour: 12, minute: 10 }
			});

			expect(wrapper.state('date').getFullYear()).toEqual(2016);
			expect(wrapper.state('date').getMonth()).toEqual(6);
			expect(wrapper.state('date').getDate()).toEqual(1);
			expect(wrapper.state('date').getHours()).toEqual(12);
			expect(wrapper.state('date').getMinutes()).toEqual(10);
			expect(onDateChange).toHaveBeenCalledTimes(1);
		});

		it('onPressDate', () => {
			Platform.OS = 'ios';
			const setModalVisible = jest.fn();
			const onOpenModal = jest.fn();
			const wrapper = shallow(
				<DatePicker date="2016-05-06" minDate="2016-04-01" maxDate="2016-06-01" onOpenModal={onOpenModal}/>
			);
			const datePicker = wrapper.instance();
			datePicker.setModalVisible = setModalVisible;

			wrapper.setProps({disabled: true});
			datePicker.onPressDate();

			expect(setModalVisible).toHaveBeenCalledTimes(0);

			wrapper.setProps({disabled: false});
			datePicker.onPressDate();
			expect(wrapper.state('date')).toMatchObject(datePicker.getDate());
			expect(setModalVisible).toHaveBeenCalledTimes(1);
			expect(onOpenModal).toHaveBeenCalledTimes(1);

			Platform.OS = 'android';
			expect(datePicker.onPressDate).not.toThrow(Error);

			wrapper.setProps({mode: 'datetime'});
			expect(datePicker.onPressDate).not.toThrow(Error);

			wrapper.setProps({mode: 'time'});
			expect(datePicker.onPressDate).not.toThrow(Error);
		});

		it('panResponder', () => {
			Platform.OS = 'ios';
			const wrapper = shallow(<DatePicker date="2016-05-06" minDate="2016-04-01" maxDate="2016-06-01"/>);
			const datePicker = wrapper.instance();

			datePicker.onPressDate();

			expect(datePicker.onStartShouldSetResponder()).toEqual(true);
			expect(datePicker.onMoveShouldSetResponder()).toEqual(true);
		});

		it('getTitleElement - with placeholder', () => {
			const placeholder = 'Please pick a date';
			const wrapper = shallow(<DatePicker placeholder={placeholder} />);
			const datePicker = wrapper.instance();

			expect(datePicker.getTitleElement().props.children).toEqual(placeholder);
		});

		it('getTitleElement - without placeholder', () => {
			const wrapper = shallow(<DatePicker date="2016-06-04" />);
			const datePicker = wrapper.instance();

			expect(datePicker.getTitleElement().props.children).toEqual(datePicker.getDateStr());
		});

		it('`date` prop changes', () => {
			const wrapper = shallow(<DatePicker date="2016-06-04" />);

			expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 4));

			wrapper.setProps({date: '2016-06-05'});

			expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 5));
		});
	});
});

describe('Coverage', () => {

	it('Event: onRequestClose', () => {
		Platform.OS = 'ios';
		const setModalVisible = jest.fn();
		const wrapper = shallow(<DatePicker />);
		const datePicker = wrapper.instance();
		datePicker.setModalVisible = setModalVisible;

		wrapper.find(Modal).simulate('requestClose');

		expect(setModalVisible).toHaveBeenCalledTimes(1);
	});

	it('Event: onDateChange', () => {
		Platform.OS = 'ios';
		const wrapper = shallow(<DatePicker />);

		wrapper.find('DatePickerIOS').simulate('dateChange');
	});
});
