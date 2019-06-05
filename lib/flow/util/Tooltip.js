'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = require('antd/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/tooltip/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getType = require('uc-fun/getType');

var _getType2 = _interopRequireDefault(_getType);

var _stringRealLen = require('uc-fun/stringRealLen');

var _stringRealLen2 = _interopRequireDefault(_stringRealLen);

var _stringEllipsis = require('uc-fun/stringEllipsis');

var _stringEllipsis2 = _interopRequireDefault(_stringEllipsis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tooltip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <Tooltip
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    title={title}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    limit={20}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    className={}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    render={}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    placement=right
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var UCToolTip = function (_React$Component) {
  _inherits(UCToolTip, _React$Component);

  function UCToolTip() {
    _classCallCheck(this, UCToolTip);

    return _possibleConstructorReturn(this, (UCToolTip.__proto__ || Object.getPrototypeOf(UCToolTip)).apply(this, arguments));
  }

  _createClass(UCToolTip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          limit = _props.limit,
          className = _props.className,
          render = _props.render,
          props = _objectWithoutProperties(_props, ['title', 'limit', 'className', 'render']);

      var outOfRange = (0, _stringRealLen2.default)(title) > limit;

      var limitTitle = (0, _stringEllipsis2.default)(title, limit);
      var content = (0, _getType2.default)(render) === 'Function' ? render(limitTitle) : _react2.default.createElement(
        'span',
        { className: className },
        limitTitle
      );

      return outOfRange ? _react2.default.createElement(
        _tooltip2.default,
        _extends({ title: title }, props),
        content
      ) : content;
    }
  }]);

  return UCToolTip;
}(_react2.default.Component);

exports.default = UCToolTip;
//# sourceMappingURL=Tooltip.js.map