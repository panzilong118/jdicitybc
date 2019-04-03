'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _select = require('jdcloudui/lib/select');

var _select2 = _interopRequireDefault(_select);

var _inputNumber = require('jdcloudui/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _popover = require('jdcloudui/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _class, _temp, _initialiseProps; /**
                                      * @author chenyanhua
                                      * @date 2018-07-26
                                      * @file 销售信息组件
                                      * 逻辑：根据销售规格选中的属性合成该列表数据
                                      * 该页面涉及到用户自定义列
                                      */


require('jdcloudui/lib/select/style');

require('jdcloudui/lib/input-number/style');

require('jdcloudui/lib/popover/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/table/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/radio/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('jdcloudecc/components');

var _view = require('../../../UploadImage/v1.0.0/view');

var _view2 = _interopRequireDefault(_view);

var _view3 = require('../../../UploadFile/v1.0.0/view');

var _view4 = _interopRequireDefault(_view3);

require('./style/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = _radio2.default.Group;

var ReleaseSaleInfo = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ReleaseSaleInfo, _Component);

  function ReleaseSaleInfo(props) {
    (0, _classCallCheck3.default)(this, ReleaseSaleInfo);

    // 默认表格
    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseSaleInfo.__proto__ || (0, _getPrototypeOf2.default)(ReleaseSaleInfo)).call(this, props));

    _initialiseProps.call(_this);

    _this.defaultDataSource = [{
      "key": 0,
      "attributes": null, //销售属性[{"aName":"颜值","aid":"17504","desc":"","vName":"10","vid":"33066"}]
      "skuStatus": 1 //停用启用操作(必选，默认启用) sku 状态,1:启用;0:停用
    }];
    var columns = _this.initColumns(props);
    var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(props.itemTmplPublishVo || {})); // 总数据源
    var dataSource = JSON.parse((0, _stringify2.default)(itemTmplPublishVo.itemTmplSkuVoList || []));
    dataSource = _this.setDataSourceKey(dataSource);
    _this.state = {
      skuUnitDS: props.skuUnitDS.data || [], // 单位数据源
      wholeColumnData: {}, // 存储当前对应列的全部设置input框数据，例如 { barCode: 54, field: value }
      columns: columns, // 表格列
      dataSource: dataSource.length > 0 ? dataSource : _this.defaultDataSource, // 表格数据
      selectedRowKeys: [] // 表格选中行
    };
    _this.cid = itemTmplPublishVo.cid || undefined;
    return _this;
  }

  (0, _createClass3.default)(ReleaseSaleInfo, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // 需要展示单位列 && 平台分类存在且已经变更，重新加载单位数据源
      var new_cid = nextProps.itemTmplPublishVo && nextProps.itemTmplPublishVo.cid || undefined;
      var type = this.props.type || undefined;
      if (nextProps.skuUnit && new_cid && this.cid != new_cid) {
        this.cid = new_cid;
        nextProps.querySkuUnit({ cid: nextProps.itemTmplPublishVo.cid }, type);
      }

      var skuUnitData = nextProps.skuUnitDS.data || [];
      if (skuUnitData.length > 0) {
        if (!this.props.editData.skuUnits && this.props.edit && this.props.ifValid) {
          var skuUnits = [];
          var itemTmplSkuVoList = nextProps.itemTmplPublishVo && nextProps.itemTmplPublishVo.itemTmplSkuVoList || [];
          itemTmplSkuVoList.map(function (item) {
            var skuUnitsStr = skuUnits.join('-');
            if (skuUnitsStr.indexOf(item.skuUnit) === -1) {
              skuUnits.push(item.skuUnit);
            }
          });
          this.props.setEditData('skuUnits', skuUnits);
        }

        if (this.props.editData.skuUnits) {
          var _skuUnits = [];
          var skuUnitsStr = skuUnitData.join('-');
          this.props.editData.skuUnits.map(function (item) {
            if (skuUnitsStr.indexOf(item) === -1) {
              _skuUnits.push(item);
            }
          });
          skuUnitData = [].concat((0, _toConsumableArray3.default)(nextProps.skuUnitDS.data), _skuUnits);
        }
      }
      console.log('11111111111111111111111111111111', nextProps, skuUnitData);
      // 表格数据
      var columns = this.initColumns(nextProps);
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(nextProps.itemTmplPublishVo || {})); // 总数据源
      var dataSource = JSON.parse((0, _stringify2.default)(itemTmplPublishVo.itemTmplSkuVoList || []));
      dataSource = this.setDataSourceKey(dataSource);
      this.setState({
        skuUnitDS: skuUnitData, // 单位数据源
        columns: columns,
        dataSource: dataSource.length > 0 ? dataSource : this.defaultDataSource
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 需要展示单位列 && 平台分类存在，加载单位数据源
      var cid = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.cid || undefined;
      var type = this.props.type || undefined;
      //this.props.skuUnit
      if (this.props.skuUnit && cid) {
        this.props.querySkuUnit({ cid: this.props.itemTmplPublishVo.cid }, type);
      }
    }
    // 为dataSource增加key

    // 表格checkbox变化，更新选中行数据源

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rowSelection = {
        selectedRowKeys: this.state.selectedRowKeys,
        onChange: this.onSelectChange
      };
      return [_react2.default.createElement(
        'h3',
        { className: 'h3-title' },
        '\u9500\u552E\u4FE1\u606F'
      ), _react2.default.createElement(
        'div',
        { className: 'btn-group-horizontal' },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.handleCheckAll },
          '\u5168\u9009'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.handleReverseCheck },
          '\u53CD\u9009'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: function onClick() {
              _this2.handleMultiEnablOrDisabled(0);
            } },
          '\u6279\u91CF\u505C\u7528'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: function onClick() {
              _this2.handleMultiEnablOrDisabled(1);
            } },
          '\u6279\u91CF\u542F\u7528'
        )
      ), _react2.default.createElement(
        'div',
        { className: 'table-bordered' },
        _react2.default.createElement(_table2.default, {
          rowSelection: rowSelection,
          columns: this.state.columns,
          dataSource: this.state.dataSource,
          pagination: false,
          scroll: { x: true, y: 400 }
        })
      )];
    }
    /**
     * 全选按钮事件，获取所有的key，更新state
     */

    /**
     * 反选按钮事件，反选 key，更新state
     */

    /**
     * 批量停用/启用按钮
     * @param skuStatus: 0-停用，1-启用
     */

    /**
     * td里 input text类型，更新总数据源
     * @param value 改变的值
     * @param field 改变的字段
     * @param key 当前操作数据行
     */


    /**
     * 列头部input text，设置按钮 click，更新总数据源
     * @param fields 改变的字段 [string]
     */


    /**
     * 列头部 input text，onChange时保存变化的数据到state中
     * @param e: input对象
     * @param field:改变的字段
     */


    // 删除附件

    /**
     * 根据config配置信息，确定表格由哪些列组成
     * @return columns
     */

  }]);
  return ReleaseSaleInfo;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setDataSourceKey = function (dataSource) {
    var new_dataSource = [];
    dataSource.forEach(function (item, index) {
      new_dataSource.push((0, _extends3.default)({}, item, {
        key: index
      }));
    });
    return new_dataSource;
  };

  this.onSelectChange = function (selectedRowKeys) {
    _this3.setState({ selectedRowKeys: selectedRowKeys });
  };

  this.handleCheckAll = function () {
    var dataSource = _this3.state.dataSource;

    var allRowKeys = [];
    for (var i = 0; i < dataSource.length; i++) {
      allRowKeys.push(i);
    }
    _this3.setState({
      selectedRowKeys: allRowKeys
    });
  };

  this.handleReverseCheck = function () {
    var _state = _this3.state,
        dataSource = _state.dataSource,
        selectedRowKeys = _state.selectedRowKeys;

    var allRowKeys = [];
    for (var i = 0; i < dataSource.length; i++) {
      allRowKeys.push(i);
    }
    var new_selectedRowKeys = allRowKeys.filter(function (v) {
      return !selectedRowKeys.includes(v);
    });
    _this3.setState({
      selectedRowKeys: new_selectedRowKeys
    });
  };

  this.handleMultiEnablOrDisabled = function (skuStatus) {
    var selectedRowKeys = _this3.state.selectedRowKeys;

    var dataSource = JSON.parse((0, _stringify2.default)(_this3.state.dataSource));
    selectedRowKeys.forEach(function (rowkeys) {
      dataSource[rowkeys].skuStatus = skuStatus;
    });

    // 更新总数据源
    var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));

    itemTmplPublishVo.itemTmplSkuVoList = dataSource;
    _this3.props.updateItemTmplAction(itemTmplPublishVo);
  };

  this.handleSingleDataChange = function (value, field, key) {
    var dataSource = JSON.parse((0, _stringify2.default)(_this3.state.dataSource));
    if (value == undefined) {
      value = null;
    }
    dataSource[key][field] = value;

    // 当是变换单位字段时，weight字段需要根据单位进行换算
    if (field == 'weightUnit') {
      var weight = dataSource[key]['weight'];
      if (typeof weight == 'number') {
        if (value == 'g') {
          dataSource[key]['weight'] = weight * 1000;
        } else if (value = 'kg') {
          dataSource[key]['weight'] = weight / 1000;
        }
      }
    }

    // 总数据源
    var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));
    // 更新总数据源：销售信息数据
    itemTmplPublishVo.itemTmplSkuVoList = dataSource;
    _this3.props.updateItemTmplAction(itemTmplPublishVo);
  };

  this.handleWholeColumnChange = function (fields) {
    var dataSource = JSON.parse((0, _stringify2.default)(_this3.state.dataSource));

    fields.forEach(function (field) {
      var value = _this3.state.wholeColumnData[field];
      // 数据存在
      if (typeof value == 'string' || typeof value == 'number') {
        // 更改所有数据
        dataSource.forEach(function (item) {
          // 处于启用状态的数据才可进行重新赋值，停用状态的数据不可赋值
          if (item.skuStatus == '1') {
            item[field] = value;
          }
        });
      }
    });

    // 更新总数据源
    var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this3.props.itemTmplPublishVo));
    itemTmplPublishVo.itemTmplSkuVoList = dataSource;
    _this3.props.updateItemTmplAction(itemTmplPublishVo);
  };

  this.storeWholeInputData = function (value, field) {
    _this3.setState(function (preState) {
      var wholeColumnData = JSON.parse((0, _stringify2.default)(preState.wholeColumnData));
      wholeColumnData[field] = value;
      return {
        wholeColumnData: wholeColumnData
      };
    });
  };

  this.onRemoveFile = function (file) {
    console.log('file-----', file);
  };

  this.initColumns = function (props) {

    var itemTmplSkuVoList = props.itemTmplPublishVo && props.itemTmplPublishVo.itemTmplSkuVoList || [];
    // 没有勾选销售规格属性
    var ifDefaultData = itemTmplSkuVoList.length == 1 && itemTmplSkuVoList[0].attributes == null ? true : false;

    var columns = [];

    // 如果选了销售规格，则展示商品信息列
    if (!ifDefaultData) {
      columns.push({
        title: '商品信息',
        dataIndex: 'attributes',
        key: 'attributes',
        width: 200,
        render: function render(data) {
          var context = '';
          (data || []).forEach(function (item) {
            context += item.vName + ' ';
          });
          return _react2.default.createElement(
            'span',
            null,
            context
          );
        }
      });
    }
    // 商品型号
    if (props.modelCode) {
      var content = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          '\u578B\u53F7'
        ),
        _react2.default.createElement(_input2.default, {
          className: 'inline-input',
          onChange: function onChange(e) {
            _this3.storeWholeInputData(e.target.value, "modelCode");
          }
        }),
        _react2.default.createElement(
          'a',
          {
            href: 'javascript:void(0)',
            className: 'a-link',
            onClick: function onClick() {
              _this3.handleWholeColumnChange(['modelCode']);
            }
          },
          '\u8BBE\u7F6E'
        )
      );
      var title = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'inline-label' },
          '\u578B\u53F7'
        ),
        _react2.default.createElement(
          _popover2.default,
          { content: content },
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)', className: 'a-link' },
            '\u8BBE\u7F6E\u5168\u90E8'
          )
        )
      );
      columns.push({
        title: title,
        dataIndex: 'modelCode',
        key: 'modelCode',
        width: 150,
        render: function render(data, record) {
          return _react2.default.createElement(_input2.default, {
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            onChange: function onChange(e) {
              _this3.handleSingleDataChange(e.target.value, "modelCode", record.key);
            }
          });
        }
      });
    }

    // 商品物料号
    if (props.productCode) {
      var _content = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          '\u7269\u6599\u53F7'
        ),
        _react2.default.createElement(_input2.default, {
          className: 'inline-input',
          onChange: function onChange(e) {
            _this3.storeWholeInputData(e.target.value, "productCode");
          }
        }),
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)',
            className: 'a-link',
            onClick: function onClick() {
              _this3.handleWholeColumnChange(['productCode']);
            }
          },
          '\u8BBE\u7F6E'
        )
      );
      var _title = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'inline-label' },
          '\u7269\u6599\u53F7'
        ),
        _react2.default.createElement(
          _popover2.default,
          { content: _content },
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)', className: 'a-link' },
            '\u8BBE\u7F6E\u5168\u90E8'
          )
        )
      );
      columns.push({
        title: _title,
        dataIndex: 'productCode',
        key: 'productCode',
        width: 150,
        render: function render(data, record) {
          return _react2.default.createElement(_input2.default, {
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            onChange: function onChange(e) {
              _this3.handleSingleDataChange(e.target.value, "productCode", record.key);
            }
          });
        }
      });
    }

    // 商品条形码
    if (props.modelCode) {
      var _content2 = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          '\u5546\u54C1\u6761\u7801'
        ),
        _react2.default.createElement(_input2.default, {
          className: 'inline-input',
          onChange: function onChange(e) {
            _this3.storeWholeInputData(e.target.value, "barCode");
          }
        }),
        _react2.default.createElement(
          'a',
          {
            href: 'javascript:void(0)',
            className: 'a-link',
            onClick: function onClick() {
              _this3.handleWholeColumnChange(['barCode']);
            }
          },
          '\u8BBE\u7F6E'
        )
      );
      var _title2 = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'inline-label' },
          '\u5546\u54C1\u6761\u7801'
        ),
        _react2.default.createElement(
          _popover2.default,
          { content: _content2 },
          _react2.default.createElement(
            'a',
            { href: 'javascript:void(0)', className: 'a-link' },
            '\u8BBE\u7F6E\u5168\u90E8'
          )
        )
      );
      columns.push({
        title: _title2,
        dataIndex: 'barCode',
        key: 'barCode',
        width: 150,
        render: function render(data, record) {
          return _react2.default.createElement(_input2.default, {
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            onChange: function onChange(e) {
              _this3.handleSingleDataChange(e.target.value, "barCode", record.key);
            }
          });
        }
      });
    }

    // 商品毛重
    var weight_content = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        null,
        '\u5546\u54C1\u6BDB\u91CD'
      ),
      _react2.default.createElement(_inputNumber2.default, {
        min: 0,
        className: 'inline-input-number',
        onChange: function onChange(value) {
          _this3.storeWholeInputData(value, "weight");
        }
      }),
      _react2.default.createElement(
        RadioGroup,
        {
          defaultValue: 'g',
          onChange: function onChange(e) {
            _this3.storeWholeInputData(e.target.value, "weightUnit");
          }
        },
        _react2.default.createElement(
          _radio2.default,
          { value: 'g' },
          'g'
        ),
        _react2.default.createElement(
          _radio2.default,
          { value: 'kg' },
          'kg'
        )
      ),
      _react2.default.createElement(
        'a',
        {
          href: 'javascript:void(0)',
          className: 'a-link',
          onClick: function onClick() {
            _this3.handleWholeColumnChange(['weight', 'weightUnit']);
          }
        },
        '\u8BBE\u7F6E'
      )
    );
    var weight_title = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'inline-label' },
        '\u5546\u54C1\u6BDB\u91CD'
      ),
      _react2.default.createElement(
        _popover2.default,
        { content: weight_content },
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)', className: 'a-link' },
          '\u8BBE\u7F6E\u5168\u90E8'
        )
      )
    );
    columns.push({
      title: weight_title,
      dataIndex: 'weight',
      key: 'weight',
      colSpan: 2,
      width: 90,
      render: function render(data, record) {
        return _react2.default.createElement(_inputNumber2.default, {
          min: 0,
          value: data,
          disabled: record.skuStatus == '0' ? true : false,
          className: 'inline-input-number',
          onChange: function onChange(value) {
            _this3.handleSingleDataChange(value, "weight", record.key);
          }
        });
      }
    });
    columns.push({
      title: '',
      dataIndex: 'weightUnit',
      key: 'weightUnit',
      colSpan: 0,
      width: 70,
      render: function render(data, record) {
        var unit = data ? data : 'g';
        return _react2.default.createElement(
          _select2.default,
          {
            value: unit,
            disabled: record.skuStatus == '0' ? true : false,
            onChange: function onChange(value) {
              _this3.handleSingleDataChange(value, "weightUnit", record.key);
            }
          },
          _react2.default.createElement(
            _select2.default.Option,
            { value: 'g' },
            'g'
          ),
          _react2.default.createElement(
            _select2.default.Option,
            { value: 'kg' },
            'kg'
          )
        );
      }
    });

    // 包装尺寸，默认有该列
    var size_content = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        null,
        '\u5305\u88C5\u5C3A\u5BF8\uFF08mm\uFF09 '
      ),
      '\xA0\xA0\u957F:',
      _react2.default.createElement(_inputNumber2.default, {
        min: 0,
        className: 'inline-input-number',
        onChange: function onChange(value) {
          _this3.storeWholeInputData(value, "length");
        }
      }),
      '\xA0\xA0\u5BBD:',
      _react2.default.createElement(_inputNumber2.default, {
        min: 0,
        className: 'inline-input-number',
        onChange: function onChange(value) {
          _this3.storeWholeInputData(value, "width");
        }
      }),
      '\xA0\xA0\u9AD8:',
      _react2.default.createElement(_inputNumber2.default, {
        min: 0,
        className: 'inline-input-number',
        onChange: function onChange(value) {
          _this3.storeWholeInputData(value, "height");
        }
      }),
      _react2.default.createElement(
        'a',
        {
          href: 'javascript:void(0)',
          className: 'a-link',
          onClick: function onClick() {
            _this3.handleWholeColumnChange(['length', 'width', 'height']);
          }
        },
        '\u8BBE\u7F6E'
      )
    );
    var size_title = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'inline-label' },
        '\u5305\u88C5\u5C3A\u5BF8\uFF08mm\uFF09'
      ),
      _react2.default.createElement(
        _popover2.default,
        { content: size_content },
        _react2.default.createElement(
          'a',
          { href: 'javascript:void(0)', className: 'a-link' },
          '\u8BBE\u7F6E\u5168\u90E8'
        )
      )
    );
    columns.push({
      title: size_title,
      dataIndex: 'length',
      key: 'length',
      colSpan: 3,
      width: 110,
      render: function render(data, record) {
        return _react2.default.createElement(
          'div',
          null,
          '\u957F:',
          _react2.default.createElement(_inputNumber2.default, {
            min: 0,
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            className: 'inline-input-number',
            onChange: function onChange(value) {
              _this3.handleSingleDataChange(value, "length", record.key);
            }
          })
        );
      }
    });
    columns.push({
      dataIndex: 'width',
      key: 'width',
      colSpan: 0,
      width: 110,
      render: function render(data, record) {
        return _react2.default.createElement(
          'div',
          null,
          '\u5BBD:',
          _react2.default.createElement(_inputNumber2.default, {
            min: 0,
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            className: 'inline-input-number',
            onChange: function onChange(value) {
              _this3.handleSingleDataChange(value, "width", record.key);
            }
          })
        );
      }
    });
    columns.push({
      dataIndex: 'height',
      key: 'height',
      colSpan: 0,
      width: 110,
      render: function render(data, record) {
        return _react2.default.createElement(
          'div',
          null,
          '\u9AD8:',
          _react2.default.createElement(_inputNumber2.default, {
            min: 0,
            value: data,
            disabled: record.skuStatus == '0' ? true : false,
            className: 'inline-input-number',
            onChange: function onChange(value) {
              _this3.handleSingleDataChange(value, "height", record.key);
            }
          })
        );
      }
    });

    /**
     * 自定义扩展列，从config页面配置
     * props.extendColumnFields = [{ id:1, key:'中文名1', type:'图片|file|input', width: *** }]
     */
    if (props.extendColumnFields && props.extendColumnFields instanceof Array && props.extendColumnFields.length > 0) {
      props.extendColumnFields.forEach(function (item) {
        var label = 'extendSkuFields_' + item.label;
        columns.push({
          title: item.labelName,
          dataIndex: label,
          key: label,
          width: item.width || 120,
          render: function render(data, record) {
            if (item.type == 'input') {
              return _react2.default.createElement(_input2.default, {
                value: data && data.value || '',
                disabled: record.skuStatus == '0' ? true : false,
                onChange: function onChange(e) {
                  var newValue = {
                    label: item.label,
                    value: e.target.value
                  };
                  _this3.handleSingleDataChange(newValue, label, record.key);
                }
              });
            } else if (item.type == 'image') {
              if (props.type == '0' || props.type == '1') {
                // platform
                return _react2.default.createElement(
                  'div',
                  { className: record.skuStatus == '0' ? 'image-diabled' : '' },
                  _react2.default.createElement(_components.UploadSelect, {
                    onChange: function onChange(result) {
                      var newValue = {
                        label: item.label,
                        value: result.url || ''
                      };
                      _this3.handleSingleDataChange(newValue, label, record.key);
                    },
                    onRemove: function onRemove(result) {
                      var newValue = {
                        label: item.label,
                        value: ''
                      };
                      _this3.handleSingleDataChange(newValue, label, record.key);
                    },
                    limit: { size: 5, suffix: ['JPG', 'JPEG', 'PNG', 'GIF'] },
                    imgUrl: data && data.value || '',
                    showRemoveIcon: true
                  })
                );
              } else {
                // shop
                return (
                  // 添加图片禁用样式
                  _react2.default.createElement(
                    'div',
                    { className: record.skuStatus == '0' ? 'image-diabled' : '' },
                    _react2.default.createElement(_view2.default, {
                      onChange: function onChange(result) {
                        var newValue = {
                          label: item.label,
                          value: result.logoUrl || ''
                        };
                        _this3.handleSingleDataChange(newValue, label, record.key);
                      },
                      relation: 'logoUrl',
                      onRemove: function onRemove(result) {
                        var newValue = {
                          label: item.label,
                          value: ''
                        };
                        _this3.handleSingleDataChange(newValue, label, record.key);
                      },
                      imgType: ['JPG', 'JPEG', 'PNG', 'GIF'],
                      action: '/proxy/base/upload/uploadImgLimitOneMega',
                      maxFileSize: '500',
                      fileSizeType: 'KB',
                      imageUrl: data && data.value || ''
                    })
                  )
                );
              }
            } else if (item.type == 'file') {
              var fileList = JSON.parse(data && data.value || (0, _stringify2.default)([]));
              var disabled = record.skuStatus == '0' || fileList.length >= 1 ? true : false;
              return _react2.default.createElement(_view4.default, {
                fileLength: 1,
                disabled: disabled,
                fileType: ['png', 'jpg', 'word', 'excel', 'pdf'],
                action: '/proxy/base/upload/uploadFileLimit',
                fileList: fileList,
                onRemove: function onRemove(file) {
                  // 启用状态时，可删除
                  if (record.skuStatus == '1') {
                    var newValue = {
                      label: item.label,
                      value: (0, _stringify2.default)([])
                    };
                    _this3.handleSingleDataChange(newValue, label, record.key);
                  } else if (record.skuStatus == '0') {
                    // 停用状态不可删除
                    return false;
                  }
                },
                onChange: function onChange(file) {
                  var newValue = {
                    label: item.label,
                    value: (0, _stringify2.default)([file])
                  };
                  _this3.handleSingleDataChange(newValue, label, record.key);
                }
              });
            }
          }
        });
      });
    }

    // 单位
    if (props.skuUnit) {
      var that = _this3;
      columns.push({
        title: '单位',
        dataIndex: 'skuUnit',
        key: 'skuUnit',
        width: 100,
        render: function render(data, record) {
          return _react2.default.createElement(
            _select2.default,
            {
              style: { width: 80 },
              value: data,
              disabled: record.skuStatus == '0' ? true : false,
              onChange: function onChange(value) {
                _this3.handleSingleDataChange(value, "skuUnit", record.key);
              },
              allowClear: true
            },
            that.state.skuUnitDS.map(function (item) {
              return _react2.default.createElement(
                _select2.default.Option,
                { value: item },
                item
              );
            })
          );
        }
      });
    }

    // 如果选了销售规格，则展示操作列
    if (!ifDefaultData) {
      columns.push({
        title: '操作',
        dataIndex: 'skuStatus',
        key: 'skuStatus',
        width: 60,
        render: function render(data, record) {
          // sku 状态,1:启用; 0:停用
          return _react2.default.createElement(
            'a',
            {
              href: 'javascript:void(0);',
              className: 'a-link',
              onClick: function onClick() {
                var newData = data == '1' ? 0 : 1;
                _this3.handleSingleDataChange(newData, "skuStatus", record.key);
              }
            },
            data == "0" ? "启用" : "停用"
          );
        }
      });
    }

    // 纯粹为了当只有尺寸和毛重时，列不至于太宽导致样式变形进行的控制
    if (columns.length < 6) {
      columns.push({
        title: '',
        dataIndex: 'skuUnit',
        key: 'skuUnit',
        width: 300
      });
    }

    return columns;
  };
}, _temp);
exports.default = ReleaseSaleInfo;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseSaleInfo.js.map