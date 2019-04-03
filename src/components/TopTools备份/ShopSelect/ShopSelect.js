/*
 * @author:      冯炎
 * @update:      20171213
 * @description: 卖家(第三方商家+自营供应商)中心所有的页面
 * */

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import './style/style.css';
import getShopList, {getShopListAction} from './redux/shopList_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();

@connect(
  state => (getShopList),
  dispatch => bindActionCreators({getShopListAction}, dispatch)
)
export default class CompanySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedTitle: '请选择您要访问的店铺',
    };
  }

  componentWillMount() {
    this.props.getShopListAction().then(rs => {
      if (rs.code == 0) {
        if (rs.data && rs.data.length > 0) {
          // 设置cookie
          this.shopId = cookie.get('shopId');
          // 根据接口返回数据渲染下拉列表
          this.renderOptions(rs.data);
        } else {
          // 如果访问接口没有数据则跳转到入驻引导页
          location.href = `//${this.props.shopDomain}/user-shop-view/sellerinfo/defaultshophome`;
        }
      } else {
        this.setState({selectedTitle: rs.msg});
      }
    });
  }

  /*
   * 下拉列表触发事件
   * */

  onSelectChange({shopId, companyId, shopType}) {
    // 设置cookie
    cookie.set('shopId', shopId, '', this.props.doma);
    cookie.set('companyId', companyId, '', this.props.doma);
    cookie.set('shopType', shopType, '', this.props.doma);
    location.href = `//${this.props.shopDomain}/user-shop-view/shopdefaultmenu`;
    // location.reload();  // 刷新当前页面
  }

  /*
   * 判断cookie是否有companyId
   * */
  isCompanyIdInCookie(data) {
    // 如果cookie里有companyId，但当前登陆账号里没相同的companyId则将当前账号下的第1个companyId设置到cookie里
    // 刷新当前页面，重新发送带有新companyId的ajax请求
    if (this.shopId && JSON.stringify(data).indexOf(this.shopId) === -1 || !this.shopId) {
      cookie.set('shopId', data[0].shopId, '', this.props.doma);
      cookie.set('companyId', data[0].companyId, '', this.props.doma);
      cookie.set('shopType', data[0].shopType, '', this.props.doma);
      location.href = `//${this.props.shopDomain}/user-shop-view/shopdefaultmenu`;
      // location.reload();  // 刷新当前页面
    }
  }

  /*
   * 渲染店铺下拉列表
   * */
  renderOptions(data) {
    const options = [];
    // 判断cookie中是否存在companyId
    this.isCompanyIdInCookie(data);
    data.map((_item) => {
      // 如果有cookie里有companyId则将店铺列表里与companyId相同的数据设置为默认
      if (this.shopId && _item.shopId == this.shopId) {
        this.setState({selectedTitle: `${_item.companyName}-${_item.shopName || '自营供应商店铺'}`});
      }
      // 生成店铺下拉列表
      options.push(
        <li title={`${_item.companyName}-${_item.shopName || '自营供应商店铺'}`}
            className={this.shopId == _item.shopId && 'active'}
            key={_item.shopId}>
          <a
            href="javascript:void(0)"
            onClick={() => this.onSelectChange({
              shopId: _item.shopId,
              companyId: _item.companyId,
              shopType: _item.shopType
            })}
          >
            {`${_item.companyName}-${_item.shopName || '自营供应商店铺'}`}
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