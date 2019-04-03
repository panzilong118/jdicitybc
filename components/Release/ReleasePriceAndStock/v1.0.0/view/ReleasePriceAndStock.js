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

var _view = require('../../../PriceSaleMode/v1.0.0/view');

var _view2 = _interopRequireDefault(_view);

var _view3 = require('../../../PriceStockTable/v1.0.0/view');

var _view4 = _interopRequireDefault(_view3);

require('./price.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 发布商品-价格及库存Tab组件
 */
var ReleasePriceAndStock = function (_Component) {
  (0, _inherits3.default)(ReleasePriceAndStock, _Component);

  function ReleasePriceAndStock(props) {
    (0, _classCallCheck3.default)(this, ReleasePriceAndStock);
    return (0, _possibleConstructorReturn3.default)(this, (ReleasePriceAndStock.__proto__ || (0, _getPrototypeOf2.default)(ReleasePriceAndStock)).call(this, props));
  }

  (0, _createClass3.default)(ReleasePriceAndStock, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_view2.default, {
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        _react2.default.createElement(_view4.default, {
          edit: this.props.edit,
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction })
      );
    }
  }]);
  return ReleasePriceAndStock;
}(_react.Component);

exports.default = ReleasePriceAndStock;
module.exports = exports['default'];
//# sourceMappingURL=ReleasePriceAndStock.js.map