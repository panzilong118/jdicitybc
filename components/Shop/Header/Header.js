'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

require('jdcloudui/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./style/templateHader.css');

var _logo = require('./style/logo.png');

var _logo2 = _interopRequireDefault(_logo);

var _ApiClient = require('../../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header(props, context) {
    (0, _classCallCheck3.default)(this, Header);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props, context));

    _this.state = {
      mainDomain: '/'
    };
    return _this;
  }

  (0, _createClass3.default)(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getMainDomainForLogo();
    }

    // 获取域名

  }, {
    key: 'getMainDomainForLogo',
    value: function getMainDomainForLogo() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 1) {
              var mainDomain = '//' + _item.domain;
              _this2.setState({ mainDomain: mainDomain });
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
  }, {
    key: 'render',
    value: function render() {
      var shopType = this.getCookieByArray('shopType');
      var titleName = '';
      if (shopType) {
        titleName = shopType == 1 ? '供应商中心' : '商家中心';
      }
      var _props = this.props,
          menus = _props.menus,
          selectKey = _props.selectKey;

      var horizontal = menus.map(function (menu) {
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: menu.id },
          _react2.default.createElement(
            'a',
            { href: menu.href, target: menu.target },
            menu.name
          )
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'shop-framework-header' },
        _react2.default.createElement(
          'div',
          { className: 'shop-framework-container' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'shop-framework-logo', href: this.state.mainDomain, target: '_blank' },
                this.props.logo ? _react2.default.createElement('img', { src: this.props.logo }) : ''
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'shop-framework-title' },
                titleName
              )
            )
          ),
          _react2.default.createElement(
            _menu2.default,
            {
              theme: 'light',
              mode: 'horizontal',
              selectedKeys: [String(selectKey)],
              style: { lineHeight: '62px', float: 'right' }
            },
            horizontal
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component);

exports.default = Header;
module.exports = exports['default'];
//# sourceMappingURL=Header.js.map