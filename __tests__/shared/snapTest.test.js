/**
 * Created by huangxiao3 on 2018/3/13.
 */
import * as React from "react";
import renderer from 'react-test-renderer';
import Input from '../../components/input';
import { Col, Row } from '../../components/grid';
describe('<Input/>', () => {
    it('demo test Snapshot', () => {
        // const componentOri = renderer.create(<Input/>);
        // let snapshotOri = componentOri.toJSON();
        // expect(snapshotOri).toMatchSnapshot();

        const componentAddon = renderer.create(<Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />);
        let snapshotAddon = componentAddon.toJSON();
        expect(snapshotAddon).toMatchSnapshot();

        const componentGrid = renderer.create(
            <Row gutter={16}>
                <Col span={8}>
                    123
                </Col>
                <Col span={8}>
                    456
                </Col>
                <Col span={8}>
                    789
                </Col>
            </Row>
        );
        let snapsGrid = componentGrid.toJSON();
        expect(snapsGrid).toMatchSnapshot();


        // snapshot.props.focus();
        // snapshot = component.toJSON();
        // expect(snapshot).toMatchSnapshot();

    });
});