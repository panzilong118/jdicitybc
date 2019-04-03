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
// Basic usage.
//
// ````jsx
import React from 'react';
import { Carousel } from '../../index';

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default class Basic extends React.Component {
  render() {
    return (
      <Carousel afterChange={onChange}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}
