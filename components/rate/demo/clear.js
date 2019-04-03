import React from 'react';
import { Rate } from '../../index';

export default class Clear extends React.Component {
	render(){
		return(
			<div>
			    <Rate defaultValue={3} /> allowClear: true
			    <br />
			    <Rate allowClear={false} defaultValue={3} /> allowClear: false
			</div>
		);
	}
}
