'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _collapse = require('jdcloudui/lib/collapse');

var _collapse2 = _interopRequireDefault(_collapse);

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/select/style');

require('jdcloudui/lib/collapse/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = _collapse2.default.Panel; /**
                                       * @file 发布商品-规格参数Tab组件
                                       */
/**
 * type :
 * "0": (运营平台：平台商品库管理 发布、编辑),
 * "1": (运营平台：商品库管理/商品发布、编辑),
 * "2": (供应商),
 * "3": (店铺)
 */

var Option = _select2.default.Option;

var ReleaseSpecification = function (_Component) {
    (0, _inherits3.default)(ReleaseSpecification, _Component);

    function ReleaseSpecification(props) {
        (0, _classCallCheck3.default)(this, ReleaseSpecification);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSpecification.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSpecification)).call(this, props));

        _this.componentDidMount = function () {
            if (_this.props.itemTmplPublishVo && _this.props.itemTmplPublishVo.cid) {
                console.log('mytest didmount,has cid');
                if (_this.props.type == 1) {
                    _this.props.getAttributeByCategoryIdForPlatform(_this.props.itemTmplPublishVo.cid);
                } else if (_this.props.type == 2 || _this.props.type == 3) {
                    _this.props.getAttributeByCategoryIdForShop(_this.props.itemTmplPublishVo.cid);
                }
            }
        };

        _this.getDefaultValue4Input = function (attr, spec) {
            for (var j = 0; j < (spec || []).length; ++j) {
                if (spec[j].aid == attr.attrId) {
                    return spec[j].desc;
                }
            }
            return "";
        };

        _this.getDefaultValue = function (mainIds, selectOptionIds, attr, spec) {
            // // 优先进行置灰的匹配
            for (var i = 0; i < mainIds.length; ++i) {
                if (selectOptionIds.indexOf(mainIds[i]) != -1) {
                    return mainIds[i];
                }
            }
            // 未匹配到，返回全量数据里对应的回显数据
            for (var j = 0; j < (spec || []).length; ++j) {
                if (spec[j].aid == attr.attrId) {
                    return spec[j].vid;
                }
            }
            return "";
        };

        _this.shouldBeDisable = function (mainIds, selectOptionIds) {
            for (var i = 0; i < mainIds.length; ++i) {
                if (selectOptionIds.indexOf(mainIds[i]) != -1) {
                    return true;
                }
            }
            return false;
        };

        _this.onChangeAttr = function (e, aid, attrObj, type) {
            var value = type == 'select' ? e : e.target.value;
            var unit = { aid: aid, vid: '', desc: '' };
            var result = '';

            //未匹配到场景：选择了类目，默认生成一条sku数据，该sku的attr为空
            //操作：直接对第一条进行赋值
            if (_this.props.itemTmplPublishVo && _this.props.itemTmplPublishVo.cid && _this.props.itemTmplPublishVo.itemTmplSkuVoList.length == 1 && !_this.props.itemTmplPublishVo.itemTmplSkuVoList[0].attributes) {
                var orginData = _this.props.itemTmplPublishVo.itemTmplSkuVoList[0].specAttributes;
                for (var k = 0; k < (orginData || []).length; ++k) {
                    if (orginData[k].aid == aid) {
                        if (type == 'select') {
                            orginData[k].vid = value;
                        }
                        if (type == 'input') {
                            orginData[k].desc = value;
                        }
                        // 此处调用redux回调
                        result = _this.props.itemTmplPublishVo;
                        result.itemTmplSkuVoList[0].specAttributes = orginData;
                        _this.props.updateItemTmplAction(result);
                        _this.forceUpdate();
                        return;
                    }
                }
                //未匹配到 specAttribute的aid 新增
                // 此处调用redux回调
                result = _this.props.itemTmplPublishVo;
                type == 'select' ? unit.vid = value : unit.desc = value;
                if (orginData) {
                    orginData.push(unit);
                } else {
                    orginData = [unit];
                }
                result = _this.props.itemTmplPublishVo;
                result.itemTmplSkuVoList[0].specAttributes = orginData;
                _this.props.updateItemTmplAction(result);
                _this.forceUpdate();
                return;
            }
            // 全量数据
            var sourceData = _this.props.itemTmplPublishVo.itemTmplSkuVoList;
            // 从全量的数据中，找到匹配的sku

            for (var i = 0; i < sourceData.length; ++i) {
                if (_this.matchAttr(attrObj.attributes, sourceData[i].attributes)) {
                    // 循环 匹配specAttribute的aid 更新
                    for (var j = 0; j < (sourceData[i].specAttributes || []).length; ++j) {
                        if (sourceData[i].specAttributes[j].aid == aid) {
                            if (type == 'select') {
                                if (sourceData[i].specAttributes[j]) {
                                    sourceData[i].specAttributes[j].vid = value;
                                } else {
                                    //  ???
                                    // unit.vid = value;
                                    // sourceData[i].specAttributes = [unit];
                                }
                            }
                            if (type == 'input') {
                                if (sourceData[i].specAttributes[j]) {
                                    sourceData[i].specAttributes[j].desc = value;
                                } else {
                                    //  ???
                                    // unit.desc = value;
                                    // sourceData[i].specAttributes = [unit];
                                }
                            }
                            // 此处调用redux回调
                            result = _this.props.itemTmplPublishVo;
                            result.itemTmplSkuVoList = sourceData;
                            _this.props.updateItemTmplAction(result);
                            _this.forceUpdate();
                            return;
                        }
                    }
                    //未匹配到 specAttribute的aid 新增
                    type == 'select' ? unit.vid = value : unit.desc = value;
                    sourceData[i].specAttributes ? sourceData[i].specAttributes.push(unit) : sourceData[i].specAttributes = [unit];
                    // 此处调用redux回调
                    result = _this.props.itemTmplPublishVo;
                    result.itemTmplSkuVoList = sourceData;
                    _this.props.updateItemTmplAction(result);
                    _this.forceUpdate();
                    return;
                }
            }
        };

        _this.state = {
            attrbuteData: []
        };
        return _this;
    }

    (0, _createClass3.default)(ReleaseSpecification, [{
        key: 'matchAttr',

        //比较两个属性值是否为同一商品
        value: function matchAttr(attrA, attrB) {
            var attrAArr = [];
            for (var i = 0; i < (attrA || []).length; ++i) {
                attrAArr.push(attrA[i].aid + ':' + attrA[i].vid);
            }
            var attrBArr = [];
            for (var j = 0; j < (attrB || []).length; ++j) {
                attrBArr.push(attrB[j].aid + ':' + attrB[j].vid);
            }
            if (attrAArr && attrBArr) {
                var strA = (0, _stringify2.default)(attrAArr.sort());
                var strB = (0, _stringify2.default)(attrBArr.sort());
                return strA == strB;
            } else {
                return false;
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log('mytest--------------------willReceiveProps---------------------');
            if ((!this.props.itemTmplPublishVo || !this.props.itemTmplPublishVo.cid) && nextProps.itemTmplPublishVo && nextProps.itemTmplPublishVo.cid || this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.cid && nextProps.itemTmplPublishVo && nextProps.itemTmplPublishVo.cid && nextProps.itemTmplPublishVo.cid != this.props.itemTmplPublishVo.cid) {
                console.log('mytest--------------------willReceiveProps,cid changed---------------------');
                if (this.props.type == 1) {
                    this.props.getAttributeByCategoryIdForPlatform(this.props.itemTmplPublishVo.cid);
                } else if (this.props.type == 2 || this.props.type == 3) {
                    this.props.getAttributeByCategoryIdForShop(this.props.itemTmplPublishVo.cid);
                }
            }

            if (nextProps.attributeData && nextProps.attributeData.data && nextProps.attributeData.data.data) {
                var attributeArr = JSON.parse((0, _stringify2.default)(nextProps.attributeData.data.data || []));
                console.log(this.props.editData.attrbuteData, attributeArr);
                if (this.props.editData.attrbuteData && this.props.editData.attrbuteData.length > 0) {
                    this.props.editData.attrbuteData.map(function (item, index) {
                        var flag = false;
                        attributeArr.map(function (_item, index) {
                            if (item.baseAttrId && _item.baseAttrId && item.baseAttrId == _item.baseAttrId || item.attrId == _item.attrId) {
                                flag = true;
                                attributeArr[index].attrId = item.attrId;
                                item.platformCategoryAttributeValues.map(function (attrItem) {
                                    var status = false;
                                    _item.platformCategoryAttributeValues.map(function (_attrItem, _index) {
                                        if (attrItem.baseAttrValueId && _attrItem.baseAttrValueId && attrItem.baseAttrValueId == _attrItem.baseAttrValueId || attrItem.attrValueId == _attrItem.attrValueId) {
                                            status = true;
                                            attributeArr[index].platformCategoryAttributeValues[_index].attrValueId = attrItem.attrValueId;
                                        }
                                    });
                                    if (!status) {
                                        attributeArr[index].platformCategoryAttributeValues.push(attrItem);
                                    }
                                });
                            }
                        });
                        if (!flag) {
                            attributeArr.push(item);
                        }
                    });
                }

                if (this.props.editData.saleData && this.props.editData.saleData.length > 0) {
                    this.props.editData.saleData.map(function (item, index) {
                        var flag = false;
                        attributeArr.map(function (_item, index) {
                            if (item.baseAttrId && _item.baseAttrId && item.baseAttrId == _item.baseAttrId || item.attrId == _item.attrId) {
                                flag = true;
                                attributeArr[index].attrId = item.attrId;
                                item.platformCategoryAttributeValues.map(function (attrItem) {
                                    var status = false;
                                    _item.platformCategoryAttributeValues.map(function (_attrItem, _index) {
                                        if (attrItem.baseAttrValueId && _attrItem.baseAttrValueId && attrItem.baseAttrValueId == _attrItem.baseAttrValueId || attrItem.attrValueId == _attrItem.attrValueId) {
                                            status = true;
                                            attributeArr[index].platformCategoryAttributeValues[_index].attrValueId = attrItem.attrValueId;
                                        }
                                    });
                                    if (!status) {
                                        attributeArr[index].platformCategoryAttributeValues.push(attrItem);
                                    }
                                });
                            }
                        });
                        if (!flag) {
                            attributeArr.push(item);
                        }
                    });
                }

                this.setState({
                    attrbuteData: attributeArr
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('mytestitemTmplPublishVoitemTmplPublishVoitemTmplPublishVo:', this.props.itemTmplPublishVo);
            //const attrbuteData = this.props.attributeData.data && this.props.attributeData.data.data;
            var attrbuteData = this.state.attrbuteData;

            var skuList = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.itemTmplSkuVoList && this.props.itemTmplPublishVo.itemTmplSkuVoList.length > 0 ? this.props.itemTmplPublishVo.itemTmplSkuVoList : [{ attributes: [], specAttributes: [] }];
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _collapse2.default,
                    { accordion: true },
                    this.props.itemTmplPublishVo.cid && skuList.map(function (sku) {
                        if (sku && sku.skuStatus == 1) {
                            return _react2.default.createElement(
                                Panel,
                                { header: sku && sku.attributes && sku.attributes.reduce(function (result, sku) {
                                        return result += ' ' + sku.vName;
                                    }, '') },
                                attrbuteData && attrbuteData.map && attrbuteData.map(function (attr, index) {
                                    return _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'span',
                                            null,
                                            attr.attrName || ' ',
                                            ':'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: _style2.default.selectDiv },
                                            _react2.default.createElement(
                                                _select2.default,
                                                {
                                                    onChange: function onChange(e, aid, attrObj, type) {
                                                        _this2.onChangeAttr(e, attr.attrId, sku, 'select');
                                                    },
                                                    defaultValue: '',
                                                    style: { width: 120, marginRight: '10px' },
                                                    value: _this2.getDefaultValue(sku.attributes && sku.attributes.map(function (i) {
                                                        return String(i.vid);
                                                    }) || [], (attr.platformCategoryAttributeValues || []).map(function (i) {
                                                        return String(i.attrValueId);
                                                    }) || [], attr, sku.specAttributes),
                                                    disabled: _this2.shouldBeDisable(sku.attributes && sku.attributes.map(function (i) {
                                                        return String(i.vid);
                                                    }) || [], (attr.platformCategoryAttributeValues || []).map(function (i) {
                                                        return String(i.attrValueId);
                                                    }) || [])
                                                },
                                                _react2.default.createElement(
                                                    Option,
                                                    { value: '' },
                                                    '\u8BF7\u9009\u62E9'
                                                ),
                                                (attr.platformCategoryAttributeValues || []).map(function (option) {
                                                    return _react2.default.createElement(
                                                        Option,
                                                        { value: String(option.attrValueId) },
                                                        option.attrValueName
                                                    );
                                                })
                                            ),
                                            _react2.default.createElement(_input2.default, {
                                                value: _this2.getDefaultValue4Input(attr, sku.specAttributes, attrbuteData),
                                                style: { width: 500 },
                                                onChange: function onChange(e) {
                                                    _this2.onChangeAttr(e, attr.attrId, sku, 'input');
                                                },
                                                disabled: _this2.shouldBeDisable(sku.attributes && sku.attributes.map(function (i) {
                                                    return String(i.vid);
                                                }) || [], (attr.platformCategoryAttributeValues || []).map(function (i) {
                                                    return String(i.attrValueId);
                                                }) || [])
                                            })
                                        )
                                    );
                                })
                            );
                        }
                    })
                )
            );
        }
    }]);
    return ReleaseSpecification;
}(_react.Component);

exports.default = ReleaseSpecification;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseSpecification.js.map