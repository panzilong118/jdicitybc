import React from 'react';
import { Steps } from '../../index';
const Step = Steps.Step;

export default class ProgressDot extends React.Component {
	render() {
		return (
		  <Steps progressDot current={1}>
		    <Step title="Finished" description="This is a description." />
		    <Step title="In Progress" description="This is a description." />
		    <Step title="Waiting" description="This is a description." />
		  </Steps>
		);
	}
}
