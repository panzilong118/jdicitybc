'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

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

require('jdcloudui/lib/table/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _UploadImg = require('../../../GoodImageShop/v1.0.0/view/UploadImg/UploadImg');

var _UploadImg2 = _interopRequireDefault(_UploadImg);

require('./style/skuImage.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = _radio2.default.Group; /**
                                         * @file 发布商品-商品图片
                                         */

var SkuImageShop = function (_Component) {
    (0, _inherits3.default)(SkuImageShop, _Component);

    function SkuImageShop(props) {
        (0, _classCallCheck3.default)(this, SkuImageShop);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SkuImageShop.__proto__ || (0, _getPrototypeOf2.default)(SkuImageShop)).call(this, props));

        _this.handleColumns = function () {
            return [{
                title: '规格1',
                dataIndex: 'aName1',
                key: 'attrName1',
                render: function render(value, row) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        value ? value.map(function (item, index) {
                            return _react2.default.createElement(
                                'p',
                                { className: 'attr-name-p', key: index },
                                item.vName
                            );
                        }) : null
                    );
                }
            }, {
                title: '规格2',
                dataIndex: 'aName2',
                key: 'attrName2',
                render: function render(value, row) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        value ? value.map(function (item, index) {
                            return _react2.default.createElement(
                                'p',
                                { className: 'attr-name-p', key: index },
                                item.vName
                            );
                        }) : null
                    );
                }
            }, {
                title: '规格3',
                dataIndex: 'aName3',
                key: 'attrName3',
                render: function render(value, row) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        value ? value.map(function (item, index) {
                            return _react2.default.createElement(
                                'p',
                                { className: 'attr-name-p', key: index },
                                item.vName
                            );
                        }) : null
                    );
                }
            }, {
                title: '上传文件',
                key: 'active',
                render: function render(text, row, index) {
                    var skuImgInfos = [];
                    if (row.url) {
                        skuImgInfos = [{
                            url: row.url,
                            alt: row.alt
                        }];
                    }
                    return _react2.default.createElement(_UploadImg2.default, {
                        onCallBackData: function onCallBackData(e) {
                            return _this.onCallBackData(e, index, row);
                        },
                        itemImgInfos: skuImgInfos,
                        num: 1
                    });
                }
            }];
        };

        _this.handleOnChange = function (e) {
            _this.flag = false;
            _this.isEdit = [];
            _this.setState({
                radioValue: e.target.value
            });
        };

        _this.handleGetSaleAttributes = function (data) {
            return data.map(function (item) {
                return {
                    aName: item.aName,
                    aid: item.aid
                };
            });
        };

        _this.init = function (data, radio) {
            if (radio == 0) {
                return data.map(function (item) {
                    var params = {
                        url: item.url,
                        alt: item.alt
                    };
                    item.attributes && item.attributes.length > 0 && item.attributes.map(function (result, index) {
                        params['aName' + (index + 1)] = [result];
                    });
                    return params;
                });
            } else {
                var dataArr = [],
                    cName = { aName: [] },
                    bName = { aName: [] };
                var index = 0;
                data.map(function (item) {
                    item.attributes && item.attributes.length > 0 && item.attributes.map(function (result) {
                        if (result.aid == radio) {
                            var flag = false;
                            dataArr.map(function (m) {
                                if (result.vid == m.vid) {
                                    flag = true;
                                }
                            });
                            if (!flag) {
                                dataArr[index] = {
                                    aid: result.aid,
                                    vid: result.vid,
                                    aName1: [result]
                                };
                                var Aot = false;
                                _this.isEdit.map(function (_item) {
                                    if (_item.aid == result.aid && _item.vid == result.vid) {
                                        Aot = true;
                                    }
                                });
                                if (Aot) {
                                    dataArr[index].url = _this.flag ? item.url : null;
                                    dataArr[index].alt = _this.flag ? item.alt : null;
                                }
                                index++;
                            }
                        } else {
                            if (!cName.aid || cName.aid == result.aid) {
                                var _flag = false;
                                cName.aid = result.aid;
                                cName.aName.map(function (m) {
                                    if (result.vid == m.vid) {
                                        _flag = true;
                                    }
                                });
                                if (!_flag) {
                                    cName.aName.push(result);
                                }
                            } else {
                                var _flag2 = false;
                                bName.aid = result.aid;
                                bName.aName.map(function (m) {
                                    if (result.vid == m.vid) {
                                        _flag2 = true;
                                    }
                                });
                                if (!_flag2) {
                                    bName.aName.push(result);
                                }
                            }
                        }
                    });
                });
                dataArr.map(function (item, index) {
                    dataArr[index].aName2 = cName.aName;
                    dataArr[index].aName3 = bName.aName;
                });
                return dataArr;
            }
        };

        _this.state = {
            radioValue: 0
        };
        //用来判断用户是否已经按照商品属性编辑过
        _this.flag = false;
        //用来判断用户所上传的规格参数
        _this.isEdit = [];
        return _this;
    }

    //sku表格的columns


    (0, _createClass3.default)(SkuImageShop, [{
        key: 'onCallBackData',

        //图片上传后返回的数据
        value: function onCallBackData(item, index, row) {
            var _this2 = this;

            console.log("deceswd-----------", item);
            if (this.state.radioValue == 0) {
                this.itemImgInfos[index].url = item.length > 0 ? item[0].url : "";
                this.itemImgInfos[index].alt = item.length > 0 ? item[0].alt : "";
            } else {
                this.flag = true;
                this.itemImgInfos.map(function (_item, i) {
                    var saleAttributes = _item.attributes;
                    saleAttributes.map(function (k) {
                        if (k.aid == row.aid && k.vid == row.vid) {
                            _this2.isEdit.push({ aid: row.aid, vid: row.vid });
                            _this2.itemImgInfos[i].url = item.length > 0 ? item[0].url : "";
                            _this2.itemImgInfos[i].alt = item.length > 0 ? item[0].alt : "";
                        }
                    });
                });
            }
            this.props.itemTmplPublishVo.itemSkuPicVoList = this.itemImgInfos;
            this.props.updateItemTmplAction(this.props.itemTmplPublishVo);
        }

        //选项卡change


        //初始化radio数据


        //初始化数据

    }, {
        key: 'render',
        value: function render() {
            this.itemImgInfos = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemSkuPicVoList ? this.props.itemTmplPublishVo.itemSkuPicVoList : [];
            var saleAttributes = this.itemImgInfos.length > 0 ? this.itemImgInfos[0].attributes : '';
            var attributes = saleAttributes && this.handleGetSaleAttributes(saleAttributes);
            var data = this.itemImgInfos.length > 0 ? this.init(this.itemImgInfos, this.state.radioValue) : [];
            var flag = this.itemImgInfos[0] && this.itemImgInfos[0].attributes && this.itemImgInfos[0].attributes.length > 0 ? 1 : 0;
            return _react2.default.createElement(
                'div',
                null,
                this.itemImgInfos.length > 0 && flag ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'skuSelect' },
                        _react2.default.createElement(
                            'span',
                            { className: 'mr20 f-fs14' },
                            'SKU\u56FE\u7247'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                RadioGroup,
                                { defaultValue: '0', onChange: this.handleOnChange },
                                _react2.default.createElement(
                                    _radio2.default,
                                    { value: '0' },
                                    '\u5206\u522B\u4E0A\u4F20'
                                ),
                                attributes && attributes.map(function (item, index) {
                                    return _react2.default.createElement(
                                        _radio2.default,
                                        { key: index, value: item.aid },
                                        '\u6309\u5546\u54C1' + item.aName + '\u5C5E\u6027\u4E0A\u4F20'
                                    );
                                })
                            )
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: 'text-red' },
                            '(\u5982\u6309\u9500\u552E\u5C5E\u6027\u5206\u7EC4\u7F16\u8F91\uFF0C\u4F1A\u8986\u76D6\u5BF9\u5E94SKU\u5DF2\u7F16\u8F91\u56FE\u7247\u76F8\u5173\u4FE1\u606F)'
                        )
                    ),
                    _react2.default.createElement(_table2.default, {
                        showHeader: false,
                        columns: this.handleColumns(),
                        dataSource: data,
                        className: 'tableBorder',
                        pagination: false
                    })
                ) : null
            );
        }
    }]);
    return SkuImageShop;
}(_react.Component);

exports.default = SkuImageShop;
module.exports = exports['default'];
//# sourceMappingURL=SkuImageShop.js.map