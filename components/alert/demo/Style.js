import React from 'react';
import { Alert } from '../../index';

export default class Style extends React.Component{
	render() {
  		return (
		  <div>
		    <Alert message="Success Text" type="success" />
		    <Alert message="Info Text" type="info" />
		    <Alert message="Warning Text" type="warning" />
		    <Alert message="Error Text" type="error" />
		  </div>
  		);
	}
}
