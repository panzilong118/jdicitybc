"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _select = require("jdcloudui/lib/select");

var _select2 = _interopRequireDefault(_select);

require("jdcloudui/lib/select/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _basic = require("./style/basic.less");

var _basic2 = _interopRequireDefault(_basic);

var _queryData = require("./redux/queryData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option; /**
                                       * @file 发布商品-基础设置- 商品名称
                                       */

var AdminInformation = function (_Component) {
    (0, _inherits3.default)(AdminInformation, _Component);

    function AdminInformation(props) {
        (0, _classCallCheck3.default)(this, AdminInformation);

        var _this = (0, _possibleConstructorReturn3.default)(this, (AdminInformation.__proto__ || (0, _getPrototypeOf2.default)(AdminInformation)).call(this, props));

        _this.handelChange = function (value) {
            console.log("value", value);
            var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
            itemTmplPublishVo.operatorId = value;
            _this.props.updateItemTmplAction(itemTmplPublishVo);
            console.log("12121", _this.props.itemTmplPublishVo);
        };

        _this.state = {
            user: {},
            dataArr: []
        };
        return _this;
    }

    (0, _createClass3.default)(AdminInformation, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(this.props.itemTmplPublishVo));
            if (this.props.type == '1') {
                //获取平台运营人员以及发布人员
                this.props.queryLoginInfo("", this.props.type).then(function (res) {
                    if (res.code == 0) {
                        _this2.props.queryAllAdminUser().then(function (dt) {
                            if (res.code == 0) {
                                _this2.setState({
                                    user: res.data,
                                    dataArr: dt.data
                                });

                                itemTmplPublishVo.publishUserId = res.data.userId;
                                _this2.props.updateItemTmplAction(itemTmplPublishVo);
                            }
                        });
                    }
                });
            } else {
                this.props.queryLoginInfo("", this.props.type).then(function (res) {
                    if (res.code == 0) {
                        _this2.setState({
                            user: res.data
                        });
                        console.log("res==============", res.data);
                        itemTmplPublishVo.publishUserId = res.data.userId;
                        _this2.props.updateItemTmplAction(itemTmplPublishVo);
                    }
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                user = _state.user,
                dataArr = _state.dataArr;

            var operatorId = this.props.itemTmplPublishVo ? this.props.itemTmplPublishVo.operatorId : null;
            var publishUserId = this.props.itemTmplPublishVo ? this.props.itemTmplPublishVo.publishUserId : null;
            this.type = this.props.type;
            var setPlaceholder = {
                placeholder: '请选择',
                value: operatorId,
                onChange: function onChange(value) {
                    return _this3.handelChange(value);
                }
            };
            return _react2.default.createElement(
                "div",
                { className: "mt15 mb10" },
                _react2.default.createElement(
                    "strong",
                    { className: "f-fs14" },
                    "\u7BA1\u7406\u5458\u4FE1\u606F"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic2.default.label },
                    _react2.default.createElement(
                        "div",
                        { className: _basic2.default.labelWrap },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "\u5546\u54C1\u53D1\u5E03", className: _basic2.default.labelTitle },
                            "\u5546\u54C1\u53D1\u5E03 : "
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _basic2.default.labelCont },
                            _react2.default.createElement(
                                _select2.default,
                                { placeholder: "\u8BF7\u9009\u62E9", value: publishUserId, className: _basic2.default.labelSelect },
                                _react2.default.createElement(
                                    Option,
                                    { value: user.userId },
                                    user.username
                                )
                            )
                        )
                    ),
                    this.type == "1" ? _react2.default.createElement(
                        "div",
                        { className: _basic2.default.labelWrap },
                        _react2.default.createElement(
                            "label",
                            { htmlFor: "\u5546\u54C1\u8FD0\u8425", className: _basic2.default.labelTitle },
                            _react2.default.createElement(
                                "span",
                                { className: _basic2.default.colorRed },
                                "*"
                            ),
                            " \u5546\u54C1\u8FD0\u8425 :"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _basic2.default.labelCont },
                            _react2.default.createElement(
                                _select2.default,
                                (0, _extends3.default)({ placeholder: "\u8BF7\u9009\u62E9", className: _basic2.default.labelSelect }, setPlaceholder),
                                dataArr.map(function (item, index) {
                                    return _react2.default.createElement(
                                        Option,
                                        { key: index, value: item.id },
                                        item.username
                                    );
                                })
                            )
                        )
                    ) : null
                )
            );
        }
    }]);
    return AdminInformation;
}(_react.Component);

exports.default = AdminInformation;
module.exports = exports["default"];
//# sourceMappingURL=AdminInformation.js.map