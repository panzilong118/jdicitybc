import React from 'react';
import { Rate } from '../../index';

export default class Disabled extends React.Component {
	render(){
		return (<Rate disabled defaultValue={2} />);
	}
}
