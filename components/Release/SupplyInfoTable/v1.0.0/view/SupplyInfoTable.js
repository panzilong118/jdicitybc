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
                   * @file 发布商品-供货信息Table组件
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

var _RegionPriceDetail = require('./RegionPriceDetail');

var _RegionPriceDetail2 = _interopRequireDefault(_RegionPriceDetail);

var _style = require('./style/style.less');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout2.default.Content;

var CheckboxGroup = _checkbox2.default.Group;
var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;

var uuid = 0;
var SupplyInfoTable = (_dec = _form2.default.create(), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SupplyInfoTable, _Component);

  function SupplyInfoTable(props) {
    (0, _classCallCheck3.default)(this, SupplyInfoTable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SupplyInfoTable.__proto__ || (0, _getPrototypeOf2.default)(SupplyInfoTable)).call(this, props));

    _this.changeECount = function (index, value) {
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
      console.log('changed', value);
      console.log('index', index);
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
      }
      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice = num;
      // this.state.supplyPrice[index]=num;
      // this.setState({
      //   supplyPrice: itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].supplyPrice
      // });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.radioChange = function (index, e) {
      console.log('ind', index, e);
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
      console.log(number, '更改全部供货价常规备货');
      _this.setState({
        allcount: number
      });
    };

    _this.changeAllCount = function () {
      console.log('2222');
      var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));

      itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item) {
        item.inventory = _this.state.allcount;
      });
      _this.props.updateItemTmplAction(itemTmplPublishVo);
    };

    _this.changePrice = function (e) {};

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
      console.log(_this.props.itemTmplPublishVo);
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
          console.log((0, _stringify2.default)(statusItemArr), (0, _stringify2.default)(skuItemArr), (0, _stringify2.default)(statusItemArr) == (0, _stringify2.default)(skuItemArr));
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
      console.log(rules);
      return rules;
    };

    _this.regionalArr = [];
    _this.countContent = _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\u5E38\u89C4\u5907\u8D27:'
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
        '\u4F9B\u8D27\u4EF7:'
      ),
      _react2.default.createElement(_inputNumber2.default, { min: 0,
        onChange: _this.changePrice,
        onBlur: function onBlur(e) {
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
    _this.columns = [{
      title: _react2.default.createElement(
        'span',
        null,
        '\u5E38\u89C4\u5907\u8D27'
      ),
      dataIndex: 'inventory',
      key: 'inventory',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          !record.supplyStatus ? _react2.default.createElement(
            'span',
            { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E38\u89C4\u5907\u8D27'
          ) : _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E38\u89C4\u5907\u8D27'
          ),
          _react2.default.createElement(_inputNumber2.default, { disabled: !record.supplyStatus,
            onChange: function onChange(e) {
              _this.changeECount(index, e);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory : '',
            style: { width: '100px', float: 'left' } })
        );
      }
    }, {
      title: _react2.default.createElement(
        'span',
        null,
        '\u4F9B\u8D27\u4EF7'
      ),
      dataIndex: 'sprice',
      key: 'sprice',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          !record.supplyStatus ? _react2.default.createElement(
            'span',
            { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u4F9B\u8D27\u4EF7'
          ) : _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u4F9B\u8D27\u4EF7'
          ),
          _react2.default.createElement(_inputNumber2.default, { min: 0.01,
            disabled: !record.supplyStatus,
            onChange: function onChange(e) {
              return _this.changeESprice(e, index);
            },
            onBlur: function onBlur(e) {
              return _this.changeBESprice(e, index);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] && _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice : '',
            style: { width: '100px', float: 'left' } }),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            !record.supplyStatus ? _react2.default.createElement(
              'span',
              { className: 'tableSprice', style: { color: '#bbb' } },
              '\u8BBE\u7F6E\u5730\u57DF\u4EF7'
            ) : _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_view2.default, {
                edit: _this.props.edit,
                index: index,
                type: _this.props.type,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                getRegionalPrice: _this.props.getRegionalPrice,
                regionalArr: _this.regionalArr
              })
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            !record.supplyStatus ? _react2.default.createElement(
              'span',
              { className: 'tableView', style: { color: '#bbb' } },
              '\u67E5\u770B'
            ) : _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_RegionPriceDetail2.default, {
                edit: _this.props.edit,
                index: index,
                type: _this.props.type,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                getRegionalPrice: _this.props.getRegionalPrice,
                regionalArr: _this.regionalArr
              })
            )
          )
        );
      }
    }, {
      title: '供货量',
      dataIndex: 'count',
      key: 'count',
      render: function render(record, index) {
        return 0;
      }
    }, {
      title: '供货情况',
      dataIndex: 'supplyStatus',
      key: 'supplyStatus',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          RadioGroup,
          { onChange: function onChange(e) {
              return _this.radioChange(index, e);
            },
            value: text },
          _react2.default.createElement(
            _radio2.default,
            { value: 0 },
            '\u6682\u65E0\u4F9B\u5E94'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: 1 },
            '\u6B63\u5E38\u4F9B\u5E94'
          )
        );
      }
    }];
    _this.columnsSku = [{
      title: 'SKU信息',
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
    }, {
      title: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          null,
          '\u5E38\u89C4\u5907\u8D27'
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
          !record.supplyStatus ? _react2.default.createElement(
            'span',
            { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E38\u89C4\u5907\u8D27'
          ) : _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u5E38\u89C4\u5907\u8D27'
          ),
          _react2.default.createElement(_inputNumber2.default, { disabled: !record.supplyStatus,
            onChange: function onChange(e) {
              _this.changeECount(index, e);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].inventory : '',
            style: { width: '100px', float: 'left' } })
        );
      }
    }, {
      title: _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'span',
          null,
          '\u4F9B\u8D27\u4EF7'
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
      //<span>供货价</span>,
      dataIndex: 'sprice',
      key: 'sprice',
      render: function render(text, record, index) {
        return _react2.default.createElement(
          'div',
          null,
          !record.supplyStatus ? _react2.default.createElement(
            'span',
            { style: { color: '#bbb', float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u4F9B\u8D27\u4EF7'
          ) : _react2.default.createElement(
            'span',
            { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
            '\u4F9B\u8D27\u4EF7'
          ),
          _react2.default.createElement(_inputNumber2.default, { min: 0.01,
            disabled: !record.supplyStatus,
            onChange: function onChange(e) {
              return _this.changeESprice(e, index);
            },
            onBlur: function onBlur(e) {
              return _this.changeBESprice(e, index);
            },
            value: _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index] && _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList ? _this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[index].areaPriceList[0].supplyPrice : '',
            style: { width: '100px', float: 'left' } }),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            !record.supplyStatus ? _react2.default.createElement(
              'span',
              { className: 'tableSprice', style: { color: '#bbb' } },
              '\u8BBE\u7F6E\u5730\u57DF\u4EF7'
            ) : _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_view2.default, {
                edit: _this.props.edit,
                index: index,
                type: _this.props.type,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                getRegionalPrice: _this.props.getRegionalPrice,
                regionalArr: _this.regionalArr
              })
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'outSprice' },
            !record.supplyStatus ? _react2.default.createElement(
              'span',
              { className: 'tableView', style: { color: '#bbb' } },
              '\u67E5\u770B'
            ) : _react2.default.createElement(
              'span',
              { style: { float: 'left', marginRight: '5px', marginTop: '4px' } },
              _react2.default.createElement(_RegionPriceDetail2.default, {
                edit: _this.props.edit,
                index: index,
                itemTmplPublishVo: _this.props.itemTmplPublishVo,
                updateItemTmplAction: _this.props.updateItemTmplAction,
                getRegionalPrice: _this.props.getRegionalPrice,
                regionalArr: _this.regionalArr
              })
            )
          )
        );
      }
    }, {
      title: '供货量',
      dataIndex: 'count',
      key: 'count',
      render: function render(record, index) {
        return 0;
      }
    }, {
      title: '供货情况',
      dataIndex: 'supplyStatus',
      key: 'supplyStatus',
      render: function render(text, record, index) {
        console.log(text);
        return _react2.default.createElement(
          RadioGroup,
          { onChange: function onChange(e) {
              return _this.radioChange(index, e);
            },
            value: text },
          _react2.default.createElement(
            _radio2.default,
            { value: 0 },
            '\u6682\u65E0\u4F9B\u5E94'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: 1 },
            '\u6B63\u5E38\u4F9B\u5E94'
          )
        );
      }
    }];
    _this.initdata = [{
      key: 0,
      count: 0,
      totalPrice: null, //供货价
      inventory: null, //销量
      attributes: []
    }];
    _this.state = {
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
      allcount: null
    };
    _this.lastKey = 0;
    return _this;
  }

  (0, _createClass3.default)(SupplyInfoTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initColumns(this.props.itemTmplPublishVo);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.initColumns(nextProps.itemTmplPublishVo);
      if (nextProps.regionalData.loaded) {
        if (nextProps.regionalData.data.code == 0) {
          var regionalDATA = [];
          for (var i in nextProps.regionalData.data.data) {
            if (nextProps.regionalData.data.data[i]) {
              regionalDATA = nextProps.regionalData.data.data[i];
            }
          }
          this.regionalArr = regionalDATA;
        }
      }
    }
    // 去掉停用的数据


  }, {
    key: 'initColumns',
    value: function initColumns(itemTmplPublishVo) {
      var preSkuPriceVoList = itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList;
      var column = this.columnsSku;
      // 没有选择销售规格
      if (preSkuPriceVoList.length == 1) {
        if (preSkuPriceVoList[0].attributes == null || preSkuPriceVoList[0].attributes.length == 0) {
          column = this.columns;
        }
      }
      preSkuPriceVoList.map(function (item, index) {
        if (!item.areaPriceList.length) {
          preSkuPriceVoList.splice(index, 1);
        }
      });
      console.log(preSkuPriceVoList);
      this.setState({
        column: column,
        initdata: preSkuPriceVoList
      });
    }

    // 备货及供货价方法

  }, {
    key: 'render',
    value: function render() {
      console.log(this.props, "---");
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;


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
              '\u4F9B\u8D27\u4FE1\u606F'
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
              style: { background: 'white' } })
          )
        )
      );
    }
  }]);
  return SupplyInfoTable;
}(_react.Component)) || _class);
exports.default = SupplyInfoTable;
module.exports = exports['default'];
//# sourceMappingURL=SupplyInfoTable.js.map