'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinePath = exports.dragHandler = exports.getTranslate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _d2 = require('../../util/d3');

var d3 = _interopRequireWildcard(_d2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getTranslate = exports.getTranslate = function getTranslate(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return { transform: 'translate3d(' + x + 'px, ' + y + 'px, 0)' };
};

var dragHandler = exports.dragHandler = function dragHandler() {
  var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return function (selector, collection, onEnd) {
    function stopPropagation() {
      d3.event.sourceEvent.stopPropagation();
    }
    function onDrag() {
      if (!collection) return;
      var _d3$event = d3.event,
          x = _d3$event.x,
          y = _d3$event.y;

      collection({ x: x / scale, y: y / scale });
    }
    d3.select(selector).call(d3.drag()
    // .subject(subject)
    .on('start', stopPropagation).on('drag', onDrag).on('end', onEnd));
  };
};

var CURVE_TENSION = 20;
var getLinePath = exports.getLinePath = function getLinePath(_ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      start = _ref3[0],
      end = _ref3[1];

  if (!start || !end) return;

  var startY = {
    x: start.x,
    y: start.y + CURVE_TENSION
  };

  var endY = {
    x: end.x,
    y: end.y - CURVE_TENSION
  };

  return d3.line().x(function (i) {
    return i.x;
  }).y(function (i) {
    return i.y;
  }).curve(d3.curveCatmullRom)([start, startY, endY, end]);
};
//# sourceMappingURL=drag.js.map