// ---
// order: 1
// title:
//   zh-CN: 三种触发方式
//   en-US: Three ways to trigger
// ---
//
// ## zh-CN
//
// 鼠标移入、聚集、点击。
//
// ## en-US
//
// Mouse to click, focus and move in.
//
// ````jsx

import React from 'react';
import { Popover, Button } from '../../index';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export default class Trigger extends React.Component {
  render() {
    return (
      <div>
        <Popover content={content} title="Title" trigger="hover">
          <Button>Hover me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="focus">
          <Button>Focus me</Button>
        </Popover>
        <Popover content={content} title="Title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </div>
    );
  }
}
