/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:店铺信息
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/* ***********  自定义组件  ************ */
import getShopList, {getShopListAction} from './shopList_redux';
import Cookies from '../../../common/Cookies';
const cookie = new Cookies();
/* ***********  redux  ************ */
@connect(
  state => (getShopList),
  dispatch => bindActionCreators({getShopListAction}, dispatch)
)
export default class ShopInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopArr: [],
      shopName: '请选择'
    };
  }

  /*
   * 发送获取店铺列表请求
   * 判断cookie中是否有shopId，如果没有则调用defaultShopId方法设置
   * 如果公司列表为空则跳转到注册公司引导页
   * */
  componentWillMount() {
    this.props.getShopListAction().then(rs => {
      if (rs.code != 0) return;

      if (rs.data.length === 0) {
        location.href = `//${this.props.shop}/user-shop-view/sellerinfo/defaultshophome`;
      } else if (!cookie.get('shopId')) {
        this.defaultShopId(rs.data[0]);
      } else {
        rs.data.map(_item => {
          if (_item.shopId == cookie.get('shopId')) {
            const shopName = `${_item.companyName}-${_item.shopName || '未命名'}`;
            this.setState({shopName: shopName});
          }
        });
        this.setState({shopArr: rs.data});
      }
    });
  }

  /*
   * 通过onclick事件添加shopId到cookie中
   * */
  setShopId({shopId, companyId, shopType}) {
    cookie.set('shopId', shopId, '', this.props.defaultDomain);
    cookie.set('companyId', companyId, '', this.props.defaultDomain);
    cookie.set('shopType', shopType, '', this.props.defaultDomain);
  }

  /*
   * 设置默认cookie
   * 跳转到获取菜单中间页
   * */
  defaultShopId({shopId, companyId, shopType}) {
    cookie.set('shopId', shopId, '', this.props.defaultDomain);
    cookie.set('companyId', companyId, '', this.props.defaultDomain);
    cookie.set('shopType', shopType, '', this.props.defaultDomain);
    if (this.props.disabled) {
      location.href = `//${this.props.shop}/user-shop-view/shopdefaultmenu`;
    }
  }

  /*
   * 渲染店铺列表
   * */
  renderOptions() {
    const shopArr = [];
    this.state.shopArr.map(_item => {
      shopArr.push(
        <li key={_item.shopId}>
          <a
            onClick={() => this.setShopId(_item)}
            href={`//${this.props.shop}/user-shop-view/shopdefaultmenu`}
            className={cookie.get('shopId') == _item.shopId ? 'active' : ''}
            title={`${_item.companyName}-${_item.shopName || '未命名'}`}
          >
            {`${_item.companyName}-${_item.shopName || '未命名'}`}
          </a>
        </li>
      );
    });
    return shopArr;
  }

  render() {
    return (
      <div className="down-menu f-ib deg180">
        <a>{this.state.shopName}<Icon type="down" className="ml5 arrows"/></a>
        <ul className="down-menu-cont select width380">
          {this.renderOptions()}
        </ul>
      </div>
    );
  }
}