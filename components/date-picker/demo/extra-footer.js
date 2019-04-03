// ---
// order: 10
// title:
//   zh-CN: 额外的页脚
//   en-US: Extra Footer
// ---

// ## zh-CN

// 在浮层中加入额外的页脚，以满足某些定制信息的需求。

// ## en-US

// Render extra footer in panel for customized requirements.

// ````jsx
import React from 'react';
import { DatePicker } from '../../index';
const { RangePicker, MonthPicker } = DatePicker;

export default function Demo() {
  return (
    <div>
      <DatePicker renderExtraFooter={() => 'extra footer'} />
      <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
      <RangePicker renderExtraFooter={() => 'extra footer'} />
      <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
      <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
    </div>
  );
}

// ReactDOM.render(
//   <div>
//     <DatePicker renderExtraFooter={() => 'extra footer'} />
//     <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
//     <RangePicker renderExtraFooter={() => 'extra footer'} />
//     <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
//     <MonthPicker renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
//   </div>
// , mountNode);
// ````
