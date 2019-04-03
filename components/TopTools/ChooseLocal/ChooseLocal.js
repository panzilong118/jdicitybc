'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('jdcloudui/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _modal = require('jdcloudui/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

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

var _dec, _class; /* *************************
                   * @author: FengYan
                   * @update: 20180206
                   * @description:选择收货地
                   * ************************/

/* ***********  基础组件  ************ */


/* ***********  自定义组件  ************ */


require('jdcloudui/lib/icon/style');

require('jdcloudui/lib/modal/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _citys_redux = require('./citys_redux');

var _citys_redux2 = _interopRequireDefault(_citys_redux);

var _Cookies = require('../../../common/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = new _Cookies2.default();

/* ***********  redux  ************ */
var ChooseLocal = (_dec = (0, _reactRedux.connect)(function (state) {
  return _citys_redux2.default;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)({ getCitysAction: _citys_redux.getCitysAction }, dispatch);
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ChooseLocal, _Component);

  function ChooseLocal(props) {
    (0, _classCallCheck3.default)(this, ChooseLocal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChooseLocal.__proto__ || (0, _getPrototypeOf2.default)(ChooseLocal)).call(this, props));

    _this.state = {
      cityArr: [],
      disabled: false,
      areaName: '请选择',
      visible: true
    };
    return _this;
  }

  /*
   * 发送获取地市列表讲求
   * 根据cookie中是否有areaName控制地域选择弹框
   * */


  (0, _createClass3.default)(ChooseLocal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.props.getCitysAction().then(function (rs) {
        if (rs.code != 0) return;
        _this2.setState({ cityArr: rs.data });
      });
      if (cookie.get('areaName')) {
        this.setState({
          areaName: decodeURI(cookie.get('areaName')),
          visible: false
        });
      }
    }

    /*
     * 设置areaId和areaName到cookie中
     * setTimeout方法控制地域选择下拉列表
     * */

  }, {
    key: 'setCookie',
    value: function setCookie(code, name) {
      var _this3 = this;

      cookie.set('areaId', code, '', this.props.defaultDomain);
      cookie.set('areaName', encodeURI(name), '', this.props.defaultDomain);
      this.setState({ disabled: true, areaName: name, visible: false });
      setTimeout(function (_) {
        return _this3.setState({ disabled: false });
      }, 100);
    }

    /*
     * 渲染地市列表
     * */

  }, {
    key: 'renderCity',
    value: function renderCity(citys) {
      var _this4 = this;

      // 一级地市列表渲染
      var areaId = cookie.get('areaId') || '';
      var cityArr = [];
      citys.map(function (_city) {
        cityArr.push(_react2.default.createElement(
          'li',
          { key: _city.id },
          _react2.default.createElement(
            'span',
            {
              onClick: function onClick() {
                return _this4.setCookie(_city.code, _city.name);
              },
              className: areaId === _city.code ? 'active' : ''
            },
            _city.name,
            _this4.state.ab
          )
        ));
      });
      return cityArr;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'f-ib' },
        _react2.default.createElement(
          _modal2.default,
          {
            visible: this.state.visible,
            title: '\u8BF7\u9009\u62E9\u4F60\u7684\u6536\u8D27\u5730\u533A',
            footer: null,
            closable: false
          },
          _react2.default.createElement(
            'div',
            { className: 'unChooseLocal' },
            _react2.default.createElement(
              'ul',
              null,
              this.renderCity(this.state.cityArr)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'down-menu' },
          _react2.default.createElement(
            'a',
            null,
            _react2.default.createElement(_icon2.default, { type: 'new-gps f-fl f-fs26 mt2 active-text' }),
            this.state.areaName
          ),
          !this.state.disabled && _react2.default.createElement(
            'ul',
            { className: 'down-menu-cont localCont' },
            this.renderCity(this.state.cityArr)
          )
        )
      );
    }
  }]);
  return ChooseLocal;
}(_react.Component)) || _class);
exports.default = ChooseLocal;
module.exports = exports['default'];
//# sourceMappingURL=ChooseLocal.js.map