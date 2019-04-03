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

var _rcRate = require('rc-rate');

var _rcRate2 = _interopRequireDefault(_rcRate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gaoqingli on 2018/4/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Rate = function (_React$Component) {
  _inherits(Rate, _React$Component);

  // static rcRate;

  function Rate(props) {
    _classCallCheck(this, Rate);

    var _this = _possibleConstructorReturn(this, (Rate.__proto__ || Object.getPrototypeOf(Rate)).call(this, props));

    _this.saveRate = function (node) {
      _this.rcRate = node;
    };

    _this.rcRate = undefined;
    return _this;
  }

  _createClass(Rate, [{
    key: 'focus',
    value: function focus() {
      this.rcRate.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.rcRate.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(_rcRate2.default, _extends({ ref: this.saveRate }, this.props));
    }
  }]);

  return Rate;
}(React.Component);

Rate.propTypes = {
  prefixCls: _propTypes2.default.string,
  character: _propTypes2.default.node
};
Rate.defaultProps = {
  prefixCls: 'jc-rate',
  character: React.createElement(_icon2.default, { type: 'star' })
};
exports.default = Rate;
//# sourceMappingURL=index.js.map