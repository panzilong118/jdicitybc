import React from 'react';
import { Steps } from '../../index';
const Step = Steps.Step;

export default class Error extends React.Component {
	render(){
		return (
			<Steps current={1} status="error">
			    <Step title="Finished" description="This is a description" />
			    <Step title="In Process" description="This is a description" />
			    <Step title="Waiting" description="This is a description" />
			</Steps>
		);
	}
}