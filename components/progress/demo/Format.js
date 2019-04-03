import React from 'react'
import { Progress } from '../../index';


export default class Segment extends React.Component {
	render() {
		return (
		  <div>
		    <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
		    <Progress type="circle" percent={100} format={() => 'Done'} />
		  </div>
		);
	}
}
