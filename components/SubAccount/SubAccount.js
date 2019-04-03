'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _Header = require('../Buyer/Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Sider = require('../Buyer/Sider/Sider');

var _Sider2 = _interopRequireDefault(_Sider);

require('../Buyer/style/buyer.css');

var _TopTools = require('../TopTools/TopTools');

var _TopTools2 = _interopRequireDefault(_TopTools);

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subaccountmanageUrl = '/subaccount-buyer-view/subaccountmanage';
var rolemanageUrl = '/subaccount-buyer-view/rolemanage';
var Buyer = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Buyer, _Component);

  function Buyer(props, context) {
    (0, _classCallCheck3.default)(this, Buyer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Buyer.__proto__ || (0, _getPrototypeOf2.default)(Buyer)).call(this, props, context));

    _this.state = {
      menus: [],
      icon: "",
      logo: ''
    };
    return _this;
  }

  //------------------动态获取菜单begin-------------------------------------


  (0, _createClass3.default)(Buyer, [{
    key: 'buyerMenuSearch',
    value: function buyerMenuSearch() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      var form = null;
      client.get('/authority-service/mall/resource/queryResourceMenuByBuyId', { params: form }).then(function (res) {
        if (res.code == 0 && res.data) {
          var tmp = res.data;
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
      unit.icon = data.icon;
      if (data && data.children && data.children.length > 0) {
        for (var i in data.children) {
          unit.children.push(this.reformUnit(data.children[i]));
        }
      } else {
        delete unit['children'];
      }
      return unit;
    }
    //------------------动态获取菜单end-------------------------------------

  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.buyerMenuSearch();
      this.getWebsiteConfig();
      this.minHeight = typeof window !== 'undefined' ? document.body.clientHeight - 64 : 580;
      this.location = typeof window !== 'undefined' ? window.location.href : "";
      this.referer = typeof document !== 'undefined' ? document.referrer : "";
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
    //----------------------------------------------------------------------

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
      } else {}
      return "";
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
      }
      return horizontalMenu;
    }
  }, {
    key: 'urlMatch',
    value: function urlMatch(location, menu) {
      // menu.href:/dfsd/sdfs  数据库中返回的数据
      // location:优先为menuUrl，其次this.location
      // menuUrl优先匹配
      // if ( menu && menu.href && (menu.href == subaccountmanageUrl || menu.href == rolemanageUrl)){
      if (location != '' && menu && menu.href && menu.href != '') {
        if (location == subaccountmanageUrl) {
          if (location == menu.href && menu.name == '账号管理') {
            return true;
          }
        } else {
          if (location == menu.href) {
            return true;
          }
        }
      }
      // }
      return false;
    }
  }, {
    key: 'verticalMenu',
    value: function verticalMenu(o, location) {
      var subMenu = [];
      var hKey = 0;
      var vKey = 0;
      var openKey = [];
      var vName = "";
      if (o && o.length && o.length > 0) {
        for (var i = 0; i < o.length; i++) {
          var menu = o[i];
          if (menu.href && menu.href != "" && this.urlMatch(location, menu)) {
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
              if (vMenu.href && vMenu.href != "" && this.urlMatch(location, vMenu)) {
                subMenu = menu.children;
                // subMenu = vMenu.children;
                hKey = menu.id;
                vKey = vMenu.id;
                vName = vMenu.name;
              } else if (vMenu.children && vMenu.children.length) {
                for (var n = 0; n < vMenu.children.length; n++) {
                  var sMenu = vMenu.children[n];
                  if (sMenu.href && sMenu.href != "" && this.urlMatch(location, sMenu)) {
                    subMenu = vMenu.children;
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
      var horizontalMenu = this.horizontalMenu(this.state.menus);
      var menuUrl = this.props.children && this.props.children.props && this.props.children.props.route && this.props.children.props.route.menuUrl;
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
        _react2.default.createElement(_Header2.default, { menus: horizontalMenu, selectKey: hKey, logo: this.state.logo, type: 'subaccount' }),
        _react2.default.createElement(
          'div',
          { className: 'buyer-framework-body-container' },
          _react2.default.createElement(
            'div',
            { className: 'buyer-framework-body-container-left' },
            _react2.default.createElement(_Sider2.default, rest)
          ),
          _react2.default.createElement(
            'div',
            { className: 'buyer-framework-body-container-right', style: { minHeight: this.minHeight + "px" } },
            this.props.children
          )
        )
      );
    }
  }]);
  return Buyer;
}(_react.Component), _class.propTypes = {
  children: _propTypes2.default.object.isRequired
}, _temp);
exports.default = Buyer;
module.exports = exports['default'];
//# sourceMappingURL=SubAccount.js.map