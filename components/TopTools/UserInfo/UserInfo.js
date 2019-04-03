'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _dec, _class; /* *************************
                   * @author: FengYan
                   * @update: 20180206
                   * @description:用户信息
                   * ************************/

/* ***********  基础组件  ************ */

/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _getLogin_redux = require('./getLogin_redux');

var _getLogin_redux2 = _interopRequireDefault(_getLogin_redux);

var _onLogout = require('../../../sso/onLogout');

var _onLogout2 = _interopRequireDefault(_onLogout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ***********  redux  ************ */
var ShopInfo = (_dec = (0, _reactRedux.connect)(function (state) {
  return _getLogin_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getLoginAction: _getLogin_redux.getLoginAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ShopInfo, _Component);

  function ShopInfo(props) {
    (0, _classCallCheck3.default)(this, ShopInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShopInfo.__proto__ || (0, _getPrototypeOf2.default)(ShopInfo)).call(this, props));

    _this.state = {
      username: '',
      avatarPicSrc: ''
    };
    return _this;
  }

  /*
   * 发送获取用户信息请求
   * */


  (0, _createClass3.default)(ShopInfo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getLoginAction().then(function (rs) {
        if (rs.code != 0) return;
        _this2.setState({
          username: rs.data.username,
          avatarPicSrc: rs.data.avatarPicSrc
        });
      });
    }

    /*
     * 登出操作
     * */

  }, {
    key: 'logout',
    value: function logout() {
      var logouts = {
        "passport": ["/service-passport-view/logout", false],
        "shop": ["/shop-view/logout", false],
        "buyer": ["/buyer-view/logout", false],
        "main": ["/website-view/logout", false]
      };
      (0, _onLogout2.default)(logouts, "login");
    }

    /*
     * 用户名截取
     * */

  }, {
    key: 'strSize',
    value: function strSize(text) {
      var str = '';
      var num = 0;
      var reg = /[\x00-\xff]/;
      for (var i in text) {
        if (!reg.test(text[i])) {
          num += 2;
        } else {
          num += 1;
        }
        if (num <= 6) {
          str += text[i];
        } else {
          str += '...';
          break;
        }
      }
      return str;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'down-menu f-ib deg180' },
        _react2.default.createElement(
          'a',
          null,
          this.state.username,
          _react2.default.createElement(_icon2.default, { type: 'down', className: 'ml5 arrows' })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'down-menu-cont user' },
          _react2.default.createElement(
            'li',
            { className: 'user-pic' },
            _react2.default.createElement(
              'a',
              { target: '_blank', href: '//' + this.props.buyer + '/user-buyer-view/accountmanage/accountInfo',
                className: 'company-a' },
              this.state.avatarPicSrc ? _react2.default.createElement('img', { src: this.state.avatarPicSrc, alt: this.state.username }) : _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(_icon2.default, { type: 'user' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { target: '_blank', href: '//' + this.props.buyer + '/user-buyer-view/accountmanage/accountInfo',
                className: 'company-a' },
              '\u8D26\u53F7\u7BA1\u7406'
            ),
            _react2.default.createElement('span', { className: 'vertical bg-eee' }),
            _react2.default.createElement(
              'a',
              { onClick: function onClick() {
                  return _this3.logout();
                } },
              '\u9000\u51FA'
            )
          )
        )
      );
    }
  }]);
  return ShopInfo;
}(_react.Component)) || _class);
exports.default = ShopInfo;
module.exports = exports['default'];
//# sourceMappingURL=UserInfo.js.map