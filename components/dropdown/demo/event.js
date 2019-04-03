// ---
// order: 4
// title:
//   zh-CN: 触发事件
//   en-US: Click event
// ---

// ## zh-CN

// 点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。

// ## en-US

// An event will be triggered when you click menu items, in which you can make different operations according to item's key.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Icon, message } from '../../index';
const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default function Demo() {
  return (
     <Dropdown overlay={menu}>
      <a className="jc-dropdown-link" href="#">
        Hover me, Click menu item <Icon type="down" />
      </a>
    </Dropdown>
  );
}

// ReactDOM.render(
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" href="#">
//       Hover me, Click menu item <Icon type="down" />
//     </a>
//   </Dropdown>
// , mountNode);
// ````
