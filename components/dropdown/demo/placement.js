// ---
// order: 1
// title:
//   zh-CN: 弹出位置
//   en-US: Placement
// ---

// ## zh-CN

// 支持 6 个弹出位置。

// ## en-US

// Support 6 placements.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Button } from '../../index';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

export default function Demo() {
  return (
    <div>
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>bottomCenter</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
      <br />
      <Dropdown overlay={menu} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topCenter">
        <Button>topCenter</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </div>
  );
}

// ReactDOM.render(
//   <div>
//     <Dropdown overlay={menu} placement="bottomLeft">
//       <Button>bottomLeft</Button>
//     </Dropdown>
//     <Dropdown overlay={menu} placement="bottomCenter">
//       <Button>bottomCenter</Button>
//     </Dropdown>
//     <Dropdown overlay={menu} placement="bottomRight">
//       <Button>bottomRight</Button>
//     </Dropdown>
//     <br />
//     <Dropdown overlay={menu} placement="topLeft">
//       <Button>topLeft</Button>
//     </Dropdown>
//     <Dropdown overlay={menu} placement="topCenter">
//       <Button>topCenter</Button>
//     </Dropdown>
//     <Dropdown overlay={menu} placement="topRight">
//       <Button>topRight</Button>
//     </Dropdown>
//   </div>
// , mountNode);
// ````

// ````css
// #components-dropdown-demo-placement .ant-btn {
//   margin-right: 8px;
//   margin-bottom: 8px;
// }
// ````
