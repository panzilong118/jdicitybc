// ---
// order: 5
// title:
//   zh-CN: 预加载的卡片
//   en-US: Loading card
// ---

// ## zh-CN

// 数据读入前会有文本块样式。

// ## en-US

// Shows a loading indicator while the contents of the card is being fetched.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

export default function Demo() {
    return (
        <Card loading title='Card title' style={{ width: '34%' }}>
            Whatever content
        </Card>
    );
}
// ReactDOM.render(
//   <Card loading title='Card title' style={{ width: '34%' }}>
//     Whatever content
//   </Card>
// , mountNode);
// ````
