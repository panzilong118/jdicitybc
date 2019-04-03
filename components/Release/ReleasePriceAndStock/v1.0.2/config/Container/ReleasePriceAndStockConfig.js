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

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

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

var _form = require('jdcloudui/lib/form');

var _form2 = _interopRequireDefault(_form);

var _dec, _dec2, _class, _class2, _temp; /**
                                          * @author chenyanhua
                                          * @date 2018-08-03
                                          * @file 销售信息表格：自定义扩展列
                                          * /item-shop-view/configs/components-react/ReleasePriceAndStock/v1.0.1
                                          */


require('jdcloudui/lib/spin/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/row/style');

require('jdcloudui/lib/col/style');

require('jdcloudui/lib/checkbox/style');

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

var _AppConfigHoc = require('../../../../AppConfig/AppConfigHoc');

var _AppConfigHoc2 = _interopRequireDefault(_AppConfigHoc);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

var ev = void 0;
var ReleasePriceAndStockConfig = (_dec = (0, _reactRedux.connect)(function (state) {
    return { components: state.centerConfig };
}, { saveConfig: _redux.saveConfig, searchConfig: _redux.searchConfig }), _dec2 = _form2.default.create(), _dec(_class = (0, _AppConfigHoc2.default)(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
    (0, _inherits3.default)(ReleasePriceAndStockConfig, _Component);

    function ReleasePriceAndStockConfig(props, context) {
        (0, _classCallCheck3.default)(this, ReleasePriceAndStockConfig);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReleasePriceAndStockConfig.__proto__ || (0, _getPrototypeOf2.default)(ReleasePriceAndStockConfig)).call(this, props, context));

        _this.handleSubmit = function () {
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    var examin = {};

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

    (0, _createClass3.default)(ReleasePriceAndStockConfig, [{
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
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var formItemLayout = { labelCol: { span: 18 }, wrapperCol: { span: 6 } };
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
                                'h3',
                                { style: { 'lineHeight': '50px' } },
                                '\u4EF7\u683C\u53CA\u5E93\u5B58\u4FE1\u606F\u5217\u8868\u53EF\u9009\u5C55\u793A\u6761\u76EE(\u9ED8\u8BA4\u4E0D\u5C55\u793A) : '
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 4 },
                                _react2.default.createElement(
                                    FormItem,
                                    (0, _extends3.default)({ label: '\u5EFA\u8BAE\u552E\u4EF7' }, formItemLayout),
                                    getFieldDecorator('ifProposalPrice', {
                                        valuePropName: 'checked',
                                        initialValue: this.state.ifProposalPrice === undefined ? false : this.state.ifProposalPrice
                                    })(_react2.default.createElement(_checkbox2.default, null))
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
    return ReleasePriceAndStockConfig;
}(_react.Component), _class2.contextTypes = {
    store: _propTypes2.default.object
}, _temp)) || _class) || _class) || _class);
exports.default = ReleasePriceAndStockConfig;
module.exports = exports['default'];
//# sourceMappingURL=ReleasePriceAndStockConfig.js.map