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

var CategoryCascade = function (_Component) {
  (0, _inherits3.default)(CategoryCascade, _Component);

  function CategoryCascade(props, context) {
    (0, _classCallCheck3.default)(this, CategoryCascade);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CategoryCascade.__proto__ || (0, _getPrototypeOf2.default)(CategoryCascade)).call(this, props, context));

    _this.handleFourCategoryChange = function (cid, option, isInit) {
      _this.setState({
        fourValue: cid
      });
      if (!isInit) {
        _this.detailIndex(cid, _this.props.getCidRedux.four.data.data, 4);
        _this.handleChangeCategoryValue(cid, _this.fourLeaf);
      }
    };

    _this.handleThirdCategoryChange = function (cid, option, isInit) {
      _this.firstOn = true;
      _this.secondOn = true;
      _this.thirdOn = true;
      _this.fourOn = true;
      _this.setState({
        thirdValue: cid,
        fourValue: null
      });
      _this.fourCategoryOptions = [];
      if (cid) {
        if (!isInit) {
          _this.detailIndex(cid, _this.props.getCidRedux.third.data.data, 3);
        }
        _this.props.getFourCid(cid, _this.props.type).then(function (result) {
          if (result.data && result.data.length < 1) {
            if (!_this.state.thirdLeaf) {
              _this.fourCategoryOptions = [];
              _this.firstOn = true;
              _this.secondOn = true;
              _this.thirdOn = true;
              _this.fourOn = false;
            } else {
              _this.setState({
                fourValue: null
              });
              _this.fourCategoryOptions = null;
            }
          }
        });
      } else {
        _this.fourCategoryOptions = null;
        _this.props.clearData(3);
      }
      if (!isInit) {
        _this.handleChangeCategoryValue(cid, _this.thirdLeaf);
      }
    };

    _this.handleSecondCategoryChange = function (cid, option, isInit) {
      _this.setState({
        secondValue: cid,
        thirdValue: null,
        fourValue: null
      });
      _this.firstOn = true;
      _this.secondOn = true;
      _this.thirdOn = true;
      _this.fourOn = false;
      _this.thirdCategoryOptions = null;
      _this.fourCategoryOptions = null;
      if (cid) {
        if (!isInit) {
          _this.detailIndex(cid, _this.props.getCidRedux.second.data.data, 2);
        }
        _this.props.getThirdCid(cid, _this.props.type).then(function (result) {
          if (result.data && result.data.length < 1) {
            if (!_this.state.secondLeaf) {
              _this.thirdCategoryOptions = [];
              _this.fourCategoryOptions = [];
              _this.firstOn = true;
              _this.secondOn = true;
              _this.thirdOn = false;
              _this.fourOn = false;
            } else {
              _this.setState({
                thirdValue: null,
                fourValue: null
              });
              _this.thirdCategoryOptions = null;
              _this.fourCategoryOptions = null;
            }
          }
        });
      } else {
        _this.thirdCategoryOptions = null;
        _this.fourCategoryOptions = null;
        _this.props.clearData(2);
      }
      if (!isInit) {
        _this.handleChangeCategoryValue(cid, _this.secondLeaf);
      }
    };

    _this.handleFirstCategoryChange = function (cid, option, isInit) {
      _this.setState({
        firstValue: cid,
        secondValue: null,
        thirdValue: null,
        fourValue: null
      });
      _this.firstOn = true;
      _this.secondOn = true;
      _this.thirdOn = false;
      _this.fourOn = false;
      _this.secondCategoryOptions = null;
      _this.thirdCategoryOptions = null;
      _this.fourCategoryOptions = null;
      if (cid) {
        if (!isInit) {
          _this.detailIndex(cid, _this.props.getCidRedux.first.data.data, 1);
        }
        _this.props.getSecondCid(cid, _this.props.type).then(function (result) {
          if (result.data && result.data.length < 1) {
            if (!_this.state.firstLeaf) {
              _this.secondCategoryOptions = [];
              _this.thirdCategoryOptions = [];
              _this.fourCategoryOptions = [];
              _this.secondOn = false;
              _this.thirdOn = false;
              _this.fourOn = false;
            } else {
              _this.setState({
                secondValue: null,
                thirdValue: null,
                fourValue: null
              });
              _this.secondCategoryOptions = null;
              _this.thirdCategoryOptions = null;
              _this.fourCategoryOptions = null;
            }
          }
        });
      } else {
        _this.secondCategoryOptions = null;
        _this.thirdCategoryOptions = null;
        _this.fourCategoryOptions = null;
        _this.props.clearData(1);
      }
      if (!isInit) {
        _this.handleChangeCategoryValue(cid, _this.firstLeaf);
      }
    };

    _this.state = {
      firstLeaf: false, //一级类目是否是叶子节点
      secondLeaf: false, //二级类目是否是叶子节点
      thirdLeaf: false, //三级类目是否是叶子节点
      fourLeaf: false, //四级类目是否是叶子节点
      firstValue: null,
      secondValue: null,
      thirdValue: null,
      fourValue: null
    };

    _this.firstCategoryOptions = null;
    _this.secondCategoryOptions = null;
    _this.thirdCategoryOptions = null;
    _this.fourCategoryOptions = null;

    _this.firstLeaf = false;
    _this.secondLeaf = false;
    _this.thirdLeaf = false;
    _this.fourLeaf = false;

    _this.currentIndex = 0;
    _this.firstOn = true;
    _this.secondOn = false;
    _this.thirdOn = false;
    _this.fourOn = false;
    _this.cids = ''; //用于保存类目回显数据
    _this.cid = null; //保存终极类目，用来判断修改后的类目是否与原类目相同
    return _this;
  }

  (0, _createClass3.default)(CategoryCascade, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //请求一级类目
      var parentCid = -1;
      this.props.getFirstCid(parentCid, this.props.type);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.itemTmplPublishVo) {
        if (nextProps.itemTmplPublishVo.cids && nextProps.itemTmplPublishVo.cids != this.cids) {
          this.cids = nextProps.itemTmplPublishVo.cids;
          this.cid = nextProps.itemTmplPublishVo.cid;
          //数据回显
          var cids = this.cids.split('-');

          switch (cids.length) {
            case 1:
              this.setState({ firstLeaf: true });
              this.firstLeaf = true;
              this.handleFirstCategoryChange(cids[0], '', true); //第三个参数表示是否是初始化数据过程
              return;
            case 2:
              this.setState({ secondLeaf: true });
              this.secondLeaf = true;
              this.handleFirstCategoryChange(cids[0], '', true);
              this.handleSecondCategoryChange(cids[1], '', true);
              return;
            case 3:
              this.setState({ thirdLeaf: true });
              this.thirdLeaf = true;
              this.handleFirstCategoryChange(cids[0], '', true);
              this.handleSecondCategoryChange(cids[1], '', true);
              this.handleThirdCategoryChange(cids[2], '', true);
              return;
            case 4:
              this.setState({ fourLeaf: true });
              this.fourLeaf = true;
              this.handleFirstCategoryChange(cids[0], '', true);
              this.handleSecondCategoryChange(cids[1], '', true);
              this.handleThirdCategoryChange(cids[2], '', true);
              this.handleFourCategoryChange(cids[3], '', true);
              return;
          }
        }
      }
    }

    //保存终极类目cid

  }, {
    key: 'handleChangeCategoryValue',
    value: function handleChangeCategoryValue(cid, ifHasLeaf) {
      var itemName = this.props.itemTmplPublishVo.itemName;
      // 保留管理员信息组件数据
      var publishUserId = this.props.itemTmplPublishVo.publishUserId;
      var operatorId = this.props.itemTmplPublishVo.operatorId;

      // 保留商品id（主要用在编辑时）
      var id = this.props.itemTmplPublishVo.id;

      if (cid == undefined) {
        cid = null;
      }

      if (ifHasLeaf && cid) {
        console.log('是终极类目，且cid存在');
        var itemTmplPublishVo = this.props.itemTmplPublishVo;
        if (cid != this.cid) {
          console.log('cid不同，重设数据');
          this.cid = cid;
          //不是已发布商品，类目改变后清空之前操作数据
          if (!this.props.ifValid) {
            itemTmplPublishVo = this.props.resetParamsRedux;
            itemTmplPublishVo.itemName = itemName;
            itemTmplPublishVo.publishUserId = publishUserId;
            itemTmplPublishVo.operatorId = operatorId;
            itemTmplPublishVo.id = id;
            if (this.props.type == 1) {
              itemTmplPublishVo.itemPerfectVo = null;
            }
          }
          // else {
          //     itemTmplPublishVo.industryLabel = '';
          // }
        }
        itemTmplPublishVo.cid = cid;
        this.props.updateItemTmplAction(itemTmplPublishVo);
      } else {
        console.log('非终极类目，或cid不存在');
        var _itemTmplPublishVo = this.props.itemTmplPublishVo;
        _itemTmplPublishVo.cid = null;
        this.props.updateItemTmplAction(_itemTmplPublishVo);
      }
    }

    //判断当前是否是根节点

  }, {
    key: 'detailIndex',
    value: function detailIndex(cid, category, index) {
      var _this2 = this;

      this.setState({
        secondLeaf: false,
        thirdLeaf: false,
        fourLeaf: false
      });
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
          return;
        case 2:
          this.setState({ secondLeaf: hasLeaf });
          this.secondLeaf = hasLeaf;
          return;
        case 3:
          this.setState({ thirdLeaf: hasLeaf });
          this.thirdLeaf = hasLeaf;
          return;
        case 4:
          this.setState({ fourLeaf: hasLeaf });
          this.fourLeaf = hasLeaf;
          return;
      }
    }

    /**
     * 获取四级类目cid，返回组件对外提供的方法上面，供父组件使用
     * @param cid
     */


    /**
     * 查询四级类目
     * @param cid
     */

    /**
     * 查询三级类目
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
          if (_this3.props.getCidRedux.first.data) {
            var firstResult = _this3.props.getCidRedux.first.data.data;
            if (firstResult && firstResult.length > 0) {
              _this3.firstCategoryOptions = firstResult.map(function (first) {
                return _react2.default.createElement(
                  Option,
                  { title: first.categoryName, key: first.cid },
                  first.categoryName
                );
              });
            }
          }
        },
        second: function second() {
          if (_this3.props.getCidRedux.second.data) {
            var secondResult = _this3.props.getCidRedux.second.data.data;
            if (secondResult && secondResult.length > 0) {
              _this3.secondCategoryOptions = secondResult.map(function (second) {
                return _react2.default.createElement(
                  Option,
                  { title: second.categoryName, key: second.cid },
                  second.categoryName
                );
              });
            }
          }
        },
        third: function third() {
          if (_this3.props.getCidRedux.third.data) {
            var thirdResult = _this3.props.getCidRedux.third.data.data;
            if (thirdResult && thirdResult.length > 0) {
              _this3.thirdCategoryOptions = thirdResult.map(function (third) {
                return _react2.default.createElement(
                  Option,
                  { title: third.categoryName, key: third.cid },
                  third.categoryName
                );
              });
            }
          }
        },
        four: function four() {
          if (_this3.props.getCidRedux.four.data) {
            var fourResult = _this3.props.getCidRedux.four.data.data;
            if (fourResult && fourResult.length > 0) {
              _this3.fourCategoryOptions = fourResult.map(function (four) {
                return _react2.default.createElement(
                  Option,
                  { title: four.categoryName, key: four.cid },
                  four.categoryName
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
      this.firstOn && this.props.getCidRedux.first.firstloaded && this.dataSource().first();
      this.secondOn && this.props.getCidRedux.second.secondloaded && this.dataSource().second();
      this.thirdOn && this.props.getCidRedux.third.thirdloaded && this.dataSource().third();
      this.fourOn && this.props.getCidRedux.four.fourloaded && this.dataSource().four();

      return _react2.default.createElement(
        'div',
        { className: _category2.default.labelWrap },
        _react2.default.createElement(
          'label',
          { className: _category2.default.labelTitle },
          _react2.default.createElement(
            'span',
            { style: { color: 'red' } },
            '*'
          ),
          '\u5E73\u53F0\u5206\u7C7B\uFF1A'
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
          ),
          _react2.default.createElement(
            _select2.default,
            {
              disabled: this.state.secondLeaf || this.state.firstLeaf,
              placeholder: '\u8BF7\u9009\u62E9',
              notFoundContent: listTip,
              allowClear: allowClear,
              size: 'large',
              className: 'select',
              onChange: this.handleThirdCategoryChange,
              value: this.state.thirdValue },
            this.thirdCategoryOptions
          ),
          _react2.default.createElement(
            _select2.default,
            {
              disabled: this.state.firstLeaf || this.state.secondLeaf || this.state.thirdLeaf,
              placeholder: '\u8BF7\u9009\u62E9',
              notFoundContent: listTip,
              allowClear: allowClear,
              size: 'large',
              className: 'select',
              value: this.state.fourValue,
              onChange: this.handleFourCategoryChange },
            this.fourCategoryOptions
          )
        )
      );
    }
  }]);
  return CategoryCascade;
}(_react.Component);

exports.default = CategoryCascade;
module.exports = exports['default'];
//# sourceMappingURL=CategoryCascade.js.map