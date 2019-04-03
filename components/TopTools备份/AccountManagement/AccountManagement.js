"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/************  自定义组件  *************/

var AccountManagement = function (_Component) {
  (0, _inherits3.default)(AccountManagement, _Component);

  function AccountManagement(props) {
    (0, _classCallCheck3.default)(this, AccountManagement);
    return (0, _possibleConstructorReturn3.default)(this, (AccountManagement.__proto__ || (0, _getPrototypeOf2.default)(AccountManagement)).call(this, props));
  }

  (0, _createClass3.default)(AccountManagement, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "a",
        { href: "//" + this.props.buyerDomain + "/user-buyer-view/accountmanage/accountInfo", target: "_blank" },
        "\u3010\u8D26\u53F7\u7BA1\u7406\u3011"
      );
    }
  }]);
  return AccountManagement;
}(_react.Component); /*
                      * @author:       冯炎
                      * @update:       20171201
                      * @description:  用户账号管理，新窗口打开
                      * */

/************  基础组件  *************/


exports.default = AccountManagement;
module.exports = exports["default"];
//# sourceMappingURL=AccountManagement.js.map