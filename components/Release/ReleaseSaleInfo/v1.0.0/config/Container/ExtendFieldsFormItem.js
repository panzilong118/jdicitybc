'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

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

var _select = require('jdcloudui/lib/select');

var _select2 = _interopRequireDefault(_select);

var _class, _temp, _initialiseProps; /**
                                      * @author chenyanhua
                                      * @file form自定义表单: 扩展销售信息自定义列 
                                      * @date 2018-08-03
                                      */


require('jdcloudui/lib/button/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option;
var ExtendFieldsFormItem = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ExtendFieldsFormItem, _Component);

    function ExtendFieldsFormItem(props) {
        (0, _classCallCheck3.default)(this, ExtendFieldsFormItem);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ExtendFieldsFormItem.__proto__ || (0, _getPrototypeOf2.default)(ExtendFieldsFormItem)).call(this, props));

        _initialiseProps.call(_this);

        _this.default = {
            label: '',
            labelName: '',
            type: 'input'
        };
        var extendColumnFields = JSON.parse((0, _stringify2.default)(props.getFieldValue("extendColumnFields") || []));
        _this.state = {
            extendColumnFields: extendColumnFields
        };
        return _this;
    }

    (0, _createClass3.default)(ExtendFieldsFormItem, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var extendColumnFields = JSON.parse((0, _stringify2.default)(nextProps.getFieldValue("extendColumnFields") || []));
            this.setState({
                extendColumnFields: extendColumnFields
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state$extendColumnFi = this.state.extendColumnFields,
                extendColumnFields = _state$extendColumnFi === undefined ? [] : _state$extendColumnFi;

            var length = extendColumnFields.length;
            return _react2.default.createElement(
                'div',
                { className: _index2.default.mb },
                extendColumnFields.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index },
                        _react2.default.createElement(
                            'span',
                            { className: _index2.default.spanTitle },
                            '\u5217\u5B57\u6BB5:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _index2.default.inputWrap },
                            _react2.default.createElement(_input2.default, {
                                type: 'text',
                                value: item.label,
                                onChange: function onChange(e) {
                                    _this2.onFieldChange('label', e.target.value, index);
                                }
                            })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _index2.default.spanTitle },
                            '\u5217\u540D\u79F0:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _index2.default.inputWrap },
                            _react2.default.createElement(_input2.default, {
                                type: 'text',
                                value: item.labelName,
                                onChange: function onChange(e) {
                                    _this2.onFieldChange('labelName', e.target.value, index);
                                }
                            })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: _index2.default.spanTitle },
                            '\u5217\u7C7B\u578B:'
                        ),
                        _react2.default.createElement(
                            _select2.default,
                            {
                                value: item.type,
                                style: { width: 80 },
                                onChange: function onChange(value) {
                                    _this2.onFieldChange('type', value, index);
                                }
                            },
                            _react2.default.createElement(
                                Option,
                                { value: 'input' },
                                '\u6587\u672C'
                            ),
                            _react2.default.createElement(
                                Option,
                                { value: 'image' },
                                '\u56FE\u7247'
                            ),
                            _react2.default.createElement(
                                Option,
                                { value: 'file' },
                                '\u6587\u4EF6'
                            )
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { className: _index2.default.iconFont, onClick: function onClick() {
                                    _this2.handleMinus(index);
                                } },
                            _react2.default.createElement(_icon2.default, { type: 'minus' })
                        )
                    );
                }),
                _react2.default.createElement(
                    'div',
                    { className: length > 0 ? _index2.default.ml : "" },
                    _react2.default.createElement(
                        _button2.default,
                        { className: _index2.default.iconFont, onClick: this.handlePlus },
                        _react2.default.createElement(_icon2.default, { type: 'plus' })
                    )
                )
            );
        }
        /**
         * 添加新列
         */

        /**
         * 减去列
         */


        /**
         * 变化字段值
         */


        // 自定义组件，pass value to Form

    }]);
    return ExtendFieldsFormItem;
}(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.handlePlus = function () {
        var extendColumnFields = JSON.parse((0, _stringify2.default)(_this3.state.extendColumnFields || []));
        extendColumnFields.push(_this3.default);
        _this3.onFormSetFieldsValue(extendColumnFields);
    };

    this.handleMinus = function (index) {
        var extendColumnFields = JSON.parse((0, _stringify2.default)(_this3.state.extendColumnFields || []));
        extendColumnFields.splice(index, 1);
        _this3.onFormSetFieldsValue(extendColumnFields);
    };

    this.onFieldChange = function (field, value, index) {
        var extendColumnFields = JSON.parse((0, _stringify2.default)(_this3.state.extendColumnFields || []));
        extendColumnFields[index][field] = value;
        _this3.setState({
            extendColumnFields: extendColumnFields
        });
        _this3.onFormSetFieldsValue(extendColumnFields);
    };

    this.onFormSetFieldsValue = function (changedValue) {
        var setFieldsValue = _this3.props.setFieldsValue;
        if (setFieldsValue) {
            setFieldsValue({
                extendColumnFields: changedValue
            });
        }
    };
}, _temp);
exports.default = ExtendFieldsFormItem;
module.exports = exports['default'];
//# sourceMappingURL=ExtendFieldsFormItem.js.map