import React from 'react';
import PropTypes from 'prop-types';
import Radio from './radio';


export default class RadioButton extends React.Component {
  static defaultProps = {
      prefixCls: 'jc-radio-button',
  };

  static propTypes = {
      checked: PropTypes.bool,
      prefixCls: PropTypes.string,
      className: PropTypes.string,
      defaultChecked: PropTypes.bool,
      style: {},
      disabled: PropTypes.bool,
      onChange: () => {},
      onMouseEnter: React.MouseEventHandler,
      onMouseLeave: React.MouseEventHandler,
      onKeyPress: React.KeyboardEventHandler,
      onKeyDown: React.KeyboardEventHandler,
      value: PropTypes.any,
      tabIndex: PropTypes.number,
      name: PropTypes.string,
      children: PropTypes.node,
      size: PropTypes.oneOf(['large', 'default', 'small']),
      id: PropTypes.string,

  }

  static contextTypes = {
      radioGroup: PropTypes.any,
  };

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
      const radioProps = { ...this.props };
      if (this.context.radioGroup) {
          radioProps.onChange = this.context.radioGroup.onChange;
          radioProps.checked = this.props.value === this.context.radioGroup.value;
          radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
      }

      return (
          <Radio {...radioProps} />
      );
  }
}
