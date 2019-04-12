import React from 'react';

export default function Axis({ x, y }) {
  const getLine = (num, getProps) => [...Array(num)].map((i, idx) => {
    const temp = `${idx * 100}%`;
    const rate = `${temp / num}%`;
    return <line key={idx} {...getProps(rate)} />;
  });
  return (
    <g stroke="rgba(255, 255, 255, .5)">
      {getLine(x, rate => ({
        x1: 0, y1: rate, x2: '100%', y2: rate
      }))}
      {getLine(y, rate => ({
        y1: 0, x1: rate, y2: '100%', x2: rate
      }))}
    </g>
  );
}
