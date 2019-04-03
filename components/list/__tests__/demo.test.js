import * as React from "react";

import renderer from 'react-test-renderer';

import Basic from '../demo/Basic';

import Simple from '../demo/Simple';

import LoadMoreList from '../demo/Loadmore';

import Vertical from '../demo/Vertical';

import Grid from '../demo/Grid';

import Responsive from '../demo/Resposive';

import InfiniteListExample from '../demo/Infinite-load';

import VirtualizedExample from '../demo/Infinite-virtualized-load';

describe('<List />', () => {

    it('Basic usage of List', () => {
        const demo = renderer.create(<Basic />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Simple usage of List', () => {
        const demo = renderer.create(<Simple />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('LoadMoreList usage of List', () => {
        const demo = renderer.create(<LoadMoreList />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    it('Vertical usage of List', () => {
        const demo = renderer.create(<Vertical />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

    // it('Grid usage of List', () => {
    //     const demo = renderer.create(<Grid />);
    //     let snapsDemo = demo.toJSON();
    //     expect(snapsDemo).toMatchSnapshot();
    // });
    //
    // it('Responsive usage of List', () => {
    //     const demo = renderer.create(<Responsive />);
    //     let snapsDemo = demo.toJSON();
    //     expect(snapsDemo).toMatchSnapshot();
    // });
    //
    // it('InfiniteListExample usage of List', () => {
    //     const demo = renderer.create(<InfiniteListExample />);
    //     let snapsDemo = demo.toJSON();
    //     expect(snapsDemo).toMatchSnapshot();
    // });

    it('VirtualizedExample usage of List', () => {
        const demo = renderer.create(<VirtualizedExample />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });

});
