import React from 'react'
import { Progress } from '../../index';


export default class Segment extends React.Component {
	render() {
		return (
		  <div>
		    <Progress type="circle" percent={75} />
		    <Progress type="circle" percent={70} status="exception" />
		    <Progress type="circle" percent={100} />
		  </div>
		);
	}
}
