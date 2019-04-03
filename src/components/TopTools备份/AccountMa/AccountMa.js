/*
 * @author:      冯炎
 * @update:      20171201
 * @description: 账号管理下使用，查询公司信息，但不显示。用于控制“商城首页，用户名，购物车，我的订单，采购商中心，消息，logo”等按钮点击时如果没有注册公司刚弹出提示信息
 * */

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import '../CompanySelect/style/style.css';
import getCompanyList, {getCompanyListAction} from '../CompanySelect/redux/companyList_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();

@connect(
  state => (getCompanyList),
  dispatch => bindActionCreators({getCompanyListAction}, dispatch)
)
export default class AccountMa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedTitle: '请选择您要访问的公司',
    };
  }

  componentWillMount() {
    this.props.getCompanyListAction().then(rs => {
      if (rs.code == 0) {
        if (rs.data && rs.data.length > 0) {
          // 设置cookie
          this.companyIdCookie = cookie.get('companyId');
          // 根据接口返回数据渲染下拉列表
          this.isCompanyIdInCookie(rs.data);
        }
      } else {
        this.setState({selectedTitle: rs.msg});
      }
    });
  }

  /*
   * 判断cookie是否有companyId
   * */
  isCompanyIdInCookie(data) {
    // 如果cookie里有companyId，但当前登陆账号里没相同的companyId则将当前账号下的第1个companyId设置到cookie里
    // 刷新当前页面，重新发送带有新companyId的ajax请求
    if (this.companyIdCookie && JSON.stringify(data).indexOf(this.companyIdCookie) === -1 || !this.companyIdCookie) {
      cookie.set('companyId', data[0].companyId, '', this.props.doma);
    }
  }

  render() {
    return (
      <div className="f-dn">
        {/*账号管理下使用，查询公司信息，但不显示。用于控制“商城首页，用户名，购物车，我的订单，采购商中心，消息，logo”等按钮点击时如果没有注册公司刚弹出提示信息*/}
      </div>
    );
  }
}