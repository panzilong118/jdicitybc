'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

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

require('jdcloudui/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * author:  冯炎
 * created:  20180209
 * description: 未入驻公司提示弹框
 * */
/* **********  系统组件  ********** */
var cookie = new _Cookies2.default();

var CompanyLayer = function (_Component) {
  (0, _inherits3.default)(CompanyLayer, _Component);

  function CompanyLayer(props) {
    (0, _classCallCheck3.default)(this, CompanyLayer);
    return (0, _possibleConstructorReturn3.default)(this, (CompanyLayer.__proto__ || (0, _getPrototypeOf2.default)(CompanyLayer)).call(this, props));
  }

  (0, _createClass3.default)(CompanyLayer, [{
    key: 'isCompanyId',
    value: function isCompanyId() {
      if (typeof window !== 'undefined') {
        var btnArr = document.getElementsByClassName('company-a') || [];
        var btnArrLen = btnArr.length;
        for (var i = 0; i < btnArrLen; i++) {
          btnArr[i].onclick = function (e) {
            if (cookie.get('companyId') == '') {
              _modal2.default.warning({
                title: _react2.default.createElement(
                  'span',
                  { style: { fontSize: '16px' } },
                  '\u60A8\u8FD8\u672A\u6709\u4EFB\u4F55\u53EF\u7BA1\u7406\u7684\u6709\u6548\u516C\u53F8'
                ),
                content: _react2.default.createElement(
                  'span',
                  { style: { fontSize: '14px' } },
                  '\u60A8\u53EF\u4EE5\u524D\u5F80\u201C\u8D26\u53F7\u7BA1\u7406-\u516C\u53F8\u7BA1\u7406\u201D\u4E2D\u7EF4\u62A4\u516C\u53F8\uFF0C\u6216\u8005\u201C\u7ACB\u5373\u5165\u9A7B"\u7EF4\u62A4\u516C\u53F8\u4FE1\u606F\uFF0C\u5E73\u53F0\u5BA1\u6838\u901A\u8FC7\u540E\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u516C\u53F8\u8FDB\u884C\u91C7\u8D2D'
                ),
                okText: '确定'
              });
              return false;
            }
          };
        }
      }
    }
  }]);
  return CompanyLayer;
}(_react.Component);

exports.default = CompanyLayer;
module.exports = exports['default'];
//# sourceMappingURL=CompanyLayer.js.map