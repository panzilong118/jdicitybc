'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

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

require('jdcloudui/lib/upload/style');

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * shop 上传图片，携带重新上传和删除按钮
 */
_message3.default.config({
  top: 300,
  duration: 2
});
var uploadFlag = true;
function getBase64(img, callback, imageUrl) {
  var reader = new FileReader();
  if (imageUrl && imageUrl != '') {
    reader.addEventListener('load', function () {
      return callback(imageUrl);
    });
    //reader.readAsDataURL(imageUrl);
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
      if (maxFileSize && file.size) {
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
      if (info.file.status === 'uploading') {
        if (uploadFlag) {
          _message3.default.loading('正在上传中，请稍等....', 1);
        }
        uploadFlag = false;
      }
      if (info.file.status === 'done') {
        uploadFlag = true;
        var response = info.file.response;
        if (response && response.code == '0') {
          var picture = response.data;
          _this.setState({ imageUrl: picture });
          var attr = _this.props.relation;
          var onChange = _this.props.onChange;

          var obj = {};
          obj[attr] = picture;
          onChange(obj);
          //getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }),picture.pictureURL);
        } else {
          if (response && response.code == '-1') {
            _message3.default.error(response.msg);
          } else {
            _message3.default.error("上传失败！");
          }
          var _onChange = _this.props.onChange;

          var obj = {};
          _onChange(obj);
        }
      }
      if (info.file.status === 'error') {
        uploadFlag = true;
        _message3.default.error("上传失败！");
      }
    };

    _this.onRemove = function () {
      //更新图片
      if (_this.props.onRemove && typeof _this.props.onRemove == 'function') {
        _this.props.onRemove({ url: _this.state.imageUrl });
      }
      _this.setState({
        imageUrl: undefined
      });
    };

    _this.state = {
      imageUrl: props.imageUrl || ''
    };
    return _this;
  }

  (0, _createClass3.default)(UploadImg, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        imageUrl: nextProps.imageUrl || ''
      });
    }

    //移除

  }, {
    key: 'render',
    value: function render() {
      //const styles = require('./style/UploadImg.less');
      var style = this.props.style || {};
      var action = this.props.action;
      var data = this.props.data;
      var name = this.props.name;
      var imageUrl = this.state.imageUrl || '';

      var wrapClassName = 'upload-select-wrap ' + (this.props.className || '');
      if (imageUrl && imageUrl.length > 0) {
        wrapClassName += ' solid-border';
      }
      return _react2.default.createElement(
        'div',
        { className: wrapClassName, style: style },
        imageUrl && imageUrl != '' ? _react2.default.createElement(
          'div',
          { 'class': 'upload-select-box' },
          _react2.default.createElement('img', { src: imageUrl }),
          _react2.default.createElement(
            'div',
            { 'class': 'upload-select-footer' },
            _react2.default.createElement(
              _upload2.default,
              {
                name: name,
                showUploadList: false,
                action: action,
                beforeUpload: this.beforeUpload.bind(this),
                onChange: this.handleChange.bind(this),
                data: data
              },
              _react2.default.createElement(
                'div',
                { 'class': 'upload-select-btn' },
                '\u91CD\u65B0\u4E0A\u4F20'
              )
            ),
            _react2.default.createElement(
              'div',
              { 'class': 'upload-select-removebtn', onClick: this.onRemove },
              '\u5220\u9664'
            )
          )
        ) : _react2.default.createElement(
          _upload2.default,
          {
            name: name,
            showUploadList: false,
            action: action,
            beforeUpload: this.beforeUpload.bind(this),
            onChange: this.handleChange.bind(this),
            data: data
          },
          _react2.default.createElement(
            'div',
            { className: 'upload-select-defaultbtn' },
            _react2.default.createElement(_icon2.default, { type: 'plus', className: 'upload-plus' }),
            ' ',
            _react2.default.createElement('br', null),
            '\u4E0A\u4F20\u56FE\u7247'
          )
        )
      );
    }
  }]);
  return UploadImg;
}(_react.Component);

exports.default = UploadImg;
module.exports = exports['default'];
//# sourceMappingURL=UploadImage.js.map