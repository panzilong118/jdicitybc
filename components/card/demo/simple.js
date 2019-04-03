// ---
// order: 2
// title:
//   zh-CN: 简洁卡片
//   en-US: Simple card
// ---

// ## zh-CN

// 只包含内容区域。

// ## en-US

// A simple card only containing a content area.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

export default function Demo() {
    return (
        <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
}

// ReactDOM.render(
//   <Card style={{ width: 300 }}>
//     <p>Card content</p>
//     <p>Card content</p>
//     <p>Card content</p>
//   </Card>
// , mountNode);
// ````
