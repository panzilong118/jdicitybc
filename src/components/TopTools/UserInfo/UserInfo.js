/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:用户信息
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/* ***********  自定义组件  ************ */
import getLogin, {getLoginAction} from './getLogin_redux';
import onLogout from '../../../sso/onLogout';

/* ***********  redux  ************ */
@connect(
  state => (getLogin),
  dispatch => bindActionCreators({getLoginAction}, dispatch)
)

export default class ShopInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      avatarPicSrc: ''
    };
  }

  /*
   * 发送获取用户信息请求
   * */
  componentWillMount() {
    this.props.getLoginAction().then(rs => {
      if (rs.code != 0) return;
      this.setState({
        username: rs.data.username,
        avatarPicSrc: rs.data.avatarPicSrc
      });
    });
  }

  /*
   * 登出操作
   * */
  logout() {
    const logouts = {
      "passport": ["/service-passport-view/logout", false],
      "shop": ["/shop-view/logout", false],
      "buyer": ["/buyer-view/logout", false],
      "main": ["/website-view/logout", false]
    };
    onLogout(logouts, "login");
  }

  /*
   * 用户名截取
   * */
  strSize(text) {
    let str = '';
    let num = 0;
    const reg = /[\x00-\xff]/;
    for (let i in text) {
      if (!reg.test(text[i])) {
        num += 2;
      } else {
        num += 1;
      }
      if (num <= 6) {
        str += text[i];
      } else {
        str += '...';
        break;
      }
    }
    return str;
  }
  render() {
    return (
      <div className="down-menu f-ib deg180">
        <a>{this.state.username}<Icon type="down" className="ml5 arrows"/></a>
        <ul className="down-menu-cont user">
          <li className="user-pic">
            <a target="_blank" href={`//${this.props.buyer}/user-buyer-view/accountmanage/accountInfo`}
               className="company-a">
              {
                this.state.avatarPicSrc ?
                  (<img src={this.state.avatarPicSrc} alt={this.state.username}/>) :
                  (<p><Icon type="user"/></p>)
              }
            </a>
          </li>
          <li>
            <a target="_blank" href={`//${this.props.buyer}/user-buyer-view/accountmanage/accountInfo`}
               className="company-a">账号管理</a>
            <span className="vertical bg-eee"/>
            <a onClick={() => this.logout()}>退出</a></li>
        </ul>
      </div>
    );
  }
}