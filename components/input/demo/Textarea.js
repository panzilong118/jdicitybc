// ---
// order: 5
// title:
//     zh-CN: 文本域
//     en-US: TextArea
// ---
//
// ## zh-CN
//
// 用于多行输入。
//
// ## en-US
//
// For multi-line input.
//
// ````jsx

import React from 'react';
import { Input } from '../../index';
const { TextArea } = Input;

export default class TextAreaDemo extends React.Component {
  render() {
    return (
      <TextArea rows={4} />
    );
  }
}
