// ---
// order: 1
// title:
//   zh-CN: 不可用
//   en-US: Disabled
// ---

// ## zh-CN

// Switch 失效状态。

// ## en-US

// Disabled state of `Switch`.

// ````jsx
import * as React from 'react';

import { Switch, Button } from '../../index';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }
    toggle = () => {
        this.setState({
            disabled: !this.state.disabled
        });
    }
    render() {
        return (
            <div>
                <Switch disabled={this.state.disabled} defaultChecked />
                <br />
                <Button type='primary' onClick={this.toggle}>Toggle disabled</Button>
            </div>
        );
    }
}

// ReactDOM.render(<App />, mountNode);
// ````
