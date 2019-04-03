'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SubMenu = require('./SubMenu');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _openAnimation = require('../_util/openAnimation.js');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 二次封装rc-menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version: 3.2.3
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// 菜单模式
var menuModeDS = ['vertical', 'vertical-left', 'vertical-right', 'horizontal', 'inline'];

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    // 向下传参
    // siderCollapsed存在时，inlineCollapsed无效
    // 因此，在SiderCollapsed存在的情况下，inlineCollapsed无效
    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

        _this.getInlineCollapsed = function () {
            var inlineCollapsed = _this.props.inlineCollapsed;

            if (_this.context.siderCollapsed !== undefined) {
                return _this.context.siderCollapsed;
            }
            return inlineCollapsed;
        };

        _this.getRealMenuMode = function () {
            var inlineCollapsed = _this.getInlineCollapsed();
            if (_this.switchModeFromInline && inlineCollapsed) {
                return 'inline';
            }
            var mode = _this.props.mode;

            return inlineCollapsed ? 'vertical' : mode;
        };

        _this.getMenuOpenAnimation = function (menuMode) {
            var _this$props = _this.props,
                openAnimation = _this$props.openAnimation,
                openTransitionName = _this$props.openTransitionName;

            var menuOpenAnimation = openAnimation || openTransitionName;
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
                        if (_this.switchModeFromInline) {
                            menuOpenAnimation = '';
                            _this.switchModeFromInline = false;
                        } else {
                            menuOpenAnimation = 'zoom-big';
                        }
                        break;
                    case 'inline':
                        menuOpenAnimation = _extends({}, _openAnimation2.default, {
                            leave: function leave(node, done) {
                                return _openAnimation2.default.leave(node, function () {
                                    // Make sure inline menu leave animation finished before mode is switched
                                    _this.switchModeFromInline = false;
                                    _this.setState({});
                                    // when inlineCollapsed change false to true, all submenu will be unmounted,
                                    // so that we don't need handle animation leaving.
                                    if (_this.getRealMenuMode() === 'vertical') {
                                        return;
                                    }
                                    done();
                                });
                            }
                        });
                        break;
                    default:
                }
            }
            return menuOpenAnimation;
        };

        _this.handleOpenChange = function (openKeys) {
            // 重新设置当前展开菜单
            _this.setOpenKeys(openKeys);

            // 处理用户传递的回调
            var onOpenChange = _this.props.onOpenChange;

            if (onOpenChange) {
                onOpenChange(openKeys);
            }
        };

        _this.handleClick = function (e) {
            // 清空openKeys：关闭已经展开的菜单
            _this.handleOpenChange([]);

            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };

        _this.switchModeFromInline = false;
        _this.leaveAnimationExecutedWhencollapsed = false; // inline 时当菜单收起时是否展示动画
        _this.inlineOpenKeys = []; // 备份openKeys数组

        // 初始化展开菜单
        _this.state = {
            openKeys: props.defaultOpenKeys || props.openKeys || []
        };
        return _this;
    }

    // 向下传参


    /**
     * 收起参数
     * @variable siderCollapsed ： Sider是否收起
     * @collapsedWidth ： Sider收起时宽度
     */


    _createClass(Menu, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                inlineCollapsed: this.getInlineCollapsed(),
                jcMenuTheme: this.props.theme
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextContext) {
            var prefixCls = this.props.prefixCls;

            if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
                this.switchModeFromInline = true;
            }
            if ('openKeys' in nextProps) {
                this.setState({ openKeys: nextProps.openKeys });
                return;
            }
            if (nextProps.inlineCollapsed && !this.props.inlineCollapsed || nextContext.siderCollapsed && !this.context.siderCollapsed) {
                this.switchModeFromInline = !!this.state.openKeys.length && !!(0, _reactDom.findDOMNode)(this).querySelectorAll('.' + prefixCls + '-submenu-open').length;
                this.inlineOpenKeys = this.state.openKeys;
                this.setState({ openKeys: [] });
            }
            if (!nextProps.inlineCollapsed && this.props.inlineCollapsed || !nextContext.siderCollapsed && this.context.siderCollapsed) {
                this.setState({ openKeys: this.inlineOpenKeys });
                this.inlineOpenKeys = [];
            }
        }
        /**
         * 菜单是否收起
         * siderCollapsed存在时，inlineCollapsed无效
         */

    }, {
        key: 'setOpenKeys',
        value: function setOpenKeys(openKeys) {
            if (!('openKeys' in this.props)) {
                this.setState({ openKeys: openKeys });
            }
        }
        /**
         * SubMenu 展开/收起的回调
         * @param openKeys 展开的菜单
         */

        /**
         * menuItem click: 点击MenuItem时，关闭已经展开的菜单
         * @param e mouse事件
         */

    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                theme = _props.theme;

            var menuMode = this.getRealMenuMode();
            var menuOpenAnimation = this.getMenuOpenAnimation(menuMode);

            var menuClassName = (0, _classnames2.default)(className, prefixCls + '-' + theme, _defineProperty({}, prefixCls + '-inline-collapsed', this.getInlineCollapsed()));

            var menuProps = {
                openKeys: this.state.openKeys,
                onOpenChange: this.handleOpenChange,
                className: menuClassName,
                mode: menuMode
            };

            if (menuMode !== 'inline') {
                // closing vertical popup submenu after click it
                menuProps.onClick = this.handleClick;
                menuProps.openTransitionName = menuOpenAnimation;
            } else {
                menuProps.openAnimation = menuOpenAnimation;
            }

            // https://github.com/ant-design/ant-design/issues/8587
            var collapsedWidth = this.context.collapsedWidth;

            if (this.getInlineCollapsed() && (collapsedWidth === 0 || collapsedWidth === '0' || collapsedWidth === '0px')) {
                return null;
            }

            return _react2.default.createElement(_rcMenu2.default, _extends({}, this.props, menuProps));
        }
    }]);

    return Menu;
}(_react2.default.Component);

Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem2.default;
Menu.SubMenu = _SubMenu2.default;
Menu.ItemGroup = _rcMenu.ItemGroup;
Menu.defaultProps = {
    prefixCls: 'jc-menu',
    className: '',
    theme: 'light' // or dark
};
Menu.propTypes = {
    defaultOpenKeys: _propTypes2.default.arrayOf(_propTypes2.default.string), // 初始展开的 SubMenu 菜单项 key 数组
    defaultSelectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string), // 初始选中的菜单项 key 数组
    inlineCollapsed: _propTypes2.default.bool, // 菜单是否收起状态(作用于所有的mode状态)
    inlineIndent: _propTypes2.default.number, // inline mode 菜单缩进宽度
    mode: _propTypes2.default.oneOf(menuModeDS), // 菜单模式
    multiple: _propTypes2.default.bool, // 是否允许多选
    openKeys: _propTypes2.default.arrayOf(_propTypes2.default.string), // 当前展开的 SubMenu 菜单项 key 数组
    selectable: _propTypes2.default.bool, // 是否允许选中
    selectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string), // 当前选中的菜单项 key 数组
    style: _propTypes2.default.object,
    subMenuCloseDelay: _propTypes2.default.number, // 用户鼠标离开子菜单后关闭延时，单位：秒
    subMenuOpenDelay: _propTypes2.default.number, // 用户鼠标进入子菜单后展开延时，单位：秒
    theme: _propTypes2.default.oneOf(['light', 'dark']), // 主题
    onClick: _propTypes2.default.func, // 点击 MenuItem 调用此函数
    onDeselect: _propTypes2.default.func, // 取消选中时调用，仅在 multiple 生效
    onOpenChange: _propTypes2.default.func, // SubMenu 展开/关闭的回调
    onSelect: _propTypes2.default.func, // 被选中时调用
    openAnimation: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    openTransitionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    className: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string
};
Menu.childContextTypes = {
    inlineCollapsed: _propTypes2.default.bool,
    jcMenuTheme: _propTypes2.default.string // 主题样式
};
Menu.contextTypes = {
    siderCollapsed: _propTypes2.default.bool,
    collapsedWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
exports.default = Menu;
//# sourceMappingURL=index.js.map