import * as React from "react";

import renderer from 'react-test-renderer';

import Basic from '../demo/Basic';

import Color from '../demo/Color';

import Custom from '../demo/Custom';

import Pending from '../demo/Pending';

describe('<Timeline />', () => {

    it('Basic usage of Timeline', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Color usage of Timeline', () => {
        const demo = renderer.create(<Color />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Custom usage of Timeline', () => {
        const demo = renderer.create(<Custom />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Pending usage of Timeline', () => {
        const demo = renderer.create(<Pending />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

});
