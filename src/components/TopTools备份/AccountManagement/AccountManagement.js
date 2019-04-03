/*
 * @author:       冯炎
 * @update:       20171201
 * @description:  用户账号管理，新窗口打开
 * */

/************  基础组件  *************/
import React, {Component} from 'react';

/************  自定义组件  *************/

export default class AccountManagement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={`//${this.props.buyerDomain}/user-buyer-view/accountmanage/accountInfo`} target="_blank">【账号管理】</a>
    );
  }
}
