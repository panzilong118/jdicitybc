'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// eslint校验提示变量没有被使用，暂时注释掉
// import { InputProps } from './Input';


var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search(props) {
        _classCallCheck(this, Search);

        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

        _this.onSearch = function () {
            var onSearch = _this.props.onSearch;

            if (onSearch) {
                onSearch(_this.input.input.value);
            }
            _this.input.focus();
        };

        _this.saveInput = function (node) {
            _this.input = node;
        };

        _this.input = {};
        return _this;
    }

    _createClass(Search, [{
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
        key: 'getButtonOrIcon',
        value: function getButtonOrIcon() {
            var _props = this.props,
                enterButton = _props.enterButton,
                prefixCls = _props.prefixCls,
                size = _props.size;

            if (!enterButton) {
                return React.createElement(_icon2.default, { className: prefixCls + '-icon', type: 'search', key: 'searchIcon' });
            }
            var enterButtonAsElement = enterButton;
            if (enterButtonAsElement.type === _button2.default || enterButtonAsElement.type === 'button') {
                return React.cloneElement(enterButtonAsElement, enterButtonAsElement.type === _button2.default ? {
                    className: prefixCls + '-button',
                    size: size,
                    onClick: this.onSearch
                } : {
                    onClick: this.onSearch
                });
            }
            return React.createElement(
                _button2.default,
                {
                    className: prefixCls + '-button',
                    type: 'primary',
                    size: size,
                    onClick: this.onSearch,
                    key: 'enterButton'
                },
                enterButton === true ? React.createElement(_icon2.default, { type: 'search' }) : enterButton
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props2 = this.props,
                className = _props2.className,
                prefixCls = _props2.prefixCls,
                inputPrefixCls = _props2.inputPrefixCls,
                size = _props2.size,
                suffix = _props2.suffix,
                enterButton = _props2.enterButton,
                others = _objectWithoutProperties(_props2, ['className', 'prefixCls', 'inputPrefixCls', 'size', 'suffix', 'enterButton']);

            delete others.onSearch;
            var buttonOrIcon = this.getButtonOrIcon();
            var searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
            var inputClassName = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-enter-button', !!enterButton), _defineProperty(_classNames, prefixCls + '-' + size, !!size), _classNames));
            return React.createElement(_Input2.default, _extends({
                onPressEnter: this.onSearch
            }, others, {
                size: size,
                className: inputClassName,
                prefixCls: inputPrefixCls,
                suffix: searchSuffix,
                ref: this.saveInput
            }));
        }
    }]);

    return Search;
}(React.Component);

Search.defaultProps = {
    inputPrefixCls: 'jc-input',
    prefixCls: 'jc-input-search',
    enterButton: false
};
exports.default = Search;
//# sourceMappingURL=Search.js.map