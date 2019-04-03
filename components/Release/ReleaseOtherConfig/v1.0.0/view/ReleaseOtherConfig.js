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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../../OtherFreightInfo/v1.0.0/view/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../../OtherSaleMode/v1.0.0/view/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../../OtherAftersaleStatement/v1.0.0/view/index');

var _index6 = _interopRequireDefault(_index5);

var _index7 = require('../../../OtherFavourable/v1.0.0/view/index');

var _index8 = _interopRequireDefault(_index7);

var _index9 = require('../../../OtherElseInfo/v1.0.0/view/index');

var _index10 = _interopRequireDefault(_index9);

var _index11 = require('../../../OtherDeliverySet/v1.0.0/view/index');

var _index12 = _interopRequireDefault(_index11);

var _index13 = require('../../../OtherDirectSupply/v1.0.0/view/index');

var _index14 = _interopRequireDefault(_index13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 发布商品-其他设置Tab组件
 */
var ReleaseOtherConfig = function (_Component) {
  (0, _inherits3.default)(ReleaseOtherConfig, _Component);

  function ReleaseOtherConfig(props) {
    (0, _classCallCheck3.default)(this, ReleaseOtherConfig);
    return (0, _possibleConstructorReturn3.default)(this, (ReleaseOtherConfig.__proto__ || (0, _getPrototypeOf2.default)(ReleaseOtherConfig)).call(this, props));
  }

  (0, _createClass3.default)(ReleaseOtherConfig, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.props.type);
      console.log(this.props.itemTmplPublishVo);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.type == 3 ? _react2.default.createElement(_index12.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }) : _react2.default.createElement(_index2.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        _react2.default.createElement(_index4.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        _react2.default.createElement(_index6.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        _react2.default.createElement(_index8.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }),
        this.props.type == 3 ? //店铺发布商品有餐厅直供字段
        _react2.default.createElement(_index14.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction }) : null,
        _react2.default.createElement(_index10.default, {
          type: this.props.type,
          itemTmplPublishVo: this.props.itemTmplPublishVo,
          updateItemTmplAction: this.props.updateItemTmplAction
        })
      );
    }
  }]);
  return ReleaseOtherConfig;
}(_react.Component);

exports.default = ReleaseOtherConfig;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseOtherConfig.js.map