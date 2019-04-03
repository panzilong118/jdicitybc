import React, {Component} from 'react';
import { Menu, Icon} from 'jdcloudui';
import './style/shopSider.css';
import {Link} from 'react-router';  //链接跳转，相当于a标签
export default class Sider extends Component {

  constructor(context) {
    super(context);
    this.state = {
      current: '4',
    };
  }
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }
  render() {
    const SubMenu = Menu.SubMenu;
    const {subMenu,vKey} = this.props;
    let openKeys = [];
    if (subMenu && subMenu.length && subMenu.length > 0) {
      for (let i in subMenu) {
        openKeys.push(subMenu[i].id + '');
      }
    }
    let menus = '';
    if (subMenu && subMenu.length && subMenu.length > 0) {
      menus = subMenu.map((menu)=>{
        if (menu.children && menu.children.length && menu.children.length > 0) {
          const sub = menu.children.map((cMenu)=>{
            return (
              <Menu.Item key={cMenu.id}>
                <a href={cMenu.href} target={cMenu.target}>
                <span className="third-menu">
                  {cMenu.name}
                </span>
                </a>
              </Menu.Item>);
          });
          return (
            <SubMenu key={menu.id} title={<span className= "second-menu-haschild"><Icon type={menu.icon ? menu.icon + '' : ''} />{menu.name}</span>}>
              {sub}
            </SubMenu>);
        } else {
          return (
            <Menu.Item key={menu.id} style={{borderBottom:'1px solid #ecf0f2'}}>
              <a href={menu.href} target={menu.target}><Icon type={menu.icon ? menu.icon + '' : ''} />
                <span className= "second-menu-nochild">
                {menu.name}
              </span>
              </a>
            </Menu.Item>);
        }
      });
    }

    return (
      <div className="shop-sider-container">
        <Menu
          key={Math.random()}
          theme="light"
          style={{ width: 200 }}
          onClick={::this.handleClick}
          defaultOpenKeys={openKeys}
          selectedKeys={[String(vKey)]}
          mode="inline"
        >
          {menus}
        </Menu>
      </div>
    );
  }
}
