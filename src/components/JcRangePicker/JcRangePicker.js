 /**********引入系统组件***********/
 import React, { Component } from 'react';
 import {DatePicker} from "jdcloudui";
 import moment from 'moment';

 /**
 * @author RongXiaowei
 * @param value             传入的value值         type:[object Object] ({startTime，endTime})  默认为null
 * @param space             间隔符                type:[object String] 默认 "至"
 * @param className         className            type:[object String] 默认为不加
 * @param format            格式化时间            type:[object String] 默认 "YYYY-MM-DD"
 * @date 2017-12-13
 * @description RangePicker 开始结束时间组件
 */

 export default  class JcRangePicker extends Component{
    constructor(props,context){
        super(props,context)
        this.state={
            startTime:(this.props.value&&this.props.value.startTime)||null,
            endTime:(this.props.value&&this.props.value.endTime)||null,
            endOpen:false
        }
        //初始值
        this.initValue=JSON.parse(JSON.stringify(this.props.value));
        this.StateTime=JSON.parse(JSON.stringify(this.props.value))||{};
    }
    componentWillReceiveProps(nexProps){
      if(!nexProps.value&&(this.state.startTime||this.state.endTime)||nexProps.value&&JSON.stringify(nexProps.value)===JSON.stringify(this.initValue)){
        //传入的值为空时清空数据
        if(!nexProps.value){
          this.setState({"startTime":null,"endTime":null});
        }
        else{
          this.setState({"startTime":this.initValue.startTime,"endTime":this.initValue.endTime});
        }
      }
    }
    /**
     * @description 判断起始时间是否大于结束时间
     */
     disabledStartDate = (startValue) => {
        const endValue = this.state.endTime?moment(this.state.endTime):null;
        if (!startValue || !endValue) {
          return false;
        }
        return startValue.valueOf() > endValue.valueOf();
      }
    /**
     * @description 判断结束时间是否大于起始时间
     */
      disabledEndDate = (endValue) => {
        const startValue = this.state.startTime?moment(this.state.startTime):null;
        if (!endValue || !startValue) {
          return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
      }
     /**
     * @description 起始时间赋值
     */
      onStartChange = (value) => {
        this.setState({"startTime":value});
        this.StateTime['startTime']=value?moment(value).format(this.props.format||"YYYY-MM-DD"):null;
        this.props.onChange(this.StateTime);
      }
     /**
     * @description 结束时间赋值
     */
      onEndChange = (value) => {
        this.setState({"endTime":value});
        this.StateTime['endTime']=value?moment(value).format(this.props.format||"YYYY-MM-DD"):null;
        this.props.onChange(this.StateTime);
      }
     /**
     * @description 开启禁止标志
     */
      handleStartOpenChange = (open) => {
        if (!open) {
          this.setState({endOpen: true});
        }
      }
      /**
     * @description 关闭禁止标志
     */
      handleEndOpenChange = (open) => {
        this.setState({endOpen: open});
      }

    render(){
        return (
          <div className={this.props.className||""}>
            <DatePicker
                size="large"
                disabledDate={this.disabledStartDate}
                format={this.props.format||"YYYY-MM-DD"}
                placeholder="开始时间"
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
                value={this.state.startTime?moment(this.state.startTime, this.props.format||"YYYY-MM-DD"):null}
            />
            &nbsp;&nbsp;<span className="date-picker-space">{this.props.space||"至"}</span>&nbsp;&nbsp;
            <DatePicker
                size="large"
                disabledDate={this.disabledEndDate}
                format={this.props.format||"YYYY-MM-DD"}
                placeholder="结束时间"
                onChange={this.onEndChange}
                open={this.state.endOpen}
                onOpenChange={this.handleEndOpenChange}
                value={this.state.endTime?moment(this.state.endTime, this.props.format||"YYYY-MM-DD"):null}
            />
        </div>
        )
    }
}