'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UploadSelect = require('./UploadSelect/UploadSelect');

var _UploadSelect2 = _interopRequireDefault(_UploadSelect);

var _basic_img = require('./style/basic_img.less');

var _basic_img2 = _interopRequireDefault(_basic_img);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoodImagePlatform = function (_Component) {
    (0, _inherits3.default)(GoodImagePlatform, _Component);

    function GoodImagePlatform(props) {
        (0, _classCallCheck3.default)(this, GoodImagePlatform);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GoodImagePlatform.__proto__ || (0, _getPrototypeOf2.default)(GoodImagePlatform)).call(this, props));

        _this.handleChange = function (info) {
            if (info) {
                info.map(function (item) {
                    var data = {
                        url: item.url,
                        alt: null
                    };
                    if (_this.itemImgInfos.length < 10) {
                        _this.itemImgInfos.push(data);
                    }
                });
                _this.props.itemTmplPublishVo.itemPicVoList = _this.itemImgInfos;
                _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
            } else {
                _message3.default.error("上传失败");
            }
        };

        _this.handleReChange = function (info, index) {
            console.log("重新上传", info, "index", index);
            if (info) {
                var item = {
                    url: info.url,
                    alt: null
                };
                _this.itemImgInfos.splice(index, 1, item);
                _this.props.itemTmplPublishVo.itemPicVoList = _this.itemImgInfos;
                _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
            } else {
                _message3.default.error("上传失败");
            }
        };

        _this.handleCancel = function (index) {
            console.log("删除 index", index);
            _this.itemImgInfos.splice(index, 1);
            _this.props.itemTmplPublishVo.itemPicVoList = _this.itemImgInfos;
            _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
        };

        _this.handleALTChange = function (e, index) {
            console.log("改变ALT index", e.target.value, index);
            _this.itemImgInfos[index].alt = e.target.value;
            _this.props.itemTmplPublishVo.itemPicVoList = _this.itemImgInfos;
            _this.props.updateItemTmplAction(_this.props.itemTmplPublishVo);
        };

        return _this;
    }
    //上传图片


    //重新上传


    //删除


    //改变ALT


    (0, _createClass3.default)(GoodImagePlatform, [{
        key: 'render',
        value: function render() {
            this.itemImgInfos = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemPicVoList ? this.props.itemTmplPublishVo.itemPicVoList : [];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: _basic_img2.default.basic_img },
                    _react2.default.createElement(
                        'span',
                        { className: 'mr20 f-fs14 f-fwn' },
                        _react2.default.createElement(
                            'i',
                            { className: 'text-red mr5' },
                            '*'
                        ),
                        '\u5546\u54C1\u56FE\u7247'
                    ),
                    '(\u81F3\u5C11\u6DFB\u52A0\u4E00\u5F20\uFF0C\u6700\u591A\u5141\u8BB8\u5341\u5F20\uFF1B\u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M\uFF1B\u5141\u8BB8\u7684\u56FE\u7247\u683C\u5F0F\u6709jpg\u3001jpeg\u3001png\u3001JPG\u3001JPEG\u3001PNG ; \u56FE\u7247\u6700\u4F73\u5C3A\u5BF8\u4E3A800x800)'
                ),
                _react2.default.createElement(
                    'div',
                    { className: _basic_img2.default.UploadSelect },
                    _react2.default.createElement(_UploadSelect2.default, {
                        itemImgInfos: this.itemImgInfos,
                        num: 10,
                        type: true,
                        handleChange: this.handleChange,
                        handleReChange: this.handleReChange,
                        handleCancel: this.handleCancel,
                        handleALTChange: this.handleALTChange
                    })
                )
            );
        }
    }]);
    return GoodImagePlatform;
}(_react.Component); /**
                      * @file 发布商品-商品图片
                      */

exports.default = GoodImagePlatform;
module.exports = exports['default'];
//# sourceMappingURL=GoodImagePlatform.js.map