'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style/line.less');

var _drag = require('./util/drag');

var _Arrows = require('./Arrows');

var _Arrows2 = _interopRequireDefault(_Arrows);

var _computePosition = require('./util/computePosition');

var _validateCheck = require('./util/validateCheck');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * add line and dot
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  id: 'string',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  source: 'node1',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  target: 'node2',
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  sourceAnchor: 0,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  targetAnchor: 2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 根据 source 和 target 描点
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - getX = (idx) => x - boxWidth/2 + (idx + 1) * boxWidth/count
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - y = top or bottom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - edit line function: 贝塞尔曲线
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */

var Line = function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).apply(this, arguments));
  }

  _createClass(Line, [{
    key: 'buildLine',
    value: function buildLine(active, path, idx) {
      var _onClick = this.props.onClick;

      return _react2.default.createElement('path', {
        key: 'line-' + idx,
        markerEnd: 'url(#marker-arrow' + (active ? '-active' : '') + ')',
        className: 'jdic-line ' + (active ? 'jdic-active' : ''),
        d: path,
        onClick: function onClick(e) {
          return _onClick(e, idx);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Arrows2.default, null),
        this.linesEl
      );
    }
  }, {
    key: 'linesEl',
    get: function get() {
      var _this2 = this;

      var _props = this.props,
          nodes = _props.nodes,
          lines = _props.lines,
          activeIdx = _props.activeIdx,
          tmpLine = _props.tmpLine;

      var linesEl = lines.map(function (line, idx) {
        var source = line.source,
            target = line.target,
            sourceAnchor = line.sourceAnchor,
            targetAnchor = line.targetAnchor;


        var sourcePosition = (0, _computePosition.getAnchorPosition)(sourceAnchor, nodes[source].output, nodes[source]);
        var targetPosition = (0, _computePosition.getAnchorPosition)(targetAnchor, nodes[target].input, nodes[target]);
        var active = idx === activeIdx;
        var path = (0, _drag.getLinePath)([sourcePosition, targetPosition]);
        return _this2.buildLine(active, path, idx);
      });

      var source = tmpLine.source,
          sourceAnchor = tmpLine.sourceAnchor,
          targetPosi = tmpLine.targetPosi;

      if ((0, _validateCheck.valideIdxCheck)(source)) {
        var sourcePosition = (0, _computePosition.getAnchorPosition)(sourceAnchor, nodes[source].output, nodes[source]);

        var path = (0, _drag.getLinePath)([sourcePosition, targetPosi]);
        linesEl.push(this.buildLine(false, path, 'tmp'));
      }
      return linesEl;
    }
  }]);

  return Line;
}(_react2.default.Component);

exports.default = Line;
//# sourceMappingURL=line.js.map