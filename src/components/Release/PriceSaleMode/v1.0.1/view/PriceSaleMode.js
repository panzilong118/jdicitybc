/**
 * @file 发布商品-供货信息Tab组件
 *  
 *  2018.11.13更新版本：v1.0.1 增加询价商品价格描述功能 —— by 刘仁鹏
 */
import React, { Component } from 'react';
import {Radio, Input, Form, Tooltip, Icon } from 'jdcloudui';
import './style.css';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
@Form.create()
export default class ReleaseSupplyInfo extends Component {
  constructor(props){
    super(props);
  }

  radioChange=(e)=>{
    console.log(e.target.value)
    let itemTmplPublishVo = JSON.parse(JSON.stringify(this.props.itemTmplPublishVo));
    itemTmplPublishVo.itemPerfectVo.salePriceType = e.target.value;
    this.props.updateItemTmplAction(itemTmplPublishVo);
  }

  //询价商品价格描述
  handleChanegPriceDesc = (e)=>{
    var value = e.target.value;
    let itemTmplPublishVo = JSON.parse(JSON.stringify(this.props.itemTmplPublishVo));
    itemTmplPublishVo.itemPerfectVo.priceDescVo = {priceDesc : value};
    if(value.length<=50){ //限制最多50个字符
      this.props.updateItemTmplAction(itemTmplPublishVo);
    }
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const spuPriceDescTip = "spu商品的价格描述信息，将会展示在商品搜索列表页中原商品价格处";
    return (
      <div>
        <div className="rHeaderTtle"><h2>销售方式</h2></div>
        <div className='priceLeft'>
          <RadioGroup
            value={this.props.itemTmplPublishVo.itemPerfectVo.salePriceType||1}
            onChange={this.radioChange}>
            <Radio value={1}>正常销售</Radio>
            <Radio value={2}>询价模式</Radio>
          </RadioGroup>
          {this.props.itemTmplPublishVo.itemPerfectVo.salePriceType==2?
            <div className="priceDesc">
              <span>价格描述 <Tooltip placement="top" title={spuPriceDescTip}><Icon style={{opacity:"0.5"}} type="question-circle" /></Tooltip>：</span>
              <Input  onChange = {this.handleChanegPriceDesc}
                      value = {this.props.itemTmplPublishVo.itemPerfectVo.priceDescVo && this.props.itemTmplPublishVo.itemPerfectVo.priceDescVo.priceDesc || ''}
              />
            </div>
          :null}
        </div>
      </div>
    );
  }
}
