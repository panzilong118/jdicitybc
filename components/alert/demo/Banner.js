import React from 'react';
import { Alert } from '../../index';

export default class Banner extends React.Component{
  render() {
      return (
        <div>
          <Alert message='Warning text' banner />
          <br />
          <Alert message='Very long warning text warning text text text text text text text' banner closable />
          <br />
          <Alert showIcon={false} message='Warning text without icon' banner />
          <br />
          <Alert type='error' message='Error text' banner />
        </div>
      );
  }
}
