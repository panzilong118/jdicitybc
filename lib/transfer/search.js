'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author panzilong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e) {
      var onChange = _this.props.onChange;
      if (onChange) {
        onChange(e);
      }
    }, _this.handleClear = function (e) {
      e.preventDefault();

      var handleClear = _this.props.handleClear;
      if (handleClear) {
        handleClear(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          value = _props.value,
          prefixCls = _props.prefixCls;

      var icon = value && value.length > 0 ? React.createElement(
        'a',
        { href: '#', className: prefixCls + '-action', onClick: this.handleClear },
        React.createElement(_icon2.default, { type: 'cross-circle' })
      ) : React.createElement(
        'span',
        { className: prefixCls + '-action' },
        React.createElement(_icon2.default, { type: 'search' })
      );

      return React.createElement(
        'div',
        null,
        React.createElement(_input2.default, {
          placeholder: placeholder,
          className: prefixCls,
          value: value,
          ref: 'input',
          onChange: this.handleChange
        }),
        icon
      );
    }
  }]);

  return Search;
}(React.Component);

Search.defaultProps = {
  placeholder: ''
};
exports.default = Search;
//# sourceMappingURL=search.js.map