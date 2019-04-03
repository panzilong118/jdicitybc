import React from 'react';

import renderer from 'react-test-renderer';

import Radio from '../index';
import DisableApp from '../demo/disable';
import RadioGroupMoreApp from '../demo/radiogroup-more';
import RadioGroupOptionApp from '../demo/radiogroup-options';
import RadioGroupApp from '../demo/radiogroup';
import SizeApp from '../demo/size';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}

describe('<Radio />', () => {
    it('Radio basic', () => {
        const RadioDemo = renderer.create(<Radio>Radio</Radio>);
        const snapsRadio = RadioDemo.toJSON();
        expect(snapsRadio).toMatchSnapshot();
    });

    it('Radiobutton', () => {
        const RadioDemo = renderer.create(<div>
            <div>
                <RadioGroup onChange={onChange} defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b'>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
                <RadioGroup onChange={onChange} defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b' disabled>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                </RadioGroup>
            </div>
            <div style={{ marginTop: 16 }}>
                <RadioGroup disabled onChange={onChange} defaultValue='a'>
                    <RadioButton value='a'>Hangzhou</RadioButton>
                    <RadioButton value='b'>Shanghai</RadioButton>
                    <RadioButton value='c'>Beijing</RadioButton>
                    <RadioButton value='d'>Chengdu</RadioButton>
                </RadioGroup>
            </div>
                                          </div>);
        const snapsRadio = RadioDemo.toJSON();
        expect(snapsRadio).toMatchSnapshot();
    });
    it('Radiogroup-with-name', () => {
        const RadioDemo = renderer.create(<RadioGroup name='radiogroup' defaultValue={1}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </RadioGroup>);
        const snapsRadio = RadioDemo.toJSON();
        expect(snapsRadio).toMatchSnapshot();
    });
    it('DisableApp', () => {
        const demo = renderer.create(<DisableApp />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
    it('RadioGroupMoreApp', () => {
        const demo = renderer.create(<RadioGroupMoreApp />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
    it('RadioGroupOptionApp', () => {
        const demo = renderer.create(<RadioGroupOptionApp />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
    it('RadioGroupApp', () => {
        const demo = renderer.create(<RadioGroupApp />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
    it('SizeApp', () => {
        const demo = renderer.create(<SizeApp />);
        let snapsDemo = demo.toJSON();
        expect(snapsDemo).toMatchSnapshot();
    });
});

