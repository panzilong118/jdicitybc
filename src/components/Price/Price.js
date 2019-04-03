/* *********************************************
* @author: liupeng
* @creatdDate: 20171207
* @update: 20171207
* @description: 价格组件
* *********************************************/
/* *********************************************
* 组件说明：
* @param  value    {Number}  传入要展示的数字                               默认 0.00
* @param  warning  {Boolean} 字体颜色是否为警告色                           默认 false
* @param  through  {Boolean} 数字是否划横线                                 默认 false
* @param  size     {String } 字体大小   middle 中等   large 偏大            默认 12px
* @param  signType {String } 判断正负号方式 coupon { > 0 为 - ; < 0 为 + }
                                            adjust { < 0 为 - ; > 0 为 + }  默认 绝对值
*
* *********************************************/
import React, { Component } from 'react';
//价格保留小数点后两位组件
import {MoneyConvert}  from 'jdcloudecc/components';

export default class Price extends Component {
  constructor(props,context) {
    super(props, context);

  };
  render() {

    const styles = {
        color: this.props.warning ? '#e4393c' : '#333'
    }
    const styles2 = {
        textDecoration: this.props.through ? 'line-through' : 'none',
    }
    return (
        <span style={{...styles}}>
          {this.props.signType == 'coupon' && this.props.value ? <span>{this.props.value > 0 ? '-' : '+'}</span> : ''}
          {this.props.signType == 'adjust' && this.props.value ? <span>{this.props.value < 0 ? '-' : '+'}</span> : ''}
          {!this.props.signType && this.props.value ? <span>{this.props.value < 0 ? '-' : ''}</span> : ''}
          <span>￥</span>
          {this.props.value
            ? <span style={{...styles2}}><MoneyConvert value={Math.abs(this.props.value)}/></span>
            : <span style={{...styles2}}>0.00</span>
          }
        </span>
    );
  }
}