'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _badge = require('jdcloudui/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _dropdown = require('jdcloudui/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('jdcloudui/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

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

require('jdcloudui/lib/badge/style');

require('jdcloudui/lib/dropdown/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./style/templateHader.css');

var _onLogout = require('../../../sso/onLogout');

var _onLogout2 = _interopRequireDefault(_onLogout);

var _ApiClient = require('../../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props, context) {
    (0, _classCallCheck3.default)(this, Header);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props, context));

    _this2.state = {
      msgCount: '',
      userName: '',
      menus: '',
      isSubAccount: true,
      dyHeaderMinWidth: 1000,
      key: ''
    };
    return _this2;
  }

  (0, _createClass3.default)(Header, [{
    key: 'logout',
    value: function logout() {
      var logouts = {
        "passport-platform": ["/passport-operating-view/logout", false],
        "platform": ["/operating-view/logout", false],
        "view-zx-mall": ["/decoration/logout", false],
        "view-zone": ["/zone/logout", false]
      };
      (0, _onLogout2.default)(logouts, "plogin");
    }
  }, {
    key: 'getMsgCount',
    value: function getMsgCount() {
      var _this3 = this;

      var client = new _ApiClient2.default(null, null, null, true);
      client.get('/postman/platform/websitemsg/queryUnreadWebSiteCount').then(function (res) {
        if (res.code == 0 && res.data) {
          _this3.setState({
            msgCount: res.data
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'getUserName',
    value: function getUserName() {
      var _this4 = this;

      var client = new _ApiClient2.default(null, null, null, true);
      client.get('/platform-passport/platform/Login/queryLoginInfo', { params: { platformId: 2 } }).then(function (res) {
        if (res.code == 0 && res.data && res.data.username) {
          _this4.setState({
            userName: res.data.username
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'getChangePassWordPermission',
    value: function getChangePassWordPermission() {
      var _this5 = this;

      var client = new _ApiClient2.default(null, null, null, true);
      client.get('/authority/platform/platformsubaccount/checkSubAccountInfo').then(function (res) {
        if (res.code == 0) {
          _this5.setState({
            isSubAccount: res.data
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getMsgCount();
      this.getUserName();
      this.getChangePassWordPermission();
    }
  }, {
    key: 'calculateNum',
    value: function calculateNum(menus, clientWidth, headMenuPx) {
      //fontSize:14 padding:15x2 current:1028;clientWidth:可用空间 1028:目前菜单总长度
      var menuNamepx = 0;
      if (menus && menus.length) {
        for (var i = 0; i < menus.length; ++i) {
          var menuNameLength = menus[menus.length - parseInt(i) - 1].name.length;
          menuNamepx += parseInt(menuNameLength) * 14 + 30;
          if (headMenuPx - menuNamepx < clientWidth) {
            return parseInt(i) + 1;
          }
        }
      } else {
        return 0;
      }
    }
  }, {
    key: 'createMenu',
    value: function createMenu(menus, selectKey, type) {
      //sider：200 userinfo：200 ，ore：80 buffer：200,titleName:100
      if (typeof window !== 'undefined') {
        // const clientWidth = window.screen.availWidth -200 -200-80-100;
        var w = document.documentElement.scrollWidth || document.body.scrollWidth;
        var clientWidth = w - 200 - 84 - 140 - 85 - 10;
        if (type == 2) {
          this.setState({ key: Math.random() });
        }
        var headMenuPx = 0;
        if (menus && menus.length && menus.length != 0) {
          headMenuPx = 86 * menus.length;
        }
        if (clientWidth < headMenuPx) {
          var dropNum = this.calculateNum(menus, clientWidth, headMenuPx);
          var mainMenu = menus && menus.slice(0, menus.length - dropNum);
          var dropDownMenu = menus && menus.slice(menus.length - dropNum, menus.length);
          var mainMenuData = mainMenu && mainMenu.map(function (menu) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: menu.id },
              _react2.default.createElement(
                'a',
                { href: menu.href },
                menu.name
              )
            );
          });
          var dropDownMenuData = dropDownMenu && dropDownMenu.map(function (menu) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: menu.id },
              _react2.default.createElement(
                'a',
                { href: menu.href },
                menu.name
              )
            );
          });
          var forceMoreMenu = false;
          for (var q = 0; q < dropDownMenu.length; ++q) {
            if (dropDownMenu[q].id == [String(selectKey)]) {
              forceMoreMenu = true;
              break;
            }
          }
          var finalData = _react2.default.createElement(
            _menu2.default,
            {
              className: 'dropdownmenu1',
              key: Math.random(),
              theme: 'light',
              mode: 'inline',
              selectedKeys: [String(selectKey)],
              style: { lineHeight: '20px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px' }
            },
            dropDownMenuData
          );
          return _react2.default.createElement(
            'div',
            { className: 'moremenu' },
            _react2.default.createElement(
              _badge2.default,
              { count: dropNum, overflowCount: 10 },
              _react2.default.createElement(
                _dropdown2.default,
                { overlay: finalData, placement: 'bottomCenter' },
                _react2.default.createElement(
                  'a',
                  { className: 'jc-dropdown-link', href: 'javascript:void(0)' },
                  forceMoreMenu ? _react2.default.createElement(
                    'span',
                    { style: { fontSize: '14px', color: '#333' } },
                    '\u66F4\u591A'
                  ) : _react2.default.createElement(
                    'span',
                    { style: { fontSize: '14px', color: '#999' } },
                    '\u66F4\u591A'
                  ),
                  _react2.default.createElement(_icon2.default, { type: 'down', style: { color: "#b1b1b1" } })
                )
              )
            ),
            _react2.default.createElement(
              _menu2.default,
              {
                theme: 'light',
                mode: 'horizontal',
                selectedKeys: [String(selectKey)],
                style: { lineHeight: '63px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px', paddingRight: '5px' }
              },
              mainMenuData
            )
          );
        } else {
          var horizontal = menus && menus.map(function (menu) {
            return _react2.default.createElement(
              _menu2.default.Item,
              { key: menu.id },
              _react2.default.createElement(
                'a',
                { href: menu.href },
                menu.name
              )
            );
          });
          return _react2.default.createElement(
            _menu2.default,
            {
              theme: 'light',
              mode: 'horizontal',
              selectedKeys: [String(selectKey)],
              style: { lineHeight: '63px', borderBottom: '0', float: 'right', marginRight: '10px', fontSize: '14px', paddingRight: '5px' }
            },
            horizontal
          );
        }
      } else {
        return _react2.default.createElement('div', null);
      }
    }
  }, {
    key: 'createUserMenu',
    value: function createUserMenu() {
      var _this6 = this;

      if (!this.state.isSubAccount) {
        return _react2.default.createElement(
          _menu2.default,
          { className: 'dropdownmenuUser' },
          _react2.default.createElement(
            _menu2.default.Item,
            null,
            _react2.default.createElement(
              'a',
              { rel: 'noopener noreferrer', target: '_blank', href: '/user-operating-view/changepwd' },
              '\u4FEE\u6539\u5BC6\u7801'
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            null,
            _react2.default.createElement(
              'a',
              { rel: 'noopener noreferrer', onClick: function onClick() {
                  return _this6.logout();
                }, href: 'javascript:void(0)' },
              '\u9000\u51FA'
            )
          )
        );
      } else {
        return _react2.default.createElement(
          _menu2.default,
          { className: 'dropdownmenuUser' },
          _react2.default.createElement(
            _menu2.default.Item,
            null,
            _react2.default.createElement(
              'a',
              { rel: 'noopener noreferrer', onClick: function onClick() {
                  return _this6.logout();
                }, href: 'javascript:void(0)' },
              '\u9000\u51FA'
            )
          )
        );
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // const clientWidth = window.screen.availWidth -200 -200-80-100;
      var w = document.documentElement.scrollWidth || document.body.scrollWidth;
      var clientWidth = w - 200 - 84 - 140 - 85 - 10;
      this.setState({
        dyHeaderMinWidth: clientWidth
      });
      var _this = this;
      window.onresize = function () {
        var _this$props = _this.props,
            menus = _this$props.menus,
            selectKey = _this$props.selectKey;

        _this.createMenu(menus, selectKey, 2);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          menus = _props.menus,
          selectKey = _props.selectKey;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'ui-header', style: { minWidth: this.state.dyHeaderMinWidth } },
          _react2.default.createElement(
            'h2',
            null,
            '\u8FD0\u8425\u540E\u53F0'
          ),
          _react2.default.createElement(
            'div',
            { className: 'userInfo' },
            _react2.default.createElement(
              _badge2.default,
              { count: this.state.msgCount, className: 'ui-badge', overflowCount: 99 },
              _react2.default.createElement(
                'a',
                { href: '/operating-view/message/message-center' },
                _react2.default.createElement(_icon2.default, { type: 'new-icon72', style: { fontSize: "25px", color: '#b2b2b2' } })
              )
            ),
            _react2.default.createElement(
              _dropdown2.default,
              { overlay: this.createUserMenu() },
              _react2.default.createElement(
                'a',
                { className: 'jc-dropdown-link', href: 'javascript:void(0)' },
                this.state.userName,
                ' ',
                _react2.default.createElement(_icon2.default, { type: 'down' })
              )
            )
          ),
          this.createMenu(menus, selectKey, 1)
        )
      );
    }
  }]);
  return Header;
}(_react.Component);

exports.default = Header;
module.exports = exports['default'];
//# sourceMappingURL=Header.js.map