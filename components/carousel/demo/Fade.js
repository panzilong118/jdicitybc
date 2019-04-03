// ---
// order: 2
// title:
//   zh-CN: 渐显
//   en-US: Fade in
// ---
//
// ## zh-CN
//
// 切换效果为渐显。
//
// ## en-US
//
// Slides use fade for transition.
//
// ````jsx

import React from 'react';
import { Carousel } from '../../index';

export default class Basic extends React.Component {
  render() {
    return (
      <Carousel effect="fade">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}
