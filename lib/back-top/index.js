'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.BackTopProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = require('../_util/getScroll');

var _getScroll2 = _interopRequireDefault(_getScroll);

var _getRequestAnimationFrame = require('../_util/getRequestAnimationFrame');

var _getRequestAnimationFrame2 = _interopRequireDefault(_getRequestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reqAnimFrame = (0, _getRequestAnimationFrame2.default)();

var easeInOutCubic = function easeInOutCubic(t, b, c, d) {
    var cc = c - b;
    t /= d / 2;
    if (t < 1) {
        return cc / 2 * t * t * t + b;
    } else {
        return cc / 2 * ((t -= 2) * t * t + 2) + b;
    }
};

function noop() {}

function getDefaultTarget() {
    return window;
}

var BackTopProps = exports.BackTopProps = {
    visibilityHeight: _propTypes2.default.number, // 滚动高度达到此参数值才出现 BackTop
    onClick: _propTypes2.default.func, // 点击按钮的回调函数
    target: _propTypes2.default.any, // 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数,即说明：可以设置div等元素作为滚动框
    prefixCls: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    right: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    bottom: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

var BackTop = function (_React$Component) {
    _inherits(BackTop, _React$Component);

    function BackTop(props) {
        _classCallCheck(this, BackTop);

        var _this = _possibleConstructorReturn(this, (BackTop.__proto__ || Object.getPrototypeOf(BackTop)).call(this, props));

        _this.getCurrentScrollTop = function () {
            var getTarget = _this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
            }
            return targetNode.scrollTop;
        };

        _this.scrollToTop = function (e) {
            var scrollTop = _this.getCurrentScrollTop();
            var startTime = Date.now();
            var frameFunc = function frameFunc() {
                var timestamp = Date.now();
                var time = timestamp - startTime;
                _this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                if (time < 450) {
                    reqAnimFrame(frameFunc);
                }
            };
            reqAnimFrame(frameFunc);
            (_this.props.onClick || noop)(e);
        };

        _this.handleScroll = function () {
            var _this$props = _this.props,
                visibilityHeight = _this$props.visibilityHeight,
                _this$props$target = _this$props.target,
                target = _this$props$target === undefined ? getDefaultTarget : _this$props$target;

            var scrollTop = (0, _getScroll2.default)(target(), true);
            _this.setState({
                visible: scrollTop > visibilityHeight
            });
        };

        _this.state = {
            visible: false
        };
        _this.scrollEvent = undefined;
        return _this;
    }

    /**
     * 获取当前的ScrollTop值
     */


    /**
     * 滚动到顶部，有动画效果
     */


    _createClass(BackTop, [{
        key: 'setScrollTop',


        /**
         * 滚动到指定位置
         * @param {*滚动距离} value 
         */
        value: function setScrollTop(value) {
            var getTarget = this.props.target || getDefaultTarget;
            var targetNode = getTarget();
            if (targetNode === window) {
                document.body.scrollTop = value;
                document.documentElement.scrollTop = value;
            } else {
                targetNode.scrollTop = value;
            }
        }

        /**
         * 处理Backtop的显示或隐藏
         */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 获取BackTop处理的目标元素，可是Widow，也可以是divD等元素
            var getTarget = this.props.target || getDefaultTarget;
            // 绑定滚动监听事件
            this.scrollEvent = (0, _addEventListener2.default)(getTarget(), 'scroll', this.handleScroll);
            // 处理滚动事件
            this.handleScroll();
        }

        /**
         * 移除滚动监听事件
         */

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.scrollEvent) {
                this.scrollEvent.remove();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$prefixCls = _props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'jc-back-top' : _props$prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                children = _props.children,
                right = _props.right,
                bottom = _props.bottom;
            var _props$style = this.props.style,
                style = _props$style === undefined ? {} : _props$style;

            if (right && !style.right) {
                style.right = right;
            }
            if (bottom && !style.bottom) {
                style.bottom = bottom;
            }
            var classString = (0, _classnames2.default)(prefixCls, className);

            var defaultElement = React.createElement(
                'div',
                { className: prefixCls + '-content' },
                React.createElement('div', { className: prefixCls + '-icon' })
            );

            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2.default)(this.props, ['style', 'right', 'bottom', 'prefixCls', 'className', 'children', 'visibilityHeight', 'target']);

            var backTopBtn = this.state.visible ? React.createElement(
                'div',
                _extends({}, divProps, { style: style, className: classString, onClick: this.scrollToTop }),
                children || defaultElement
            ) : null;

            return React.createElement(
                _rcAnimate2.default,
                { component: '', transitionName: 'fade' },
                backTopBtn
            );
        }
    }]);

    return BackTop;
}(React.Component);

BackTop.defaultProps = {
    visibilityHeight: 400,
    style: {},
    className: ''
};
BackTop.propTypes = _extends({}, BackTopProps);
exports.default = BackTop;
//# sourceMappingURL=index.js.map