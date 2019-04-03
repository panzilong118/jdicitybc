/**
 * @file 二次封装MenuItem,提供收起时，MenuItem有提示信息
 * @author chenyanhua
 */
import React from 'react';

import { Item } from 'rc-menu';

import PropTypes from 'prop-types';

import Tooltip from '../tooltip';

export default class MenuItem extends React.Component {
    static isMenuItem = 1;
    /**
     * 接收父组件参数
     * @variable inlineCollapsed: 菜单是否收起状态
     */
    static contextTypes = {
        inlineCollapsed: PropTypes.bool
    };
    constructor(props) {
        super(props);
        this.menuItem = undefined;
    }
    onKeyDown = (e) => {
        this.menuItem.onKeyDown(e);
    }
    saveMenuItem = (menuItem) => {
      this.menuItem = menuItem;
    }
    render() {
        const { inlineCollapsed } = this.context;
        const { level, children, rootPrefixCls } = this.props;
        const item = <Item {...this.props} ref={this.saveMenuItem} />;
        if (inlineCollapsed && level === 1) {
            return (
                <Tooltip
                    title={children}
                    placement='right'
                    overlayClassName={`${rootPrefixCls}-inline-collapsed-tooltip`}
                >
                    {item}
                </Tooltip>
            );
        }
        return item;
    }
}
