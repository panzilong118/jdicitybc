// ---
// order: 2
// title:
//   zh-CN: 卡片模式
//   en-US: Card
// ---
//
// ## zh-CN
//
// 用于嵌套在空间有限的容器中。
//
// ## en-US
//
// Nested inside a container element for rendering in limited space.
//
// ````jsx

import React from 'react';
import { Calendar } from '../../index';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Card extends React.Component {
  render() {
    return (
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    );
  }
}
