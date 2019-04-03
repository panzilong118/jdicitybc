'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LocaleProviderProps = exports.Locale = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var moment = _interopRequireWildcard(_moment);

var _interopDefault = require('../_util/interopDefault');

var _interopDefault2 = _interopRequireDefault(_interopDefault);

var _locale = require('../modal/locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author chenyanhua
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.4.1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Locale = exports.Locale = {
  locale: _propTypes2.default.string.isRequired,
  Pagination: _propTypes2.default.object,
  DatePicker: _propTypes2.default.object,
  TimePicker: _propTypes2.default.object,
  Calendar: _propTypes2.default.object,
  Table: _propTypes2.default.object,
  Modal: _propTypes2.default.shape(_locale.ModalLocale),
  Popconfirm: _propTypes2.default.object,
  Transfer: _propTypes2.default.object,
  Select: _propTypes2.default.object,
  Upload: _propTypes2.default.object
};

var LocaleProviderProps = exports.LocaleProviderProps = {
  locale: _propTypes2.default.shape(Locale),
  children: _propTypes2.default.any
};

function setMomentLocale(locale) {
  if (locale && locale.locale) {
    (0, _interopDefault2.default)(moment).locale(locale.locale);
  } else {
    (0, _interopDefault2.default)(moment).locale('en');
  }
}

var LocaleProvider = function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  function LocaleProvider(props) {
    _classCallCheck(this, LocaleProvider);

    var _this = _possibleConstructorReturn(this, (LocaleProvider.__proto__ || Object.getPrototypeOf(LocaleProvider)).call(this, props));

    setMomentLocale(props.locale);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    return _this;
  }

  _createClass(LocaleProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        jcLocale: _extends({}, this.props.locale, {
          exist: true
        })
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var locale = this.props.locale;

      var nextLocale = nextProps.locale;
      if (locale !== nextLocale) {
        setMomentLocale(nextProps.locale);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var locale = this.props.locale;

      (0, _locale.changeConfirmLocale)(locale && locale.Modal);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.Children.only(this.props.children);
    }
  }]);

  return LocaleProvider;
}(React.Component);

LocaleProvider.propTypes = _extends({}, LocaleProviderProps, {
  locale: _propTypes2.default.object
});
LocaleProvider.defaultProps = {
  locale: {}
};
LocaleProvider.childContextTypes = {
  jcLocale: _propTypes2.default.object
};
exports.default = LocaleProvider;
//# sourceMappingURL=index.js.map