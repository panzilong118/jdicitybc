'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.SpinProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.4.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var SpinProps = exports.SpinProps = {
    prefixCls: _propTypes2.default.string,
    className: _propTypes2.default.string,
    spinning: _propTypes2.default.bool, // 是否旋转
    size: _propTypes2.default.oneOf(['small', 'default', 'large']),
    wrapperClassName: _propTypes2.default.string, // 包装器的类属性
    indicator: _propTypes2.default.node, // 加载指示符
    delay: _propTypes2.default.number, // 延迟显示加载效果的时间（防止闪烁）
    tip: _propTypes2.default.string, // 当作为包裹元素时，可以自定义描述文案
    style: _propTypes2.default.object
};

var Spin = function (_React$Component) {
    _inherits(Spin, _React$Component);

    // static propTypes = {
    //     prefixCls: PropTypes.string,
    //     className: PropTypes.string,
    //     spinning: PropTypes.bool, // 是否旋转
    //     size: PropTypes.oneOf(['small', 'default', 'large']),
    //     wrapperClassName: PropTypes.string, // 包装器的类属性
    //     indicator: PropTypes.node, // 加载指示符
    //     delay: PropTypes.number, // 延迟显示加载效果的时间（防止闪烁）
    //     tip: PropTypes.string, // 当作为包裹元素时，可以自定义描述文案
    //     style: PropTypes.object
    // };

    function Spin(props) {
        _classCallCheck(this, Spin);

        var _this = _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        _this.isNestedPattern = function () {
            return !!(_this.props && _this.props.children);
        };

        _this.renderIndicator = function () {
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                indicator = _this$props.indicator;
            // 加载符

            var dotClassName = prefixCls + '-dot';
            // 存在自定义加载符
            if (React.isValidElement(indicator)) {
                return React.cloneElement(indicator, {
                    className: (0, _classnames2.default)(indicator.props.className, dotClassName)
                });
            }
            // 使用默认加载符
            return React.createElement(
                'span',
                { className: (0, _classnames2.default)(dotClassName, prefixCls + '-dot-spin') },
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null),
                React.createElement('i', null)
            );
        };

        _this.debounceTimeout = undefined;
        _this.delayTimeout = undefined;
        _this.state = {
            spinning: props.spinning
        };
        return _this;
    }

    _createClass(Spin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!(0, _isCssAnimationSupported2.default)()) {
                // Show text in IE9
                this.setState({
                    notCssAnimationSupported: true
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, 200);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else if (spinning && delay && !Number.isNaN(Number(delay))) {
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
                this.delayTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, delay);
            } else {
                this.setState({ spinning: spinning });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
        /**
         * 是否有子元素
         * 有子元素时，指示整个子元素的加载状态
         */

        /**
         * 渲染组件：自定义组件或者默认组件
         */

    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                className = _props.className,
                size = _props.size,
                prefixCls = _props.prefixCls,
                tip = _props.tip,
                wrapperClassName = _props.wrapperClassName,
                restProps = _objectWithoutProperties(_props, ['className', 'size', 'prefixCls', 'tip', 'wrapperClassName']);

            var _state = this.state,
                spinning = _state.spinning,
                notCssAnimationSupported = _state.notCssAnimationSupported;


            var spinClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-spinning', spinning), _defineProperty(_classNames, prefixCls + '-show-text', !!tip || notCssAnimationSupported), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = (0, _omit2.default)(restProps, ['spinning', 'delay', 'indicator']);
            var spinElement = React.createElement(
                'div',
                _extends({}, divProps, { className: spinClassName }),
                this.renderIndicator(),
                tip ? React.createElement(
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            // 如有子元素，包裹子元素，否则只返回加载符
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName = animateClassName + ' ' + wrapperClassName;
                }
                var containerClassName = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-container', true), _defineProperty(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return React.createElement(
                    _rcAnimate2.default,
                    _extends({}, divProps, {
                        component: 'div',
                        className: animateClassName,
                        style: null,
                        transitionName: 'fade'
                    }),
                    spinning && React.createElement(
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    React.createElement(
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);

    return Spin;
}(React.Component);

Spin.defaultProps = {
    prefixCls: 'jc-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = _extends({}, SpinProps);
exports.default = Spin;
//# sourceMappingURL=index.js.map