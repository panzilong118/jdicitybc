import React from 'react';
import { Mention } from '../../index';
const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

export default class Basic extends React.Component{
  render() {
      return (
        <Mention
          style={{ width: '100%' }}
          onChange={onChange}
          defaultValue={toContentState('@afc163')}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          onSelect={onSelect}
        />
      );
  }
}