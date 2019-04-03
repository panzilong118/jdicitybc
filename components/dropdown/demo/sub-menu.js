// ---
// order: 6
// title:
//   zh-CN: 多级菜单
//   en-US: Cascading menu
// ---

// ## zh-CN

// 传入的菜单里有多个层级。

// ## en-US

// The menu has multiple levels.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Icon } from '../../index';
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

export default function Demo() {
  return (
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Cascading menu <Icon type="down" />
      </a>
    </Dropdown>
  );
}
// ReactDOM.render(
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" href="#">
//       Cascading menu <Icon type="down" />
//     </a>
//   </Dropdown>
// , mountNode);
// ````
