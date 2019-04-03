import * as React from "react";

import renderer from 'react-test-renderer';

import Horizontal from '../demo/Horizontal';

import Inline from '../demo/Inline';

import InlineCollapsed from '../demo/InlineCollapsed';

import SiderCurrent from '../demo/SiderCurrent';

// import SwitchMode from '../demo/SwitchMode';

// import Theme from '../demo/Theme';

import Vertical from '../demo/Vertical';


describe('<Menu />', () => {
    
    it('Horizontal top navigation menu.', () => {
        const demo = renderer.create(<Horizontal />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Horizontal top navigation menu.', () => {
        const demo = renderer.create(<Inline />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it("Inline menu could be collapsed", ()=>{
        const demo = renderer.create(<InlineCollapsed />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it("点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁", ()=>{
        const demo = renderer.create(<SiderCurrent />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    // it("Show the dynamic switching mode (between 'inline' and 'vertical').", ()=>{
    //     const demo = renderer.create(<SwitchMode />);
    //     let snapsDemo = demo.toJSON();
    //     expect(snapsDemo).toMatchSnapshot();
    // });

    // it("There are two built-in themes: 'light' and 'dark'. The default value is 'light').", ()=>{
    //     const demo = renderer.create(<Theme />);
    //     let snapsDemo = demo.toJSON();
    //     expect(snapsDemo).toMatchSnapshot();
    // });
    
    it("Submenus open as pop-ups", ()=>{
        const demo = renderer.create(<Vertical />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
    
});
