import React, {Component} from 'react';
import { Menu } from 'jdcloudui';
import {Link} from 'react-router';
import logo from './style/logo.png';
import './style/templateHader.css';
import ApiClient from '../../../apiClient/ApiClient';
export default class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      mainDomain: '/',
    };
  }
  componentWillMount() {
    this.getMainDomainForLogo();
  }

  //获取域名
  getMainDomainForLogo() {
    var client = new ApiClient();
    client.get('/passport/logout')
      .then(
        (res) => {
          if(res.code == 0 && res.data) {
            res.data.map(_item => {
              if (_item.domainType == 1) {
                let mainDomain = `http://${_item.domain}`;
                this.setState({mainDomain: mainDomain});
              }
            });
          }
        },
        (err) => {
        }
      );
    // client.get('/platform-service/mallInfo/getMallInfo')
    //   .then(
    //     (res) => {
    //       if(res.code == 0 && res.data) {
    //         this.priceUrl = res.data.userLogo;
    //       }
    //     },
    //     (err) => {
    //     }
    //   );
  }

  render() {
    return (
      <div className="subaccount-framework-header">
        <div className="subaccount-framework-container">
          <ul>
            <li><a className="subaccount-framework-logo" href={this.state.mainDomain} target="_blank" >{this.props.logo?<img src={this.props.logo} />:''}</a></li>
            <li><span className="subaccount-framework-title" >子账号管理</span></li>
          </ul>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={['10000']}
            style={{ lineHeight: '62px', float: 'right'}}
          >
            <Menu.Item key="10000">
              账号管理
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
