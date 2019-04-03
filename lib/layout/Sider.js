'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var mediaArray = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
var mediaDS = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
};

var Sider = function (_React$Component) {
    _inherits(Sider, _React$Component);

    /**
     * 获取父元素传递的参数
     * @variable {object} siderHandler 父组件处理Sider的对象
     */

    // 默认props
    function Sider(props) {
        _classCallCheck(this, Sider);

        var _this = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

        _this.responsiveCollapse = function (mql) {
            _this.setState({
                collapsed: mql.matches
            });
            _this.handleCallback(mql.matches, 'responsive');
        };

        _this.toggleCollapse = function () {
            _this.setState(function (prevState) {
                _this.handleCallback(!prevState.collapsed, 'click');
                return {
                    collapsed: !prevState.collapsed
                };
            });
        };

        _this.handleCallback = function (collapsed, type) {
            var onCollapse = _this.props.onCollapse;

            if (onCollapse) {
                onCollapse(collapsed, type);
            }
        };

        _this.initTriggerComponent = function () {
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                trigger = _this$props.trigger,
                reverseArrow = _this$props.reverseArrow,
                triggerIcon = _this$props.triggerIcon,
                triggerClassName = _this$props.triggerClassName;

            var divCls = (0, _classnames2.default)(prefixCls + '-trigger', triggerClassName, _defineProperty({}, prefixCls + '-trigger-reverse', reverseArrow));
            var iconType = 'right';
            // 优先使用triggerIcon，否则，根据reverseArrow判断使用默认icon
            if (triggerIcon) {
                iconType = triggerIcon;
            } else {
                iconType = reverseArrow ? 'right' : 'left';
            }
            return [_react2.default.createElement(
                'div',
                { className: divCls, onClick: _this.toggleCollapse },
                trigger || _react2.default.createElement(_icon2.default, { type: '' + iconType, className: prefixCls + '-trigger-icon' })
            )];
        };

        _this.state = {
            collapsed: props.collapsed || props.defaultCollapsed
        };
        // 创建MediaQueryList对象
        var matchMediaFun = void 0;
        if (typeof window !== 'undefined') {
            matchMediaFun = window.matchMedia || {};
        }
        if (props.breakpoint && matchMediaFun) {
            _this.mediaQueryList = matchMediaFun('(max-width: ' + mediaDS[props.breakpoint] + ')');
        }
        return _this;
    }

    /**
     * 向下(子组件)传递参数, 例如：Menu接收参数, 做出响应
     * @return {boolean} siderCollapsed Sider的折叠状态
     * @return {(string | number)} collapsedWidth 面板折叠时宽度
     */


    // 向下(子组件)传递参数, eg: Menu接收参数,做出响应


    // props类型


    _createClass(Sider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                siderCollapsed: this.state.collapsed,
                collapsedWidth: this.props.collapsedWidth
            };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 父组件计算Sider组件个数 +1
            if (this.context.siderHandler) {
                this.context.siderHandler.plus();
            }
            // 添加MediaQueryList监听事件
            if (this.mediaQueryList) {
                this.mediaQueryList.addListener(this.responsiveCollapse);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // 重新设置折叠状态
            if ('collapsed' in nextProps) {
                this.setState({
                    collapsed: nextProps.collapsed
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // 父组件计算Sider组件个数 -1
            if (this.context.siderHandler) {
                this.context.siderHandler.minus();
            }
            // 移除MediaQueryList监听事件
            if (this.mediaQueryList) {
                this.mediaQueryList.removeListener(this.responsiveCollapse);
            }
        }

        /**
         * 处理响应式：满足临界条件，折叠，否则展开
         * @param {MediaQueryList} mql
         */


        /**
         * 处理折叠click事件
         * 此处调用上一次的state，因此使用回调
         */


        /**
         * 处理用户自定义的回调函数
         * 在执行click or responsive时调用
         * @param {boolean} collapsed : 标识Sider的折叠true和展开状态
         * @param {string} type : 标识目前是哪类操作, 'click' or 'responsive'
         */


        /**
         * 渲染折叠展开组件(用Trigger指代)
         * 根据用户传递的reverseArrow参数，设置Trigger的方向
         * @variable {boolean} reverseArrow：是否使用反向箭头
         * @variable {string} triggerIcon: 用户设置的icon，用来替换默认icon，携带默认Icon的水平翻转效果
         * 优先使用triggerIcon，否则，根据reverseArrow判断使用默认icon
         */

    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                width = _props.width,
                collapsible = _props.collapsible;

            // 若折叠宽度不是数字，使用默认折叠宽度

            var collapsedWidth = parseInt(this.props.collapsedWidth, 10);
            collapsedWidth = Number.isNaN(collapsedWidth) ? this.state.defaultCollapsed : collapsedWidth;

            // Sider class
            var siderCls = (0, _classnames2.default)(className, prefixCls, (_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-collapsed-zero', collapsedWidth === 0), _defineProperty(_classNames2, prefixCls + '-collapsed', this.state.collapsed), _classNames2));

            // Sider展示宽度：折叠 or 展开
            var siderWidth = this.state.collapsed ? collapsedWidth + 'px' : width + 'px';
            var siderStyle = _extends({}, style, {
                width: siderWidth,
                flex: '0 0 ' + siderWidth
            });

            var otherProps = (0, _omit2.default)(this.props, ['prefixCls', 'className', 'triggerClassName', 'style', 'width', 'breakpoint', 'collapsed', 'collapsedWidth', 'collapsible', 'defaultCollapsed', 'trigger', 'reverseArrow', 'onCollapse']);

            return _react2.default.createElement(
                'div',
                _extends({ className: siderCls, style: siderStyle }, otherProps),
                _react2.default.createElement(
                    'div',
                    { className: prefixCls + '-content' },
                    this.props.children
                ),
                collapsible ? this.initTriggerComponent() : null
            );
        }
    }]);

    return Sider;
}(_react2.default.Component);

Sider.defaultProps = {
    prefixCls: 'jc-layout-sider',
    className: '',
    triggerClassName: '',
    style: {},
    width: 200,
    collapsedWidth: 65, // 收缩宽度，设置为 0 会出现特殊Trigger
    collapsible: false, // 是否可收起
    defaultCollapsed: false, // 是否默认收起
    reverseArrow: false // 折叠按钮是否反向，当Sider在右边时可以使用
};
Sider.propTypes = {
    prefixCls: _propTypes2.default.string, // class前缀
    className: _propTypes2.default.string, // Sider class
    triggerClassName: _propTypes2.default.string, // trigger class
    style: _propTypes2.default.object,
    width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    breakpoint: _propTypes2.default.oneOf(mediaArray),
    collapsed: _propTypes2.default.bool,
    collapsedWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    collapsible: _propTypes2.default.bool,
    defaultCollapsed: _propTypes2.default.bool,
    reverseArrow: _propTypes2.default.bool,
    trigger: _propTypes2.default.node,
    onCollapse: _propTypes2.default.func
};
Sider.contextTypes = {
    siderHandler: _propTypes2.default.object
};
Sider.childContextTypes = {
    siderCollapsed: _propTypes2.default.bool,
    collapsedWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
exports.default = Sider;
//# sourceMappingURL=Sider.js.map