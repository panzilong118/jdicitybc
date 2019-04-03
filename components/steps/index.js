/**
 * Created by gaoqingli on 2018/04/12.
 */
import * as React from 'react';

import PropTypes from 'prop-types';

import RcSteps from 'rc-steps';

export default class Steps extends React.Component {
  static Step = RcSteps.Step;

  static defaultProps = {
      prefixCls: 'jc-steps',
      iconPrefix: 'jc',
      current: 0,
  };

  static propTypes = {
      prefixCls: PropTypes.string,
      iconPrefix: PropTypes.string,
      current: PropTypes.number,
  };

  render() {
      return (
          <RcSteps {...this.props} />
      );
  }
}
