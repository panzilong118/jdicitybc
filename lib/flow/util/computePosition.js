'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.justifyTarget = justifyTarget;
exports.getAnchorOffset = getAnchorOffset;
exports.getAnchorPosition = getAnchorPosition;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 计算位置参数
 */

// 计算箭头落点
function justifyTarget(source, target) {
  var getDistance = function getDistance(type) {
    return target[type] - source[type];
  };
  var distanceX = getDistance('x');
  var distanceY = getDistance('y');

  var getValue = function getValue(origin, offset, distance) {
    return distance > 0 ? origin - offset : origin + offset;
  };

  if (Math.abs(distanceX) > Math.abs(distanceY)) {
    return {
      x: getValue(target.x, 0, distanceX),
      y: target.y
    };
  }
  return {
    x: target.x,
    y: getValue(target.y, 0, distanceY)
  };
}

function getAnchorOffset(anchorIdx, _ref, anchors) {
  var width = _ref.width,
      height = _ref.height;

  var offset = {
    x: (anchorIdx + 1) * width / (anchors.length + 1),
    y: height
  };
  // 向宿主节点埋一个属性
  Object.assign(anchors, _defineProperty({}, 'offset-' + anchorIdx, offset));
  return offset;
}
/**
 *
 * @param {*} anchorIdx
 * @param {*} anchors
 * @param {*} {x, y} node position
 */
function getAnchorPosition(anchorIdx, anchors, _ref2) {
  var x = _ref2.x,
      y = _ref2.y;

  var offset = anchors['offset-' + anchorIdx];
  if (!offset) return;
  return {
    x: x + offset.x,
    y: y + offset.y
  };
}

var getInLineRange = exports.getInLineRange = function getInLineRange(num, small, large) {
  if (num < small) return small;
  if (num > large) return large;
  return num;
};

/**
 * @param {int} x
 * @param {int} y
 * @param {object} rect {top, bottom, left, right}
 */
var getInRectRange = exports.getInRectRange = function getInRectRange(point, rect) {
  return {
    x: getInLineRange(point.x, rect.left, rect.right),
    y: getInLineRange(point.y, rect.top, rect.bottom)
  };
};
//# sourceMappingURL=computePosition.js.map