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

    //获取域名

  }, {
    key: 'getMainDomainForLogo',
    value: function getMainDomainForLogo() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 1) {
              var mainDomain = 'http://' + _item.domain;
              _this2.setState({ mainDomain: mainDomain });
            }
          });
        }
      }, function (err) {});
    }
    //客服

  }, {
    key: 'handleCreateShangQiao',
    value: function handleCreateShangQiao() {
      var iWidth = 580;
      var iHeight = 510;
      var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
      var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
      var sqUrl = "http://p.qiao.baidu.com/cps/chat?siteId=10819178&userId=23978973";
      window.open(sqUrl, "shangqiao", 'height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=' + iTop + ',left=' + iLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          menus = _props.menus,
          selectKey = _props.selectKey;

      var horizontal = menus.map(function (menu) {
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
                { className: 'shop-framework-logo', href: this.state.mainDomain },
                this.props.logo ? _react2.default.createElement('img', { src: this.props.logo }) : ''
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'span',
                { className: 'shop-framework-title' },
                this.props.flowType && this.props.flowType == 'shop' ? '商家中心' : '供应商中心'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { style: { paddingTop: '2%' }, className: 'audit-framework-kefu' },
            _react2.default.createElement(
              'p',
              null,
              '\u5982\u6709\u7591\u95EE\uFF0C',
              _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                    return _this3.handleCreateShangQiao();
                  } },
                '\u54A8\u8BE2\u5BA2\u670D'
              )
            )
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