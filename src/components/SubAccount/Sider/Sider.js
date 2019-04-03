import React, {Component} from 'react';
import { Menu, Icon} from 'jdcloudui';

import {Link} from 'react-router';  //链接跳转，相当于a标签
import './style/subAccountSider.css';
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
    const vKey = this.props.selectKey;
    return (
        <div className="buyer-sider-container">
          <Menu
            key={Math.random()}
            theme="light"
            onClick={::this.handleClick}
            selectedKeys={[String(vKey)]}
            mode="inline"
          >
            <Menu.Item key="20001" style={{borderBottom:'1px solid #ecf0f2',paddingLeft:'48px'}}>
              <a href= "/subaccount-buyer-view/subaccountmanage">
                <Icon type='' />
                <span className= "second-menu-nochild">
                  子账号管理
                </span>
              </a>
            </Menu.Item>
            <Menu.Item key="20002" style={{borderBottom:'1px solid #ecf0f2', paddingLeft:'48px'}}>
              <a href= "/subaccount-buyer-view/rolemanage">
                <Icon type='' />
                <span className= "second-menu-nochild">
                  角色管理
                </span>
              </a>
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}
