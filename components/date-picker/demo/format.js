// ---
// order: 1
// title:
//   zh-CN: 日期格式
//   en-US: Date Format
// ---

// ## zh-CN

// 使用 `format` 属性，可以自定义日期显示格式。

// ## en-US

// We can set the date format by `format`.

// ````jsx
import React from 'react';
import { DatePicker } from '../../index';
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


export default function Demo() {
  return (
    <div>
      <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
      <br />
      <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
      <br />
      <RangePicker
        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
        format={dateFormat}
      />
    </div>
  );
}

// ReactDOM.render(
//   <div>
//     <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
//     <br />
//     <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
//     <br />
//     <RangePicker
//       defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
//       format={dateFormat}
//     />
//   </div>
// , mountNode);
// ````
