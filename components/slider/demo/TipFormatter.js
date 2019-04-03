// ---
// order: 3
// title:
//   zh-CN: 自定义提示
//   en-US: Customize tooltip
// ---

// ## zh-CN

// 使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。

// ## en-US

// Use `tipFormatter` to format content of `Toolip`. If `tipFormatter` is null, hide it.

// ````jsx
import * as React from 'react';

import { Slider } from '../../index';

function formatter(value) {
  return `${value}%`;
}
export default function Demo() {
  return (
    <div>
      <Slider tipFormatter={formatter} />
      <Slider tipFormatter={null} />
    </div>
  );
}
// ReactDOM.render(
//   <div>
//     <Slider tipFormatter={formatter} />
//     <Slider tipFormatter={null} />
//   </div>,
//   mountNode
// );
// ````
