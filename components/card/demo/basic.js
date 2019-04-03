// ---
// order: 0
// title:
//   zh-CN: 典型卡片
//   en-US: Basic card
// ---

// ## zh-CN

// 包含标题、内容、操作区域。

// ## en-US

// A basic card containing a title, content and an extra corner content.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

export default function Demo() {
    return (
        <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
}

// ReactDOM.render(
//   <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// , mountNode);
// ````

// <style>
// .code-box-demo p {
//   margin: 0;
// }
// </style>
