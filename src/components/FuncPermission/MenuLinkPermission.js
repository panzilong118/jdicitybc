/**
 * Created by chenyanhua on 2017/08/11.
 */


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {message} from 'jdcloudui';

export default class MenuLinkPermission extends Component {

  constructor(props,context) {
    super(props,context);
  }

  handleClick(){
    message.warning('抱歉！您无相关权限');
  }
  render(){
    let result = this.props.result;
    let html = <a onClick={()=>this.handleClick()}>{this.props.value}</a>;
    if(result){
        if(result.isPrimary){ //主账号
            html = this.props.children;
        } else { //子账号
            let urls = result.urls;
            let curUrl = this.props.curUrl;
            if(urls && urls.length > 0){
                for(let itemUrl of urls){
                    if(curUrl === itemUrl){
                        html = this.props.children;
                    }
                }
            }
        }
    }

    return(
      <span>{html}</span>
    );
  }

}