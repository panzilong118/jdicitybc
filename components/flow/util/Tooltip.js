/**
 * tooltip
 *
 * usage:
 *  <Tooltip
 *    title={title}
 *    limit={20}
 *    className={}
 *    render={}
 *    placement=right
 *  />
 */

import React from 'react';
import { Tooltip } from 'antd';
import { getType, stringRealLen, stringEllipsis } from 'uc-fun';

class UCToolTip extends React.Component {
  render() {
    const {
      title, limit, className, render, ...props
    } = this.props;
    const outOfRange = stringRealLen(title) > limit;

    const limitTitle = stringEllipsis(title, limit);
    const content = getType(render) === 'Function'
      ? render(limitTitle)
      : <span className={className}>{limitTitle}</span>;

    return outOfRange
      ? <Tooltip title={title} {...props}>{content}</Tooltip>
      : content;
  }
}

export default UCToolTip;
