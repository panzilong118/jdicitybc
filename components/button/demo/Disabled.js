import React from 'react';
import { Button } from '../../index';

export default class Disabled extends React.Component{
  render() {
    return (
     <div>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary(disabled)</Button>
        <br />
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
        <br />
        <Button>Ghost</Button>
        <Button disabled>Ghost(disabled)</Button>
        <br />
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed(disabled)</Button>
      </div>
    );
  }
}
