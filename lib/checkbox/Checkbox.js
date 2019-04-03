'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _Checkbox$propTypes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file 二次封装rc-checkbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.4.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Checkbox = function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

        _this.focus = function () {
            _this.rcCheckbox.focus();
        };

        _this.blur = function () {
            _this.rcCheckbox.blur();
        };

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };

        _this.rcCheckbox = undefined;
        return _this;
    }
    /**
     * 浅比较，是否进行更新
     */

    /**
     * 父组件传递的checkbox组数据
     */


    _createClass(Checkbox, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState) || !(0, _shallowequal2.default)(this.context.checkboxGroup, nextContext.checkboxGroup);
        }
        /**
         * rc-checkbox 聚焦
         */

        /**
         * rc-checkbox 失焦
         */

        /**
         * 获取当前DOM元素
         */

    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                indeterminate = props.indeterminate,
                style = props.style,
                onMouseEnter = props.onMouseEnter,
                onMouseLeave = props.onMouseLeave,
                ghost = props.ghost,
                restProps = _objectWithoutProperties(props, ['prefixCls', 'className', 'children', 'indeterminate', 'style', 'onMouseEnter', 'onMouseLeave', 'ghost']);

            var checkboxGroup = context.checkboxGroup;

            var checkboxProps = _extends({}, restProps);
            if (checkboxGroup) {
                checkboxProps.onChange = function () {
                    return checkboxGroup.toggleOption({ label: children, value: props.value });
                };
                checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
                checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
            }
            var classString = (0, _classnames2.default)(className, _defineProperty({}, prefixCls + '-wrapper', true));
            var checkboxClass = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-ghost', ghost), _defineProperty(_classNames2, prefixCls + '-indeterminate', indeterminate), _classNames2));
            return React.createElement(
                'label',
                {
                    className: classString,
                    style: style,
                    onMouseEnter: onMouseEnter,
                    onMouseLeave: onMouseLeave
                },
                React.createElement(_rcCheckbox2.default, _extends({}, checkboxProps, {
                    prefixCls: prefixCls,
                    className: checkboxClass,
                    ref: this.saveCheckbox
                })),
                children !== undefined ? React.createElement(
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);

    return Checkbox;
}(React.Component);

Checkbox.defaultProps = {
    prefixCls: 'jc-checkbox',
    indeterminate: false,
    className: '',
    ghost: false
};
Checkbox.propTypes = (_Checkbox$propTypes = {
    prefixCls: _propTypes2.default.string,
    indeterminate: _propTypes2.default.bool,
    autoFocus: _propTypes2.default.bool,
    checked: _propTypes2.default.bool
}, _defineProperty(_Checkbox$propTypes, 'indeterminate', _propTypes2.default.bool), _defineProperty(_Checkbox$propTypes, 'onChange', _propTypes2.default.func), _defineProperty(_Checkbox$propTypes, 'style', _propTypes2.default.object), _defineProperty(_Checkbox$propTypes, 'className', _propTypes2.default.string), _defineProperty(_Checkbox$propTypes, 'ghost', _propTypes2.default.bool), _Checkbox$propTypes);
Checkbox.contextTypes = {
    checkboxGroup: _propTypes2.default.any
};
exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map