import React from 'react';
import PropTypes from 'prop-types';
import RcCheckbox from 'rc-checkbox';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import RadioGroup from './group';
import RadioButton from './radioButton';

export default class Radio extends React.Component {
  static defaultProps = {
      prefixCls: 'jc-radio',
      type: 'radio',
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
      type: PropTypes.string,
      size: PropTypes.oneOf(['large', 'default', 'small']),
      id: PropTypes.string,

  }

  static contextTypes = {
      radioGroup: PropTypes.any,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState) ||
           !shallowEqual(this.context.radioGroup, nextContext.radioGroup);
  }

  rcCheckbox;

  focus() {
      this.rcCheckbox.focus();
  }

  blur() {
      this.rcCheckbox.blur();
  }

  saveCheckbox = (node) => {
      this.rcCheckbox = node;
  }

  render() {
      const { props, context } = this;
      const {
          prefixCls,
          className,
          children,
          style,
          ...restProps
      } = props;
      const { radioGroup } = context;
      const radioProps = { ...restProps };
      if (radioGroup) {
          radioProps.name = radioGroup.name;
          radioProps.onChange = radioGroup.onChange;
          radioProps.checked = props.value === radioGroup.value;
          radioProps.disabled = props.disabled || radioGroup.disabled;
      }
      const wrapperClassString = classNames(className, {
          [`${prefixCls}-wrapper`]: true,
          [`${prefixCls}-wrapper-checked`]: radioProps.checked,
          [`${prefixCls}-wrapper-disabled`]: radioProps.disabled,
      });

      return (
          <label
              className={wrapperClassString}
              style={style}
              onMouseEnter={props.onMouseEnter}
              onMouseLeave={props.onMouseLeave}
          >
              <RcCheckbox
                  {...radioProps}
                  prefixCls={prefixCls}
                  ref={this.saveCheckbox}
              />
              {children !== undefined ? <span>{children}</span> : null}
          </label>
      );
  }
}

Radio.propTypes = {
    Group: PropTypes.instanceOf(RadioGroup),
    Button: PropTypes.instanceOf(RadioButton)
};
