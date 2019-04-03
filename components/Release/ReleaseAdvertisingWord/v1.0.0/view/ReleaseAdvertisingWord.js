'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

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

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _class, _temp, _initialiseProps; /**
                                      * @author chenyanhua
                                      * @date 2018-08-06
                                      * @file 发布商品-广告词
                                      * 包含字体颜色和链接
                                      * 链接做校验
                                      */


require('jdcloudui/lib/button/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/checkbox/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('rc-color-picker/assets/index.css');

var _rcColorPicker = require('rc-color-picker');

var _rcColorPicker2 = _interopRequireDefault(_rcColorPicker);

var _index = require('./style/index.less');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = _checkbox2.default.Group;
var ReleaseAdvertisingWord = (_temp = _class = function (_Component) {
    (0, _inherits3.default)(ReleaseAdvertisingWord, _Component);

    function ReleaseAdvertisingWord(props) {
        (0, _classCallCheck3.default)(this, ReleaseAdvertisingWord);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseAdvertisingWord.__proto__ || (0, _getPrototypeOf2.default)(ReleaseAdvertisingWord)).call(this, props));

        _initialiseProps.call(_this);

        var ad = _this.getAdDataSource(props);
        _this.state = (0, _extends3.default)({}, ad, {
            validAdUrl: true // 广告词链接是否有效
        });
        return _this;
    }

    (0, _createClass3.default)(ReleaseAdvertisingWord, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var ad = this.getAdDataSource(nextProps);
            this.setState((0, _extends3.default)({}, ad));
        }
        /**
         * 获取广告词相关数据
         */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                adUrl = _state.adUrl,
                adColor = _state.adColor,
                adText = _state.adText;

            return _react2.default.createElement(
                'div',
                { className: _index2.default.labelWrap },
                _react2.default.createElement(
                    'label',
                    { htmlFor: '\u5E7F\u544A\u8BCD', className: _index2.default.labelTitle },
                    '\u5E7F\u544A\u8BCD\uFF1A'
                ),
                _react2.default.createElement(
                    'div',
                    { className: _index2.default.labelCont },
                    _react2.default.createElement(_input2.default, {
                        size: 'large',
                        placeholder: '\u8BF7\u8F93\u5165\u5E7F\u544A\u8BCD',
                        value: adText,
                        onChange: function onChange(e) {
                            _this2.onStateChange('adText', e.target.value);
                        },
                        onBlur: function onBlur(e) {
                            _this2.updateAdDataSource('adText', e.target.value);
                        }
                    })
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: _index2.default.labelChildWrap },
                        _react2.default.createElement(
                            'label',
                            { className: _index2.default.labelChildTitle },
                            '\u94FE\u63A5\uFF1A'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _index2.default.labelChildCont },
                            _react2.default.createElement(_input2.default, {
                                size: 'large',
                                placeholder: '(http|https|ftp)://a.b.com',
                                style: { width: '515px' },
                                value: adUrl,
                                onChange: function onChange(e) {
                                    _this2.onStateChange('adUrl', e.target.value);
                                },
                                onBlur: function onBlur(e) {
                                    _this2.updateAdDataSource('adUrl', e.target.value);
                                }
                            })
                        ),
                        !this.state.validAdUrl ? _react2.default.createElement(
                            'div',
                            { className: _index2.default.errorTips },
                            '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u94FE\u63A5\uFF0C\u5426\u5219\u6570\u636E\u4E0D\u4F1A\u4FDD\u5B58'
                        ) : null
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: _index2.default.labelChildWrap },
                        _react2.default.createElement(
                            'label',
                            { className: _index2.default.labelChildTitle },
                            '\u989C\u8272\uFF1A'
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _index2.default.labelChildCont },
                            adColor
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: _index2.default.labelChildCont },
                            _react2.default.createElement(
                                'span',
                                { className: _index2.default.verticalMiddle },
                                _react2.default.createElement(_rcColorPicker2.default, {
                                    enableAlpha: false,
                                    color: adColor,
                                    onClose: function onClose(colors) {
                                        _this2.updateAdDataSource('adColor', colors.color);
                                    },
                                    onChange: function onChange(colors) {
                                        _this2.onStateChange('adColor', colors.color);
                                    }
                                })
                            )
                        ),
                        typeof adColor == 'string' && adColor.length > 0 ? _react2.default.createElement(
                            'p',
                            { className: _index2.default.labelChildCont },
                            _react2.default.createElement(
                                _button2.default,
                                { size: 'small', onClick: function onClick() {
                                        _this2.updateAdDataSource('adColor', null);
                                    } },
                                '\u91CD\u7F6E'
                            )
                        ) : null
                    )
                )
            );
        }
        /**
         * 更新state
         */


        /**
         * 更新数据源
         */

    }]);
    return ReleaseAdvertisingWord;
}(_react.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.getAdDataSource = function (props) {
        var extendFields = JSON.parse((0, _stringify2.default)(props.itemTmplPublishVo && props.itemTmplPublishVo.extendFields || []));
        var ad = {
            adText: null, // 广告词
            adUrl: null, // 链接
            adColor: null // 颜色
        };

        // 以免数据中不存在这些字段
        var has_adText = false;
        var has_adUrl = false;
        var has_adColor = false;
        extendFields.map(function (item) {
            if (item.label == 'adText') {
                has_adText = true;
                ad.adText = item.value;
            }
            if (item.label == 'adUrl') {
                has_adUrl = true;
                ad.adUrl = item.value;
            }
            if (item.label == 'adColor') {
                has_adColor = true;
                ad.adColor = item.value;
            }
        });

        if (!has_adText) {
            extendFields.push({ label: 'adText', value: null });
        }
        if (!has_adUrl) {
            extendFields.push({ label: 'adUrl', value: null });
        }
        if (!has_adColor) {
            extendFields.push({ label: 'adColor', value: null });
        }
        return ad;
    };

    this.onStateChange = function (field, value) {
        _this3.setState((0, _defineProperty3.default)({}, field, value));
    };

    this.updateAdDataSource = function (field, value) {
        var reg = /^(((ht|f)tps?):)?\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/;;

        // 如果是广告词链接，则作校验
        if (field == 'adUrl' && value.length > 0) {
            if (reg.test(value)) {
                _this3.setState({
                    validAdUrl: true
                });
            } else {
                _this3.setState({
                    validAdUrl: false
                });
                return false;
            }
        } else if (field == 'adUrl') {
            _this3.setState({
                validAdUrl: true
            });
        }

        // 更新广告词 extendFields 
        var extendFields = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo && _this3.props.itemTmplPublishVo.extendFields || []));

        // 以免数据中不存在这些字段
        var has_adText = false;
        var has_adUrl = false;
        var has_adColor = false;
        extendFields.map(function (item) {
            if (item.label == 'adText') {
                has_adText = true;
            }
            if (item.label == 'adUrl') {
                has_adUrl = true;
            }
            if (item.label == 'adColor') {
                has_adColor = true;
            }
        });

        if (!has_adText) {
            extendFields.push({ label: 'adText', value: null });
        }
        if (!has_adUrl) {
            extendFields.push({ label: 'adUrl', value: null });
        }
        if (!has_adColor) {
            extendFields.push({ label: 'adColor', value: null });
        }

        extendFields.forEach(function (item) {
            if (item.label == field) {
                item.value = value;
            }
        });

        var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));
        itemTmplPublishVo.extendFields = extendFields;
        _this3.props.updateItemTmplAction(itemTmplPublishVo);
    };
}, _temp);
exports.default = ReleaseAdvertisingWord;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseAdvertisingWord.js.map