// ---
// order: 9
// title:
//   zh-CN: 支持更多内容配置
//   en-US: Support more content configuration
// ---

// ## zh-CN

// 一种支持封面、头像、标题和描述信息的卡片。

// ## en-US

// A Card that supports `cover`, `avatar`, `title` and `description`.

// ````jsx
import * as React from 'react';

import { Card, Icon, Avatar } from '../../index';

const { Meta } = Card;

export default function Demo() {
    return (
        <Card
            style={{ width: 300 }}
            cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
            actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
        >
            <Card.Meta
                avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                title='Card title'
                description='This is the description'
            />
        </Card>
    );
}

// ReactDOM.render(
//   <Card
//     style={{ width: 300 }}
//     cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
//     actions={[<Icon type='setting' />, <Icon type='edit' />, <Icon type='ellipsis' />]}
//   >
//     <Meta
//       avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
//       title='Card title'
//       description='This is the description'
//     />
//   </Card>
// , mountNode);
// ````
