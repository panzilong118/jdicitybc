'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _upload = require('jdcloudui/lib/upload');

var _upload2 = _interopRequireDefault(_upload);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

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

require('jdcloudui/lib/upload/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_message3.default.config({
  top: 300,
  duration: 2
}); /**
     * @file 文件上传组件
     * @author chenyanhua
     * @date 2018-08-02 
     */

var UploadFile = function (_Component) {
  (0, _inherits3.default)(UploadFile, _Component);

  function UploadFile(props) {
    (0, _classCallCheck3.default)(this, UploadFile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UploadFile.__proto__ || (0, _getPrototypeOf2.default)(UploadFile)).call(this, props));

    _this.beforeUpload = function (file) {
      var maxFileSize = _this.props.maxFileSize;
      var fileSizeType = _this.props.fileSizeType;
      var propsFileTypes = _this.props.fileType;
      var isLt2M = true,
          isFileTypes = true;
      var fileName = file.name;
      //var validate= file.type === 'image/jpeg';
      if (propsFileTypes && propsFileTypes.length > 0) {
        var fileTypes = fileName.split('.');
        var type = fileTypes[fileTypes.length - 1];
        type = type.toUpperCase();
        propsFileTypes = propsFileTypes.map(function (types, index) {
          return types.toUpperCase();
        });
        if (propsFileTypes.indexOf(type) === -1) {
          //文件类型不在用户指定的范围内
          isFileTypes = false;
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
      if (!isFileTypes) {
        _message3.default.error('上传图片的文件格式有误!');
        _this.canUpload = false;
        return false;
      }
      if (!isLt2M) {
        if (!fileSizeType) {
          fileSizeType = 'M';
        }
        _message3.default.error('上传图片的文件大小必须小于' + maxFileSize + fileSizeType + '!');
        _this.canUpload = false;
        return false;
      }
      _this.canUpload = true;
      return true;
    };

    _this.onChange = function (info) {
      if (_this.canUpload) {
        _this.setState({
          fileList: info.fileList
        });
        if (info.file.status === 'done') {
          var response = info.file.response;
          if (response && response.code == '0') {
            var fileUrl = response.data;
            // 向父级组件返回上传文件信息
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                onFileListChange = _this$props.onFileListChange;

            if (onChange) {
              onChange({
                uid: info.file.uid,
                url: fileUrl,
                name: info.file.name
              });
            }
            if (onFileListChange) {
              onFileListChange(info.fileList);
            }
            _message3.default.success('文件上传成功');
          } else {
            if (response && response.code == '-1') {
              _message3.default.error(response.msg);
            } else {
              _message3.default.error("上传失败！");
            }
            var _this$props2 = _this.props,
                _onChange = _this$props2.onChange,
                _onFileListChange = _this$props2.onFileListChange;

            if (_onChange) {
              _onChange({});
            }
            if (_onFileListChange) {
              _onFileListChange(info.fileList);
            }
          }
        }
      }
    };

    _this.canUpload = true; // 格式大小是否满足要求
    _this.state = {
      fileList: props.fileList || [] // 文件列表
    };
    return _this;
  }

  (0, _createClass3.default)(UploadFile, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        fileList: nextProps.fileList || []
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          disabled = _props.disabled,
          fileLength = _props.fileLength,
          _props$btnTitle = _props.btnTitle,
          btnTitle = _props$btnTitle === undefined ? '上传' : _props$btnTitle;
      var fileList = this.state.fileList;

      var props = {
        action: action,
        disabled: disabled,
        beforeUpload: this.beforeUpload,
        onChange: this.onChange,
        onRemove: this.props.onRemove
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _upload2.default,
          (0, _extends3.default)({}, props, { fileList: fileList }),
          fileList.length < fileLength ? _react2.default.createElement(
            _button2.default,
            { disabled: disabled },
            _react2.default.createElement(_icon2.default, { type: 'upload' }),
            btnTitle
          ) : null
        )
      );
    }

    // 上传前做处理


    // 文件上传过程

  }]);
  return UploadFile;
}(_react.Component);

exports.default = UploadFile;
module.exports = exports['default'];
//# sourceMappingURL=UploadFile.js.map