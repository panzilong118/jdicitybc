"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _tooltip = require("jdcloudui/lib/tooltip");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require("jdcloudui/lib/icon");

var _icon2 = _interopRequireDefault(_icon);

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

require("jdcloudui/lib/tooltip/style");

require("jdcloudui/lib/icon/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./style/StatusText.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @author RongXiaowei
* @param className        组件的样式名     type:[object String]   默认为空
* @param status           展示的状态       type:[object String]   {error||success||info||warn}  默认 info
* @param text             显示的文字       type:[object String]    
* @param iconType         icon图标        type:[object String]   默认 'question-circle'
* @param overlayClassName 提示的样式名     type:[object String]   默认为空
* @param tooltipContent   提示内容         type:[object String]
* @param placement        提示的位置       type:[object String]  "top|left|right|bottom|topLeft|topRight|bottomLeft|bottomRight|leftTop|leftBottom|rightTop|rightBottom" 默认 top
* @date 2017-12-13
* @description StatusText 状态信息组件
*/

/**********引入系统组件***********/
var StatusText = function (_Component) {
    (0, _inherits3.default)(StatusText, _Component);

    function StatusText(props, context) {
        (0, _classCallCheck3.default)(this, StatusText);

        var _this = (0, _possibleConstructorReturn3.default)(this, (StatusText.__proto__ || (0, _getPrototypeOf2.default)(StatusText)).call(this, props, context));

        _this.renderText = function (status, text) {
            switch (status) {
                case "error":
                    return _react2.default.createElement(
                        "span",
                        { className: "text-error" },
                        text || ""
                    );
                case "success":
                    return _react2.default.createElement(
                        "span",
                        { className: "text-success" },
                        text || ""
                    );
                case "warn":
                    return _react2.default.createElement(
                        "span",
                        { className: "text-warning" },
                        text || ""
                    );
                case "info":
                    return _react2.default.createElement(
                        "span",
                        { className: "text-disabled" },
                        text || ""
                    );
                default:
                    return _react2.default.createElement(
                        "span",
                        { className: "text-disabled" },
                        text || ""
                    );
            }
        };

        return _this;
    }
    /**
     * @param status   展示的状态      type:[object String]   {error||success||info||warn}  默认 info
     * @param text     显示的文字      type:[object String]
     * @description  输出文字组件
     */


    (0, _createClass3.default)(StatusText, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "" + (this.props.className || "") },
                this.renderText(this.props.status, this.props.text),
                this.props.tooltipContent && _react2.default.createElement(
                    "span",
                    { className: "status-text-icon" },
                    _react2.default.createElement(
                        _tooltip2.default,
                        { placement: this.props.placement || "top", title: this.props.tooltipContent, overlayClassName: "status-text-tooltip " + (this.props.overlayClassName || "") },
                        _react2.default.createElement(_icon2.default, { type: "" + (this.props.iconType || "question-circle") })
                    )
                )
            );
        }
    }]);
    return StatusText;
}(_react.Component);
/**********引入样式***********/


exports.default = StatusText;
module.exports = exports["default"];
//# sourceMappingURL=StatusText.js.map