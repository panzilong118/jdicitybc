"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _input = require("jdcloudui/lib/input");

var _input2 = _interopRequireDefault(_input);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _select = require("jdcloudui/lib/select");

var _select2 = _interopRequireDefault(_select);

require("jdcloudui/lib/input/style");

require("jdcloudui/lib/select/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _basic = require("./style/basic.less");

var _basic2 = _interopRequireDefault(_basic);

var _queryData = require("./redux/queryData");

var _queryData2 = _interopRequireDefault(_queryData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Option = _select2.default.Option; /**
                                   * @file 发布商品-基础设置- 商品名称
                                   */

var BasicBrand = function (_Component) {
    (0, _inherits3.default)(BasicBrand, _Component);

    function BasicBrand(props) {
        (0, _classCallCheck3.default)(this, BasicBrand);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BasicBrand.__proto__ || (0, _getPrototypeOf2.default)(BasicBrand)).call(this, props));

        _this.handelChange = function (e, key) {
            var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
            var value = e.target.value;
            if (key == "brandNameCh") {
                var reg = /^[\u4e00-\u9fa5]+$/;
                if (value && !reg.test(value[0])) {
                    _this.setState({
                        ifBrandNameCh: false
                    });
                } else {
                    _this.setState({
                        ifBrandNameCh: true
                    });
                    itemTmplPublishVo.brandNameCh = value;
                }
            } else if (key == "brandNameEn") {
                var _reg = /^[^\u4e00-\u9fa5]+$/;
                if (value && !_reg.test(value)) {
                    _this.setState({
                        ifBrandNameEn: false
                    });
                } else {
                    _this.setState({
                        ifBrandNameEn: true
                    });
                    itemTmplPublishVo.brandNameEn = value;
                }
            }
            itemTmplPublishVo.brandId = -1;
            _this.props.updateItemTmplAction(itemTmplPublishVo);
        };

        _this.handelSelectChange = function (key, value) {
            if (value == 'a999') {
                _this.setState({
                    flag: true
                });
            } else {
                if (value == undefined) {
                    value = null;
                }
                _this.setState({
                    flag: false
                });
                var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
                itemTmplPublishVo.brandId = value;
                _this.props.updateItemTmplAction(itemTmplPublishVo);
            }
        };

        _this.state = {
            brandArr: [],
            flag: false,
            ifBrandNameCh: true, //中文品牌名称符合校验规则
            ifBrandNameEn: true //英文品牌名称符合校验规则
        };
        _this.cid = _this.props.itemTmplPublishVo && _this.props.itemTmplPublishVo.cid;
        return _this;
    }

    (0, _createClass3.default)(BasicBrand, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            if (this.cid) {
                var params = {
                    categoryId: this.cid
                };
                // if(this.props.type == 1) {
                //     params.itemId = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.id || null;
                // }
                this.props.getShopBrandData(params, this.props.type);
            }
            // const params = this.props.itemTmplPublishVo;
            // if(!params.brandId && params.brandNameEn && params.brandNameCh){
            //     this.setState({
            //         flag:true,
            //         brandNameEn:params.brandNameEn,
            //         brandNameCh:params.brandNameCh
            //     })
            // }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.itemTmplPublishVo.cid && nextProps.itemTmplPublishVo.cid != this.cid) {
                this.cid = nextProps.itemTmplPublishVo.cid;
                nextProps.getShopBrandData({ categoryId: this.cid }, nextProps.type);
            }

            if (nextProps.brandData && nextProps.brandData.data && nextProps.brandData.data.data) {
                var brandArr = nextProps.brandData.data.data;
                if (!this.props.editData.brand && this.props.edit && this.props.ifValid) {
                    var brand = {
                        id: nextProps.itemTmplPublishVo.brandId || null,
                        brandNameCh: nextProps.itemTmplPublishVo.brandNameCh || null,
                        brandNameEn: nextProps.itemTmplPublishVo.brandNameEn || null
                    };
                    //nextProps.brandData.data.data.filter(item => item.id == nextProps.itemTmplPublishVo.brandId)[0] || null;
                    this.props.setEditData('brand', brand);
                }

                if (this.props.editData.brand) {
                    var flag = false;
                    nextProps.brandData.data.data.map(function (item) {
                        if (_this2.props.editData.brand.id == item.id) {
                            flag = true;
                        }
                    });
                    if (!flag) {
                        brandArr = [].concat((0, _toConsumableArray3.default)(nextProps.brandData.data.data), [this.props.editData.brand]);
                    }
                }
                this.setState({
                    brandArr: brandArr
                });
            }
        }
        //保存用户操作数据

        //用户操作更改数据

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                flag = _state.flag,
                brandArr = _state.brandArr;

            var params = this.props.itemTmplPublishVo;
            var setPlaceholder = {
                placeholder: '请选择',
                onChange: function onChange(value) {
                    return _this3.handelSelectChange('brandId', value);
                }
            };
            if (params.brandId) {
                brandArr.length > 0 && brandArr.map(function (result, index) {
                    if (result.id == params.brandId) {
                        setPlaceholder.value = result.id;
                    }
                });
            } else if (flag) {
                setPlaceholder.value = 'a999';
            } else {
                this.num++;
                setPlaceholder.value = null;
            }

            return _react2.default.createElement(
                "div",
                { className: _basic2.default.labelWrap },
                _react2.default.createElement(
                    "label",
                    { htmlFor: "\u54C1\u724C", className: _basic2.default.labelTitle },
                    "\u54C1\u724C\uFF1A"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic2.default.labelCont },
                    _react2.default.createElement(
                        _select2.default,
                        (0, _extends3.default)({ size: "large", className: "", key: this.num }, setPlaceholder, { style: { width: '100%' }, allowClear: true }),
                        brandArr.map(function (item, index) {
                            return _react2.default.createElement(
                                Option,
                                { key: index, value: item.id },
                                item.brandNameCh ? item.brandNameCh : item.brandNameEn
                            );
                        }),
                        _react2.default.createElement(
                            Option,
                            { key: 'a999', value: "a999" },
                            "\u5176\u4ED6"
                        )
                    ),
                    flag ? _react2.default.createElement(
                        "div",
                        { style: { marginTop: "15px" } },
                        _react2.default.createElement(
                            "label",
                            null,
                            "\u4E2D\u6587\u540D\u79F0\uFF1A"
                        ),
                        _react2.default.createElement(_input2.default, { placeholder: "\u8F93\u5165\u54C1\u724C\u4E2D\u6587\u540D\u79F0", size: "large", onBlur: function onBlur(e) {
                                return _this3.handelChange(e, 'brandNameCh');
                            }, style: { width: '120px', marginRight: '20px' } }),
                        _react2.default.createElement(
                            "label",
                            null,
                            "\u82F1\u6587\u540D\u79F0\uFF1A"
                        ),
                        _react2.default.createElement(_input2.default, { placeholder: "\u8F93\u5165\u54C1\u724C\u82F1\u6587\u540D\u79F0", size: "large", onBlur: function onBlur(e) {
                                return _this3.handelChange(e, 'brandNameEn');
                            }, style: { width: '120px' } })
                    ) : null,
                    flag && (!this.state.ifBrandNameCh || !this.state.ifBrandNameEn) ? _react2.default.createElement(
                        "div",
                        { className: _basic2.default.brand },
                        !this.state.ifBrandNameCh ? _react2.default.createElement(
                            "span",
                            { className: _basic2.default.brandcn },
                            "\u8BF7\u8F93\u5165\u4E2D\u6587\u54C1\u724C,\u5426\u5219\u4E0D\u4F1A\u4FDD\u5B58"
                        ) : null,
                        !this.state.ifBrandNameEn ? _react2.default.createElement(
                            "span",
                            { className: _basic2.default.branden },
                            "\u8BF7\u8F93\u5165\u82F1\u6587\u54C1\u724C\uFF0C\u5426\u5219\u4E0D\u4F1A\u4FDD\u5B58"
                        ) : null
                    ) : null
                )
            );
        }
    }]);
    return BasicBrand;
}(_react.Component);

exports.default = BasicBrand;
module.exports = exports["default"];
//# sourceMappingURL=BasicBrand.js.map