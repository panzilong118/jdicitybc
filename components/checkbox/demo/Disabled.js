// ---
// order: 1
// title:
//     zh-CN: 不可用
//     en-US: Disabled
// ---

// ## zh-CN

// checkbox 不可用。

// ## en-US

// Disabled checkbox.

// ````jsx
import React from 'react';
import { Checkbox } from '../../index';

export default function Disabled(props) {
    return  (
        <div>
            <Checkbox defaultChecked={false} disabled />
            <br />
            <Checkbox defaultChecked disabled />
          </div>
    );
}
