'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _domEvent = require('../util/domEvent');

require('./style/index.less');

var _computePosition = require('./util/computePosition');

var _validate = require('../util/validate');

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _job = require('./job');

var _job2 = _interopRequireDefault(_job);

var _Axis = require('./Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _validateCheck = require('./util/validateCheck');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * flow chart component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * props:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  disable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  flexible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  scale = number  // 控制缩放尺度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  nodes = [{coordinate: {x, y}, input: [], output: [], ...}]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  lines = [{source, target}] source|target is nodes idx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  drawLine = true|false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onResize(idx, {width, height})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onDrag(idx: nodes index, {x, y})
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onDeleteJob(nodeIdx)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onDeleteLine(lineIdx)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onDrawLine(sourceIdx, targetIdx)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  onSelectJob(jobIdx)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import { KEY_CODE } from 'src/config';


var originTmpLine = {
  source: null,
  sourceAnchor: null,
  target: {}
};

var KEY_CODE = {
  backspace: 8,
  delete: 46,
  left: 37,
  top: 38,
  right: 39,
  bottom: 40
};

var Flow = function (_Component) {
  _inherits(Flow, _Component);

  function Flow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Flow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flow.__proto__ || Object.getPrototypeOf(Flow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: {
        job: _validateCheck.INVALID_IDX,
        line: _validateCheck.INVALID_IDX
      },
      tmpLine: _extends({}, originTmpLine)
    }, _this.focus = false, _this.panelOffset = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }, _this.scroll = {
      top: 0,
      left: 0
    }, _this.onPanelScroll = function (e) {
      _this.scroll = {
        top: e.target.scrollTop,
        left: e.target.scrollLeft
      };
    }, _this.onKeyDown = function (event) {
      var _this$props = _this.props,
          onDeleteJob = _this$props.onDeleteJob,
          onDeleteLine = _this$props.onDeleteLine,
          onDrag = _this$props.onDrag,
          nodes = _this$props.nodes,
          disable = _this$props.disable;

      if (disable) return;

      var _this$state$selected = _this.state.selected,
          job = _this$state$selected.job,
          line = _this$state$selected.line;

      if (_this.actionValideDelete(event.keyCode)) {
        if ((0, _validateCheck.valideIdxCheck)(job)) {
          (0, _validate.validFunc)(onDeleteJob, job);
        }

        if ((0, _validateCheck.valideIdxCheck)(line)) {
          (0, _validate.validFunc)(onDeleteLine, line);
        }
        _this.setState({ selected: {} });
      }
      // 上下左右键
      if (_this.actionValideKeyDown(event.keyCode)) {
        event.preventDefault();
        var _nodes$job = nodes[job],
            x = _nodes$job.x,
            y = _nodes$job.y;

        var newX = x;
        var newY = y;
        var code = event.keyCode;
        if (code === 37) newX--; // left
        if (code === 38) newY--; // top
        if (code === 39) newX++; // right
        if (code === 40) newY++; // bottom

        if ((0, _validateCheck.valideIdxCheck)(job)) {
          (0, _validate.validFunc)(onDrag, job, { x: newX, y: newY });
        }
        _this.setState({ selected: { job: job } });
      }
      _this.setState({ selected: {} });
    }, _this.bindPanelBox = function (el) {
      var panelBox = el;
      _this.panelBox = el;
      _this.panelOffset = panelBox.getBoundingClientRect();
      panelBox.onblur = function () {
        _this.focus = false;
      };
      panelBox.onfocus = function () {
        _this.focus = true;
      };

      panelBox.parentElement.addEventListener('scroll', _this.onPanelScroll);
    }, _this.active = function (e, type, idx) {
      e.stopPropagation();
      var _this$props2 = _this.props,
          onSelectJob = _this$props2.onSelectJob,
          disable = _this$props2.disable;

      if (disable) return;

      if (type === 'job' && (0, _validateCheck.valideIdxCheck)(idx)) {
        (0, _validate.validFunc)(onSelectJob, idx);
      }
      _this.setState({ selected: _defineProperty({}, type, idx) });
    }, _this.clearActive = function () {
      var onSelectJob = _this.props.onSelectJob;

      (0, _validate.validFunc)(onSelectJob, _validateCheck.INVALID_IDX);
      _this.setState({ selected: {} });
    }, _this.actionValideDelete = function (keyCode) {
      var allowCode = [KEY_CODE.backspace, KEY_CODE.delete];
      return _this.focus && allowCode.indexOf(keyCode) >= 0;
    }, _this.actionValideKeyDown = function (keyCode) {
      var allowCode = [KEY_CODE.left, KEY_CODE.top, KEY_CODE.right, KEY_CODE.bottom];
      return _this.focus && allowCode.indexOf(keyCode) >= 0;
    }, _this.bindDrag = function (idx, _ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var _this$props3 = _this.props,
          onDrag = _this$props3.onDrag,
          nodes = _this$props3.nodes;

      var node = nodes[idx];
      var point = {
        x: x - node.width / 2,
        y: y - node.height / 2
      };
      onDrag(idx, (0, _computePosition.getInRectRange)(point, _this.getPanelRange(idx)));
    }, _this.newTmpLine = function (_ref3) {
      var source = _ref3.source,
          sourceAnchor = _ref3.sourceAnchor,
          targetPosi = _ref3.targetPosi;

      if (!(0, _validateCheck.valideIdxCheck)(source)) {
        _this.setState({ tmpLine: originTmpLine });
        return;
      }

      _this.setState({
        tmpLine: {
          source: source,
          sourceAnchor: sourceAnchor,
          targetPosi: (0, _computePosition.getInRectRange)(targetPosi, _this.getPanelRange(0))
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // blur|focus


  // panel position of screen


  _createClass(Flow, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
      this.panelBox.parentElement.removeEventListener('scroll', this.onPanelScroll);
    }

    // 监听删除键 & 上下左右键

  }, {
    key: 'getPanelRange',
    value: function getPanelRange(idx) {
      var nodes = this.props.nodes;
      var panelOffset = this.panelOffset;
      var _nodes$idx$width = nodes[idx].width,
          width = _nodes$idx$width.width,
          height = _nodes$idx$width.height;

      var rect = {
        top: 0,
        left: 0,
        right: panelOffset.width - width,
        bottom: panelOffset.height - height
      };
      return rect;
    }

    // 清除现有active样式

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          _props$scale = _props.scale,
          scale = _props$scale === undefined ? 100 : _props$scale,
          disable = _props.disable,
          _props$nodes = _props.nodes,
          nodes = _props$nodes === undefined ? [] : _props$nodes,
          _props$lines = _props.lines,
          lines = _props$lines === undefined ? [] : _props$lines,
          render = _props.render,
          _onDrawLine = _props.onDrawLine,
          flexible = _props.flexible,
          _onResize = _props.onResize;
      var _state = this.state,
          tmpLine = _state.tmpLine,
          selected = _state.selected;

      var scalePercent = scale / 100;
      return _react2.default.createElement(
        'div',
        {
          tabIndex: '0',
          style: _extends({ transform: 'scale(' + scalePercent + ')' }, style),
          className: 'jdic-uc-flow-panel ' + className,
          onMouseMove: this.onMouseMove,
          ref: function ref(el) {
            return el && _this2.bindPanelBox(el);
          },
          onClick: (0, _domEvent.stopPropagation)(this.clearActive)
        },
        _react2.default.createElement(_job2.default, {
          scale: scalePercent,
          flexible: !disable && flexible,
          nodes: nodes,
          render: render,
          onResize: function onResize() {
            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            return flexible && _validate.validFunc.apply(undefined, [_onResize].concat(args));
          },
          onDrag: !disable && this.bindDrag,
          onDragLine: !disable && this.newTmpLine,
          onDrawLine: function onDrawLine(line) {
            return !disable && (0, _validate.validFunc)(_onDrawLine, line);
          },
          activeIdx: selected.job,
          onClick: function onClick(e, idx) {
            return _this2.active(e, 'job', idx);
          }
        }),
        _react2.default.createElement(
          'svg',
          { className: 'jdic-uc-flow' },
          _react2.default.createElement(_line2.default, {
            lines: lines,
            nodes: nodes,
            activeIdx: selected.line,
            tmpLine: tmpLine,
            offset: this.offset,
            onClick: function onClick(e, idx) {
              return _this2.active(e, 'line', idx);
            }
          }),
          !disable && _react2.default.createElement(_Axis2.default, { x: 3, y: 4 })
        )
      );
    }
  }, {
    key: 'linesWithCoordinate',
    get: function get() {
      var lines = this.props.lines;


      return lines.map(function (_ref4) {
        var source = _ref4.source,
            target = _ref4.target;
        return {
          source: source,
          target: target,
          targetIdx: target
        };
      });
    }
  }]);

  return Flow;
}(_react.Component);

exports.default = Flow;
//# sourceMappingURL=index.js.map