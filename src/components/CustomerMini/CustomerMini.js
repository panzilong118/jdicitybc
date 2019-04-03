/**
 * Created by huangxiao3 on 2017/6/12.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
const customer = require('./hnc_online3.png');
import './styles/styles.css';
export default class CustomerMini extends Component {
  constructor(props, context) {
    super(props, context);
  }
  handleCreateShangQiao(){
    let defaultUrl = 'http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973';
    var iWidth=580;
    var iHeight=510;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    let sqUrl = this.props.SqCode?this.props.SqCode:defaultUrl;
    window.open (defaultUrl, "shangqiao", `height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=${iTop},left=${iLeft}`);
  }
  render() {
    return(
      <div className="main" onClick={()=>this.handleCreateShangQiao()}>
        <img src={customer} className="img"/>
        <div className="custext">
          在线客服
        </div>
      </div>
    )
  }
}