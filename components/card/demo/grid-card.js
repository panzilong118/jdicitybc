// ---
// order: 6
// title:
//   zh-CN: 网格型内嵌卡片
//   en-US: Grid card
// ---

// ## zh-CN

// 一种常见的卡片内容区隔模式。

// ## en-US

// Grid style card content.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

const gridStyle = {
    width: '25%',
    textAlign: 'center'
};

export default function Demo() {
    return (
        <Card title='Card Title'>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
    );
}
// ReactDOM.render(
//   <Card title='Card Title'>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//     <Card.Grid style={gridStyle}>Content</Card.Grid>
//   </Card>
// , mountNode);
// ````
