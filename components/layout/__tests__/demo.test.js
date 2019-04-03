import * as React from "react";

import renderer from 'react-test-renderer';

import Basic from '../demo/Basic';

import CustomTrigger from '../demo/CustomTrigger';

import FixedSider from '../demo/FixedSider';

import Fixed from '../demo/Fixed';

import Responsive from '../demo/Responsive';

import Side from '../demo/Side';

import TopSide2 from '../demo/TopSide2';

import TopSide from '../demo/TopSide';

import Top from '../demo/Top';





describe('<Layout />', () => {
    
    it('Classic page layouts', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('CustomTrigger', () => {
        const demo = renderer.create(<CustomTrigger />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Fixed Sider 固定侧边栏', () => {
        const demo = renderer.create(<FixedSider />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Fixed Header', () => {
        const demo = renderer.create(<Fixed />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Responsive 响应式布局', () => {
        const demo = renderer.create(<Responsive />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it("Two-columns layout. The sider menu can be collapsed when horizontal space is limited.", ()=>{
        const demo = renderer.create(<Side />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Both the top navigation and the sidebar, commonly used in documentation site', () => {
        const demo = renderer.create(<TopSide />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Both the top navigation and the sidebar, commonly used in application site', () => {
        const demo = renderer.create(<TopSide2 />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Header-Content-Footer', () => {
        const demo = renderer.create(<Top />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
});
