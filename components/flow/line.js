/**
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

import React from 'react';
// import styles from './line.less';
import { getLinePath } from './util/drag';
import Arrows from './Arrows';
import { getAnchorPosition } from './util/computePosition';
import { valideIdxCheck } from './util/validateCheck';

class Line extends React.Component {
  get linesEl() {
    const {
      nodes,
      lines, activeIdx, tmpLine
    } = this.props;
    const linesEl = lines.map((line, idx) => {
      const {
        source, target,
        sourceAnchor, targetAnchor
      } = line;

      const sourcePosition = getAnchorPosition(
        sourceAnchor, nodes[source].output, nodes[source]
      );
      const targetPosition = getAnchorPosition(
        targetAnchor, nodes[target].input, nodes[target]
      );
      const active = idx === activeIdx;
      const path = getLinePath([sourcePosition, targetPosition]);
      return this.buildLine(active, path, idx);
    });

    const { source, sourceAnchor, targetPosi } = tmpLine;
    if (valideIdxCheck(source)) {
      const sourcePosition = getAnchorPosition(
        sourceAnchor, nodes[source].output, nodes[source]
      );

      const path = getLinePath([sourcePosition, targetPosi]);
      linesEl.push(this.buildLine(false, path, 'tmp'));
    }
    return linesEl;
  }

  buildLine(active, path, idx) {
    const { onClick } = this.props;
    return (
      <path
        key={`line-${idx}`}
        markerEnd={`url(#marker-arrow${active ? '-active' : ''})`}
        className={`line ${active ? 'active' : ''}`}
        d={path}
        onClick={e => onClick(e, idx)}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Arrows></Arrows>
        { this.linesEl }
      </React.Fragment>
    );
  }
}

export default Line;
