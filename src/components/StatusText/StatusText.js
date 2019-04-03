 /**********引入系统组件***********/
 import React, { Component } from 'react';
 import {Tooltip,Icon} from "jdcloudui";
 /**********引入样式***********/
 import   "./style/StatusText.css";

 /**
 * @author RongXiaowei
 * @param className        组件的样式名     type:[object String]   默认为空
 * @param status           展示的状态       type:[object String]   {error||success||info||warn}  默认 info
 * @param text             显示的文字       type:[object String]    
 * @param iconType         icon图标        type:[object String]   默认 'question-circle'
 * @param overlayClassName 提示的样式名     type:[object String]   默认为空
 * @param tooltipContent   提示内容         type:[object String]
 * @param placement        提示的位置       type:[object String]  "top|left|right|bottom|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom" 默认 top
 * @date 2017-12-13
 * @description StatusText 状态信息组件
 */

 export default  class StatusText extends Component{
    constructor(props,context){
        super(props,context)
    }
    /**
     * @param status   展示的状态      type:[object String]   {error||success||info||warn}  默认 info
     * @param text     显示的文字      type:[object String]
     * @description  输出文字组件
     */
    renderText=(status,text)=>{
        switch (status) {
            case "error":
                return <span className='text-error'>{text||""}</span>
            case "success":
                return <span className='text-success'>{text||""}</span>
            case "warn":
                return <span className='text-warning'>{text||""}</span>
            case "info":
                return <span className='text-disabled'>{text||""}</span>                                         
            default:
                return <span className='text-disabled'>{text||""}</span>
        }
    }
    render(){
        return (
            <div className={`${this.props.className||""}`}>
              {this.renderText(this.props.status,this.props.text)}
              {
                  this.props.tooltipContent&&
                  <span className="status-text-icon">
                        <Tooltip placement={this.props.placement||"top"} title={this.props.tooltipContent} overlayClassName={`status-text-tooltip ${this.props.overlayClassName||""}`}>
                            <Icon type={`${this.props.iconType||"question-circle"}`} />
                        </Tooltip>
                  </span>
            
            
            }
            </div>
        )
    }
}