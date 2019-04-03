import * as React from "react";

import renderer from 'react-test-renderer';

import Basic from '../demo/Basic';

import Character from '../demo/Character';

import Clear from '../demo/Clear';

import Disabled from '../demo/Disabled';

import Half from '../demo/Half';

import Text from '../demo/Text';

describe('<Avatar />', () => {
    it('Basic 基本用法', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Character 其他字符', () => {
        const demo = renderer.create(<Character />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Clear star 清除', () => {
        const demo = renderer.create(<Clear />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Read only 只读', () => {
        const demo = renderer.create(<Disabled />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Half star 半星', () => {
        const demo = renderer.create(<Half />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Show copywriting 文案展现', () => {
        const demo = renderer.create(<Text />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
});