// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---

// ## zh-CN

// 最简单的用法。

// ## en-US

// The most basic usage.

// ````jsx
import * as React from 'react';

import { Switch } from '../../index';

function onChange(checked) {
    console.log(`switch to ${checked}`);
}

export default function Basic() {
    return (
        <Switch defaultChecked onChange={onChange} />
    );
}

// ReactDOM.render(
//   <Switch defaultChecked onChange={onChange} />,
//   mountNode
// );
// ````

// <style>
//     .jc-switch {
//     margin-bottom: 8px;
//     }
// </style>
