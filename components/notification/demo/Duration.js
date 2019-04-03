import React from 'react';
import { Button, Notification } from '../../index';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
    duration: 0,
  };
  Notification.open(args);
};

export default class Duration extends React.Component{
	render() {
  		return (
  			<Button type="primary" onClick={openNotification}>Open the notification box</Button>
  		);
	}
}

