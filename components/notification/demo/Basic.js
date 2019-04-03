import React from 'react';
import { Button, Notification } from '../../index';


const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};
export default class Basic extends React.Component{
	render() {
  		return (
            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
  		);
	}
}
