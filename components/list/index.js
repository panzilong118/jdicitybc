/**
 * @author panzilong
 * @version 1.0.0
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SpinProps } from '../spin';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import defaultLocale from '../locale-provider/default';

import Spin from '../spin';
import Pagination from '../pagination';
import { Row } from '../grid';

import Item from './Item';

export default class List extends React.Component {

  constructor(props) {
      super(props);
      this.keys = {};
  }

  static Item = Item;

  static childContextTypes = {
    grid: PropTypes.any,
  };

  static defaultProps = {
    dataSource: [],
    prefixCls: 'jc-list',
    bordered: false,
    split: true,
    loading: false,
    pagination: false,
  };

  getChildContext() {
    return {
      grid: this.props.grid,
    };
  }

  renderItem = (item, index) => {
    const { dataSource, renderItem, rowKey } = this.props;
    let key;

    if (typeof rowKey === 'function') {
      key = rowKey(dataSource[index]);
    } else if (typeof rowKey === 'string') {
      key = dataSource[rowKey];
    } else {
      key = dataSource.key;
    }

    if (!key) {
      key = `list-item-${index}`;
    }

    this.keys[index] = key;

    return renderItem(item, index);
  }

  isSomethingAfterLastItem() {
    const { loadMore, pagination, footer } = this.props;
    return !!(loadMore || pagination || footer);
  }

  renderEmpty = (contextLocale) => {
    const locale = { ...contextLocale, ...this.props.locale };
    return <div className={`${this.props.prefixCls}-empty-text`}>{locale.emptyText}</div>;
  }

  render() {
    const {
      bordered,
      split,
      className,
      children,
      itemLayout,
      loadMore,
      pagination,
      prefixCls,
      grid,
      dataSource,
      size,
      rowKey,
      renderItem,
      header,
      footer,
      loading,
      ...rest,
    } = this.props;

    let loadingProp = loading;
    if (typeof loadingProp === 'boolean') {
      loadingProp = {
        spinning: loadingProp,
      };
    }
    const isLoading = (loadingProp && loadingProp.spinning);

    // large => lg
    // small => sm
    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }

    const classString = classNames(prefixCls, className, {
      [`${prefixCls}-vertical`]: itemLayout === 'vertical',
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-split`]: split,
      [`${prefixCls}-bordered`]: bordered,
      [`${prefixCls}-loading`]: isLoading,
      [`${prefixCls}-grid`]: grid,
      [`${prefixCls}-something-after-last-item`]: this.isSomethingAfterLastItem(),
    });

    const paginationContent = (
      <div className={`${prefixCls}-pagination`}>
        <Pagination {...pagination} />
      </div>
    );

    let childrenContent;
    childrenContent = isLoading && <div style={{ minHeight: 53 }} />;
    if (dataSource.length > 0) {
      const items = dataSource.map((item, index) => this.renderItem(item, index));
      const childrenList = React.Children.map(items, (child, index) => React.cloneElement(child, {
          key: this.keys[index],
        }),
      );

      childrenContent = grid ? (
        <Row gutter={grid.gutter}>{childrenList}</Row>
      ) : childrenList;
    } else if (!children && !isLoading) {
      childrenContent = (
        <LocaleReceiver
          componentName="Table"
          defaultLocale={defaultLocale.Table}
        >
          {this.renderEmpty}
        </LocaleReceiver>
      );
    }

    const content = (
      <div>
        <Spin {...loadingProp}>{childrenContent}</Spin>
        {loadMore}
        {(!loadMore && pagination) ? paginationContent : null}
      </div>
    );

    return (
      <div className={classString} {...rest}>
        {header && <div className={`${prefixCls}-header`}>{header}</div>}
        {content}
        {children}
        {footer && <div className={`${prefixCls}-footer`}>{footer}</div>}
      </div>
    );
  }
}
