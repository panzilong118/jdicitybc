/*
 * @author:      冯炎
 * @update:      20171201
 * @description: 采购商中心页面
 * */

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import './style/style.css';
import getCompanyList, {getCompanyListAction} from './redux/companyList_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();

@connect(
  state => (getCompanyList),
  dispatch => bindActionCreators({getCompanyListAction}, dispatch)
)
export default class CompanySelect extends Component {
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
          this.renderOptions(rs.data);
        } else {
          // 如果访问接口没有数据则跳转到添加公司引导页
          location.href = `//${this.props.buyerDomain}/user-buyer-view/accountmanage/addcompany?type=1`;
        }
      } else {
        this.setState({selectedTitle: rs.msg});
      }
    });
  }

  /*
   * 下拉列表触发事件
   * */

  onSelectChange({companyId}) {
    // 设置cookie
    cookie.set('companyId', companyId, '', this.props.doma);
    location.reload();  // 刷新当前页面
  }

  /*
   * 判断cookie是否有companyId
   * */
  isCompanyIdInCookie(data) {
    // 如果cookie里有companyId，但当前登陆账号里没相同的companyId则将当前账号下的第1个companyId设置到cookie里
    // 刷新当前页面，重新发送带有新companyId的ajax请求
    if (this.companyIdCookie && JSON.stringify(data).indexOf(this.companyIdCookie) === -1 || !this.companyIdCookie) {
      cookie.set('companyId', data[0].companyId, '', this.props.doma);
      window.location.reload();  // 刷新当前页面
    }
  }

  /*
   * 渲染公司下拉列表
   * */
  renderOptions(data) {
    const options = [];
    // 判断cookie中是否存在companyId
    this.isCompanyIdInCookie(data);
    data.map(_item => {
      // 如果有cookie里有companyId则将店铺列表里与companyId相同的数据设置为默认
      if (this.companyIdCookie && _item.companyId == this.companyIdCookie) {
        this.setState({selectedTitle: _item.companyName});
      }
      // 生成店铺下拉列表
      options.push(
        <li title={_item.companyName} className={this.companyIdCookie == _item.companyId && 'active'}
            key={_item.companyId}>
          <a
            href="javascript:void(0)"
            onClick={() => this.onSelectChange({companyId: _item.companyId})}
          >
            {_item.companyName}
          </a>
        </li>
      );
    });
    this.setState({options: options});
  }

  render() {
    return (
      <div className="downMenu company">
        <a>
          <p className="f-pre" title={this.state.selectedTitle}>{this.state.selectedTitle}</p>
          <Icon type="down ml5" className="trans180"/>
        </a>
        {this.state.options.length > 0 && (
          <ul>
            {this.state.options}
          </ul>
        )}
      </div>
    );
  }
}