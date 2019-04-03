import React from 'react';
import { Mention } from '../../index';
const { toString } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}


export default class Placement extends React.Component{
  render() {
      return (
        <Mention
          style={{ width: '100%' }}
          onChange={onChange}
          suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
          onSelect={onSelect}
          placement="top"
        />
      );
  }
}

