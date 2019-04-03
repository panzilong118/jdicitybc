// ---
// order: 2
// title:
//   zh-CN: 静态位置
//   en-US: Static Anchor
// ---
//
// ## zh-CN
//
// 不浮动，状态不随页面滚动变化。
//
// ## en-US
//
// Do not change state when page is scrolling.
//
// ```jsx

import React from 'react';
import { Anchor } from '../../index';
const { Link } = Anchor;

export default class Static extends React.Component {
  render() {
    return (
      <Anchor affix={false}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    );
  }
}
