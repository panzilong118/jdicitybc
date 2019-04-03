'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _row = require('jdcloudui/lib/row');

var _row2 = _interopRequireDefault(_row);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _dec, _class;

require('jdcloudui/lib/row/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/form/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormItem = _form2.default.Item;

var Search = (_dec = _form2.default.create(), _dec(_class = function (_Component) {
    (0, _inherits3.default)(Search, _Component);

    function Search(props) {
        (0, _classCallCheck3.default)(this, Search);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call(this, props));

        _this.handleSubmit = function () {
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('values is', values);
                    var params = (0, _extends3.default)({}, _this.props.search, values, { pageNum: 1 });
                    typeof _this.props.onChangeSearch === "function" && _this.props.onChangeSearch(params);
                    _this.props.onSubmit(params);
                }
            });
        };

        _this.onReset = function () {
            _this.props.form.resetFields();
        };

        return _this;
    }

    (0, _createClass3.default)(Search, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                getFieldValue = _props$form.getFieldValue;
            var _props = this.props,
                item = _props.item,
                revert = _props.revert;

            return _react2.default.createElement(
                'div',
                { className: 'ui-search mb20' },
                _react2.default.createElement(
                    _row2.default,
                    { className: 'l-content', style: revert ? { minHeight: '70' } : {} },
                    _react2.default.createElement(
                        _form2.default,
                        { layout: 'inline' },
                        (item || []).map(function (item, index) {
                            return _react2.default.createElement(
                                FormItem,
                                { label: item.title },
                                getFieldDecorator(item.key, { initialValue: item.initialValue != undefined ? item.initialValue : undefined })(item.render)
                            );
                        }),
                        _react2.default.createElement(
                            'div',
                            { className: 'r-action' },
                            _react2.default.createElement(
                                _button2.default,
                                { style: revert ? { top: '25%' } : {}, type: 'primary', onClick: function onClick() {
                                        return _this2.handleSubmit();
                                    } },
                                '\u67E5 \u8BE2'
                            ),
                            revert && _react2.default.createElement(
                                _button2.default,
                                { style: { top: '75%' }, type: 'primary', onClick: this.onReset.bind(this) },
                                '\u91CD \u7F6E'
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Search;
}(_react.Component)) || _class);
exports.default = Search;
module.exports = exports['default'];
//# sourceMappingURL=Search.js.map