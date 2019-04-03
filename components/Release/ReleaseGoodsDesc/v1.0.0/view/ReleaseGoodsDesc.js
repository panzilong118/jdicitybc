'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author chenyanhua
 * @date 2018-08-06
 * @file 发布商品-商品介绍 Tab组件
 * 运营平台/店铺/供应商 用的该组件代码都一样
 * 除static下的ueditor文件不一样
 */
var ReleaseGoodsDesc = function (_Component) {
  (0, _inherits3.default)(ReleaseGoodsDesc, _Component);

  function ReleaseGoodsDesc(props) {
    (0, _classCallCheck3.default)(this, ReleaseGoodsDesc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseGoodsDesc.__proto__ || (0, _getPrototypeOf2.default)(ReleaseGoodsDesc)).call(this, props));

    _this.editor = null;
    return _this;
  }

  (0, _createClass3.default)(ReleaseGoodsDesc, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.editor = new UE.ui.Editor();
      this.editor.render('editor');
      this.editor.ready(function () {
        var describeUrl = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.describeUrl || '';
        this.editor.setContent(describeUrl);
      }.bind(this));
      this.editor.addListener("contentChange", function () {
        var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(this.props.itemTmplPublishVo));
        itemTmplPublishVo.describeUrl = this.editor.getContent();
        this.props.updateItemTmplAction(itemTmplPublishVo);
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'mt10 mb10 descTips' },
          '\u63D0\u793A\uFF1A\u5EFA\u8BAE\u4E0A\u4F20\u7684\u56FE\u7247\u5927\u5C0F\u9650\u5236\u4E3A3M\uFF0C\u5C3A\u5BF8\u5BBD\u5EA6\u4E3A960\uFF0C\u5426\u5219\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u538B\u7F29\u548C\u5BBD\u5EA6\u8C03\u6574\u53EF\u80FD\u4F1A\u4F7F\u56FE\u7247\u5931\u771F'
        ),
        _react2.default.createElement('div', { id: 'editor', style: { maxWidth: '960px', width: '100%', height: '450px', paddingBottom: '24px' } })
      );
    }
  }]);
  return ReleaseGoodsDesc;
}(_react.Component);

exports.default = ReleaseGoodsDesc;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseGoodsDesc.js.map