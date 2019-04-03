// ---
// order: 1
// title:
//   zh-CN: 垂直分割线
//   en-US: Vertical
// ---

// ## zh-CN

// 使用 `type='vertical'` 设置为行内的垂直分割线。

// ## en-US

// Use `type='vertical'` make it vertical.

// ````jsx
import * as React from 'react';

import { Divider } from '../../index';

export default function Demo() {
    return (
        <div>
            Text
            <Divider type='vertical' />
            <a href='#'>Link</a>
            <Divider type='vertical' />
            <a href='#'>Link</a>
        </div>
    );
}

// ReactDOM.render(
//   <div>
//     Text
//     <Divider type='vertical' />
//     <a href='#'>Link</a>
//     <Divider type='vertical' />
//     <a href='#'>Link</a>
//   </div>
// , mountNode);
// ````
