'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Meta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = require('../grid');

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * @author panzilong
                                                                                                                                                                                                                              * @version 1.0.0
                                                                                                                                                                                                                              */


var Meta = function Meta(props) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'jc-list' : _props$prefixCls,
      className = props.className,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = _objectWithoutProperties(props, ['prefixCls', 'className', 'avatar', 'title', 'description']);

  var classString = (0, _classnames2.default)(prefixCls + '-item-meta', className);

  var content = React.createElement(
    'div',
    { className: prefixCls + '-item-meta-content' },
    title && React.createElement(
      'h4',
      { className: prefixCls + '-item-meta-title' },
      title
    ),
    description && React.createElement(
      'div',
      { className: prefixCls + '-item-meta-description' },
      description
    )
  );

  return React.createElement(
    'div',
    _extends({}, others, { className: classString }),
    avatar && React.createElement(
      'div',
      { className: prefixCls + '-item-meta-avatar' },
      avatar
    ),
    (title || description) && content
  );
};

exports.Meta = Meta;
function getGrid(grid, t) {
  return grid[t] && Math.floor(24 / grid[t]);
}

var GridColumns = ['', 1, 2, 3, 4, 6, 8, 12, 24];

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var grid = this.context.grid;

      var _props = this.props,
          _props$prefixCls2 = _props.prefixCls,
          prefixCls = _props$prefixCls2 === undefined ? 'jc-list' : _props$prefixCls2,
          children = _props.children,
          actions = _props.actions,
          extra = _props.extra,
          className = _props.className,
          others = _objectWithoutProperties(_props, ['prefixCls', 'children', 'actions', 'extra', 'className']);

      var classString = (0, _classnames2.default)(prefixCls + '-item', className);

      var metaContent = [];
      var otherContent = [];

      React.Children.forEach(children, function (element) {
        if (element && element.type && element.type === Meta) {
          metaContent.push(element);
        } else {
          otherContent.push(element);
        }
      });

      var contentClassString = (0, _classnames2.default)(prefixCls + '-item-content', _defineProperty({}, prefixCls + '-item-content-single', metaContent.length < 1));
      var content = otherContent.length > 0 ? React.createElement(
        'div',
        { className: contentClassString },
        otherContent
      ) : null;

      var actionsContent = void 0;
      if (actions && actions.length > 0) {
        var actionsContentItem = function actionsContentItem(action, i) {
          return React.createElement(
            'li',
            { key: prefixCls + '-item-action-' + i },
            action,
            i !== actions.length - 1 && React.createElement('em', { className: prefixCls + '-item-action-split' })
          );
        };
        actionsContent = React.createElement(
          'ul',
          { className: prefixCls + '-item-action' },
          actions.map(function (action, i) {
            return actionsContentItem(action, i);
          })
        );
      }

      var extraContent = React.createElement(
        'div',
        { className: prefixCls + '-item-extra-wrap' },
        React.createElement(
          'div',
          { className: prefixCls + '-item-main' },
          metaContent,
          content,
          actionsContent
        ),
        React.createElement(
          'div',
          { className: prefixCls + '-item-extra' },
          extra
        )
      );

      var mainContent = grid ? React.createElement(
        _grid.Col,
        {
          span: getGrid(grid, 'column'),
          xs: getGrid(grid, 'xs'),
          sm: getGrid(grid, 'sm'),
          md: getGrid(grid, 'md'),
          lg: getGrid(grid, 'lg'),
          xl: getGrid(grid, 'xl'),
          xxl: getGrid(grid, 'xxl')
        },
        React.createElement(
          'div',
          _extends({}, others, { className: classString }),
          extra && extraContent,
          !extra && metaContent,
          !extra && content,
          !extra && actionsContent
        )
      ) : React.createElement(
        'div',
        _extends({}, others, { className: classString }),
        extra && extraContent,
        !extra && metaContent,
        !extra && content,
        !extra && actionsContent
      );

      return mainContent;
    }
  }]);

  return Item;
}(React.Component);

Item.Meta = Meta;
Item.propTypes = {
  column: _propTypes2.default.oneOf(GridColumns),
  xs: _propTypes2.default.oneOf(GridColumns),
  sm: _propTypes2.default.oneOf(GridColumns),
  md: _propTypes2.default.oneOf(GridColumns),
  lg: _propTypes2.default.oneOf(GridColumns),
  xl: _propTypes2.default.oneOf(GridColumns),
  xxl: _propTypes2.default.oneOf(GridColumns)
};
Item.contextTypes = {
  grid: _propTypes2.default.any
};
exports.default = Item;
//# sourceMappingURL=Item.js.map