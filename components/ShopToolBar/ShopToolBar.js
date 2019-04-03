'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _localeProvider = require('jdcloudui/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _class, _temp; //链接跳转，相当于a标签

// import ShopSider from './Sider/Sider';


require('jdcloudui/lib/locale-provider/style');

require('jdcloudui/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _Header = require('./Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _TopTools = require('../TopTools/TopTools');

var _TopTools2 = _interopRequireDefault(_TopTools);

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

require('../Shop/style/shop.css');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _zh_CN = require('jdcloudui/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout2.default.Content;

// 国际化中文

_moment2.default.locale('zh-cn');

var ms = [{
  id: 1,
  name: "首页",
  href: "http://shop.hnc.jcloudec.com/shop-view/home",
  target: "_self",
  children: [{
    id: 11,
    name: "商品管理",
    icon: "cgs",
    children: [{
      id: 111,
      name: "经营类目",
      href: "http://shop.hnc.jcloudec.com/item-shop-view/goods-manage/category",
      target: "_self"
    }, {
      id: 112,
      name: "经营品牌",
      href: "http://shop.hnc.jcloudec.com/item-shop-view/goods-manage/brand",
      target: "_self"
    }]
  }, {
    id: 12,
    name: "商品发布",
    icon: "cgs",
    children: [{
      id: 121,
      name: "选择供货商品",
      href: "http://shop.hnc.jcloudec.com/item-shop-view/selectgoods",
      target: "_self"
    }, {
      id: 122,
      name: "商品信息管理",
      href: "http://shop.hnc.jcloudec.com/item-shop-view/iteminfo",
      target: "_self"
    }, {
      id: 123,
      name: "提交新商品",
      href: "http://shop.hnc.jcloudec.com/item-shop-view/goods-release",
      target: "_self"
    }]
  }, {
    id: 13,
    name: "物流服务",
    icon: "cgs",
    children: [{
      id: 131,
      name: "地址管理",
      href: "http://shop.hnc.jcloudec.com/user-shop-view/supplier/address",
      target: "_self"
    }]
  }]
}, {
  id: 2,
  name: "账号管理",
  children: [{
    id: 21,
    name: "账号管理",
    icon: "cgs",
    children: [{
      id: 211,
      name: "账号信息",
      href: "http://shop.hnc.jcloudec.com/user-shop-view/accountmanage/accountInfo",
      target: "_self"
    }, {
      id: 212,
      name: "账号安全",
      href: "http://shop.hnc.jcloudec.com/user-shop-view/accountmanage/accountSecurity",
      target: "_self"
    }]
  }]
}, {
  id: 3,
  name: "订单管理",
  children: [{
    id: 31,
    name: "订单管理",
    icon: "xx",
    children: [{
      id: 311,
      name: "订单管理",
      href: "http://shop.hnc.jcloudec.com/order-shop-view/order/list",
      target: "_self"
    }, {
      id: 312,
      name: "销售区域设置",
      href: "http://shop.hnc.jcloudec.com/order-shop-view/salearea",
      target: "_self"
    }, {
      id: 313,
      name: "换货订单",
      href: "http://shop.hnc.jcloudec.com/customer-service-shop-view/exchange/grid",
      target: "_self"
    }, {
      id: 314,
      name: "退换货记录",
      href: "http://shop.hnc.jcloudec.com/customer-service-shop-view/returnexchangerecord/grid",
      target: "_self"
    }]
  }]
}, {
  id: 5,
  name: "财务管理",
  children: [{
    id: 51,
    name: "会员资金账户",
    href: "http://shop.hnc.jcloudec.com/finance-shop-view/memberFinanceAccount",
    target: "_self"
  }, {
    id: 52,
    name: "结算管理",
    href: "http://shop.hnc.jcloudec.com/finance-shop-view/settlement/grid",
    target: "_self"
  }]
}];
var Shop = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Shop, _Component);

  function Shop(props, context) {
    (0, _classCallCheck3.default)(this, Shop);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Shop.__proto__ || (0, _getPrototypeOf2.default)(Shop)).call(this, props, context));

    _this.state = {
      menus: [],
      icon: ''
    };
    return _this;
  }

  //------------------动态获取菜单begin-------------------------------------


  (0, _createClass3.default)(Shop, [{
    key: 'shopMenuSearch',
    value: function shopMenuSearch() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      var form = null;
      client.get('/authority-service/mall/resource/queryResourceMenuBySellerId', { params: form }).then(function (res) {
        if (res.code == 0 && res.data) {
          var tmp = res.data.slice(0, 9);
          var result = _this2.reformData(tmp);
          _this2.setState({
            menus: result
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'reformData',
    value: function reformData(data) {
      var result = [];
      if (data && data.length) {
        for (var i in data) {
          result.push(this.reformUnit(data[i]));
        }
      } else {}
      return result;
    }
  }, {
    key: 'reformUnit',
    value: function reformUnit(data) {
      var unit = { id: '', name: '', href: '', target: '', children: [] };
      unit.id = data.id + '';
      unit.name = data.name;
      unit.href = data.url;
      unit.target = data.target ? data.target : '_self';
      if (data && data.children && data.children.length > 0) {
        for (var i in data.children) {
          unit.children.push(this.reformUnit(data.children[i]));
        }
      } else {
        delete unit['children'];
      }
      return unit;
    }
    //------------------获取ICON--------------------------------------------

  }, {
    key: 'getWebsiteConfig',
    value: function getWebsiteConfig() {
      var _this3 = this;

      var client = new _ApiClient2.default();
      client.get('/platform-service/mallInfo/getMallInfo').then(function (res) {
        if (res.code == 0 && res.data) {
          _this3.setState({ icon: res.data.icon, logo: res.data.userLogo });
        }
      }, function (err) {});
    }
    //------------------动态获取菜单end-------------------------------------

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.shopMenuSearch();
      this.getWebsiteConfig();
      this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight - 64 : 580;
      this.location = typeof window !== 'undefined' ? window.location.href : "";
      this.referer = typeof document !== 'undefined' ? document.referrer : "";
    }
  }, {
    key: 'getHref',
    value: function getHref(o) {
      if (o && o.length) {
        for (var i = 0; i < o.length; i++) {
          var menu = o[i];
          if (menu.href && menu.href != "") {
            return menu.href;
          } else if (menu.children && menu.children.length) {
            return this.getHref(menu.children);
          } else {
            return "";
          }
        }
      } else {
        return "";
      }
    }
  }, {
    key: 'horizontalMenu',
    value: function horizontalMenu(o) {
      var _this4 = this;

      var horizontalMenu = [];
      if (o && o.length && o.length > 0) {
        o.map(function (menu) {
          var children = menu.children,
              rest = (0, _objectWithoutProperties3.default)(menu, ['children']);

          rest.href = rest.href && rest.href != "" ? rest.href : _this4.getHref(children);
          horizontalMenu.push(rest);
        });
      } else {}
      return horizontalMenu;
    }
  }, {
    key: 'urlMatch',
    value: function urlMatch(location, href) {
      //href:/dfsd/sdfs
      //location:http://dfsd/sdf/sdfs
      var finalLocation = '';
      if (location) {
        var result = String(location).split('.com');
        if (result && result.length && result[1]) {
          var path = result[1];
          var tmp = path.split('?');
          if (tmp && tmp[0]) {
            finalLocation = tmp[0];
            if (finalLocation == href) {
              return true;
            }
          }
        }
      }
      return false;
    }
  }, {
    key: 'verticalMenu',
    value: function verticalMenu(o, location) {
      var subMenu = [];
      var hKey = 0;
      var vKey = 0;
      var vName = "";
      var openKey = [];
      if (o && o.length && o.length > 0) {
        for (var i = 0; i < o.length; i++) {
          var menu = o[i];
          if (menu.href && menu.href != "" && this.urlMatch(location, menu.href)) {
            subMenu = menu.children;
            hKey = menu.id;
            var tmpOpenKey = [];
            for (var q in menu.children) {
              tmpOpenKey.push(menu.children[q].id + '');
            }
            openKey = tmpOpenKey;
          } else if (menu.children && menu.children.length) {
            for (var j = 0; j < menu.children.length; j++) {
              var vMenu = menu.children[j];
              if (vMenu.href && vMenu.href != "" && this.urlMatch(location, vMenu.href)) {
                subMenu = menu.children;
                hKey = menu.id;
                vKey = vMenu.id;
                vName = vMenu.name;
              } else if (vMenu.children && vMenu.children.length) {
                for (var n = 0; n < vMenu.children.length; n++) {
                  var sMenu = vMenu.children[n];
                  if (sMenu.href && sMenu.href != "" && this.urlMatch(location, sMenu.href)) {
                    subMenu = menu.children;
                    hKey = menu.id;
                    vKey = sMenu.id;
                    vName = sMenu.name;
                    openKey.push(vMenu.id);
                  }
                }
              }
            }
          }
        }
      }
      return { subMenu: subMenu, hKey: hKey, openKey: openKey, vKey: vKey, vName: vName };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$menus = this.props.menus,
          menus = _props$menus === undefined ? ms : _props$menus;

      var horizontalMenu = this.horizontalMenu(this.state.menus);
      var verticalMenu = this.verticalMenu(this.state.menus, this.location);
      if (verticalMenu.subMenu.length == 0) {
        verticalMenu = this.verticalMenu(this.state.menus, this.referer || "");
      }
      var _verticalMenu = verticalMenu,
          hKey = _verticalMenu.hKey,
          vName = _verticalMenu.vName,
          rest = (0, _objectWithoutProperties3.default)(_verticalMenu, ['hKey', 'vName']);

      return _react2.default.createElement(
        _localeProvider2.default,
        { locale: _zh_CN2.default },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactHelmet2.default,
            null,
            _react2.default.createElement(
              'title',
              null,
              this.props.flowType && this.props.flowType == 'shop' ? '商家入驻' : '供应商入驻'
            ),
            _react2.default.createElement('link', { rel: 'icon', href: this.state.icon, mce_href: this.state.icon, type: 'image/x-icon' })
          ),
          _react2.default.createElement(_TopTools2.default, null),
          _react2.default.createElement(_Header2.default, { menus: horizontalMenu, selectKey: hKey, logo: this.state.logo, flowType: this.props.flowType }),
          _react2.default.createElement(
            'div',
            { className: 'shop-framework-body-container' },
            _react2.default.createElement(
              Content,
              { style: { minHeight: this.minHeight + "px" } },
              this.props.children
            )
          )
        )
      );
    }
  }]);
  return Shop;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Shop;
module.exports = exports['default'];
//# sourceMappingURL=ShopToolBar.js.map