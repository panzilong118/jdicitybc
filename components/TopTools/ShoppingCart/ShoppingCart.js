'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

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

var _dec, _class; /* *************************
                   * @author: FengYan
                   * @update: 20180206
                   * @description:进货车
                   * ************************/

/* ***********  基础组件  ************ */

/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _shoppingCart_redux = require('./shoppingCart_redux');

var _shoppingCart_redux2 = _interopRequireDefault(_shoppingCart_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ***********  redux  ************ */
var ShoppingCart = (_dec = (0, _reactRedux.connect)(function (state) {
  return _shoppingCart_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getShoppingCartCountAction: _shoppingCart_redux.getShoppingCartCountAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ShoppingCart, _Component);

  function ShoppingCart(props) {
    (0, _classCallCheck3.default)(this, ShoppingCart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShoppingCart.__proto__ || (0, _getPrototypeOf2.default)(ShoppingCart)).call(this, props));

    _this.state = {
      cartCount: 0
    };
    return _this;
  }

  /*
   * 发送获取购物车数据请求
   * */


  (0, _createClass3.default)(ShoppingCart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getShoppingCartCountAction().then(function (rs) {
        if (rs.code != 0) return;
        _this2.setState({ cartCount: rs.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'a',
        { href: '//' + this.props.defaultDomain + '/website-view/cart', className: 'signName f-pr' },
        _react2.default.createElement(_icon2.default, { type: 'shopping-cart', className: 'f-fs18 shopping-cart' }),
        this.state.cartCount > 0 && _react2.default.createElement(
          'span',
          { className: 'badge' },
          this.state.cartCount > '99' ? '99' : this.state.cartCount
        )
      );
    }
  }]);
  return ShoppingCart;
}(_react.Component)) || _class);
exports.default = ShoppingCart;
module.exports = exports['default'];
//# sourceMappingURL=ShoppingCart.js.map