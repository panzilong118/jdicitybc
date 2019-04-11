import React from 'react';

const fillColor = ['#979797', '#1890FF'];

export default function () {
  return ['marker-arrow', 'marker-arrow-active'].map((id, idx) => (
    <defs key={id}>
      <marker
        id={id}
        markerWidth="9"
        markerHeight="6"
        refX="9"
        refY="3"
        orient="auto"
      >
        <path fill={fillColor[idx]} d="M0,0 L0,6 L9,3 z" />
      </marker>
    </defs>
  ));
}
