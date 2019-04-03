/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:手机商城
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/* ***********  自定义组件  ************ */
import getCode, {getCodeAction} from './getCode_redux';
/* ***********  redux  ************ */
@connect(
  state => (getCode),
  dispatch => bindActionCreators({getCodeAction}, dispatch)
)

export default class MobileMall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weixinCodeUrl: '',
      appDownCodeUrl: ''
    };
  }

  /*
   * 发送获取二维码请求
   * */
  componentWillMount() {
    this.props.getCodeAction().then(rs => {
      if (rs.code == 0) {
        this.setState({
          weixinCodeUrl: rs.data.weixinCodeUrl,
          appDownCodeUrl: rs.data.appDownCodeUrl
        });
      }
    });
  }

  render() {
    return (
      <div className="down-menu f-ib">
        <a><Icon type="new-phone phone-icon"/>手机商城</a>
        <ul className="down-menu-cont codeImg">
          <li>
            <img src={this.state.weixinCodeUrl} alt="微信商城"/>
            <p>微信扫一扫</p>
            <p>关注商城</p>
            <p>微信商城</p>
          </li>
          <li>
            <img src={this.state.appDownCodeUrl} alt="立即下载APP"/>
            <p>扫描二维码</p>
            <p>立即下载APP</p>
          </li>
        </ul>
      </div>
    );
  }
}