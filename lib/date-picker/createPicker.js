'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createPicker(TheCalendar) {
    var _class, _temp, _initialiseProps;

    return _temp = _class = function (_React$Component) {
        _inherits(CalenderWrapper, _React$Component);

        function CalenderWrapper(props) {
            _classCallCheck(this, CalenderWrapper);

            var _this = _possibleConstructorReturn(this, (CalenderWrapper.__proto__ || Object.getPrototypeOf(CalenderWrapper)).call(this, props));

            _initialiseProps.call(_this);

            var value = props.value || props.defaultValue;
            if (value && !(0, _interopDefault2.default)(_moment2.default).isMoment(value)) {
                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `jc@1.0`, see: https://u.ant.design/date-picker-value');
            }
            _this.state = {
                value: value,
                showDate: value
            };
            return _this;
        }

        _createClass(CalenderWrapper, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if ('value' in nextProps) {
                    this.setState({
                        value: nextProps.value,
                        showDate: nextProps.value
                    });
                }
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
                var _classNames,
                    _this2 = this;

                var _state = this.state,
                    value = _state.value,
                    showDate = _state.showDate;

                var props = (0, _omit2.default)(this.props, ['onChange']);
                var prefixCls = props.prefixCls,
                    locale = props.locale,
                    localeCode = props.localeCode;


                var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;

                var disabledTime = props.showTime ? props.disabledTime : null;

                var calendarClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-time', props.showTime), _defineProperty(_classNames, prefixCls + '-month', _MonthCalendar2.default === TheCalendar), _classNames));

                if (value && localeCode) {
                    value.locale(localeCode);
                }

                var pickerProps = {};
                var calendarProps = {};
                if (props.showTime) {
                    calendarProps = {
                        // fix https://github.com/ant-design/ant-design/issues/1902
                        onSelect: this.handleChange
                    };
                } else {
                    pickerProps = {
                        onChange: this.handleChange
                    };
                }
                if ('mode' in props) {
                    calendarProps.mode = props.mode;
                }

                (0, _warning2.default)(!('onOK' in props), 'It should be `DatePicker[onOk]` or `MonthPicker[onOk]`, instead of `onOK`!');
                var calendar = _react2.default.createElement(TheCalendar, _extends({}, calendarProps, {
                    disabledDate: props.disabledDate,
                    disabledTime: disabledTime,
                    locale: locale.lang,
                    timePicker: props.timePicker,
                    defaultValue: props.defaultPickerValue || (0, _interopDefault2.default)(_moment2.default)(),
                    dateInputPlaceholder: placeholder,
                    prefixCls: prefixCls,
                    className: calendarClassName,
                    onOk: props.onOk,
                    dateRender: props.dateRender,
                    format: props.format,
                    showToday: props.showToday,
                    monthCellContentRender: props.monthCellContentRender,
                    renderFooter: this.renderFooter,
                    onPanelChange: props.onPanelChange,
                    onChange: this.handleCalendarChange,
                    value: showDate
                }));

                var clearIcon = !props.disabled && props.allowClear && value ? _react2.default.createElement(_icon2.default, {
                    type: 'cross-circle',
                    className: prefixCls + '-picker-clear',
                    onClick: this.clearSelection
                }) : null;

                var input = function input(_ref) {
                    var inputValue = _ref.value;
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('input', {
                            ref: _this2.saveInput,
                            disabled: props.disabled,
                            readOnly: true,
                            value: inputValue && inputValue.format(props.format) || '',
                            placeholder: placeholder,
                            className: props.pickerInputClass
                        }),
                        clearIcon,
                        _react2.default.createElement('span', { className: prefixCls + '-picker-icon' })
                    );
                };

                return _react2.default.createElement(
                    'span',
                    {
                        id: props.id,
                        className: (0, _classnames2.default)(props.className, props.pickerClass),
                        style: props.style,
                        onFocus: props.onFocus,
                        onBlur: props.onBlur
                    },
                    _react2.default.createElement(
                        _Picker2.default,
                        _extends({}, props, pickerProps, {
                            calendar: calendar,
                            value: value,
                            prefixCls: prefixCls + '-picker-container',
                            style: props.popupStyle
                        }),
                        input
                    )
                );
            }
        }]);

        return CalenderWrapper;
    }(_react2.default.Component), _class.defaultProps = {
        prefixCls: 'jc-calendar',
        allowClear: true,
        showToday: true
    }, _class.propTypes = {
        value: _propTypes2.default.object,
        prefixCls: _propTypes2.default.string,
        allowClear: _propTypes2.default.bool,
        showToday: _propTypes2.default.bool
    }, _initialiseProps = function _initialiseProps() {
        var _this3 = this;

        this.clearSelection = function (e) {
            e.preventDefault();
            e.stopPropagation();
            _this3.handleChange(null);
        };

        this.handleChange = function (value) {
            var props = _this3.props;

            if (!('value' in props)) {
                _this3.setState({
                    value: value,
                    showDate: value
                });
            }
            props.onChange(value, value && value.format(props.format) || '');
        };

        this.handleCalendarChange = function (value) {
            _this3.setState({ showDate: value });
        };

        this.saveInput = function (node) {
            _this3.input = node;
        };

        this.renderFooter = function () {
            var _props = _this3.props,
                prefixCls = _props.prefixCls,
                renderExtraFooter = _props.renderExtraFooter;

            return renderExtraFooter ? _react2.default.createElement(
                'div',
                { className: prefixCls + '-footer-extra' },
                renderExtraFooter.apply(undefined, arguments)
            ) : null;
        };
    }, _temp;
}
//# sourceMappingURL=createPicker.js.map