'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.SwitchProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcSwitch = require('rc-switch');

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwitchProps = exports.SwitchProps = {
    prefixCls: _propTypes2.default.string,
    size: _propTypes2.default.oneOf(['small', 'default', 'large']),
    className: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    defaultChecked: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    checkedChildren: _propTypes2.default.node,
    unCheckedChildren: _propTypes2.default.node,
    disabled: _propTypes2.default.bool,
    loading: _propTypes2.default.bool
};

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

        _this.saveSwitch = function (node) {
            _this.rcSwitch = node;
        };

        _this.rcSwitch = undefined;
        return _this;
    }

    _createClass(Switch, [{
        key: 'focus',
        value: function focus() {
            this.rcSwitch.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSwitch.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                loading = _props.loading,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className;

            var classes = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-small', size === 'small'), _defineProperty(_classNames, prefixCls + '-loading', loading), _classNames));
            return React.createElement(_rcSwitch2.default, _extends({}, (0, _omit2.default)(this.props, ['loading']), {
                className: classes,
                ref: this.saveSwitch
            }));
        }
    }]);

    return Switch;
}(React.Component);

Switch.defaultProps = {
    prefixCls: 'jc-switch'
};
Switch.propTypes = _extends({}, SwitchProps, {
    prefixCls: _propTypes2.default.string,
    // HACK: https://github.com/ant-design/ant-design/issues/5368
    // size=default and size=large are the same
    size: _propTypes2.default.oneOf(['small', 'default', 'large']),
    className: _propTypes2.default.string
});
exports.default = Switch;
//# sourceMappingURL=index.js.map