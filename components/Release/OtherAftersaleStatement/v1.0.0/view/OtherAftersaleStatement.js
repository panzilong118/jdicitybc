'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _inputNumber = require('jdcloudui/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

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

require('jdcloudui/lib/input-number/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file 其他设置--售后说明
 */
var RadioGroup = _radio2.default.Group;

var OtherAftersaleStatement = function (_Component) {
  (0, _inherits3.default)(OtherAftersaleStatement, _Component);

  function OtherAftersaleStatement(props) {
    (0, _classCallCheck3.default)(this, OtherAftersaleStatement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (OtherAftersaleStatement.__proto__ || (0, _getPrototypeOf2.default)(OtherAftersaleStatement)).call(this, props));

    _this.refundRadioChange = function (e) {
      console.log('radio checked', e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.afterSaleVo.refundService = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.dayChange = function (value) {
      console.log('changed', value);
      var num = 0;
      if (value) {
        num = value;
      }
      num = parseInt(num);
      if (!num) {
        num = 0;
      }
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.afterSaleVo.refundDuration = num;
      _this.setState({
        initialDay: itemTmplPublishVo.afterSaleVo.refundDuration
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.resetRadioChange = function (e) {
      console.log('radio checked', e.target.value);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.afterSaleVo.changeService = e.target.value;
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.resetDayChange = function (value) {
      console.log('changed', value);
      var num = 0;
      if (value) {
        num = value;
      }
      num = parseInt(num);
      if (!num) {
        num = 0;
      }
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.afterSaleVo.changeDuration = num;
      _this.setState({
        initialresetDay: itemTmplPublishVo.afterSaleVo.changeDuration
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.resetMonthChange = function (value) {
      console.log('changed', value);
      var num = 0;
      if (value) {
        num = value;
      }
      num = parseInt(num);
      if (!num) {
        num = 0;
      }
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      itemTmplPublishVo.afterSaleVo.repaireDuration = num;
      _this.setState({
        initialMonth: itemTmplPublishVo.afterSaleVo.repaireDuration
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.state = {
      initialDay: 7,
      initialresetDay: _this.props.itemTmplPublishVo.afterSaleVo.changeDuration || 8,
      initialMonth: _this.props.itemTmplPublishVo.afterSaleVo.repaireDuration || 3
    };
    return _this;
  }

  (0, _createClass3.default)(OtherAftersaleStatement, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }

    // 退货


    // 换货


    // 质保

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u552E\u540E\u8BF4\u660E'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'otherMt202' },
            _react2.default.createElement(
              'span',
              { className: 'statement smallColor smaillest' },
              '\u9000\u8D27:'
            ),
            this.props.type == 1 ? _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.afterSaleVo.refundService || 1,
                onChange: this.refundRadioChange },
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 1 },
                '\u7279\u6B8A\u5546\u54C1\uFF0C\u4E00\u7ECF\u7B7E\u6536\u975E\u8D28\u91CF\u95EE\u9898\u4E0D\u4E88\u9000\u8D27'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 2 },
                '\u786E\u8BA4\u6536\u8D27\u540E',
                _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.refundDuration || 7,
                  onChange: this.dayChange
                  //value={this.state.initialDay}
                }),
                '\u65E5\u5185\u53EF\u4E0E\u5356\u5BB6\u534F\u5546\u9000\u8D27\uFF0C\u53EF\u80FD\u9700\u8981\u6263\u9664\u90E8\u5206\u8D27\u6B3E\u4F5C\u4E3A\u5356\u5BB6\u7684\u635F\u5931'
              ),
              _react2.default.createElement('br', null)
            ) : _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.afterSaleVo.refundService || 2,
                onChange: this.refundRadioChange },
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 1 },
                '\u7279\u6B8A\u5546\u54C1\uFF0C\u4E00\u7ECF\u7B7E\u6536\u975E\u8D28\u91CF\u95EE\u9898\u4E0D\u4E88\u9000\u8D27'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 2 },
                '\u786E\u8BA4\u6536\u8D27\u540E',
                _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.refundDuration || 7,
                  onChange: this.dayChange
                  //value={this.state.initialDay}
                }),
                '\u65E5\u5185\u53EF\u4E0E\u5356\u5BB6\u534F\u5546\u9000\u8D27\uFF0C\u53EF\u80FD\u9700\u8981\u6263\u9664\u90E8\u5206\u8D27\u6B3E\u4F5C\u4E3A\u5356\u5BB6\u7684\u635F\u5931'
              ),
              _react2.default.createElement('br', null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'otherMt202' },
            _react2.default.createElement(
              'span',
              { className: 'statement smallColor smaillest' },
              '\u6362\u8D27:'
            ),
            this.props.type == 1 ? _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.afterSaleVo.changeService || 1,
                onChange: this.resetRadioChange },
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 1 },
                '\u7279\u6B8A\u5546\u54C1\uFF0C\u4E00\u7ECF\u7B7E\u6536\u975E\u8D28\u91CF\u95EE\u9898\u4E0D\u4E88\u9000\u8D27'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 2 },
                '\u786E\u8BA4\u6536\u8D27\u540E',
                _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.changeDuration || 7,
                  onChange: this.resetDayChange
                  //value={this.state.initialresetDay}
                }),
                '\u65E5\u5185\u53EF\u4E0E\u5356\u5BB6\u534F\u5546\u6362\u8D27\uFF0C\u6362\u8D27\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E00\u4E9B\u989D\u5916\u8D39\u7528'
              ),
              _react2.default.createElement('br', null)
            ) : this.props.type == 2 ? _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.afterSaleVo.changeService || 2,
                onChange: this.resetRadioChange },
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 1 },
                '\u7279\u6B8A\u5546\u54C1\uFF0C\u4E00\u7ECF\u7B7E\u6536\u975E\u8D28\u91CF\u95EE\u9898\u4E0D\u4E88\u9000\u8D27'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 2 },
                '\u786E\u8BA4\u6536\u8D27\u540E',
                _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.changeDuration || 7,
                  onChange: this.resetDayChange
                  //value={this.state.initialresetDay}
                }),
                '\u65E5\u5185\u53EF\u4E0E\u5356\u5BB6\u534F\u5546\u6362\u8D27\uFF0C\u6362\u8D27\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E00\u4E9B\u989D\u5916\u8D39\u7528'
              ),
              _react2.default.createElement('br', null)
            ) : _react2.default.createElement(
              RadioGroup,
              {
                value: this.props.itemTmplPublishVo.afterSaleVo.changeService || 2,
                onChange: this.resetRadioChange },
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 1 },
                '\u7279\u6B8A\u5546\u54C1\uFF0C\u4E00\u7ECF\u7B7E\u6536\u975E\u8D28\u91CF\u95EE\u9898\u4E0D\u4E88\u9000\u8D27'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _radio2.default,
                { className: 'otherMt202', value: 2 },
                '\u786E\u8BA4\u6536\u8D27\u540E',
                _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.changeDuration || 15,
                  onChange: this.resetDayChange
                  //value={this.state.initialresetDay}
                }),
                '\u65E5\u5185\u53EF\u4E0E\u5356\u5BB6\u534F\u5546\u6362\u8D27\uFF0C\u6362\u8D27\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E00\u4E9B\u989D\u5916\u8D39\u7528'
              ),
              _react2.default.createElement('br', null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'otherMt202' },
            _react2.default.createElement(
              'span',
              { className: 'statement smallColor smaillest' },
              '\u8D28\u4FDD:'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'otherMt202' },
                '\u8D28\u4FDD\u671F\u9650',
                this.props.type == 3 ? _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.repaireDuration || 3,
                  onChange: this.resetMonthChange
                  //value={this.state.initialMonth}
                }) : _react2.default.createElement(_inputNumber2.default, { min: 0, className: 'ml10',
                  value: this.props.itemTmplPublishVo.afterSaleVo.repaireDuration || 3,
                  onChange: this.resetMonthChange
                  //value={this.state.initialMonth}
                }),
                '\u4E2A\u6708'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'span',
                { className: 'otherMt202 smallColor' },
                '\u5982\u6709\u4EFB\u4F55\u552E\u540E\u95EE\u9898\u8BF7\u5C3D\u91CF\u5728\u8D28\u4FDD\u671F\u5185\u8054\u7CFB\u5356\u5BB6\u534F\u5546\u5904\u7406\uFF0C\u8D85\u8FC7\u8D28\u4FDD\u671F\u5356\u5BB6\u4E0D\u4FDD\u8BC1\u53D7\u7406\uFF0C\u8BF7\u77E5\u6089\uFF01'
              )
            )
          )
        )
      );
    }
  }]);
  return OtherAftersaleStatement;
}(_react.Component);

exports.default = OtherAftersaleStatement;
module.exports = exports['default'];
//# sourceMappingURL=OtherAftersaleStatement.js.map