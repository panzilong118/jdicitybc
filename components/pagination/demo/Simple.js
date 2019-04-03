import React from 'react';
import { Pagination } from '../../index';


export default class Simple extends React.Component{
	render() {
  		return (
  			<Pagination simple defaultCurrent={2} total={50} />
  		);
	}
}
