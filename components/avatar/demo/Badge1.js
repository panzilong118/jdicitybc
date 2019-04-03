import React from 'react';
import { Avatar, Badge } from '../../index';

export default class Badge1 extends React.Component{
	render() {
  		return (
		    <span style={{ marginRight: 24 }}>
		      <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
		    </span>,
		    <span>
		      <Badge dot><Avatar shape="square" icon="user" /></Badge>
		    </span>
  		);
	}
}

