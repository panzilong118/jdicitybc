'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _tabs = require('jdcloudui/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

require('jdcloudui/lib/radio/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/layout/style');

require('jdcloudui/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./supply.css');

var _view = require('../../../SupplyInfoTable/v1.0.0/view');

var _view2 = _interopRequireDefault(_view);

var _view3 = require('../../../SupplyInfoAddress/v1.0.0/view');

var _view4 = _interopRequireDefault(_view3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 发布商品-供货信息Tab组件
 */
var TabPane = _tabs2.default.TabPane;
var Content = _layout2.default.Content;

var CheckboxGroup = _checkbox2.default.Group;
var RadioGroup = _radio2.default.Group;

var ReleaseSupplyInfo = function (_Component) {
  (0, _inherits3.default)(ReleaseSupplyInfo, _Component);

  function ReleaseSupplyInfo(props) {
    (0, _classCallCheck3.default)(this, ReleaseSupplyInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSupplyInfo.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSupplyInfo)).call(this, props));

    _this.state = {
      addressDATA: [],
      checkedList: [],
      afterChecked: [],
      optionsList: []
    };
    return _this;
  }

  (0, _createClass3.default)(ReleaseSupplyInfo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      // if(nextProps.addressData.loaded){
      //   if(nextProps.addressData.data.code==0){
      //     let addressDATA = nextProps.addressData.data.data.result || [];
      //     this.creatAddress(addressDATA)
      //   }
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_view4.default, {
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        _react2.default.createElement(_view2.default, {
          edit: this.props.edit,
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction })
      );
    }
  }]);
  return ReleaseSupplyInfo;
}(_react.Component);

exports.default = ReleaseSupplyInfo;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseSupplyInfo.js.map