"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.IOS_DATEPICKER_HEIGHT = 259;
const style = react_native_1.StyleSheet.create({
    dateTouch: {
        width: 142,
    },
    dateTouchBody: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateIcon: {
        width: 32,
        height: 32,
        marginLeft: 5,
        marginRight: 5,
    },
    dateInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#aaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateText: {
        color: '#333',
    },
    placeholderText: {
        color: '#c9c9c9',
    },
    datePickerMask: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#00000077',
    },
    datePickerCon: {
        backgroundColor: '#fff',
        height: exports.IOS_DATEPICKER_HEIGHT,
        overflow: 'hidden',
    },
    btnText: {
        position: 'absolute',
        top: 0,
        height: 42,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTextText: {
        fontSize: 16,
        color: '#007AFF',
    },
    btnTextCancel: {
        color: '#666',
    },
    btnCancel: {
        left: 0,
    },
    btnConfirm: {
        right: 0,
    },
    datePicker: {
        marginTop: 42,
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    disabled: {
        backgroundColor: '#eee',
    },
});
exports.default = style;
//# sourceMappingURL=style.js.map