/**
 * Created by gaoqingli on 2018/4/10.
 */
import * as React from 'react';

import * as ReactDOM from 'react-dom';

import RcTabs, { TabPane } from 'rc-tabs';

import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import TabContent from 'rc-tabs/lib/TabContent';

import classNames from 'classnames';

import Icon from '../icon';

import warning from '../_util/warning';

import isFlexSupported from '../_util/isFlexSupported';

export default class Tabs extends React.Component {
  static TabPane = TabPane;

  static defaultProps = {
      prefixCls: 'jc-tabs',
      hideAdd: false,
  };

  componentDidMount() {
      const NO_FLEX = ' no-flex';
      const tabNode = ReactDOM.findDOMNode(this);
      if (tabNode && !isFlexSupported() && tabNode.className.indexOf(NO_FLEX) === -1) {
          tabNode.className += NO_FLEX;
      }
  }

  createNewTab = (targetKey) => {
      const { onEdit } = this.props;
      if (onEdit) {
          onEdit(targetKey, 'add');
      }
  }

  removeTab = (targetKey, e) => {
      e.stopPropagation();
      if (!targetKey) {
          return;
      }

      const { onEdit } = this.props;
      if (onEdit) {
          onEdit(targetKey, 'remove');
      }
  }

  handleChange = (activeKey) => {
      const { onChange } = this.props;
      if (onChange) {
          onChange(activeKey);
      }
  }

  render() {
      const {
          prefixCls,
          className = '',
          size,
          type = 'line',
          tabPosition,
          children,
          tabBarStyle,
          hideAdd,
          onTabClick,
          onPrevClick,
          onNextClick,
          animated = true,
          tabBarGutter,
      } = this.props;
      let {
          tabBarExtraContent,
      } = this.props;

      const { inkBarAnimated } = typeof animated === 'object' ? {
          inkBarAnimated: animated.inkBar,
      } : {
          inkBarAnimated: animated,
      };
      let { tabPaneAnimated } = typeof animated === 'object' ? {
          tabPaneAnimated: animated.tabPane,
      } : {
          tabPaneAnimated: animated,
      };

      // card tabs should not have animation
      if (type !== 'line') {
          tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
      }

      warning(
          !(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')),
          'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by designed.',
      );
      const cls = classNames(className, {
          [`${prefixCls}-vertical`]: tabPosition === 'left' || tabPosition === 'right',
          [`${prefixCls}-${size}`]: !!size,
          [`${prefixCls}-card`]: type.indexOf('card') >= 0,
          [`${prefixCls}-${type}`]: true,
          [`${prefixCls}-no-animation`]: !tabPaneAnimated,
      });
      // only card type tabs can be added and closed
      let childrenWithClose: React.ReactElement[] = [];

      tabBarExtraContent = tabBarExtraContent ? (
          <div className={`${prefixCls}-extra-content`}>
              {tabBarExtraContent}
          </div>
      ) : null;

      if (type === 'editable-card') {
          childrenWithClose = [];
          React.Children.forEach(children, (child, index) => {
              let { closable } = child.props;
              closable = typeof closable === 'undefined' ? true : closable;
              const closeIcon = closable ? (
                  <Icon
                      type='close'
                      onClick={e => this.removeTab(child.key, e)}
                  />
              ) : null;
              childrenWithClose.push(React.cloneElement(child, {
                  tab: (
                      <div className={closable ? undefined : `${prefixCls}-tab-unclosable`}>
                          {child.props.tab}
                          {closeIcon}
                      </div>
                  ),
                  key: child.key || index,
              }));
          });
          // Add new tab handler
          if (!hideAdd) {
              tabBarExtraContent = (
                  <span>
                      <Icon type='plus' className={`${prefixCls}-new-tab`} onClick={this.createNewTab} />
                      {tabBarExtraContent}
                  </span>
              );
          }
      }

      const renderTabBar = () => (
          <ScrollableInkTabBar
              inkBarAnimated={inkBarAnimated}
              extraContent={tabBarExtraContent}
              onTabClick={onTabClick}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              style={tabBarStyle}
              tabBarGutter={tabBarGutter}
          />
      );

      return (
          <RcTabs
              {...this.props}
              className={cls}
              tabBarPosition={tabPosition}
              renderTabBar={renderTabBar}
              renderTabContent={() => <TabContent animated={tabPaneAnimated} animatedWithMargin />}
              onChange={this.handleChange}
          >
              {childrenWithClose.length > 0 ? childrenWithClose : children}
          </RcTabs>
      );
  }
}
