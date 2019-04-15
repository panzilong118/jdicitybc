import React from 'react';
import { get, debounce } from 'lodash';
import './style/job.less';
import { getTranslate, dragHandler } from './util/drag';
import { getAnchorOffset } from './util/computePosition';
import Tooltip from './util/Tooltip';
import { validFunc } from './util/validate';

class Job extends React.Component {
  state = {
    resizeNodeIdx: -1
  };

  restoreStyle = debounce(() => {
    // eslint-disable-next-line
    this.setState({ resizeNodeIdx: -1 });
  }, 1000);

  getAnchor(anchors, { height, width }, nodeIdx, canDrag) {
    const len = get(anchors, 'length');
    if (!len) return;

    return anchors.map(({ key, type }, idx) => {
      const { x, y } = getAnchorOffset(idx, { height, width }, anchors);
      return (
        key ? <Tooltip
          key={`anchor-${idx}`}
          limit="0"
          title={`字段名: ${key}, 类型: ${type}`}
          render={() => (
            <div
              style={{ top: y, left: x }}
              className="input"
              ref={el => canDrag && el && this.mouseMove(el, nodeIdx, idx)}
              onMouseEnter={() => this.setTarget(nodeIdx, idx)}
            />
          )}
        /> : <div
          style={{ top: y, left: x }}
          key={`anchor-${idx}`}
          className="input"
          ref={el => (
            canDrag && el && this.mouseMove(el, nodeIdx, idx)
          )}
          onMouseEnter={() => this.setTarget(nodeIdx, idx)}
        >
        </div>
      );
    });
  }

  setTarget = (target, targetAnchor) => {
    const { tmpLine } = this;
    if (!tmpLine) return;
    const { onDrawLine, onDragLine } = this.props;
    const line = {
      ...tmpLine,
      target,
      targetAnchor
    };
    onDragLine({});
    onDrawLine(line);
  };

  get dragHandler() {
    const { scale } = this.props;
    return dragHandler(scale);
  }

  getFlexibleControl(node) {
    const { id } = node;
    const colCtrl = [0, '100%'].map(left => (
      <div
        key={`col-${id}-${left}`}
        className="flexibleControl"
        style={{
          left,
          top: 0,
          bottom: 0,
          cursor: left && 'col-resize'
        }}
        ref={el => left && this.resize(el, node, 'dx')}
      />
    ));
    const rowCtrl = [0, '100%'].map(top => (
      <div
        key={`row-${id}-${top}`}
        className="flexibleControl"
        style={{
          top,
          left: 0,
          right: 0,
          cursor: top && 'row-resize'
        }}
        ref={el => top && this.resize(el, node, 'dy')}
      />
    ));
    const bottomRightCtrl = (
      <svg
        key={`br-${id}`}
        height="12"
        width="12"
        className="bottomRight"
        ref={el => this.resize(el, node)}
      >
        <polygon points="0,12 12,12 12,0" />
        Sorry, your browser does not support inline SVG.
      </svg>
    );
    return [...rowCtrl, ...colCtrl, bottomRightCtrl];
  }

  mouseMove = (el, source, sourceAnchor) => {
    const { nodes } = this.props;
    const { onDragLine } = this.props;
    this.dragHandler(
      el,
      point => {
        const { x, y } = nodes[source];
        this.tmpLine = {
          source,
          sourceAnchor,
          // fix anchor position offset
          targetPosi: {
            x: point.x + x,
            y: point.y + y
          }
        };
        onDragLine(this.tmpLine);
      },
      () => {
        this.tmpLine = null;
        onDragLine({});
      }
    );
  };

  resize = (el, node, direction) => {
    const { onResize } = this.props;
    const getDistance = (curDirect, cur, boxLen) =>
      (direction && direction !== curDirect ? boxLen : cur);

    this.dragHandler(el, point => {
      const { x, y } = point;
      const { id, width, height } = node;
      const size = {
        width: getDistance('dx', x, width),
        height: getDistance('dy', y, height)
      };
      validFunc(onResize, id, size);
      const { resizeNodeIdx } = this.state;
      resizeNodeIdx === -1 && this.setState({ resizeNodeIdx: node.id });
      this.restoreStyle(el);
    });
  };

  bindDrag(el, { idx }) {
    const { onDrag } = this.props;
    if (!onDrag) return;
    // 当鼠标移动一些距离的时候才开始处罚onDrag
    let moveable = 0;
    const reset = debounce(() => { moveable = 0; }, 1000);
    this.dragHandler(el, point => {
      moveable += 1;
      if (moveable < 3) return;
      onDrag(idx, point);
      reset();
    });
  }

  render() {
    const { resizeNodeIdx } = this.state;
    const {
      nodes, render, onClick, flexible
    } = this.props;
    return (
      <React.Fragment>
        {nodes.map((node, idx) => {
          const {
            x, y, width, height
          } = node;

          // 错上修错 -- 需要修改成根据 nodeId 和 anchorId 来标识节点和圈圈
          return !node.ext.delete && (
            <span
              key={`job-wrap-${idx}`}
              className="jobWrap"
              ref={el => el && this.bindDrag(el, { idx })}
              style={getTranslate({ x, y })}
            >
              <div
                key={`job-${idx}`}
                className={`
                    job
                    ${resizeNodeIdx === node.id ? 'resize' : ''}
                  `}
                style={{ width, height }}
                onClick={e => onClick(e, idx)}
              >
                {this.getAnchor(
                  node.input,
                  {
                    width,
                    height: 0
                  },
                  idx
                )}
                {this.getAnchor(
                  node.output,
                  {
                    width,
                    height
                  },
                  idx,
                  true
                )}
                {flexible && this.getFlexibleControl(node)}
                {render(node.ext, idx)}
              </div>
            </span>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Job;
