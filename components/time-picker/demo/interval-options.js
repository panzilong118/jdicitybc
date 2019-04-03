// ---
// order: 5
// title:
//   zh-CN: 步长选项
//   en-US: interval option
// ---
// ## zh-CN
//
// 可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。
//
// ## en-US
//
// Show stepped options by `hourStep` `minuteStep` `secondStep`.
//
// ````jsx

import React from 'react';
import { TimePicker } from '../../index';


export default class Basic extends React.Component {
  render() {
    return (
      <TimePicker minuteStep={15} secondStep={10} />
    );
  }
}
