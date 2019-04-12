import React from 'react';
import { Alert } from '../../index';


export default class Closetext extends React.Component{
	render() {
  		return (
 			<Alert message='Info Text' type='info' closeText='Close Now' />
  		);
	}
}