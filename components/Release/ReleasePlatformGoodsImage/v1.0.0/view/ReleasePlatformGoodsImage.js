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

var _index = require("../../../GoodImagePlatform/v1.0.0/view/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../../SkuImagePlatform/v1.0.0/view/index");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReleasePlatformGoodsImage = function (_Component) {
    (0, _inherits3.default)(ReleasePlatformGoodsImage, _Component);

    function ReleasePlatformGoodsImage(props) {
        (0, _classCallCheck3.default)(this, ReleasePlatformGoodsImage);
        return (0, _possibleConstructorReturn3.default)(this, (ReleasePlatformGoodsImage.__proto__ || (0, _getPrototypeOf2.default)(ReleasePlatformGoodsImage)).call(this, props));
    }

    (0, _createClass3.default)(ReleasePlatformGoodsImage, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_index2.default, {
                    saleAttributeData: this.props.saleAttributeData //拼接后的销售规格数据
                    , updateItemTmplAction: this.props.updateItemTmplAction //更新总数据的方法
                    , itemTmplPublishVo: this.props.itemTmplPublishVo // 发布、保存、编辑，总数据源
                }),
                _react2.default.createElement(_index4.default, {
                    saleAttributeData: this.props.saleAttributeData //拼接后的销售规格数据
                    , updateItemTmplAction: this.props.updateItemTmplAction //更新总数据的方法
                    , itemTmplPublishVo: this.props.itemTmplPublishVo // 发布、保存、编辑，总数据源
                })
            );
        }
    }]);
    return ReleasePlatformGoodsImage;
}(_react.Component); /**
                      * @file 发布商品-商品图片Tab组件
                      */


exports.default = ReleasePlatformGoodsImage;
module.exports = exports["default"];
//# sourceMappingURL=ReleasePlatformGoodsImage.js.map