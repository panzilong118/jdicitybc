'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

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

require('jdcloudui/lib/input/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('jdcloudecc/components');

var _imageupload = require('./style/imageupload.less');

var _imageupload2 = _interopRequireDefault(_imageupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Upload = function (_Component) {
  (0, _inherits3.default)(Upload, _Component);

  function Upload(props, context) {
    (0, _classCallCheck3.default)(this, Upload);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).call(this, props, context));

    _this.init = function (data, type) {
      // console.log("data ===",data,"type ===",type);
      if (data.length > 0) {
        return type ? data.map(function (item, index) {
          return item.url ? _react2.default.createElement(
            'div',
            { className: _imageupload2.default.avatarcontainer, key: index },
            _react2.default.createElement(
              'div',
              { className: _imageupload2.default.avatarwrapper },
              _react2.default.createElement(_components.UploadSelect, {
                className: _imageupload2.default.avataruploader,
                limit: { size: 5, suffix: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"] },
                onChange: function onChange(info) {
                  return _this.props.handleReChange(info, index);
                },
                imgUrl: item.url,
                showRemoveIcon: true,
                onRemove: function onRemove() {
                  return _this.props.handleCancel(index);
                }
              })
            ),
            _react2.default.createElement(_input2.default, { placeholder: '\u8F93\u5165ALT\u6807\u7B7E', onChange: function onChange(e) {
                return _this.props.handleALTChange(e, index);
              },
              value: item.alt, maxLength: '50' })
          ) : null;
        }) : data.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { className: _imageupload2.default.avatarcontainer, key: index },
            _react2.default.createElement(
              'div',
              { className: _imageupload2.default.avatarwrapper },
              _react2.default.createElement(_components.UploadSelect, {
                className: _imageupload2.default.avataruploader,
                limit: { size: 5, suffix: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"] },
                onChange: function onChange(info) {
                  return _this.props.handleReChange(info);
                },
                imgUrl: item.url,
                showRemoveIcon: true,
                onRemove: function onRemove() {
                  return _this.props.handleCancel();
                }
              })
            ),
            _react2.default.createElement(_input2.default, {
              placeholder: '\u8F93\u5165ALT\u6807\u7B7E',
              onChange: function onChange(e) {
                return _this.props.handleALTChange(e);
              },
              value: item.alt,
              maxLength: '50'
            })
          );
        });
      } else {
        return type ? null : _react2.default.createElement(
          'div',
          { className: _imageupload2.default.avatarcontainer },
          _react2.default.createElement(
            'div',
            { className: _imageupload2.default.avatarwrapper },
            _react2.default.createElement(_components.UploadSelect, {
              className: _imageupload2.default.avataruploader,
              limit: { size: 5, suffix: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"] },
              onChange: function onChange(info) {
                return _this.props.handleReChange(info);
              }
            })
          ),
          _react2.default.createElement(_input2.default, {
            placeholder: '\u8F93\u5165ALT\u6807\u7B7E',
            disabled: true
          })
        );
      }
    };

    return _this;
  }

  (0, _createClass3.default)(Upload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}

    //初始化数据

  }, {
    key: 'render',
    value: function render() {
      var uploadButton = _react2.default.createElement(
        'div',
        { className: _imageupload2.default.avatarcontainer },
        _react2.default.createElement(
          'div',
          { className: _imageupload2.default.avatarwrapperadd },
          _react2.default.createElement(_components.UploadSelect, {
            className: _imageupload2.default.avataruploader,
            limit: { size: 5, suffix: ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"] },
            multiple: true,
            onChange: this.props.handleChange
          })
        ),
        _react2.default.createElement(_input2.default, { placeholder: '\u56FE\u7247ALT\u6807\u7B7E', disabled: true })
      );
      return _react2.default.createElement(
        'div',
        { className: _imageupload2.default.avatarfl },
        this.init(this.props.itemImgInfos, this.props.type),
        this.props.type ? this.props.itemImgInfos.length >= this.props.num ? null : uploadButton : null
      );
    }
  }]);
  return Upload;
}(_react.Component); /****************************************************************
                      * author:luoquan
                      * date:2018-03-12
                      * description:产品发布-图片上传
                      ****************************************************************/


exports.default = Upload;
module.exports = exports['default'];
//# sourceMappingURL=UploadSelect.js.map