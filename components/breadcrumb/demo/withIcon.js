// ---
// order: 1
// title:
//   zh-CN: 带有图标的
//   en-US: With an Icon
// ---

// ## zh-CN

// 图标放在文字前面。

// ## en-US

// The icon should be placed in front of the text.

// ````jsx
import * as React from 'react';
import { Breadcrumb, Icon } from '../../index';

export default function Demo() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="">
        <Icon type="home" />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <Icon type="user" />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Application
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

// ReactDOM.render(
//   <Breadcrumb>
//     <Breadcrumb.Item href="">
//       <Icon type="home" />
//     </Breadcrumb.Item>
//     <Breadcrumb.Item href="">
//       <Icon type="user" />
//       <span>Application List</span>
//     </Breadcrumb.Item>
//     <Breadcrumb.Item>
//       Application
//     </Breadcrumb.Item>
//   </Breadcrumb>
// , mountNode);
// ````
