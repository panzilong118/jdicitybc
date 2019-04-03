// ---
// order: 3
// title:
//     zh-CN: 小数
//     en-US: Decimals
// ---

// ## zh-CN

// 和原生的数字输入框一样，value 的精度由 step 的小数位数决定。

// ## en-US

// A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the step prop.

// ````jsx
import * as React from 'react';
import { InputNumber } from '../../index';

function onChange(value) {
  console.log('changed', value);
}

export default function Demo() {
  return (
    <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
  );
}

// ReactDOM.render(
//   <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
// , mountNode);
// ````
