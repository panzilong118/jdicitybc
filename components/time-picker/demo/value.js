// ---
// order: 1
// title:
//   zh-CN: 受控组件
//   en-US: Under Control
// ---
//
// ## zh-CN
//
// value 和 onChange 需要配合使用。
//
// ## en-US
//
// `value` and `onChange` should be used together,
//
// ````jsx
import React from 'react';
import { TimePicker } from '../../index';

export default class UnderControl extends React.Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.log(time);
    this.setState({ value: time });
  }

  render() {
    return <TimePicker value={this.state.value} onChange={this.onChange} />;
  }
}
