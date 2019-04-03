/**
 * @file 其他设置--餐厅直供
 */
import React, { Component } from 'react';
import { Radio } from 'jdcloudui';
import './style/index.css';

const RadioGroup = Radio.Group;

export default class OtherDirectSupply extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  handleSupplyChange=(e)=>{
    console.log('direct supply', e.target.value);
    let itemTmplPublishVo = JSON.parse(JSON.stringify(this.props.itemTmplPublishVo));
    itemTmplPublishVo.couponSupportVo.directSupplySupport = e.target.value;
    this.props.updateItemTmplAction(itemTmplPublishVo);
  }

  render() {
    return (
      <div> 
          <h3 className = 'h3-title'>餐厅直供</h3>
          <div>
            <div className = 'otherMt202 mlgroup'>
              <span className='smallColor smaillest'>是否支持直供:</span>
              <RadioGroup
                 value={this.props.itemTmplPublishVo.couponSupportVo?this.props.itemTmplPublishVo.couponSupportVo.directSupplySupport:null} 
                 onChange={this.handleSupplyChange}>
                <Radio  value={1}>支持</Radio>
                <Radio  value={0}>不支持</Radio>
              </RadioGroup>
            </div>
          </div>
      </div>
    );
  }
}
