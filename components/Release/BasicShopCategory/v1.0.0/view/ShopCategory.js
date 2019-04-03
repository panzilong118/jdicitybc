'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

require('jdcloudui/lib/select/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _category = require('./style/category.less');

var _category2 = _interopRequireDefault(_category);

require('./style/style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _select2.default.Option; /**
                                       * 平台分类组件：四级类目级联选择框
                                       */

var listTip = '请选择类目';
var allowClear = true;

var ShopCategory = function (_Component) {
  (0, _inherits3.default)(ShopCategory, _Component);

  function ShopCategory(props, context) {
    (0, _classCallCheck3.default)(this, ShopCategory);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ShopCategory.__proto__ || (0, _getPrototypeOf2.default)(ShopCategory)).call(this, props, context));

    _this.handleSecondCategoryChange = function (cid) {
      _this.setState({
        secondValue: cid
      });
      _this.detailIndex(cid, _this.props.getShopCidRedux.second.data.data, 2);
      _this.handleChangeCategoryValue(cid, _this.secondLeaf);
    };

    _this.handleFirstCategoryChange = function (cid) {
      _this.setState({
        firstValue: cid,
        secondValue: null,
        secondLeaf: false
      });
      _this.firstOn = true;
      _this.secondOn = true;
      _this.secondCategoryOptions = null;
      if (cid) {
        _this.detailIndex(cid, _this.props.getShopCidRedux.first.data.data, 1);
        _this.props.getSecondCid(cid).then(function (result) {
          if (result.data && result.data.length < 1) {
            if (!_this.state.firstLeaf) {

              _this.secondCategoryOptions = [];
              _this.secondOn = false;
            } else {
              _this.setState({
                secondValue: null
              });
              _this.secondCategoryOptions = null;
            }
          }
        });
      } else {
        _this.secondCategoryOptions = null;
        _this.props.clearData(1);
      }
      _this.handleChangeCategoryValue(cid, _this.firstLeaf);
    };

    _this.state = {
      firstLeaf: false, //一级类目是否是叶子节点
      secondLeaf: false, //二级类目是否是叶子节点
      firstValue: null,
      secondValue: null
    };

    _this.firstCategoryOptions = null;
    _this.secondCategoryOptions = null;
    _this.firstLeaf = false;
    _this.secondLeaf = false;

    _this.currentIndex = 0;
    _this.firstOn = true;
    _this.secondOn = false;
    _this.shopCids = ''; //用于保存类目回显数据
    return _this;
  }

  (0, _createClass3.default)(ShopCategory, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //请求一级类目
      var parentCid = -1;
      this.props.getFirstCid(parentCid);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.itemTmplPublishVo) {
        if (nextProps.itemTmplPublishVo.shopCids && nextProps.itemTmplPublishVo.shopCids != this.shopCids) {
          this.shopCids = nextProps.itemTmplPublishVo.shopCids;
          //数据回显
          var shopCids = this.shopCids.split('-');

          switch (shopCids.length) {
            case 1:
              this.setState({ firstLeaf: true });
              this.firstLeaf = true;
              this.handleFirstCategoryChange(shopCids[0]);
              return;
            case 2:
              this.setState({ secondLeaf: true });
              this.secondLeaf = true;
              this.handleFirstCategoryChange(shopCids[0]);
              this.handleSecondCategoryChange(shopCids[1]);
              return;
          }
        }
      }
    }

    //保存终极类目cid

  }, {
    key: 'handleChangeCategoryValue',
    value: function handleChangeCategoryValue(cid, ifHasLeaf) {
      var itemTmplPublishVo = this.props.itemTmplPublishVo;
      if (cid == undefined) {
        cid = null;
      }
      itemTmplPublishVo.shopCid = cid;
      this.props.updateItemTmplAction(itemTmplPublishVo);
    }
  }, {
    key: 'detailIndex',
    value: function detailIndex(cid, category, index) {
      var _this2 = this;

      //判断当前是否是根节点
      var hasLeaf = false;
      if (category && category.length > 0) {
        category.map(function (item, index) {
          if (item.cid == cid) {
            _this2.currentIndex = index;
            if (category[_this2.currentIndex].hasLeaf == 1) {
              hasLeaf = true;
            }
          }
        });
      }
      switch (index) {
        case 1:
          this.setState({ firstLeaf: hasLeaf });
          this.firstLeaf = hasLeaf;
        case 2:
          this.setState({ secondLeaf: hasLeaf });
          this.secondLeaf = hasLeaf;
      }
    }

    /**
     * 获取二级类目cid，返回组件对外提供的方法上面，供父组件使用
     * @param cid
     */


    /**
     * 查询二级类目
     * @param cid
     */

  }, {
    key: 'dataSource',
    value: function dataSource() {
      var _this3 = this;

      return {
        first: function first() {
          if (_this3.props.getShopCidRedux.first.data) {
            var firstResult = _this3.props.getShopCidRedux.first.data.data;
            if (firstResult && firstResult.length > 0) {
              _this3.firstCategoryOptions = firstResult.map(function (first) {
                return _react2.default.createElement(
                  Option,
                  { title: first.cName, key: first.cid },
                  first.cName
                );
              });
            }
          }
        },
        second: function second() {
          if (_this3.props.getShopCidRedux.second.data) {
            var secondResult = _this3.props.getShopCidRedux.second.data.data;
            if (secondResult && secondResult.length > 0) {
              _this3.secondCategoryOptions = secondResult.map(function (second) {
                return _react2.default.createElement(
                  Option,
                  { title: second.cName, key: second.cid },
                  second.cName
                );
              });
            }
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      this.firstOn && this.props.getShopCidRedux.first.firstloaded && this.dataSource().first();
      this.secondOn && this.props.getShopCidRedux.second.secondloaded && this.dataSource().second();

      return _react2.default.createElement(
        'div',
        { className: _category2.default.labelWrap },
        _react2.default.createElement(
          'label',
          { className: _category2.default.labelTitle },
          '\u5E97\u94FA\uFF1A'
        ),
        _react2.default.createElement(
          'div',
          { className: _category2.default.labelCont },
          _react2.default.createElement(
            _select2.default,
            {
              placeholder: '\u8BF7\u9009\u62E9',
              value: this.state.firstValue,
              notFoundContent: listTip,
              allowClear: allowClear,
              size: 'large',
              className: 'select',
              onChange: this.handleFirstCategoryChange },
            this.firstCategoryOptions
          ),
          _react2.default.createElement(
            _select2.default,
            {
              disabled: this.state.firstLeaf,
              placeholder: '\u8BF7\u9009\u62E9',
              notFoundContent: listTip,
              allowClear: allowClear,
              size: 'large',
              className: 'select',
              onChange: this.handleSecondCategoryChange,
              value: this.state.secondValue },
            this.secondCategoryOptions
          )
        )
      );
    }
  }]);
  return ShopCategory;
}(_react.Component);

exports.default = ShopCategory;
module.exports = exports['default'];
//# sourceMappingURL=ShopCategory.js.map