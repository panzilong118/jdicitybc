// ---
// order: 2
// title:
//   zh-CN: 修改延时
//   en-US: Customize duration
// ---

// ## zh-CN

// 自定义时长 `10s`，默认时长为 `3s`。

// ## en-US

// Customize message display duration from default `3s` to `10s`.

// ````jsx
import * as React from 'react';
import { message, Button } from '../../index';

const success = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};

export default function Demo() {
  return (
    <Button onClick={success}>Customized display duration</Button>
  );
}

// ReactDOM.render(
//   <Button onClick={success}>Customized display duration</Button>
// , mountNode);
// ````
