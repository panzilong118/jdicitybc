import React from 'react';
import { Alert } from '../../index';

export default class Basic extends React.Component{
	render() {
  		return (
  			<Alert message='Success Text' type='success' />
  		);
	}
}