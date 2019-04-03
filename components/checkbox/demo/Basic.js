// ---
// order: 0
// title:
//     zh-CN: 基本用法
//     en-US: Basic
// ---

// ## zh-CN

// 简单的 checkbox。

// ## en-US

// Basic usage of checkbox.

// ````jsx
import React from 'react';
import { Checkbox } from '../../index';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function Basic(props) {
  return  <Checkbox onChange={onChange}>Checkbox</Checkbox>
}

 
