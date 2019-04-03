// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---

// ## zh-CN

// 最简单的下拉菜单。

// ## en-US

// The most basic dropdown menu.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Icon } from '../../index';

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
    <Dropdown overlay={menu}>
      <a className="jc-dropdown-link" href="#">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  );
}

// ReactDOM.render(
//   <Dropdown overlay={menu}>
//     <a className="ant-dropdown-link" href="#">
//       Hover me <Icon type="down" />
//     </a>
//   </Dropdown>
// , mountNode);
// ````
