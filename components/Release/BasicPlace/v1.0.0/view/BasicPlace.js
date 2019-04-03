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

var BasicPlace = function (_Component) {
    (0, _inherits3.default)(BasicPlace, _Component);

    function BasicPlace(props) {
        (0, _classCallCheck3.default)(this, BasicPlace);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BasicPlace.__proto__ || (0, _getPrototypeOf2.default)(BasicPlace)).call(this, props));

        _this.handleChange = function (e) {
            var data = e.target.value;
            _this.props.itemTmplPublishVo.origin = data;
            _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
        };

        return _this;
    }

    (0, _createClass3.default)(BasicPlace, [{
        key: "render",
        value: function render() {
            var origin = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.origin;
            return _react2.default.createElement(
                "div",
                { className: _basic2.default.labelWrap },
                _react2.default.createElement(
                    "label",
                    { htmlFor: "\u4EA7\u5730", className: _basic2.default.labelTitle },
                    "\u4EA7\u5730 \uFF1A"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic2.default.labelCont },
                    _react2.default.createElement(_input2.default, { size: "large", placeholder: "\u8F93\u5165\u4EA7\u5730", value: origin, onChange: this.handleChange, onBlur: this.handleBlur })
                )
            );
        }
    }]);
    return BasicPlace;
}(_react.Component);

exports.default = BasicPlace;
module.exports = exports["default"];
//# sourceMappingURL=BasicPlace.js.map