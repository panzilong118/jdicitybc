// ---
// order: 1
// title:
//   zh-CN: 无边框
//   en-US: No border
// ---

// ## zh-CN

// 在灰色背景上使用无边框的卡片。

// ## en-US

// A borderless card on a gray background.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

export default function Demo() {
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title='Card title' bordered={false} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    );
}

// ReactDOM.render(
//   <div style={{ background: '#ECECEC', padding: '30px' }}>
//     <Card title='Card title' bordered={false} style={{ width: 300 }}>
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//   </div>
// , mountNode);
// ````
