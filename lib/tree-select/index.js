'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeSelect = function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  // private rcTreeSelect: any;

  function TreeSelect(props) {
    _classCallCheck(this, TreeSelect);

    var _this = _possibleConstructorReturn(this, (TreeSelect.__proto__ || Object.getPrototypeOf(TreeSelect)).call(this, props));

    _this.saveTreeSelect = function (node) {
      _this.rcTreeSelect = node;
    };

    _this.renderTreeSelect = function (locale) {
      var _classNames;

      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          size = _this$props.size,
          notFoundContent = _this$props.notFoundContent,
          dropdownStyle = _this$props.dropdownStyle,
          dropdownClassName = _this$props.dropdownClassName,
          restProps = _objectWithoutProperties(_this$props, ['prefixCls', 'className', 'size', 'notFoundContent', 'dropdownStyle', 'dropdownClassName']);

      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);

      var checkable = restProps.treeCheckable;
      if (checkable) {
        checkable = React.createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
      }
      return React.createElement(_rcTreeSelect2.default, _extends({}, restProps, {
        dropdownClassName: (0, _classnames2.default)(dropdownClassName, prefixCls + '-tree-dropdown'),
        prefixCls: prefixCls,
        className: cls,
        dropdownStyle: _extends({ maxHeight: '100vh', overflow: 'auto' }, dropdownStyle),
        treeCheckable: checkable,
        notFoundContent: notFoundContent || locale.notFoundContent,
        ref: _this.saveTreeSelect
      }));
    };

    (0, _warning2.default)(props.multiple !== false || !props.treeCheckable, '`multiple` will alway be `true` when `treeCheckable` is true');
    return _this;
  }

  _createClass(TreeSelect, [{
    key: 'focus',
    value: function focus() {
      this.rcTreeSelect.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.rcTreeSelect.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Select',
          defaultLocale: {}
        },
        this.renderTreeSelect
      );
    }
  }]);

  return TreeSelect;
}(React.Component);

TreeSelect.TreeNode = _rcTreeSelect.TreeNode;
TreeSelect.SHOW_ALL = _rcTreeSelect.SHOW_ALL;
TreeSelect.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT;
TreeSelect.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD;
TreeSelect.defaultProps = {
  prefixCls: 'jc-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false
};
exports.default = TreeSelect;


TreeSelect.propTypes = {
  key: _propTypes2.default.string,
  value: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  searchPlaceholder: _propTypes2.default.string,
  dropdownMatchSelectWidth: _propTypes2.default.bool,
  treeDefaultExpandAll: _propTypes2.default.bool,
  treeNodeFilterProp: _propTypes2.default.string,
  treeNodeLabelProp: _propTypes2.default.string,
  treeDataSimpleMode: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.Object]),
  showCheckedStrategy: _propTypes2.default.oneOf(['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD']),
  labelInValue: _propTypes2.default.bool,
  treeCheckStrictly: _propTypes2.default.bool,
  notFoundContent: _propTypes2.default.bool
};
//# sourceMappingURL=index.js.map