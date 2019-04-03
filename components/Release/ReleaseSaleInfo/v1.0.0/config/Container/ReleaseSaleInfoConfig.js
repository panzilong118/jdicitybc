'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _spin = require('jdcloudui/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _row = require('jdcloudui/lib/row');

var _row2 = _interopRequireDefault(_row);

var _col = require('jdcloudui/lib/col');

var _col2 = _interopRequireDefault(_col);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tooltip = require('jdcloudui/lib/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

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

var _dec, _dec2, _class, _class2, _temp; /**
                                          * @author chenyanhua
                                          * @date 2018-08-03
                                          * @file 销售信息表格：自定义扩展列
                                          * /item-shop-view/configs/components-react/ReleaseSaleInfo/v1.0.0
                                          */


require('jdcloudui/lib/spin/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/row/style');

require('jdcloudui/lib/col/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/tooltip/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/message/style');

require('jdcloudui/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('./redux');

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExtendFieldsFormItem = require('./ExtendFieldsFormItem');

var _ExtendFieldsFormItem2 = _interopRequireDefault(_ExtendFieldsFormItem);

var _AppConfigHoc = require('../../../../AppConfig/AppConfigHoc');

var _AppConfigHoc2 = _interopRequireDefault(_AppConfigHoc);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

var ev = void 0;
var ReleaseSaleInfoConfig = (_dec = (0, _reactRedux.connect)(function (state) {
    return { components: state.centerConfig };
}, { saveConfig: _redux.saveConfig, searchConfig: _redux.searchConfig }), _dec2 = _form2.default.create(), _dec(_class = (0, _AppConfigHoc2.default)(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(ReleaseSaleInfoConfig, _Component);

    function ReleaseSaleInfoConfig(props, context) {
        (0, _classCallCheck3.default)(this, ReleaseSaleInfoConfig);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSaleInfoConfig.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSaleInfoConfig)).call(this, props, context));

        _this.examineExtendColumnFields = function (extendColumnFields) {
            var labelArr = []; // 记录所有的label
            var ifEmpty = false; //是否存在为空字段
            extendColumnFields.forEach(function (item) {
                if (item.label.length <= 0 || item.labelName.length <= 0) {
                    ifEmpty = true;
                    return;
                }
                labelArr.push(item.label);
            });
            var newLabelSet = new _set2.default(labelArr);
            return {
                ifEmpty: ifEmpty, // 是否有为空字段
                ifRepeat: labelArr.length == newLabelSet.size ? false : true // label字段是否重复，true为重复，false不重复
            };
        };

        _this.handleSubmit = function () {
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    var examin = {};

                    // 如果扩展列有数据，则先进行校验
                    if (values.extendColumnFields && values.extendColumnFields.length > 0) {
                        examin = _this.examineExtendColumnFields(values.extendColumnFields);
                    }
                    if (examin.ifEmpty) {
                        _message3.default.error("扩展列数据不能为空，请输入！");
                        return;
                    } else if (examin.ifRepeat) {
                        _message3.default.error("列字段不能重复，请重新输入！");
                        return;
                    } else {
                        _this.setState({ loading: true });
                        var that = _this;
                        _this.props.saveConfigHoc({ componentId: _this.componentId, pageId: _this.pageId, config: (0, _stringify2.default)(values) }).then(function (result) {
                            that.callParent();
                            _message3.default.success('修改成功', 2);
                            that.setState({ loading: false });
                        }, function (error) {
                            _message3.default.error(error, 2);
                            that.setState({ loading: false });
                        });
                    }
                }
            });
        };

        _this.onCheckboxChange = function (e, field) {
            _this.props.form.setFieldsValue((0, _defineProperty3.default)({}, field, e.target.checked));
        };

        _this.componentId = '';
        _this.pageId = '';
        _this.state = { loading: false, spinLoading: true };

        return _this;
    }

    /**
     * 扩展列不能为空，且扩展的列字段不能重复；
     */


    (0, _createClass3.default)(ReleaseSaleInfoConfig, [{
        key: 'receiveMessage',
        value: function receiveMessage(event) {
            if (event && event.origin.indexOf('platform') >= 0) {
                ev = event;
            }
        }
    }, {
        key: 'callParent',
        value: function callParent() {
            ev && ev.source && ev.source.postMessage && ev.source.postMessage('ok', ev.origin);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.addEventListener('message', this.receiveMessage, false);
            var componentId = _queryString2.default.parse(window.location.search).componentId;
            var pageId = _queryString2.default.parse(window.location.search).pageId;
            var source = window.location.href.split('/');
            var length = source.length;
            /*        this.componentId = source[length-2];
                    this.pageId = source[length-1];*/
            this.componentId = componentId;
            this.pageId = pageId;
            this.props.searchConfigHoc({ componentId: this.componentId, pageId: this.pageId }).then(function (result) {
                _this2.setState((0, _extends3.default)({}, result, { spinLoading: false }));
                _this2.forceUpdate();
            }, function (error) {
                _message3.default.error(error, 2);
                _this2.setState({ spinLoading: false });
            });
            console.log('componentId----', this.componentId);
            console.log('pageId-----', this.pageId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log('this.props.testPropsFromHoc is:', this.props.testPropsFromHoc);
            console.log('this.props.saveConfigHoc is:', this.props.saveConfigHoc);
            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                getFieldValue = _props$form.getFieldValue,
                setFieldsValue = _props$form.setFieldsValue;

            var formItemLayout = { labelCol: { span: 18 }, wrapperCol: { span: 6 } };
            var formItemLayout_full = { labelCol: { span: 3 }, wrapperCol: { span: 21 } };
            var extendTitle = _react2.default.createElement(
                'div',
                null,
                '\u5217\u5B57\u6BB5\uFF1A\u552F\u4E00\uFF0C\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u4F7F\u7528\uFF0C\u5982\u679C\u6539\u53D8\uFF0C\u5219\u6210\u4E3A\u65B0\u5217\u3002',
                _react2.default.createElement('br', null),
                '\u5217\u540D\u79F0\uFF1A\u5C55\u793A\u7ED9\u7528\u6237\u7684\u5217\u540D\u79F0\u3002'
            );
            var extendFormItemLabel = _react2.default.createElement(
                _tooltip2.default,
                { title: extendTitle },
                '\u6269\u5C55\u5217 ',
                _react2.default.createElement(_icon2.default, { type: 'question-circle-o' })
            );
            return _react2.default.createElement(
                _spin2.default,
                { spinning: this.state.spinLoading },
                _react2.default.createElement(
                    'div',
                    { style: { width: '600px', overflow: 'auto', margin: 'auto' } },
                    _react2.default.createElement(
                        _form2.default,
                        null,
                        _react2.default.createElement(
                            _row2.default,
                            null,
                            _react2.default.createElement(
                                _col2.default,
                                { span: 4 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: '\u578B\u53F7' }, formItemLayout),
                                    getFieldDecorator('modelCode', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.modelCode
                                    })(_react2.default.createElement(_checkbox2.default, null))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 4 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: '\u7269\u6599\u53F7' }, formItemLayout),
                                    getFieldDecorator('productCode', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.productCode
                                    })(_react2.default.createElement(_checkbox2.default, null))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 4 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: '\u5546\u54C1\u6761\u7801' }, formItemLayout),
                                    getFieldDecorator('barCode', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.barCode
                                    })(_react2.default.createElement(_checkbox2.default, null))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 4 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: '\u5355\u4F4D' }, formItemLayout),
                                    getFieldDecorator('skuUnit', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.skuUnit
                                    })(_react2.default.createElement(_checkbox2.default, null))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 24 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: extendFormItemLabel }, formItemLayout_full),
                                    getFieldDecorator('extendColumnFields', {
                                        initialValue: this.state.extendColumnFields
                                    })(_react2.default.createElement(_ExtendFieldsFormItem2.default, {
                                        setFieldsValue: setFieldsValue,
                                        getFieldValue: getFieldValue
                                    }))
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'buttonFooter' },
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', onClick: function onClick() {
                                    return _this3.handleSubmit();
                                }, loading: this.state.loading },
                            '\u4FDD\u5B58'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { className: 'ml15', onClick: function onClick() {
                                    return _this3.callParent();
                                } },
                            '\u53D6\u6D88'
                        )
                    )
                )
            );
        }
        /**
         * @param e checkbox 对象
         * @param field 修改的字段
         */

    }]);
    return ReleaseSaleInfoConfig;
}(_react.Component), _class2.contextTypes = {
    store: _propTypes2.default.object
}, _temp)) || _class) || _class) || _class);
exports.default = ReleaseSaleInfoConfig;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseSaleInfoConfig.js.map