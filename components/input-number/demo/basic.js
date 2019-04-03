// ---
// order: 0
// title:
//     zh-CN: 基本
//     en-US: Basic
// ---

// ## zh-CN

// 数字输入框。

// ## en-US

// Numeric-only input box.

// ````jsx
import * as React from 'react';
import { InputNumber } from '../../index';

function onChange(value) {
  console.log('changed', value);
}

export default function Demo() {
  return (
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
  );
}

// ReactDOM.render(
//   <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
// , mountNode);
// ````
