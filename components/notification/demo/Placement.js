import React from 'react';
import { Button, Select, Notification } from '../../index';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const openNotification = () => {
  Notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default class Placement extends React.Component{
  render() {
      return (
        <div>
          <Select
            defaultValue="topRight"
            style={{ width: 120, marginRight: 10 }}
            onChange={(val) => {
              Notification.config({
                placement: val,
              });
            }}
          >
            {options.map(val => <Option key={val} value={val}>{val}</Option>)}
          </Select>
          <Button
            type="primary"
            onClick={openNotification}
          >
            Open the notification box
          </Button>
        </div>
      );
  }
}
