/* *************************
 * @author: FengYan
 * @update: 20180206
 * @description:我的订单
 * ************************/

/* ***********  基础组件  ************ */
import React, {Component} from 'react';

/* ***********  自定义组件  ************ */
export default class MyOrder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href={`//${this.props.buyer}/order-buyer-view/purchaserback/ordermanagement`} className="signName">我的订单</a>
    );
  }
}