'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _spin = require('jdcloudui/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _tabs = require('jdcloudui/lib/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _class, _temp, _initialiseProps;
/**
 * @author chenyanhua
 * @dateTime 20180724
 * @file 发布商品 Tab 组件
 */


// 基础信息 tab

// 商品图片 tab
/*  平台  */

/*  供应商 店铺  */


// 其他设置 tab

// 价格及库存 tab

// 供货信息 tab


// 按钮组件


require('jdcloudui/lib/message/style');

require('jdcloudui/lib/spin/style');

require('jdcloudui/lib/tabs/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _view = require('../../../ReleaseBasicInfo/v1.0.0/view');

var _view2 = _interopRequireDefault(_view);

var _index2 = require('../../../ReleasePlatformGoodsImage/v1.0.0/view/index');

var _index3 = _interopRequireDefault(_index2);

var _index4 = require('../../../ReleaseShopGoodsImage/v1.0.0/view/index');

var _index5 = _interopRequireDefault(_index4);

var _view3 = require('../../../ReleaseOtherConfig/v1.0.0/view');

var _view4 = _interopRequireDefault(_view3);

var _view5 = require('../../../ReleasePriceAndStock/v1.0.0/view');

var _view6 = _interopRequireDefault(_view5);

var _view7 = require('../../../ReleaseSupplyInfo/v1.0.0/view');

var _view8 = _interopRequireDefault(_view7);

var _view9 = require('../../../ReleaseBtns/v.1.0.0/view');

var _view10 = _interopRequireDefault(_view9);

var _index6 = require('./style/index.less');

var _index7 = _interopRequireDefault(_index6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ReleaseURLConfig from './ReleaseURLConfig';

var TabPane = _tabs2.default.TabPane;

function Loading(props) {
  if (props.error) {
    return _react2.default.createElement(
      'div',
      null,
      'Error!'
    );
  } else if (props.pastDelay) {
    return _react2.default.createElement(
      'div',
      { style: { 'height': '800px', 'paddingTop': '200px', 'textAlign': 'center' } },
      _react2.default.createElement(_spin2.default, { size: 'large' })
    );
  } else {
    return null;
  }
}
var ReleaseViewWrap = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(ReleaseViewWrap, _Component);

  function ReleaseViewWrap(props, context) {
    (0, _classCallCheck3.default)(this, ReleaseViewWrap);

    // 店铺时，销售信息表格列是否需要根据模板进行列的校验
    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseViewWrap.__proto__ || (0, _getPrototypeOf2.default)(ReleaseViewWrap)).call(this, props));

    _initialiseProps.call(_this);

    var calcRule = _this.getTempCalcRule(props);

    _this.state = {
      dyComLoading: false, // 是否正在加载动态组件
      components: [],
      calcRule: calcRule,
      activeKey: 'basicinfo' //当前选择的tabs
    };

    _this.ifSave = true; //判断是否展示保存按钮，默认展示
    _this.ifValid = false; //是否是已生效商品，默认未生效
    _this.itemId = '';
    _this.location = '';
    _this.edit = false; //编辑状态
    _this.editStatus = false; //已发布商品，并且是第一次编辑状态
    _this.editData = {}; //编辑状态,保存用户属性
    _this.saleAttributeData = []; //保存销售规格接口数据
    _this.itemTmplPublishVo = {}; //保存回显的总数据
    _this.cid = null; //保存选中的cid
    _this.templateId = null; //保存取到的TemplateId
    _this.hasChannel = false; //判断是否加载了渠道组件
    _this.newType = false; //是否是从供货申请审核页面进入的编辑页
    _this.cidChangedTimes = 0; // 类目变化了几次
    return _this;
  }

  //编辑状态,初始化设置用户属性


  (0, _createClass3.default)(ReleaseViewWrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.location = typeof window !== 'undefined' ? window.location.href : "";
      this.itemId = this.getUrlParam(this.location, 'itemId');
      this.getItemStatus();
      // 如果是编辑，获取编辑数据源
      if (this.edit) {
        this.props.getItemInfoAction(this.props.type, { itemId: this.itemId });
      }

      // 如果是店铺的话，查询其他设置/配送设置/运费模板
      if (this.props.type == '3') {
        this.props.queryDeliveryFareTemplate();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      //根据cid查询templateId
      // 更换了类目（即cid变化）
      if (nextProps.saveParamsRedux.itemTmplPublishVo && nextProps.saveParamsRedux.itemTmplPublishVo.cid && nextProps.saveParamsRedux.itemTmplPublishVo.cid != this.cid) {
        if (this.cid) {
          this.cidChangedTimes = this.cidChangedTimes + 1;
        }
        this.cid = nextProps.saveParamsRedux.itemTmplPublishVo.cid;
        var tmplParams = { cid: this.cid };
        this.setState({
          dyComLoading: true
        });
        if (this.cid) {
          // 重新获取模板id
          this.props.queryGetTemplateId(tmplParams, this.props.type).then(function (res) {
            if (res.code == 0) {
              _this2.templateId = res.data;
              // 加载动态tab组件，参数templateId
              _this2.loadDyComponents(_this2.templateId);
            } else {
              if (res.data) {
                _message3.default.error(res.data, 2);
              } else {
                _message3.default.error('获取该类目下的模板失败', 2);
              }
            }
          });
        }
        var attrParams = {
          cid: this.cid,
          itemId: this.itemId
        };
        // 获取销售规格数据源
        this.props.getSaleAttributeAction(this.props.type, this.edit, attrParams, this.editStatus);
        //已发布商品，编辑回显之后，改变状态
        if (!this.editStatus && this.edit && !this.ifSave) {
          this.editStatus = true;
        }
      }

      //编辑时：接口返回的回显数据，存储于this.itemTmplPublishVo，并将回显数据根据组件需要进行组装拼接
      if (nextProps.itemInfoRedux && nextProps.itemInfoRedux.data && nextProps.itemInfoRedux.data.data && nextProps.itemInfoRedux.data.data != this.itemTmplPublishVo) {
        this.itemTmplPublishVo = nextProps.itemInfoRedux.data.data; // 回显数据
        /** 将回显的数据做处理，方便组件使用 */
        if (this.itemTmplPublishVo.itemPicpdfVoList) {
          // 其他设置内，上传组件需要传递uid
          this.itemTmplPublishVo.itemPicpdfVoList.map(function (item, index) {
            item.uid = index;
          });
        }
        //供货信息或价格及库存数据为null时拼接一条数据
        if (this.props.type == '2' || this.props.type == '3') {
          if (this.itemTmplPublishVo.itemPerfectVo && this.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList && this.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.length > 0) {
            this.itemTmplPublishVo.itemTmplSkuVoList.map(function (statusItem) {
              _this2.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (skuItem, skuIndex) {
                if (skuItem.skuId == statusItem.id) {
                  if (skuItem && skuItem.areaPriceList == null) {
                    skuItem.areaPriceList = [{ 'areaId': 0, 'areaName': "全国", 'areaNumber': 1, 'supplyPrice': null }];
                  }
                  if (skuItem && skuItem.areaPriceList.length == 0) {
                    skuItem.areaPriceList = [{ 'areaId': 0, 'areaName': "全国", 'areaNumber': 1, 'supplyPrice': null }];
                  }
                }
              });
            });
          } else {
            _message3.default.error('获取供货信息失败', 2);
            this.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[0] = {};
            this.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[0].areaPriceList = [{ 'areaId': 0, 'areaName': "全国", 'areaNumber': 1, 'supplyPrice': null }];
          }
        }

        // 销售信息组件，处理扩展列
        if (this.itemTmplPublishVo.itemTmplSkuVoList) {
          this.itemTmplPublishVo.itemTmplSkuVoList.map(function (item, index) {
            var extendSkuFields = item.extendSkuFields;
            if (extendSkuFields && extendSkuFields.length > 0) {
              extendSkuFields.map(function (_item, _index) {
                item['extendSkuFields_' + _item.label] = { label: _item.label, value: _item.value };
              });
            }
          });
        }
        // 将回显的数据存进redux
        this.props.saveParamsAction(this.itemTmplPublishVo);
      }

      // 销售规格接口返回的数据，存储于this.saleAttributeData
      if (nextProps.saleAttributeRedux && nextProps.saleAttributeRedux.data && nextProps.saleAttributeRedux.data.data && nextProps.saleAttributeRedux.data.data != this.saleAttributeData) {
        this.saleAttributeData = nextProps.saleAttributeRedux.data.data;
        var checkedAttributes = this.itemTmplPublishVo && this.itemTmplPublishVo.checkedAttributes ? this.itemTmplPublishVo.checkedAttributes : [];

        var saleAttributeData = [];
        // 如果更换了类目，则销售规格均是未选中状态，否则添加checked = true的字段
        if (this.cidChangedTimes > 0) {
          saleAttributeData = this.saleAttributeData;
        } else {
          // 拼接 checked = true 的销售规格数据源
          saleAttributeData = this.initDataSourceWithCheckedAttr(checkedAttributes, this.saleAttributeData);
        }

        //将拼接后的数据存进redux
        this.props.saveSkuListAction(saleAttributeData);
      }

      // 店铺时，销售信息表格列是否需要根据模板进行列的校验
      var calcRule = this.getTempCalcRule(nextProps);
      this.setState({
        calcRule: calcRule
      });
    }

    /**
     * 动态加载组件
     * @param templateId 模板Id
     */


    /**
     * 店铺时，根据总数据源中的freightTmplVo.tmplId 和 运费模板数据源
     * 找出销售信息组件哪个列需要进行校验：按体积，按重量，按件数
     */


    //更新销售规格数据的方法


    //获取拼接后销售规格数据
    // getNewSaleAttributeAction = () =>{
    //   return this.props.saveSkuListRedux.skuListData;
    // }

    //获取当前已保存数据


    //更新总数据的方法

  }, {
    key: 'loadInstance',
    value: function loadInstance(components) {
      var that = this;
      var instances = {};
      components && (0, _keys2.default)(components).map(function (hook) {
        components[hook].map(function (value) {
          if (value["signature"]) {
            var props = {};
            //处理config-->json.parse
            props = JSON.parse(value['config']);
            //处理moduleConfig-->json.parse,eval
            var sourceModuleProps = JSON.parse(value['moduleConfig']);
            //合并config
            props = (0, _assign2.default)(props ? props : {}, sourceModuleProps ? sourceModuleProps : {});

            var Ins = (0, _reactLoadable2.default)({
              loader: function loader() {
                return import('../../..' + '/' + value["signature"] + '/' + value["version"] + '/view/index').then(function (object) {
                  return object.default;
                });
              },
              modules: ['../../..' + '/' + value["signature"] + '/' + value["version"] + '/view/index'],
              webpack: function webpack() {
                return [require.resolveWeak('../../..' + '/' + value["signature"] + '/' + value["version"] + '/view/index')];
              },
              loading: Loading,
              delay: 300,
              render: function render(loaded) {
                var Component = loaded;
                return _react2.default.createElement(Component, (0, _extends3.default)({}, props, {
                  components: that.state.components,
                  type: that.props.type,
                  key: 'tabs_' + value["signature"],
                  ifSave: that.ifSave,
                  ifValid: that.ifValid,
                  itemId: that.itemId,
                  edit: that.edit,
                  editStatus: that.editStatus,
                  editData: that.editData,
                  setEditData: that.setEditData,
                  getSaleAttributeAction: that.props.getSaleAttributeAction //请求销售规格接口的方法
                  , saleAttributeData: that.props.saveSkuListRedux && that.props.saveSkuListRedux.skuListData || [] //拼接后的销售规格数据
                  , updateSaleAttributeAction: that.updateSaleAttributeAction //更新销售规格数据的方法
                  , updateItemTmplAction: that.updateItemTmplAction //更新总数据的方法
                  , itemTmplPublishVo: that.props.saveParamsRedux && that.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
                }));
              }
            });
            // debugger;
            instances[hook] = instances[hook] || [];
            if (hook.indexOf('HOOK_TABS') >= 0) {
              instances[hook].push({ tabTitle: props.tabTitle || '无用Tab测试', Com: Ins });
            } else {
              instances[hook].push(Ins);
            }
          }
        });
      });
      return instances;
    }

    //获取url传递的参数

  }, {
    key: 'getUrlParam',
    value: function getUrlParam(url, name) {
      var pattern = new RegExp('[?&]' + name + '\=([^&]+)', 'g');
      var matcher = pattern.exec(url);
      var items = null;
      if (matcher !== null) {
        try {
          items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
          try {
            items = decodeURIComponent(matcher[1]);
          } catch (e) {
            items = matcher[1];
          }
        }
      }
      return items;
    }

    //获取该商品的状态值


    // 重新构造销售规格数据源，添加上是否checked

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _tabs2.default,
          { defaultActiveKey: 'basicinfo', animated: false, onTabClick: this.onTabClick, activeKey: this.state.activeKey },
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                { className: _index7.default.tabIcon },
                _react2.default.createElement(
                  'i',
                  null,
                  '*'
                ),
                '\u57FA\u7840\u4FE1\u606F'
              ), key: 'basicinfo' },
            _react2.default.createElement(_view2.default, {
              components: this.state.components,
              ifSave: this.ifSave,
              dyComLoading: this.state.dyComLoading,
              ifValid: this.ifValid,
              templateId: this.templateId,
              type: this.props.type,
              editStatus: this.editStatus,
              editData: this.editData,
              setEditData: this.setEditData,
              saleAttributeData: this.props.saveSkuListRedux && this.props.saveSkuListRedux.skuListData || [] //拼接后的销售规格数据
              , updateSaleAttributeAction: this.updateSaleAttributeAction //更新销售规格数据的方法
              , updateItemTmplAction: this.updateItemTmplAction //更新总数据的方法
              , itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo // 发布、保存、编辑，总数据源
            })
          ),
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                { className: _index7.default.tabIcon },
                _react2.default.createElement(
                  'i',
                  null,
                  '*'
                ),
                '\u5546\u54C1\u56FE\u7247'
              ), key: 'image' },
            this.props.type == '1' ? _react2.default.createElement(_index3.default, {
              saleAttributeData: this.props.saveSkuListRedux && this.props.saveSkuListRedux.skuListData || [] //拼接后的销售规格数据
              , updateItemTmplAction: this.updateItemTmplAction //更新总数据的方法
              , itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
            }) : _react2.default.createElement(_index5.default, {
              saleAttributeData: this.props.saveSkuListRedux && this.props.saveSkuListRedux.skuListData || [] //拼接后的销售规格数据
              , updateItemTmplAction: this.updateItemTmplAction //更新总数据的方法
              , itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
            })
          ),

          /* 动态加载tab组件 */
          (this.state.components['HOOK_TABS_' + this.templateId] || []).map(function (item, i) {
            var Com = item.Com;
            return _react2.default.createElement(
              TabPane,
              { tab: item.tabTitle, key: 'tab_' + i },
              _react2.default.createElement(Com, null)
            );
          }),
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                { className: _index7.default.tabIcon },
                _react2.default.createElement(
                  'i',
                  null,
                  '*'
                ),
                '\u5176\u4ED6\u8BBE\u7F6E'
              ), key: 'other' },
            _react2.default.createElement(_view4.default, {
              type: this.props.type,
              itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
              , updateItemTmplAction: this.updateItemTmplAction
            })
          ),
          this.props.type == 3 ?
          /* 动态加载tab组件 */
          _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                { className: _index7.default.tabIcon },
                _react2.default.createElement(
                  'i',
                  null,
                  '*'
                ),
                '\u4EF7\u683C\u53CA\u5E93\u5B58'
              ), key: 'priceAndStock' },
            (this.state.components['HOOK_PRICE_STOCK_TABS_' + this.templateId] || []).map(function (item, i) {
              var Com = item;
              return _react2.default.createElement(Com, {
                key: 'tab_' + i,
                edit: _this3.edit,
                type: _this3.props.type,
                itemTmplPublishVo: _this3.props.saveParamsRedux && _this3.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
                , updateItemTmplAction: _this3.updateItemTmplAction
              });
            })
          ) : null,
          this.props.type == 2 ? _react2.default.createElement(
            TabPane,
            { tab: _react2.default.createElement(
                'span',
                { className: _index7.default.tabIcon },
                _react2.default.createElement(
                  'i',
                  null,
                  '*'
                ),
                '\u4F9B\u8D27\u4FE1\u606F'
              ), key: 'supplyInfo' },
            _react2.default.createElement(_view8.default, {
              edit: this.edit,
              type: this.props.type,
              itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
              , updateItemTmplAction: this.updateItemTmplAction })
          ) : null
        ),
        _react2.default.createElement(_view10.default, {
          ifSave: this.ifSave,
          ifValid: this.ifValid,
          itemId: this.itemId,
          edit: this.edit,
          type: this.newType ? '0' : this.props.type,
          calcRule: this.state.calcRule // 店铺时，根据该字段判断销售信息表格校验列
          , updateItemTmplAction: this.updateItemTmplAction //更新总数据的方法
          , itemTmplPublishVo: this.props.saveParamsRedux && this.props.saveParamsRedux.itemTmplPublishVo //当前已保存的总数据
          , hasChannel: this.hasChannel //是否加载了渠道组件
        })
      );
    }
  }]);
  return ReleaseViewWrap;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.setEditData = function (name, data) {
    _this4.editData[name] = data;
  };

  this.loadDyComponents = function (templateId) {
    _this4.props.loadTabComponents({ templateId: templateId }).then(function (result) {
      var data = result && result.data || {};
      var releaseSaleSpecification_index = -1; // 返回数据里是否有销售规格组件
      var releaseSaleInfo_index = -1; // 返回数据里是否有销售信息组件
      var shopCategory_index = -1; // 返回数据里是否有店铺分类组件
      var secondCategory_index = -1; // 返回数据里是否有第二分类组件
      if (!data['HOOK_BASIC_INFO_' + templateId]) {
        data['HOOK_BASIC_INFO_' + templateId] = [];
      }
      // 销售规格组件内带销售信息组件，如果重复，排除掉销售信息组件
      data['HOOK_BASIC_INFO_' + templateId].map(function (item, index) {
        if (item.signature == 'ReleaseChannel') {
          _this4.hasChannel = true;
        }
        if (item.signature == 'BasicShopCategory') {
          shopCategory_index = index;
        }
        if (item.signature == 'BasicSecondCategory') {
          secondCategory_index = index;
        }
        if (item.signature == 'ReleaseSaleSpecification') {
          releaseSaleSpecification_index = index;
        }
        if (item.signature == 'ReleaseSaleInfo') {
          releaseSaleInfo_index = index;
        }
      });

      var releaseSaleSpecification_com = {
        componentName: "商品发布/编辑-基础信息/销售规格",
        config: "{}",
        moduleConfig: "{}",
        signature: "ReleaseSaleSpecification",
        version: "v1.0.0"
      };

      var releaseSaleInfo_com = {
        componentName: "商品发布/编辑-基础信息/销售信息",
        config: "{}",
        moduleConfig: "{}",
        signature: "ReleaseSaleInfo",
        version: "v1.0.0"
      };

      // 有销售规格， 没有销售信息，在销售规格后面添加销售信息
      if (releaseSaleSpecification_index >= 0 && releaseSaleInfo_index < 0) {

        data['HOOK_BASIC_INFO_' + templateId].splice(releaseSaleSpecification_index + 1, 0, releaseSaleInfo_com);
      } else if (releaseSaleSpecification_index < 0 && releaseSaleInfo_index >= 0) {

        // 没有销售规格，有销售信息，在销售信息前面添加销售规格
        data['HOOK_BASIC_INFO_' + templateId].splice(releaseSaleInfo_index, 0, releaseSaleSpecification_com);
      } else if (releaseSaleSpecification_index < 0 && releaseSaleInfo_index < 0) {

        // 既没有销售规格，也没有销售信息
        data['HOOK_BASIC_INFO_' + templateId].push(releaseSaleSpecification_com);
        data['HOOK_BASIC_INFO_' + templateId].push(releaseSaleInfo_com);
      }

      //非店铺页面排除掉店铺分类组件
      if (_this4.props.type != 3 && shopCategory_index >= 0) {
        data['HOOK_BASIC_INFO_' + templateId].splice(shopCategory_index, 1);
      }
      // 店铺页面排除掉第二分类
      if (_this4.props.type == 3 && secondCategory_index >= 0) {
        data['HOOK_BASIC_INFO_' + templateId].splice(secondCategory_index, 1);
      }
      // 添加管理员信息组件，该组件一直存在
      data['HOOK_BASIC_INFO_' + templateId].push({
        componentName: "商品发布/编辑-基础信息/管理员信息组件",
        config: "{}",
        moduleConfig: "{}",
        signature: "AdminInformation",
        version: "v1.0.0"
      });
      var components = _this4.loadInstance(data);
      _this4.setState({
        dyComLoading: false,
        components: components
      });
    }, function (error) {
      console.log(error);
    });
  };

  this.getTempCalcRule = function (props) {
    var calcRule = undefined;
    if (props.type == '3') {
      var tempDS = props.tempRedux && props.tempRedux.data || [];
      var itemTmplPublishVo = props.saveParamsRedux && props.saveParamsRedux.itemTmplPublishVo || {};
      var tmplId = itemTmplPublishVo.freightTmplVo && itemTmplPublishVo.freightTmplVo.tmplId || undefined;
      tempDS.forEach(function (item) {
        if (item.id == tmplId) {
          calcRule = item.calcRule;
          return false;
        }
      });
    }
    return calcRule;
  };

  this.updateSaleAttributeAction = function (data) {
    _this4.props.saveSkuListAction(data);
  };

  this.getParamsAction = function () {
    return _this4.props.saveParamsRedux;
  };

  this.updateItemTmplAction = function (data) {
    _this4.props.saveParamsAction(data);
  };

  this.getItemStatus = function () {
    var ifPublish = false; //发布状态，默认未发布
    var ifPass = false; //审核状态，默认未审核或未通过
    var supplyStatus = _this4.getUrlParam(_this4.location, 'supplyStatus');
    var itemStatus = _this4.getUrlParam(_this4.location, 'itemStatus');
    var storeStatus = _this4.getUrlParam(_this4.location, 'storeStatus');
    _this4.newType = _this4.getUrlParam(_this4.location, 'newType');
    if (itemStatus) {
      //店铺编辑
      _this4.edit = true;
      if (itemStatus != 100) {
        //已发布
        ifPublish = true;
        if (itemStatus != 70) {
          //审核通过
          ifPass = true;
        }
      }
    } else if (supplyStatus) {
      //供应商编辑
      _this4.edit = true;
      if (supplyStatus != 10) {
        //已发布
        ifPublish = true;
        if (supplyStatus != 30) {
          //审核通过
          ifPass = true;
        }
      }
    } else if (storeStatus) {
      //平台编辑
      _this4.edit = true;
      if (storeStatus != 10) {
        //已发布
        ifPublish = true;
      }
      ifPass = true; //平台发布的商品无需审核
    }
    _this4.ifSave = !ifPublish; //未发布时展示保存按钮
    if (ifPublish && ifPass) {
      //未发布或已驳回状态是未生效数据，已发布并且审核通过则是已生效数据
      _this4.ifValid = true;
    }
  };

  this.initDataSourceWithCheckedAttr = function (checkedAttr, dataSource) {
    var new_checkedAttr = {};
    checkedAttr.forEach(function (item) {
      new_checkedAttr[item.attrId] = item.attrValueIds;
    });
    dataSource.forEach(function (item) {
      (new_checkedAttr[item.attrId] || []).forEach(function (checkedValueId) {
        item.platformCategoryAttributeValues.forEach(function (valueItem) {
          if (valueItem.attrValueId == checkedValueId) {
            valueItem.checked = true;
          }
        });
      });
    });
    return dataSource;
  };

  this.onTabClick = function (e) {
    if (_this4.cid) {
      _this4.setState({ activeKey: e });
    } else {
      _message3.default.error("请先选择平台分类！");
    }
  };
}, _temp);
exports.default = ReleaseViewWrap;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseViewWrap.js.map