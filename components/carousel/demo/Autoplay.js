// ---
// order: 3
// title:
//   zh-CN: 自动切换
//   en-US: Scroll automatically
// ---
//
// ## zh-CN
//
// 定时切换下一张。
//
// ## en-US
//
// Timing of scrolling to the next card/picture.
//
// ````jsx

import React from 'react';
import { Carousel } from '../../index';

export default class Autoplay extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}
