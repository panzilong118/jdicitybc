'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _class, _temp, _initialiseProps; /**
                                      * @author chenyanhua
                                      * @date 2018-08-06
                                      * @file 发布商品-商品介绍 Tab组件
                                      * 运营平台/店铺/供应商 用的该组件代码都一样
                                      * 除模板引用的static下的ueditor文件不一样
                                      * shop引用的是ueditor.all.js
                                      * platform引用的是ueditor.all.min.js
                                      */


require('jdcloudui/lib/message/style');

require('jdcloudui/lib/checkbox/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./style/index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = _checkbox2.default.Group;
var ReleaseChannel = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ReleaseChannel, _Component);

    function ReleaseChannel(props) {
        (0, _classCallCheck3.default)(this, ReleaseChannel);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseChannel.__proto__ || (0, _getPrototypeOf2.default)(ReleaseChannel)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            value: _this.getValue(props)
        };
        return _this;
    }

    (0, _createClass3.default)(ReleaseChannel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                value: this.getValue(nextProps)
            });
        }
        /**
         * 根据edit确定是新发布还是编辑
         * 新发布默认选中全部
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var channelOptions = [{ label: '移动端', value: 'm' }, { label: 'PC端', value: 'pc' }];
            return _react2.default.createElement(
                'div',
                { className: _index2.default.labelWrap },
                _react2.default.createElement(
                    'label',
                    { htmlFor: '\u9002\u7528\u6E20\u9053', className: _index2.default.labelTitle },
                    _react2.default.createElement(
                        'span',
                        { className: _index2.default.colorRed },
                        '*'
                    ),
                    '\u9002\u7528\u6E20\u9053\uFF1A'
                ),
                _react2.default.createElement(
                    'div',
                    { className: _index2.default.labelCont },
                    _react2.default.createElement(CheckboxGroup, {
                        options: channelOptions,
                        value: this.state.value,
                        onChange: function onChange(checkedValues) {
                            _this2.onChange(checkedValues);
                        }
                    })
                )
            );
        }

        /**
         * 选择销售渠道,组合数据,并更新数据源
         * PC端传6，移动端传1~5
         */

    }]);
    return ReleaseChannel;
}(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getValue = function (props) {
        var value = [];
        var old_value = props.itemTmplPublishVo && props.itemTmplPublishVo.channelArr || ['m', 'pc'];
        if (old_value.indexOf(1) >= 0) {
            value.push('m');
        }
        if (old_value.indexOf(6) >= 0) {
            value.push('pc');
        }
        return value;
    };

    this.onChange = function (checkedValues) {
        if (checkedValues.length <= 0) {
            _message3.default.warn('适用渠道不能为空!');
        } else {
            _this3.setState({
                value: checkedValues
            });
            var channelArr = [];
            if (checkedValues.indexOf('m') >= 0) {
                channelArr = channelArr.concat([1, 2, 3, 4, 5]);
            }
            if (checkedValues.indexOf('pc') >= 0) {
                channelArr.push(6);
            }
            var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));
            itemTmplPublishVo.channelArr = channelArr;
            _this3.props.updateItemTmplAction(itemTmplPublishVo);
        }
    };
}, _temp);
exports.default = ReleaseChannel;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseChannel.js.map