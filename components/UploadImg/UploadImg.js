'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _upload = require('jdcloudui/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

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

var _form = require('jdcloudui/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('jdcloudui/lib/select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('jdcloudui/lib/upload/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/message/style');

require('jdcloudui/lib/form/style');

require('jdcloudui/lib/select/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

require('./style/UploadImg.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = _radio2.default.Group;
var Option = _select2.default.Option;
var FormItem = _form2.default.Item;
var formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 6 }
};
var formItemLayout2 = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 }
};
var tailFormItemLayout = {
  wrapperCol: {
    span: 10,
    offset: 2
  }
};
_message3.default.config({
  top: 300,
  duration: 2
});
function getBase64(img, callback, imgURL) {
  var reader = new FileReader();
  if (imgURL && imgURL != '') {
    reader.addEventListener('load', function () {
      return callback(imgURL);
    });
    //reader.readAsDataURL(imgURL);
  } else {
    reader.addEventListener('load', function () {
      return callback(reader.result);
    });
    reader.readAsDataURL(img);
  }
}

var UploadImg = function (_Component) {
  (0, _inherits3.default)(UploadImg, _Component);

  function UploadImg(props, context) {
    (0, _classCallCheck3.default)(this, UploadImg);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UploadImg.__proto__ || (0, _getPrototypeOf2.default)(UploadImg)).call(this, props, context));

    _this.beforeUpload = function (file) {
      var maxFileSize = _this.props.maxFileSize;
      var fileSizeType = _this.props.fileSizeType;
      var imgTypes = _this.props.imgType;
      var isLt2M = true,
          isImgTypes = true;
      var fileName = file.name;
      //var validate= file.type === 'image/jpeg';
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
      if (maxFileSize) {
        if (fileSizeType && (fileSizeType.toUpperCase() == 'M' || fileSizeType.toUpperCase() == 'MB')) {
          isLt2M = file.size <= parseInt(maxFileSize) * 1024 * 1024;
        } else if (fileSizeType && fileSizeType.toUpperCase() == 'KB') {
          isLt2M = file.size <= parseInt(maxFileSize) * 1024;
        } else if (fileSizeType && fileSizeType.toUpperCase() == 'B') {
          isLt2M = file.size <= parseInt(maxFileSize);
        } else {
          isLt2M = file.size <= parseInt(maxFileSize) * 1024 * 1024; //默认fileSizeType=='M'
        }
      }
      if (!isImgTypes) {
        _message3.default.error('上传图片的文件格式有误!');
        return false;
      }
      if (!isLt2M) {
        if (!fileSizeType) {
          fileSizeType = 'M';
        }
        _message3.default.error('上传图片的文件大小必须小于' + maxFileSize + fileSizeType + '!');
        return false;
      }
      return true;
    };

    _this.handleChange = function (info) {
      if (info.file.status === 'done') {
        var response = info.file.response;
        if (response && response.code == '0') {
          var picture = response.data;
          if (typeof picture == 'string') {
            picture = JSON.parse(picture);
          }
          _this.imgUrl = picture.pictureURL;
          _this.setState({ imageUrl: picture.pictureURL });
          var attr = _this.props.relation;
          var onChangeValue = _this.props.onChangeValue;

          var obj = {};
          obj[attr] = picture.pictureURL;
          onChangeValue(obj);
          //getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }),picture.pictureURL);
        } else {
          var _onChangeValue = _this.props.onChangeValue;

          var obj = {};
          _onChangeValue(obj);
        }
      }
      if (info.file.status === 'error') {
        _message3.default.error("上传失败！");
      }
    };

    _this.state = { imageUrl: '' };
    _this.imgUrl = '';
    return _this;
  }

  (0, _createClass3.default)(UploadImg, [{
    key: 'render',
    value: function render() {
      //const styles = require('./style/UploadImg.less');
      var style = this.props.style;
      var action = this.props.action;
      var data = this.props.data;
      var name = this.props.name;
      var defaultValue = this.props.defaultValue;
      var imageUrl = '';
      if (defaultValue) {
        if (this.state.imageUrl) {
          imageUrl = this.state.imageUrl;
        } else {
          imageUrl = defaultValue;
        }
      } else {
        imageUrl = this.state.imageUrl;
      }
      console.log(imageUrl);
      if (!style || style == '') {
        style = { width: '150px', height: '150px' };
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _upload2.default,
          { className: 'avatar-uploader',
            name: name,
            showUploadList: false,
            action: action,
            beforeUpload: this.beforeUpload.bind(this),
            onChange: this.handleChange.bind(this),
            data: data
          },
          imageUrl && imageUrl != '' ? _react2.default.createElement('img', { src: imageUrl, alt: '', className: 'avatar', style: style }) : _react2.default.createElement(_icon2.default, { type: 'plus', className: 'avatar-uploader-trigger', style: style })
        )
      );
    }
  }]);
  return UploadImg;
}(_react.Component);

exports.default = UploadImg;
module.exports = exports['default'];
//# sourceMappingURL=UploadImg.js.map