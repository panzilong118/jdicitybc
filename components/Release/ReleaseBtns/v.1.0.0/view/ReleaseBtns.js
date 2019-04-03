'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _button = require('jdcloudui/lib/button');

var _button2 = _interopRequireDefault(_button);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _layout = require('jdcloudui/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _dec, _dec2, _class; /**
                          * @file 发布商品-商品发布、保存、取消 按钮组件
                          */


require('jdcloudui/lib/button/style');

require('jdcloudui/lib/message/style');

require('jdcloudui/lib/layout/style');

require('jdcloudui/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _reactRedux = require('react-redux');

var _inject = require('../../../../../../../src/redux/inject');

var _inject2 = _interopRequireDefault(_inject);

var _itemsave_redux = require('./redux/itemsave_redux');

var _itemsave_redux2 = _interopRequireDefault(_itemsave_redux);

var _itemsubmit_redux = require('./redux/itemsubmit_redux');

var _itemsubmit_redux2 = _interopRequireDefault(_itemsubmit_redux);

var _addlibrary_redux = require('./redux/addlibrary_redux');

var _addlibrary_redux2 = _interopRequireDefault(_addlibrary_redux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirm = _modal2.default.confirm;
var Footer = _layout2.default.Footer;
var ReleaseBtns = (_dec = (0, _inject2.default)({
  querySaveItemRedux: _itemsave_redux2.default,
  querySubmitItemRedux: _itemsubmit_redux2.default,
  addLibraryItemRedux: _addlibrary_redux2.default
}), _dec2 = (0, _reactRedux.connect)(function (store) {
  return {
    querySaveItemRedux: store.querySaveItemRedux,
    querySubmitItemRedux: store.querySubmitItemRedux,
    addLibraryItemRedux: store.addLibraryItemRedux
  };
}, {
  querySaveItem: _itemsave_redux.querySaveItem,
  querySubmitItem: _itemsubmit_redux.querySubmitItem,
  addLibraryItem: _addlibrary_redux.addLibraryItem
}), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(ReleaseBtns, _Component);

  function ReleaseBtns(props) {
    (0, _classCallCheck3.default)(this, ReleaseBtns);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseBtns.__proto__ || (0, _getPrototypeOf2.default)(ReleaseBtns)).call(this, props));

    _this.handleSubmit = function () {
      console.log('商品发布');
      var itemTmplPublishVo = _this.props.itemTmplPublishVo;
      var itemTmplSkuVoList = itemTmplPublishVo.itemTmplSkuVoList;
      var isRule = true;
      if (!itemTmplPublishVo.itemName) {
        _message3.default.error('请输入商品名称！');
        isRule = false;
        return;
      }
      if (!itemTmplPublishVo.cid) {
        _message3.default.error('请选择平台分类！');
        isRule = false;
        return;
      }
      if (itemTmplPublishVo.cid == itemTmplPublishVo.secondCid) {
        _message3.default.error('第二分类不能与平台分类相同！');
        isRule = false;
        return;
      }
      if (!itemTmplPublishVo.itemPicVoList || itemTmplPublishVo.itemPicVoList.length == 0 || !itemTmplPublishVo.itemPicVoList[0].url) {
        _message3.default.error('请上传商品图片！');
        isRule = false;
        return;
      }
      if (_this.props.calcRule) {
        if (_this.props.calcRule == 3) {
          console.log('运费模板为按体积计算运费类型');
          var error = false;
          itemTmplSkuVoList.map(function (item, index) {
            if (item.skuStatus == 1) {
              if (!item.length || !item.width || !item.height) {
                error = true;
                return;
              }
            }
          });
          if (error) {
            _message3.default.error('请完善商品的长、宽、高信息！');
            isRule = false;
            return;
          }
        } else if (_this.props.calcRule == 1) {
          console.log('运费模板为按重量计算运费类型');
          var _error = false;
          itemTmplSkuVoList.map(function (item, index) {
            if (item.skuStatus == 1) {
              if (!item.weight) {
                _error = true;
                return;
              }
            }
          });
          if (_error) {
            _message3.default.error('请完善商品的毛重信息！');
            isRule = false;
            return;
          }
        }
      }

      if (_this.props.type == 2) {
        console.log('校验供货信息内容');
        if (!itemTmplPublishVo.itemPerfectVo.placeDeliveryId) {
          _message3.default.error('请选择发货地！');
          isRule = false;
          return;
        }
        if (!itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList || itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.length == 0) {
          _message3.default.error('请完善供货信息！');
          isRule = false;
          return;
        } else {
          if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.length == 1) {
            if (itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[0].supplyStatus == 0) {
              console.log('只有一条sku，且已经置灰');
              _message3.default.error('至少供应一个sku！');
              isRule = false;
              return;
            }
          } else {
            var allDisable = true;
            itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item, index) {
              if (item.supplyStatus == 1) {
                allDisable = false;
                return;
              }
            });
            if (allDisable) {
              console.log('所有sku都已置灰');
              _message3.default.error('至少供应一个sku！');
              isRule = false;
              return;
            }
          }

          itemTmplPublishVo.itemTmplSkuVoList.map(function (statusItem) {
            if (statusItem.attributes && statusItem.attributes.length > 0) {
              if (statusItem.skuStatus == 1) {
                var statusItemArr = [];
                statusItem.attributes.map(function (aidItem, aidIndex) {
                  statusItemArr.push(aidItem.aid, aidItem.vid);
                });
                itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (preSkuItem) {
                  var skuItemArr = [];
                  preSkuItem.attributes.map(function (preaidItem, preaidIndex) {
                    skuItemArr.push(preaidItem.aid, preaidItem.vid);
                  });
                  console.log((0, _stringify2.default)(statusItemArr), (0, _stringify2.default)(skuItemArr), (0, _stringify2.default)(statusItemArr) == (0, _stringify2.default)(skuItemArr));
                  if ((0, _stringify2.default)(statusItemArr) == (0, _stringify2.default)(skuItemArr)) {
                    if (preSkuItem.supplyStatus == 1) {
                      if (!preSkuItem.inventory) {
                        _message3.default.error('请完善常规备货信息！');
                        isRule = false;
                        return;
                      }
                      if (preSkuItem.areaPriceList.length == 0) {
                        _message3.default.error('请完善供货价！');
                        isRule = false;
                        return;
                      } else {
                        preSkuItem.areaPriceList.map(function (_item, _index) {
                          if (_item.areaId == 0) {
                            if (!_item.supplyPrice || _item.supplyPrice == 0) {
                              _message3.default.error('请完善供货价！');
                              isRule = false;
                              return;
                            }
                          }
                        });
                      }
                    }
                  }
                });
              }
            } else {
              itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item, index) {
                if (item.supplyStatus == 1) {
                  if (!item.inventory) {
                    _message3.default.error('请完善常规备货信息！');
                    isRule = false;
                    return;
                  }
                  if (item.areaPriceList.length == 0) {
                    _message3.default.error('请完善供货价！');
                    isRule = false;
                    return;
                  } else {
                    item.areaPriceList.map(function (_item, _index) {
                      if (_item.areaId == 0) {
                        if (!_item.supplyPrice || _item.supplyPrice == 0) {
                          _message3.default.error('请完善供货价！');
                          isRule = false;
                          return;
                        }
                      }
                    });
                  }
                }
              });
            }
          });
        }
      }

      if (_this.props.type == 3) {
        //校验运费模板
        if (itemTmplPublishVo.freightTmplVo && !itemTmplPublishVo.freightTmplVo.tmplId) {
          _message3.default.error('请选择运费模板！');
          isRule = false;
          return;
        }
        //校验库存
        var noInventory = false;
        itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList.map(function (item, index) {
          if (!item.inventory && item.inventory != 0) {
            noInventory = true;
            isRule = false;
            return;
          }
        });
        if (noInventory) {
          _message3.default.error('请完善常规备货信息！');
        }
      }

      if (_this.props.type == 1 || _this.props.type == 0) {
        console.log('验证平台商品运营人员');
        if (!itemTmplPublishVo.operatorId) {
          _message3.default.error('请选择运营人员！');
          isRule = false;
          return;
        }
      }

      if (isRule) {
        console.log('符合校验，可以发布');
        _this.setState({
          submitting: true
        });
        //处理数据
        var _itemTmplSkuVoList = itemTmplPublishVo.itemTmplSkuVoList;
        _itemTmplSkuVoList.map(function (item, index) {
          var extendSkuFields = [];
          for (var label in item) {
            if (label.indexOf('extendSkuFields_') != -1) {
              extendSkuFields.push(item[label]);
              delete item[label];
            }
          }
          item.extendSkuFields = extendSkuFields;
        });
        var itemPicpdfVoList = itemTmplPublishVo.itemPicpdfVoList;
        itemPicpdfVoList.map(function (item, index) {
          delete item.uid;
        });
        if (!_this.props.hasChannel) {
          console.log('未加载渠道组件，初始化数据');
          itemTmplPublishVo.channelArr = [1, 2, 3, 4, 5, 6];
        }
        //处理图片数据
        var itemSkuPicVoList = itemTmplPublishVo.itemSkuPicVoList;
        var picUrl = itemTmplPublishVo.itemPicVoList[0].url;
        if (itemSkuPicVoList && itemSkuPicVoList.length > 0) {
          itemSkuPicVoList.map(function (item, index) {
            if (!item.url) {
              item.url = picUrl;
            }
          });
        }
        console.log('------------拼接后的数据');
        console.log(itemTmplPublishVo);
        _this.props.querySubmitItem({ itemTmplPublishVo: (0, _stringify2.default)(itemTmplPublishVo) }, _this.props.type, _this.props.edit).then(function (res) {
          if (res.code == 0) {
            console.log('商品发布成功，跳转到商品列表页面');
            var url = '';
            if (_this.props.type == 1) {
              url = '/operating-item-view/item-base';
              if (_this.props.edit && !_this.props.ifSave) {
                window.location.href = url;
              } else {
                _this.showConfirm(itemTmplPublishVo, url);
              }
            } else if (_this.props.type == 2) {
              url = '/item-shop-view/iteminfo';
              window.location.href = url;
            } else if (_this.props.type == 3) {
              url = '/item-shop-view/productsmanage';
              window.location.href = url;
            } else if (_this.props.type == 0) {
              url = '/operating-item-view/supply-audit';
              window.location.href = url;
            }
          } else {
            if (res.msg) {
              _message3.default.error(res.msg, 2);
            } else {
              _message3.default.error('商品发布失败', 2);
            }
            if (itemTmplPublishVo.itemPicpdfVoList) {
              itemTmplPublishVo.itemPicpdfVoList.map(function (item, index) {
                item.uid = index;
              });
            }
            console.log(itemTmplPublishVo);
            _this.props.updateItemTmplAction(itemTmplPublishVo);
          }
          _this.setState({
            submitting: false
          });
        });
      }
    };

    _this.handleSave = function () {
      console.log('商品保存');
      var itemTmplPublishVo = _this.props.itemTmplPublishVo;
      var itemTmplSkuVoList = itemTmplPublishVo.itemTmplSkuVoList;
      var isRule = true;
      if (!itemTmplPublishVo.itemName) {
        _message3.default.error('请输入商品名称！');
        isRule = false;
        return;
      }
      if (!itemTmplPublishVo.cid) {
        _message3.default.error('请选择平台分类！');
        isRule = false;
        return;
      }
      if (!itemTmplPublishVo.itemPicVoList || itemTmplPublishVo.itemPicVoList.length == 0 || !itemTmplPublishVo.itemPicVoList[0].url) {
        _message3.default.error('请上传商品图片！');
        isRule = false;
        return;
      }
      if (isRule) {
        _this.setState({
          submitting: true
        });
        //处理数据
        var _itemTmplSkuVoList2 = itemTmplPublishVo.itemTmplSkuVoList;
        _itemTmplSkuVoList2.map(function (item, index) {
          var extendSkuFields = [];
          for (var label in item) {
            if (label.indexOf('extendSkuFields_') != -1) {
              extendSkuFields.push(item[label]);
              delete item[label];
            }
          }
          item.extendSkuFields = extendSkuFields;
        });
        var itemPicpdfVoList = itemTmplPublishVo.itemPicpdfVoList;
        itemPicpdfVoList.map(function (item, index) {
          delete item.uid;
        });
        //处理图片数据
        var itemSkuPicVoList = itemTmplPublishVo.itemSkuPicVoList;
        var picUrl = itemTmplPublishVo.itemPicVoList[0].url;
        if (itemSkuPicVoList && itemSkuPicVoList.length > 0) {
          itemSkuPicVoList.map(function (item, index) {
            if (!item.url) {
              item.url = picUrl;
            }
          });
        }
      }
      console.log('------------拼接后的数据');
      console.log(itemTmplPublishVo);

      _this.props.querySaveItem({ itemTmplPublishVo: (0, _stringify2.default)(itemTmplPublishVo) }, _this.props.type, _this.props.edit).then(function (res) {
        if (res.code == 0) {
          console.log('商品保存成功，跳转到商品列表页面');
          var url = '';
          if (_this.props.type == 1) {
            url = '/operating-item-view/item-base';
          } else if (_this.props.type == 2) {
            url = '/item-shop-view/iteminfo';
          } else if (_this.props.type == 3) {
            url = '/item-shop-view/productsmanage';
          } else if (_this.props.type == 0) {
            url = '/operating-item-view/supply-audit';
          }
          window.location.href = url;
        } else {
          if (res.msg) {
            _message3.default.error(res.msg, 2);
          } else {
            _message3.default.error('商品保存失败', 2);
          }
        }
        _this.setState({
          submitting: false
        });
      });
    };

    _this.handleCancel = function () {
      console.log('取消发布，跳转到商品列表页');
      var url = '';
      if (_this.props.type == 1) {
        url = '/operating-item-view/item-base';
      } else if (_this.props.type == 2) {
        url = '/item-shop-view/iteminfo';
      } else if (_this.props.type == 3) {
        url = '/item-shop-view/productsmanage';
      } else if (_this.props.type == 0) {
        url = '/operating-item-view/supply-audit';
      }
      window.location.href = url;
    };

    _this.showConfirm = function (itemTmplPublishVo, url) {
      var addLibraryItem = _this.props.addLibraryItem.bind(_this);
      confirm({
        title: '',
        content: '确定同步该商品到标准库吗？',
        onOk: function onOk() {
          console.log('OK');
          addLibraryItem({ itemTmplPublishVo: (0, _stringify2.default)(itemTmplPublishVo) }).then(function (res) {
            _message3.default.success('同步到标准库成功！');
            window.location.href = url;
          });
        },
        onCancel: function onCancel() {
          console.log('Cancel');
          window.location.href = url;
        }
      });
    };

    _this.state = {
      submitting: false //正在保存中状态
    };
    return _this;
  }

  //发布


  //保存


  //取消


  (0, _createClass3.default)(ReleaseBtns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'footer-btns' },
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', size: 'large', onClick: this.handleSubmit, loading: this.state.submitting, className: 'mr10'
            },
            '\u53D1\u5E03'
          ),
          this.props.ifSave && this.props.type != 2 ? _react2.default.createElement(
            _button2.default,
            { type: 'primary', size: 'large', onClick: this.handleSave, loading: this.state.submitting, className: 'mr10'
            },
            '\u4FDD\u5B58'
          ) : null,
          _react2.default.createElement(
            _button2.default,
            { size: 'large', onClick: this.handleCancel
            },
            '\u53D6\u6D88'
          )
        )
      );
    }
  }]);
  return ReleaseBtns;
}(_react.Component)) || _class) || _class);
exports.default = ReleaseBtns;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseBtns.js.map