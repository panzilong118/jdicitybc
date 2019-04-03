'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcEditorMention = require('rc-editor-mention');

var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/4/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Mention = function (_React$Component) {
    _inherits(Mention, _React$Component);

    function Mention(props) {
        _classCallCheck(this, Mention);

        var _this = _possibleConstructorReturn(this, (Mention.__proto__ || Object.getPrototypeOf(Mention)).call(this, props));

        _this.onSearchChange = function (value, prefix) {
            if (_this.props.onSearchChange) {
                return _this.props.onSearchChange(value, prefix);
            }
            return _this.defaultSearchChange(value);
        };

        _this.onChange = function (editorState) {
            if (_this.props.onChange) {
                _this.props.onChange(editorState);
            }
        };

        _this.onFocus = function (ev) {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus(ev);
            }
        };

        _this.onBlur = function (ev) {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur(ev);
            }
        };

        _this.focus = function () {
            _this.mentionEle._editor.focusEditor();
        };

        _this.mentionRef = function (ele) {
            _this.mentionEle = ele;
        };

        _this.state = {
            suggestions: props.suggestions,
            focus: false
        };
        _this.mentionEle = undefined;
        return _this;
    }

    _createClass(Mention, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var suggestions = nextProps.suggestions;

            if (!(0, _shallowequal2.default)(suggestions, this.props.suggestions)) {
                this.setState({
                    suggestions: suggestions
                });
            }
        }
    }, {
        key: 'defaultSearchChange',
        value: function defaultSearchChange(value) {
            var searchValue = value.toLowerCase();
            var filteredSuggestions = (this.props.suggestions || []).filter(function (suggestion) {
                if (suggestion.type && suggestion.type === _rcEditorMention.Nav) {
                    return suggestion.props.value ? suggestion.props.value.toLowerCase().indexOf(searchValue) !== -1 : true;
                }
                return suggestion.toLowerCase().indexOf(searchValue) !== -1;
            });
            this.setState({ suggestions: filteredSuggestions });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                prefixCls = _props.prefixCls,
                loading = _props.loading,
                placement = _props.placement;
            var _state = this.state,
                suggestions = _state.suggestions,
                focus = _state.focus;

            var cls = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-active', focus), _defineProperty(_classNames, prefixCls + '-placement-top', placement === 'top'), _classNames));

            var notFoundContent = loading ? React.createElement(_icon2.default, { type: 'loading' }) : this.props.notFoundContent;

            return React.createElement(_rcEditorMention2.default, _extends({}, this.props, {
                className: cls,
                ref: this.mentionRef,
                onSearchChange: this.onSearchChange,
                onChange: this.onChange,
                onFocus: this.onFocus,
                onBlur: this.onBlur,
                suggestions: suggestions,
                notFoundContent: notFoundContent
            }));
        }
    }]);

    return Mention;
}(React.Component);

Mention.getMentions = _rcEditorMention.getMentions;
Mention.defaultProps = {
    prefixCls: 'jc-mention',
    notFoundContent: '无匹配结果，轻敲空格完成输入',
    loading: false,
    multiLines: false,
    placement: 'bottom'
};
Mention.Nav = _rcEditorMention.Nav;
Mention.toString = _rcEditorMention.toString;
Mention.toContentState = _rcEditorMention.toEditorState;
exports.default = Mention;
//# sourceMappingURL=index.js.map