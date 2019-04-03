import * as React from "react";

import renderer from 'react-test-renderer';

import Basic from '../demo/Basic';

import ConditionalTrigger from '../demo/Dynamic-trigger';

import Locale from '../demo/Locale';

import Placement from '../demo/Placement';

describe('<Popconfirm />', () => {

    it('Basic usage of Popconfirm', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('ConditionalTrigger usage of Popconfirm', () => {
        const demo = renderer.create(<ConditionalTrigger />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Locale usage of Popconfirm', () => {
        const demo = renderer.create(<Locale />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Placement usage of Popconfirm', () => {
        const demo = renderer.create(<Placement />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

});
