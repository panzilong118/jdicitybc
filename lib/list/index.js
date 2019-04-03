'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _grid = require('../grid');

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author panzilong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

    _this.renderItem = function (item, index) {
      var _this$props = _this.props,
          dataSource = _this$props.dataSource,
          renderItem = _this$props.renderItem,
          rowKey = _this$props.rowKey;

      var key = void 0;

      if (typeof rowKey === 'function') {
        key = rowKey(dataSource[index]);
      } else if (typeof rowKey === 'string') {
        key = dataSource[rowKey];
      } else {
        key = dataSource.key;
      }

      if (!key) {
        key = 'list-item-' + index;
      }

      _this.keys[index] = key;

      return renderItem(item, index);
    };

    _this.renderEmpty = function (contextLocale) {
      var locale = _extends({}, contextLocale, _this.props.locale);
      return React.createElement(
        'div',
        { className: _this.props.prefixCls + '-empty-text' },
        locale.emptyText
      );
    };

    _this.keys = {};
    return _this;
  }

  _createClass(List, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        grid: this.props.grid
      };
    }
  }, {
    key: 'isSomethingAfterLastItem',
    value: function isSomethingAfterLastItem() {
      var _props = this.props,
          loadMore = _props.loadMore,
          pagination = _props.pagination,
          footer = _props.footer;

      return !!(loadMore || pagination || footer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          bordered = _props2.bordered,
          split = _props2.split,
          className = _props2.className,
          children = _props2.children,
          itemLayout = _props2.itemLayout,
          loadMore = _props2.loadMore,
          pagination = _props2.pagination,
          prefixCls = _props2.prefixCls,
          grid = _props2.grid,
          dataSource = _props2.dataSource,
          size = _props2.size,
          rowKey = _props2.rowKey,
          renderItem = _props2.renderItem,
          header = _props2.header,
          footer = _props2.footer,
          loading = _props2.loading,
          rest = _objectWithoutProperties(_props2, ['bordered', 'split', 'className', 'children', 'itemLayout', 'loadMore', 'pagination', 'prefixCls', 'grid', 'dataSource', 'size', 'rowKey', 'renderItem', 'header', 'footer', 'loading']);

      var loadingProp = loading;
      if (typeof loadingProp === 'boolean') {
        loadingProp = {
          spinning: loadingProp
        };
      }
      var isLoading = loadingProp && loadingProp.spinning;

      // large => lg
      // small => sm
      var sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
        default:
          break;
      }

      var classString = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-vertical', itemLayout === 'vertical'), _defineProperty(_classNames, prefixCls + '-' + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + '-split', split), _defineProperty(_classNames, prefixCls + '-bordered', bordered), _defineProperty(_classNames, prefixCls + '-loading', isLoading), _defineProperty(_classNames, prefixCls + '-grid', grid), _defineProperty(_classNames, prefixCls + '-something-after-last-item', this.isSomethingAfterLastItem()), _classNames));

      var paginationContent = React.createElement(
        'div',
        { className: prefixCls + '-pagination' },
        React.createElement(_pagination2.default, pagination)
      );

      var childrenContent = void 0;
      childrenContent = isLoading && React.createElement('div', { style: { minHeight: 53 } });
      if (dataSource.length > 0) {
        var items = dataSource.map(function (item, index) {
          return _this2.renderItem(item, index);
        });
        var childrenList = React.Children.map(items, function (child, index) {
          return React.cloneElement(child, {
            key: _this2.keys[index]
          });
        });

        childrenContent = grid ? React.createElement(
          _grid.Row,
          { gutter: grid.gutter },
          childrenList
        ) : childrenList;
      } else if (!children && !isLoading) {
        childrenContent = React.createElement(
          _LocaleReceiver2.default,
          {
            componentName: 'Table',
            defaultLocale: _default2.default.Table
          },
          this.renderEmpty
        );
      }

      var content = React.createElement(
        'div',
        null,
        React.createElement(
          _spin2.default,
          loadingProp,
          childrenContent
        ),
        loadMore,
        !loadMore && pagination ? paginationContent : null
      );

      return React.createElement(
        'div',
        _extends({ className: classString }, rest),
        header && React.createElement(
          'div',
          { className: prefixCls + '-header' },
          header
        ),
        content,
        children,
        footer && React.createElement(
          'div',
          { className: prefixCls + '-footer' },
          footer
        )
      );
    }
  }]);

  return List;
}(React.Component);

List.Item = _Item2.default;
List.childContextTypes = {
  grid: _propTypes2.default.any
};
List.defaultProps = {
  dataSource: [],
  prefixCls: 'jc-list',
  bordered: false,
  split: true,
  loading: false,
  pagination: false
};
exports.default = List;
//# sourceMappingURL=index.js.map