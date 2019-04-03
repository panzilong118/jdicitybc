/*
 * author:chenqi
 * date:2017-09-06
 * description:table列表页面 商品信息展示。只涉及商品图片 商品名称 销售属性展示。
 * params:所需参数：itemInfo(包含：itemId、itemName、pictureUrl、attributes)、mainDomain(用于跳转商品详情页，所需要的域名。不在此组件中查询，考虑不少列表页已经获取该域名。)
 */
import React, { Component } from 'react';
import './style/style.css';

export default class TableItemInfo extends Component {
  constructor(props,context) {
    super(props,context);
  }


  render() {
    const itemInfo = this.props.itemInfo;
    const mainDomain = this.props.mainDomain;
    return (
      <div className="table-item-info">
        <a href={`//${mainDomain}/search-website-view/item/${itemInfo.itemId}`} target="_blank" className="text-link">
          <img src={itemInfo.pictureUrl} className='item-img'/>
        </a>
        <div className="item-info">
          <a href={`//${mainDomain}/search-website-view/item/${itemInfo.itemId}`} target="_blank" className="text-link">
            <p className="item-name" title={itemInfo.itemName}>{itemInfo.itemName}</p>
          </a>
          <br/>
          <p className="text-333">{itemInfo.attributes}</p>
        </div>
      </div>
    );
  }
}
