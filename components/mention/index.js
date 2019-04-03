/**
 * Created by gaoqingli on 2018/4/26.
 */
import * as React from 'react';

import RcMention, { Nav, toString, toEditorState, getMentions } from 'rc-editor-mention';

import classNames from 'classnames';

import shallowequal from 'shallowequal';

import Icon from '../icon';

export default class Mention extends React.Component {
  static getMentions = getMentions;
  static defaultProps = {
      prefixCls: 'jc-mention',
      notFoundContent: '无匹配结果，轻敲空格完成输入',
      loading: false,
      multiLines: false,
      placement: 'bottom',
  };
  static Nav = Nav;
  static toString = toString;
  static toContentState = toEditorState;
  constructor(props) {
      super(props);
      this.state = {
          suggestions: props.suggestions,
          focus: false,
      };
      this.mentionEle = undefined;
  }

  componentWillReceiveProps(nextProps) {
      const { suggestions } = nextProps;
      if (!shallowequal(suggestions, this.props.suggestions)) {
          this.setState({
              suggestions,
          });
      }
  }

  onSearchChange = (value, prefix) => {
      if (this.props.onSearchChange) {
          return this.props.onSearchChange(value, prefix);
      }
      return this.defaultSearchChange(value);
  }

  onChange = (editorState) => {
      if (this.props.onChange) {
          this.props.onChange(editorState);
      }
  }

  defaultSearchChange(value) {
      const searchValue = value.toLowerCase();
      const filteredSuggestions = (this.props.suggestions || []).filter((suggestion) => {
          if (suggestion.type && suggestion.type === Nav) {
              return suggestion.props.value ? suggestion.props.value.toLowerCase().indexOf(searchValue) !== -1 : true;
          }
          return suggestion.toLowerCase().indexOf(searchValue) !== -1;
      });
      this.setState({ suggestions: filteredSuggestions, });
  }

  onFocus = (ev) => {
      this.setState({
          focus: true,
      });
      if (this.props.onFocus) {
          this.props.onFocus(ev);
      }
  }
  onBlur = (ev) => {
      this.setState({
          focus: false,
      });
      if (this.props.onBlur) {
          this.props.onBlur(ev);
      }
  }
  focus = () => {
      this.mentionEle._editor.focusEditor();
  }
  mentionRef = (ele) => {
      this.mentionEle = ele;
  }
  render() {
      const { className = '', prefixCls, loading, placement } = this.props;
      const { suggestions, focus } = this.state;
      const cls = classNames(className, {
          [`${prefixCls}-active`]: focus,
          [`${prefixCls}-placement-top`]: placement === 'top',
      });

      const notFoundContent = loading ? <Icon type='loading' /> : this.props.notFoundContent;

      return (
          <RcMention
              {...this.props}
              className={cls}
              ref={this.mentionRef}
              onSearchChange={this.onSearchChange}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              suggestions={suggestions}
              notFoundContent={notFoundContent}
          />
      );
  }
}
