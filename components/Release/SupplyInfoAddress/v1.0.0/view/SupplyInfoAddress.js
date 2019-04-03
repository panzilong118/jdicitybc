'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

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

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _tabs = require('jdcloudui/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/radio/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/layout/style');

require('jdcloudui/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cascader = require('jdcloudui/lib/cascader');

var _cascader2 = _interopRequireDefault(_cascader);

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

    _this.showModal = function () {
      _this.setState({
        visible: true,
        uid: Math.random()
      });
    };

    _this.handleOk = function (e) {
      _this.state.afterChecked = _this.state.checkedList;
      console.log(_this.state.afterChecked);
      _this.creatAddressId(_this.state.afterChecked);
      _this.setState({
        visible: false
      });
    };

    _this.deleteItem = function (item) {
      var num = _this.state.afterChecked.indexOf(item);
      _this.state.afterChecked.splice(num, 1);
      _this.creatAddressId(_this.state.afterChecked);
      _this.setState({
        afterChecked: _this.state.afterChecked,
        checkedList: _this.state.afterChecked
      });
    };

    _this.handleCancel = function (e) {
      _this.state.checkedList = _this.state.afterChecked;
      _this.setState({
        visible: false
      });
    };

    _this.addressChange = function (checkedValues) {
      console.log('aa', checkedValues);
      _this.setState({
        checkedList: checkedValues
      });
    };

    _this.state = {
      uid: Math.random(),
      addressDATA: [],
      checkedList: [],
      afterChecked: [],
      optionsList: []
    };
    _this.addressDATA = [];
    return _this;
  }

  (0, _createClass3.default)(ReleaseSupplyInfo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log(10);
      this.props.getAddressInfo({ type: 1 });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      var nextProps = JSON.parse((0, _stringify2.default)(next));
      console.log(nextProps);
      if (nextProps.addressData.loaded) {
        if (nextProps.addressData.data.code == 0) {
          var addressDATA = nextProps.addressData.data.data.result || [];
          this.creatAddress(addressDATA, nextProps);
        }
      }
    }

    // 选择发货地

  }, {
    key: 'creatAddress',
    value: function creatAddress(data, nextProps) {
      var address = [];
      data.map(function (item) {
        address.push({
          label: item.addressName,
          value: item.addressName,
          id: item.id
        });
      });

      if (nextProps.itemTmplPublishVo.itemPerfectVo.placeDeliveryId) {
        var arrValue = [];
        nextProps.itemTmplPublishVo.itemPerfectVo.placeDeliveryId.map(function (item) {
          address.map(function (item1) {
            if (item == item1.id) {
              arrValue.push(item1.value);
            }
          });
        });
        this.setState({
          checkedList: arrValue,
          afterChecked: arrValue
        });
      } else {
        this.setState({
          checkedList: [],
          afterChecked: []
        });
      }
      this.addressDATA = address;
    }
  }, {
    key: 'creatAddressId',

    // 获取发货地id
    value: function creatAddressId(recived) {
      var _this2 = this;

      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(this.props.itemTmplPublishVo));
      var addressId = [];
      recived.map(function (item) {
        _this2.addressDATA.map(function (item1, index) {
          if (item == item1.value) {
            addressId.push('' + item1.id);
          }
        });
      });
      itemTmplPublishVo.itemPerfectVo.placeDeliveryId = addressId;
      this.props.updateItemTmplAction(itemTmplPublishVo);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log(this.props.itemTmplPublishVo.itemPerfectVo.placeDeliveryId);
      this.state.optionsList = this.state.afterChecked.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, className: 'sale-area' },
          item,
          _react2.default.createElement(
            'a',
            { className: 'sale-area-a', onClick: function onClick() {
                return _this3.deleteItem(item);
              } },
            '-'
          )
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'rHeaderTtle' },
            _react2.default.createElement(
              'h2',
              null,
              '\u53D1\u8D27\u5730'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rAdress' },
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: this.showModal },
              '\u9009\u62E9\u53D1\u8D27\u5730'
            ),
            _react2.default.createElement(
              _modal2.default,
              { title: '\u9009\u62E9\u53D1\u8D27\u5730', mashClosable: false, visible: this.state.visible,
                onOk: this.handleOk, onCancel: this.handleCancel,
                width: '600px',
                className: 'ui-shop',
                key: this.state.uid
              },
              _react2.default.createElement(CheckboxGroup, {
                options: this.addressDATA,
                value: this.state.checkedList
                //defaultValue={["101704"]}
                , onChange: this.addressChange })
            )
          ),
          _react2.default.createElement(
            _layout2.default,
            { className: 'rLayout' },
            _react2.default.createElement(
              Content,
              { className: 'rContent' },
              this.state.optionsList
            )
          )
        )
      );
    }
  }]);
  return ReleaseSupplyInfo;
}(_react.Component);

exports.default = ReleaseSupplyInfo;
module.exports = exports['default'];
//# sourceMappingURL=SupplyInfoAddress.js.map