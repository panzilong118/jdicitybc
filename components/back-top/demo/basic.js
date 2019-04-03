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

import { BackTop } from '../../index';

export default function Demo() {
    return (
      <div>
          <BackTop />
          Scroll down to see the bottom-right
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          button.
      </div>
    );
}

// ReactDOM.render(
//   <div>
//     <BackTop />
//     Scroll down to see the bottom-right
//     <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
//     button.
//   </div>,
//   mountNode
// );
// ````
