import React from 'react';
import { Button, Notification, Icon } from '../../index';

const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
};

export default class Customicon extends React.Component{
	render() {
  		return (
			<Button type="primary" onClick={openNotification}>Open the notification box</Button>
  		);
	}
}
