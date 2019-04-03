'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableChild = function (_Component) {
  (0, _inherits3.default)(TableChild, _Component);

  function TableChild() {
    (0, _classCallCheck3.default)(this, TableChild);
    return (0, _possibleConstructorReturn3.default)(this, (TableChild.__proto__ || (0, _getPrototypeOf2.default)(TableChild)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableChild, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _style2.default.goodsInfo },
        _react2.default.createElement(
          'a',
          { className: _style2.default.goodsImgLink, target: '_blank', href: '//' + this.props.host + '/search-website-view/item/' + this.props.itemId },
          _react2.default.createElement('img', { className: _style2.default.goodsImg, src: this.props.pictureUrl, alt: '' })
        ),
        _react2.default.createElement(
          'div',
          { className: _style2.default.goodsTextInfo },
          _react2.default.createElement(
            'a',
            { className: "text-link f-toe " + _style2.default.goodsName, target: '_blank', href: '//' + this.props.host + '/search-website-view/item/' + this.props.itemId, title: this.props.itemName },
            this.props.itemName
          ),
          _react2.default.createElement(
            'span',
            { className: "f-toe " + _style2.default.goodsDiscription, title: this.props.attributes },
            this.props.attributes
          )
        )
      );
    }
  }]);
  return TableChild;
}(_react.Component);

exports.default = TableChild;
module.exports = exports['default'];
//# sourceMappingURL=ItemInfo.js.map