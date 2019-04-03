/**
 * Created by songshuangwang on 2017/6/30.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FuncPermission extends Component {

  constructor(props,context) {
    super(props,context);
  }
  render(){
    let codes = this.props.codes;
    let curCode = this.props.code;
    let result = null;
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