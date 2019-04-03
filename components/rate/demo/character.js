import React from 'react';
import { Rate, Icon } from '../../index';

export default class Character extends React.Component {
	render(){
		return(
			  <div>
			    <Rate character={<Icon type="heart" />} allowHalf />
			    <br />
			    <Rate character='A' allowHalf style={{ fontSize: 36 }} />
			    <br />
			    <Rate character='好' allowHalf />
			  </div>
		);
	}
}
