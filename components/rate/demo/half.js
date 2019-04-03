import React from 'react';
import { Rate } from '../../index';

export default class Half extends React.Component {
	render(){
		return(<Rate allowHalf defaultValue={2.5} />);
	}
}
