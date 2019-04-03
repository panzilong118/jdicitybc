"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

require("./style/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JcBreadCrumb = function (_Component) {
    (0, _inherits3.default)(JcBreadCrumb, _Component);

    function JcBreadCrumb(props) {
        (0, _classCallCheck3.default)(this, JcBreadCrumb);

        var _this = (0, _possibleConstructorReturn3.default)(this, (JcBreadCrumb.__proto__ || (0, _getPrototypeOf2.default)(JcBreadCrumb)).call(this, props));

        _this.renderBreadCrumb = function () {
            var lastIndex = _this.state.menu.length - 1;
            return _this.state.menu.map(function (item, index) {
                if (index == lastIndex) {
                    return _react2.default.createElement(
                        "span",
                        { key: index, className: "jc-bc-item" },
                        item.name
                    );
                } else {
                    return _react2.default.createElement(
                        "span",
                        { key: index, className: "jc-bc-item" },
                        _react2.default.createElement(
                            "a",
                            { href: item.url, target: "_blank" },
                            item.name
                        ),
                        _react2.default.createElement(
                            "span",
                            { className: "jc-bc-split" },
                            "/"
                        )
                    );
                }
            });
        };

        _this.state = {
            menu: props.menu || []
        };
        return _this;
    }

    (0, _createClass3.default)(JcBreadCrumb, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.menu) {
                this.setState({
                    menu: nextProps.menu || []
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "jc-breadcurmb-business", key: "jc-breadcurmb-business" },
                this.renderBreadCrumb()
            );
        }
    }]);
    return JcBreadCrumb;
}(_react.Component); /*Created by chenyanhua at 2017/6/6 */


exports.default = JcBreadCrumb;
module.exports = exports["default"];
//# sourceMappingURL=JcBreadCrumb.js.map