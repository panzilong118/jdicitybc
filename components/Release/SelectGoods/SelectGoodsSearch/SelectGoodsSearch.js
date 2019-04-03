'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = require('jdcloudui/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _col = require('jdcloudui/lib/col');

var _col2 = _interopRequireDefault(_col);

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

var _form = require('jdcloudui/lib/form');

var _form2 = _interopRequireDefault(_form);

var _select = require('jdcloudui/lib/select');

var _select2 = _interopRequireDefault(_select);

var _dec, _dec2, _class, _class2, _temp; /**
                                          * Created by huangxiao3 on 2017/2/20.
                                          */

require('jdcloudui/lib/row/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/col/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/form/style');

require('jdcloudui/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CategoryCascade = require('../../Common/Category/CategoryCascade');

var _CategoryCascade2 = _interopRequireDefault(_CategoryCascade);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _redux2 = require('./redux');

var _BaseComponent2 = require('../../Common/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

var _CategoryAllSearch = require('../../Common/CategoryAllSearch/CategoryAllSearch');

var _CategoryAllSearch2 = _interopRequireDefault(_CategoryAllSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var FormItem = _form2.default.Item;

var SelectGoodsSearch = (_dec = (0, _reactRedux.connect)(function (state) {
  return { SelectGoodsSearch: state.selectGoodsSearch };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ selectGoodsSearch: _redux2.selectGoodsSearch, saveFormData: _redux2.saveFormData }, dispatch);
}), _dec2 = _form2.default.create(), _dec(_class = _dec2(_class = (_temp = _class2 = function (_BaseComponent) {
  (0, _inherits3.default)(SelectGoodsSearch, _BaseComponent);

  function SelectGoodsSearch(props, context) {
    (0, _classCallCheck3.default)(this, SelectGoodsSearch);
    return (0, _possibleConstructorReturn3.default)(this, (SelectGoodsSearch.__proto__ || (0, _getPrototypeOf2.default)(SelectGoodsSearch)).call(this, props, context));
  }

  (0, _createClass3.default)(SelectGoodsSearch, [{
    key: 'handleSubmit',


    //form submit function
    value: function handleSubmit() {
      var _this2 = this;

      debugger;
      this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          _this2.props.saveFormData(values);
          _this2.props.selectGoodsSearch(values).then(function (result) {
            console.log('SearchData success');
          }, function (error) {
            console.log('SearchData fail');
          });
        }
      });
    }

    /**
     * 获取最终选择的平台类目id
     * @param value
     */

  }, {
    key: 'handleCategoryChange',
    value: function handleCategoryChange(value) {
      this.props.form.setFieldsValue({
        cid: value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;

      getFieldDecorator('platformId', { initialValue: this.platformId });
      getFieldDecorator('supplySellerId', { initialValue: 1 });
      getFieldDecorator('cid', { initialValue: '' });
      getFieldDecorator('modelCode', { initialValue: '' });
      getFieldDecorator('productCode', { initialValue: '' });
      getFieldDecorator('itemName', { initialValue: '' });

      getFieldDecorator('pageNum', { initialValue: 1 });
      getFieldDecorator('pageSize', { initialValue: this.props.pageSize });

      return _react2.default.createElement(
        'div',
        { className: 'ui-search' },
        _react2.default.createElement(
          _row2.default,
          null,
          _react2.default.createElement(
            _col2.default,
            { span: 24, className: 'l-content' },
            _react2.default.createElement(
              _form2.default,
              { layout: 'inline' },
              _react2.default.createElement(
                FormItem,
                { label: '\u5E73\u53F0\u5206\u7C7B:' },
                _react2.default.createElement(_CategoryAllSearch2.default, { sign: false, signStatus: true, handleCategoryChange: function handleCategoryChange(value) {
                    return _this3.handleCategoryChange(value);
                  } })
              ),
              _react2.default.createElement(
                FormItem,
                { label: '\u5546\u54C1\u578B\u53F7:' },
                getFieldDecorator('modelCode', {
                  initialValue: ''
                })(_react2.default.createElement(_input2.default, { placeholder: '', style: { width: 120 } }))
              ),
              _react2.default.createElement(
                FormItem,
                { label: '\u5546\u54C1\u8D27\u53F7:' },
                getFieldDecorator('productCode', {
                  initialValue: ''
                })(_react2.default.createElement(_input2.default, { style: { width: 120 }, placeholder: '' }))
              ),
              _react2.default.createElement(
                FormItem,
                { label: '\u5546\u54C1\u540D\u79F0:' },
                getFieldDecorator('itemName', {
                  initialValue: ''
                })(_react2.default.createElement(_input2.default, { style: { width: 120 }, placeholder: '' }))
              )
            )
          ),
          _react2.default.createElement(
            _col2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'r-action' },
              _react2.default.createElement(
                _button2.default,
                { type: 'primary', size: 'large', onClick: function onClick() {
                    return _this3.handleSubmit();
                  } },
                '\u67E5 \u8BE2'
              )
            )
          )
        )
      );
    }
  }]);
  return SelectGoodsSearch;
}(_BaseComponent3.default), _class2.propTypes = {
  SelectGoodsSearch: _propTypes2.default.object.isRequired,
  selectGoodsSearch: _propTypes2.default.func.isRequired,
  saveFormData: _propTypes2.default.func.isRequired
}, _temp)) || _class) || _class);
exports.default = SelectGoodsSearch;
module.exports = exports['default'];
//# sourceMappingURL=SelectGoodsSearch.js.map