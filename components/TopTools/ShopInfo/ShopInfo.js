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
                   * @description:店铺信息
                   * ************************/

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _shopList_redux = require('./shopList_redux');

var _shopList_redux2 = _interopRequireDefault(_shopList_redux);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = new _Cookies2.default();
/* ***********  redux  ************ */
var ShopInfo = (_dec = (0, _reactRedux.connect)(function (state) {
  return _shopList_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getShopListAction: _shopList_redux.getShopListAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ShopInfo, _Component);

  function ShopInfo(props) {
    (0, _classCallCheck3.default)(this, ShopInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShopInfo.__proto__ || (0, _getPrototypeOf2.default)(ShopInfo)).call(this, props));

    _this.state = {
      shopArr: [],
      shopName: '请选择'
    };
    return _this;
  }

  /*
   * 发送获取店铺列表请求
   * 判断cookie中是否有shopId，如果没有则调用defaultShopId方法设置
   * 如果公司列表为空则跳转到注册公司引导页
   * */


  (0, _createClass3.default)(ShopInfo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getShopListAction().then(function (rs) {
        if (rs.code != 0) return;

        if (rs.data.length === 0) {
          location.href = '//' + _this2.props.shop + '/user-shop-view/sellerinfo/defaultshophome';
        } else if (!cookie.get('shopId')) {
          _this2.defaultShopId(rs.data[0]);
        } else {
          rs.data.map(function (_item) {
            if (_item.shopId == cookie.get('shopId')) {
              var shopName = _item.companyName + '-' + (_item.shopName || '未命名');
              _this2.setState({ shopName: shopName });
            }
          });
          _this2.setState({ shopArr: rs.data });
        }
      });
    }

    /*
     * 通过onclick事件添加shopId到cookie中
     * */

  }, {
    key: 'setShopId',
    value: function setShopId(_ref) {
      var shopId = _ref.shopId,
          companyId = _ref.companyId,
          shopType = _ref.shopType;

      cookie.set('shopId', shopId, '', this.props.defaultDomain);
      cookie.set('companyId', companyId, '', this.props.defaultDomain);
      cookie.set('shopType', shopType, '', this.props.defaultDomain);
    }

    /*
     * 设置默认cookie
     * 跳转到获取菜单中间页
     * */

  }, {
    key: 'defaultShopId',
    value: function defaultShopId(_ref2) {
      var shopId = _ref2.shopId,
          companyId = _ref2.companyId,
          shopType = _ref2.shopType;

      cookie.set('shopId', shopId, '', this.props.defaultDomain);
      cookie.set('companyId', companyId, '', this.props.defaultDomain);
      cookie.set('shopType', shopType, '', this.props.defaultDomain);
      if (this.props.disabled) {
        location.href = '//' + this.props.shop + '/user-shop-view/shopdefaultmenu';
      }
    }

    /*
     * 渲染店铺列表
     * */

  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this3 = this;

      var shopArr = [];
      this.state.shopArr.map(function (_item) {
        shopArr.push(_react2.default.createElement(
          'li',
          { key: _item.shopId },
          _react2.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return _this3.setShopId(_item);
              },
              href: '//' + _this3.props.shop + '/user-shop-view/shopdefaultmenu',
              className: cookie.get('shopId') == _item.shopId ? 'active' : '',
              title: _item.companyName + '-' + (_item.shopName || '未命名')
            },
            _item.companyName + '-' + (_item.shopName || '未命名')
          )
        ));
      });
      return shopArr;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'down-menu f-ib deg180' },
        _react2.default.createElement(
          'a',
          null,
          this.state.shopName,
          _react2.default.createElement(_icon2.default, { type: 'down', className: 'ml5 arrows' })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'down-menu-cont select width380' },
          this.renderOptions()
        )
      );
    }
  }]);
  return ShopInfo;
}(_react.Component)) || _class);
exports.default = ShopInfo;
module.exports = exports['default'];
//# sourceMappingURL=ShopInfo.js.map