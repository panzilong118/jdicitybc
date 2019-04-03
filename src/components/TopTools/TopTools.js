/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:采购部、供应商、店铺顶端菜单
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Row, Col, Icon, Modal} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/* ***********  自定义组件  ************ */
import ChooseLocal from './ChooseLocal/ChooseLocal';
import UserInfo from './UserInfo/UserInfo';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import ShopInfo from './ShopInfo/ShopInfo';
import MyMall from './MyMall/MyMall';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import MyOrder from './MyOrder/MyOrder';
import MyMessage from './MyMessage/MyMessage';
import MobileMall from './MobileMall/MobileMall';
import IndexLinkBtn from './IndexLinkBtn/IndexLinkBtn';
import getUrl, {getUrlAction} from './redux/getUrl_redux';
import './styles/toptools.less';
import CompanyLayer from './CompanyLayer/CompanyLayer';
const company = new CompanyLayer();

/* ***********  redux  ************ */
@connect(
  state => (getUrl),
  dispatch => bindActionCreators({getUrlAction}, dispatch)
)
export default class TopTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: '',
      buyer: '',
      platform: '',
      defaultDomain: ''
    };
  }

  /*
   * 发送获取域名请求
   * */
  componentWillMount() {
    this.props.getUrlAction().then(rs => {
      if (rs.code != 0) return;
      const domain = {};
      rs.data.map(_item => {
        if (_item.domainType == 3) domain.shop = _item.domain;
        if (_item.domainType == 2) domain.buyer = _item.domain;
        if (_item.domainType == 5) domain.platform = _item.domain;
        if (_item.domainType == 1) domain.defaultDomain = _item.domain;
      });
      this.setState({...domain});
    });
  }

  /*
   * 消息中心url生成判断
   * 根据域名buyer或者shop生成对应的消息中心url
   * */
  getMessageDomain() {
    if (typeof window !== 'undefined') {
      const urlPath = window.location.href;
      if (urlPath.indexOf('buyer.') !== -1) {
        return this.state.buyer;
      }
      return this.state.shop;
    }
  }

  /*
   * 判断是否显示店铺列表或者公司列表
   * */
  isBuyer() {
    if (typeof window === 'undefined') return;
    const urlPath = window.location.href;
    if (urlPath.indexOf('buyer.') !== -1 || urlPath.indexOf('passport.') !== -1) {
      return true;
    }
    return false;
  }

  /*
   * 判断是否显示店铺列表、公司列表
   * */
  isCompanyShopShow() {
    if (typeof window === 'undefined') return;
    const urlPath = window.location.href;
    if (urlPath.indexOf('sellerinfo/') !== -1 || urlPath.indexOf('accountmanage/') !== -1) {
      return false;
    }
    return true;
  }


  render() {
    company.isCompanyId();
    return (
      <div className="top-tools-wrap">
        <div className="top-tools-container f-cb">
          <div className="f-fl">
            {/*  选择收货地  */}
            <ChooseLocal defaultDomain={this.state.defaultDomain}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  用户信息  */}
            <UserInfo buyer={this.state.buyer}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  公司/店铺选择  */}
            {
              this.isCompanyShopShow() ?
                this.isBuyer() ? (
                  <CompanyInfo defaultDomain={this.state.defaultDomain} buyer={this.state.buyer}/>
                ) : (
                  <ShopInfo defaultDomain={this.state.defaultDomain} shop={this.state.shop}/>
                ) : ''
            }
          </div>
          <div className="f-fr">
            {/*  首页按钮  */}
            <IndexLinkBtn defaultDomain={this.state.defaultDomain}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  我的商城  */}
            <MyMall buyer={this.state.buyer} shop={this.state.shop}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  进货车  */}
            <ShoppingCart defaultDomain={this.state.defaultDomain}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  我的订单  */}
            <MyOrder buyer={this.state.buyer}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  消息  */}
            <MyMessage domain={this.getMessageDomain()}/>
            {/*  分隔线  */}
            <span className="vertical bg-666"/>
            {/*  手机商城  */}
            <MobileMall/>
          </div>
        </div>
      </div>
    );
  }
}
