'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcCascader = require('rc-cascader');

var _rcCascader2 = _interopRequireDefault(_rcCascader);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/4/24.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function highlightKeyword(str, keyword, prefixCls) {
    return str.split(keyword).map(function (node, index) {
        return index === 0 ? node : [React.createElement(
            'span',
            { className: prefixCls + '-menu-item-keyword', key: 'seperator' },
            keyword
        ), node];
    });
}

function defaultFilterOption(inputValue, path) {
    return path.some(function (option) {
        return option.label.indexOf(inputValue) > -1;
    });
}

function defaultRenderFilteredOption(inputValue, path, prefixCls) {
    return path.map(function (_ref, index) {
        var label = _ref.label;

        var node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
        return index === 0 ? node : [' / ', node];
    });
}

function defaultSortFilteredOption(a, b, inputValue) {
    function callback(elem) {
        return elem.label.indexOf(inputValue) > -1;
    }
    return a.findIndex(callback) - b.findIndex(callback);
}

var defaultDisplayRender = function defaultDisplayRender(label) {
    return label.join(' / ');
};

var Cascader = function (_React$Component) {
    _inherits(Cascader, _React$Component);

    function Cascader(props) {
        _classCallCheck(this, Cascader);

        var _this = _possibleConstructorReturn(this, (Cascader.__proto__ || Object.getPrototypeOf(Cascader)).call(this, props));

        _this.handleChange = function (value, selectedOptions) {
            _this.setState({ inputValue: '' });
            if (selectedOptions[0].__IS_FILTERED_OPTION) {
                var unwrappedValue = value[0];
                var unwrappedSelectedOptions = selectedOptions[0].path;
                _this.setValue(unwrappedValue, unwrappedSelectedOptions);
                return;
            }
            _this.setValue(value, selectedOptions);
        };

        _this.handlePopupVisibleChange = function (popupVisible) {
            if (!('popupVisible' in _this.props)) {
                _this.setState({
                    popupVisible: popupVisible,
                    inputFocused: popupVisible,
                    inputValue: popupVisible ? _this.state.inputValue : ''
                });
            }

            var onPopupVisibleChange = _this.props.onPopupVisibleChange;

            if (onPopupVisibleChange) {
                onPopupVisibleChange(popupVisible);
            }
        };

        _this.handleInputBlur = function () {
            _this.setState({
                inputFocused: false
            });
        };

        _this.handleInputClick = function (e) {
            var _this$state = _this.state,
                inputFocused = _this$state.inputFocused,
                popupVisible = _this$state.popupVisible;
            // Prevent `Trigger` behaviour.

            if (inputFocused || popupVisible) {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }
        };

        _this.handleKeyDown = function (e) {
            if (e.keyCode === _KeyCode2.default.BACKSPACE) {
                e.stopPropagation();
            }
        };

        _this.handleInputChange = function (e) {
            var inputValue = e.target.value;
            _this.setState({ inputValue: inputValue });
        };

        _this.setValue = function (value) {
            var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(value, selectedOptions);
            }
        };

        _this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!_this.state.inputValue) {
                _this.setValue([]);
                _this.handlePopupVisibleChange(false);
            } else {
                _this.setState({ inputValue: '' });
            }
        };

        _this.saveInput = function (node) {
            _this.input = node;
        };

        _this.state = {
            value: props.value || props.defaultValue || [],
            inputValue: '',
            inputFocused: false,
            popupVisible: props.popupVisible,
            flattenOptions: props.showSearch && _this.flattenTree(props.options, props.changeOnSelect)
        };
        _this.cachedOptions = undefined;
        _this.input = undefined;
        return _this;
    }

    _createClass(Cascader, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({ value: nextProps.value || [] });
            }
            if ('popupVisible' in nextProps) {
                this.setState({ popupVisible: nextProps.popupVisible });
            }
            if (nextProps.showSearch && this.props.options !== nextProps.options) {
                this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
            }
        }
    }, {
        key: 'getLabel',
        value: function getLabel() {
            var _props = this.props,
                options = _props.options,
                _props$displayRender = _props.displayRender,
                displayRender = _props$displayRender === undefined ? defaultDisplayRender : _props$displayRender;
            var value = this.state.value;

            var unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
            var selectedOptions = (0, _arrayTreeFilter2.default)(options, function (o, level) {
                return o.value === unwrappedValue[level];
            });
            var label = selectedOptions.map(function (o) {
                return o.label;
            });
            return displayRender(label, selectedOptions);
        }
    }, {
        key: 'flattenTree',
        value: function flattenTree(options, changeOnSelect) {
            var _this2 = this;

            var ancestor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

            var flattenOptions = [];
            options.forEach(function (option) {
                var path = ancestor.concat(option);
                if (changeOnSelect || !option.children || !option.children.length) {
                    flattenOptions.push(path);
                }
                if (option.children) {
                    flattenOptions = flattenOptions.concat(_this2.flattenTree(option.children, changeOnSelect, path));
                }
            });
            return flattenOptions;
        }
    }, {
        key: 'generateFilteredOptions',
        value: function generateFilteredOptions(prefixCls) {
            var _this3 = this;

            var _props2 = this.props,
                showSearch = _props2.showSearch,
                notFoundContent = _props2.notFoundContent;
            var _showSearch$filter = showSearch.filter,
                filter = _showSearch$filter === undefined ? defaultFilterOption : _showSearch$filter,
                _showSearch$render = showSearch.render,
                render = _showSearch$render === undefined ? defaultRenderFilteredOption : _showSearch$render,
                _showSearch$sort = showSearch.sort,
                sort = _showSearch$sort === undefined ? defaultSortFilteredOption : _showSearch$sort;
            var _state = this.state,
                flattenOptions = _state.flattenOptions,
                inputValue = _state.inputValue;

            var filtered = flattenOptions.filter(function (path) {
                return filter(_this3.state.inputValue, path);
            }).sort(function (a, b) {
                return sort(a, b, inputValue);
            });

            if (filtered.length > 0) {
                return filtered.map(function (path) {
                    return {
                        __IS_FILTERED_OPTION: true,
                        path: path,
                        label: render(inputValue, path, prefixCls),
                        value: path.map(function (o) {
                            return o.value;
                        }),
                        disabled: path.some(function (o) {
                            return o.disabled;
                        })
                    };
                });
            }
            return [{ label: notFoundContent, value: 'JC_CASCADER_NOT_FOUND', disabled: true }];
        }
    }, {
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
        key: 'render',
        value: function render() {
            var _classNames, _classNames2, _classNames3;

            var props = this.props,
                state = this.state;

            var prefixCls = props.prefixCls,
                inputPrefixCls = props.inputPrefixCls,
                children = props.children,
                placeholder = props.placeholder,
                size = props.size,
                disabled = props.disabled,
                className = props.className,
                style = props.style,
                allowClear = props.allowClear,
                _props$showSearch = props.showSearch,
                showSearch = _props$showSearch === undefined ? false : _props$showSearch,
                otherProps = _objectWithoutProperties(props, ['prefixCls', 'inputPrefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear', 'showSearch']);

            var value = state.value;


            var sizeCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, inputPrefixCls + '-lg', size === 'large'), _defineProperty(_classNames, inputPrefixCls + '-sm', size === 'small'), _classNames));
            var clearIcon = allowClear && !disabled && value.length > 0 || state.inputValue ? React.createElement(_icon2.default, {
                type: 'cross-circle',
                className: prefixCls + '-picker-clear',
                onClick: this.clearSelection
            }) : null;
            var arrowCls = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-picker-arrow', true), _defineProperty(_classNames2, prefixCls + '-picker-arrow-expand', state.popupVisible), _classNames2));
            var pickerCls = (0, _classnames2.default)(className, prefixCls + '-picker', (_classNames3 = {}, _defineProperty(_classNames3, prefixCls + '-picker-with-value', state.inputValue), _defineProperty(_classNames3, prefixCls + '-picker-disabled', disabled), _defineProperty(_classNames3, prefixCls + '-picker-' + size, !!size), _classNames3));

            // Fix bug of https://github.com/facebook/react/pull/5004
            // and https://fb.me/react-unknown-prop
            var inputProps = (0, _omit2.default)(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName', 'filterOption', 'renderFilteredOption', 'sortFilteredOption', 'notFoundContent']);

            var options = props.options;

            if (state.inputValue) {
                options = this.generateFilteredOptions(prefixCls);
            }
            // Dropdown menu should keep previous status until it is fully closed.
            if (!state.popupVisible) {
                options = this.cachedOptions;
            } else {
                this.cachedOptions = options;
            }

            var dropdownMenuColumnStyle = {};
            var isNotFound = (options || []).length === 1 && options[0].value === 'JC_CASCADER_NOT_FOUND';
            if (isNotFound) {
                dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
            }
            // The default value of `matchInputWidth` is `true`
            var resultListMatchInputWidth = Boolean(showSearch.matchInputWidth);
            // const resultListMatchInputWidth = (showSearch).matchInputWidth === false ? false : true;
            if (resultListMatchInputWidth && state.inputValue && this.input) {
                dropdownMenuColumnStyle.width = this.input.input.offsetWidth;
            }

            var input = children || React.createElement(
                'span',
                {
                    style: style,
                    className: pickerCls
                },
                React.createElement(
                    'span',
                    { className: prefixCls + '-picker-label' },
                    this.getLabel()
                ),
                React.createElement(_input2.default, _extends({}, inputProps, {
                    ref: this.saveInput,
                    prefixCls: inputPrefixCls,
                    placeholder: value && value.length > 0 ? undefined : placeholder,
                    className: prefixCls + '-input ' + sizeCls,
                    value: state.inputValue,
                    disabled: disabled,
                    readOnly: !showSearch,
                    autoComplete: 'off',
                    onClick: showSearch ? this.handleInputClick : undefined,
                    onBlur: showSearch ? this.handleInputBlur : undefined,
                    onKeyDown: this.handleKeyDown,
                    onChange: showSearch ? this.handleInputChange : undefined
                })),
                clearIcon,
                React.createElement(_icon2.default, { type: 'down', className: arrowCls })
            );

            return React.createElement(
                _rcCascader2.default,
                _extends({}, props, {
                    options: options,
                    value: value,
                    popupVisible: state.popupVisible,
                    onPopupVisibleChange: this.handlePopupVisibleChange,
                    onChange: this.handleChange,
                    dropdownMenuColumnStyle: dropdownMenuColumnStyle
                }),
                input
            );
        }
    }]);

    return Cascader;
}(React.Component);

Cascader.defaultProps = {
    prefixCls: 'jc-cascader',
    inputPrefixCls: 'jc-input',
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    options: [],
    disabled: false,
    allowClear: true,
    notFoundContent: 'Not Found'
};
exports.default = Cascader;
//# sourceMappingURL=index.js.map