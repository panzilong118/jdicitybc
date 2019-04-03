/**
 * Created by songshuangwang on 2017/7/8.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MoneyConvert extends Component {
  constructor(props,context) {
    super(props,context);
  }
  render(){
    let moneyValue = this.props.value;
    let result = moneyValue && moneyValue.toFixed(2);
    return(
      <span>{result}</span>
    );
  }
}