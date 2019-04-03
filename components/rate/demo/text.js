import React from 'react';
import { Rate } from '../../index';

export default class Rater extends React.Component {
  state = {
    value: 3,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="jc-rate-text">{value} stars</span>}
      </span>
    );
  }
}

