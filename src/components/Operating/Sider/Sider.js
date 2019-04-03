import React, {Component} from 'react';
import { Menu, Icon} from 'jdcloudui';

import {Link} from 'react-router';  //链接跳转，相当于a标签
import './style/templateSider.css';
import logo from './style/logo.png';
import ApiClient from '../../../apiClient/ApiClient';
export default class Sider extends Component {

  constructor(context) {
    super(context);
    this.state = {
      current: '4',
      mainDomain: '/',
    };
  }
  componentWillMount() {
    this.getMainDomainForLogo();
  }

  //获取域名
  getMainDomainForLogo() {
    var client = new ApiClient(null,null,null,true);
    client.get('/passport/logout')
      .then(
        (res) => {
          if(res.code == 0 && res.data) {
            res.data.map(_item => {
              if (_item.domainType == 1) {
                let mainDomain = `//${_item.domain}`;
                this.setState({mainDomain: mainDomain});
              }
            });
          }
        },
        (err) => {
        }
      );
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
    let menus = ''
    if (subMenu && subMenu.length && subMenu.length > 0) {
      menus = subMenu.map((menu)=>{
        if (menu.children && menu.children.length && menu.children.length>0) {
          const sub = menu.children.map((cMenu)=>{
            return <Menu.Item key={cMenu.id}><a href={cMenu.href} target={cMenu.target}>{cMenu.name}</a></Menu.Item>
          })
          return (<SubMenu key={menu.id} title={<span><Icon type={menu.icon ? menu.icon + '' : ''}/><span>{menu.name}</span></span>}>
            {sub}
          </SubMenu>)
        }else {
          return <Menu.Item className="operaing-no-child" key={menu.id}><a href={menu.href}><Icon type={menu.icon ? menu.icon + '' : ''}/>{menu.name}</a></Menu.Item>
        }
      });
    }
    return (
      <div>
        <div className="operating-framewrok-logo">
          <a href={this.state.mainDomain} target="_blank" >{this.props.logo?<img src={this.props.logo} />:''}</a>
        </div>
        <Menu
          key={Math.random()}
          theme="dark"
          style={{ width: 200 }}
          defaultOpenKeys={openKeys}
          selectedKeys={[String(vKey)]}
          className="operating-framewrok-menu"
          mode="inline"
        >
          {menus}
        </Menu>
      </div>
    )
  }

}