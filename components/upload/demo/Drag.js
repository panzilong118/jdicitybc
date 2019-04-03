// ---
// order: 5
// title:
//   zh-CN: 拖拽上传
//   en-US: Drag and Drop
// ---
//
// ## zh-CN
//
// 把文件拖入指定区域，完成上传，同样支持点击上传。
//
// 设置 `multiple` 后，在 `IE10+` 可以一次上传多个文件。
//
// ## en-US
//
// You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.
//
// We can upload serveral files at once in modern browsers by giving the input the `multiple` attribute.
//
// ````jsx

import React from 'react';
import { Upload, Icon, message } from '../../index';
const Dragger = Upload.Dragger;

const props = {
  name: 'file',
  multiple: true,
  action: '//jsonplaceholder.typicode.com/posts/',
  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class Drag extends React.Component {
  render() {
    return (
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
      </Dragger>
    );
  }
}
