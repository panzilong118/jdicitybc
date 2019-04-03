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
                   * @description:手机商城
                   * ************************/

/* ***********  基础组件  ************ */

/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _getCode_redux = require('./getCode_redux');

var _getCode_redux2 = _interopRequireDefault(_getCode_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ***********  redux  ************ */
var MobileMall = (_dec = (0, _reactRedux.connect)(function (state) {
  return _getCode_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCodeAction: _getCode_redux.getCodeAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(MobileMall, _Component);

  function MobileMall(props) {
    (0, _classCallCheck3.default)(this, MobileMall);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MobileMall.__proto__ || (0, _getPrototypeOf2.default)(MobileMall)).call(this, props));

    _this.state = {
      weixinCodeUrl: '',
      appDownCodeUrl: ''
    };
    return _this;
  }

  /*
   * 发送获取二维码请求
   * */


  (0, _createClass3.default)(MobileMall, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getCodeAction().then(function (rs) {
        if (rs.code == 0) {
          _this2.setState({
            weixinCodeUrl: rs.data.weixinCodeUrl,
            appDownCodeUrl: rs.data.appDownCodeUrl
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'down-menu f-ib' },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement(_icon2.default, { type: 'new-phone phone-icon' }),
          '\u624B\u673A\u5546\u57CE'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'down-menu-cont codeImg' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('img', { src: this.state.weixinCodeUrl, alt: '\u5FAE\u4FE1\u5546\u57CE' }),
            _react2.default.createElement(
              'p',
              null,
              '\u5FAE\u4FE1\u626B\u4E00\u626B'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5173\u6CE8\u5546\u57CE'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u5FAE\u4FE1\u5546\u57CE'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('img', { src: this.state.appDownCodeUrl, alt: '\u7ACB\u5373\u4E0B\u8F7DAPP' }),
            _react2.default.createElement(
              'p',
              null,
              '\u626B\u63CF\u4E8C\u7EF4\u7801'
            ),
            _react2.default.createElement(
              'p',
              null,
              '\u7ACB\u5373\u4E0B\u8F7DAPP'
            )
          )
        )
      );
    }
  }]);
  return MobileMall;
}(_react.Component)) || _class);
exports.default = MobileMall;
module.exports = exports['default'];
//# sourceMappingURL=MobileMall.js.map