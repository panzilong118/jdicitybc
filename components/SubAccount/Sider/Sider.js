'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _menu = require('jdcloudui/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

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

require('jdcloudui/lib/menu/style');

require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./style/subAccountSider.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sider = function (_Component) {
  (0, _inherits3.default)(Sider, _Component);

  function Sider(context) {
    (0, _classCallCheck3.default)(this, Sider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sider.__proto__ || (0, _getPrototypeOf2.default)(Sider)).call(this, context));

    _this.state = {
      current: '4'
    };
    return _this;
  }

  (0, _createClass3.default)(Sider, [{
    key: 'handleClick',
    value: function handleClick(e) {
      this.setState({
        current: e.key
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var vKey = this.props.selectKey;
      return _react2.default.createElement(
        'div',
        { className: 'buyer-sider-container' },
        _react2.default.createElement(
          _menu2.default,
          {
            key: Math.random(),
            theme: 'light',
            onClick: this.handleClick.bind(this),
            selectedKeys: [String(vKey)],
            mode: 'inline'
          },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '20001', style: { borderBottom: '1px solid #ecf0f2', paddingLeft: '48px' } },
            _react2.default.createElement(
              'a',
              { href: '/subaccount-buyer-view/subaccountmanage' },
              _react2.default.createElement(_icon2.default, { type: '' }),
              _react2.default.createElement(
                'span',
                { className: 'second-menu-nochild' },
                '\u5B50\u8D26\u53F7\u7BA1\u7406'
              )
            )
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            { key: '20002', style: { borderBottom: '1px solid #ecf0f2', paddingLeft: '48px' } },
            _react2.default.createElement(
              'a',
              { href: '/subaccount-buyer-view/rolemanage' },
              _react2.default.createElement(_icon2.default, { type: '' }),
              _react2.default.createElement(
                'span',
                { className: 'second-menu-nochild' },
                '\u89D2\u8272\u7BA1\u7406'
              )
            )
          )
        )
      );
    }
  }]);
  return Sider;
}(_react.Component); //链接跳转，相当于a标签


exports.default = Sider;
module.exports = exports['default'];
//# sourceMappingURL=Sider.js.map