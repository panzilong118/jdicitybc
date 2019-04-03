// ---
// order: 2
// title:
//   zh-CN: 其他元素
//   en-US: Other elements
// ---

// ## zh-CN

// 分割线和不可用菜单项。

// ## en-US

// Divider and disabled menu item.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Icon } from '../../index';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
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
