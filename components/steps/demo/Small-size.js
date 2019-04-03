import React from 'react';
import { Steps } from '../../index';
const Step = Steps.Step;

export default class Smallsize extends React.Component {
	render(){
		return (
		  <Steps size="small" current={1}>
		    <Step title="Finished" />
		    <Step title="In Progress" />
		    <Step title="Waiting" />
		  </Steps>
		);
	}
}