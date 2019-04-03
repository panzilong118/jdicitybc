'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

var _popover = require('jdcloudui/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _inputNumber = require('jdcloudui/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

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

var _radio = require('jdcloudui/lib/radio');

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = require('jdcloudui/lib/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _dec, _class; /**
                   * @file 发布商品-价格及库存Table组件
                   */


require('jdcloudui/lib/table/style');

require('jdcloudui/lib/popover/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/input-number/style');

require('jdcloudui/lib/form/style');

require('jdcloudui/lib/radio/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _view = require('../../../RegionPriceEditRelease/v1.0.0/view');

var _view2 = _interopRequireDefault(_view);

var _PriceModal = require('./PriceModal');

var _PriceModal2 = _interopRequireDefault(_PriceModal);

var _style = require('./style.less');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout2.default.Content;

var CheckboxGroup = _checkbox2.default.Group;
var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;

var uuid = 0;
var PriceStockTable = (_dec = _form2.default.create(), _dec(_class = function (_Component) {
  (0, _inherits3.default)(PriceStockTable, _Component);

  function PriceStockTable(props) {
    (0, _classCallCheck3.default)(this, PriceStockTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PriceStockTable.__proto__ || (0, _getPrototypeOf2.default)(PriceStockTable)).call(this, props));

    _this.changeECount = function (index, value) {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      // console.log('changed', value);
      // console.log('index', index);
      var num = void 0;
      if (value || value == 0) {
        num = value;
      }
      num = parseInt(num);
      if (num != 0 && !num) {
        num = null;
      }
      if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index]) {
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory = num;
      } else {
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] = {};
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory = num;
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyStatus = 1;
      }
      _this.state.inventory[index] = num;
      _this.setState({
        inventory: _this.state.inventory
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.changeESprice = function (value, index) {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      var num = void 0;
      num = value;
      if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index]) {
        //itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList=[{}],
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice = num;
      } else {}
      // itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice = num;
      // itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyStatus = 1;

      //  this.state.supplyPrice[index]=num;
      // this.setState({
      //   supplyPrice: itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyPrice
      // });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.changeBESprice = function (e, index) {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      var num = 0;
      num = e.target.value;
      if (num) {
        num = new Number(num);
        num = +num.toFixed(2);
      } else {
        num = null;
      }
      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice = num;
      // this.state.supplyPrice[index]=num;
      // this.setState({
      //   supplyPrice: itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyPrice
      // });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.radioChange = function (index, e) {
      // console.log('ind',index,e)
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index]) {
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyStatus = e.target.value;
      } else {
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] = {};
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyStatus = e.target.value;
      }
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.changeCount = function (e) {
      var number = e;
      if (typeof number != 'number' && e.indexOf('.') == e.length - 1 && count <= 1) {
        number = e;
      } else {
        number = parseInt(e);
      }
      if (!number) {
        number = 0;
      }
      // console.log(number, '更改全部供货价常规备货');
      _this.setState({
        allcount: number
      });
    };

    _this.changeAllCount = function () {
      // console.log('2222')
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));

      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item) {
        item.inventory = _this.state.allcount;
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.changeBPrice = function (e) {
      var num = 0;
      num = e.target.value;
      if (num) {
        num = new Number(num);
        num = +num.toFixed(2);
      }
      _this.setState({
        allPrice: num
      });
    };

    _this.changeAllPrice = function () {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));

      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item) {
        item.areaPriceList[0].supplyPrice = _this.state.allPrice;
      });

      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.setClassName = function (record, index) {
      // console.log(this.props.itemTmplPublishVo)
      var rules = null;
      _this.props.itemTmplPublishVo.itemTmplSkuVoList.map(function (statusItem) {
        //this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map((skuItem,skuIndex)=>{         
        if (statusItem.skuStatus == 0) {
          var statusItemArr = [];
          var skuItemArr = [];
          statusItem.attributes.map(function (aidItem, aidIndex) {
            statusItemArr.push(aidItem.aid, aidItem.vid);
          });
          _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].attributes.map(function (preaidItem, preaidIndex) {
            skuItemArr.push(preaidItem.aid, preaidItem.vid);
          });
          if ((0, _stringify2.default)(statusItemArr) == (0, _stringify2.default)(skuItemArr)) {
            rules = _style2.default.red;
          }
          // this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].attributes.map(preaidItem=>{
          //   console.log(aidItem.aid == preaidItem.aid && aidItem.vid == preaidItem.vid)
          //   if(aidItem.aid == preaidItem.aid && aidItem.vid == preaidItem.vid){
          //     rules = styles.red
          //     return;
          //     console.log(rules)
          //   }
          // })
        }
      });
      // })
      // console.log(rules)
      return rules;
    };

    _this.handleModal = function (action, record, type) {
      _this.record = record;
      console.log(_this.record);
      // const {PriceData} = this.state;
      // if(record.isPrice){
      //   console.log('设置过分组价')
      //   console.log(PriceData)
      // } else {
      //   console.log('未设置过分组价')
      //   console.log(PriceData)
      // }
      _this.setState({
        visible: action
      });
    };

    _this.handleOk = function (type) {
      console.log('-----------保存分组价-----------');
      var PriceData = _this.state.PriceData;

      console.log(PriceData);
      var key = _this.record.key;
      var num = _this.record.isPrice;
      console.log(key);
      console.log(num);
      var itemTmplPublishVo = _this.props.itemTmplPublishVo;
      var preSkuPriceVoList = itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList;

      var PriceArr = [];
      if (type) {
        console.log('批量设置分组价');
        PriceArr = PriceData['999a'] && PriceData['999a'].filter(function (_item) {
          return _item && _item.labelPrice;
        }) || [];
        console.log(PriceArr);
        PriceData = [];
        PriceData['999a'] = PriceArr;
        _this.setState({ PriceData: PriceData });
        preSkuPriceVoList.map(function (item, index) {
          item.labelPriceList = PriceArr;
          item.isPrice = 1;
        });
      } else {
        PriceArr = PriceData[key] && PriceData[key].filter(function (item) {
          return item && item.labelPrice;
        }) || [];
        preSkuPriceVoList[key].labelPriceList = PriceArr;
        preSkuPriceVoList[key].isPrice = 1;
      }
      // console.log(PriceData)
      // console.log(preSkuPriceVoList);
      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList = preSkuPriceVoList;
      console.log(itemTmplPublishVo);
      _this.props.updateItemTmplAction(itemTmplPublishVo);
      _this.handleModal(false, {});
    };

    _this.changeActionPrice = function (index, data, record) {
      console.log('修改分组价');
      var PriceData = _this.state.PriceData;

      PriceData[record.key || record.key === 0 ? record.key : '999a'] = PriceData[record.key || record.key === 0 ? record.key : '999a'] || [];
      if (PriceData[record.key || record.key === 0 ? record.key : '999a'].length > 0) {
        var type = false;
        PriceData[record.key || record.key === 0 ? record.key : '999a'].map(function (item) {
          if (item.labelId === data.labelId) {
            type = true;
            item.labelPrice = data.labelPrice;
          }
        });
        if (!type) {
          PriceData[record.key || record.key === 0 ? record.key : '999a'].push(data);
        }
      } else {
        PriceData[record.key || record.key === 0 ? record.key : '999a'].push(data);
      }
      // if(record.key !== 0 && !record.key) {
      //   this.data.map(item => {
      //     PriceData[item.key] = PriceData['999a'];
      //   });
      // }
      console.log(PriceData);
      _this.setState({
        PriceData: PriceData
      });
    };

    _this.countContent = _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u8BBE\u7F6E\u5E93\u5B58:'
      ),
      _react2.default.createElement(_inputNumber2.default, { min: 0,
        onChange: _this.changeCount,
        style: { width: '100px', marginLeft: '8px' } }),
      _react2.default.createElement(
        _button2.default,
        { type: 'primary', ghost: true,
          onClick: _this.changeAllCount,
          style: { marginLeft: '8px' } },
        '\u8BBE\u7F6E'
      )
    );
    _this.priceContent = _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u8BBE\u7F6E\u4EF7\u683C:'
      ),
      _react2.default.createElement(_inputNumber2.default, { min: 0
        // onChange = {this.changePrice}
        , onBlur: function onBlur(e) {
          return _this.changeBPrice(e);
        },
        style: { width: '100px', marginLeft: '8px' } }),
      _react2.default.createElement(
        _button2.default,
        { type: 'primary', ghost: true,
          onClick: _this.changeAllPrice,
          style: { marginLeft: '8px' } },
        '\u8BBE\u7F6E'
      )
    );
    _this.columns = [{ title: _react2.default.createElement(
        'span',
        null,
        '\u8BBE\u7F6E\u4EF7\u683C'
      ),
      dataIndex: 'sprice',
      key: 'sprice',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5168\u56FD\u4EF7'
          ),
          _react2.default.createElement(_inputNumber2.default, { min: 0.01,
            disabled: record.disabled,
            onChange: function onChange(e) {
              return _this.changeESprice(e, index);
            },
            onBlur: function onBlur(e) {
              return _this.changeBESprice(e, index);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] && _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice : null,
            style: { width: '100px', float: 'left' } }),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_view2.default, {
                edit: _this.props.edit,
                index: index,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                type: _this.props.type,
                regionalArr: _this.regionalArr
              })
            )
          )
        );
      }
    }, { title: _react2.default.createElement(
        'span',
        null,
        '\u8BBE\u7F6E\u5E93\u5B58'
      ),
      dataIndex: 'inventory',
      key: 'inventory',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E93\u5B58'
          ),
          _react2.default.createElement(_inputNumber2.default, { disabled: record.disabled,
            onChange: function onChange(e) {
              _this.changeECount(index, e);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory : '',
            style: { width: '100px', float: 'left' } })
        );
      }
    }];
    _this.columnsSku = [{ title: 'SKU信息',
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
    }, { title: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          null,
          '\u8BBE\u7F6E\u4EF7\u683C'
        ),
        _react2.default.createElement(
          _popover2.default,
          { content: _this.priceContent },
          _react2.default.createElement(
            'span',
            { style: { marginLeft: '8px', color: '#49a9ee', cursor: 'pointer' } },
            '\u8BBE\u7F6E\u5168\u90E8'
          )
        )
      ),
      dataIndex: 'sprice',
      key: 'sprice',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5168\u56FD\u4EF7'
          ),
          _react2.default.createElement(_inputNumber2.default, { min: 0.01,
            disabled: record.disabled,
            onChange: function onChange(e) {
              return _this.changeESprice(e, index);
            },
            onBlur: function onBlur(e) {
              return _this.changeBESprice(e, index);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] && _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice : null,
            style: { width: '100px', float: 'left' } }),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_view2.default, {
                edit: _this.props.edit,
                index: index,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                type: _this.props.type,
                regionalArr: _this.regionalArr
              })
            )
          )
        );
      }
    }, { title: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          null,
          '\u8BBE\u7F6E\u5E93\u5B58'
        ),
        _react2.default.createElement(
          _popover2.default,
          { content: _this.countContent },
          _react2.default.createElement(
            'span',
            { style: { marginLeft: '8px', color: '#49a9ee', cursor: 'pointer' } },
            '\u8BBE\u7F6E\u5168\u90E8'
          )
        )
      ),
      dataIndex: 'inventory',
      key: 'inventory',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E93\u5B58'
          ),
          _react2.default.createElement(_inputNumber2.default, { disabled: record.disabled,
            onChange: function onChange(e) {
              _this.changeECount(index, e);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory : '',
            style: { width: '100px', float: 'left' } })
        );
      }
    }];
    _this.initdata = [{
      key: 0,
      count: 0,
      totalPrice: null, //供货价
      inventory: null, //销量
      attributes: [],
      ifchecked: 1
    }], _this.state = {
      addressDATA: [],
      checkedList: [],
      afterChecked: [],
      optionsList: [],
      regionalList: [],
      initdata: _this.initdata,
      inventory: {},
      supplyPrice: {},
      visible: false,
      visiblePop: {},
      visibleView: {},
      column: _this.columns,
      modalKey: null,
      priceList: [], //分组价
      PriceData: []
    };
    _this.lastKey = 0;
    _this.record = {};
    return _this;
  }

  (0, _createClass3.default)(PriceStockTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log(this.props.type);
      this.props.getRegionalPriceStock();
      this.initColumns(this.props.itemTmplPublishVo);

      //初始化保存分组价数据
      var PriceData = [];
      var preSkuPriceVoList = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList;
      preSkuPriceVoList.map(function (skuItem, skuIndex) {
        PriceData.push(skuItem.labelPriceList);
        _this2.setState({ PriceData: PriceData });
      });

      if (this.props.type == 3) {
        //店铺分销功能——查询分组价是否显示接口
        var param = {};
        this.props.queryShopInfo(param).then(function (result) {
          if (result.code == 0 && result.data && result.data.length > 0) {
            var html = {
              title: '设置分组价',
              key: 'actionPrice',
              width: 100,
              render: function render(record, index) {
                return _react2.default.createElement(
                  'div',
                  null,
                  record.disabled ? _react2.default.createElement(
                    'span',
                    { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
                    record.isPrice ? '查看' : '添加'
                  ) : _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        return _this2.handleModal(true, record);
                      }, style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
                    record.isPrice ? '查看' : '添加'
                  )
                );
              }
            };

            var html2 = {
              title: _react2.default.createElement(
                'a',
                { href: 'javascript:void(0);', onClick: function onClick() {
                    return _this2.handleModal(true, {}, true);
                  } },
                '\u8BBE\u7F6E\u5206\u7EC4\u4EF7'
              ),
              key: 'actionPrice',
              width: 100,
              render: function render(record, index) {
                return _react2.default.createElement(
                  'div',
                  null,
                  record.disabled ? _react2.default.createElement(
                    'span',
                    { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
                    record.isPrice ? '查看' : '添加'
                  ) : _react2.default.createElement(
                    'a',
                    { href: 'javascript:void(0);', onClick: function onClick() {
                        return _this2.handleModal(true, record);
                      }, style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
                    record.isPrice ? '查看' : '添加'
                  )
                );
              }
            };
            _this2.columns.splice(-1, 0, html);
            _this2.columnsSku.splice(-1, 0, html2);
            _this2.setState({
              priceList: result.data
            });
          }
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initColumns(nextProps.itemTmplPublishVo);
      if (nextProps.priceStockData.loaded) {
        if (nextProps.priceStockData.data.code == 0) {
          var regionalDATA = [];
          for (var i in nextProps.priceStockData.data.data) {
            if (nextProps.priceStockData.data.data[i]) {
              regionalDATA = nextProps.priceStockData.data.data[i];
            }
          }
          this.regionalArr = regionalDATA;
        }
      }
    }
  }, {
    key: 'initColumns',
    value: function initColumns(itemTmplPublishVo) {
      var preSkuPriceVoList = itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList;
      preSkuPriceVoList.map(function (item, index) {
        item.key = index;
      });
      var column = this.columnsSku;
      // 没有选择销售规格
      // console.log(preSkuPriceVoList.length)
      // console.log(preSkuPriceVoList[0].attributes)
      if (preSkuPriceVoList.length == 1 && preSkuPriceVoList[0].attributes == null || preSkuPriceVoList[0].attributes.length == 0) {
        // console.log('attri')
        column = this.columns;
      }
      // console.log(preSkuPriceVoList)
      this.setState({
        column: column,
        initdata: preSkuPriceVoList
      });
    }

    // changePrice=(e)=>{

    // }


    //分组价弹窗
    /** 
     * action: 打开/关闭弹窗
     * type: 设置分组价
     * record: 某一条的数据
     * */


    //保存分组价


    //修改分组价
    /**
     * index: 某个sku分组价中的分销商tabs的下标
     * data: 该分销商tabs对应的数据 (data = {labelId,labelPrice,labelName})
     * record: 该sku的数据
     */

  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.itemTmplPublishVo);
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;


      getFieldDecorator('keys', { initialValue: [] });
      var formItemLayout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 }
      };

      //分组价查看回显数据
      var data = [];
      if (this.record.key == undefined || this.state.PriceData[this.record.key] == undefined) {
        if (this.state.PriceData['999a']) {
          data = this.state.PriceData['999a'];
        }
      } else {
        data = this.state.PriceData[this.record.key];
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'rHeaderTtle rMarginBottom' },
            _react2.default.createElement(
              'h2',
              null,
              '\u4EF7\u683C\u53CA\u5E93\u5B58'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui-ct' },
            _react2.default.createElement(_table2.default, {
              columns: this.state.column,
              dataSource: this.state.initdata,
              pagination: false,
              className: 'rTable',
              rowClassName: this.setClassName,
              style: { background: 'white' } }),
            this.state.visible ? _react2.default.createElement(_PriceModal2.default, {
              data: data,
              visible: this.state.visible,
              record: this.record,
              priceList: this.state.priceList,
              handleOk: this.handleOk,
              changePrice: this.changeActionPrice,
              handleModal: this.handleModal
            }) : null
          )
        )
      );
    }
  }]);
  return PriceStockTable;
}(_react.Component)) || _class);
exports.default = PriceStockTable;
module.exports = exports['default'];
//# sourceMappingURL=PriceStockTable.js.map