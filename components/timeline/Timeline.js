/**
 * @author panzilong
 * @version 1.0.0
 */

import * as React from 'react';
import classNames from 'classnames';
import TimelineItem, { TimeLineItemProps } from './TimelineItem';
import Icon from '../icon';

export default class Timeline extends React.Component {
  static Item = TimelineItem;
  static defaultProps = {
    prefixCls: 'jc-timeline',
  };

  render() {
    const { prefixCls, children, pending, pendingDot, className, ...restProps } = this.props;
    const pendingNode = typeof pending === 'boolean' ? null : pending;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-pending`]: !!pending,
    }, className);
    // Remove falsy items
    const falsylessItems = React.Children.toArray(children).filter(item => !!item);
    const items = React.Children.map(falsylessItems, (ele: React.ReactElement<any>, idx) =>
      React.cloneElement(ele, {
        last: idx === (React.Children.count(falsylessItems) - 1),
      }),
    );
    const pendingItem = (!!pending) ? (
      <TimelineItem
        pending={!!pending}
        dot={pendingDot || <Icon type="loading" />}
      >
        {pendingNode}
      </TimelineItem>
    ) : null;
    return (
      <ul {...restProps} className={classString}>
        {items}
        {pendingItem}
      </ul>
    );
  }
}
