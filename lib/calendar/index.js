'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) {
    return '0' + v;
  }
  return '' + v;
}

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _initialiseProps.call(_this);

    var value = props.value || props.defaultValue || (0, _interopDefault2.default)(moment)();
    if (!(0, _interopDefault2.default)(moment).isMoment(value)) {
      throw new Error('The value/defaultValue of Calendar must be a moment object after `antd@2.0`, ' + 'see: https://u.ant.design/calendar-value');
    }
    _this.state = {
      value: value,
      mode: props.mode
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value
        });
      }
      if ('mode' in nextProps && nextProps.mode !== this.props.mode) {
        this.setState({
          mode: nextProps.mode
        });
      }
    }
  }, {
    key: 'onPanelChange',
    value: function onPanelChange(value, mode) {
      var onPanelChange = this.props.onPanelChange;

      if (onPanelChange) {
        onPanelChange(value, mode);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Calendar',
          defaultLocale: _zh_CN2.default
        },
        this.renderCalendar
      );
    }
  }]);

  return Calendar;
}(React.Component);

Calendar.defaultProps = {
  locale: {},
  fullscreen: true,
  prefixCls: _Constants.PREFIX_CLS,
  mode: 'month',
  onSelect: noop,
  onPanelChange: noop
};
Calendar.propTypes = {
  monthCellRender: _propTypes2.default.func,
  dateCellRender: _propTypes2.default.func,
  monthFullCellRender: _propTypes2.default.func,
  dateFullCellRender: _propTypes2.default.func,
  fullscreen: _propTypes2.default.bool,
  locale: _propTypes2.default.object,
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onPanelChange: _propTypes2.default.func,
  value: _propTypes2.default.object,
  onSelect: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.monthCellRender = function (value) {
    var _props = _this2.props,
        prefixCls = _props.prefixCls,
        _props$monthCellRende = _props.monthCellRender,
        monthCellRender = _props$monthCellRende === undefined ? noop : _props$monthCellRende;

    return React.createElement(
      'div',
      { className: prefixCls + '-month' },
      React.createElement(
        'div',
        { className: prefixCls + '-value' },
        value.localeData().monthsShort(value)
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-content' },
        monthCellRender(value)
      )
    );
  };

  this.dateCellRender = function (value) {
    var _props2 = _this2.props,
        prefixCls = _props2.prefixCls,
        _props2$dateCellRende = _props2.dateCellRender,
        dateCellRender = _props2$dateCellRende === undefined ? noop : _props2$dateCellRende;

    return React.createElement(
      'div',
      { className: prefixCls + '-date' },
      React.createElement(
        'div',
        { className: prefixCls + '-value' },
        zerofixed(value.date())
      ),
      React.createElement(
        'div',
        { className: prefixCls + '-content' },
        dateCellRender(value)
      )
    );
  };

  this.setValue = function (value, way) {
    if (!('value' in _this2.props)) {
      _this2.setState({ value: value });
    }
    if (way === 'select') {
      if (_this2.props.onSelect) {
        _this2.props.onSelect(value);
      }
    } else if (way === 'changePanel') {
      _this2.onPanelChange(value, _this2.state.mode);
    }
  };

  this.setType = function (type) {
    var mode = type === 'date' ? 'month' : 'year';
    if (_this2.state.mode !== mode) {
      _this2.setState({ mode: mode });
      _this2.onPanelChange(_this2.state.value, mode);
    }
  };

  this.onHeaderValueChange = function (value) {
    _this2.setValue(value, 'changePanel');
  };

  this.onHeaderTypeChange = function (type) {
    _this2.setType(type);
  };

  this.onSelect = function (value) {
    _this2.setValue(value, 'select');
  };

  this.getDateRange = function (validRange, disabledDate) {
    return function (current) {
      if (!current) {
        return false;
      }

      var _validRange = _slicedToArray(validRange, 2),
          startDate = _validRange[0],
          endDate = _validRange[1];

      var inRange = !current.isBetween(startDate, endDate, 'days', '[]');
      if (disabledDate) {
        return disabledDate(current) || inRange;
      }
      return inRange;
    };
  };

  this.renderCalendar = function (locale, localeCode) {
    var state = _this2.state,
        props = _this2.props;
    var value = state.value,
        mode = state.mode;

    if (value && localeCode) {
      value.locale(localeCode);
    }
    var prefixCls = props.prefixCls,
        style = props.style,
        className = props.className,
        fullscreen = props.fullscreen,
        dateFullCellRender = props.dateFullCellRender,
        monthFullCellRender = props.monthFullCellRender;

    var type = mode === 'year' ? 'month' : 'date';

    var cls = className || '';
    if (fullscreen) {
      cls += ' ' + prefixCls + '-fullscreen';
    }

    var monthCellRender = monthFullCellRender || _this2.monthCellRender;
    var dateCellRender = dateFullCellRender || _this2.dateCellRender;

    var disabledDate = props.disabledDate;

    if (props.validRange) {
      disabledDate = _this2.getDateRange(props.validRange, disabledDate);
    }

    return React.createElement(
      'div',
      { className: cls, style: style },
      React.createElement(_Header2.default, {
        fullscreen: fullscreen,
        type: type,
        value: value,
        locale: locale.lang,
        prefixCls: prefixCls,
        onTypeChange: _this2.onHeaderTypeChange,
        onValueChange: _this2.onHeaderValueChange,
        validRange: props.validRange
      }),
      React.createElement(_FullCalendar2.default, _extends({}, props, {
        disabledDate: disabledDate,
        Select: noop,
        locale: locale.lang,
        type: type,
        prefixCls: prefixCls,
        showHeader: false,
        value: value,
        monthCellRender: monthCellRender,
        dateCellRender: dateCellRender,
        onSelect: _this2.onSelect
      }))
    );
  };
};

exports.default = Calendar;
//# sourceMappingURL=index.js.map