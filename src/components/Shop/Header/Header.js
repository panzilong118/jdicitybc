import React, {Component} from 'react';
import { Badge,Icon,Menu,Dropdown } from 'jdcloudui';
import {Link} from 'react-router';
import './style/templateHader.css';
import logo from './style/logo.png';
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

  // 获取域名
  getMainDomainForLogo() {
    var client = new ApiClient();
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

  // 根据name获取cookie值
  getCookieByArray(name){
    if(typeof document !== 'undefined'){
      var cookies = document.cookie.split(';');
      var c;
      for(var i=0; i<cookies.length ; i++){
        c = cookies[i].split('=');
        if (c[0].replace(' ', '') == name) {
          return c[1];
        }
      }
    }else{
      return null;
    }
  }

  render() {
    const shopType = this.getCookieByArray('shopType');
    let titleName = '';
    if (shopType) {
      titleName = shopType==1 ? '供应商中心' : '商家中心';
    }
    const {menus,selectKey} = this.props;
    const horizontal = menus.map((menu)=>{
      return <Menu.Item key={menu.id} ><a href={menu.href} target={menu.target}>{menu.name}</a></Menu.Item>;
    });
    return (
      <div className="shop-framework-header">
        <div className="shop-framework-container">
          <ul>
            <li><a className="shop-framework-logo" href={this.state.mainDomain} target="_blank">{this.props.logo?<img src={this.props.logo} />:''}</a></li>
            <li><span className="shop-framework-title" >{titleName}</span></li>
          </ul>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[String(selectKey)]}
            style={{ lineHeight: '62px', float: 'right'}}
          >
            {horizontal}
          </Menu>
        </div>
      </div>
    )
  }
}