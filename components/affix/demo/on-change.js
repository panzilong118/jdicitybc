// ---
// order: 1
// title:
//   zh-CN: 固定状态改变的回调
//   en-US: Callback
// ---

// ## zh-CN

// 可以获得是否固定的状态。

// ## en-US

// Callback with affixed state.

// ````jsx
import React from 'react';

import { Affix, Button } from '../../index';

export default function Demo() {
    return (
        <Affix offsetTop={120} onChange={(affixed) => { console.log(affixed); }}>
            <Button>120px to affix top</Button>
        </Affix>
    );
}

// ReactDOM.render(
//   <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
//     <Button>120px to affix top</Button>
//   </Affix>,
//   mountNode
// );
// ````
