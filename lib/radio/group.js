'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getCheckedValue(children) {
    var value = null;
    var matched = false;
    _react2.default.Children.forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            var valueAssist = radio.props.value;
            value = valueAssist;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    _inherits(RadioGroup, _React$Component);

    function RadioGroup(props) {
        _classCallCheck(this, RadioGroup);

        var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;
        if ('value' in props) {
            var valueAssistSecord = props.value;
            value = valueAssistSecord;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    _createClass(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled,
                    name: this.props.name
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var options = props.options,
                size = props.size;

            var prefixCls = props.prefixCls || 'jc-radio-group';
            var className = props.prefixCls || '';
            var classString = (0, _classnames2.default)(prefixCls, _defineProperty({}, prefixCls + '-' + size, size), className);

            var children = props.children;

            // 如果存在 options, 优先使用

            if (options && options.length > 0) {
                children = options.map(function (option) {
                    if (typeof option === 'string') {
                        // 此处类型自动推导为 string
                        return _react2.default.createElement(
                            _radio2.default,
                            {
                                key: option.value // key值原取为{index},ESLint校验key值不可以为index
                                , disabled: _this2.props.disabled,
                                value: option,
                                onChange: _this2.onRadioChange,
                                checked: _this2.state.value === option
                            },
                            option
                        );
                    } // 此处类型自动推导为 { label: string value: string }
                    return _react2.default.createElement(
                        _radio2.default,
                        {
                            key: option.value,
                            disabled: option.disabled || _this2.props.disabled,
                            value: option.value,
                            onChange: _this2.onRadioChange,
                            checked: _this2.state.value === option.value
                        },
                        option.label
                    );
                });
            }

            return _react2.default.createElement(
                'div',
                {
                    className: classString,
                    style: props.style,
                    onMouseEnter: props.onMouseEnter,
                    onMouseLeave: props.onMouseLeave,
                    id: props.id
                },
                children
            );
        }
    }]);

    return RadioGroup;
}(_react2.default.Component);

RadioGroup.defaultProps = {
    disabled: false
};
RadioGroup.propTypes = {
    defaultValue: _propTypes2.default.any,
    value: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    // size: PropTypes.oneOf(['large', 'default', 'small']),
    // onMouseEnter: React.MouseEventHandler,
    // onMouseLeave: React.MouseEventHandler,
    name: _propTypes2.default.string,
    children: _propTypes2.default.node,
    // id: PropTypes.string,
    disabled: _propTypes2.default.bool
};
RadioGroup.childContextTypes = {
    radioGroup: _propTypes2.default.any
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.onRadioChange = function (ev) {
        var lastValue = _this3.state.value;
        var value = ev.target.value;

        if (!('value' in _this3.props)) {
            _this3.setState({
                value: value
            });
        }

        var onChange = _this3.props.onChange;

        if (onChange && value !== lastValue) {
            onChange(ev);
        }
    };
};

exports.default = RadioGroup;
//# sourceMappingURL=group.js.map