// ---
// order: 1
// title:
//   zh-CN: 垂直
//   en-US: Vertical
// ---
//
// ## zh-CN
//
// 垂直显示。
//
// ## en-US
//
// Vertical pagination.
//
// ````jsx

import React from 'react';
import { Carousel } from '../../index';

export default class Basic extends React.Component {
  render() {
    return (
      <Carousel vertical>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    );
  }
}
