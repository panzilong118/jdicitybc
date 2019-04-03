import React from 'react';
import { Mention } from '../../index';
const { toContentState } = Mention;

export default class Cintrolldersimple extends React.Component {
  state = {
    value: toContentState('@afc163'),
  }
  componentDidMount() {
    this.mention.focus();
  }
  handleChange = (editorState) => {
    this.setState({
      value: editorState,
    });
  }
  render() {
    return (
      <Mention
        ref={ele => this.mention = ele}
        suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

