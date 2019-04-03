'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

// eslint校验提示变量没有被使用，暂时注释掉
// import Group from './Group';
// import Search from './Search';
// import TextArea from './TextArea';

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };

        _this.saveInput = function (node) {
            _this.input = node;
        };

        _this.input = {};
        return _this;
    }

    _createClass(Input, [{
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                size = _props.size,
                disabled = _props.disabled;

            return (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
        }
    }, {
        key: 'renderLabeledInput',
        value: function renderLabeledInput(children) {
            var _classNames3;

            var props = this.props;
            // Not wrap when there is not addons
            if (!props.addonBefore && !props.addonAfter) {
                return children;
            }

            var wrapperClassName = props.prefixCls + '-group';
            var addonClassName = wrapperClassName + '-addon';
            var addonBefore = props.addonBefore ? React.createElement(
                'span',
                { className: addonClassName },
                ' ',
                props.addonBefore,
                ' '
            ) : null;

            var addonAfter = props.addonAfter ? React.createElement(
                'span',
                { className: addonClassName },
                ' ',
                props.addonAfter,
                ' '
            ) : null;

            var className = (0, _classnames2.default)(props.prefixCls + '-wrapper', _defineProperty({}, wrapperClassName, addonBefore || addonAfter));

            var groupClassName = (0, _classnames2.default)(props.prefixCls + '-group-wrapper', (_classNames3 = {}, _defineProperty(_classNames3, props.prefixCls + '-group-wrapper-sm', props.size === 'small'), _defineProperty(_classNames3, props.prefixCls + '-group-wrapper-lg', props.size === 'large'), _classNames3));

            // Need another wrapper for changing display:table to display:inline-block
            // and put style prop in wrapper
            if (addonBefore || addonAfter) {
                return React.createElement(
                    'span',
                    {
                        className: groupClassName,
                        style: props.style
                    },
                    React.createElement(
                        'span',
                        { className: className },
                        addonBefore,
                        React.cloneElement(children, { style: null }),
                        addonAfter
                    )
                );
            }
            return React.createElement(
                'span',
                { className: className },
                addonBefore,
                children,
                addonAfter
            );
        }
    }, {
        key: 'renderLabeledIcon',
        value: function renderLabeledIcon(children) {
            var _classNames4;

            var props = this.props;

            if (!('prefix' in props || 'suffix' in props)) {
                return children;
            }

            var prefix = props.prefix ? React.createElement(
                'span',
                { className: props.prefixCls + '-prefix' },
                ' ',
                props.prefix,
                ' '
            ) : null;

            var suffix = props.suffix ? React.createElement(
                'span',
                { className: props.prefixCls + '-suffix' },
                ' ',
                props.suffix,
                ' '
            ) : null;

            var affixWrapperCls = (0, _classnames2.default)(props.className, props.prefixCls + '-affix-wrapper', (_classNames4 = {}, _defineProperty(_classNames4, props.prefixCls + '-affix-wrapper-sm', props.size === 'small'), _defineProperty(_classNames4, props.prefixCls + '-affix-wrapper-lg', props.size === 'large'), _classNames4));
            return React.createElement(
                'span',
                {
                    className: affixWrapperCls,
                    style: props.style
                },
                prefix,
                React.cloneElement(children, { style: null, className: this.getInputClassName() }),
                suffix
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _props2 = this.props,
                value = _props2.value,
                className = _props2.className;
            // Fix https://fb.me/react-unknown-prop

            var otherProps = (0, _omit2.default)(this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);

            if ('value' in this.props) {
                otherProps.value = fixControlledValue(value);
                // Input elements must be either controlled or uncontrolled,
                // specify either the value prop, or the defaultValue prop, but not both.
                delete otherProps.defaultValue;
            }
            return this.renderLabeledIcon(React.createElement('input', _extends({}, otherProps, { className: (0, _classnames2.default)(this.getInputClassName(), className), onKeyDown: this.handleKeyDown, ref: this.saveInput })));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderLabeledInput(this.renderInput());
        }
    }]);

    return Input;
}(React.Component);

Input.defaultProps = {
    prefixCls: 'jc-input',
    type: 'text',
    disabled: false
};
Input.propTypes = {
    type: _propTypes2.default.string,
    id: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    size: _propTypes2.default.oneOf(['small', 'default', 'large']),
    maxLength: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    disabled: _propTypes2.default.bool,
    value: _propTypes2.default.any,
    defaultValue: _propTypes2.default.any,
    className: _propTypes2.default.string,
    addonBefore: _propTypes2.default.node,
    addonAfter: _propTypes2.default.node,
    prefixCls: _propTypes2.default.string,
    autosize: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    onPressEnter: _propTypes2.default.func,
    onKeyDown: _propTypes2.default.func,
    onKeyUp: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onBlur: _propTypes2.default.func,
    prefix: _propTypes2.default.node,
    suffix: _propTypes2.default.node
};
exports.default = Input;
//# sourceMappingURL=Input.js.map