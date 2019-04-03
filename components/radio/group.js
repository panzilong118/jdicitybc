import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shallowEqual from 'shallowequal';
import Radio from './radio';

function getCheckedValue(children) {
    let value = null;
    let matched = false;
    React.Children.forEach(children, (radio) => {
        if (radio && radio.props && radio.props.checked) {
            const valueAssist = radio.props.value;
            value = valueAssist;
            matched = true;
        }
    });
    return matched ? { value } : undefined;
}

export default class RadioGroup extends React.Component {
    static defaultProps = {
        disabled: false,
    };

    static propTypes = {
        defaultValue: PropTypes.any,
        value: PropTypes.any,
        onChange: PropTypes.func,
        // size: PropTypes.oneOf(['large', 'default', 'small']),
        // onMouseEnter: React.MouseEventHandler,
        // onMouseLeave: React.MouseEventHandler,
        name: PropTypes.string,
        children: PropTypes.node,
        // id: PropTypes.string,
        disabled: PropTypes.bool,
    };

  static childContextTypes = {
      radioGroup: PropTypes.any,
  };

  constructor(props) {
      super(props);
      let value;
      if ('value' in props) {
          const valueAssistSecord = props.value;
          value = valueAssistSecord;
      } else if ('defaultValue' in props) {
          value = props.defaultValue;
      } else {
          const checkedValue = getCheckedValue(props.children);
          value = checkedValue && checkedValue.value;
      }
      this.state = {
          value,
      };
  }

  getChildContext() {
      return {
          radioGroup: {
              onChange: this.onRadioChange,
              value: this.state.value,
              disabled: this.props.disabled,
              name: this.props.name,
          },
      };
  }

  componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
          this.setState({
              value: nextProps.value,
          });
      } else {
          const checkedValue = getCheckedValue(nextProps.children);
          if (checkedValue) {
              this.setState({
                  value: checkedValue.value,
              });
          }
      }
  }

  shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);
  }

  onRadioChange = (ev) => {
      const lastValue = this.state.value;
      const { value } = ev.target;
      if (!('value' in this.props)) {
          this.setState({
              value,
          });
      }

      const { onChange } = this.props;
      if (onChange && value !== lastValue) {
          onChange(ev);
      }
  }
  render() {
      const { props } = this;
      const { options, size } = props;
      const prefixCls = props.prefixCls || 'jc-radio-group';
      const className = props.prefixCls || '';
      const classString = classNames(prefixCls, {
          [`${prefixCls}-${size}`]: size,
      }, className);

      let { children } = props;

      // 如果存在 options, 优先使用
      if (options && options.length > 0) {
          children = options.map((option) => {
              if (typeof option === 'string') { // 此处类型自动推导为 string
                  return (
                      <Radio
                          key={option.value} // key值原取为{index},ESLint校验key值不可以为index
                          disabled={this.props.disabled}
                          value={option}
                          onChange={this.onRadioChange}
                          checked={this.state.value === option}
                      >
                          {option}
                      </Radio>
                  );
              } // 此处类型自动推导为 { label: string value: string }
              return (
                  <Radio
                      key={option.value}
                      disabled={option.disabled || this.props.disabled}
                      value={option.value}
                      onChange={this.onRadioChange}
                      checked={this.state.value === option.value}
                  >
                      {option.label}
                  </Radio>
              );
          });
      }

      return (
          <div
              className={classString}
              style={props.style}
              onMouseEnter={props.onMouseEnter}
              onMouseLeave={props.onMouseLeave}
              id={props.id}
          >
              {children}
          </div>
      );
  }
}

