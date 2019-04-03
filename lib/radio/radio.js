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

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _radioButton = require('./radioButton');

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = function (_React$Component) {
    _inherits(Radio, _React$Component);

    function Radio() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Radio);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Radio.__proto__ || Object.getPrototypeOf(Radio)).call.apply(_ref, [this].concat(args))), _this), _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState) || !(0, _shallowequal2.default)(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = _objectWithoutProperties(props, ['prefixCls', 'className', 'children', 'style']);

            var radioGroup = context.radioGroup;

            var radioProps = _extends({}, restProps);
            if (radioGroup) {
                radioProps.name = radioGroup.name;
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-wrapper', true), _defineProperty(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), _defineProperty(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));

            return _react2.default.createElement(
                'label',
                {
                    className: wrapperClassString,
                    style: style,
                    onMouseEnter: props.onMouseEnter,
                    onMouseLeave: props.onMouseLeave
                },
                _react2.default.createElement(_rcCheckbox2.default, _extends({}, radioProps, {
                    prefixCls: prefixCls,
                    ref: this.saveCheckbox
                })),
                children !== undefined ? _react2.default.createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);

    return Radio;
}(_react2.default.Component);

Radio.defaultProps = {
    prefixCls: 'jc-radio',
    type: 'radio'
};
Radio.propTypes = {
    checked: _propTypes2.default.bool,
    prefixCls: _propTypes2.default.string,
    className: _propTypes2.default.string,
    defaultChecked: _propTypes2.default.bool,
    style: {},
    disabled: _propTypes2.default.bool,
    onChange: function onChange() {},
    onMouseEnter: _react2.default.MouseEventHandler,
    onMouseLeave: _react2.default.MouseEventHandler,
    onKeyPress: _react2.default.KeyboardEventHandler,
    onKeyDown: _react2.default.KeyboardEventHandler,
    value: _propTypes2.default.any,
    tabIndex: _propTypes2.default.number,
    name: _propTypes2.default.string,
    children: _propTypes2.default.node,
    type: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(['large', 'default', 'small']),
    id: _propTypes2.default.string

};
Radio.contextTypes = {
    radioGroup: _propTypes2.default.any
};
exports.default = Radio;


Radio.propTypes = {
    Group: _propTypes2.default.instanceOf(_group2.default),
    Button: _propTypes2.default.instanceOf(_radioButton2.default)
};
//# sourceMappingURL=radio.js.map