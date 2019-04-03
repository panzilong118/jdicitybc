/**
 * Created by huangxiao3 on 2018/3/13.
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import * as React from "react";
import renderer from 'react-test-renderer';
import Input from '../../components/input';
import { shallow, mount } from 'enzyme'

const setup = () => {
    return shallow(<Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />);
}

describe('Input', () => {
    const testComponent = setup();
    // case1
    // 通过查找是否存在 Input,测试组件正常渲染
    it('Input Component should render', () => {
        //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
        // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        expect(testComponent.find('input').exists());
    })
});