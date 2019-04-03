/**
 * Created by huangxiao3 on 2018/3/16.
 */
import * as React from 'react';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// 重组props 生成新对象
var __rest = (this && this.__rest) || function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
// 支持响应式布局，使用enquire。
// 检查浏览器支持情况
let enquire;
if (typeof window !== 'undefined') {
    const matchMediaPolyfill = (mediaQuery) => {
        return {
            media: mediaQuery,
            matches: false,
            addListener() {
            },
            removeListener() {
            },
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = require('enquire.js');
}

// 响应式布局 触发断点
const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)',
};

export default class Row extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            screens: {},
        };
    }

    // 加载完成后，检测窗口width，更新state重新渲染
    componentDidMount() {
        Object.keys(responsiveMap)
            .map((screen) => enquire.register(responsiveMap[screen], {
                match: () => {
                    if (typeof this.props.gutter !== 'object') {
                        return;
                    }
                    this.setState((prevState) => ({
                        screens: Object.assign({}, prevState.screens, { [screen]: true }),
                    }));
                },
                unmatch: () => {
                    if (typeof this.props.gutter !== 'object') {
                        return;
                    }
                    this.setState((prevState) => ({
                        screens: Object.assign({}, prevState.screens, { [screen]: false }),
                    }));
                },
                // Keep a empty destory to avoid triggering unmatch when unregister
                destroy() { },
            }));
    }

    // 释放
    componentWillUnmount() {
        Object.keys(responsiveMap)
            .map((screen) => enquire.unregister(responsiveMap[screen]));
    }

    // 根据窗口状态，依照state取值，获取对应的gutter
    getGutter() {
        const { gutter } = this.props;
        if (typeof gutter === 'object') {
            for (let i = 0; i <= responsiveArray.length; i++) {
                const breakpoint = responsiveArray[i];
                if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                    return gutter[breakpoint];
                }
            }
        }
        return gutter;
    }


    render() {
        // 合并属性
        const _a = this.props, { type, justify, align, className, style, children, prefixCls } = _a, others = __rest(_a, ["type", "justify", "align", "className", "style", "children", "prefixCls"]);
        // 获取间距
        const gutter = this.getGutter();
        // 合并类名
        // jc-row    jc-row-flex   jc-row-justify   jc-row-align
        const classes = classNames({
            [prefixCls]: !type,
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${type}-${justify}`]: type && justify,
            [`${prefixCls}-${type}-${align}`]: type && align,
        }, className);

        // 处理 行的左右偏移
        const rowStyle = gutter > 0 ? Object.assign({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
        // 处理 子列
        const cols = Children.map(children, (col) => {
            if (!col) {
                return null;
            }
            // 处理列之间的间隔 gutter 样式
            if (col.props && gutter > 0) {
                return cloneElement(col, {
                    style: Object.assign({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, col.props.style),
                });
            }
            return col;
        });
        const otherProps = Object.assign({}, others);
        delete otherProps.gutter;
        return <div {...otherProps} className={classes} style={rowStyle}>{cols}</div>;
    }
}

// 默认间距为0
Row.defaultProps = {
    gutter: 0,
    prefixCls : 'jc-row',
};
Row.propTypes = {
    type: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    prefixCls: PropTypes.string,
};