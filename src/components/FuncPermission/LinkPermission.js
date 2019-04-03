/**
 * Created by songshuangwang on 2017/6/30.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {message} from 'jdcloudui';

export default class LinkPermission extends Component {

  constructor(props,context) {
    super(props,context);
  }

  handleClick(){
    message.warning('抱歉！您无相关权限');
  }
  render(){
    let codes = this.props.codes;
    let curCode = this.props.code;
    let result = <a onClick={()=>this.handleClick()}>{this.props.value}</a>;
    if(codes && codes.length > 0){
      for(let resource of codes){
        if(curCode === resource){
          result =  this.props.children;
        }
      }
    }
    return(
      <span>{result}</span>
    );
  }

}