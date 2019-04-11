import * as d3 from './d3';

export const getTranslate = ({ x, y }) => ({ transform: `translate3d(${x}px, ${y}px, 0)` });

export const dragHandler = (scale = 1) => (selector, collection, onEnd) => {
  function stopPropagation() {
    d3.event.sourceEvent.stopPropagation();
  }
  function onDrag() {
    if (!collection) return;
    const { x, y } = d3.event;
    collection({ x: x / scale, y: y / scale });
  }
  d3.select(selector).call(
    d3.drag()
      // .subject(subject)
      .on('start', stopPropagation)
      .on('drag', onDrag)
      .on('end', onEnd)
  );
};

const CURVE_TENSION = 20;
export const getLinePath = ([start, end]) => {
  if (!start || !end) return;

  const startY = {
    x: start.x,
    y: start.y + CURVE_TENSION
  };

  const endY = {
    x: end.x,
    y: end.y - CURVE_TENSION
  };

  return d3.line()
    .x(i => i.x).y(i => i.y)
    .curve(d3.curveCatmullRom)(
      [start, startY, endY, end]
    );
};
