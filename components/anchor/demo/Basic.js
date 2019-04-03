// <!-- ---
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
// ```jsx -->

import React from 'react';
import { Anchor } from '../../index';
const { Link } = Anchor;

export default class Basic extends React.Component {
  render() {
    return (
      <Anchor>
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
