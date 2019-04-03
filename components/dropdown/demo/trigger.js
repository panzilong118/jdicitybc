// ---
// order: 3
// title:
//   zh-CN: 触发方式
//   en-US: Trigger mode
// ---

// ## zh-CN

// 默认是移入触发菜单，可以点击触发。

// ## en-US

// The default trigger mode is `hover`, you can change it to `click`.

// ````jsx
import * as React from 'react';
import { Menu, Dropdown, Icon } from '../../index';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default function Demo() {
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="jc-dropdown-link" href="#">
        Click me <Icon type="down" />
      </a>
    </Dropdown>
  );
}

// ReactDOM.render(
//   <Dropdown overlay={menu} trigger={['click']}>
//     <a className="ant-dropdown-link" href="#">
//       Click me <Icon type="down" />
//     </a>
//   </Dropdown>
// , mountNode);
// ````
