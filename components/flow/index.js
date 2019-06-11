/**
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

import React, { Component } from 'react';
// import { KEY_CODE } from 'src/config';
import { stopPropagation } from '../util/domEvent';
import './style/index.less';
import { getInRectRange } from './util/computePosition';
import { validFunc } from '../util/validate';
import Line from './line';
import Job from './job';
import Axis from './Axis';
import { INVALID_IDX, valideIdxCheck } from './util/validateCheck';

const originTmpLine = {
  source: null,
  sourceAnchor: null,
  target: {}
};

const KEY_CODE = {
  backspace: 8,
  delete: 46,
  left: 37,
  top: 38,
  right: 39,
  bottom: 40
};

class Flow extends Component {
  static defaultProps = {
    prefixCls: 'jdic-flow',
  };

  state = {
    selected: {
      job: INVALID_IDX,
      line: INVALID_IDX
    },
    tmpLine: { ...originTmpLine }
  };

  // blur|focus
  focus = false;

  // panel position of screen
  panelOffset = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };

  scroll = {
    top: 0,
    left: 0
  };

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
    this.panelBox.parentElement.removeEventListener(
      'scroll',
      this.onPanelScroll
    );
  }

  onPanelScroll = e => {
    this.scroll = {
      top: e.target.scrollTop,
      left: e.target.scrollLeft
    };
  };

  // 监听删除键 & 上下左右键
  onKeyDown = event => {
    const {
      onDeleteJob,
      onDeleteLine,
      onDrag,
      nodes,
      disable
    } = this.props;
    if (disable) return;

    const {
      selected: { job, line }
    } = this.state;
    if (this.actionValideDelete(event.keyCode)) {
      if (valideIdxCheck(job)) {
        validFunc(onDeleteJob, job);
      }

      if (valideIdxCheck(line)) {
        validFunc(onDeleteLine, line);
      }
      this.setState({ selected: {} });
    }
    // 上下左右键
    if (this.actionValideKeyDown(event.keyCode)) {
      event.preventDefault();
      const { x, y } = nodes[job];
      let newX = x;
      let newY = y;
      const code = event.keyCode;
      if (code === 37) newX--; // left
      if (code === 38) newY--; // top
      if (code === 39) newX++; // right
      if (code === 40) newY++; // bottom

      if (valideIdxCheck(job)) {
        validFunc(onDrag, job, { x: newX, y: newY });
      }
      this.setState({ selected: { job } });
    }
    this.setState({ selected: {} });
  }

  get linesWithCoordinate() {
    const { lines } = this.props;

    return lines.map(({ source, target }) => ({
      source,
      target,
      targetIdx: target
    }));
  }

  getPanelRange(idx) {
    const { nodes } = this.props;
    const { panelOffset } = this;
    const { width, height } = nodes[idx].width;
    const rect = {
      top: 0,
      left: 0,
      right: panelOffset.width - width,
      bottom: panelOffset.height - height
    };
    return rect;
  }

  bindPanelBox = el => {
    const panelBox = el;
    this.panelBox = el;
    this.panelOffset = panelBox.getBoundingClientRect();
    panelBox.onblur = () => {
      this.focus = false;
    };
    panelBox.onfocus = () => {
      this.focus = true;
    };

    panelBox.parentElement.addEventListener('scroll', this.onPanelScroll);
  };

  // 清除现有active样式
  active = (e, type, idx) => {
    e.stopPropagation();
    const { onSelectJob, disable } = this.props;
    if (disable) return;

    if (type === 'job' && valideIdxCheck(idx)) {
      validFunc(onSelectJob, idx);
    }
    this.setState({ selected: { [type]: idx } });
  };

  clearActive = () => {
    const { onSelectJob } = this.props;
    validFunc(onSelectJob, INVALID_IDX);
    this.setState({ selected: {} });
  }

  actionValideDelete = keyCode => {
    const allowCode = [
      KEY_CODE.backspace,
      KEY_CODE.delete
    ];
    return this.focus && allowCode.indexOf(keyCode) >= 0;
  };

  actionValideKeyDown = keyCode => {
    const allowCode = [
      KEY_CODE.left,
      KEY_CODE.top,
      KEY_CODE.right,
      KEY_CODE.bottom
    ];
    return this.focus && allowCode.indexOf(keyCode) >= 0;
  };

  bindDrag = (idx, { x, y }) => {
    const { onDrag, nodes } = this.props;
    const node = nodes[idx];
    const point = {
      x: x - node.width / 2,
      y: y - node.height / 2
    };
    onDrag(idx, getInRectRange(point, this.getPanelRange(idx)));
  };

  newTmpLine = ({ source, sourceAnchor, targetPosi }) => {
    if (!valideIdxCheck(source)) {
      this.setState({ tmpLine: originTmpLine });
      return;
    }

    this.setState({
      tmpLine: {
        source,
        sourceAnchor,
        targetPosi: getInRectRange(targetPosi, this.getPanelRange(0))
      }
    });
  };

  render() {
    const {
      className,
      style,
      scale = 100,
      disable,
      nodes = [],
      lines = [],
      render,
      onDrawLine,
      flexible,
      onResize,
      prefixCls
    } = this.props;
    const { tmpLine, selected } = this.state;
    const scalePercent = scale / 100;
    return (
      <div
        tabIndex="0"
        style={{ transform: `scale(${scalePercent})`, ...style }}
        className={`${prefixCls}-uc-flow-panel ${className}`}
        onMouseMove={this.onMouseMove}
        ref={el => el && this.bindPanelBox(el)}
        onClick={stopPropagation(this.clearActive)}
      >
        <Job
          scale={scalePercent}
          flexible={!disable && flexible}
          nodes={nodes}
          render={render}
          onResize={(...args) => flexible && validFunc(onResize, ...args)}
          onDrag={!disable && this.bindDrag}
          onDragLine={!disable && this.newTmpLine}
          onDrawLine={line => !disable && validFunc(onDrawLine, line)}
          activeIdx={selected.job}
          onClick={(e, idx) => this.active(e, 'job', idx)}
        />
        <svg className={`${prefixCls}-uc-flow`}>
          <Line
            lines={lines}
            nodes={nodes}
            activeIdx={selected.line}
            tmpLine={tmpLine}
            offset={this.offset}
            onClick={(e, idx) => this.active(e, 'line', idx)}
          />
          {!disable && <Axis x={3} y={4} />}
        </svg>
      </div>
    );
  }
}

export default Flow;
