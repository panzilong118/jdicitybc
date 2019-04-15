'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

require('./style/job.less');

var _drag = require('./util/drag');

var _computePosition = require('./util/computePosition');

var _Tooltip = require('./util/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _validate = require('./util/validate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Job = function (_React$Component) {
  _inherits(Job, _React$Component);

  function Job() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Job);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Job.__proto__ || Object.getPrototypeOf(Job)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      resizeNodeIdx: -1
    }, _this.restoreStyle = (0, _lodash.debounce)(function () {
      // eslint-disable-next-line
      _this.setState({ resizeNodeIdx: -1 });
    }, 1000), _this.setTarget = function (target, targetAnchor) {
      var _this2 = _this,
          tmpLine = _this2.tmpLine;

      if (!tmpLine) return;
      var _this$props = _this.props,
          onDrawLine = _this$props.onDrawLine,
          onDragLine = _this$props.onDragLine;

      var line = _extends({}, tmpLine, {
        target: target,
        targetAnchor: targetAnchor
      });
      onDragLine({});
      onDrawLine(line);
    }, _this.mouseMove = function (el, source, sourceAnchor) {
      var nodes = _this.props.nodes;
      var onDragLine = _this.props.onDragLine;

      _this.dragHandler(el, function (point) {
        var _nodes$source = nodes[source],
            x = _nodes$source.x,
            y = _nodes$source.y;

        _this.tmpLine = {
          source: source,
          sourceAnchor: sourceAnchor,
          // fix anchor position offset
          targetPosi: {
            x: point.x + x,
            y: point.y + y
          }
        };
        onDragLine(_this.tmpLine);
      }, function () {
        _this.tmpLine = null;
        onDragLine({});
      });
    }, _this.resize = function (el, node, direction) {
      var onResize = _this.props.onResize;

      var getDistance = function getDistance(curDirect, cur, boxLen) {
        return direction && direction !== curDirect ? boxLen : cur;
      };

      _this.dragHandler(el, function (point) {
        var x = point.x,
            y = point.y;
        var id = node.id,
            width = node.width,
            height = node.height;

        var size = {
          width: getDistance('dx', x, width),
          height: getDistance('dy', y, height)
        };
        (0, _validate.validFunc)(onResize, id, size);
        var resizeNodeIdx = _this.state.resizeNodeIdx;

        resizeNodeIdx === -1 && _this.setState({ resizeNodeIdx: node.id });
        _this.restoreStyle(el);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Job, [{
    key: 'getAnchor',
    value: function getAnchor(anchors, _ref2, nodeIdx, canDrag) {
      var height = _ref2.height,
          width = _ref2.width;

      var _this3 = this;

      var len = (0, _lodash.get)(anchors, 'length');
      if (!len) return;

      return anchors.map(function (_ref3, idx) {
        var key = _ref3.key,
            type = _ref3.type;

        var _getAnchorOffset = (0, _computePosition.getAnchorOffset)(idx, { height: height, width: width }, anchors),
            x = _getAnchorOffset.x,
            y = _getAnchorOffset.y;

        return key ? _react2.default.createElement(_Tooltip2.default, {
          key: 'anchor-' + idx,
          limit: '0',
          title: '\u5B57\u6BB5\u540D: ' + key + ', \u7C7B\u578B: ' + type,
          render: function render() {
            return _react2.default.createElement('div', {
              style: { top: y, left: x },
              className: 'input',
              ref: function ref(el) {
                return canDrag && el && _this3.mouseMove(el, nodeIdx, idx);
              },
              onMouseEnter: function onMouseEnter() {
                return _this3.setTarget(nodeIdx, idx);
              }
            });
          }
        }) : _react2.default.createElement('div', {
          style: { top: y, left: x },
          key: 'anchor-' + idx,
          className: 'input',
          ref: function ref(el) {
            return canDrag && el && _this3.mouseMove(el, nodeIdx, idx);
          },
          onMouseEnter: function onMouseEnter() {
            return _this3.setTarget(nodeIdx, idx);
          }
        });
      });
    }
  }, {
    key: 'getFlexibleControl',
    value: function getFlexibleControl(node) {
      var _this4 = this;

      var id = node.id;

      var colCtrl = [0, '100%'].map(function (left) {
        return _react2.default.createElement('div', {
          key: 'col-' + id + '-' + left,
          className: 'flexibleControl',
          style: {
            left: left,
            top: 0,
            bottom: 0,
            cursor: left && 'col-resize'
          },
          ref: function ref(el) {
            return left && _this4.resize(el, node, 'dx');
          }
        });
      });
      var rowCtrl = [0, '100%'].map(function (top) {
        return _react2.default.createElement('div', {
          key: 'row-' + id + '-' + top,
          className: 'flexibleControl',
          style: {
            top: top,
            left: 0,
            right: 0,
            cursor: top && 'row-resize'
          },
          ref: function ref(el) {
            return top && _this4.resize(el, node, 'dy');
          }
        });
      });
      var bottomRightCtrl = _react2.default.createElement(
        'svg',
        {
          key: 'br-' + id,
          height: '12',
          width: '12',
          className: 'bottomRight',
          ref: function ref(el) {
            return _this4.resize(el, node);
          }
        },
        _react2.default.createElement('polygon', { points: '0,12 12,12 12,0' }),
        'Sorry, your browser does not support inline SVG.'
      );
      return [].concat(_toConsumableArray(rowCtrl), _toConsumableArray(colCtrl), [bottomRightCtrl]);
    }
  }, {
    key: 'bindDrag',
    value: function bindDrag(el, _ref4) {
      var idx = _ref4.idx;
      var onDrag = this.props.onDrag;

      if (!onDrag) return;
      // 当鼠标移动一些距离的时候才开始处罚onDrag
      var moveable = 0;
      var reset = (0, _lodash.debounce)(function () {
        moveable = 0;
      }, 1000);
      this.dragHandler(el, function (point) {
        moveable += 1;
        if (moveable < 3) return;
        onDrag(idx, point);
        reset();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var resizeNodeIdx = this.state.resizeNodeIdx;
      var _props = this.props,
          nodes = _props.nodes,
          render = _props.render,
          _onClick = _props.onClick,
          flexible = _props.flexible;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        nodes.map(function (node, idx) {
          var x = node.x,
              y = node.y,
              width = node.width,
              height = node.height;

          // 错上修错 -- 需要修改成根据 nodeId 和 anchorId 来标识节点和圈圈

          return !node.ext.delete && _react2.default.createElement(
            'span',
            {
              key: 'job-wrap-' + idx,
              className: 'jobWrap',
              ref: function ref(el) {
                return el && _this5.bindDrag(el, { idx: idx });
              },
              style: (0, _drag.getTranslate)({ x: x, y: y })
            },
            _react2.default.createElement(
              'div',
              {
                key: 'job-' + idx,
                className: '\n                    job\n                    ' + (resizeNodeIdx === node.id ? 'resize' : '') + '\n                  ',
                style: { width: width, height: height },
                onClick: function onClick(e) {
                  return _onClick(e, idx);
                }
              },
              _this5.getAnchor(node.input, {
                width: width,
                height: 0
              }, idx),
              _this5.getAnchor(node.output, {
                width: width,
                height: height
              }, idx, true),
              flexible && _this5.getFlexibleControl(node),
              render(node.ext, idx)
            )
          );
        })
      );
    }
  }, {
    key: 'dragHandler',
    get: function get() {
      var scale = this.props.scale;

      return (0, _drag.dragHandler)(scale);
    }
  }]);

  return Job;
}(_react2.default.Component);

exports.default = Job;
//# sourceMappingURL=job.js.map