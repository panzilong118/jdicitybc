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

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _JcBreadCrumb = require('../JcBreadCrumb/JcBreadCrumb');

var _JcBreadCrumb2 = _interopRequireDefault(_JcBreadCrumb);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _redux2 = require('./redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CrumbsWrap = (_dec = (0, _reactRedux.connect)(function (state) {
  return {};
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ queryResourceMenuByBuyId: _redux2.queryResourceMenuByBuyId, queryResourceMenuBySellerId: _redux2.queryResourceMenuBySellerId, queryResourceMenuByOwnerType: _redux2.queryResourceMenuByOwnerType, queryResourceMenuByCompanyId: _redux2.queryResourceMenuByCompanyId, queryResourceMenuByPuserId: _redux2.queryResourceMenuByPuserId }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(CrumbsWrap, _Component);

  function CrumbsWrap(props, context) {
    (0, _classCallCheck3.default)(this, CrumbsWrap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CrumbsWrap.__proto__ || (0, _getPrototypeOf2.default)(CrumbsWrap)).call(this, props, context));

    _this.state = {
      menuData: [],
      willMenuData: props.menuData
    };
    _this.pathname = '';
    _this.host = '';
    return _this;
  }

  (0, _createClass3.default)(CrumbsWrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var domain = window.location.host.slice(0, 4);
      this.pathname = window.location.pathname;
      this.host = window.location.host;
      var menuType = this.props.menuType;
      var shopType = this.getCookieByArray('shopType');
      if (menuType === 'companymanage') {
        this.props.queryResourceMenuByCompanyId().then(function (result) {
          if (result.code == 0) {
            _this2.setState({ menuData: result.data });
          }
        });
        return;
      }
      if (shopType == 4) {
        this.props.queryResourceMenuByOwnerType({ ownerType: 'pseudorandom' }).then(function (result) {
          if (result.code == 0) {
            _this2.setState({ menuData: result.data });
          }
        });
        return;
      }
      if (domain === "buye") {
        this.props.queryResourceMenuByBuyId().then(function (result) {
          if (result.code == 0) {
            _this2.setState({ menuData: result.data });
          }
        });
      }
      if (domain === 'shop') {
        (shopType == 1 || shopType == 2) && this.props.queryResourceMenuBySellerId({ shopType: shopType }).then(function (result) {
          if (result.code == 0) {
            _this2.setState({ menuData: result.data });
          }
        });
      }
      if (domain === 'plat') {
        this.props.queryResourceMenuByPuserId().then(function (result) {
          if (result.code == 0) {
            _this2.setState({ menuData: result.data });
          }
        });
      }
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

    // // 渲染menu
    // renderMenu() {
    //   var menu = [];
    //   for(let i = 0 ; i < this.state.menuData.length ; i++){
    //     // 进入第一层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
    //     if(this.pathname == this.state.menuData[i].url) {
    //       menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url});
    //       return menu;
    //     }
    //     if(!this.state.menuData[i].children.length) continue;

    //     // 进入第二层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
    //     for(let j = 0 ; j < this.state.menuData[i].children.length ; j++){
    //       if(this.pathname == this.state.menuData[i].children[j].url) {
    //         menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
    //         menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
    //         return menu;
    //       }
    //       if(!this.state.menuData[i].children[j].children.length) continue;

    //       // 进入第三层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
    //       for(let k = 0 ; k < this.state.menuData[i].children[j].children.length ; k++){
    //         if(this.pathname == this.state.menuData[i].children[j].children[k].url) {
    //           menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
    //           menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
    //           menu.push({name: this.state.menuData[i].children[j].children[k].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].url});
    //           return menu;
    //         }
    //         if(!this.state.menuData[i].children[j].children[k].children.length) continue;

    //         // 进入第四层for循环，判断接口url是否与访问url相同，如果相同则后面代码不执行
    //         for(let m = 0 ; m < this.state.menuData[i].children[j].children[k].children.length.length ; m++){
    //           if(this.pathname == this.state.menuData[i].children[j].children[k].children[m].url) {
    //             menu.push({name: this.state.menuData[i].name, url: '//' + this.host + this.state.menuData[i].url})
    //             menu.push({name: this.state.menuData[i].children[j].name, url: '//' + this.host + this.state.menuData[i].children[j].url});
    //             menu.push({name: this.state.menuData[i].children[j].children[k].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].url});
    //             menu.push({name: this.state.menuData[i].children[j].children[k].children[m].name, url: '//' + this.host + this.state.menuData[i].children[j].children[k].children[m].url});
    //             return menu;
    //           }
    //           if(!this.state.menuData[i].children[j].children[k].children[m].children.length) continue;
    //         }
    //       }
    //     }
    //   }
    //   return menu;
    // }

    // // 渲染menu
    // renderMenu(menuData) {
    //   console.log(1);
    //   for(let i = 0 ; i < menuData.length ; i++) {
    //     menu.push({name: menuData[i].name, url: '//' + this.host + menuData[i].url});
    //     if(this.pathname != menuData[i].url) {
    //       if(menuData[i].children.length) {
    //         return this.renderMenu(menuData[i].children);
    //       }else{
    //         menu = [];
    //       }
    //     }else{
    //       return;
    //     }
    //   }
    // }

    // 渲染menu

  }, {
    key: 'renderMenu',
    value: function renderMenu(data) {
      var _this3 = this;

      if (this.state.willMenuData) return this.state.willMenuData;
      var flatten = function flatten(data) {
        data = data || [];
        return data.reduce(function (arr, _ref) {
          var name = _ref.name,
              url = _ref.url,
              code = _ref.code,
              pid = _ref.pid,
              _ref$children = _ref.children,
              children = _ref$children === undefined ? [] : _ref$children;
          return arr.concat([{ name: name, url: url, code: code, pid: pid }], flatten(children));
        }, []);
      };
      var arr = flatten(data);
      var crumbsObj = arr.reduce(function (obj, v) {
        obj[v.code] = v;
        return obj;
      }, {});
      var code = (arr.find(function (item, index, data) {
        return item.url == _this3.pathname;
      }) || {}).code;
      return this.getMenus(crumbsObj, code);
    }
  }, {
    key: 'getMenus',
    value: function getMenus(obj, code) {
      var menu = [];
      if (!code) return menu;
      var pushMenu = function pushMenu(code) {
        menu.unshift(obj[code]);
        if (obj[code].pid != 0) {
          pushMenu(obj[obj[code].pid].code);
        }
      };
      pushMenu(code);
      return menu;
    }
  }, {
    key: 'render',
    value: function render() {
      var menu = this.state.menuData.length && this.renderMenu(this.state.menuData);
      return _react2.default.createElement(
        'div',
        { className: 'ui-breadcrumb' },
        _react2.default.createElement(_JcBreadCrumb2.default, { menu: menu })
      );
    }
  }]);
  return CrumbsWrap;
}(_react.Component)) || _class);
exports.default = CrumbsWrap;
module.exports = exports['default'];
//# sourceMappingURL=CrumbsWrap.js.map