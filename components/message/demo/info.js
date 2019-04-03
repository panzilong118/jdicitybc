// ---
// order: 0
// title:
//   zh-CN: 普通提示
//   en-US: Normal prompt
// ---

// ## zh-CN

// 信息提醒反馈。

// ## en-US

// Normal messages as feedbacks.

// ````jsx
import * as React from 'react';
import { message, Button } from '../../index';

const info = () => {
  message.info('This is a normal message');
};

export default function Demo() {
  return (
    <Button type="primary" onClick={info}>Display normal message</Button>
  );
}

// ReactDOM.render(
//   <Button type="primary" onClick={info}>Display normal message</Button>
// , mountNode);
// ````
