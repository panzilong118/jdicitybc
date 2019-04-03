import React from 'react'
import { Tooltip, Progress } from '../../index';

export default class Segment extends React.Component {
	render() {
		return (
		  <Tooltip title="3 done / 3 in progress / 4 to do">
		    <Progress percent={60} successPercent={30} />
		  </Tooltip>
		);
	}
}
