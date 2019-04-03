// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---
//
// ## zh-CN
//
// 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
//
// ## en-US
//
// Click `TimePicker`, and then we could select or input a time in panel.
//
// ````jsx

import React from 'react';
import { TimePicker } from '../../index';
import moment from 'moment';

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default class Basic extends React.Component {
  render() {
    return (
      <TimePicker onChange={onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
    );
  }
}
