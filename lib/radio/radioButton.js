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

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
    _inherits(RadioButton, _React$Component);

    function RadioButton(props) {
        _classCallCheck(this, RadioButton);

        var _this = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = _extends({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }

            return _react2.default.createElement(_radio2.default, radioProps);
        }
    }]);

    return RadioButton;
}(_react2.default.Component);

RadioButton.defaultProps = {
    prefixCls: 'jc-radio-button'
};
RadioButton.propTypes = {
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
    size: _propTypes2.default.oneOf(['large', 'default', 'small']),
    id: _propTypes2.default.string

};
RadioButton.contextTypes = {
    radioGroup: _propTypes2.default.any
};
exports.default = RadioButton;
//# sourceMappingURL=radioButton.js.map