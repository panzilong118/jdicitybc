// ---
// order: 3
// title:
//   zh-CN: 两种大小
//   en-US: Two sizes
// ---

// ## zh-CN

// `size="small"` 表示小号开关。

// ## en-US

// `size="small"` represents a small sized switch.

// ````jsx
import * as React from 'react';

import { Switch } from '../../index';

export default function Demo() {
    return (
        <div>
            <Switch defaultChecked />
            <br />
            <Switch size='small' defaultChecked />
        </div>
    );
}
// ReactDOM.render(
//   <div>
//     <Switch defaultChecked />
//     <br />
//     <Switch size="small" defaultChecked />
//   </div>
// , mountNode);
// ````
