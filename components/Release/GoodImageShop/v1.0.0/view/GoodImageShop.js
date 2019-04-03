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

var _basic_img = require("./style/basic_img.less");

var _basic_img2 = _interopRequireDefault(_basic_img);

var _UploadImg = require("./UploadImg/UploadImg");

var _UploadImg2 = _interopRequireDefault(_UploadImg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoodImageShop = function (_Component) {
    (0, _inherits3.default)(GoodImageShop, _Component);

    function GoodImageShop(props) {
        (0, _classCallCheck3.default)(this, GoodImageShop);
        return (0, _possibleConstructorReturn3.default)(this, (GoodImageShop.__proto__ || (0, _getPrototypeOf2.default)(GoodImageShop)).call(this, props));
    }

    (0, _createClass3.default)(GoodImageShop, [{
        key: "onCallBackData",
        value: function onCallBackData(item) {
            this.props.itemTmplPublishVo.itemPicVoList = item;
            this.props.updateItemTmplAction(this.props.itemTmplPublishVo);
        }
    }, {
        key: "render",
        value: function render() {
            this.itemImgInfos = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemPicVoList ? this.props.itemTmplPublishVo.itemPicVoList : [];
            // console.log("this.itemImgInfos====",this.itemImgInfos);
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: _basic_img2.default.basicImg },
                    _react2.default.createElement(
                        "span",
                        { className: "mr20 f-fs14 f-fwn" },
                        _react2.default.createElement(
                            "i",
                            { className: "text-red mr5" },
                            "*"
                        ),
                        "\u5546\u54C1\u56FE\u7247"
                    ),
                    "(\u81F3\u5C11\u6DFB\u52A0\u4E00\u5F20\uFF0C\u6700\u591A\u5141\u8BB8\u5341\u5F20\uFF1B\u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M\uFF1B\u5141\u8BB8\u7684\u56FE\u7247\u683C\u5F0F\u6709jpg\u3001jpeg\u3001png\u3001JPG\u3001JPEG\u3001PNG ; \u56FE\u7247\u6700\u4F73\u5C3A\u5BF8\u4E3A800x800)"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic_img2.default.UploadSelect },
                    _react2.default.createElement(_UploadImg2.default, {
                        onCallBackData: this.onCallBackData.bind(this),
                        itemImgInfos: this.itemImgInfos,
                        num: 10
                    })
                )
            );
        }
    }]);
    return GoodImageShop;
}(_react.Component); /**
                      * @file 发布商品-商品图片
                      */

exports.default = GoodImageShop;
module.exports = exports["default"];
//# sourceMappingURL=GoodImageShop.js.map