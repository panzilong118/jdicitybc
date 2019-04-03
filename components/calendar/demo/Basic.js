// ---
// order: 0
// title:
//   zh-CN: 基本
//   en-US: Basic
// ---
//
// ## zh-CN
//
// 一个通用的日历面板，支持年/月切换。
//
// ## en-US
//
// A basic calendar component with Year/Month switch.
//
// ````jsx

import React from 'react';
import { Calendar } from '../../index';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default class Basic extends React.Component {
  render() {
    return (
      <Calendar onPanelChange={onPanelChange} />
    );
  }
}
