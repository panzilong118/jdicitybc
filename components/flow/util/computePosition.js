/**
 * 计算位置参数
 */

// 计算箭头落点
export function justifyTarget(source, target) {
  const getDistance = type => target[type] - source[type];
  const distanceX = getDistance('x');
  const distanceY = getDistance('y');

  const getValue = (origin, offset, distance) => (
    distance > 0 ? origin - offset : origin + offset
  );

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

export function getAnchorOffset(anchorIdx, { width, height }, anchors) {
  const offset = {
    x: (anchorIdx + 1) * width / (anchors.length + 1),
    y: height
  };
  // 向宿主节点埋一个属性
  Object.assign(anchors, { [`offset-${anchorIdx}`]: offset });
  return offset;
}
/**
 *
 * @param {*} anchorIdx
 * @param {*} anchors
 * @param {*} {x, y} node position
 */
export function getAnchorPosition(anchorIdx, anchors, { x, y }) {
  const offset = anchors[`offset-${anchorIdx}`];
  if (!offset) return;
  return {
    x: x + offset.x,
    y: y + offset.y
  };
}

export const getInLineRange = (num, small, large) => {
  if (num < small) return small;
  if (num > large) return large;
  return num;
};

/**
 * @param {int} x
 * @param {int} y
 * @param {object} rect {top, bottom, left, right}
 */
export const getInRectRange = (point, rect) => ({
  x: getInLineRange(point.x, rect.left, rect.right),
  y: getInLineRange(point.y, rect.top, rect.bottom),
});
