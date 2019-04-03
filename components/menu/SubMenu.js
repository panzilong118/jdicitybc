/**
 * @file 二次封装SubMenu，主要用来传递指定参数
 * @author chenyanhua
 */
import React from 'react';

import PropTypes from 'prop-types';

import { SubMenu as RcSubMenu } from 'rc-menu';

import classNames from 'classnames';

export default class SubMenu extends React.Component {
    /**
     * 接收父组件参数
     * @variable jcMenuTheme : 变换主题样式，dark 和 light
     */
    static contextTypes = {
        jcMenuTheme: PropTypes.string,
    };
    constructor(props) {
        super(props);
        this.subMenu = undefined;
    }
    onKeyDown = (e) => {
        this.subMenu.onKeyDown(e);
    }
    render() {
        const { rootPrefixCls, className } = this.props;
        const theme = this.context.jcMenuTheme;
        return (
            <RcSubMenu
                {...this.props}
                ref={(subMenu) => { this.subMenu = subMenu; }}
                popupClassName={classNames(`${rootPrefixCls}-${theme}`, className)}
            />
        );
    }
}
