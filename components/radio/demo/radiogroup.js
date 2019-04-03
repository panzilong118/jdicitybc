// ---
// order: 1
// title:
//   zh-CN: 单选组合
//   en-US: Radio Group
// ---

// ## zh-CN

// 一组互斥的 Radio 配合使用。

// ## en-US

// A group of radio components.

// ```jsx
import React from 'react';
import { Radio } from '../../index';

const RadioGroup = Radio.Group;

export default class RadioGroupApp extends React.Component {
  state = {
      value: 1,
  }
  onChange = (e) => {
      console.log('radio checked', e.target.value);
      this.setState({
          value: e.target.value,
      });
  }
  render() {
      return (
          <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
          </RadioGroup>
      );
  }
}

