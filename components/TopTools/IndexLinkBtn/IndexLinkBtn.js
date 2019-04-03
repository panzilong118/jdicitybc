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

/* ***********  自定义组件  ************ */
var IndexLinkBtn = function (_Component) {
  (0, _inherits3.default)(IndexLinkBtn, _Component);

  function IndexLinkBtn(props) {
    (0, _classCallCheck3.default)(this, IndexLinkBtn);
    return (0, _possibleConstructorReturn3.default)(this, (IndexLinkBtn.__proto__ || (0, _getPrototypeOf2.default)(IndexLinkBtn)).call(this, props));
  }

  (0, _createClass3.default)(IndexLinkBtn, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "a",
        { href: "//" + this.props.defaultDomain, className: "signName company-a" },
        "\u9996\u9875"
      );
    }
  }]);
  return IndexLinkBtn;
}(_react.Component); /* *************************
                      * @author: FengYan
                      * @update: 20180206
                      * @description:首页链接跳转
                      * ************************/

/* ***********  基础组件  ************ */


exports.default = IndexLinkBtn;
module.exports = exports["default"];
//# sourceMappingURL=IndexLinkBtn.js.map