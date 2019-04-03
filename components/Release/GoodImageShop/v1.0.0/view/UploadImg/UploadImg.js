'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

var _upload = require('jdcloudui/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

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

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/upload/style');

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imageupload = require('./style/imageupload.less');

var _imageupload2 = _interopRequireDefault(_imageupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploadFlag = true;
function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
        return callback(reader.result);
    });
    reader.readAsDataURL(img);
}
function beforeUpload(file) {
    var isImgTypes = true;
    var fileName = file.name;
    var imgTypes = ['jpg', 'jpeg', 'png'];
    if (imgTypes && imgTypes.length > 0) {
        var fileTypes = fileName.split('.');
        var type = fileTypes[fileTypes.length - 1];
        type = type.toUpperCase();
        imgTypes = imgTypes.map(function (types, index) {
            return types.toUpperCase();
        });
        if (imgTypes.indexOf(type) === -1) {
            //文件类型不在用户指定的范围内
            isImgTypes = false;
        }
    }
    if (!isImgTypes) {
        _message3.default.error('允许的图片格式有jpg、jpeg、png、JPG、JPEG、PNG');
    }
    return isImgTypes;
};

var UploadImg = function (_Component) {
    (0, _inherits3.default)(UploadImg, _Component);

    function UploadImg(props, context) {
        (0, _classCallCheck3.default)(this, UploadImg);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UploadImg.__proto__ || (0, _getPrototypeOf2.default)(UploadImg)).call(this, props, context));

        _this.handleChange = function (info) {
            if (info.file.status === 'uploading') {
                if (uploadFlag) {
                    _message3.default.loading('正在上传中，请稍等....', 1.5);
                }
                uploadFlag = false;
            }
            if (info.file.status === 'done') {
                uploadFlag = true;
                //注意：这里是实现成功 接受返回值 图片的url
                if (info.file.response.code == 0) {
                    // console.log('data:'+typeof info.file.response.data)
                    var urls = info.file.response.data;
                    urls && _this.itemImgInfos.push({
                        url: urls,
                        alt: ''
                    });
                    //将数据传给父组件
                    _this.props.onCallBackData(_this.itemImgInfos);
                } else {
                    _message3.default.error(info.file.response.msg);
                }
            } else if (info.file.status === 'error') {
                uploadFlag = true;
                var msg = info.file.response && info.file.response.msg ? info.file.response.msg : "上传失败";
                _message3.default.error(msg);
            }
        };

        _this.handleReChange = function (info) {
            if (info.file.status === 'uploading') {
                if (uploadFlag) {
                    _message3.default.loading('正在上传中，请稍等....', 1.5);
                }
                uploadFlag = false;
            }
            if (info.file.status === 'done') {
                uploadFlag = true;
                //重新上传成功 接受返回图片的url
                if (+info.file.response.code === 0) {
                    var url = info.file.response.data;
                    var repeatItem = {
                        url: url,
                        alt: ''
                    };
                    _this.itemImgInfos.splice(_this.state.index, 1, repeatItem);
                    //将数据传给父组件
                    _this.props.onCallBackData(_this.itemImgInfos);
                } else {
                    _message3.default.error(info.file.response.msg);
                }
            } else if (info.file.status === 'error') {
                uploadFlag = true;
                var msg = info.file.response && info.file.response.msg ? info.file.response.msg : "上传失败";
                _message3.default.error(msg);
            }
        };

        _this.handleCancel = function (index) {
            _this.itemImgInfos.splice(index, 1);
            //将数据传给父组件
            _this.props.onCallBackData(_this.itemImgInfos);
        };

        _this.handleReUpload = function (index) {
            _this.state.index = index;
            _this.setState({
                index: _this.state.index
            });
        };

        _this.onChangeAlt = function (e) {
            _this.itemImgInfos[e.target.id].alt = e.target.value;
            _this.props.onCallBackData(_this.itemImgInfos);
        };

        _this.onBlurChange = function (index) {
            //将数据传给父组件
            _this.props.onCallBackData(_this.itemImgInfos);
        };

        _this.loop = function (data) {
            return data.map(function (item, index) {
                return item.url ? _react2.default.createElement(
                    'div',
                    { className: _imageupload2.default.avatarcontainer, key: index },
                    _react2.default.createElement(
                        'div',
                        { className: _imageupload2.default.avatarwrapper },
                        _react2.default.createElement(
                            'div',
                            { className: _this.uploadName },
                            _react2.default.createElement(
                                _upload2.default,
                                {
                                    className: _imageupload2.default.lUpload,
                                    name: 'file',
                                    showUploadList: false,
                                    action: '/proxy/base/upload/uploadImgLimitFiveMega',
                                    beforeUpload: beforeUpload,
                                    onChange: _this.handleReChange
                                },
                                _react2.default.createElement(
                                    'span',
                                    { className: _imageupload2.default.reupload, onClick: function onClick() {
                                            return _this.handleReUpload(index);
                                        } },
                                    '重新上传'
                                )
                            ),
                            _react2.default.createElement('span', { className: _imageupload2.default.gip }),
                            _react2.default.createElement(
                                'span',
                                { className: _imageupload2.default.deletespan, onClick: function onClick() {
                                        return _this.handleCancel(index);
                                    } },
                                '删除'
                            )
                        ),
                        _react2.default.createElement('img', { src: item.url, alt: item.alt, className: _imageupload2.default.avatar })
                    ),
                    _react2.default.createElement(_input2.default, { placeholder: '\u8F93\u5165ALT\u6807\u7B7E', onChange: _this.onChangeAlt, onBlur: function onBlur() {
                            return _this.onBlurChange(index);
                        },
                        value: _this.itemImgInfos[index].alt, id: index, maxLength: '50' })
                ) : null;
            });
        };

        _this.state = {
            index: null
        };
        _this.loop = _this.loop.bind(_this);
        _this.uploadName = _imageupload2.default.avatardelete;
        return _this;
    }

    (0, _createClass3.default)(UploadImg, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'addEventHandler',
        value: function addEventHandler(target, type, func) {
            if (target.addEventListener) {
                //监听IE9，谷歌和火狐
                target.addEventListener(type, func, false);
            } else if (target.attachEvent) {
                target.attachEvent("on" + type, func);
            } else {
                target["on" + type] = func;
            }
        }
        //上传

        //重新上传

        //删除

        //重新上传时的下标

        //改变ALT

        //失去焦点后确认输入ALT

        //循环的到插入的每张照片

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // console.log("nextProps====",nextProps);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var browser = '';
            var b_version = '';
            var version = [];
            var trim_Version = '';
            if (navigator) {
                browser = navigator.appName;
                b_version = navigator.appVersion;
                if (b_version) {
                    version = b_version.split(";");
                    if (version.length > 1) {
                        trim_Version = version[1].replace(/[ ]/g, "");
                    } else {}
                } else {}
            } else {}
            if (browser && b_version && version && trim_Version) {
                console.log(browser, b_version, version, trim_Version, 'browser, b_version, version, trim_Version');
                if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE6.0") {
                    console.log("IE 6.0");
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0") {
                    console.log("IE 7.0");
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
                    console.log("IE 8.0");
                } else if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
                    //alert("IE 9.0");
                    this.uploadName = _imageupload2.default.avatardelete2;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            this.itemImgInfos = this.props.itemImgInfos ? this.props.itemImgInfos : [];
            var uploadButton = _react2.default.createElement(
                'div',
                { className: _imageupload2.default.avatarcontainer },
                _react2.default.createElement(
                    'div',
                    { className: _imageupload2.default.avatarwrapperadd },
                    _react2.default.createElement(
                        _upload2.default,
                        {
                            className: _imageupload2.default.avataruploader,
                            name: 'file',
                            showUploadList: false,
                            action: '/proxy/base/upload/uploadImgLimitFiveMega',
                            beforeUpload: beforeUpload,
                            onChange: this.handleChange,
                            data: { platformId: 2 },
                            multiple: true
                        },
                        _react2.default.createElement(
                            'div',
                            { className: _imageupload2.default.avataruploadertrigger },
                            _react2.default.createElement(_icon2.default, { type: 'plus', size: 'large', className: _imageupload2.default.plusicon }),
                            _react2.default.createElement(
                                'span',
                                { className: _imageupload2.default.plus1 },
                                '\u6DFB\u52A0\u56FE\u7247'
                            )
                        )
                    )
                ),
                _react2.default.createElement(_input2.default, { placeholder: '\u56FE\u7247ALT\u6807\u7B7E', disabled: true })
            );
            return _react2.default.createElement(
                'div',
                { className: _imageupload2.default.avatarfl },
                this.itemImgInfos !== [] && this.itemImgInfos.length > 0 && this.loop(this.itemImgInfos),
                this.itemImgInfos.length >= this.props.num ? null : uploadButton
            );
        }
    }]);
    return UploadImg;
}(_react.Component);

exports.default = UploadImg;
module.exports = exports['default'];
//# sourceMappingURL=UploadImg.js.map