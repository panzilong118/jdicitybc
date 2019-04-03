
 /**********引入系统组件***********/
 import React, { Component } from 'react';
 import {Row,Col} from "jdcloudui";
 import "../GridView/style/GridView.css";

 /**
 * @author RongXiaowei
 * @param className 可以不写
 * @date 2017-12-11
 * @description GridViewLayout
 */

 export  class GridViewLayout extends Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (
            <div className={`gird-view-layout ${this.props.className||''}`}>
                {this.props.children}
            </div>
        )
    }
}

/**
 * @author RongXiaowei
 * @param dataSource :[{render,span,className}]
 * @param rowStyle :rowEven||rowOdd 隔行变色 {偶数||奇数} 默认奇数
 * @date 2017-12-11
 * @description GridView
 */

export class GridView extends Component{
    constructor(props,context){
        super(props,context)
    }
    /**
     * @param fun
     * @return Boolean
     */
    isFunction=(fun)=>{
        return Object.prototype.toString.call(fun)=='[object Function]'
    }
    render(){
        const span=(this.props.dataSource&&this.props.dataSource.length>0)?24/this.props.dataSource.length:24;
        return (
        <Row className={`gird-view ${"rowOdd"||this.props.rowStyle||this.props.className}`} {...this.props.row}>
            {
                this.props.dataSource?this.props.dataSource.map(item=>{
                    return  <Col key={Math.random()} span={item.span||span} className={`${!item.span?"gird-col-auto":""} ${item.className||""}`}>{this.isFunction(item.render)?item.render():item.render}</Col>
                }):<Col span={24}>暂时没有信息</Col>
            }
        </Row>
        )
    }
}