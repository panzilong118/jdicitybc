// ---
// order: 3
// title:
//   zh-CN: 禁用
//   en-US: disabled
// ---
//
// ## zh-CN
//
// 禁用时间选择。
//
// ## en-US
//
// A disabled state of the `TimePicker`.
//
//
// ````jsx

import React from 'react';
import { TimePicker } from '../../index';
import moment from 'moment';

export default class Disabled extends React.Component {
  render() {
    return (
      <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
    );
  }
}
