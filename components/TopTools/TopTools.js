'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
                   * @description:采购部、供应商、店铺顶端菜单
                   * ************************/

/* ***********  基础组件  ************ */

/* ***********  自定义组件  ************ */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _ChooseLocal = require('./ChooseLocal/ChooseLocal');

var _ChooseLocal2 = _interopRequireDefault(_ChooseLocal);

var _UserInfo = require('./UserInfo/UserInfo');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _CompanyInfo = require('./CompanyInfo/CompanyInfo');

var _CompanyInfo2 = _interopRequireDefault(_CompanyInfo);

var _ShopInfo = require('./ShopInfo/ShopInfo');

var _ShopInfo2 = _interopRequireDefault(_ShopInfo);

var _MyMall = require('./MyMall/MyMall');

var _MyMall2 = _interopRequireDefault(_MyMall);

var _ShoppingCart = require('./ShoppingCart/ShoppingCart');

var _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);

var _MyOrder = require('./MyOrder/MyOrder');

var _MyOrder2 = _interopRequireDefault(_MyOrder);

var _MyMessage = require('./MyMessage/MyMessage');

var _MyMessage2 = _interopRequireDefault(_MyMessage);

var _MobileMall = require('./MobileMall/MobileMall');

var _MobileMall2 = _interopRequireDefault(_MobileMall);

var _IndexLinkBtn = require('./IndexLinkBtn/IndexLinkBtn');

var _IndexLinkBtn2 = _interopRequireDefault(_IndexLinkBtn);

var _getUrl_redux = require('./redux/getUrl_redux');

var _getUrl_redux2 = _interopRequireDefault(_getUrl_redux);

require('./styles/toptools.less');

var _CompanyLayer = require('./CompanyLayer/CompanyLayer');

var _CompanyLayer2 = _interopRequireDefault(_CompanyLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var company = new _CompanyLayer2.default();

/* ***********  redux  ************ */
var TopTools = (_dec = (0, _reactRedux.connect)(function (state) {
  return _getUrl_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getUrlAction: _getUrl_redux.getUrlAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(TopTools, _Component);

  function TopTools(props) {
    (0, _classCallCheck3.default)(this, TopTools);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TopTools.__proto__ || (0, _getPrototypeOf2.default)(TopTools)).call(this, props));

    _this.state = {
      shop: '',
      buyer: '',
      platform: '',
      defaultDomain: ''
    };
    return _this;
  }

  /*
   * 发送获取域名请求
   * */


  (0, _createClass3.default)(TopTools, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getUrlAction().then(function (rs) {
        if (rs.code != 0) return;
        var domain = {};
        rs.data.map(function (_item) {
          if (_item.domainType == 3) domain.shop = _item.domain;
          if (_item.domainType == 2) domain.buyer = _item.domain;
          if (_item.domainType == 5) domain.platform = _item.domain;
          if (_item.domainType == 1) domain.defaultDomain = _item.domain;
        });
        _this2.setState((0, _extends3.default)({}, domain));
      });
    }

    /*
     * 消息中心url生成判断
     * 根据域名buyer或者shop生成对应的消息中心url
     * */

  }, {
    key: 'getMessageDomain',
    value: function getMessageDomain() {
      if (typeof window !== 'undefined') {
        var urlPath = window.location.href;
        if (urlPath.indexOf('buyer.') !== -1) {
          return this.state.buyer;
        }
        return this.state.shop;
      }
    }

    /*
     * 判断是否显示店铺列表或者公司列表
     * */

  }, {
    key: 'isBuyer',
    value: function isBuyer() {
      if (typeof window === 'undefined') return;
      var urlPath = window.location.href;
      if (urlPath.indexOf('buyer.') !== -1 || urlPath.indexOf('passport.') !== -1) {
        return true;
      }
      return false;
    }

    /*
     * 判断是否显示店铺列表、公司列表
     * */

  }, {
    key: 'isCompanyShopShow',
    value: function isCompanyShopShow() {
      if (typeof window === 'undefined') return;
      var urlPath = window.location.href;
      if (urlPath.indexOf('sellerinfo/') !== -1 || urlPath.indexOf('accountmanage/') !== -1) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      company.isCompanyId();
      return _react2.default.createElement(
        'div',
        { className: 'top-tools-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'top-tools-container f-cb' },
          _react2.default.createElement(
            'div',
            { className: 'f-fl' },
            _react2.default.createElement(_ChooseLocal2.default, { defaultDomain: this.state.defaultDomain }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_UserInfo2.default, { buyer: this.state.buyer }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            this.isCompanyShopShow() ? this.isBuyer() ? _react2.default.createElement(_CompanyInfo2.default, { defaultDomain: this.state.defaultDomain, buyer: this.state.buyer }) : _react2.default.createElement(_ShopInfo2.default, { defaultDomain: this.state.defaultDomain, shop: this.state.shop }) : ''
          ),
          _react2.default.createElement(
            'div',
            { className: 'f-fr' },
            _react2.default.createElement(_IndexLinkBtn2.default, { defaultDomain: this.state.defaultDomain }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_MyMall2.default, { buyer: this.state.buyer, shop: this.state.shop }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_ShoppingCart2.default, { defaultDomain: this.state.defaultDomain }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_MyOrder2.default, { buyer: this.state.buyer }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_MyMessage2.default, { domain: this.getMessageDomain() }),
            _react2.default.createElement('span', { className: 'vertical bg-666' }),
            _react2.default.createElement(_MobileMall2.default, null)
          )
        )
      );
    }
  }]);
  return TopTools;
}(_react.Component)) || _class);
exports.default = TopTools;
module.exports = exports['default'];
//# sourceMappingURL=TopTools.js.map