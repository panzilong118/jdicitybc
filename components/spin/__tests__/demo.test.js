import * as React from "react";

import renderer from 'react-test-renderer';

import Spin from '../index';

describe('<Spin />', () => {
    it('Spin basic', () => {
        const SpinDemo = renderer.create(<Spin />);
        let snapsSpin = SpinDemo.toJSON();
        expect(snapsSpin).toMatchSnapshot();
    });

     it('Spin Inside a container', () => {
        const SpinDemo = renderer.create(
            <div className="example">
                <Spin />
            </div>
        );
        let snapsSpin = SpinDemo.toJSON();
        expect(snapsSpin).toMatchSnapshot();
    });
});
