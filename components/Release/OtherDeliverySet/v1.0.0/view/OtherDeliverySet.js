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

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _select = require('jdcloudui/lib/select');

var _select2 = _interopRequireDefault(_select);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/select/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--配送设置
 */
var RadioGroup = _radio2.default.Group;
var CheckboxGroup = _checkbox2.default.Group;
var TextArea = _input2.default.TextArea;

var Option = _select2.default.Option;
var confirm = _modal2.default.confirm;

var OtherDeliverySet = function (_Component) {
  (0, _inherits3.default)(OtherDeliverySet, _Component);

  function OtherDeliverySet(props) {
    (0, _classCallCheck3.default)(this, OtherDeliverySet);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherDeliverySet.__proto__ || (0, _getPrototypeOf2.default)(OtherDeliverySet)).call(this, props));

    _this.deliveryClick = function () {
      console.log(11);
      _this.props.getDeliverySet().then(function (res) {
        if (res.code == 0) {
          if (!res.data.shopFareTemplateForItemVo) {
            _this.showConfirm();
          }
        }
      });
    };

    _this.showConfirm = function () {
      confirm({
        title: '提示',
        content: '当前店铺未设置运费模板，是否立即前往设置？',
        onOk: function onOk() {
          window.open('/item-shop-view/freightCostTemplate');
        },
        onCancel: function onCancel() {}
      });
    };

    _this.onChange = function (e) {
      console.log(e.target.checked);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      if (!e.target.checked) {
        itemTmplPublishVo.freightTmplVo.homeDelivery = 0;
      } else {
        itemTmplPublishVo.freightTmplVo.homeDelivery = 1;
      }

      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.selectChange = function (value) {
      console.log('Selected: ' + value);
      _this.setState({
        selectValue: value
      });
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.freightTmplVo.tmplId = value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.state = {
      deliveryData: [],
      selectValue: _this.props.itemTmplPublishVo.freightTmplVo.tmplId || '',
      checked: false
    };
    return _this;
  }

  (0, _createClass3.default)(OtherDeliverySet, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getDeliverySet();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      console.log(nextProps);
      if (nextProps.DeliveryData.loaded) {
        if (nextProps.DeliveryData.data.code == 0) {
          var deliveryDATA = nextProps.DeliveryData.data.data.shopFareTemplateForItemVo;
          console.log(deliveryDATA);
          if (deliveryDATA) {
            if (!this.state.deliveryData.length) {
              if (!this.props.itemTmplPublishVo.freightTmplVo.tmplId) {
                deliveryDATA.map(function (item) {
                  if (item.templateType == 1) {
                    _this2.selectChange(item.id);
                  }
                });
              } else {
                this.selectChange(this.props.itemTmplPublishVo.freightTmplVo.tmplId);
              }
            }
            this.setState({
              deliveryData: deliveryDATA
            });
          } else {
            this.setState({
              checked: true,
              selectValue: 0,
              deliveryData: [{ id: 0, fareName: '未设置' }]
            });
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.type);
      console.log(this.props.itemTmplPublishVo);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u914D\u9001\u8BBE\u7F6E'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'otherMt202' },
            _react2.default.createElement(
              'span',
              { className: 'smallColor smaillest' },
              '\u5546\u54C1\u8FD0\u8D39\u6A21\u677F:'
            ),
            _react2.default.createElement(
              'span',
              { onClick: this.deliveryClick },
              _react2.default.createElement(
                _select2.default,
                { style: { width: 200 },
                  onChange: this.selectChange
                  // onFocus={this.selectFocus}
                  , value: this.state.selectValue },
                this.state.deliveryData.map(function (item) {
                  return _react2.default.createElement(
                    Option,
                    { value: item.id },
                    item.fareName
                  );
                })
              )
            ),
            _react2.default.createElement(
              _checkbox2.default,
              { className: 'delivery-check',
                disabled: this.state.checked,
                checked: Boolean(this.props.itemTmplPublishVo.freightTmplVo.homeDelivery),
                onChange: this.onChange },
              '\u652F\u6301\u540C\u57CE\u914D\u9001'
            )
          )
        )
      );
    }
  }]);
  return OtherDeliverySet;
}(_react.Component);

exports.default = OtherDeliverySet;
module.exports = exports['default'];
//# sourceMappingURL=OtherDeliverySet.js.map