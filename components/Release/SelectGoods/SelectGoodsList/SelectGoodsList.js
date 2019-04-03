'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

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

var _dec, _class, _class2, _temp; /**
                                   * Created by huangxiao3 on 2017/2/20.
                                   */


require('jdcloudui/lib/table/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/message/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _redux2 = require('../SelectGoodsSearch/redux');

var _redux3 = require('./redux');

var _BaseComponent2 = require('../../Common/BaseComponent');

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

require('./styles/css.css');

var _functionPermissions = require('jdcloudecc/reducer/functionPermissions');

var _components = require('jdcloudecc/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectRow = [];
var SelectGoodsList = (_dec = (0, _reactRedux.connect)(function (state) {
  return { SelectGoodsSearch: state.selectGoodsSearch, InsertShopSupplyItemInfo: state.insertShopSupplyItemInfo, funcPermissions: state.funcPermissions };
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ selectGoodsSearch: _redux2.selectGoodsSearch, insertShopSupplyItemInfo: _redux3.insertShopSupplyItemInfo, saveFormData: _redux2.saveFormData, getFuncPermission: _functionPermissions.getFuncPermission }, dispatch);
}), _dec(_class = (_temp = _class2 = function (_BaseComponent) {
  (0, _inherits3.default)(SelectGoodsList, _BaseComponent);

  function SelectGoodsList(props, context) {
    (0, _classCallCheck3.default)(this, SelectGoodsList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectGoodsList.__proto__ || (0, _getPrototypeOf2.default)(SelectGoodsList)).call(this, props, context));

    _this.supplyShopId = null;

    _this.showConfirm = _this.showConfirm.bind(_this);
    return _this;
  }
  //校验


  (0, _createClass3.default)(SelectGoodsList, [{
    key: 'componentWillMount',


    //获取初始列表数据
    value: function componentWillMount() {
      var initialValue = { platformId: this.platformId, userId: 1, pageSize: this.props.pageSize, pageNum: 1 };
      this.props.saveFormData(initialValue);
      this.props.selectGoodsSearch(initialValue).then(function (result) {
        console.log('SearchData success');
      }, function (error) {
        console.log('SearchData fail');
      });
      this.props.getFuncPermission();
    }

    //生成表头

  }, {
    key: 'createColumns',
    value: function createColumns() {
      var _this2 = this;

      var columns = [{
        title: '商品名称',
        dataIndex: 'name',
        key: 'name',
        width: '60%'
      }, {
        title: '商品分类',
        dataIndex: 'categorys',
        key: 'categorys',
        width: '30%'
      }, {
        title: '操作',
        key: 'action',
        width: '10%',
        render: function render(record) {
          return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              _components.FuncPermission,
              { codes: _this2.codesResponse, code: 'submit' },
              _react2.default.createElement(
                'a',
                { onClick: function onClick() {
                    _this2.onInsert(record);
                  } },
                '\u63D0\u4EA4'
              )
            )
          );
        }
      }];
      return columns;
    }

    //生成列表数据

  }, {
    key: 'createData',
    value: function createData() {
      var _this3 = this;

      var dataSource = new Array();
      this.props.SelectGoodsSearch.data && this.props.SelectGoodsSearch.data.data && this.props.SelectGoodsSearch.data.data.result.map(function (good) {

        //拼装类目
        var categorys = (good.firstLevName === null ? '' : good.firstLevName) + (good.sendLevName === null ? '' : '--' + good.sendLevName) + (good.thirdLevName === null ? '' : '--' + good.thirdLevName) + (good.fourthLevName === null ? '' : '--' + good.fourthLevName);

        //生成数据
        var data = {
          key: good.itemId,
          name: _react2.default.createElement(
            'div',
            { className: 'f-pr pl-60' },
            _react2.default.createElement('img', { src: good.pictureUrl, width: '60', height: '60', className: 'f-fl imgBox' }),
            _react2.default.createElement(
              'span',
              { className: 'f-db' },
              good.itemName
            )
          ),
          categorys: categorys,
          supplyShopId: good.supplyShopId
        };
        dataSource.push(data);
        _this3.supplyShopId = good.supplyShopId;
      });
      return dataSource;
    }

    //单个提交

  }, {
    key: 'onInsert',
    value: function onInsert(record) {
      var _this4 = this;

      debugger;
      var itemIds = new Array();
      itemIds.push(record.key);
      this.props.insertShopSupplyItemInfo({
        platformId: this.platformId,
        supplySellerId: 4,
        itemIds: itemIds,
        supplyShopId: record.supplyShopId
      }).then(function (result) {
        _this4.showConfirm();
      }, function (error) {
        debugger;_message3.default.warning(result.msg);_this4.refreshList();
      });
    }

    //批量提交

  }, {
    key: 'onInsertAll',
    value: function onInsertAll() {
      var _this5 = this;

      if (selectRow.length <= 0) {
        _message3.default.info('请选择商品！');
        return;
      }
      debugger;
      this.props.insertShopSupplyItemInfo({
        platformId: this.platformId,
        supplySellerId: 4,
        itemIds: selectRow,
        supplyShopId: this.supplyShopId
      }).then(function (result) {
        _this5.showConfirm();
      }, function (error) {
        _message3.default.info(result.msg);_this5.refreshList();
      });
    }
  }, {
    key: 'showConfirm',
    value: function showConfirm() {
      var tmp = this;
      _modal2.default.confirm({
        title: '操作提示',
        content: '您的申请已记录，是否提交供货信息？',
        okText: '继续选择',
        cancelText: '确定',
        onOk: function onOk() {
          //刷新页面
          tmp.refreshList();
        },
        onCancel: function onCancel() {
          //跳转商品信息管理页
          window.location = '/item-shop-view/iteminfo';
        }
      });
    }

    //分页查询

  }, {
    key: 'onChangePage',
    value: function onChangePage(pageNumber) {
      debugger;
      console.log("page change:", pageNumber);
      var searchData = this.props.SelectGoodsSearch.searchdata.searchdata;
      var pageChange = (0, _extends3.default)({}, searchData, { pageNum: pageNumber });
      this.props.selectGoodsSearch(pageChange).then(function (result) {
        console.log('PageChange SearchData success');
      }, function (error) {
        console.log('PageChange SearchData fail');
      });
    }

    //生成分页对象

  }, {
    key: 'createPagination',
    value: function createPagination() {
      var _this6 = this;

      var total = this.props.SelectGoodsSearch.data && this.props.SelectGoodsSearch.data.data && this.props.SelectGoodsSearch.data.data.totalCount;
      var current = this.props.SelectGoodsSearch.data && this.props.SelectGoodsSearch.data.data && this.props.SelectGoodsSearch.data.data.pageNum;

      return {
        showQuickJumper: true,
        total: total,
        current: current,
        pageSize: this.props.pageSize,
        onChange: function onChange(pageNumber) {
          return _this6.onChangePage(pageNumber);
        }
      };
    }

    //生成选中事件对象

  }, {
    key: 'createRowSelection',
    value: function createRowSelection() {
      var _this7 = this;

      return {
        onChange: function onChange(selectedRowKeys, selectedRows) {
          return _this7.onChangeRow(selectedRowKeys, selectedRows);
        },
        onSelect: function onSelect(record, selected, selectedRows) {
          return _this7.onSelectRow(record, selected, selectedRows);
        },
        onSelectAll: function onSelectAll(selected, selectedRows, changeRows) {
          return _this7.onSelectAllRow(selected, selectedRows, changeRows);
        } };
    }

    //checkBox响应事件

  }, {
    key: 'onChangeRow',
    value: function onChangeRow(selectedRowKeys, selectedRows) {
      selectRow = selectedRowKeys;
    }
  }, {
    key: 'onSelectRow',
    value: function onSelectRow(record, selected, selectedRows) {
      console.log(record, selected, selectedRows);
    }
  }, {
    key: 'onSelectAllRow',
    value: function onSelectAllRow(selected, selectedRows, changeRows) {
      console.log(selected, selectedRows, changeRows);
    }

    //刷新页面(获取搜索参数，重新查询)

  }, {
    key: 'refreshList',
    value: function refreshList() {
      var searchValue = this.props.SelectGoodsSearch.searchdata.searchdata;
      this.props.selectGoodsSearch(searchValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      //菜单权限数据处理
      var permissionData = this.props.funcPermissions.data;
      if (permissionData && permissionData.code != 0) {
        _message3.default.warning("菜单权限获取失败！");
      }
      if (permissionData && permissionData.code == 0) {
        this.codesResponse = permissionData.data;
        this.codes = this.codesResponse && this.codesResponse.join(",");
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'tbl-top-action' },
          _react2.default.createElement(
            _components.FuncPermission,
            { codes: this.codesResponse, code: 'batchSubmit' },
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this8.onInsertAll();
                } },
              '\u63D0\u4EA4'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tableBorderSelect' },
          _react2.default.createElement(_table2.default, {
            rowSelection: true && this.createRowSelection(),
            columns: true && this.createColumns(),
            dataSource: true && this.createData(),
            pagination: true && this.createPagination(),
            loading: this.props.SelectGoodsSearch.loading
          })
        )
      );
    }
  }]);
  return SelectGoodsList;
}(_BaseComponent3.default), _class2.propTypes = {
  SelectGoodsSearch: _propTypes2.default.object.isRequired,
  InsertShopSupplyItemInfo: _propTypes2.default.object.isRequired,
  selectGoodsSearch: _propTypes2.default.func.isRequired,
  insertShopSupplyItemInfo: _propTypes2.default.func.isRequired,
  saveFormData: _propTypes2.default.func.isRequired
}, _temp)) || _class);
exports.default = SelectGoodsList;
module.exports = exports['default'];
//# sourceMappingURL=SelectGoodsList.js.map