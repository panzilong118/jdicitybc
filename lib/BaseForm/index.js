'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultLabelColSpan = undefined;

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('antd/lib/col/style');

require('antd/lib/input/style');

require('antd/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * form表单 base版
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * props:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {object} layout { labelCol: { span }, wrapperCol: { span } }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @param {array} items
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    items=[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      col,  // column
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      label,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      key,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      required,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      component, // default is Input
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      options = {},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      rules
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    }]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  import { Form } from 'src/components/common'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  add = (e) =>{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    const { onOk } = this.props;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    Form.submit(e, this.formRef, (values) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      console.log('valide', values)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      // post to server
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      onOk()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  // render
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <Form
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    items={[{
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      label: '目录名',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      required: true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      key: 'name'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    }, {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      label: '是否挂表',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      key: 'isLast',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      component: (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        <Switch
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          checkedChildren={<Icon type="check" />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          unCheckedChildren={<Icon type="close" />}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *        />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    }]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var FormItem = _form2.default.Item;
// 默认的layout
var defaultLabelColSpan = exports.defaultLabelColSpan = 6;
var defaultFormItemLayout = {
  labelCol: { span: defaultLabelColSpan },
  wrapperCol: { span: 16 }
};

var BaseForm = function (_React$Component) {
  _inherits(BaseForm, _React$Component);

  function BaseForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseForm.__proto__ || Object.getPrototypeOf(BaseForm)).call.apply(_ref, [this].concat(args))), _this), _this.renderFormItem = function (_ref2) {
      var item = _ref2.item,
          layout = _ref2.layout,
          getFieldDecorator = _ref2.getFieldDecorator;
      var _item$col = item.col,
          col = _item$col === undefined ? 24 : _item$col,
          label = item.label,
          key = item.key,
          required = item.required,
          component = item.component,
          _item$options = item.options,
          options = _item$options === undefined ? {} : _item$options,
          rules = item.rules;

      return _react2.default.createElement(
        _col2.default,
        { span: col, key: key },
        _react2.default.createElement(
          FormItem,
          _extends({ label: label }, layout),
          getFieldDecorator(key, _extends({}, options, {
            rules: rules || [{ required: required, message: label + '\u4E3A\u7A7A' }]
          }))(component || _react2.default.createElement(_input2.default, null))
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          _props$layout = _props.layout,
          layout = _props$layout === undefined ? defaultFormItemLayout : _props$layout,
          getFieldDecorator = _props.form.getFieldDecorator;

      return _react2.default.createElement(
        _form2.default,
        { style: { overflow: 'hidden' } },
        items.map(function (item) {
          return _this2.renderFormItem({ item: item, layout: layout, getFieldDecorator: getFieldDecorator });
        })
      );
    }
  }], [{
    key: 'submit',
    value: function submit(_ref3, onValid) {
      var _this3 = this;

      var validateFieldsAndScroll = _ref3.validateFieldsAndScroll,
          resetFields = _ref3.resetFields;

      validateFieldsAndScroll(function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err, values) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!err) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  _context.next = 4;
                  return onValid(values);

                case 4:
                  resetFields();

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this3);
        }));

        return function (_x, _x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    // 渲染单个表单项

  }]);

  return BaseForm;
}(_react2.default.Component);

exports.default = _form2.default.create()(BaseForm);
//# sourceMappingURL=index.js.map