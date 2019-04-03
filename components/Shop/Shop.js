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

var _class, _temp; //链接跳转，相当于a标签


// 国际化中文


require('jdcloudui/lib/locale-provider/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _Header = require('./Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sider = require('./Sider/Sider');

var _Sider2 = _interopRequireDefault(_Sider);

var _TopTools = require('../TopTools/TopTools');

var _TopTools2 = _interopRequireDefault(_TopTools);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

require('./style/shop.css');

var _zh_CN = require('jdcloudui/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      icon: "",
      logo: ''
    };
    _this.buyerDomain = '/';
    _this.resource = {};
    return _this;
  }

  //获取买家域名


  (0, _createClass3.default)(Shop, [{
    key: 'getBuyerDomainForSubcount',
    value: function getBuyerDomainForSubcount() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 2) {
              _this2.buyerDomain = _item.domain;
              var result = _this2.reformData(_this2.resource);
              _this2.setState({
                menus: result
              });
            }
          });
        }
      }, function (err) {});
    }

    // 根据name获取cookie值

  }, {
    key: 'getCookieByArray',
    value: function getCookieByArray(name) {
      if (typeof document !== 'undefined') {
        var cookies = document.cookie.split(';');
        var c;
        for (var i = 0; i < cookies.length; i++) {
          c = cookies[i].split('=');
          if (c[0].replace(' ', '') == name) {
            return c[1];
          }
        }
      } else {
        return null;
      }
    }
    //------------------动态获取菜单begin-------------------------------------

  }, {
    key: 'shopMenuSearch',
    value: function shopMenuSearch() {
      var _this3 = this;

      var client = new _ApiClient2.default();
      var form = null;
      client.get('/authority-service/mall/resource/queryResourceMenuBySellerId', { params: { shopType: this.getCookieByArray('shopType') ? this.getCookieByArray('shopType') : '' } }).then(function (res) {
        if (res.code == 0 && res.data) {
          _this3.resource = res.data;
          var result = _this3.reformData(res.data);
          _this3.setState({
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
        for (var ia = 0; ia < data.length; ++ia) {
          var tmp = this.reformUnit(data[ia]);
          if (tmp) {
            result.push(tmp);
          }
        }
      }
      return result;
    }
  }, {
    key: 'reformUnit',
    value: function reformUnit(data) {
      var unit = { id: '', name: '', href: '', target: '', children: [] };
      unit.id = data.id + '';
      unit.name = data.name;
      if (data.name == '子账号管理' && data.url && data.url.indexOf('buyer.') == -1) {
        unit.href = '//' + this.buyerDomain + data.url;
        unit.target = '_blank';
      } else {
        unit.href = data.url;
        unit.target = data.target ? data.target : '_self';
      }
      unit.icon = data.icon;
      if (data && data.url && data.url == '/subaccount-buyer-view/subaccountmanage') {
        if (data && data.children && data.children.length > 0) {
          if (this.buyerDomain == '/') {
            return false;
          } else {
            unit.href = '//' + this.buyerDomain + data.children[0].url;
          }
        }
        unit.target = '_blank';
        delete unit['children'];
        return unit;
      }
      if (data && data.children && data.children.length > 0) {
        for (var ib = 0; ib < data.children.length; ++ib) {
          var tmp = this.reformUnit(data.children[ib]);
          if (tmp) {
            unit.children.push(tmp);
          }
        }
      } else {
        delete unit['children'];
      }
      return unit;
    }
    //------------------动态获取菜单end-------------------------------------
    //------------------获取ICON--------------------------------------------

  }, {
    key: 'getWebsiteConfig',
    value: function getWebsiteConfig() {
      var _this4 = this;

      var client = new _ApiClient2.default();
      client.get('/platform-service/mallInfo/getMallInfo').then(function (res) {
        if (res.code == 0 && res.data) {
          _this4.setState({ icon: res.data.icon, logo: res.data.userLogo });
        }
      }, function (err) {});
    }
    //----------------------------------------------------------------------

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getBuyerDomainForSubcount();
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
      var _this5 = this;

      var horizontalMenu = [];
      if (o && o.length && o.length > 0) {
        o.map(function (menu) {
          var children = menu.children,
              rest = (0, _objectWithoutProperties3.default)(menu, ['children']);

          rest.href = rest.href && rest.href != "" ? rest.href : _this5.getHref(children);
          horizontalMenu.push(rest);
        });
      }
      return horizontalMenu;
    }
  }, {
    key: 'urlMatch',
    value: function urlMatch(location, href) {
      //href:       接口返回的全路径
      //location:   menuUrl
      //menuUrl优先匹配
      if (location != '' && href && href != '') {
        if (href.indexOf('//') > 0) {
          if (location == href.substring(href.replace('//', '~%').indexOf('/'))) {
            return true;
          }
        } else {
          if (location == href) {
            return true;
          }
        }
      }
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
    /*verticalMenu(o,location) {
      var subMenu = [];
      var hKey = 0;
      var vKey = 0;
      var openKey = 0;
      for(var i = 0; i < o.length; i++) {
        var menu = o[i];
        if(menu.href&&menu.href!=""&&location.indexOf(menu.href)!=-1) {
          subMenu=[];
          hKey = menu.id;
        }else if(menu.children&&menu.children.length){
          for(var j = 0; j < menu.children.length; j++) {
            var vMenu = menu.children[j];
            if(vMenu.href&&vMenu.href!=""&&location.indexOf(vMenu.href)!=-1) {
              subMenu = menu.children;
              hKey = menu.id;
            }else if(vMenu.children&&vMenu.children.length) {
              for(var n = 0; n < vMenu.children.length; n++) {
                var sMenu = vMenu.children[n];
                if(sMenu.href&&sMenu.href!=""&&location.indexOf(sMenu.href)!=-1) {
                  subMenu = menu.children;
                  hKey = menu.id;
                  vKey = sMenu.id;
                  openKey=vMenu.id;
                }
              }
            }
          }
        }
      }
        return {subMenu,hKey,openKey,vKey}
    }*/

  }, {
    key: 'render',
    value: function render() {
      var _props$menus = this.props.menus,
          menus = _props$menus === undefined ? ms : _props$menus;

      var horizontalMenu = this.horizontalMenu(this.state.menus);
      var menuUrl = this.props.menuUrl || this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.menuUrl;
      var verticalMenu = { subMenu: [], hKey: '0', openKey: '0', vKey: [] };
      if (menuUrl) {
        verticalMenu = this.verticalMenu(this.state.menus, menuUrl);
      } else {
        verticalMenu = this.verticalMenu(this.state.menus, this.location);
      }
      if (verticalMenu.subMenu && verticalMenu.subMenu.length && verticalMenu.subMenu.length == 0) {
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
              vName
            ),
            _react2.default.createElement('link', { rel: 'icon', href: this.state.icon, mce_href: this.state.icon, type: 'image/x-icon' })
          ),
          _react2.default.createElement(_TopTools2.default, null),
          _react2.default.createElement(_Header2.default, { menus: horizontalMenu, selectKey: hKey, logo: this.state.logo }),
          _react2.default.createElement(
            'div',
            { className: 'shop-framework-body-container' },
            _react2.default.createElement(
              'div',
              { className: 'shop-framework-body-container-left' },
              _react2.default.createElement(_Sider2.default, rest)
            ),
            _react2.default.createElement(
              'div',
              { className: 'shop-framework-body-container-right', style: { minHeight: this.minHeight + "px" } },
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
//# sourceMappingURL=Shop.js.map