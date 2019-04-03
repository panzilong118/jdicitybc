import React from 'react'
import { Progress } from '../../index';


export default class Segment extends React.Component {
	render() {
		return (
			<Progress type="dashboard" percent={75} />
		);
	}
}
