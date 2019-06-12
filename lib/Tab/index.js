'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _validate = require('../util/validate');

require('./style/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * tab
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  <Tab
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    className='xxx'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    tabClass='set tab style'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    tabs={[]}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    active={activeIdx}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    onChange={(tabIdx) => handlerChange(tabIdx)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    render={(tab, idx) => renderFunction}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  props:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    {string}  className   [option]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    {string}  tabClass    [option]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    {array}    tabs       [name1, name2...]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Tab = function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tabs = _props.tabs,
          render = _props.render,
          active = _props.active,
          onChange = _props.onChange,
          className = _props.className,
          tabClass = _props.tabClass,
          prefixCls = _props.prefixCls;

      var tabActive = prefixCls + '-uc-tab-active';
      return _react2.default.createElement(
        'ul',
        { className: className },
        tabs.map(function (name, idx) {
          return _react2.default.createElement(
            'li',
            {
              key: idx,
              className: prefixCls + '-uc-tab ' + tabClass + ' ' + (active === idx ? tabActive : ''),
              onClick: function onClick() {
                return (0, _validate.validFunc)(onChange, idx);
              }
            },
            (0, _validate.validFunc)(render, name, idx) || name
          );
        })
      );
    }
  }]);

  return Tab;
}(_react.Component);

Tab.defaultProps = {
  prefixCls: 'jdic-tab'
};
exports.default = Tab;
//# sourceMappingURL=index.js.map