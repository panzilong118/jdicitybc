"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GridView = exports.GridViewLayout = undefined;

var _row = require("jdcloudui/lib/row");

var _row2 = _interopRequireDefault(_row);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _col = require("jdcloudui/lib/col");

var _col2 = _interopRequireDefault(_col);

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

require("jdcloudui/lib/row/style");

require("jdcloudui/lib/col/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("../GridView/style/GridView.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* @author RongXiaowei
* @param className 可以不写
* @date 2017-12-11
* @description GridViewLayout
*/

/**********引入系统组件***********/
var GridViewLayout = exports.GridViewLayout = function (_Component) {
    (0, _inherits3.default)(GridViewLayout, _Component);

    function GridViewLayout(props, context) {
        (0, _classCallCheck3.default)(this, GridViewLayout);
        return (0, _possibleConstructorReturn3.default)(this, (GridViewLayout.__proto__ || (0, _getPrototypeOf2.default)(GridViewLayout)).call(this, props, context));
    }

    (0, _createClass3.default)(GridViewLayout, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "gird-view-layout " + (this.props.className || '') },
                this.props.children
            );
        }
    }]);
    return GridViewLayout;
}(_react.Component);

/**
 * @author RongXiaowei
 * @param dataSource :[{render,span,className}]
 * @param rowStyle :rowEven||rowOdd 隔行变色 {偶数||奇数} 默认奇数
 * @date 2017-12-11
 * @description GridView
 */

var GridView = exports.GridView = function (_Component2) {
    (0, _inherits3.default)(GridView, _Component2);

    function GridView(props, context) {
        (0, _classCallCheck3.default)(this, GridView);

        var _this2 = (0, _possibleConstructorReturn3.default)(this, (GridView.__proto__ || (0, _getPrototypeOf2.default)(GridView)).call(this, props, context));

        _this2.isFunction = function (fun) {
            return Object.prototype.toString.call(fun) == '[object Function]';
        };

        return _this2;
    }
    /**
     * @param fun
     * @return Boolean
     */


    (0, _createClass3.default)(GridView, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var span = this.props.dataSource && this.props.dataSource.length > 0 ? 24 / this.props.dataSource.length : 24;
            return _react2.default.createElement(
                _row2.default,
                (0, _extends3.default)({ className: "gird-view " + ("rowOdd" || this.props.rowStyle || this.props.className) }, this.props.row),
                this.props.dataSource ? this.props.dataSource.map(function (item) {
                    return _react2.default.createElement(
                        _col2.default,
                        { key: Math.random(), span: item.span || span, className: (!item.span ? "gird-col-auto" : "") + " " + (item.className || "") },
                        _this3.isFunction(item.render) ? item.render() : item.render
                    );
                }) : _react2.default.createElement(
                    _col2.default,
                    { span: 24 },
                    "\u6682\u65F6\u6CA1\u6709\u4FE1\u606F"
                )
            );
        }
    }]);
    return GridView;
}(_react.Component);
//# sourceMappingURL=GridView.js.map