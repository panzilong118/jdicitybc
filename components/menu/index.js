/**
 * @file 二次封装rc-menu
 * @author chenyanhua
 * @version: 3.2.3
 */
import React from 'react';

import { findDOMNode } from 'react-dom';

import RcMenu, { Divider, ItemGroup } from 'rc-menu';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import SubMenu from './SubMenu';

import Item from './MenuItem';

import animation from '../_util/openAnimation.js';

// 菜单模式
const menuModeDS = ['vertical', 'vertical-left', 'vertical-right', 'horizontal', 'inline'];

export default class Menu extends React.Component {
    static Divider = Divider;
    static Item = Item;
    static SubMenu = SubMenu;
    static ItemGroup = ItemGroup;

    static defaultProps = {
        prefixCls: 'jc-menu',
        className: '',
        theme: 'light', // or dark
    };

    static propTypes = {
        defaultOpenKeys: PropTypes.arrayOf(PropTypes.string), // 初始展开的 SubMenu 菜单项 key 数组
        defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string), // 初始选中的菜单项 key 数组
        inlineCollapsed: PropTypes.bool, // 菜单是否收起状态(作用于所有的mode状态)
        inlineIndent: PropTypes.number, // inline mode 菜单缩进宽度
        mode: PropTypes.oneOf(menuModeDS), // 菜单模式
        multiple: PropTypes.bool, // 是否允许多选
        openKeys: PropTypes.arrayOf(PropTypes.string), // 当前展开的 SubMenu 菜单项 key 数组
        selectable: PropTypes.bool, // 是否允许选中
        selectedKeys: PropTypes.arrayOf(PropTypes.string), // 当前选中的菜单项 key 数组
        style: PropTypes.object,
        subMenuCloseDelay: PropTypes.number, // 用户鼠标离开子菜单后关闭延时，单位：秒
        subMenuOpenDelay: PropTypes.number, // 用户鼠标进入子菜单后展开延时，单位：秒
        theme: PropTypes.oneOf(['light', 'dark']), // 主题
        onClick: PropTypes.func, // 点击 MenuItem 调用此函数
        onDeselect: PropTypes.func, // 取消选中时调用，仅在 multiple 生效
        onOpenChange: PropTypes.func, // SubMenu 展开/关闭的回调
        onSelect: PropTypes.func, // 被选中时调用
        openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        openTransitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        className: PropTypes.string,
        prefixCls: PropTypes.string
    };

    // 向下传参
    // siderCollapsed存在时，inlineCollapsed无效
    // 因此，在SiderCollapsed存在的情况下，inlineCollapsed无效
    static childContextTypes = {
        inlineCollapsed: PropTypes.bool,
        jcMenuTheme: PropTypes.string // 主题样式
    };

    /**
     * 收起参数
     * @variable siderCollapsed ： Sider是否收起
     * @collapsedWidth ： Sider收起时宽度
     */
    static contextTypes = {
        siderCollapsed: PropTypes.bool,
        collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    };

    constructor(props) {
        super(props);
        this.switchModeFromInline = false;
        this.leaveAnimationExecutedWhencollapsed = false; // inline 时当菜单收起时是否展示动画
        this.inlineOpenKeys = []; // 备份openKeys数组

        // 初始化展开菜单
        this.state = {
            openKeys: props.defaultOpenKeys || props.openKeys || []
        };
    }

    // 向下传参
    getChildContext() {
        return {
            inlineCollapsed: this.getInlineCollapsed(),
            jcMenuTheme: this.props.theme
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const { prefixCls } = this.props;
        if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
            this.switchModeFromInline = true;
        }
        if ('openKeys' in nextProps) {
            this.setState({ openKeys: nextProps.openKeys });
            return;
        }
        if ((nextProps.inlineCollapsed && !this.props.inlineCollapsed) || (nextContext.siderCollapsed && !this.context.siderCollapsed)) {
            this.switchModeFromInline = !!this.state.openKeys.length && !!findDOMNode(this).querySelectorAll(`.${prefixCls}-submenu-open`).length;
            this.inlineOpenKeys = this.state.openKeys;
            this.setState({ openKeys: [] });
        }
        if ((!nextProps.inlineCollapsed && this.props.inlineCollapsed) || (!nextContext.siderCollapsed && this.context.siderCollapsed)) {
            this.setState({ openKeys: this.inlineOpenKeys });
            this.inlineOpenKeys = [];
        }
    }
    /**
     * 菜单是否收起
     * siderCollapsed存在时，inlineCollapsed无效
     */
    getInlineCollapsed = () => {
        const { inlineCollapsed } = this.props;
        if (this.context.siderCollapsed !== undefined) {
            return this.context.siderCollapsed;
        }
        return inlineCollapsed;
    }
    getRealMenuMode = () => {
        const inlineCollapsed = this.getInlineCollapsed();
        if (this.switchModeFromInline && inlineCollapsed) {
            return 'inline';
        }
        const { mode } = this.props;
        return inlineCollapsed ? 'vertical' : mode;
    }
    getMenuOpenAnimation = (menuMode) => {
        const { openAnimation, openTransitionName } = this.props;
        let menuOpenAnimation = openAnimation || openTransitionName;
        if (openAnimation === undefined && openTransitionName === undefined) {
            switch (menuMode) {
            case 'horizontal':
                menuOpenAnimation = 'slide-up';
                break;
            case 'vertical':
            case 'vertical-left':
            case 'vertical-right':
                // When mode switch from inline
                // submenu should hide without animation
                if (this.switchModeFromInline) {
                    menuOpenAnimation = '';
                    this.switchModeFromInline = false;
                } else {
                    menuOpenAnimation = 'zoom-big';
                }
                break;
            case 'inline':
                menuOpenAnimation = {
                    ...animation,
                    leave: (node, done) => animation.leave(node, () => {
                        // Make sure inline menu leave animation finished before mode is switched
                        this.switchModeFromInline = false;
                        this.setState({});
                        // when inlineCollapsed change false to true, all submenu will be unmounted,
                        // so that we don't need handle animation leaving.
                        if (this.getRealMenuMode() === 'vertical') {
                            return;
                        }
                        done();
                    })
                };
                break;
            default:
            }
        }
        return menuOpenAnimation;
    }
    setOpenKeys(openKeys) {
        if (!('openKeys' in this.props)) {
            this.setState({ openKeys });
        }
    }
    /**
     * SubMenu 展开/收起的回调
     * @param openKeys 展开的菜单
     */
    handleOpenChange = (openKeys) => {
        // 重新设置当前展开菜单
        this.setOpenKeys(openKeys);

        // 处理用户传递的回调
        const { onOpenChange } = this.props;
        if (onOpenChange) {
            onOpenChange(openKeys);
        }
    }
    /**
     * menuItem click: 点击MenuItem时，关闭已经展开的菜单
     * @param e mouse事件
     */
    handleClick = (e) => {
        // 清空openKeys：关闭已经展开的菜单
        this.handleOpenChange([]);

        const { onClick } = this.props;
        if (onClick) {
            onClick(e);
        }
    }
    render() {
        const { prefixCls, className, theme } = this.props;
        const menuMode = this.getRealMenuMode();
        const menuOpenAnimation = this.getMenuOpenAnimation(menuMode);

        const menuClassName = classNames(className, `${prefixCls}-${theme}`, {
            [`${prefixCls}-inline-collapsed`]: this.getInlineCollapsed(),
        });

        const menuProps = {
            openKeys: this.state.openKeys,
            onOpenChange: this.handleOpenChange,
            className: menuClassName,
            mode: menuMode,
        };

        if (menuMode !== 'inline') {
            // closing vertical popup submenu after click it
            menuProps.onClick = this.handleClick;
            menuProps.openTransitionName = menuOpenAnimation;
        } else {
            menuProps.openAnimation = menuOpenAnimation;
        }

        // https://github.com/ant-design/ant-design/issues/8587
        const { collapsedWidth } = this.context;
        if (
            this.getInlineCollapsed() &&
            (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')
        ) {
            return null;
        }

        return <RcMenu {...this.props} {...menuProps} />;
    }
}
