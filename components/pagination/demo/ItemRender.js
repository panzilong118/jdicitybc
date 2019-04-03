import React from 'react';
import { Pagination } from '../../index';

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  } else if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


export default class ItemRender extends React.Component{
	render() {
  		return (
  			<Pagination total={500} itemRender={itemRender} />
  		);
	}
}
