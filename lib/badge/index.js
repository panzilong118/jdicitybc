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

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var statusArray = ['success', 'processing', 'default', 'error', 'warning'];

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    // 默认props
    function Badge(props) {
        _classCallCheck(this, Badge);

        var _this = _possibleConstructorReturn(this, (Badge.__proto__ || Object.getPrototypeOf(Badge)).call(this, props));

        _this.state = {};
        return _this;
    }
    // props 类型


    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2, _classNames3;

            var _props = this.props,
                count = _props.count,
                showZero = _props.showZero,
                prefixCls = _props.prefixCls,
                scrollNumberPrefixCls = _props.scrollNumberPrefixCls,
                overflowCount = _props.overflowCount,
                className = _props.className,
                style = _props.style,
                children = _props.children,
                dot = _props.dot,
                status = _props.status,
                text = _props.text,
                offset = _props.offset,
                restProps = _objectWithoutProperties(_props, ['count', 'showZero', 'prefixCls', 'scrollNumberPrefixCls', 'overflowCount', 'className', 'style', 'children', 'dot', 'status', 'text', 'offset']);

            var displayCount = count > overflowCount ? overflowCount + '+' : count;
            var isZero = displayCount === '0' || displayCount === 0;
            var isDot = dot && !isZero || status;

            // dot mode don't need count
            if (isDot) {
                displayCount = '';
            }

            var isEmpty = displayCount === null || displayCount === undefined || displayCount === '';
            var hidden = (isEmpty || isZero && !showZero) && !isDot;

            var statusCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-status-dot', !!status), _defineProperty(_classNames, prefixCls + '-status-' + status, !!status), _classNames));
            var scrollNumberCls = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-dot', isDot), _defineProperty(_classNames2, prefixCls + '-count', !isDot), _defineProperty(_classNames2, prefixCls + '-multiple-words', !isDot && count && count.toString && count.toString().length > 1), _defineProperty(_classNames2, prefixCls + '-status-' + status, !!status), _classNames2));
            var badgeCls = (0, _classnames2.default)(className, prefixCls, (_classNames3 = {}, _defineProperty(_classNames3, prefixCls + '-status', !!status), _defineProperty(_classNames3, prefixCls + '-not-a-wrapper', !children), _classNames3));
            var styleWithOffset = offset ? _extends({
                marginTop: offset[0],
                marginLeft: offset[1]
            }, style) : style;
            // <Badge status="success" />
            if (!children && status) {
                return _react2.default.createElement(
                    'span',
                    { className: badgeCls, style: styleWithOffset },
                    _react2.default.createElement('span', { className: statusCls }),
                    _react2.default.createElement(
                        'span',
                        { className: prefixCls + '-status-text' },
                        text
                    )
                );
            }

            var scrollNumber = hidden ? null : _react2.default.createElement(_ScrollNumber2.default, {
                prefixCls: scrollNumberPrefixCls,
                'data-show': !hidden,
                className: scrollNumberCls,
                count: displayCount,
                title: count,
                style: styleWithOffset
            });

            var statusText = hidden || !text ? null : _react2.default.createElement(
                'span',
                { className: prefixCls + '-status-text' },
                text
            );

            return _react2.default.createElement(
                'span',
                _extends({}, restProps, { className: badgeCls }),
                children,
                _react2.default.createElement(
                    _rcAnimate2.default,
                    {
                        component: '',
                        showProp: 'data-show',
                        transitionName: children ? prefixCls + '-zoom' : '',
                        transitionAppear: true
                    },
                    scrollNumber
                ),
                statusText
            );
        }
    }]);

    return Badge;
}(_react2.default.Component);

Badge.defaultProps = {
    prefixCls: 'jc-badge', // class前缀
    scrollNumberPrefixCls: 'jc-scroll-number',
    count: null,
    showZero: false,
    dot: false,
    overflowCount: 99,
    className: '',
    style: {},
    status: undefined,
    text: undefined,
    offset: []
};
Badge.propTypes = {
    count: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    showZero: _propTypes2.default.bool,
    dot: _propTypes2.default.bool,
    overflowCount: _propTypes2.default.number,
    status: _propTypes2.default.oneOf(statusArray),
    text: _propTypes2.default.string,
    offset: _propTypes2.default.array,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    scrollNumberPrefixCls: _propTypes2.default.string
};
exports.default = Badge;
//# sourceMappingURL=index.js.map