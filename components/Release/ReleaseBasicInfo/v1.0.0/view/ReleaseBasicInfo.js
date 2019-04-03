'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _spin = require('jdcloudui/lib/spin');

var _spin2 = _interopRequireDefault(_spin);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

require('jdcloudui/lib/spin/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _BindCategoryCascade = require('../../../BasicCategoryCascade/v1.0.0/view/BindCategoryCascade');

var _BindCategoryCascade2 = _interopRequireDefault(_BindCategoryCascade);

var _index = require('../../../BasicName/v1.0.0/view/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author chenyanhua
 * @dateTime 20180724
 * @file 发布商品-基础信息Tab组件
 */
function Loading(props) {
  if (props.error) {
    return _react2.default.createElement(
      'div',
      null,
      'Error!'
    );
  } else if (props.pastDelay) {
    // return <div style={{ 'height':'800px', 'paddingTop': '200px', 'textAlign': 'center'}}><Spin size="large" /></div>;
    return _react2.default.createElement('div', null);
  } else {
    return null;
  }
}

var ReleaseBasicInfo = function (_Component) {
  (0, _inherits3.default)(ReleaseBasicInfo, _Component);

  function ReleaseBasicInfo(props) {
    (0, _classCallCheck3.default)(this, ReleaseBasicInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ReleaseBasicInfo.__proto__ || (0, _getPrototypeOf2.default)(ReleaseBasicInfo)).call(this, props));

    _this.state = {
      components: {}
    };
    return _this;
  }

  (0, _createClass3.default)(ReleaseBasicInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 加载动态tab组件,此处根据钩子查询组件
      // this.props.loadBasicInfoComponents().then((result) => {
      //   const components = this.loadInstance(result && result.data || {});
      //   this.setState({
      //     components: components
      //   });
      // },
      //   (error) => {
      //     console.log(error)
      //   }
      // );
    }
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
            var moduleConfigProps = (0, _keys2.default)(sourceModuleProps).reduce(function (obj, item) {
              try {
                obj[item] = eval(sourceModuleProps[item]);
              } catch (e) {
                obj[item] = '';
              }
              return obj;
            }, {});
            //合并config
            props = (0, _assign2.default)(props ? props : {}, moduleConfigProps ? moduleConfigProps : {});

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
                  type: that.props.type // 平台、供应商、店铺
                  , key: 'basic_info_' + value["signature"],
                  ifSave: that.props.ifSave,
                  edit: that.props.edit,
                  editStatus: that.props.editStatus,
                  editData: that.props.editData,
                  setEditData: that.props.setEditData,
                  saleAttributeData: that.props.saleAttributeData || [] //拼接后的销售规格数据
                  , updateSaleAttributeAction: that.props.updateSaleAttributeAction //更新销售规格数据的方法
                  , updateItemTmplAction: that.props.updateItemTmplAction //更新总数据的方法
                  , itemTmplPublishVo: that.props.itemTmplPublishVo // 当前已保存的总数据
                }));
              }
            });
            instances[hook] = instances[hook] || [];
            instances[hook].push(Ins);
          }
        });
      });
      return instances;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.itemTmplPublishVo);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'h3-title' },
          '\u57FA\u7840\u4FE1\u606F '
        ),
        _react2.default.createElement(_index2.default, {
          type: this.props.type // 平台、供应商、店铺
          , ifSave: this.props.ifSave,
          ifValid: this.props.ifValid,
          edit: this.props.edit,
          updateItemTmplAction: this.props.updateItemTmplAction //更新总数据的方法
          , itemTmplPublishVo: this.props.itemTmplPublishVo // 当前已保存的总数据
        }),
        _react2.default.createElement(_BindCategoryCascade2.default, {
          type: this.props.type // 平台、供应商、店铺
          , ifSave: this.props.ifSave,
          ifValid: this.props.ifValid //是否是已生效商品
          , edit: this.props.edit,
          updateItemTmplAction: this.props.updateItemTmplAction //更新总数据的方法
          , itemTmplPublishVo: this.props.itemTmplPublishVo // 当前已保存的总数据
        }),
        this.props.dyComLoading ? _react2.default.createElement(
          'div',
          { style: { minHeight: '50px' } },
          _react2.default.createElement(
            _spin2.default,
            { size: 'large' },
            (this.props.components['HOOK_BASIC_INFO_' + this.props.templateId] || []).map(function (Com, i) {
              return _react2.default.createElement(Com, null);
            })
          )
        ) : (this.props.components['HOOK_BASIC_INFO_' + this.props.templateId] || []).map(function (Com, i) {
          return _react2.default.createElement(Com, null);
        })
      );
    }
  }]);
  return ReleaseBasicInfo;
}(_react.Component);

exports.default = ReleaseBasicInfo;
module.exports = exports['default'];
//# sourceMappingURL=ReleaseBasicInfo.js.map