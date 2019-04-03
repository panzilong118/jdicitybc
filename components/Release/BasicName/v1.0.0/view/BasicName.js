"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = require("jdcloudui/lib/input");

var _input2 = _interopRequireDefault(_input);

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

require("jdcloudui/lib/input/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _basic = require("./style/basic.less");

var _basic2 = _interopRequireDefault(_basic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 发布商品-基础设置- 商品名称
 */

var BasicName = function (_Component) {
    (0, _inherits3.default)(BasicName, _Component);

    function BasicName(props) {
        (0, _classCallCheck3.default)(this, BasicName);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BasicName.__proto__ || (0, _getPrototypeOf2.default)(BasicName)).call(this, props));

        _this.handleChange = function (e) {
            var data = e.target.value;
            console.log("eeee===", data);
            if (data.length <= 0) {
                _this.setState({
                    showTips: true
                });
            } else {
                _this.setState({
                    showTips: false
                });
            }
            _this.props.itemTmplPublishVo.itemName = data;
            // this.props.updateItemTmplAction(this.props.itemTmplPublishVo);
        };

        _this.handleBlur = function () {
            // const data = e.target.value;
            // this.props.itemTmplPublishVo.itemName = data;
            _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
        };

        _this.state = {
            showTips: false
        };
        return _this;
    }

    (0, _createClass3.default)(BasicName, [{
        key: "render",
        value: function render() {
            var itemName = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemName;
            return _react2.default.createElement(
                "div",
                { className: _basic2.default.labelWrap },
                _react2.default.createElement(
                    "label",
                    { htmlFor: "\u5546\u54C1\u540D\u79F0", className: _basic2.default.labelTitle },
                    _react2.default.createElement(
                        "span",
                        { className: _basic2.default.colorRed },
                        "*"
                    ),
                    "\u5546\u54C1\u540D\u79F0\uFF1A"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic2.default.labelCont },
                    _react2.default.createElement(_input2.default, { size: "large", placeholder: "\u8F93\u5165\u5546\u54C1\u540D\u79F0", value: itemName, onChange: this.handleChange, onBlur: this.handleBlur })
                ),
                this.state.showTips ? _react2.default.createElement(
                    "div",
                    { className: _basic2.default.errorTips },
                    "\u5546\u54C1\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
                ) : null
            );
        }
    }]);
    return BasicName;
}(_react.Component);

exports.default = BasicName;
module.exports = exports["default"];
//# sourceMappingURL=BasicName.js.map