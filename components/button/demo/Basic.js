import React from 'react';
import { Button } from '../../index';

export default class Basic extends React.Component {
	render() {
		return (
			<div>
			    <Button type="primary">Primary</Button>
			    <Button>Default</Button>
			    <Button type="dashed">Dashed</Button>
			    <Button type="danger">Danger</Button>
			</div>
		);
	}
}
