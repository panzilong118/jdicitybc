'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _inputNumber = require('jdcloudui/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

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

var _tabs = require('jdcloudui/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/input-number/style');

require('jdcloudui/lib/message/style');

require('jdcloudui/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabPane = _tabs2.default.TabPane;

var PriceModal = function (_Component) {
  (0, _inherits3.default)(PriceModal, _Component);

  function PriceModal() {
    (0, _classCallCheck3.default)(this, PriceModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PriceModal.__proto__ || (0, _getPrototypeOf2.default)(PriceModal)).call(this));

    _this.onChange = function (value, index, item, record) {
      var data = {
        labelId: item.shopCustomerLabelId,
        labelPrice: value,
        labelName: item.labelName
      };
      _this.props.changePrice(index, data, record);
    };

    _this.handleOk = function (record) {
      var type = _this.state.type;

      if (record.isPrice && !type) {
        _this.setState({
          type: true
        });
      } else {
        var data = _this.props.data;

        var dataPrice = data.filter(function (item) {
          return item.labelPrice;
        });
        if (dataPrice.length > 0) {
          if (record.key === undefined) {
            _this.props.handleOk(true);
          } else {
            _this.props.handleOk();
          }
        } else {
          _message3.default.error('请至少设置一条分组价！');
        }
      }
    };

    _this.state = {
      type: false
    };

    return _this;
  }

  (0, _createClass3.default)(PriceModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log(this.props.data, '11111111111111111111111111111111111111111111111');
      var _props = this.props,
          visible = _props.visible,
          record = _props.record,
          data = _props.data,
          handleModal = _props.handleModal,
          priceList = _props.priceList;
      var type = this.state.type;

      var priceData = data.filter(function (item) {
        return item && item.labelPrice;
      });

      return _react2.default.createElement(
        _modal2.default,
        {
          maskClosable: false,
          className: 'tabs-box-content',
          title: record.isPrice && !type ? '查看分组价' : '添加分组价',
          visible: visible,
          onOk: function onOk() {
            return _this2.handleOk(record);
          },
          onCancel: function onCancel() {
            return handleModal(false, {});
          },
          cancelText: record.isPrice && !type ? '确认' : '取消',
          okText: record.isPrice && !type ? '编辑' : '确认'
        },
        record.isPrice && !type ? _react2.default.createElement(
          'div',
          { style: { padding: '20px 60px', maxHeight: '500px', overflow: 'auto' } },
          priceData.map(function (item) {
            return _react2.default.createElement(
              'div',
              { style: { lineHeight: '30px' } },
              _react2.default.createElement(
                'span',
                { style: { color: '#ccc' } },
                item.labelName,
                '\uFF1A'
              ),
              _react2.default.createElement(
                'span',
                null,
                '\uFFE5',
                item.labelPrice.toFixed(2)
              )
            );
          })
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _tabs2.default,
            {
              type: 'card',
              hideAdd: true,
              forceRender: true
            },
            priceList.map(function (item, index) {
              return _react2.default.createElement(
                TabPane,
                {
                  tab: _react2.default.createElement(
                    'span',
                    { title: item.labelName, style: { width: '46px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', display: 'inline-block', textAlign: 'center' } },
                    item.labelName
                  ),
                  key: item.shopCustomerLabelId },
                _react2.default.createElement(
                  'div',
                  { style: { padding: '20px 100px 60px' } },
                  _react2.default.createElement(
                    'span',
                    { style: { color: '#ccc' } },
                    '\u552E\u4EF7\uFF1A'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    '\uFFE5'
                  ),
                  _react2.default.createElement(_inputNumber2.default, {
                    min: 0,
                    placeholder: '\u8BF7\u8F93\u5165\u4EF7\u683C',
                    onChange: function onChange(v) {
                      return _this2.onChange(v, index, item, record);
                    },
                    style: { width: '200px' },
                    value: priceData.filter(function (_i) {
                      return _i.labelId == item.shopCustomerLabelId;
                    })[0] && priceData.filter(function (_i) {
                      return _i.labelId == item.shopCustomerLabelId;
                    })[0].labelPrice || null
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);
  return PriceModal;
}(_react.Component);

exports.default = PriceModal;
module.exports = exports['default'];
//# sourceMappingURL=PriceModal.js.map