/**
 * Created by gaoqingli on 2018/4/24.
 */
import * as React from 'react';

import RcCascader from 'rc-cascader';

import arrayTreeFilter from 'array-tree-filter';

import classNames from 'classnames';

import omit from 'omit.js';

import KeyCode from 'rc-util/lib/KeyCode';

import Input from '../input';

import Icon from '../icon';


function highlightKeyword(str, keyword, prefixCls) {
    return str.split(keyword)
        .map((node, index) => {
            return index === 0 ? node : [
                <span className={`${prefixCls}-menu-item-keyword`} key='seperator'>{keyword}</span>,
                node,
            ];
        });
}

function defaultFilterOption(inputValue, path) {
    return path.some(option => (option.label).indexOf(inputValue) > -1);
}

function defaultRenderFilteredOption(inputValue, path, prefixCls) {
    return path.map(({ label }, index) => {
        const node = (label).indexOf(inputValue) > -1 ?
            highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
    });
}

function defaultSortFilteredOption(a, b, inputValue) {
    function callback(elem) {
        return (elem.label).indexOf(inputValue) > -1;
    }
    return a.findIndex(callback) - b.findIndex(callback);
}

const defaultDisplayRender = (label) => { return label.join(' / '); };

export default class Cascader extends React.Component {
  static defaultProps = {
      prefixCls: 'jc-cascader',
      inputPrefixCls: 'jc-input',
      placeholder: 'Please select',
      transitionName: 'slide-up',
      popupPlacement: 'bottomLeft',
      options: [],
      disabled: false,
      allowClear: true,
      notFoundContent: 'Not Found',
  };


  constructor(props) {
      super(props);
      this.state = {
          value: props.value || props.defaultValue || [],
          inputValue: '',
          inputFocused: false,
          popupVisible: props.popupVisible,
          flattenOptions: props.showSearch && this.flattenTree(props.options, props.changeOnSelect),
      };
      this.cachedOptions = undefined;
      this.input = undefined;
  }

  componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
          this.setState({ value: nextProps.value || [] });
      }
      if ('popupVisible' in nextProps) {
          this.setState({ popupVisible: nextProps.popupVisible });
      }
      if (nextProps.showSearch && this.props.options !== nextProps.options) {
          this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
      }
  }

  handleChange = (value, selectedOptions) => {
      this.setState({ inputValue: '' });
      if (selectedOptions[0].__IS_FILTERED_OPTION) {
          const unwrappedValue = value[0];
          const unwrappedSelectedOptions = selectedOptions[0].path;
          this.setValue(unwrappedValue, unwrappedSelectedOptions);
          return;
      }
      this.setValue(value, selectedOptions);
  }

  handlePopupVisibleChange = (popupVisible) => {
      if (!('popupVisible' in this.props)) {
          this.setState({
              popupVisible,
              inputFocused: popupVisible,
              inputValue: popupVisible ? this.state.inputValue : '',
          });
      }

      const { onPopupVisibleChange } = this.props;
      if (onPopupVisibleChange) {
          onPopupVisibleChange(popupVisible);
      }
  }

  handleInputBlur = () => {
      this.setState({
          inputFocused: false,
      });
  }

  handleInputClick = (e) => {
      const { inputFocused, popupVisible } = this.state;
      // Prevent `Trigger` behaviour.
      if (inputFocused || popupVisible) {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
      }
  }

  handleKeyDown = (e) => {
      if (e.keyCode === KeyCode.BACKSPACE) {
          e.stopPropagation();
      }
  }

  handleInputChange = (e) => {
      const inputValue = e.target.value;
      this.setState({ inputValue });
  }

  setValue = (value, selectedOptions = []) => {
      if (!('value' in this.props)) {
          this.setState({ value });
      }
      const { onChange } = this.props;
      if (onChange) {
          onChange(value, selectedOptions);
      }
  }

  getLabel() {
      const { options, displayRender = defaultDisplayRender } = this.props;
      const { value } = this.state;
      const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
      const selectedOptions = arrayTreeFilter(options, (o, level) => { return o.value === unwrappedValue[level]; });
      const label = selectedOptions.map((o) => { return o.label; });
      return displayRender(label, selectedOptions);
  }

  clearSelection = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.state.inputValue) {
          this.setValue([]);
          this.handlePopupVisibleChange(false);
      } else {
          this.setState({ inputValue: '' });
      }
  }

  flattenTree(options, changeOnSelect, ancestor = []) {
      let flattenOptions = [];
      options.forEach((option) => {
          const path = ancestor.concat(option);
          if (changeOnSelect || !option.children || !option.children.length) {
              flattenOptions.push(path);
          }
          if (option.children) {
              flattenOptions = flattenOptions.concat(this.flattenTree(option.children, changeOnSelect, path));
          }
      });
      return flattenOptions;
  }

  generateFilteredOptions(prefixCls) {
      const { showSearch, notFoundContent } = this.props;
      const {
          filter = defaultFilterOption,
          render = defaultRenderFilteredOption,
          sort = defaultSortFilteredOption,
      } = showSearch;
      const { flattenOptions, inputValue } = this.state;
      const filtered = flattenOptions.filter((path) => { return filter(this.state.inputValue, path); })
          .sort((a, b) => sort(a, b, inputValue));

      if (filtered.length > 0) {
          return filtered.map((path) => {
              return {
                  __IS_FILTERED_OPTION: true,
                  path,
                  label: render(inputValue, path, prefixCls),
                  value: path.map((o) => { return o.value; }),
                  disabled: path.some((o) => { return o.disabled; }),
              };
          });
      }
      return [{ label: notFoundContent, value: 'JC_CASCADER_NOT_FOUND', disabled: true }];
  }

  focus() {
      this.input.focus();
  }

  blur() {
      this.input.blur();
  }

  saveInput = (node) => {
      this.input = node;
  }

  render() {
      const { props, state } = this;
      const {
          prefixCls, inputPrefixCls, children, placeholder, size, disabled,
          className, style, allowClear, showSearch = false, ...otherProps
      } = props;
      const { value } = state;

      const sizeCls = classNames({
          [`${inputPrefixCls}-lg`]: size === 'large',
          [`${inputPrefixCls}-sm`]: size === 'small',
      });
      const clearIcon = (allowClear && !disabled && value.length > 0) || state.inputValue ? (
          <Icon
              type='cross-circle'
              className={`${prefixCls}-picker-clear`}
              onClick={this.clearSelection}
          />
      ) : null;
      const arrowCls = classNames({
          [`${prefixCls}-picker-arrow`]: true,
          [`${prefixCls}-picker-arrow-expand`]: state.popupVisible,
      });
      const pickerCls = classNames(className, `${prefixCls}-picker`, {
          [`${prefixCls}-picker-with-value`]: state.inputValue,
          [`${prefixCls}-picker-disabled`]: disabled,
          [`${prefixCls}-picker-${size}`]: !!size,
      });

      // Fix bug of https://github.com/facebook/react/pull/5004
      // and https://fb.me/react-unknown-prop
      const inputProps = omit(otherProps, [
          'onChange',
          'options',
          'popupPlacement',
          'transitionName',
          'displayRender',
          'onPopupVisibleChange',
          'changeOnSelect',
          'expandTrigger',
          'popupVisible',
          'getPopupContainer',
          'loadData',
          'popupClassName',
          'filterOption',
          'renderFilteredOption',
          'sortFilteredOption',
          'notFoundContent',
      ]);

      let { options } = props;
      if (state.inputValue) {
          options = this.generateFilteredOptions(prefixCls);
      }
      // Dropdown menu should keep previous status until it is fully closed.
      if (!state.popupVisible) {
          options = this.cachedOptions;
      } else {
          this.cachedOptions = options;
      }

      const dropdownMenuColumnStyle = {};
      const isNotFound = (options || []).length === 1 && options[0].value === 'JC_CASCADER_NOT_FOUND';
      if (isNotFound) {
          dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
      }
      // The default value of `matchInputWidth` is `true`
      const resultListMatchInputWidth = Boolean(showSearch.matchInputWidth);
      // const resultListMatchInputWidth = (showSearch).matchInputWidth === false ? false : true;
      if (resultListMatchInputWidth && state.inputValue && this.input) {
          dropdownMenuColumnStyle.width = this.input.input.offsetWidth;
      }

      const input = children || (
          <span
              style={style}
              className={pickerCls}
          >
              <span className={`${prefixCls}-picker-label`}>
                  {this.getLabel()}
              </span>
              <Input
                  {...inputProps}
                  ref={this.saveInput}
                  prefixCls={inputPrefixCls}
                  placeholder={value && value.length > 0 ? undefined : placeholder}
                  className={`${prefixCls}-input ${sizeCls}`}
                  value={state.inputValue}
                  disabled={disabled}
                  readOnly={!showSearch}
                  autoComplete='off'
                  onClick={showSearch ? this.handleInputClick : undefined}
                  onBlur={showSearch ? this.handleInputBlur : undefined}
                  onKeyDown={this.handleKeyDown}
                  onChange={showSearch ? this.handleInputChange : undefined}
              />
              {clearIcon}
              <Icon type='down' className={arrowCls} />
          </span>
      );

      return (
          <RcCascader
              {...props}
              options={options}
              value={value}
              popupVisible={state.popupVisible}
              onPopupVisibleChange={this.handlePopupVisibleChange}
              onChange={this.handleChange}
              dropdownMenuColumnStyle={dropdownMenuColumnStyle}
          >
              {input}
          </RcCascader>
      );
  }
}
