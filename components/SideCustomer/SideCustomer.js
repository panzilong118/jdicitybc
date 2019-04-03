'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

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

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/common.css');

var _ApiClient = require('../../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideCustomer = function (_Component) {
  (0, _inherits3.default)(SideCustomer, _Component);

  function SideCustomer(props, content) {
    (0, _classCallCheck3.default)(this, SideCustomer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SideCustomer.__proto__ || (0, _getPrototypeOf2.default)(SideCustomer)).call(this, props, content));

    _this.handleCreateShangQiao = function () {
      if (!_this.state.customUrl) {
        _message3.default.warning('该站点没有设置客服，请到运营后台设置对应的客服连接！');
      } else {
        var iWidth = 580;
        var iHeight = 510;
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        window.open(_this.state.customUrl, "shangqiao", 'height=510, width=580, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no, top=' + iTop + ',left=' + iLeft);
      }
    };

    _this.state = {
      scrollTop: 0,
      feedbackUrl: '',
      customUrl: ''

    };
    return _this;
  }

  (0, _createClass3.default)(SideCustomer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var client = new _ApiClient2.default();
      client.get('/passport/logout').then(function (res) {
        if (res.code == 0 && res.data) {
          res.data.map(function (_item) {
            if (_item.domainType == 1) {
              var feedbackUrl = 'http://' + _item.domain + '/website-view/user-feedback';
              _this2.setState({ feedbackUrl: feedbackUrl });
            }
          });
        }
      }, function (err) {});
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var client = new _ApiClient2.default();
      document.addEventListener('scroll', function () {
        return _this3.onChange();
      }, true);
      var pathname = window.location.pathname.trim();
      //获取平台当前启用客服，提示无启用客服
      client.get('/platform/shop/custom/queryCustomConfigBySiteUrl', { params: { customType: 1, siteUrl: pathname } }).then(function (res) {
        if (res.code == 0 && res.data) {
          _this3.setState({
            customUrl: res.data.customUrl
          });
        } else {
          // message.warning('该站点没有设置客服，请到运营后台设置对应的客服连接！');
        }
      }, function (err) {});
    }
  }, {
    key: 'toTop',
    value: function toTop() {
      document.body.scrollTop = 0;
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      this.setState({ scrollTop: document.body.scrollTop });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'box-fixedbar' },
        _react2.default.createElement(
          'div',
          { className: 'm-fixedbar' },
          _react2.default.createElement(
            'div',
            { className: 'fixedbar-bd' },
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-item' },
              _react2.default.createElement(
                'a',
                { className: 'sidecart', href: '/website-view/cart', target: '_blank' },
                _react2.default.createElement('span', { className: 'goods-num' }),
                _react2.default.createElement(
                  'i',
                  { className: 'iconfont' },
                  '\uE7EA'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'fixedbar-text' },
                  '\u8FDB\u8D27\u8F66'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-item js-qrcode' },
              _react2.default.createElement(
                'a',
                { href: 'javascript:;' },
                _react2.default.createElement(
                  'i',
                  { className: 'iconfont' },
                  '\uE6DD'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'fixedbar-text' },
                  '\u626B\u7801\u4F18\u60E0'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-item js-kefu-item', id: 'box-js-kefu-item', onClick: this.handleCreateShangQiao },
              _react2.default.createElement(
                'a',
                { href: 'javascript:;', target: '_blank' },
                _react2.default.createElement(
                  'i',
                  { className: 'iconfont' },
                  '\uE7ED'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'fixedbar-text' },
                  '\u8054\u7CFB\u5BA2\u670D'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-show' },
              _react2.default.createElement(
                'div',
                { className: 'fixedbar-item' },
                _react2.default.createElement(
                  'a',
                  { href: 'javascript:;' },
                  _react2.default.createElement(
                    'i',
                    { className: 'iconfont' },
                    '\uE7EC'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'fixedbar-text' },
                    '\u5546\u54C1\u5BF9\u6BD4'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-item' },
              _react2.default.createElement(
                'a',
                { href: this.state.feedbackUrl, target: '_blank' },
                _react2.default.createElement(
                  'i',
                  { className: 'iconfont' },
                  '\uE7EB'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'fixedbar-text' },
                  '\u53CD\u9988'
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'fixedbar-ft' },
            _react2.default.createElement(
              'div',
              { className: 'fixedbar-item fixedbar-gotop' },
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement(
                  'i',
                  { className: 'iconfont' },
                  '\uE62F'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return SideCustomer;
}(_react.Component); /**
                      * Created by fanwb on 2018/6/22.
                      */


exports.default = SideCustomer;
module.exports = exports['default'];
//# sourceMappingURL=SideCustomer.js.map