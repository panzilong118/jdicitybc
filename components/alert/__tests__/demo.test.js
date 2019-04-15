/**
 * @jest-environment node
 */

import * as React from "react";

import renderer from 'react-test-renderer';

import Banner from '../demo/Banner';

import Basic from '../demo/Basic';

import Closable from '../demo/Closable';

import Closetext from '../demo/Closetext';

import Description from '../demo/Description';

import Icon from '../demo/Icon';

import Style from '../demo/Style';

describe('<Alert />', () => {
    it('Banner 顶部公告', () => {
        const demo = renderer.create(<Banner />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Basic 基本用法', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Closable 可关闭的警告提示', () => {
        const demo = renderer.create(<Closable />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Closetext 自定义关闭', () => {
        const demo = renderer.create(<Closetext />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Description 含有辅助性文字介绍', () => {
        const demo = renderer.create(<Description />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Icon 图标', () => {
        const demo = renderer.create(<Icon />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Style 四种样式', () => {
        const demo = renderer.create(<Style />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
});
