import React from 'react';
import { Alert } from '../../index';


export default class Closable extends React.Component{
  onClose = function (e) {
    console.log(e, 'I was closed.');
  };
  render() {
      return (
        <Alert
            message='Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text'
	        type='warning'
	        closable
	        onClose={this.onClose}
        />,
        <Alert
        	message='Error Text'
        	description='Error Description Error Description Error Description Error Description Error Description Error Description'
	        type='error'
	        closable
	        onClose={this.onClose}
        />
      );
  }
}