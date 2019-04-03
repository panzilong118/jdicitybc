import * as React from 'react';

import renderer from 'react-test-renderer';

import Modal from '../index';

describe('<Modal />', () => {
    it('Spin basic', () => {
        const ModalDemo = renderer.create(<Modal />);
        const snapsModal = ModalDemo.toJSON();
        expect(snapsModal).toMatchSnapshot();
    });

    it('Spin Inside a container', () => {
        const ModalDemo = renderer.create(
            <div className='example'>
                <Modal />
            </div>
        );
        const snapsModal = ModalDemo.toJSON();
        expect(snapsModal).toMatchSnapshot();
    });
});
