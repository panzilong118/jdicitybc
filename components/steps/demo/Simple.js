import React from 'react';
import { Steps } from '../../index';
const Step = Steps.Step;


export default class Simple extends React.Component {
	render() {
		return (
		  <Steps current={1}>
		    <Step title="Finished" description="This is a description." />
		    <Step title="In Progress" description="This is a description." />
		    <Step title="Waiting" description="This is a description." />
		  </Steps>
		);
	}
}
