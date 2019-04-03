'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _localeProvider = require('jdcloudui/lib/locale-provider');

var _localeProvider2 = _interopRequireDefault(_localeProvider);

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

var _menu = require('jdcloudui/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('jdcloudui/lib/locale-provider/style');

require('jdcloudui/lib/menu/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _TopTools = require('../TopTools/TopTools');

var _TopTools2 = _interopRequireDefault(_TopTools);

require('./style/message.css');

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _zh_CN = require('jdcloudui/lib/locale-provider/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = _menu2.default.SubMenu;
var MenuItemGroup = _menu2.default.ItemGroup;

// 国际化中文

_moment2.default.locale('zh-cn');

var Message = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message(props, context) {
    (0, _classCallCheck3.default)(this, Message);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).call(this, props, context));

    _this.state = {
      shopDomain: '',
      buyerDomain: '',
      paltformDomain: '',
      domain: ''
    };
    _this.activeMenu = '1';
    return _this;
  }

  //------------------获取ICON--------------------------------------------


  (0, _createClass3.default)(Message, [{
    key: 'getWebsiteConfig',
    value: function getWebsiteConfig() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/platform-service/mallInfo/getMallInfo').then(function (res) {
        console.log(res);
        if (res.code == 0 && res.data) {
          _this2.setState({ icon: res.data.icon, logo: res.data.userLogo });
        }
      }, function (err) {});
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getWebsiteConfig();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var client = new _ApiClient2.default();
      client.get('passport/logout', {}).then(function (rs) {
        if (rs.code == 0) {
          rs.data.map(function (_item) {
            if (_item.domainType == 3) _this3.setState({ shopDomain: _item.domain });
            if (_item.domainType == 2) _this3.setState({ buyerDomain: _item.domain });
            if (_item.domainType == 5) _this3.setState({ paltformDomain: _item.domain });
            if (_item.domainType == 1) _this3.setState({ domain: _item.domain });
          });
        }
      });
      if (window) {
        var url = window.location.href;
        return url.indexOf('buyer') >= 0 ? this.activeMenu = '2' : this.activeMenu = '1';
      }
    }
  }, {
    key: 'render',
    value: function render() {
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
              '\u6D88\u606F\u4E2D\u5FC3'
            ),
            _react2.default.createElement('link', { rel: 'icon', href: this.state.icon, mce_href: this.state.icon, type: 'image/x-icon' })
          ),
          _react2.default.createElement(_TopTools2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'shop-framework-body-container', style: { display: 'flex' } },
            _react2.default.createElement(
              'div',
              { className: 'shop-framework-body-container-left' },
              _react2.default.createElement(
                _menu2.default,
                {
                  selectedKeys: [this.activeMenu],
                  defaultOpenKeys: ['sub1'],
                  mode: 'inline'
                },
                _react2.default.createElement(
                  MenuItemGroup,
                  { key: 'g1', title: '\u6D88\u606F\u4E2D\u5FC3' },
                  _react2.default.createElement(
                    _menu2.default.Item,
                    { key: '1' },
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'http://' + this.state.shopDomain + '/shop-view/message/message-center',
                        className: 'a_block' },
                      '\u4F9B\u5E94\u5546\u6D88\u606F'
                    )
                  ),
                  _react2.default.createElement(
                    _menu2.default.Item,
                    { key: '2' },
                    _react2.default.createElement(
                      'a',
                      {
                        href: 'http://' + this.state.buyerDomain + '/buyer-view/message/message-center',
                        className: 'a_block' },
                      '\u91C7\u8D2D\u5546\u6D88\u606F'
                    )
                  )
                )
              )
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
  return Message;
}(_react.Component);

exports.default = Message;
module.exports = exports['default'];
//# sourceMappingURL=Message.js.map