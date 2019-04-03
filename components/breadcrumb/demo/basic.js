// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic Usage
// ---

// ## zh-CN

// 最简单的用法。

// ## en-US

// The simplest use

// ````jsx
import * as React from 'react';
import { Breadcrumb } from '../../index';

export default function Demo() {
  return (
     <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
  );
}

// ReactDOM.render(
//   <Breadcrumb>
//     <Breadcrumb.Item>Home</Breadcrumb.Item>
//     <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
//     <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
//     <Breadcrumb.Item>An Application</Breadcrumb.Item>
//   </Breadcrumb>
// , mountNode);
// ````
