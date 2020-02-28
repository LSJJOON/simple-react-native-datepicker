"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import React, { Component } from 'react';
// import {Platform, Animated, DatePickerAndroid, Modal, View} from 'react-native';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Moment from 'moment';
const datepicker_1 = require("../datepicker");
// Enzyme.configure({adapter: new Adapter()});
const renderer = require("react-test-renderer");
describe('DatePicker', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<datepicker_1.default onDateChange={() => ({})}></datepicker_1.default>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    // it('initialize', () => {
    // 	const wrapper = shallow(<DatePicker />);
    // 	const datePicker = wrapper.instance();
    // 	expect(datePicker.props.mode).toEqual('date');
    // 	expect(datePicker.props.duration).toEqual(300);
    // 	expect(datePicker.props.height).toBeGreaterThan(200);
    // 	expect(datePicker.props.confirmBtnText).toEqual('确定');
    // 	expect(datePicker.props.cancelBtnText).toEqual('取消');
    // 	expect(datePicker.props.customStyles).toMatchObject({});
    // 	expect(datePicker.props.showIcon).toEqual(true);
    // 	expect(datePicker.props.disabled).toEqual(false);
    // 	expect(wrapper.state('date')).toBeInstanceOf(Date);
    // 	expect(wrapper.state('modalVisible')).toEqual(false);
    // 	expect(wrapper.state('animatedHeight')).toBeInstanceOf(Animated.Value);
    // 	expect(datePicker._renderIcon()).toBeTruthy();
    // 	const wrapper1 = shallow(
    // 		<DatePicker
    // 			date="2016-05-11"
    // 			format="YYYY/MM/DD"
    // 			mode="datetime"
    // 			duration={400}
    // 			confirmBtnText="Confirm"
    // 			cancelBtnText="Cancel"
    // 			iconSource={{}}
    // 			customStyles={{testStyle: 123}}
    // 			disabled={true}
    // 			showIcon={false}
    // 		/>
    // 	);
    // 	const datePicker1 = wrapper1.instance();
    // 	expect(datePicker1.props.mode).toEqual('datetime');
    // 	expect(datePicker1.props.format).toEqual('YYYY/MM/DD');
    // 	expect(datePicker1.props.duration).toEqual(400);
    // 	expect(datePicker1.props.confirmBtnText).toEqual('Confirm');
    // 	expect(datePicker1.props.cancelBtnText).toEqual('Cancel');
    // 	expect(datePicker1.props.iconSource).toMatchObject({});
    // 	expect(datePicker1.props.customStyles).toMatchObject({testStyle: 123});
    // 	expect(datePicker1.props.showIcon).toEqual(false);
    // 	expect(datePicker1.props.disabled).toEqual(true);
    // 	expect(wrapper1.state('date')).toMatchObject(Moment('2016-05-11', 'YYYY-MM-DD').toDate());
    // 	expect(datePicker1._renderIcon()).toEqual(null);
    // 	// find not work with mount, and defaultProps not work with shallow...
    // 	const iconComponent = shallow(<View>iconComponent</View>);
    // 	const wrapper2 = shallow(<DatePicker date={new Date('2016/09/09')} iconComponent={iconComponent}/>);
    // 	const datePicker2 = wrapper2.instance();
    // 	expect(wrapper2.instance().getDateStr()).toEqual('2016-09-09');
    // 	expect(datePicker2._renderIcon()).toEqual(iconComponent);
    // 	const wrapper3 = shallow(<DatePicker showIcon={false} date={{test: 123}} />);
    // 	expect(wrapper3.find('Image').length).toEqual(0);
    // 	expect(wrapper3.instance().getDateStr()).toEqual('Invalid date');
    // 	expect(datePicker1._renderIcon()).toEqual(null);
    // });
    // it('default selected Date', () => {
    // 	var dateStr = null;
    // 	const wrapper = shallow(<DatePicker date="" onDateChange={(date) => {
    // 		dateStr = date;
    // 	}}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onPressConfirm();
    // 	expect(dateStr).toEqual(Moment().format('YYYY-MM-DD'));
    // });
    // it('default selected Date with minDate and maxDate', () => {
    // 	var dateStr = null;
    // 	var dateStrMax = null;
    // 	var dateStrNormal = null;
    // 	const wrapper = shallow(<DatePicker date="" minDate="3000-09-09" onDateChange={(date) => {
    // 		dateStr = date;
    // 	}}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onPressConfirm();
    // 	expect(dateStr).toEqual('3000-09-09');
    // 	const wrapperMax = shallow(<DatePicker date="" maxDate="2016-07-07" onDateChange={(date) => {
    // 		dateStrMax = date;
    // 	}}/>);
    // 	const datePickerMax = wrapperMax.instance();
    // 	datePickerMax.onPressConfirm();
    // 	expect(dateStrMax).toEqual('2016-07-07');
    // 	const wrapperNormal = shallow(
    // 		<DatePicker date="" minDate="2016-07-07" maxDate="3000-09-09" onDateChange={(date) => {dateStrNormal = date;}}/>
    // 	);
    // 	const datePickerNormal = wrapperNormal.instance();
    // 	datePickerNormal.onPressConfirm();
    // 	expect(dateStrNormal).toEqual(Moment().format('YYYY-MM-DD'));
    // });
    // it('setModalVisible', () => {
    // 	const wrapper = shallow(<DatePicker />);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.setModalVisible(true);
    // 	expect(wrapper.state('modalVisible')).toEqual(true);
    // 	expect(wrapper.state('animatedHeight')._animation._toValue).toEqual(0);
    // 	datePicker.setModalVisible(false);
    // 	expect(wrapper.state('animatedHeight')._animation._toValue).toBeGreaterThan(200);
    // });
    // it('onPressCancel', () => {
    // 	const setModalVisible = jest.fn();
    // 	const onCloseModal = jest.fn();
    // 	const wrapper = shallow(<DatePicker onCloseModal={onCloseModal}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.setModalVisible = setModalVisible;
    // 	datePicker.onPressCancel();
    // 	expect(setModalVisible).toHaveBeenCalledWith(false);
    // 	expect(onCloseModal).toHaveBeenCalledTimes(1);
    // });
    // it('onPressMask', () => {
    // 	const onPressMask = jest.fn();
    // 	const wrapper = shallow(<DatePicker onPressMask={onPressMask}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onPressMask();
    // 	expect(onPressMask).toHaveBeenCalledTimes(1);
    // 	// call onPressCancel when without onPressMask cb func
    // 	const onPressCancel = jest.fn();
    // 	const wrapper1 = shallow(<DatePicker />);
    // 	const datePicker1 = wrapper1.instance();
    // 	datePicker1.onPressCancel = onPressCancel;
    // 	datePicker1.onPressMask();
    // 	expect(onPressCancel).toHaveBeenCalledTimes(1);
    // });
    // it('onPressConfirm', () => {
    // 	const setModalVisible = jest.fn();
    // 	const datePicked = jest.fn();
    // 	const onCloseModal = jest.fn();
    // 	const wrapper = shallow(<DatePicker onCloseModal={onCloseModal}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.setModalVisible = setModalVisible;
    // 	datePicker.datePicked = datePicked;
    // 	datePicker.onPressConfirm();
    // 	expect(setModalVisible).toHaveBeenCalledWith(false);
    // 	expect(datePicked).toHaveBeenCalledTimes(1);
    // 	expect(onCloseModal).toHaveBeenCalledTimes(1);
    // });
    // it('getDate', () => {
    // 	const wrapper = shallow(<DatePicker date="2016-06-04"/>);
    // 	const datePicker = wrapper.instance();
    // 	expect(datePicker.getDate()).toMatchObject(Moment('2016-06-04', 'YYYY-MM-DD').toDate());
    // 	expect(datePicker.getDate('2016-06-06')).toMatchObject(Moment('2016-06-06', 'YYYY-MM-DD').toDate());
    // 	const date = new Date();
    // 	expect(datePicker.getDate(date)).toEqual(date);
    // });
    // it('getDateStr', () => {
    // 	const wrapper = shallow(<DatePicker date="2016-06-01"/>);
    // 	const datePicker = wrapper.instance();
    // 	expect(datePicker.getDateStr()).toEqual('2016-06-01');
    // 	expect(datePicker.getDateStr(new Date('2016-06-02'))).toEqual('2016-06-02');
    // 	expect(datePicker.getDateStr('2016-06-03')).toEqual('2016-06-03');
    // 	wrapper.setProps({format: 'YYYY/MM/DD'});
    // 	expect(datePicker.getDateStr(new Date('2016-06-02'))).toEqual('2016/06/02');
    // });
    // it('datePicked', () => {
    // 	const onDateChange = jest.fn();
    // 	const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
    // 	const datePicker = wrapper.instance();
    // 	const date = new Date('2016-06-06');
    // 	wrapper.setState({date});
    // 	datePicker.datePicked();
    // 	expect(onDateChange).toHaveBeenCalledWith('2016-06-06', date);
    // });
    // it('onDatePicked', () => {
    // 	const onDateChange = jest.fn();
    // 	const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onDatePicked({action: DatePickerAndroid.dismissedAction, year: 2016, month: 5, day: 12});
    // 	datePicker.onDatePicked({action: '', year: 2016, month: 5, day: 12});
    // 	expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 12));
    // 	expect(onDateChange).toHaveBeenCalledTimes(1);
    // });
    // it('onTimePicked', () => {
    // 	const onDateChange = jest.fn();
    // 	const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onTimePicked({action: DatePickerAndroid.dismissedAction, hour: 12, minute: 10});
    // 	datePicker.onTimePicked({action: '', hour: 12, minute: 10});
    // 	expect(wrapper.state('date').getHours()).toEqual(12);
    // 	expect(wrapper.state('date').getMinutes()).toEqual(10);
    // 	expect(onDateChange).toHaveBeenCalledTimes(1);
    // });
    // it('onDatetimeTimePicked', () => {
    // 	const onDateChange = jest.fn();
    // 	const wrapper = shallow(<DatePicker onDateChange={onDateChange}/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onDatetimePicked({action: DatePickerAndroid.dismissedAction, year: 2016, month: 12, day: 12});
    // 	datePicker.onDatetimePicked({action: '', year: 2016, month: 12, day: 12});
    // 	datePicker.onDatetimeTimePicked(2016, 6, 1, {action: DatePickerAndroid.dismissedAction, hour: 12, minute: 10});
    // 	datePicker.onDatetimeTimePicked(2016, 6, 1, {action: '', hour: 12, minute: 10});
    // 	expect(wrapper.state('date').getFullYear()).toEqual(2016);
    // 	expect(wrapper.state('date').getMonth()).toEqual(6);
    // 	expect(wrapper.state('date').getDate()).toEqual(1);
    // 	expect(wrapper.state('date').getHours()).toEqual(12);
    // 	expect(wrapper.state('date').getMinutes()).toEqual(10);
    // 	expect(onDateChange).toHaveBeenCalledTimes(1);
    // });
    // it('onPressDate', () => {
    // 	Platform.OS = 'ios';
    // 	const setModalVisible = jest.fn();
    // 	const onOpenModal = jest.fn();
    // 	const wrapper = shallow(
    // 		<DatePicker date="2016-05-06" minDate="2016-04-01" maxDate="2016-06-01" onOpenModal={onOpenModal}/>
    // 	);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.setModalVisible = setModalVisible;
    // 	wrapper.setProps({disabled: true});
    // 	datePicker.onPressDate();
    // 	expect(setModalVisible).toHaveBeenCalledTimes(0);
    // 	wrapper.setProps({disabled: false});
    // 	datePicker.onPressDate();
    // 	expect(wrapper.state('date')).toMatchObject(datePicker.getDate());
    // 	expect(setModalVisible).toHaveBeenCalledTimes(1);
    // 	expect(onOpenModal).toHaveBeenCalledTimes(1);
    // 	Platform.OS = 'android';
    // 	expect(datePicker.onPressDate).not.toThrow(Error);
    // 	wrapper.setProps({mode: 'datetime'});
    // 	expect(datePicker.onPressDate).not.toThrow(Error);
    // 	wrapper.setProps({mode: 'time'});
    // 	expect(datePicker.onPressDate).not.toThrow(Error);
    // 	wrapper.setProps({mode: 'tttt'});
    // 	expect(datePicker.onPressDate).toThrow(Error);
    // });
    // it('panResponder', () => {
    // 	Platform.OS = 'ios';
    // 	const wrapper = shallow(<DatePicker date="2016-05-06" minDate="2016-04-01" maxDate="2016-06-01"/>);
    // 	const datePicker = wrapper.instance();
    // 	datePicker.onPressDate();
    // 	expect(datePicker.onStartShouldSetResponder()).toEqual(true);
    // 	expect(datePicker.onMoveShouldSetResponder()).toEqual(true);
    // 	expect(datePicker.props.modalOnResponderTerminationRequest()).toEqual(true);
    // });
    // it('getTitleElement - with placeholder', () => {
    // 	const placeholder = 'Please pick a date';
    // 	const wrapper = shallow(<DatePicker placeholder={placeholder} />);
    // 	const datePicker = wrapper.instance();
    // 	expect(datePicker.getTitleElement().props.children).toEqual(placeholder);
    // });
    // it('getTitleElement - without placeholder', () => {
    // 	const wrapper = shallow(<DatePicker date="2016-06-04" />);
    // 	const datePicker = wrapper.instance();
    // 	expect(datePicker.getTitleElement().props.children).toEqual(datePicker.getDateStr());
    // });
    // it('`date` prop changes', () => {
    // 	const wrapper = shallow(<DatePicker date="2016-06-04" />);
    // 	expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 4));
    // 	wrapper.setProps({date: '2016-06-05'});
    // 	expect(wrapper.state('date')).toMatchObject(new Date(2016, 5, 5));
    // });
});
// describe('Coverage', () => {
// 	it('Event: onRequestClose', () => {
// 		Platform.OS = 'ios';
// 		const setModalVisible = jest.fn();
// 		const wrapper = shallow(<DatePicker />);
// 		const datePicker = wrapper.instance();
// 		datePicker.setModalVisible = setModalVisible;
// 		wrapper.find(Modal).simulate('requestClose');
// 		expect(setModalVisible).toHaveBeenCalledTimes(1);
// 	});
// 	it('Event: onDateChange', () => {
// 		Platform.OS = 'ios';
// 		const wrapper = shallow(<DatePicker />);
// 		wrapper.find('DatePickerIOS').simulate('dateChange');
// 	});
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NldW5nam9vbmxlZS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtZGF0ZXBpY2tlci9zcmMvX190ZXN0c19fL2RhdGVwaWNrZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsNENBQTRDO0FBQzVDLG1GQUFtRjtBQUNuRiwwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQiw4Q0FBdUM7QUFFdkMsOENBQThDO0FBRTlDLGdEQUFnRDtBQUVoRCxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUUzQixFQUFFLENBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzdCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILDJCQUEyQjtJQUMzQiw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBRTFDLGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCx5REFBeUQ7SUFDekQsNERBQTREO0lBQzVELG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFFckQsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUN6RCwyRUFBMkU7SUFDM0Usa0RBQWtEO0lBRWxELDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxNQUFNO0lBQ04sNENB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QyxDQUFDLENBQUM7QUFFSCwrQkFBK0I7QUFFL0IsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxrREFBa0Q7QUFFbEQsa0RBQWtEO0FBRWxELHNEQUFzRDtBQUN0RCxPQUFPO0FBRVAscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6Qiw2Q0FBNkM7QUFFN0MsMERBQTBEO0FBQzFELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXVuZ2pvb25sZWUvUHJvamVjdHMvcmVhY3QtbmF0aXZlLWRhdGVwaWNrZXIvc3JjL19fdGVzdHNfXy9kYXRlcGlja2VyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQge1BsYXRmb3JtLCBBbmltYXRlZCwgRGF0ZVBpY2tlckFuZHJvaWQsIE1vZGFsLCBWaWV3fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuLy8gaW1wb3J0IEVuenltZSwge3NoYWxsb3d9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgQWRhcHRlciBmcm9tICdlbnp5bWUtYWRhcHRlci1yZWFjdC0xNic7XG4vLyBpbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi9kYXRlcGlja2VyJztcblxuLy8gRW56eW1lLmNvbmZpZ3VyZSh7YWRhcHRlcjogbmV3IEFkYXB0ZXIoKX0pO1xuXG5pbXBvcnQgKiBhcyByZW5kZXJlciBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyJztcblxuZGVzY3JpYmUoJ0RhdGVQaWNrZXInLCAoKSA9PiB7XG5cblx0aXQgKCdyZW5kZXJzIGNvcnJlY3RseScsICgpID0+IHtcblx0XHRjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKDxEYXRlUGlja2VyIG9uRGF0ZUNoYW5nZT17KCkgPT4gKHt9KX0+PC9EYXRlUGlja2VyPikudG9KU09OKCk7XG4gIFx0ZXhwZWN0KHRyZWUpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXHR9KTtcblxuXHQvLyBpdCgnaW5pdGlhbGl6ZScsICgpID0+IHtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciAvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLm1vZGUpLnRvRXF1YWwoJ2RhdGUnKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5kdXJhdGlvbikudG9FcXVhbCgzMDApO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLmhlaWdodCkudG9CZUdyZWF0ZXJUaGFuKDIwMCk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIucHJvcHMuY29uZmlybUJ0blRleHQpLnRvRXF1YWwoJ+ehruWumicpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLmNhbmNlbEJ0blRleHQpLnRvRXF1YWwoJ+WPlua2iCcpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLmN1c3RvbVN0eWxlcykudG9NYXRjaE9iamVjdCh7fSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIucHJvcHMuc2hvd0ljb24pLnRvRXF1YWwodHJ1ZSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIucHJvcHMuZGlzYWJsZWQpLnRvRXF1YWwoZmFsc2UpO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKSkudG9CZUluc3RhbmNlT2YoRGF0ZSk7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ21vZGFsVmlzaWJsZScpKS50b0VxdWFsKGZhbHNlKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnYW5pbWF0ZWRIZWlnaHQnKSkudG9CZUluc3RhbmNlT2YoQW5pbWF0ZWQuVmFsdWUpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLl9yZW5kZXJJY29uKCkpLnRvQmVUcnV0aHkoKTtcblxuXHQvLyBcdGNvbnN0IHdyYXBwZXIxID0gc2hhbGxvdyhcblx0Ly8gXHRcdDxEYXRlUGlja2VyXG5cdC8vIFx0XHRcdGRhdGU9XCIyMDE2LTA1LTExXCJcblx0Ly8gXHRcdFx0Zm9ybWF0PVwiWVlZWS9NTS9ERFwiXG5cdC8vIFx0XHRcdG1vZGU9XCJkYXRldGltZVwiXG5cdC8vIFx0XHRcdGR1cmF0aW9uPXs0MDB9XG5cdC8vIFx0XHRcdGNvbmZpcm1CdG5UZXh0PVwiQ29uZmlybVwiXG5cdC8vIFx0XHRcdGNhbmNlbEJ0blRleHQ9XCJDYW5jZWxcIlxuXHQvLyBcdFx0XHRpY29uU291cmNlPXt7fX1cblx0Ly8gXHRcdFx0Y3VzdG9tU3R5bGVzPXt7dGVzdFN0eWxlOiAxMjN9fVxuXHQvLyBcdFx0XHRkaXNhYmxlZD17dHJ1ZX1cblx0Ly8gXHRcdFx0c2hvd0ljb249e2ZhbHNlfVxuXHQvLyBcdFx0Lz5cblx0Ly8gXHQpO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIxID0gd3JhcHBlcjEuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5wcm9wcy5tb2RlKS50b0VxdWFsKCdkYXRldGltZScpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5wcm9wcy5mb3JtYXQpLnRvRXF1YWwoJ1lZWVkvTU0vREQnKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuZHVyYXRpb24pLnRvRXF1YWwoNDAwKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuY29uZmlybUJ0blRleHQpLnRvRXF1YWwoJ0NvbmZpcm0nKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuY2FuY2VsQnRuVGV4dCkudG9FcXVhbCgnQ2FuY2VsJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLmljb25Tb3VyY2UpLnRvTWF0Y2hPYmplY3Qoe30pO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5wcm9wcy5jdXN0b21TdHlsZXMpLnRvTWF0Y2hPYmplY3Qoe3Rlc3RTdHlsZTogMTIzfSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLnNob3dJY29uKS50b0VxdWFsKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuZGlzYWJsZWQpLnRvRXF1YWwodHJ1ZSk7XG5cblx0Ly8gXHRleHBlY3Qod3JhcHBlcjEuc3RhdGUoJ2RhdGUnKSkudG9NYXRjaE9iamVjdChNb21lbnQoJzIwMTYtMDUtMTEnLCAnWVlZWS1NTS1ERCcpLnRvRGF0ZSgpKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEuX3JlbmRlckljb24oKSkudG9FcXVhbChudWxsKTtcblxuXHQvLyBcdC8vIGZpbmQgbm90IHdvcmsgd2l0aCBtb3VudCwgYW5kIGRlZmF1bHRQcm9wcyBub3Qgd29yayB3aXRoIHNoYWxsb3cuLi5cblx0Ly8gXHRjb25zdCBpY29uQ29tcG9uZW50ID0gc2hhbGxvdyg8Vmlldz5pY29uQ29tcG9uZW50PC9WaWV3Pik7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlcjIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9e25ldyBEYXRlKCcyMDE2LzA5LzA5Jyl9IGljb25Db21wb25lbnQ9e2ljb25Db21wb25lbnR9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIyID0gd3JhcHBlcjIuaW5zdGFuY2UoKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlcjIuaW5zdGFuY2UoKS5nZXREYXRlU3RyKCkpLnRvRXF1YWwoJzIwMTYtMDktMDknKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjIuX3JlbmRlckljb24oKSkudG9FcXVhbChpY29uQ29tcG9uZW50KTtcblxuXHQvLyBcdGNvbnN0IHdyYXBwZXIzID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBzaG93SWNvbj17ZmFsc2V9IGRhdGU9e3t0ZXN0OiAxMjN9fSAvPik7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIzLmZpbmQoJ0ltYWdlJykubGVuZ3RoKS50b0VxdWFsKDApO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyMy5pbnN0YW5jZSgpLmdldERhdGVTdHIoKSkudG9FcXVhbCgnSW52YWxpZCBkYXRlJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLl9yZW5kZXJJY29uKCkpLnRvRXF1YWwobnVsbCk7XG5cblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ2RlZmF1bHQgc2VsZWN0ZWQgRGF0ZScsICgpID0+IHtcblx0Ly8gXHR2YXIgZGF0ZVN0ciA9IG51bGw7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIlwiIG9uRGF0ZUNoYW5nZT17KGRhdGUpID0+IHtcblx0Ly8gXHRcdGRhdGVTdHIgPSBkYXRlO1xuXHQvLyBcdH19Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NDb25maXJtKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVN0cikudG9FcXVhbChNb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdkZWZhdWx0IHNlbGVjdGVkIERhdGUgd2l0aCBtaW5EYXRlIGFuZCBtYXhEYXRlJywgKCkgPT4ge1xuXHQvLyBcdHZhciBkYXRlU3RyID0gbnVsbDtcblx0Ly8gXHR2YXIgZGF0ZVN0ck1heCA9IG51bGw7XG5cdC8vIFx0dmFyIGRhdGVTdHJOb3JtYWwgPSBudWxsO1xuXG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIlwiIG1pbkRhdGU9XCIzMDAwLTA5LTA5XCIgb25EYXRlQ2hhbmdlPXsoZGF0ZSkgPT4ge1xuXHQvLyBcdFx0ZGF0ZVN0ciA9IGRhdGU7XG5cdC8vIFx0fX0vPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGRhdGVQaWNrZXIub25QcmVzc0NvbmZpcm0oKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlU3RyKS50b0VxdWFsKCczMDAwLTA5LTA5Jyk7XG5cblx0Ly8gXHRjb25zdCB3cmFwcGVyTWF4ID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBkYXRlPVwiXCIgbWF4RGF0ZT1cIjIwMTYtMDctMDdcIiBvbkRhdGVDaGFuZ2U9eyhkYXRlKSA9PiB7XG5cdC8vIFx0XHRkYXRlU3RyTWF4ID0gZGF0ZTtcblx0Ly8gXHR9fS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyTWF4ID0gd3JhcHBlck1heC5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlck1heC5vblByZXNzQ29uZmlybSgpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVTdHJNYXgpLnRvRXF1YWwoJzIwMTYtMDctMDcnKTtcblxuXHQvLyBcdGNvbnN0IHdyYXBwZXJOb3JtYWwgPSBzaGFsbG93KFxuXHQvLyBcdFx0PERhdGVQaWNrZXIgZGF0ZT1cIlwiIG1pbkRhdGU9XCIyMDE2LTA3LTA3XCIgbWF4RGF0ZT1cIjMwMDAtMDktMDlcIiBvbkRhdGVDaGFuZ2U9eyhkYXRlKSA9PiB7ZGF0ZVN0ck5vcm1hbCA9IGRhdGU7fX0vPlxuXHQvLyBcdCk7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlck5vcm1hbCA9IHdyYXBwZXJOb3JtYWwuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGRhdGVQaWNrZXJOb3JtYWwub25QcmVzc0NvbmZpcm0oKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlU3RyTm9ybWFsKS50b0VxdWFsKE1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ3NldE1vZGFsVmlzaWJsZScsICgpID0+IHtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciAvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGRhdGVQaWNrZXIuc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ21vZGFsVmlzaWJsZScpKS50b0VxdWFsKHRydWUpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdhbmltYXRlZEhlaWdodCcpLl9hbmltYXRpb24uX3RvVmFsdWUpLnRvRXF1YWwoMCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLnNldE1vZGFsVmlzaWJsZShmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2FuaW1hdGVkSGVpZ2h0JykuX2FuaW1hdGlvbi5fdG9WYWx1ZSkudG9CZUdyZWF0ZXJUaGFuKDIwMCk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvblByZXNzQ2FuY2VsJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHNldE1vZGFsVmlzaWJsZSA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBvbkNsb3NlTW9kYWwgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25DbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5zZXRNb2RhbFZpc2libGUgPSBzZXRNb2RhbFZpc2libGU7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NDYW5jZWwoKTtcblxuXHQvLyBcdGV4cGVjdChzZXRNb2RhbFZpc2libGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGZhbHNlKTtcblx0Ly8gXHRleHBlY3Qob25DbG9zZU1vZGFsKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvblByZXNzTWFzaycsICgpID0+IHtcblx0Ly8gXHRjb25zdCBvblByZXNzTWFzayA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBvblByZXNzTWFzaz17b25QcmVzc01hc2t9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NNYXNrKCk7XG5cblx0Ly8gXHRleHBlY3Qob25QcmVzc01hc2spLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblxuXHQvLyBcdC8vIGNhbGwgb25QcmVzc0NhbmNlbCB3aGVuIHdpdGhvdXQgb25QcmVzc01hc2sgY2IgZnVuY1xuXHQvLyBcdGNvbnN0IG9uUHJlc3NDYW5jZWwgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlcjEgPSBzaGFsbG93KDxEYXRlUGlja2VyIC8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyMSA9IHdyYXBwZXIxLmluc3RhbmNlKCk7XG5cdC8vIFx0ZGF0ZVBpY2tlcjEub25QcmVzc0NhbmNlbCA9IG9uUHJlc3NDYW5jZWw7XG5cblx0Ly8gXHRkYXRlUGlja2VyMS5vblByZXNzTWFzaygpO1xuXG5cdC8vIFx0ZXhwZWN0KG9uUHJlc3NDYW5jZWwpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ29uUHJlc3NDb25maXJtJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHNldE1vZGFsVmlzaWJsZSA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VkID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IG9uQ2xvc2VNb2RhbCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBvbkNsb3NlTW9kYWw9e29uQ2xvc2VNb2RhbH0vPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblx0Ly8gXHRkYXRlUGlja2VyLnNldE1vZGFsVmlzaWJsZSA9IHNldE1vZGFsVmlzaWJsZTtcblx0Ly8gXHRkYXRlUGlja2VyLmRhdGVQaWNrZWQgPSBkYXRlUGlja2VkO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzQ29uZmlybSgpO1xuXG5cdC8vIFx0ZXhwZWN0KHNldE1vZGFsVmlzaWJsZSkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VkKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIFx0ZXhwZWN0KG9uQ2xvc2VNb2RhbCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnZ2V0RGF0ZScsICgpID0+IHtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBkYXRlPVwiMjAxNi0wNi0wNFwiLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5nZXREYXRlKCkpLnRvTWF0Y2hPYmplY3QoTW9tZW50KCcyMDE2LTA2LTA0JywgJ1lZWVktTU0tREQnKS50b0RhdGUoKSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZSgnMjAxNi0wNi0wNicpKS50b01hdGNoT2JqZWN0KE1vbWVudCgnMjAxNi0wNi0wNicsICdZWVlZLU1NLUREJykudG9EYXRlKCkpO1xuXG5cdC8vIFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZShkYXRlKSkudG9FcXVhbChkYXRlKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ2dldERhdGVTdHInLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIjIwMTYtMDYtMDFcIi8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZVN0cigpKS50b0VxdWFsKCcyMDE2LTA2LTAxJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZVN0cihuZXcgRGF0ZSgnMjAxNi0wNi0wMicpKSkudG9FcXVhbCgnMjAxNi0wNi0wMicpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldERhdGVTdHIoJzIwMTYtMDYtMDMnKSkudG9FcXVhbCgnMjAxNi0wNi0wMycpO1xuXG5cdC8vIFx0d3JhcHBlci5zZXRQcm9wcyh7Zm9ybWF0OiAnWVlZWS9NTS9ERCd9KTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5nZXREYXRlU3RyKG5ldyBEYXRlKCcyMDE2LTA2LTAyJykpKS50b0VxdWFsKCcyMDE2LzA2LzAyJyk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdkYXRlUGlja2VkJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IG9uRGF0ZUNoYW5nZSA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBvbkRhdGVDaGFuZ2U9e29uRGF0ZUNoYW5nZX0vPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblx0Ly8gXHRjb25zdCBkYXRlID0gbmV3IERhdGUoJzIwMTYtMDYtMDYnKTtcblx0Ly8gXHR3cmFwcGVyLnNldFN0YXRlKHtkYXRlfSk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLmRhdGVQaWNrZWQoKTtcblxuXHQvLyBcdGV4cGVjdChvbkRhdGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCcyMDE2LTA2LTA2JywgZGF0ZSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvbkRhdGVQaWNrZWQnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgb25EYXRlQ2hhbmdlID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIG9uRGF0ZUNoYW5nZT17b25EYXRlQ2hhbmdlfS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vbkRhdGVQaWNrZWQoe2FjdGlvbjogRGF0ZVBpY2tlckFuZHJvaWQuZGlzbWlzc2VkQWN0aW9uLCB5ZWFyOiAyMDE2LCBtb250aDogNSwgZGF5OiAxMn0pO1xuXHQvLyBcdGRhdGVQaWNrZXIub25EYXRlUGlja2VkKHthY3Rpb246ICcnLCB5ZWFyOiAyMDE2LCBtb250aDogNSwgZGF5OiAxMn0pO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKSkudG9NYXRjaE9iamVjdChuZXcgRGF0ZSgyMDE2LCA1LCAxMikpO1xuXHQvLyBcdGV4cGVjdChvbkRhdGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ29uVGltZVBpY2tlZCcsICgpID0+IHtcblx0Ly8gXHRjb25zdCBvbkRhdGVDaGFuZ2UgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25EYXRlQ2hhbmdlPXtvbkRhdGVDaGFuZ2V9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uVGltZVBpY2tlZCh7YWN0aW9uOiBEYXRlUGlja2VyQW5kcm9pZC5kaXNtaXNzZWRBY3Rpb24sIGhvdXI6IDEyLCBtaW51dGU6IDEwfSk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5vblRpbWVQaWNrZWQoe2FjdGlvbjogJycsIGhvdXI6IDEyLCBtaW51dGU6IDEwfSk7XG5cblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpLmdldEhvdXJzKCkpLnRvRXF1YWwoMTIpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykuZ2V0TWludXRlcygpKS50b0VxdWFsKDEwKTtcblx0Ly8gXHRleHBlY3Qob25EYXRlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvbkRhdGV0aW1lVGltZVBpY2tlZCcsICgpID0+IHtcblx0Ly8gXHRjb25zdCBvbkRhdGVDaGFuZ2UgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25EYXRlQ2hhbmdlPXtvbkRhdGVDaGFuZ2V9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uRGF0ZXRpbWVQaWNrZWQoe2FjdGlvbjogRGF0ZVBpY2tlckFuZHJvaWQuZGlzbWlzc2VkQWN0aW9uLCB5ZWFyOiAyMDE2LCBtb250aDogMTIsIGRheTogMTJ9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uRGF0ZXRpbWVQaWNrZWQoe2FjdGlvbjogJycsIHllYXI6IDIwMTYsIG1vbnRoOiAxMiwgZGF5OiAxMn0pO1xuXHQvLyBcdGRhdGVQaWNrZXIub25EYXRldGltZVRpbWVQaWNrZWQoMjAxNiwgNiwgMSwge2FjdGlvbjogRGF0ZVBpY2tlckFuZHJvaWQuZGlzbWlzc2VkQWN0aW9uLCBob3VyOiAxMiwgbWludXRlOiAxMH0pO1xuXHQvLyBcdGRhdGVQaWNrZXIub25EYXRldGltZVRpbWVQaWNrZWQoMjAxNiwgNiwgMSwge2FjdGlvbjogJycsIGhvdXI6IDEyLCBtaW51dGU6IDEwfSk7XG5cblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpLmdldEZ1bGxZZWFyKCkpLnRvRXF1YWwoMjAxNik7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKS5nZXRNb250aCgpKS50b0VxdWFsKDYpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykuZ2V0RGF0ZSgpKS50b0VxdWFsKDEpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykuZ2V0SG91cnMoKSkudG9FcXVhbCgxMik7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKS5nZXRNaW51dGVzKCkpLnRvRXF1YWwoMTApO1xuXHQvLyBcdGV4cGVjdChvbkRhdGVDaGFuZ2UpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ29uUHJlc3NEYXRlJywgKCkgPT4ge1xuXHQvLyBcdFBsYXRmb3JtLk9TID0gJ2lvcyc7XG5cdC8vIFx0Y29uc3Qgc2V0TW9kYWxWaXNpYmxlID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IG9uT3Blbk1vZGFsID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KFxuXHQvLyBcdFx0PERhdGVQaWNrZXIgZGF0ZT1cIjIwMTYtMDUtMDZcIiBtaW5EYXRlPVwiMjAxNi0wNC0wMVwiIG1heERhdGU9XCIyMDE2LTA2LTAxXCIgb25PcGVuTW9kYWw9e29uT3Blbk1vZGFsfS8+XG5cdC8vIFx0KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXHQvLyBcdGRhdGVQaWNrZXIuc2V0TW9kYWxWaXNpYmxlID0gc2V0TW9kYWxWaXNpYmxlO1xuXG5cdC8vIFx0d3JhcHBlci5zZXRQcm9wcyh7ZGlzYWJsZWQ6IHRydWV9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NEYXRlKCk7XG5cblx0Ly8gXHRleHBlY3Qoc2V0TW9kYWxWaXNpYmxlKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMCk7XG5cblx0Ly8gXHR3cmFwcGVyLnNldFByb3BzKHtkaXNhYmxlZDogZmFsc2V9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NEYXRlKCk7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKSkudG9NYXRjaE9iamVjdChkYXRlUGlja2VyLmdldERhdGUoKSk7XG5cdC8vIFx0ZXhwZWN0KHNldE1vZGFsVmlzaWJsZSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHQvLyBcdGV4cGVjdChvbk9wZW5Nb2RhbCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXG5cdC8vIFx0UGxhdGZvcm0uT1MgPSAnYW5kcm9pZCc7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIub25QcmVzc0RhdGUpLm5vdC50b1Rocm93KEVycm9yKTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe21vZGU6ICdkYXRldGltZSd9KTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5vblByZXNzRGF0ZSkubm90LnRvVGhyb3coRXJyb3IpO1xuXG5cdC8vIFx0d3JhcHBlci5zZXRQcm9wcyh7bW9kZTogJ3RpbWUnfSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIub25QcmVzc0RhdGUpLm5vdC50b1Rocm93KEVycm9yKTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe21vZGU6ICd0dHR0J30pO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLm9uUHJlc3NEYXRlKS50b1Rocm93KEVycm9yKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ3BhblJlc3BvbmRlcicsICgpID0+IHtcblx0Ly8gXHRQbGF0Zm9ybS5PUyA9ICdpb3MnO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCIyMDE2LTA1LTA2XCIgbWluRGF0ZT1cIjIwMTYtMDQtMDFcIiBtYXhEYXRlPVwiMjAxNi0wNi0wMVwiLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NEYXRlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5vblN0YXJ0U2hvdWxkU2V0UmVzcG9uZGVyKCkpLnRvRXF1YWwodHJ1ZSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIub25Nb3ZlU2hvdWxkU2V0UmVzcG9uZGVyKCkpLnRvRXF1YWwodHJ1ZSk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5tb2RhbE9uUmVzcG9uZGVyVGVybWluYXRpb25SZXF1ZXN0KCkpLnRvRXF1YWwodHJ1ZSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdnZXRUaXRsZUVsZW1lbnQgLSB3aXRoIHBsYWNlaG9sZGVyJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHBsYWNlaG9sZGVyID0gJ1BsZWFzZSBwaWNrIGEgZGF0ZSc7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldFRpdGxlRWxlbWVudCgpLnByb3BzLmNoaWxkcmVuKS50b0VxdWFsKHBsYWNlaG9sZGVyKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ2dldFRpdGxlRWxlbWVudCAtIHdpdGhvdXQgcGxhY2Vob2xkZXInLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIjIwMTYtMDYtMDRcIiAvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldFRpdGxlRWxlbWVudCgpLnByb3BzLmNoaWxkcmVuKS50b0VxdWFsKGRhdGVQaWNrZXIuZ2V0RGF0ZVN0cigpKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ2BkYXRlYCBwcm9wIGNoYW5nZXMnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIjIwMTYtMDYtMDRcIiAvPik7XG5cblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpKS50b01hdGNoT2JqZWN0KG5ldyBEYXRlKDIwMTYsIDUsIDQpKTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe2RhdGU6ICcyMDE2LTA2LTA1J30pO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKSkudG9NYXRjaE9iamVjdChuZXcgRGF0ZSgyMDE2LCA1LCA1KSk7XG5cdC8vIH0pO1xufSk7XG5cbi8vIGRlc2NyaWJlKCdDb3ZlcmFnZScsICgpID0+IHtcblxuLy8gXHRpdCgnRXZlbnQ6IG9uUmVxdWVzdENsb3NlJywgKCkgPT4ge1xuLy8gXHRcdFBsYXRmb3JtLk9TID0gJ2lvcyc7XG4vLyBcdFx0Y29uc3Qgc2V0TW9kYWxWaXNpYmxlID0gamVzdC5mbigpO1xuLy8gXHRcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIC8+KTtcbi8vIFx0XHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuLy8gXHRcdGRhdGVQaWNrZXIuc2V0TW9kYWxWaXNpYmxlID0gc2V0TW9kYWxWaXNpYmxlO1xuXG4vLyBcdFx0d3JhcHBlci5maW5kKE1vZGFsKS5zaW11bGF0ZSgncmVxdWVzdENsb3NlJyk7XG5cbi8vIFx0XHRleHBlY3Qoc2V0TW9kYWxWaXNpYmxlKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG4vLyBcdH0pO1xuXG4vLyBcdGl0KCdFdmVudDogb25EYXRlQ2hhbmdlJywgKCkgPT4ge1xuLy8gXHRcdFBsYXRmb3JtLk9TID0gJ2lvcyc7XG4vLyBcdFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgLz4pO1xuXG4vLyBcdFx0d3JhcHBlci5maW5kKCdEYXRlUGlja2VySU9TJykuc2ltdWxhdGUoJ2RhdGVDaGFuZ2UnKTtcbi8vIFx0fSk7XG4vLyB9KTtcbiJdLCJ2ZXJzaW9uIjozfQ==