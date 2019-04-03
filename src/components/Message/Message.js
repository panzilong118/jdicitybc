import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {Menu, Icon} from 'jdcloudui';
import TopTools from '../TopTools/TopTools';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './style/message.css';
import ApiClient from '../../apiClient/ApiClient';

// 国际化中文
import { LocaleProvider } from 'jdcloudui';
import zh_CN from 'jdcloudui/lib/locale-provider/zh_CN';
import moment from 'moment';
moment.locale('zh-cn');

export default class Message extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shopDomain: '',
      buyerDomain: '',
      paltformDomain: '',
      domain: '',
    };
    this.activeMenu = '1';
  }

  //------------------获取ICON--------------------------------------------
  getWebsiteConfig() {
    var client = new ApiClient();
    client.get('/platform-service/mallInfo/getMallInfo')
      .then(
        (res) => {
          console.log(res)
          if (res.code == 0 && res.data) {
            this.setState({icon: res.data.icon, logo: res.data.userLogo})
          }
        },
        (err) => {
        }
      )
  }

  componentWillMount() {
    this.getWebsiteConfig();

  }

  componentDidMount() {
    const client = new ApiClient();
    client.get('passport/logout', {}).then(rs => {
      if (rs.code == 0) {
        rs.data.map(_item => {
          if (_item.domainType == 3) this.setState({shopDomain: _item.domain});
          if (_item.domainType == 2) this.setState({buyerDomain: _item.domain});
          if (_item.domainType == 5) this.setState({paltformDomain: _item.domain});
          if (_item.domainType == 1) this.setState({domain: _item.domain});
        });
      }
    });
    if (window) {
      const url = window.location.href;
      return url.indexOf('buyer') >= 0 ? this.activeMenu = '2' : this.activeMenu = '1';
    }
  }


  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <div>
          <Helmet>
            <title>消息中心</title>
            <link rel="icon" href={this.state.icon} mce_href={this.state.icon} type="image/x-icon"/>
          </Helmet>
          <TopTools />
          <div className="shop-framework-body-container" style={{display: 'flex'}}>
            <div className='shop-framework-body-container-left'>
              <Menu
                selectedKeys={[this.activeMenu]}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <MenuItemGroup key="g1" title="消息中心">
                  <Menu.Item key="1">
                    <a
                      href={`http://${this.state.shopDomain}/shop-view/message/message-center`}
                      className="a_block">
                      供应商消息
                    </a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a
                      href={`http://${this.state.buyerDomain}/buyer-view/message/message-center`}
                      className="a_block">
                      采购商消息
                    </a>
                  </Menu.Item>
                </MenuItemGroup>
              </Menu>
            </div>
            <div className='shop-framework-body-container-right' style={{minHeight: this.minHeight + "px"}}>
              {this.props.children}
            </div>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}