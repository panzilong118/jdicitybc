// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---

// ## zh-CN

// 最简单的用法，在浮层中可以选择或者输入日期。

// ## en-US

// Basic use case. Users can select or input a date in panel.

// ````jsx
import React from 'react';
import { DatePicker } from '../../index';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default function Demo() {
  return (
    <div>
      <DatePicker onChange={onChange} />
      <br />
      <MonthPicker onChange={onChange} placeholder="Select month" />
      <br />
      <RangePicker onChange={onChange} />
      <br />
      <WeekPicker onChange={onChange} placeholder="Select week" />
    </div>
  );
}

// ReactDOM.render(
//   <div>
//     <DatePicker onChange={onChange} />
//     <br />
//     <MonthPicker onChange={onChange} placeholder="Select month" />
//     <br />
//     <RangePicker onChange={onChange} />
//     <br />
//     <WeekPicker onChange={onChange} placeholder="Select week" />
//   </div>
// , mountNode);
// ````
