'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _Constants = require('./Constants');

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('../radio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.onYearChange = function (year) {
      var _this$props = _this.props,
          value = _this$props.value,
          validRange = _this$props.validRange;

      var newValue = value.clone();
      newValue.year(parseInt(year, 10));
      // switch the month so that it remains within range when year changes
      if (validRange) {
        var _validRange = _slicedToArray(validRange, 2),
            start = _validRange[0],
            end = _validRange[1];

        var newYear = newValue.get('year');
        var newMonth = newValue.get('month');
        if (newYear === end.get('year') && newMonth > end.get('month')) {
          newValue.month(end.get('month'));
        }
        if (newYear === start.get('year') && newMonth < start.get('month')) {
          newValue.month(start.get('month'));
        }
      }

      var onValueChange = _this.props.onValueChange;
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onMonthChange = function (month) {
      var newValue = _this.props.value.clone();
      newValue.month(parseInt(month, 10));
      var onValueChange = _this.props.onValueChange;
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    _this.onTypeChange = function (e) {
      var onTypeChange = _this.props.onTypeChange;
      if (onTypeChange) {
        onTypeChange(e.target.value);
      }
    };

    _this.getCalenderHeaderNode = function (node) {
      _this.calenderHeaderNode = node;
    };

    _this.calenderHeaderNode = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'getYearSelectElement',
    value: function getYearSelectElement(year) {
      var _this2 = this;

      var _props = this.props,
          yearSelectOffset = _props.yearSelectOffset,
          yearSelectTotal = _props.yearSelectTotal,
          locale = _props.locale,
          prefixCls = _props.prefixCls,
          fullscreen = _props.fullscreen,
          validRange = _props.validRange;

      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      if (validRange) {
        start = validRange[0].get('year');
        end = validRange[1].get('year') + 1;
      }
      var suffix = locale.year === '年' ? '年' : '';
      var options = [];
      for (var index = start; index < end; index++) {
        options.push(React.createElement(
          Option,
          { key: '' + index },
          index + suffix
        ));
      }
      return React.createElement(
        _select2.default,
        {
          size: fullscreen ? 'default' : 'small',
          dropdownMatchSelectWidth: false,
          className: prefixCls + '-year-select',
          onChange: this.onYearChange,
          value: String(year),
          getPopupContainer: function getPopupContainer() {
            return _this2.calenderHeaderNode;
          }
        },
        options
      );
    }
  }, {
    key: 'getMonthsLocale',
    value: function getMonthsLocale(value) {
      var current = value.clone();
      var localeData = value.localeData();
      var months = [];
      for (var i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }
      return months;
    }
  }, {
    key: 'getMonthSelectElement',
    value: function getMonthSelectElement(month, months) {
      var _this3 = this;

      var props = this.props;
      var prefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          validRange = props.validRange,
          value = props.value;

      var options = [];
      var start = 0;
      var end = 12;
      if (validRange) {
        var _validRange2 = _slicedToArray(validRange, 2),
            rangeStart = _validRange2[0],
            rangeEnd = _validRange2[1];

        var currentYear = value.get('year');
        if (rangeEnd.get('year') === currentYear) {
          end = rangeEnd.get('month') + 1;
        } else {
          start = rangeStart.get('month');
        }
      }
      for (var index = start; index < end; index++) {
        options.push(React.createElement(
          Option,
          { key: '' + index },
          months[index]
        ));
      }
      return React.createElement(
        _select2.default,
        {
          size: fullscreen ? 'default' : 'small',
          dropdownMatchSelectWidth: false,
          className: prefixCls + '-month-select',
          value: String(month),
          onChange: this.onMonthChange,
          getPopupContainer: function getPopupContainer() {
            return _this3.calenderHeaderNode;
          }
        },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          value = _props2.value,
          prefixCls = _props2.prefixCls,
          locale = _props2.locale,
          fullscreen = _props2.fullscreen;

      var yearSelect = this.getYearSelectElement(value.year());
      var monthSelect = type === 'date' ? this.getMonthSelectElement(value.month(), this.getMonthsLocale(value)) : null;
      var size = fullscreen ? 'default' : 'small';
      var typeSwitch = React.createElement(
        _radio.Group,
        { onChange: this.onTypeChange, value: type, size: size },
        React.createElement(
          _radio.Button,
          { value: 'date' },
          locale.month
        ),
        React.createElement(
          _radio.Button,
          { value: 'month' },
          locale.year
        )
      );

      return React.createElement(
        'div',
        { className: prefixCls + '-header', ref: this.getCalenderHeaderNode },
        yearSelect,
        monthSelect,
        typeSwitch
      );
    }
  }]);

  return Header;
}(React.Component);

Header.defaultProps = {
  prefixCls: _Constants.PREFIX_CLS + '-header',
  yearSelectOffset: 10,
  yearSelectTotal: 20
};
exports.default = Header;
//# sourceMappingURL=Header.js.map