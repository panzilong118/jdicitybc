import React from 'react';
import { Mention } from '../../index';
const { toString } = Mention;

function onChange(editorState) {
  console.log(toString(editorState));
}

export default class Multilines extends React.Component{
	render() {
  		return (
		  <Mention
		    style={{ width: '100%', height: 100 }}
		    onChange={onChange}
		    suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
		    multiLines
		  />
  		);
	}
}

