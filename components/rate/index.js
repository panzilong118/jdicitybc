/**
 * Created by gaoqingli on 2018/4/16.
 */
import * as React from 'react';

import PropTypes from 'prop-types';

import RcRate from 'rc-rate';

import Icon from '../icon';


export default class Rate extends React.Component {
  static propTypes = {
      prefixCls: PropTypes.string,
      character: PropTypes.node,
  };

  static defaultProps = {
      prefixCls: 'jc-rate',
      character: <Icon type='star' />,
  };

  // static rcRate;

  constructor(props) {
      super(props);
      this.rcRate = undefined;
  }

  focus() {
      this.rcRate.focus();
  }

  blur() {
      this.rcRate.blur();
  }

  saveRate = (node) => {
      this.rcRate = node;
  }

  render() {
      return <RcRate ref={this.saveRate} {...this.props} />;
  }
}
