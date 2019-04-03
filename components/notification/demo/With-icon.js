import React from 'react';
import { Button, Notification } from '../../index';

const openNotificationWithIcon = (type) => {
  Notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default class Withicon extends React.Component{
  render() {
    return (
      <div>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </div>
    );
  }
}

// <style>
// .code-box-demo .ant-btn {
//   margin-right: 1em;
// }
// </style>
