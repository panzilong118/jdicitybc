// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---

// ## zh-CN

// 最简单的用法。

// ## en-US

// The simplest usage.

// ````jsx
import React from 'react';

import { Affix, Button } from '../../index';

export default function Demo() {
    return (
        <div>
            <Affix>
                <Button type='primary'>Affix top</Button>
            </Affix>
            <br />
            <Affix offsetBottom={0}>
                <Button type='primary'>Affix bottom</Button>
            </Affix>
        </div>
    );
}

// ReactDOM.render(
//   <div>
//     <Affix>
//       <Button type='primary'>Affix top</Button>
//     </Affix>
//     <br />
//     <Affix offsetBottom={0}>
//       <Button type='primary'>Affix bottom</Button>
//     </Affix>
//   </div>,
//   mountNode
// );
// ````
