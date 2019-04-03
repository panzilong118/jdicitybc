// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---
//
// ## zh-CN
//
// 最简单的用法。
//
// ## en-US
//
// The simplest usage.
//
// ````jsx

import React from 'react';
import { Tooltip } from '../../index';

export default class Basic extends React.Component {
  render() {
    return (
      <Tooltip title="prompt text">
        <span>Tooltip will show when mouse enter.</span>
      </Tooltip>
    );
  }
}
