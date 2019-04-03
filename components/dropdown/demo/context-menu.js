// ---
// order: 8
// title:
//   zh-CN: 右键菜单
//   en-US: Context Menu
// ---

// ## zh-CN

// 默认是移入触发菜单，可以点击触发。

// ## en-US

// The default trigger mode is `hover`, you can change it to `click`.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown } from '../../index';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default function Demo() {
  return (
    <Dropdown overlay={menu} trigger={['contextMenu']}>
      <span style={{ userSelect: 'none' }}>Right Click on Me</span>
    </Dropdown>
  );
}

// ReactDOM.render(
//   <Dropdown overlay={menu} trigger={['contextMenu']}>
//     <span style={{ userSelect: 'none' }}>Right Click on Me</span>
//   </Dropdown>
// , mountNode);
// ````
