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

require('./style/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * author:chenqi
 * date:2017-09-06
 * description:table列表页面 商品信息展示。只涉及商品图片 商品名称 销售属性展示。
 * params:所需参数：itemInfo(包含：itemId、itemName、pictureUrl、attributes)、mainDomain(用于跳转商品详情页，所需要的域名。不在此组件中查询，考虑不少列表页已经获取该域名。)
 */
var TableItemInfo = function (_Component) {
  (0, _inherits3.default)(TableItemInfo, _Component);

  function TableItemInfo(props, context) {
    (0, _classCallCheck3.default)(this, TableItemInfo);
    return (0, _possibleConstructorReturn3.default)(this, (TableItemInfo.__proto__ || (0, _getPrototypeOf2.default)(TableItemInfo)).call(this, props, context));
  }

  (0, _createClass3.default)(TableItemInfo, [{
    key: 'render',
    value: function render() {
      var itemInfo = this.props.itemInfo;
      var mainDomain = this.props.mainDomain;
      return _react2.default.createElement(
        'div',
        { className: 'table-item-info' },
        _react2.default.createElement(
          'a',
          { href: '//' + mainDomain + '/search-website-view/item/' + itemInfo.itemId, target: '_blank', className: 'text-link' },
          _react2.default.createElement('img', { src: itemInfo.pictureUrl, className: 'item-img' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'item-info' },
          _react2.default.createElement(
            'a',
            { href: '//' + mainDomain + '/search-website-view/item/' + itemInfo.itemId, target: '_blank', className: 'text-link' },
            _react2.default.createElement(
              'p',
              { className: 'item-name', title: itemInfo.itemName },
              itemInfo.itemName
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'p',
            { className: 'text-333' },
            itemInfo.attributes
          )
        )
      );
    }
  }]);
  return TableItemInfo;
}(_react.Component);

exports.default = TableItemInfo;
module.exports = exports['default'];
//# sourceMappingURL=TableItemInfo.js.map