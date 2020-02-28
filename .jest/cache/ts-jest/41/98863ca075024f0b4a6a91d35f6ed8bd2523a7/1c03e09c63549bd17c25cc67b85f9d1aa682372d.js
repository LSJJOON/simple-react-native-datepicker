"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NldW5nam9vbmxlZS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtZGF0ZXBpY2tlci9zcmMvX190ZXN0c19fL2RhdGVwaWNrZXIudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBeUM7QUFDekMsNENBQTRDO0FBQzVDLG1GQUFtRjtBQUNuRiwwQ0FBMEM7QUFDMUMsaURBQWlEO0FBQ2pELCtCQUErQjtBQUMvQiw4Q0FBdUM7QUFFdkMsOENBQThDO0FBRTlDLGdEQUFnRDtBQUVoRCxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtJQUUzQixFQUFFLENBQUUsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzdCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFGLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztJQUVILDJCQUEyQjtJQUMzQiw0Q0FBNEM7SUFDNUMsMENBQTBDO0lBRTFDLGtEQUFrRDtJQUNsRCxtREFBbUQ7SUFDbkQseURBQXlEO0lBQ3pELDBEQUEwRDtJQUMxRCx5REFBeUQ7SUFDekQsNERBQTREO0lBQzVELG9EQUFvRDtJQUNwRCxxREFBcUQ7SUFFckQsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUN6RCwyRUFBMkU7SUFDM0Usa0RBQWtEO0lBRWxELDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxNQUFNO0lBQ04sNENB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QyxDQUFDLENBQUM7QUFFSCwrQkFBK0I7QUFFL0IsdUNBQXVDO0FBQ3ZDLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQyxrREFBa0Q7QUFFbEQsa0RBQWtEO0FBRWxELHNEQUFzRDtBQUN0RCxPQUFPO0FBRVAscUNBQXFDO0FBQ3JDLHlCQUF5QjtBQUN6Qiw2Q0FBNkM7QUFFN0MsMERBQTBEO0FBQzFELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXVuZ2pvb25sZWUvUHJvamVjdHMvcmVhY3QtbmF0aXZlLWRhdGVwaWNrZXIvc3JjL19fdGVzdHNfXy9kYXRlcGlja2VyLnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHtQbGF0Zm9ybSwgQW5pbWF0ZWQsIERhdGVQaWNrZXJBbmRyb2lkLCBNb2RhbCwgVmlld30gZnJvbSAncmVhY3QtbmF0aXZlJztcbi8vIGltcG9ydCBFbnp5bWUsIHtzaGFsbG93fSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IEFkYXB0ZXIgZnJvbSAnZW56eW1lLWFkYXB0ZXItcmVhY3QtMTYnO1xuLy8gaW1wb3J0IE1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vZGF0ZXBpY2tlcic7XG5cbi8vIEVuenltZS5jb25maWd1cmUoe2FkYXB0ZXI6IG5ldyBBZGFwdGVyKCl9KTtcblxuaW1wb3J0ICogYXMgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5cbmRlc2NyaWJlKCdEYXRlUGlja2VyJywgKCkgPT4ge1xuXG5cdGl0ICgncmVuZGVycyBjb3JyZWN0bHknLCAoKSA9PiB7XG5cdFx0Y29uc3QgdHJlZSA9IHJlbmRlcmVyLmNyZWF0ZSg8RGF0ZVBpY2tlciBvbkRhdGVDaGFuZ2U9eygpID0+ICh7fSl9PjwvRGF0ZVBpY2tlcj4pLnRvSlNPTigpO1xuICBcdGV4cGVjdCh0cmVlKS50b01hdGNoU25hcHNob3QoKTtcblx0fSk7XG5cblx0Ly8gaXQoJ2luaXRpYWxpemUnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5tb2RlKS50b0VxdWFsKCdkYXRlJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIucHJvcHMuZHVyYXRpb24pLnRvRXF1YWwoMzAwKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5oZWlnaHQpLnRvQmVHcmVhdGVyVGhhbigyMDApO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLmNvbmZpcm1CdG5UZXh0KS50b0VxdWFsKCfnoa7lrponKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5jYW5jZWxCdG5UZXh0KS50b0VxdWFsKCflj5bmtognKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5wcm9wcy5jdXN0b21TdHlsZXMpLnRvTWF0Y2hPYmplY3Qoe30pO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLnNob3dJY29uKS50b0VxdWFsKHRydWUpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLnByb3BzLmRpc2FibGVkKS50b0VxdWFsKGZhbHNlKTtcblxuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykpLnRvQmVJbnN0YW5jZU9mKERhdGUpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdtb2RhbFZpc2libGUnKSkudG9FcXVhbChmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2FuaW1hdGVkSGVpZ2h0JykpLnRvQmVJbnN0YW5jZU9mKEFuaW1hdGVkLlZhbHVlKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5fcmVuZGVySWNvbigpKS50b0JlVHJ1dGh5KCk7XG5cblx0Ly8gXHRjb25zdCB3cmFwcGVyMSA9IHNoYWxsb3coXG5cdC8vIFx0XHQ8RGF0ZVBpY2tlclxuXHQvLyBcdFx0XHRkYXRlPVwiMjAxNi0wNS0xMVwiXG5cdC8vIFx0XHRcdGZvcm1hdD1cIllZWVkvTU0vRERcIlxuXHQvLyBcdFx0XHRtb2RlPVwiZGF0ZXRpbWVcIlxuXHQvLyBcdFx0XHRkdXJhdGlvbj17NDAwfVxuXHQvLyBcdFx0XHRjb25maXJtQnRuVGV4dD1cIkNvbmZpcm1cIlxuXHQvLyBcdFx0XHRjYW5jZWxCdG5UZXh0PVwiQ2FuY2VsXCJcblx0Ly8gXHRcdFx0aWNvblNvdXJjZT17e319XG5cdC8vIFx0XHRcdGN1c3RvbVN0eWxlcz17e3Rlc3RTdHlsZTogMTIzfX1cblx0Ly8gXHRcdFx0ZGlzYWJsZWQ9e3RydWV9XG5cdC8vIFx0XHRcdHNob3dJY29uPXtmYWxzZX1cblx0Ly8gXHRcdC8+XG5cdC8vIFx0KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyMSA9IHdyYXBwZXIxLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMubW9kZSkudG9FcXVhbCgnZGF0ZXRpbWUnKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuZm9ybWF0KS50b0VxdWFsKCdZWVlZL01NL0REJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLmR1cmF0aW9uKS50b0VxdWFsKDQwMCk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLmNvbmZpcm1CdG5UZXh0KS50b0VxdWFsKCdDb25maXJtJyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLmNhbmNlbEJ0blRleHQpLnRvRXF1YWwoJ0NhbmNlbCcpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5wcm9wcy5pY29uU291cmNlKS50b01hdGNoT2JqZWN0KHt9KTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlcjEucHJvcHMuY3VzdG9tU3R5bGVzKS50b01hdGNoT2JqZWN0KHt0ZXN0U3R5bGU6IDEyM30pO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5wcm9wcy5zaG93SWNvbikudG9FcXVhbChmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLnByb3BzLmRpc2FibGVkKS50b0VxdWFsKHRydWUpO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIxLnN0YXRlKCdkYXRlJykpLnRvTWF0Y2hPYmplY3QoTW9tZW50KCcyMDE2LTA1LTExJywgJ1lZWVktTU0tREQnKS50b0RhdGUoKSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIxLl9yZW5kZXJJY29uKCkpLnRvRXF1YWwobnVsbCk7XG5cblx0Ly8gXHQvLyBmaW5kIG5vdCB3b3JrIHdpdGggbW91bnQsIGFuZCBkZWZhdWx0UHJvcHMgbm90IHdvcmsgd2l0aCBzaGFsbG93Li4uXG5cdC8vIFx0Y29uc3QgaWNvbkNvbXBvbmVudCA9IHNoYWxsb3coPFZpZXc+aWNvbkNvbXBvbmVudDwvVmlldz4pO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBkYXRlPXtuZXcgRGF0ZSgnMjAxNi8wOS8wOScpfSBpY29uQ29tcG9uZW50PXtpY29uQ29tcG9uZW50fS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyMiA9IHdyYXBwZXIyLmluc3RhbmNlKCk7XG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIyLmluc3RhbmNlKCkuZ2V0RGF0ZVN0cigpKS50b0VxdWFsKCcyMDE2LTA5LTA5Jyk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIyLl9yZW5kZXJJY29uKCkpLnRvRXF1YWwoaWNvbkNvbXBvbmVudCk7XG5cblx0Ly8gXHRjb25zdCB3cmFwcGVyMyA9IHNoYWxsb3coPERhdGVQaWNrZXIgc2hvd0ljb249e2ZhbHNlfSBkYXRlPXt7dGVzdDogMTIzfX0gLz4pO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyMy5maW5kKCdJbWFnZScpLmxlbmd0aCkudG9FcXVhbCgwKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlcjMuaW5zdGFuY2UoKS5nZXREYXRlU3RyKCkpLnRvRXF1YWwoJ0ludmFsaWQgZGF0ZScpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyMS5fcmVuZGVySWNvbigpKS50b0VxdWFsKG51bGwpO1xuXG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdkZWZhdWx0IHNlbGVjdGVkIERhdGUnLCAoKSA9PiB7XG5cdC8vIFx0dmFyIGRhdGVTdHIgPSBudWxsO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCJcIiBvbkRhdGVDaGFuZ2U9eyhkYXRlKSA9PiB7XG5cdC8vIFx0XHRkYXRlU3RyID0gZGF0ZTtcblx0Ly8gXHR9fS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzQ29uZmlybSgpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVTdHIpLnRvRXF1YWwoTW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnZGVmYXVsdCBzZWxlY3RlZCBEYXRlIHdpdGggbWluRGF0ZSBhbmQgbWF4RGF0ZScsICgpID0+IHtcblx0Ly8gXHR2YXIgZGF0ZVN0ciA9IG51bGw7XG5cdC8vIFx0dmFyIGRhdGVTdHJNYXggPSBudWxsO1xuXHQvLyBcdHZhciBkYXRlU3RyTm9ybWFsID0gbnVsbDtcblxuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCJcIiBtaW5EYXRlPVwiMzAwMC0wOS0wOVwiIG9uRGF0ZUNoYW5nZT17KGRhdGUpID0+IHtcblx0Ly8gXHRcdGRhdGVTdHIgPSBkYXRlO1xuXHQvLyBcdH19Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLm9uUHJlc3NDb25maXJtKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVN0cikudG9FcXVhbCgnMzAwMC0wOS0wOScpO1xuXG5cdC8vIFx0Y29uc3Qgd3JhcHBlck1heCA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIlwiIG1heERhdGU9XCIyMDE2LTA3LTA3XCIgb25EYXRlQ2hhbmdlPXsoZGF0ZSkgPT4ge1xuXHQvLyBcdFx0ZGF0ZVN0ck1heCA9IGRhdGU7XG5cdC8vIFx0fX0vPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlck1heCA9IHdyYXBwZXJNYXguaW5zdGFuY2UoKTtcblxuXHQvLyBcdGRhdGVQaWNrZXJNYXgub25QcmVzc0NvbmZpcm0oKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlU3RyTWF4KS50b0VxdWFsKCcyMDE2LTA3LTA3Jyk7XG5cblx0Ly8gXHRjb25zdCB3cmFwcGVyTm9ybWFsID0gc2hhbGxvdyhcblx0Ly8gXHRcdDxEYXRlUGlja2VyIGRhdGU9XCJcIiBtaW5EYXRlPVwiMjAxNi0wNy0wN1wiIG1heERhdGU9XCIzMDAwLTA5LTA5XCIgb25EYXRlQ2hhbmdlPXsoZGF0ZSkgPT4ge2RhdGVTdHJOb3JtYWwgPSBkYXRlO319Lz5cblx0Ly8gXHQpO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXJOb3JtYWwgPSB3cmFwcGVyTm9ybWFsLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyTm9ybWFsLm9uUHJlc3NDb25maXJtKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVN0ck5vcm1hbCkudG9FcXVhbChNb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdzZXRNb2RhbFZpc2libGUnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRkYXRlUGlja2VyLnNldE1vZGFsVmlzaWJsZSh0cnVlKTtcblxuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdtb2RhbFZpc2libGUnKSkudG9FcXVhbCh0cnVlKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnYW5pbWF0ZWRIZWlnaHQnKS5fYW5pbWF0aW9uLl90b1ZhbHVlKS50b0VxdWFsKDApO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5zZXRNb2RhbFZpc2libGUoZmFsc2UpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdhbmltYXRlZEhlaWdodCcpLl9hbmltYXRpb24uX3RvVmFsdWUpLnRvQmVHcmVhdGVyVGhhbigyMDApO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnb25QcmVzc0NhbmNlbCcsICgpID0+IHtcblx0Ly8gXHRjb25zdCBzZXRNb2RhbFZpc2libGUgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgb25DbG9zZU1vZGFsID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIG9uQ2xvc2VNb2RhbD17b25DbG9zZU1vZGFsfS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXHQvLyBcdGRhdGVQaWNrZXIuc2V0TW9kYWxWaXNpYmxlID0gc2V0TW9kYWxWaXNpYmxlO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzQ2FuY2VsKCk7XG5cblx0Ly8gXHRleHBlY3Qoc2V0TW9kYWxWaXNpYmxlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChmYWxzZSk7XG5cdC8vIFx0ZXhwZWN0KG9uQ2xvc2VNb2RhbCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnb25QcmVzc01hc2snLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgb25QcmVzc01hc2sgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25QcmVzc01hc2s9e29uUHJlc3NNYXNrfS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzTWFzaygpO1xuXG5cdC8vIFx0ZXhwZWN0KG9uUHJlc3NNYXNrKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cblx0Ly8gXHQvLyBjYWxsIG9uUHJlc3NDYW5jZWwgd2hlbiB3aXRob3V0IG9uUHJlc3NNYXNrIGNiIGZ1bmNcblx0Ly8gXHRjb25zdCBvblByZXNzQ2FuY2VsID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIxID0gc2hhbGxvdyg8RGF0ZVBpY2tlciAvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlcjEgPSB3cmFwcGVyMS5pbnN0YW5jZSgpO1xuXHQvLyBcdGRhdGVQaWNrZXIxLm9uUHJlc3NDYW5jZWwgPSBvblByZXNzQ2FuY2VsO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlcjEub25QcmVzc01hc2soKTtcblxuXHQvLyBcdGV4cGVjdChvblByZXNzQ2FuY2VsKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvblByZXNzQ29uZmlybScsICgpID0+IHtcblx0Ly8gXHRjb25zdCBzZXRNb2RhbFZpc2libGUgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlZCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBvbkNsb3NlTW9kYWwgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25DbG9zZU1vZGFsPXtvbkNsb3NlTW9kYWx9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5zZXRNb2RhbFZpc2libGUgPSBzZXRNb2RhbFZpc2libGU7XG5cdC8vIFx0ZGF0ZVBpY2tlci5kYXRlUGlja2VkID0gZGF0ZVBpY2tlZDtcblxuXHQvLyBcdGRhdGVQaWNrZXIub25QcmVzc0NvbmZpcm0oKTtcblxuXHQvLyBcdGV4cGVjdChzZXRNb2RhbFZpc2libGUpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGZhbHNlKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlZCkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHQvLyBcdGV4cGVjdChvbkNsb3NlTW9kYWwpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0Ly8gfSk7XG5cblx0Ly8gaXQoJ2dldERhdGUnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgZGF0ZT1cIjIwMTYtMDYtMDRcIi8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZSgpKS50b01hdGNoT2JqZWN0KE1vbWVudCgnMjAxNi0wNi0wNCcsICdZWVlZLU1NLUREJykudG9EYXRlKCkpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldERhdGUoJzIwMTYtMDYtMDYnKSkudG9NYXRjaE9iamVjdChNb21lbnQoJzIwMTYtMDYtMDYnLCAnWVlZWS1NTS1ERCcpLnRvRGF0ZSgpKTtcblxuXHQvLyBcdGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldERhdGUoZGF0ZSkpLnRvRXF1YWwoZGF0ZSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdnZXREYXRlU3RyJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCIyMDE2LTA2LTAxXCIvPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldERhdGVTdHIoKSkudG9FcXVhbCgnMjAxNi0wNi0wMScpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLmdldERhdGVTdHIobmV3IERhdGUoJzIwMTYtMDYtMDInKSkpLnRvRXF1YWwoJzIwMTYtMDYtMDInKTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5nZXREYXRlU3RyKCcyMDE2LTA2LTAzJykpLnRvRXF1YWwoJzIwMTYtMDYtMDMnKTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe2Zvcm1hdDogJ1lZWVkvTU0vREQnfSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIuZ2V0RGF0ZVN0cihuZXcgRGF0ZSgnMjAxNi0wNi0wMicpKSkudG9FcXVhbCgnMjAxNi8wNi8wMicpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnZGF0ZVBpY2tlZCcsICgpID0+IHtcblx0Ly8gXHRjb25zdCBvbkRhdGVDaGFuZ2UgPSBqZXN0LmZuKCk7XG5cdC8vIFx0Y29uc3Qgd3JhcHBlciA9IHNoYWxsb3coPERhdGVQaWNrZXIgb25EYXRlQ2hhbmdlPXtvbkRhdGVDaGFuZ2V9Lz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cdC8vIFx0Y29uc3QgZGF0ZSA9IG5ldyBEYXRlKCcyMDE2LTA2LTA2Jyk7XG5cdC8vIFx0d3JhcHBlci5zZXRTdGF0ZSh7ZGF0ZX0pO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5kYXRlUGlja2VkKCk7XG5cblx0Ly8gXHRleHBlY3Qob25EYXRlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgnMjAxNi0wNi0wNicsIGRhdGUpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnb25EYXRlUGlja2VkJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IG9uRGF0ZUNoYW5nZSA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBvbkRhdGVDaGFuZ2U9e29uRGF0ZUNoYW5nZX0vPik7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblxuXHQvLyBcdGRhdGVQaWNrZXIub25EYXRlUGlja2VkKHthY3Rpb246IERhdGVQaWNrZXJBbmRyb2lkLmRpc21pc3NlZEFjdGlvbiwgeWVhcjogMjAxNiwgbW9udGg6IDUsIGRheTogMTJ9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uRGF0ZVBpY2tlZCh7YWN0aW9uOiAnJywgeWVhcjogMjAxNiwgbW9udGg6IDUsIGRheTogMTJ9KTtcblxuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykpLnRvTWF0Y2hPYmplY3QobmV3IERhdGUoMjAxNiwgNSwgMTIpKTtcblx0Ly8gXHRleHBlY3Qob25EYXRlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvblRpbWVQaWNrZWQnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgb25EYXRlQ2hhbmdlID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIG9uRGF0ZUNoYW5nZT17b25EYXRlQ2hhbmdlfS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblRpbWVQaWNrZWQoe2FjdGlvbjogRGF0ZVBpY2tlckFuZHJvaWQuZGlzbWlzc2VkQWN0aW9uLCBob3VyOiAxMiwgbWludXRlOiAxMH0pO1xuXHQvLyBcdGRhdGVQaWNrZXIub25UaW1lUGlja2VkKHthY3Rpb246ICcnLCBob3VyOiAxMiwgbWludXRlOiAxMH0pO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKS5nZXRIb3VycygpKS50b0VxdWFsKDEyKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpLmdldE1pbnV0ZXMoKSkudG9FcXVhbCgxMCk7XG5cdC8vIFx0ZXhwZWN0KG9uRGF0ZUNoYW5nZSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnb25EYXRldGltZVRpbWVQaWNrZWQnLCAoKSA9PiB7XG5cdC8vIFx0Y29uc3Qgb25EYXRlQ2hhbmdlID0gamVzdC5mbigpO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIG9uRGF0ZUNoYW5nZT17b25EYXRlQ2hhbmdlfS8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vbkRhdGV0aW1lUGlja2VkKHthY3Rpb246IERhdGVQaWNrZXJBbmRyb2lkLmRpc21pc3NlZEFjdGlvbiwgeWVhcjogMjAxNiwgbW9udGg6IDEyLCBkYXk6IDEyfSk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5vbkRhdGV0aW1lUGlja2VkKHthY3Rpb246ICcnLCB5ZWFyOiAyMDE2LCBtb250aDogMTIsIGRheTogMTJ9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uRGF0ZXRpbWVUaW1lUGlja2VkKDIwMTYsIDYsIDEsIHthY3Rpb246IERhdGVQaWNrZXJBbmRyb2lkLmRpc21pc3NlZEFjdGlvbiwgaG91cjogMTIsIG1pbnV0ZTogMTB9KTtcblx0Ly8gXHRkYXRlUGlja2VyLm9uRGF0ZXRpbWVUaW1lUGlja2VkKDIwMTYsIDYsIDEsIHthY3Rpb246ICcnLCBob3VyOiAxMiwgbWludXRlOiAxMH0pO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKS5nZXRGdWxsWWVhcigpKS50b0VxdWFsKDIwMTYpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykuZ2V0TW9udGgoKSkudG9FcXVhbCg2KTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpLmdldERhdGUoKSkudG9FcXVhbCgxKTtcblx0Ly8gXHRleHBlY3Qod3JhcHBlci5zdGF0ZSgnZGF0ZScpLmdldEhvdXJzKCkpLnRvRXF1YWwoMTIpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykuZ2V0TWludXRlcygpKS50b0VxdWFsKDEwKTtcblx0Ly8gXHRleHBlY3Qob25EYXRlQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkVGltZXMoMSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdvblByZXNzRGF0ZScsICgpID0+IHtcblx0Ly8gXHRQbGF0Zm9ybS5PUyA9ICdpb3MnO1xuXHQvLyBcdGNvbnN0IHNldE1vZGFsVmlzaWJsZSA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCBvbk9wZW5Nb2RhbCA9IGplc3QuZm4oKTtcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyhcblx0Ly8gXHRcdDxEYXRlUGlja2VyIGRhdGU9XCIyMDE2LTA1LTA2XCIgbWluRGF0ZT1cIjIwMTYtMDQtMDFcIiBtYXhEYXRlPVwiMjAxNi0wNi0wMVwiIG9uT3Blbk1vZGFsPXtvbk9wZW5Nb2RhbH0vPlxuXHQvLyBcdCk7XG5cdC8vIFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcblx0Ly8gXHRkYXRlUGlja2VyLnNldE1vZGFsVmlzaWJsZSA9IHNldE1vZGFsVmlzaWJsZTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe2Rpc2FibGVkOiB0cnVlfSk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzRGF0ZSgpO1xuXG5cdC8vIFx0ZXhwZWN0KHNldE1vZGFsVmlzaWJsZSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDApO1xuXG5cdC8vIFx0d3JhcHBlci5zZXRQcm9wcyh7ZGlzYWJsZWQ6IGZhbHNlfSk7XG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzRGF0ZSgpO1xuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykpLnRvTWF0Y2hPYmplY3QoZGF0ZVBpY2tlci5nZXREYXRlKCkpO1xuXHQvLyBcdGV4cGVjdChzZXRNb2RhbFZpc2libGUpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblx0Ly8gXHRleHBlY3Qob25PcGVuTW9kYWwpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcygxKTtcblxuXHQvLyBcdFBsYXRmb3JtLk9TID0gJ2FuZHJvaWQnO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLm9uUHJlc3NEYXRlKS5ub3QudG9UaHJvdyhFcnJvcik7XG5cblx0Ly8gXHR3cmFwcGVyLnNldFByb3BzKHttb2RlOiAnZGF0ZXRpbWUnfSk7XG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIub25QcmVzc0RhdGUpLm5vdC50b1Rocm93KEVycm9yKTtcblxuXHQvLyBcdHdyYXBwZXIuc2V0UHJvcHMoe21vZGU6ICd0aW1lJ30pO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLm9uUHJlc3NEYXRlKS5ub3QudG9UaHJvdyhFcnJvcik7XG5cblx0Ly8gXHR3cmFwcGVyLnNldFByb3BzKHttb2RlOiAndHR0dCd9KTtcblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5vblByZXNzRGF0ZSkudG9UaHJvdyhFcnJvcik7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdwYW5SZXNwb25kZXInLCAoKSA9PiB7XG5cdC8vIFx0UGxhdGZvcm0uT1MgPSAnaW9zJztcblx0Ly8gXHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciBkYXRlPVwiMjAxNi0wNS0wNlwiIG1pbkRhdGU9XCIyMDE2LTA0LTAxXCIgbWF4RGF0ZT1cIjIwMTYtMDYtMDFcIi8+KTtcblx0Ly8gXHRjb25zdCBkYXRlUGlja2VyID0gd3JhcHBlci5pbnN0YW5jZSgpO1xuXG5cdC8vIFx0ZGF0ZVBpY2tlci5vblByZXNzRGF0ZSgpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIub25TdGFydFNob3VsZFNldFJlc3BvbmRlcigpKS50b0VxdWFsKHRydWUpO1xuXHQvLyBcdGV4cGVjdChkYXRlUGlja2VyLm9uTW92ZVNob3VsZFNldFJlc3BvbmRlcigpKS50b0VxdWFsKHRydWUpO1xuXG5cdC8vIFx0ZXhwZWN0KGRhdGVQaWNrZXIucHJvcHMubW9kYWxPblJlc3BvbmRlclRlcm1pbmF0aW9uUmVxdWVzdCgpKS50b0VxdWFsKHRydWUpO1xuXHQvLyB9KTtcblxuXHQvLyBpdCgnZ2V0VGl0bGVFbGVtZW50IC0gd2l0aCBwbGFjZWhvbGRlcicsICgpID0+IHtcblx0Ly8gXHRjb25zdCBwbGFjZWhvbGRlciA9ICdQbGVhc2UgcGljayBhIGRhdGUnO1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5nZXRUaXRsZUVsZW1lbnQoKS5wcm9wcy5jaGlsZHJlbikudG9FcXVhbChwbGFjZWhvbGRlcik7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdnZXRUaXRsZUVsZW1lbnQgLSB3aXRob3V0IHBsYWNlaG9sZGVyJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCIyMDE2LTA2LTA0XCIgLz4pO1xuXHQvLyBcdGNvbnN0IGRhdGVQaWNrZXIgPSB3cmFwcGVyLmluc3RhbmNlKCk7XG5cblx0Ly8gXHRleHBlY3QoZGF0ZVBpY2tlci5nZXRUaXRsZUVsZW1lbnQoKS5wcm9wcy5jaGlsZHJlbikudG9FcXVhbChkYXRlUGlja2VyLmdldERhdGVTdHIoKSk7XG5cdC8vIH0pO1xuXG5cdC8vIGl0KCdgZGF0ZWAgcHJvcCBjaGFuZ2VzJywgKCkgPT4ge1xuXHQvLyBcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIGRhdGU9XCIyMDE2LTA2LTA0XCIgLz4pO1xuXG5cdC8vIFx0ZXhwZWN0KHdyYXBwZXIuc3RhdGUoJ2RhdGUnKSkudG9NYXRjaE9iamVjdChuZXcgRGF0ZSgyMDE2LCA1LCA0KSk7XG5cblx0Ly8gXHR3cmFwcGVyLnNldFByb3BzKHtkYXRlOiAnMjAxNi0wNi0wNSd9KTtcblxuXHQvLyBcdGV4cGVjdCh3cmFwcGVyLnN0YXRlKCdkYXRlJykpLnRvTWF0Y2hPYmplY3QobmV3IERhdGUoMjAxNiwgNSwgNSkpO1xuXHQvLyB9KTtcbn0pO1xuXG4vLyBkZXNjcmliZSgnQ292ZXJhZ2UnLCAoKSA9PiB7XG5cbi8vIFx0aXQoJ0V2ZW50OiBvblJlcXVlc3RDbG9zZScsICgpID0+IHtcbi8vIFx0XHRQbGF0Zm9ybS5PUyA9ICdpb3MnO1xuLy8gXHRcdGNvbnN0IHNldE1vZGFsVmlzaWJsZSA9IGplc3QuZm4oKTtcbi8vIFx0XHRjb25zdCB3cmFwcGVyID0gc2hhbGxvdyg8RGF0ZVBpY2tlciAvPik7XG4vLyBcdFx0Y29uc3QgZGF0ZVBpY2tlciA9IHdyYXBwZXIuaW5zdGFuY2UoKTtcbi8vIFx0XHRkYXRlUGlja2VyLnNldE1vZGFsVmlzaWJsZSA9IHNldE1vZGFsVmlzaWJsZTtcblxuLy8gXHRcdHdyYXBwZXIuZmluZChNb2RhbCkuc2ltdWxhdGUoJ3JlcXVlc3RDbG9zZScpO1xuXG4vLyBcdFx0ZXhwZWN0KHNldE1vZGFsVmlzaWJsZSkudG9IYXZlQmVlbkNhbGxlZFRpbWVzKDEpO1xuLy8gXHR9KTtcblxuLy8gXHRpdCgnRXZlbnQ6IG9uRGF0ZUNoYW5nZScsICgpID0+IHtcbi8vIFx0XHRQbGF0Zm9ybS5PUyA9ICdpb3MnO1xuLy8gXHRcdGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KDxEYXRlUGlja2VyIC8+KTtcblxuLy8gXHRcdHdyYXBwZXIuZmluZCgnRGF0ZVBpY2tlcklPUycpLnNpbXVsYXRlKCdkYXRlQ2hhbmdlJyk7XG4vLyBcdH0pO1xuLy8gfSk7XG4iXSwidmVyc2lvbiI6M30=