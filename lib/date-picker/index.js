'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _createPicker = require('./createPicker');

var _createPicker2 = _interopRequireDefault(_createPicker);

var _wrapPicker = require('./wrapPicker');

var _wrapPicker2 = _interopRequireDefault(_wrapPicker);

var _RangePicker = require('./RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

var _WeekPicker = require('./WeekPicker');

var _WeekPicker2 = _interopRequireDefault(_WeekPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author sunjianguo
 * @version 3.3.3
 */

var DatePicker = (0, _wrapPicker2.default)((0, _createPicker2.default)(_rcCalendar2.default));

var MonthPicker = (0, _wrapPicker2.default)((0, _createPicker2.default)(_MonthCalendar2.default), 'YYYY-MM');

Object.assign(DatePicker, {
    RangePicker: (0, _wrapPicker2.default)(_RangePicker2.default),
    MonthPicker: MonthPicker,
    WeekPicker: (0, _wrapPicker2.default)(_WeekPicker2.default, 'gggg-wo')
});

exports.default = DatePicker;

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
//# sourceMappingURL=index.js.map