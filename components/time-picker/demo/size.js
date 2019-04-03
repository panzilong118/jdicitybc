// ---
// order: 2
// title:
//   zh-CN: 三种大小
//   en-US: Three Sizes
// ---
//
// ## zh-CN
//
// 三种大小的输入框，大的用在表单中，中的为默认。
//
// ## en-US
//
// The input box comes in three sizes. large is used in the form, while the medium size is the default.
//
// ````jsx
import React from 'react';
import { TimePicker } from '../../index';
import moment from 'moment';

export default class ThreeSize extends React.Component {
  render() {
    return (
      <div>
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} />
        <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
      </div>
    );
  }
}
