// ---
// order: 8
// title:
//   zh-CN: 带页签的卡片
//   en-US: With tabs
// ---

// ## zh-CN

// 可承载更多内容。

// ## en-US

// More content can be hosted.

// ````jsx
import * as React from 'react';

import { Card } from '../../index';

const tabList = [{
    key: 'tab1',
    tab: 'tab1'
}, {
    key: 'tab2',
    tab: 'tab2'
}];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>
};

const tabListNoTitle = [{
    key: 'article',
    tab: 'article'
}, {
    key: 'app',
    tab: 'app'
}, {
    key: 'project',
    tab: 'project'
}];

const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>
};

export default class TabsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'tab1',
            noTitleKey: 'app'
        };
    }
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }
    render() {
        return (
            <div>
                <Card
                    style={{ width: '100%' }}
                    title='Card title'
                    extra={<a href='#'>More</a>}
                    tabList={tabList}
                    onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                    {contentList[this.state.key]}
                </Card>
                <br /><br />
                <Card
                    style={{ width: '100%' }}
                    tabList={tabListNoTitle}
                    activeTabKey={this.state.noTitleKey}
                    onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                    {contentListNoTitle[this.state.noTitleKey]}
                </Card>
            </div>
        );
    }
}

// ReactDOM.render(
//   <TabsCard />
// , mountNode);
// ````
