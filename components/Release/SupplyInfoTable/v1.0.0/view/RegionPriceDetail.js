'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _popover = require('jdcloudui/lib/popover');

var _popover2 = _interopRequireDefault(_popover);

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

require('jdcloudui/lib/popover/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RegionPriceDetail = require('./style/RegionPriceDetail.less');

var _RegionPriceDetail2 = _interopRequireDefault(_RegionPriceDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2017/3/20.
 * 店铺发布和编辑商品时的地域价查看组件
 */

var RegionPriceDetail = function (_Component) {
  (0, _inherits3.default)(RegionPriceDetail, _Component);

  function RegionPriceDetail(props, context) {
    (0, _classCallCheck3.default)(this, RegionPriceDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RegionPriceDetail.__proto__ || (0, _getPrototypeOf2.default)(RegionPriceDetail)).call(this, props, context));

    _this.handleVisibleChange = function (visible) {
      console.log(visible);
      _this.setState({ visible: visible });
    };

    _this.state = {
      visible: false,
      visiblePop: {}
    };
    _this.sourceData = [];
    _this.totalPrice = '';
    return _this;
  }

  //  componentWillReceiveProps(){
  //     this.sourceData = this.regionDataTransform();
  //  }


  (0, _createClass3.default)(RegionPriceDetail, [{
    key: 'regionDataTransform',
    value: function regionDataTransform() {
      console.log('--------------regionData');
      var priceList = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index] ? this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList : [];
      console.log(priceList);
      var result = [];
      var price = '';
      var areaStr = '';
      var arrArea = [];
      if (priceList.length > 0) {
        for (var j in priceList) {
          if (priceList[j].areaId == 0 || priceList[j].areaId == '0') {
            this.totalPrice = priceList[j].supplyPrice;
            // arrArea = priceList.splice(j,1);
          }
        }
      }
      console.log(arrArea);

      if (priceList.length > 0) {
        price = priceList[0].supplyPrice;
        for (var k in priceList) {
          if (price === priceList[k].supplyPrice) {
            price = priceList[k].supplyPrice;
            areaStr = areaStr + priceList[k].areaName + ' ';
          } else {
            result.push({ price: price, areaStr: areaStr });
            price = priceList[k].supplyPrice;
            areaStr = priceList[k].areaName + ' ';
          }
        }
        result.push({ price: price, areaStr: areaStr });
      }
      // if(arrArea && arrArea.length){
      //   result.unshift({price:arrArea[0].supplyPrice,areaStr:arrArea[0].areaName})
      // }
      result.shift();
      console.log(result);
      return result;
    }

    //from areaList

  }, {
    key: 'skuParamListTransform',
    value: function skuParamListTransform() {
      var priceList = this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index] ? this.props.itemTmplPublishVo.itemPerfectVo.preSkuPriceVoList[this.props.index].areaPriceList : [];
      console.log('------------------areaList');
      var resultarr = [];
      if (priceList.length > 0) {
        var _areaStr = '';
        price = priceList[0].supplyPrice;
        for (var k in priceList) {
          if (price === priceList[k].supplyPrice) {
            price = priceList[k].supplyPrice;
            _areaStr = _areaStr + priceList[k].areaName + ' ';
          } else {
            resultarr.push({ price: price, areaStr: _areaStr });
            price = priceList[k].supplyPrice;
            _areaStr = priceList[k].areaName + ' ';
          }
        }
        resultarr.push({ price: price, areaStr: _areaStr });
      }
      var sourceData = resultarr;
      console.log(sourceData);
      var result = [];
      var price = '';
      var areaStr = '';
      for (var k in sourceData) {
        var areaNames = sourceData[k] && sourceData[k].areaStr && sourceData[k].areaStr.split(' ') || [];
        areaStr = '';
        for (var i = 0; i < areaNames.length; ++i) {
          if (areaNames[i] != '全国') {
            areaStr += areaNames[i] + ' ';
          } else {
            this.totalPrice = sourceData[k].price;
          }
        }
        if (areaStr != '') {
          console.log('area');
          price = sourceData[k].price;
          result.push({ price: price, areaStr: areaStr });
        }
      }
      console.log(result);
      return result;
    }
  }, {
    key: 'createAreaDom',
    value: function createAreaDom() {
      console.log('----------展示地域价');
      console.log(this.sourceData);
      var sourceData = this.sourceData;
      if (!this.props.edit) {
        sourceData.shift();
      }
      var result = sourceData.map(function (k) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'pt10 pb10 pl15 pr15' },
            k.areaStr
          ),
          _react2.default.createElement(
            'div',
            { className: _RegionPriceDetail2.default.areaBody },
            _react2.default.createElement(
              'div',
              { className: 'pt10 pb10 pl10 pr15' },
              _react2.default.createElement(
                'span',
                { className: _RegionPriceDetail2.default.regionPriceTitle },
                '\u4F9B\u8D27\u4EF7\uFF1A'
              ),
              _react2.default.createElement(
                'span',
                { className: _RegionPriceDetail2.default.regionPrice },
                '\uFFE5',
                k.price
              )
            )
          )
        );
      });
      return result;
    }

    //设置地域价窗口：关闭

  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.setState({
        visible: false
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
  }, {
    key: 'render',
    value: function render() {

      if (this.props.edit) {
        this.sourceData = this.regionDataTransform();
      } else {
        this.sourceData = this.skuParamListTransform();
      }
      console.log(this.sourceData);

      // let showAreaPrice = false;
      // if(this.sourceData && this.sourceData.length>0){
      var showAreaPrice = true;
      //  }

      var source = _react2.default.createElement(
        'div',
        { style: { width: '300px' } },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { className: 'f-fwb f-fs14' },
              '\u5168\u56FD\u7EDF\u4E00\u4EF7'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { className: _RegionPriceDetail2.default.regionPriceTitle, style: { paddingTop: '10px' } },
              '\u4F9B\u8D27\u4EF7\uFF1A'
            ),
            _react2.default.createElement(
              'span',
              { className: _RegionPriceDetail2.default.regionPriceCol },
              '\uFFE5',
              this.props.totalPrice ? this.props.totalPrice : this.totalPrice
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'pb10 pt20 f-fwb' },
            _react2.default.createElement(
              'span',
              { className: _RegionPriceDetail2.default.regionTitleText },
              '\u5730\u57DF\u4EF7'
            )
          ),
          showAreaPrice && _react2.default.createElement(
            'div',
            { className: _RegionPriceDetail2.default.regionPriceBody },
            showAreaPrice && this.createAreaDom()
          )
        )
      );

      return _react2.default.createElement(
        _popover2.default,
        {
          title: '\u67E5\u770B\u5730\u57DF\u4EF7',
          trigger: 'click',
          content: source,
          onVisibleChange: this.handleVisibleChange
        },
        _react2.default.createElement(
          'a',
          { className: 'ml10 text-link' },
          '\u67E5\u770B'
        )
      );
    }
  }]);
  return RegionPriceDetail;
}(_react.Component);
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import BaseComponent  from '../../Common/BaseComponent';


exports.default = RegionPriceDetail;
module.exports = exports['default'];
//# sourceMappingURL=RegionPriceDetail.js.map