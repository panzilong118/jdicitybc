/**
 * @author sunjianguo
 * @version 3.3.3
 */

import RcCalendar from 'rc-calendar';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import createPicker from './createPicker';
import wrapPicker from './wrapPicker';
import RangePicker from './RangePicker';
import WeekPicker from './WeekPicker';

const DatePicker = wrapPicker(createPicker(RcCalendar));

const MonthPicker = wrapPicker(createPicker(MonthCalendar), 'YYYY-MM');

Object.assign(DatePicker, {
    RangePicker: wrapPicker(RangePicker),
    MonthPicker,
    WeekPicker: wrapPicker(WeekPicker, 'gggg-wo'),
});

export default DatePicker;

// const TimePickerProps = {
//     className: PropTypes.string,
//     size: PropTypes.oneOf(['large' | 'default' | 'small']),
//     value: PropTypes.instanceOf(moment.Moment),
//     defaultValue: PropTypes.instanceOf(moment.Moment),
//     open: PropTypes.bool,
//     format: PropTypes.string,
//     onChange: (time, timeString) => {},
//     onOpenChange: (open) => {},
//     disabled: PropTypes.bool,
//     placeholder: PropTypes.string,
//     prefixCls: PropTypes.string,
//     hideDisabledOptions: PropTypes.bool,
//     disabledHours: () => {},
//     disabledMinutes: (selectedHour) => {},
//     disabledSeconds: (selectedHour, selectedMinute) => {},
//     style: {},
//     getPopupContainer: (triggerNode) => HTMLElement,
//     addon: PropTypes.func,
//     use12Hours: PropTypes.bool,
//     focusOnOpen: PropTypes.bool,
//     hourStep: PropTypes.number,
//     minuteStep: PropTypes.number,
//     secondStep: PropTypes.number,
//     allowEmpty: PropTypes.bool,
//     inputReadOnly: PropTypes.bool,
//     clearText: PropTypes.string,
//     defaultOpenValue: PropTypes.instanceOf(moment.Moment),
//     popupClassName: PropTypes.string,
//     showTime: PropTypes.bool,
//     showToday: PropTypes.bool,
//     disabledTime: (current) => {},
//     onOk: (selectedTime) =>{},
//     id: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//       ]),
//     inputPrefixCls: PropTypes.string,
//     allowClear: PropTypes.bool,
//     dropdownClassName: PropTypes.string,
//     getCalendarContainer: (triggerNode) => HTMLElement,
//     disabledDate: (current) => PropTypes.bool,
//     renderExtraFooter: () => PropTypes.node,
//     dateRender: (current, today) => PropTypes.node,
//     defaultPickerValue: PropTypes.instanceOf(moment.Moment),
    
//   }

// export default class DatePicker extends React.Component{
    
//     static propTypes = instanceOf(TimePickerProps)
 
// }
