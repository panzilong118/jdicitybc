'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

var _UploadFile = require('./../../../UploadFile/v1.0.0/view/UploadFile');

var _UploadFile2 = _interopRequireDefault(_UploadFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import FileUp from '../../../FileUp/v1.0.0/view';

var RadioGroup = _radio2.default.Group; /**
                                         * @file 其他设置--其他信息
                                         */

var CheckboxGroup = _checkbox2.default.Group;
var TextArea = _input2.default.TextArea;

var OtherElseInfo = function (_Component) {
  (0, _inherits3.default)(OtherElseInfo, _Component);

  function OtherElseInfo(props) {
    (0, _classCallCheck3.default)(this, OtherElseInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherElseInfo.__proto__ || (0, _getPrototypeOf2.default)(OtherElseInfo)).call(this, props));

    _this.textChange = function (e) {
      console.log(e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.packingList = e.target.value;
      _this.setState({
        textValue: itemTmplPublishVo.packingList
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.onFileListChange = function (fileList) {
      var new_fileList = [];
      (fileList || []).map(function (item) {
        new_fileList.push({
          uid: item.uid,
          url: item.url || item.response && item.response.data || '',
          name: item.name
        });
      });
      // 更新总数据源
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.itemPicpdfVoList = new_fileList;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.onRemove = function (file) {
      // 更新总数据源
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      var new_fileList = [];
      (itemTmplPublishVo.itemPicpdfVoList || []).map(function (item) {
        if (item.name != file.name || item.url != file.url || item.uid != file.uid) {
          new_fileList.push((0, _extends3.default)({}, item));
        }
      });
      itemTmplPublishVo.itemPicpdfVoList = new_fileList;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.state = {
      fileAddr: [],
      textValue: ''
    };
    return _this;
  }

  (0, _createClass3.default)(OtherElseInfo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fileList = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemPicpdfVoList || [];
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u5176\u4ED6\u4FE1\u606F'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'otherMt202 elseInfo' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u5305\u88C5\u6E05\u5355:'
            ),
            _react2.default.createElement(TextArea, { autosize: { minRows: 4, maxRows: 8 },
              value: this.props.itemTmplPublishVo.packingList || '',
              onChange: this.textChange })
          ),
          _react2.default.createElement(
            'div',
            { className: 'otherMt202 clearfix' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest pull-left' },
              '\u5546\u54C1\u624B\u518C:'
            ),
            _react2.default.createElement(
              'div',
              { className: 'pull-left uploadify' },
              _react2.default.createElement(_UploadFile2.default, {
                btnTitle: '\u6DFB\u52A0\u9644\u4EF6',
                fileLength: 5,
                fileType: ['png', 'jpg', 'word', 'excel', 'pdf'],
                action: '/proxy/base/upload/uploadFileLimit',
                fileList: fileList,
                onRemove: function onRemove(result) {
                  _this2.onRemove(result);
                },
                onFileListChange: function onFileListChange(fileList) {
                  _this2.onFileListChange(fileList);
                }
              }),
              fileList.length >= 5 ? null : _react2.default.createElement(
                'span',
                { className: 'upload-tips' },
                '\u53EA\u652F\u6301PDF\u3001jpg\u3001png\u3001word\u548Cexcel\u6587\u6863\uFF0C\u5927\u5C0F5M\u4EE5\u5185'
              )
            )
          )
        )
      );
    }
    // 上传文件，更新数据源


    // 移除文件

  }]);
  return OtherElseInfo;
}(_react.Component);

exports.default = OtherElseInfo;
module.exports = exports['default'];
//# sourceMappingURL=OtherElseInfo.js.map