/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:进货车
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';
import {Icon} from 'jdcloudui';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/* ***********  自定义组件  ************ */
import getShoppingCartCount, {getShoppingCartCountAction} from './shoppingCart_redux';
/* ***********  redux  ************ */
@connect(
  state => (getShoppingCartCount),
  dispatch => bindActionCreators({getShoppingCartCountAction}, dispatch)
)
export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0
    };
  }

  /*
   * 发送获取购物车数据请求
   * */
  componentWillMount() {
    this.props.getShoppingCartCountAction().then(rs => {
      if (rs.code != 0)return;
      this.setState({cartCount: rs.data});
    });
  }

  render() {
    return (
      <a href={`//${this.props.defaultDomain}/website-view/cart`} className="signName f-pr">
        <Icon type="shopping-cart" className="f-fs18 shopping-cart"/>
        {
          this.state.cartCount > 0 && (
            <span className="badge">{this.state.cartCount > '99' ? '99' : this.state.cartCount}</span>
          )
        }
      </a>
    );
  }
}