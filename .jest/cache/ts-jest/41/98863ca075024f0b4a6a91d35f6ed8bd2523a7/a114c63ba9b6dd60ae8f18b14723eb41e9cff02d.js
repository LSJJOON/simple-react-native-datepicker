"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
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
        height: 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL3NldW5nam9vbmxlZS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtZGF0ZXBpY2tlci9zcmMvc3R5bGUudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBd0M7QUFFeEMsTUFBTSxLQUFLLEdBQUcseUJBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0IsU0FBUyxFQUFFO1FBQ1YsS0FBSyxFQUFFLEdBQUc7S0FDVjtJQUNELGFBQWEsRUFBRTtRQUNkLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLENBQUM7UUFDYixXQUFXLEVBQUUsQ0FBQztLQUNkO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsSUFBSSxFQUFFLENBQUM7UUFDUCxNQUFNLEVBQUUsRUFBRTtRQUNWLFdBQVcsRUFBRSxDQUFDO1FBQ2QsV0FBVyxFQUFFLE1BQU07UUFDbkIsVUFBVSxFQUFFLFFBQVE7UUFDcEIsY0FBYyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxRQUFRLEVBQUU7UUFDVCxLQUFLLEVBQUUsTUFBTTtLQUNiO0lBQ0QsZUFBZSxFQUFFO1FBQ2hCLEtBQUssRUFBRSxTQUFTO0tBQ2hCO0lBQ0QsY0FBYyxFQUFFO1FBQ2YsSUFBSSxFQUFFLENBQUM7UUFDUCxVQUFVLEVBQUUsVUFBVTtRQUN0QixhQUFhLEVBQUUsS0FBSztRQUNwQixlQUFlLEVBQUUsV0FBVztLQUM1QjtJQUNELGFBQWEsRUFBRTtRQUNkLGVBQWUsRUFBRSxNQUFNO1FBQ3ZCLE1BQU0sRUFBRSxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7S0FDbEI7SUFDRCxPQUFPLEVBQUU7UUFDUixRQUFRLEVBQUUsVUFBVTtRQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixhQUFhLEVBQUUsS0FBSztRQUNwQixVQUFVLEVBQUUsUUFBUTtRQUNwQixjQUFjLEVBQUUsUUFBUTtLQUN4QjtJQUNELFdBQVcsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLFNBQVM7S0FDaEI7SUFDRCxhQUFhLEVBQUU7UUFDZCxLQUFLLEVBQUUsTUFBTTtLQUNiO0lBQ0QsU0FBUyxFQUFFO1FBQ1YsSUFBSSxFQUFFLENBQUM7S0FDUDtJQUNELFVBQVUsRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDO0tBQ1I7SUFDRCxVQUFVLEVBQUU7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLGNBQWMsRUFBRSxDQUFDO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1QsZUFBZSxFQUFFLE1BQU07S0FDdkI7Q0FDRCxDQUFDLENBQUM7QUFFSCxrQkFBZSxLQUFLLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL3NldW5nam9vbmxlZS9Qcm9qZWN0cy9yZWFjdC1uYXRpdmUtZGF0ZXBpY2tlci9zcmMvc3R5bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHlsZVNoZWV0fSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuXG5jb25zdCBzdHlsZSA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0ZGF0ZVRvdWNoOiB7XG5cdFx0d2lkdGg6IDE0Mixcblx0fSxcblx0ZGF0ZVRvdWNoQm9keToge1xuXHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuXHRcdGhlaWdodDogNDAsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuXHR9LFxuXHRkYXRlSWNvbjoge1xuXHRcdHdpZHRoOiAzMixcblx0XHRoZWlnaHQ6IDMyLFxuXHRcdG1hcmdpbkxlZnQ6IDUsXG5cdFx0bWFyZ2luUmlnaHQ6IDUsXG5cdH0sXG5cdGRhdGVJbnB1dDoge1xuXHRcdGZsZXg6IDEsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRib3JkZXJXaWR0aDogMSxcblx0XHRib3JkZXJDb2xvcjogJyNhYWEnLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0fSxcblx0ZGF0ZVRleHQ6IHtcblx0XHRjb2xvcjogJyMzMzMnLFxuXHR9LFxuXHRwbGFjZWhvbGRlclRleHQ6IHtcblx0XHRjb2xvcjogJyNjOWM5YzknLFxuXHR9LFxuXHRkYXRlUGlja2VyTWFzazoge1xuXHRcdGZsZXg6IDEsXG5cdFx0YWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcblx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwNzcnLFxuXHR9LFxuXHRkYXRlUGlja2VyQ29uOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG5cdFx0aGVpZ2h0OiAwLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0fSxcblx0YnRuVGV4dDoge1xuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRvcDogMCxcblx0XHRoZWlnaHQ6IDQyLFxuXHRcdHBhZGRpbmdIb3Jpem9udGFsOiAyMCxcblx0XHRmbGV4RGlyZWN0aW9uOiAncm93Jyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG5cdH0sXG5cdGJ0blRleHRUZXh0OiB7XG5cdFx0Zm9udFNpemU6IDE2LFxuXHRcdGNvbG9yOiAnIzAwN0FGRicsXG5cdH0sXG5cdGJ0blRleHRDYW5jZWw6IHtcblx0XHRjb2xvcjogJyM2NjYnLFxuXHR9LFxuXHRidG5DYW5jZWw6IHtcblx0XHRsZWZ0OiAwLFxuXHR9LFxuXHRidG5Db25maXJtOiB7XG5cdFx0cmlnaHQ6IDAsXG5cdH0sXG5cdGRhdGVQaWNrZXI6IHtcblx0XHRtYXJnaW5Ub3A6IDQyLFxuXHRcdGJvcmRlclRvcENvbG9yOiAnI2NjYycsXG5cdFx0Ym9yZGVyVG9wV2lkdGg6IDEsXG5cdH0sXG5cdGRpc2FibGVkOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI2VlZScsXG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGU7XG4iXSwidmVyc2lvbiI6M30=