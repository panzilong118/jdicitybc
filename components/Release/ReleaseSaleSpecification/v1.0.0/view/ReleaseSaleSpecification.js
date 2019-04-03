'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _class, _temp, _initialiseProps; /**
                                      * @author chenyanhua
                                      * @date 2018-07-26
                                      * @file 销售规格组件
                                      * 逻辑：父组件传递 数据源以及修改数据源的方法
                                      * 当ifSave为false时，表示商品处于发布后状态，那么有数据回显（checked=true）的行可编辑，且必须至少有一个选中项
                                      * 其他行不可编辑
                                      */


require('jdcloudui/lib/message/style');

require('jdcloudui/lib/table/style');

require('jdcloudui/lib/checkbox/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getNewItemTmplSkuVoList = require('./getNewDataFun/getNewItemTmplSkuVoList');

var _getNewItemTmplSkuVoList2 = _interopRequireDefault(_getNewItemTmplSkuVoList);

var _getNewItemSkuPicVoList = require('./getNewDataFun/getNewItemSkuPicVoList');

var _getNewItemSkuPicVoList2 = _interopRequireDefault(_getNewItemSkuPicVoList);

var _getNewPreSkuPriceVoList = require('./getNewDataFun/getNewPreSkuPriceVoList');

var _getNewPreSkuPriceVoList2 = _interopRequireDefault(_getNewPreSkuPriceVoList);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReleaseSaleSpecification = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ReleaseSaleSpecification, _Component);

  function ReleaseSaleSpecification(props) {
    (0, _classCallCheck3.default)(this, ReleaseSaleSpecification);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSaleSpecification.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSaleSpecification)).call(this, props));

    _initialiseProps.call(_this);

    var stateData = _this.getInitStateData(props);
    var db_checked = _this.getDBChecked(props);
    _this.state = (0, _extends3.default)({}, stateData, db_checked);
    return _this;
  }

  (0, _createClass3.default)(ReleaseSaleSpecification, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var stateData = this.getInitStateData(nextProps);
      var db_checked = this.getDBChecked(nextProps);

      //编辑时保存回显的销售规格属性
      if (!this.props.editData.saleData && this.props.edit && this.props.ifValid && nextProps.saleAttributeData && nextProps.saleAttributeData.length > 0) {
        var saleData = [];
        var saleAttributeData = JSON.parse((0, _stringify2.default)(nextProps.saleAttributeData || []));
        saleAttributeData.map(function (item) {
          if (item.platformCategoryAttributeValues) {
            item.platformCategoryAttributeValues = item.platformCategoryAttributeValues.filter(function (attrValueArr) {
              return attrValueArr.checked;
            });
            if (item.platformCategoryAttributeValues.length > 0) {
              saleData.push(item);
            }
          }
        });
        this.props.setEditData('saleData', saleData);
      }

      //编辑时保存回显的规格参数
      if (!this.props.editData.attrbuteData && this.props.edit && this.props.ifValid && nextProps.attributeData && nextProps.attributeData.data && nextProps.attributeData.data.data) {
        var attrbuteData = [];
        var specAttributeData = JSON.parse((0, _stringify2.default)(nextProps.attributeData.data.data));
        var specAttributes = nextProps.itemTmplPublishVo.itemTmplSkuVoList && nextProps.itemTmplPublishVo.itemTmplSkuVoList[0] && nextProps.itemTmplPublishVo.itemTmplSkuVoList[0].specAttributes || [];
        specAttributeData.map(function (item) {
          var flag = false;
          specAttributes.map(function (_item) {
            if (item.attrId == _item.aid) {
              flag = true;
            }
          });
          if (flag) {
            attrbuteData.push(item);
          }
        });
        this.props.setEditData('attrbuteData', attrbuteData);
      }
      this.setState((0, _extends3.default)({}, stateData, db_checked));
    }

    /**
     * 数据库中已选中的数据
     * @return 返回格式 db_checked=['attrId_attrValueId']，
     * 用于在发布回显编辑的时候，已选数据置灰
     */


    // 设置state值

    /**
     * 获取已选的attrId
     * 最多只能选择三种属性信息
     */

  }, {
    key: 'getDisabledAttrIds',


    /**
     * 提供给ifSave为false时使用：需设置不可编辑项目
     * 获取需要设置disabled的attrId数据
     * 剩余的attrId：checked=true时，disabled=true,否则disabld=false
     */
    value: function getDisabledAttrIds(saleAttributeData) {
      var disabledAttrIds = [];
      saleAttributeData.forEach(function (attrValueArr) {
        var checked = false;
        // 判断是否有checked=true的值
        attrValueArr.platformCategoryAttributeValues.forEach(function (attrValueItem) {
          if (attrValueItem.checked) {
            checked = true;
            return false;
          }
        });

        // 该条数据中没有选中的值，则该条数据应该全部 disabled = true
        if (!checked) {
          disabledAttrIds.push(attrValueArr.attrId);
        }
      });

      return disabledAttrIds;
    }

    /**
     * 将变化的数据保存到数据源里
     * 根据attrId，更新 销售规格 数据源 checked属性
     * 当ifSave = false时，可操作的属性行（有数据回显），必须至少保留一个属性值
     * e.target.value = {
     *  "attrValueId":13223,
     *  "attrId":10971,
     *  "attrValueName":"R16",
     *  "status":1,
     *  "checked": true/false
     * }
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var columns = [{
        title: '属性名称',
        dataIndex: 'attrName',
        key: 'attrName',
        width: 200
      }, {
        title: '属性值',
        key: 'attrValue',
        render: function render(text, record) {
          return record.platformCategoryAttributeValues.map(function (item) {
            var _state = _this2.state,
                _state$disabledAttrId = _state.disabledAttrIds,
                disabledAttrIds = _state$disabledAttrId === undefined ? [] : _state$disabledAttrId,
                _state$ifSave = _state.ifSave,
                ifSave = _state$ifSave === undefined ? true : _state$ifSave;

            var disabled = false;
            if (!ifSave) {
              if (disabledAttrIds.indexOf(record.attrId) >= 0) {
                disabled = true;
              } else if (_this2.state.db_checked.indexOf(record.attrId + '_' + item.attrValueId) >= 0) {
                disabled = true;
              }
            }
            return _react2.default.createElement(
              _checkbox2.default,
              { value: item, onChange: _this2.onChange, checked: item.checked, disabled: disabled },
              item.attrValueName
            );
          });
        }
      }];
      return [_react2.default.createElement(
        'h3',
        { className: 'h3-title' },
        '\u9500\u552E\u89C4\u683C'
      ), _react2.default.createElement(
        'div',
        { className: 'table-bordered' },
        _react2.default.createElement(_table2.default, {
          columns: columns,
          dataSource: this.state.saleAttributeData,
          pagination: false
        })
      )];
    }
  }]);
  return ReleaseSaleSpecification;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.componentDidMount = function () {
    if (_this3.props.edit && _this3.props.ifValid && _this3.props.itemTmplPublishVo && _this3.props.itemTmplPublishVo.cid) {
      console.log('mytest didmount,has cid');
      if (_this3.props.type == 1) {
        _this3.props.getAttributeByCategoryIdForPlatform(_this3.props.itemTmplPublishVo.cid);
      } else if (_this3.props.type == 2 || _this3.props.type == 3) {
        _this3.props.getAttributeByCategoryIdForShop(_this3.props.itemTmplPublishVo.cid);
      }
    }
  };

  this.getDBChecked = function (props) {
    var _props$itemTmplPublis = props.itemTmplPublishVo.checkedAttributes,
        checkedAttributes = _props$itemTmplPublis === undefined ? [] : _props$itemTmplPublis;

    // 数据库中保存的已选中的数据

    var db_checked = [];
    checkedAttributes.forEach(function (attrId_item) {
      (attrId_item.attrValueIds || []).forEach(function (attrValueId) {
        db_checked.push(attrId_item.attrId + '_' + attrValueId);
      });
    });
    return {
      db_checked: db_checked
    };
  };

  this.getInitStateData = function (props) {
    var ds = props.saleAttributeData || [];
    var saleAttributeData = JSON.parse((0, _stringify2.default)(ds));
    if (_this3.props.editData.saleData) {
      console.log(_this3.props.editData.saleData, saleAttributeData);
      _this3.props.editData.saleData.map(function (item) {
        var status = false;
        ds.map(function (_item, index) {
          if (item.baseAttrId && _item.baseAttrId && item.baseAttrId == _item.baseAttrId || item.attrId == _item.attrId) {
            status = true;
            saleAttributeData[index].attrId = item.attrId;
            item.platformCategoryAttributeValues.map(function (attrItem) {
              var flag = false;
              _item.platformCategoryAttributeValues.map(function (_attrItem, _index) {
                if (attrItem.baseAttrValueId && _attrItem.baseAttrValueId && attrItem.baseAttrValueId == _attrItem.baseAttrValueId || attrItem.attrValueId == _attrItem.attrValueId) {
                  flag = true;
                  saleAttributeData[index].platformCategoryAttributeValues[_index].attrValueId = attrItem.attrValueId;
                  if (!saleAttributeData[index].platformCategoryAttributeValues[_index].checked) {
                    saleAttributeData[index].platformCategoryAttributeValues[_index].checked = true;
                  }
                }
              });
              if (!flag) {
                saleAttributeData[index].platformCategoryAttributeValues.push(attrItem);
              }
            });
          }
        });
        if (!status) {
          saleAttributeData.push(item);
        }
      });
    }
    var stateData = {
      ifSave: props.ifSave, // 默认发布前，有
      saleAttributeData: saleAttributeData // 销售规格 数据源
    };

    // false时，需要设置不可选中项目
    if (!props.ifSave) {
      stateData.disabledAttrIds = _this3.getDisabledAttrIds(saleAttributeData);
    }

    // 已选的销售规格id
    stateData.checkedAttrIds = _this3.getCheckedAttrIds(saleAttributeData);

    return stateData;
  };

  this.getCheckedAttrIds = function (saleAttributeData) {
    var checkedAttrIds = [];
    saleAttributeData.forEach(function (attrValueArr) {
      var checked = false;
      attrValueArr.platformCategoryAttributeValues.forEach(function (attrValueItem) {
        if (attrValueItem.checked) {
          checked = true;
          return;
        }
      });
      if (checked) {
        checkedAttrIds.push(attrValueArr.attrId);
      }
    });
    return checkedAttrIds;
  };

  this.onChange = function (e) {
    // 数据对象
    var value = e.target.value;
    var checked = e.target.checked;

    var checkedAttrIds = JSON.parse((0, _stringify2.default)(_this3.state.checkedAttrIds));

    // 当要选中销售规格属性值时，最多只能选择三种属性信息
    if (checked && checkedAttrIds.indexOf(value.attrId) < 0) {
      if (checkedAttrIds.length >= 3) {
        _message3.default.error("只能选择三种属性信息");
        return;
      } else {
        checkedAttrIds.push(value.attrId);
        _this3.setState({
          checkedAttrIds: checkedAttrIds
        });
      }
    }

    var saleAttributeData = JSON.parse((0, _stringify2.default)(_this3.state.saleAttributeData));

    saleAttributeData.forEach(function (item) {
      if (item.attrId == value.attrId) {
        // 操作的哪行属性

        // ifSave为false时，可操作的属性行，最少保留一个属性
        if (!_this3.state.ifSave && !checked) {
          var checkedAttr = item.platformCategoryAttributeValues.filter(function (checkboxItem) {
            return checkboxItem.checked == true;
          });
          if (checkedAttr.length <= 1) {
            _message3.default.error("至少要保留一种属性信息");
            return;
          }
        }

        item.platformCategoryAttributeValues.forEach(function (checkboxItem) {
          if (checkboxItem.attrValueId == value.attrValueId) {
            checkboxItem.checked = checked;
          }
        });
      }
    });

    // 更新销售规格数据
    _this3.props.updateSaleAttributeAction(saleAttributeData);

    var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));
    var old_itemTmplSkuVoList = JSON.parse((0, _stringify2.default)(itemTmplPublishVo.itemTmplSkuVoList));

    // 新的销售信息表格数据

    var new_itemTmplPublishVo = (0, _getNewItemTmplSkuVoList2.default)(old_itemTmplSkuVoList, saleAttributeData);
    itemTmplPublishVo.itemTmplSkuVoList = new_itemTmplPublishVo;

    //更新图片数据
    var old_itemSkuPicVo = _this3.props.itemTmplPublishVo.itemSkuPicVoList;
    // 新的图片数据
    var new_itemSkuPicVo = (0, _getNewItemSkuPicVoList2.default)(old_itemSkuPicVo, saleAttributeData);
    itemTmplPublishVo.itemSkuPicVoList = new_itemSkuPicVo;

    // 店铺和供应商才有第六个tab
    if (_this3.props.type == '2' || _this3.props.type == '3') {
      //更新供货信息或者价格及库存数据
      var old_preSkuPriceVoList = _this3.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList;
      // 新的供货信息或者价格及库存数据
      var new_preSkuPriceVoList = (0, _getNewPreSkuPriceVoList2.default)(old_preSkuPriceVoList, saleAttributeData);
      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList = new_preSkuPriceVoList;
    }

    // 更新总数据源
    _this3.props.updateItemTmplAction(itemTmplPublishVo);
  };
}, _temp);
exports.default = ReleaseSaleSpecification;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseSaleSpecification.js.map