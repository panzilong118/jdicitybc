'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file checkbox封装成一组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CheckboxGroup = function (_React$Component) {
    _inherits(CheckboxGroup, _React$Component);

    function CheckboxGroup(props) {
        _classCallCheck(this, CheckboxGroup);

        var _this = _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).call(this, props));

        _this.toggleOption = function (option) {
            var optionIndex = _this.state.value.indexOf(option.value);
            var value = [].concat(_toConsumableArray(_this.state.value));
            if (optionIndex === -1) {
                value.push(option.value);
            } else {
                value.splice(optionIndex, 1);
            }
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value);
            }
        };

        _this.state = {
            value: props.value || props.defaultValue || []
        };
        return _this;
    }
    /**
     * 向子组件checkbox传递当前checkbox组相关数据
     */


    _createClass(CheckboxGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                checkboxGroup: {
                    ghost: this.props.ghost,
                    toggleOption: this.toggleOption, // 当前操作的checkbox项目
                    value: this.state.value, // checkbox组已选中数据
                    disabled: this.props.disabled // 当前组的disabled，作用于当前组的所有checkbox
                }
            };
        }
        /**
         * 设置选中项
         */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value || []
                });
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !(0, _shallowequal2.default)(this.props, nextProps) || !(0, _shallowequal2.default)(this.state, nextState);
        }
        /**
         * 重组数据源
         */

    }, {
        key: 'getOptions',
        value: function getOptions() {
            var options = this.props.options;
            // https://github.com/Microsoft/TypeScript/issues/7960

            return options.map(function (option) {
                if (typeof option === 'string') {
                    return { label: option, value: option };
                }
                return option;
            });
        }
        /**
         * 切换当前操作项目的checked/unchecked状态
         * @param option 当前操作的checkbox选项
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                className = _props.className,
                style = _props.style,
                options = _props.options,
                ghost = _props.ghost;
            var children = this.props.children;

            if (options && options.length > 0) {
                // 输出每一项checkbox
                children = this.getOptions().map(function (option) {
                    return React.createElement(
                        _Checkbox2.default,
                        {
                            ghost: ghost,
                            key: option.value,
                            disabled: 'disabled' in option ? option.disabled : _this2.props.disabled,
                            value: option.value,
                            checked: _this2.state.value.indexOf(option.value) !== -1,
                            onChange: function onChange() {
                                return _this2.toggleOption(option);
                            },
                            className: prefixCls + '-item'
                        },
                        option.label
                    );
                });
            }

            var classString = (0, _classnames2.default)(prefixCls, className);
            return React.createElement(
                'div',
                { className: classString, style: style },
                children
            );
        }
    }]);

    return CheckboxGroup;
}(React.Component);

CheckboxGroup.defaultProps = {
    options: [],
    prefixCls: 'jc-checkbox-group',
    ghost: false
};
CheckboxGroup.propTypes = {
    prefixCls: _propTypes2.default.string,
    defaultValue: _propTypes2.default.array, // 默认选中的选项
    value: _propTypes2.default.array, // 指定选中的选项
    options: _propTypes2.default.array, // 指定可选项，数据源
    onChange: _propTypes2.default.func,
    ghost: _propTypes2.default.bool
};
CheckboxGroup.childContextTypes = {
    checkboxGroup: _propTypes2.default.any
};
exports.default = CheckboxGroup;
//# sourceMappingURL=Group.js.map