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
// The basic example.
//
// ````jsx

import React from 'react';
import { Popconfirm, message } from '../../index';

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

export default class Basic extends React.Component {
  render() {
    return (
      <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </Popconfirm>
    );
  }
}
