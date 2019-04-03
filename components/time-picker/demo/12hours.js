// ---
// order: 7
// title:
//   zh-CN: 12 小时制
//   en-US: 12 hours
// ---
//
// ## zh-CN
//
// 12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。
//
// ## en-US
//
// TimePicker of 12 hours format, with default format `h:mm:ss a`.
//
// ````jsx

import React from 'react';
import { TimePicker } from '../../index';

function onChange(time, timeString) {
  console.log(time, timeString);
}


export default class Hours extends React.Component {
  render() {
    return (
      <div>
        <TimePicker use12Hours onChange={onChange} />
        <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
      </div>
    );
  }
}
