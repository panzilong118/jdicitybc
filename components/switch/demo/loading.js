// ---
// order: 4
// title:
//   zh-CN: 加载中
//   en-US: Loading
// ---

// ## zh-CN

// 标识开关操作仍在执行中。

// ## en-US

// Mark a pending state of switch.

// ````jsx
import * as React from 'react';

import { Switch } from '../../index';

export default function Demo() {
    return (
        <div>
            <Switch loading defaultChecked />
            <br />
            <Switch size='small' loading />
        </div>
    );
}

// ReactDOM.render(
//   <div>
//     <Switch loading defaultChecked />
//     <br />
//     <Switch size="small" loading />
//   </div>
// , mountNode);
// ````
