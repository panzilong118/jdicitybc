// ---
// order: 6
// title:
//   zh-CN: 图片列表样式
//   en-US: Pictures with list style
// ---
//
// ## zh-CN
//
// 上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。
//
// ## en-US
//
// If uploaded file is a picture, the thumbnail can be shown. `IE8/9` do not support local thumbnail show. Please use `thumbUrl` instead.
//
//
// ````jsx

import React from 'react';
import { Upload, Button, Icon } from '../../index';

const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};


export default class PictureStyle extends React.Component {
  render() {
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
        <br />
        <br />
        <Upload {...props2}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
      </div>
    );
  }
}
