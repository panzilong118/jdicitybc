'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _buttonGroup = require('./button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/3/19.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isSring(str) {
    return typeof str === 'string';
}

function insertSpace(child, needInserted) {
    if (child == null) {
        return null;
    }
    var SPACE = needInserted ? ' ' : '';
    if (typeof child !== 'string' && typeof child !== 'number' && isSring(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }
    if (typeof child === 'string') {
        if (isTwoCNChar(child)) {
            child = child.split('').join(SPACE);
        }
        return React.createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

// 创建Button组件

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.handleClick = function (e) {
            _this.setState({ clicked: true });
            clearTimeout(_this.timeout);
            _this.timeout = window.setTimeout(function () {
                return _this.setState({ clicked: false });
            }, 500);

            var onClick = _this.props.onClick;

            if (onClick) {
                onClick(e);
            }
        };

        _this.state = {
            loading: props.loading,
            clicked: false,
            hasTwoCNChar: false
        };
        return _this;
    }

    _createClass(Button, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Fix for HOC usage like <FormatMessage />
            var buttonText = (0, _reactDom.findDOMNode)(this).innerText;
            if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
                this.setState({
                    hasTwoCNChar: true
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentLoading = this.props.loading;
            var loading = nextProps.loading;


            if (currentLoading) {
                clearTimeout(this.delayTimeout);
            }

            if (typeof loading !== 'boolean' && loading && loading.delay) {
                this.delayTimeout = window.setTimeout(function () {
                    return _this2.setState({ loading: loading });
                }, loading.delay);
            } else {
                this.setState({ loading: loading });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'isNeedInserted',
        value: function isNeedInserted() {
            var _props = this.props,
                loading = _props.loading,
                icon = _props.icon,
                children = _props.children;

            var iconType = loading ? 'loading' : icon;
            return React.Children.count(children) === 1 && (!iconType || iconType === 'loading');
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this3 = this;

            var _props2 = this.props,
                type = _props2.type,
                shape = _props2.shape,
                size = _props2.size,
                className = _props2.className,
                htmlType = _props2.htmlType,
                children = _props2.children,
                icon = _props2.icon,
                prefixCls = _props2.prefixCls,
                ghost = _props2.ghost,
                others = _objectWithoutProperties(_props2, ['type', 'shape', 'size', 'className', 'htmlType', 'children', 'icon', 'prefixCls', 'ghost']);

            var _state = this.state,
                loading = _state.loading,
                clicked = _state.clicked,
                hasTwoCNChar = _state.hasTwoCNChar;

            // large => lg  small => sm

            var sizeCls = ' ';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                    break;
                default:
                    sizeCls = '';
                    break;
            }
            var ComponentProp = others.herf ? 'a' : 'button';
            var classes = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + type, type), _defineProperty(_classNames, prefixCls + '-' + shape, shape), _defineProperty(_classNames, prefixCls + '-' + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + '-icon-only', !children && icon), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, prefixCls + '-clicked', clicked), _defineProperty(_classNames, prefixCls + '-background-ghost', ghost), _defineProperty(_classNames, prefixCls + '-two-chinese-chars', hasTwoCNChar), _classNames));
            var iconType = loading ? 'loading' : icon;
            var iconNode = iconType ? React.createElement(_icon2.default, { type: iconType }) : null;
            var kids = children || children === 0 ? React.Children.map(children, function (child) {
                return insertSpace(child, _this3.isNeedInserted());
            }) : null;

            return React.createElement(
                ComponentProp,
                _extends({}, (0, _omit2.default)(others, ['loading']), {
                    type: others.herf ? '' : htmlType || 'button',
                    className: classes,
                    onClick: this.handleClick
                }),
                iconNode,
                kids
            );
        }
    }]);

    return Button;
}(React.Component);

// 默认状态


Button.__JC_BUTTON = true;
exports.default = Button;
Button.defaultProps = {
    prefixCls: 'jc-btn',
    loading: false,
    ghost: false
};
// 参数类型校验
Button.propTypes = {
    ghost: _propTypes2.default.bool,
    prefixCls: _propTypes2.default.string,
    type: _propTypes2.default.string,
    shape: _propTypes2.default.oneOf(['circle', 'circle-outline']),
    size: _propTypes2.default.oneOf(['large', 'default', 'small']),
    htmlType: _propTypes2.default.oneOf(['submit', 'button', 'reset']),
    onClick: _propTypes2.default.func,
    loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    className: _propTypes2.default.string,
    icon: _propTypes2.default.string
};

Button.Group = _buttonGroup2.default;
//# sourceMappingURL=button.js.map