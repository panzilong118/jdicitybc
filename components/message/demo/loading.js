// ---
// order: 3
// title:
//   zh-CN: 加载中
//   en-US: Message of loading
// ---

// ## zh-CN

// 进行全局 loading，异步自行移除。

// ## en-US

// Display a global loading indicator, which is dismissed by itself asynchronously.

// ````jsx
import * as React from 'react';
import { message, Button } from '../../index';

const success = () => {
  const hide = message.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default function Demo() {
  return (
    <Button onClick={success}>Display a loading indicator</Button>
  );
}

// ReactDOM.render(
//   <Button onClick={success}>Display a loading indicator</Button>
// , mountNode);
// ````
