'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _row = require('jdcloudui/lib/row');

var _row2 = _interopRequireDefault(_row);

var _input = require('jdcloudui/lib/input');

var _input2 = _interopRequireDefault(_input);

var _col = require('jdcloudui/lib/col');

var _col2 = _interopRequireDefault(_col);

var _popover = require('jdcloudui/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _message2 = require('jdcloudui/lib/message');

var _message3 = _interopRequireDefault(_message2);

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
                   * @file 发布商品-供货信息-设置地域价组件
                   */


require('jdcloudui/lib/modal/style');

require('jdcloudui/lib/button/style');

require('jdcloudui/lib/row/style');

require('jdcloudui/lib/input/style');

require('jdcloudui/lib/col/style');

require('jdcloudui/lib/popover/style');

require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/message/style');

require('jdcloudui/lib/form/style');

require('jdcloudui/lib/radio/style');

require('jdcloudui/lib/checkbox/style');

require('jdcloudui/lib/layout/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Content = _layout2.default.Content;

var CheckboxGroup = _checkbox2.default.Group;
var RadioGroup = _radio2.default.Group;
var FormItem = _form2.default.Item;

var uuid = 0;
var RegionPriceEdit = (_dec = _form2.default.create(), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RegionPriceEdit, _Component);

  function RegionPriceEdit(props) {
    (0, _classCallCheck3.default)(this, RegionPriceEdit);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegionPriceEdit.__proto__ || (0, _getPrototypeOf2.default)(RegionPriceEdit)).call(this, props));

    _this.regionalClick = function () {

      if (_this.props.type == 2) {
        var params = {};
        params.requestInfo = [];
        params.requestInfo.push({
          shopAddressId: _this.props.itemTmplPublishVo.itemPerfectVo.placeDeliveryId
        });
        if (params.requestInfo[0].shopAddressId && params.requestInfo[0].shopAddressId.length > 0) {
          params.requestInfo = (0, _stringify2.default)(params.requestInfo);
          _this.props.getRegionalPrice(params).then(function (res) {
            if (res.code == 0) {
              _this.showModal();
            }
          });
        } else {
          _message3.default.warning('请选择发货地');
        }
      } else {
        _this.showModal();
      }
    };

    _this.showModal = function () {
      console.log(_this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this.props.index].areaPriceList);
      _this.initialAllSourceData();
      _this.setState({
        visible: true
      });
    };

    _this.handleCancel = function (e) {

      //关闭选择地域和查看地域弹窗
      for (var k in _this.state.visiblePop) {
        _this.state.visiblePop[k] = false;
      }

      for (var k in _this.state.visibleView) {
        _this.state.visibleView[k] = false;
      }
      _this.setState({
        visible: false,
        visiblePop: _this.state.visiblePop,
        visibleView: _this.state.visibleView
      });
    };

    _this.initdata = [{
      key: 0,
      count: 0,
      totalPrice: null, //供货价
      inventory: null, //销量
      attributes: null,
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
      column: _this.columns
    };
    _this.lastKey = 0;
    _this.initialData = [];
    return _this;
  }

  //地域价Modal


  (0, _createClass3.default)(RegionPriceEdit, [{
    key: 'handleOk',


    //表单递交按钮
    value: function handleOk() {
      var _this2 = this;

      this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
          _this2.buildData(values);
          var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this2.props.itemTmplPublishVo));
          if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index]) {
            itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index].areaPriceList = _this2.buildData(values);
          } else {
            itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index] = {};
            itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index].areaPriceList = _this2.buildData(values);
            itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index].supplyStatus = 1;
          }
          itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[_this2.props.index].supplyPrice = Number(_this2.buildData(values)[0].supplyPrice);
          _this2.props.updateItemTmplAction(itemTmplPublishVo);

          //关闭选择地域和查看地域弹窗
          for (var k in _this2.state.visiblePop) {
            _this2.state.visiblePop[k] = false;
          }

          for (var k in _this2.state.visibleView) {
            _this2.state.visibleView[k] = false;
          }

          _this2.setState({
            visible: false,
            arealist: [],
            checkarealist: [],
            visiblePop: _this2.state.visiblePop,
            visibleView: _this2.state.visibleView
          });
        }
      });
    }

    //重组表单数据

  }, {
    key: 'buildData',
    value: function buildData(values) {
      var priceList = new Array();
      //根据keys获取：{price，id+Name}  多个地域对应一个价格--->拆分为单个价格对应单个地域
      var keys = values.keys;
      for (var k in keys) {
        var price = values['price-' + keys[k]];
        var areaList = values['areaList-' + keys[k]];
        if (areaList && areaList.length > 0) {
          for (var area in areaList) {
            var tmp = {
              supplyPrice: price,
              areaId: areaList[area].split(',')[0],
              areaName: areaList[area].split(',')[1],
              //preCommitSkuPriceId:this.findPreCommitSkuPriceId(areaList[area].split(',')[0]),
              areaNumber: 1
            };
            priceList.push(tmp);
          }
        }
      }
      priceList.splice(0, 0, {
        areaId: 0,
        areaName: '全国',
        areaNumber: 1,
        supplyPrice: values.totalPrice
      });
      return priceList;
      //return {index:this.props.index,totalPrice:values.totalPrice,priceList:priceList,updatePrice:true}
    }
  }, {
    key: 'createAreaPriceDom',


    //生成  地域价组件
    value: function createAreaPriceDom() {
      var _this3 = this;

      var formItemLayout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 }
      };
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          getFieldValue = _props$form.getFieldValue;

      var keys = getFieldValue('keys');
      var formItems = keys && keys.length > 0 && keys.map(function (k) {
        var supplyPrice = '';
        if (_this3.initialData && _this3.initialData[k]) {
          supplyPrice = _this3.initialData[k].supplyPrice;
        }
        // //地区选择框 显示状态
        // var state = false;
        // if(this.state.arealist && this.state.arealist[k]){
        //    state = this.state.arealist[k];
        // }
        return _react2.default.createElement(
          'div',
          { key: k + '-areaDomDiv' },
          _react2.default.createElement(
            FormItem,
            { require: true, key: k + '-areaDomItem' },
            _react2.default.createElement(
              _row2.default,
              null,
              _react2.default.createElement(
                _col2.default,
                { span: 3, className: 'selectRegion' },
                _react2.default.createElement(
                  _popover2.default,
                  {
                    content: _this3.createAreaGroup(k),
                    overlayClassName: 'rArea',
                    trigger: 'click',
                    placement: 'bottomLeft',
                    visible: _this3.state.visiblePop[k]
                  },
                  _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                        return _this3.showArea(k);
                      } },
                    '\u9009\u62E9\u5730\u57DF',
                    _react2.default.createElement(_icon2.default, { type: 'caret-down' })
                  )
                )
              ),
              _react2.default.createElement(
                _col2.default,
                { span: 7 },
                getFieldDecorator('areaTitle-' + k, {
                  initialValue: _this3.initialAreaTitle(k),
                  rules: [{
                    required: true,
                    message: "请选择地域！"
                  }]
                })(_react2.default.createElement(_input2.default, { disabled: true, maxLength: '15', style: { border: 0 }, className: 'f-toe' }))
              ),
              _react2.default.createElement(
                _col2.default,
                { span: 3, offset: 11 },
                _react2.default.createElement(
                  _popover2.default,
                  {
                    content: _this3.createCheckboxGroup(k),
                    trigger: 'click',
                    placement: 'bottomLeft',
                    visible: _this3.state.visibleView[k]
                  },
                  _react2.default.createElement(
                    'a',
                    { onClick: function onClick() {
                        return _this3.showCheckArea(k);
                      } },
                    '\u67E5\u770B\u5730\u57DF'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            FormItem,
            (0, _extends3.default)({}, formItemLayout, { label: '\u4F9B\u8D27\u4EF7', key: k + '-areaPrice' }),
            _react2.default.createElement(
              'span',
              null,
              '\uFFE5'
            ),
            _react2.default.createElement(
              'span',
              { className: 'w160' },
              getFieldDecorator('price-' + k, {
                initialValue: supplyPrice,
                validateTrigger: ['onChange', 'onBlur'],
                rules: [{
                  required: true,
                  message: "请输入地域价！"
                }, {
                  pattern: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
                  message: '请输入数字且最多为两位小数！'
                }]
              })(_react2.default.createElement(_input2.default, null))
            ),
            _react2.default.createElement(
              'a',
              { className: 'actionDel', onClick: function onClick() {
                  return _this3.remove(k);
                } },
              '\u5220\u9664\u5730\u57DF'
            )
          )
        );
      });
      return formItems;
    }

    //生成 选择地域弹框

  }, {
    key: 'createAreaGroup',
    value: function createAreaGroup(k) {
      var _this4 = this;

      var areaOptions = [];
      areaOptions = this.props.regionalArr && this.props.regionalArr.map(function (item, index) {
        return {
          index: index,
          id: item.id,
          code: item.code,
          value: item.code + ',' + item.name,
          label: item.name
        };
      });
      var defaultvalue = new Array();
      var skuParamList = this.initialData.slice(0);
      //获取省份默认选中信息
      if (skuParamList && skuParamList.length > 0 && skuParamList[k]) {
        if (skuParamList[k].areaId && skuParamList[k].areaId.indexOf(',') != -1 && skuParamList[k].areaName && skuParamList[k].areaName.indexOf(',') != -1) {
          var areaIds = skuParamList[k].areaId.split(',');
          var areaNames = skuParamList[k].areaName.split(',');
          if (areaIds.length > 0 && areaNames.length > 0) {
            for (var i = 0; i < areaIds.length; ++i) {
              if (areaIds[i] != 0) {
                var tmp = areaIds[i] + ',' + areaNames[i];
                defaultvalue.push(tmp);
              }
            }
          }
        } else {
          var areaId = skuParamList[k].areaId;
          var areaName = skuParamList[k].areaName;
          var tmp = areaId + ',' + areaName;
          defaultvalue.push(tmp);
        }
      }

      var formValue = this.props.form.getFieldsValue();
      var keys = formValue.keys;
      var allCheckedValue = [];

      for (var _i in keys) {
        var _tmp = formValue['areaList-' + keys[_i]];
        if (_tmp && k != keys[_i]) {
          allCheckedValue = allCheckedValue.concat(_tmp);
        }
      }

      var disableResult = [];
      for (var x in areaOptions) {
        for (var y in allCheckedValue) {
          if (areaOptions[x].value == allCheckedValue[y]) {
            areaOptions[x].disabled = true;
          }
        }
      }
      var _props$form2 = this.props.form,
          getFieldDecorator = _props$form2.getFieldDecorator,
          getFieldValue = _props$form2.getFieldValue;

      return _react2.default.createElement(
        FormItem,
        { key: k + '-checkgroup' },
        _react2.default.createElement(
          'div',
          { className: 'areaList', style: { width: '500px' } },
          getFieldDecorator('areaList-' + k, {
            initialValue: defaultvalue ? defaultvalue : ''
          })(_react2.default.createElement(CheckboxGroup
          //options={this.state.regionalList}
          , { options: areaOptions,
            onChange: function onChange(checkedValues) {
              return _this4.onChangeCheckboxGroup(checkedValues);
            }
          })),
          _react2.default.createElement(
            'div',
            { className: 'popButton' },
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', size: 'small', onClick: function onClick() {
                  return _this4.hideArea(k);
                } },
              '\u786E\u5B9A'
            )
          )
        )
      );
    }
  }, {
    key: 'onChangeCheckboxGroup',
    value: function onChangeCheckboxGroup(checkedValues) {
      console.log(checkedValues);
    }

    //根据数据数量，生成keys。发布和编辑不同状态无法调平，所以用了不同的方式生成keys

  }, {
    key: 'initialKeys',
    value: function initialKeys() {
      var keys = new Array();
      if (this.props.edit) {
        var i = -1;
      } else {
        var i = 0;
      };

      if (this.props.edit) {
        var areaList = this.initialData;
        if (areaList && areaList.length > 0) {
          if (areaList[0].areaId == '0') {
            areaList.shift();
          }
        }
      } else {
        var areaList = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList;
      }

      var tmp = (areaList || []).map(function (item) {
        keys.push(++i);
      });

      if (!this.props.edit) {
        var formValue = this.props.form.getFieldsValue();
        keys = formValue.keys || [];
      };
      return keys;
    }

    //添加地域条

  }, {
    key: 'add',
    value: function add() {
      var form = this.props.form;

      var keys = form.getFieldValue('keys');
      console.log('nextKeys', this.lastKey);
      var nextKeys = keys.concat(this.lastKey);
      form.setFieldsValue({
        keys: nextKeys
      });
      this.lastKey++;
      //新增设置地域、查看地域 窗口状态
      var arealist = this.state.regionalList;

      this.setState({
        arealist: arealist
        // checkarealist:checkarealist
      });
    }

    //删除地域条

  }, {
    key: 'remove',
    value: function remove(k) {
      console.log('remove k is:', k);
      var arealist = this.state.regionalList;
      delete arealist[k];

      this.setState({
        arealist: arealist
        // checkarealist: checkarealist
      });
      //更新keys
      var form = this.props.form;

      var keys = form.getFieldValue('keys');
      this.props.form.setFieldsValue({
        keys: keys.filter(function (key) {
          return key !== k;
        })
      });
    }
  }, {
    key: 'showArea',
    value: function showArea(k) {
      this.state.visiblePop[k] = true;
      this.setState({
        visiblePop: this.state.visiblePop
      });
    }

    //选择省份：隐藏

  }, {
    key: 'hideArea',
    value: function hideArea(k) {
      //保存到title
      var form = this.props.form;

      var areaTitle = form.getFieldValue('areaList-' + k);
      areaTitle = this.areaTitile2Str(areaTitle);
      this.props.form.setFieldsValue((0, _defineProperty3.default)({}, 'areaTitle-' + k, areaTitle));
      this.state.visiblePop[k] = false;
      this.setState({
        visiblePop: this.state.visiblePop
      });
    }

    //查看省份：隐藏

  }, {
    key: 'hideCheckArea',
    value: function hideCheckArea(k) {
      this.state.visibleView[k] = false;
      this.setState({
        visibleView: this.state.visibleView
      });
    }

    //初始化选择地域栏的 "选中展示" Title

  }, {
    key: 'initialAreaTitle',
    value: function initialAreaTitle(k) {
      //bugfix HNCBTOB-327 商品待审核状态下，再次编辑设置地域价，获取不到地域，即Title无回显数据
      var _props$form3 = this.props.form,
          getFieldDecorator = _props$form3.getFieldDecorator,
          getFieldValue = _props$form3.getFieldValue;

      var value = this.props.form.getFieldValue('areaList-' + k);

      var valueStr = this.areaTitile2Str(value);
      return valueStr;
    }
    //areaTitle数据 数组为字符串

  }, {
    key: 'areaTitile2Str',
    value: function areaTitile2Str(areaTitle) {
      var areaTitleStr = '';
      if (areaTitle) {
        for (var i in areaTitle) {
          var areaTitleTmp = areaTitle[i].split(',')[1] + ' ';
          areaTitleStr += areaTitleTmp;
        }
      }
      return areaTitleStr;
    }

    //查看省份

  }, {
    key: 'createCheckboxGroup',
    value: function createCheckboxGroup(k) {
      var _this5 = this;

      var _props$form4 = this.props.form,
          getFieldDecorator = _props$form4.getFieldDecorator,
          getFieldValue = _props$form4.getFieldValue;


      var value = this.props.form.getFieldValue('areaList-' + k);
      var valueStr = this.areaTitile2Str(value);

      return _react2.default.createElement(
        'div',
        { className: 'areaList', style: { width: '240px' } },
        valueStr,
        _react2.default.createElement(
          'div',
          { className: 'popButton' },
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', size: 'small', onClick: function onClick() {
                return _this5.hideCheckArea(k);
              } },
            '\u786E\u5B9A'
          )
        )
      );
    }
  }, {
    key: 'showCheckArea',
    value: function showCheckArea(k) {
      this.state.visibleView[k] = true;
      this.setState({
        visibleView: this.state.visibleView
      });
    }
  }, {
    key: 'regionDataTransform',
    value: function regionDataTransform() {
      var priceList = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList;
      console.log(priceList);
      var result = [];
      var price = '';
      var areaName = '';
      var areaId = '';

      // if(this.props.edit){     
      // //过滤全国价
      // if(priceList.length>1){
      //     console.log(priceList.length)
      //     for(var j in priceList){
      //       if(priceList[j].areaId==0 || priceList[j].areaId=='0'){
      //         priceList.splice(j,1);
      //       }
      //     }
      //   }
      // }

      if (priceList.length > 0) {
        price = priceList[0].supplyPrice;
        for (var k in priceList) {
          if (price === priceList[k].supplyPrice) {
            price = priceList[k].supplyPrice;
            areaName = areaName + priceList[k].areaName + ',';
            areaId = areaId + priceList[k].areaId + ',';
          } else {
            areaName = areaName.substr(0, areaName.length - 1);
            areaId = areaId.substr(0, areaId.length - 1);
            result.push({ areaId: areaId, areaName: areaName, supplyPrice: price });
            price = priceList[k].supplyPrice;
            areaName = priceList[k].areaName + ',';
            areaId = priceList[k].areaId + ',';
          }
        }
        areaName = areaName.substr(0, areaName.length - 1);
        areaId = areaId.substr(0, areaId.length - 1);
        result.push({ areaId: areaId, areaName: areaName, supplyPrice: price });
      }
      console.log(result);

      return result;
    }
  }, {
    key: 'initialAllSourceData',
    value: function initialAllSourceData() {
      //if(this.props.updatePrice || (this.props.areaList && this.props.areaList.length > 0)){
      this.initialData = this.regionDataTransform();
      if (this.props.edit) {
        if (this.initialData.length == '1') {
          this.lastKey = this.initialData.length - 1;
        } else {
          this.lastKey = this.initialData.length;
        }
      } else {
        this.lastKey = this.initialData.length;
      }

      this.props.form.setFieldsValue({
        keys: this.initialKeys(),
        totalPrice: this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList[0].supplyPrice || ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      console.log(this.props, "---");
      var _props$form5 = this.props.form,
          getFieldDecorator = _props$form5.getFieldDecorator,
          getFieldValue = _props$form5.getFieldValue;


      var initTotalPrice = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList[0].supplyPrice || '';
      this.props.form.setFieldsValue;
      getFieldDecorator('keys', { value: this.initialKeys() });
      var formItemLayout = {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 }
      };

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'a',
          { className: 'ml10 text-link', onClick: function onClick() {
              return _this6.regionalClick();
            } },
          '\u8BBE\u7F6E\u5730\u57DF\u4EF7'
        ),
        _react2.default.createElement(
          _modal2.default,
          {
            title: '\u8BBE\u7F6E\u5730\u57DF\u4EF7',
            className: 'rModal',
            visible: this.state.visible,
            onOk: function onOk() {
              return _this6.handleOk();
            },
            onCancel: this.handleCancel,
            width: '640px'
            //  key={this.state.modalKey}
            , maskClosable: false
          },
          _react2.default.createElement(
            _form2.default,
            null,
            _react2.default.createElement(
              'div',
              { className: 'countryBox' },
              _react2.default.createElement(
                'h3',
                null,
                '\u5168\u56FD\u7EDF\u4E00\u4EF7'
              ),
              _react2.default.createElement(
                FormItem,
                (0, _extends3.default)({}, formItemLayout, { label: '\u4F9B\u8D27\u4EF7' }),
                _react2.default.createElement(
                  'span',
                  null,
                  '\uFFE5'
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'w160' },
                  getFieldDecorator('totalPrice', {
                    initialValue: initTotalPrice,
                    validateTrigger: ['onChange', 'onBlur'],
                    rules: [{
                      required: true,
                      message: "请填写价格！"
                    }, {
                      pattern: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
                      message: '请输入数字且最多为两位小数！'
                    }]
                  })(_react2.default.createElement(_input2.default, { maxLength: '10' }))
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'regionBox' },
              _react2.default.createElement(
                'h3',
                null,
                '\u5730\u57DF\u4EF7'
              ),
              _react2.default.createElement(
                'div',
                { className: 'regionList' },
                this.createAreaPriceDom(),
                _react2.default.createElement(
                  _button2.default,
                  { type: 'dashed', size: 'large',
                    icon: 'plus', onClick: function onClick() {
                      return _this6.add();
                    },
                    style: { width: '100%', marginTop: '10px' } },
                  '\u6DFB\u52A0\u5730\u57DF'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return RegionPriceEdit;
}(_react.Component)) || _class);
exports.default = RegionPriceEdit;
module.exports = exports['default'];
//# sourceMappingURL=RegionPriceEdit.js.map