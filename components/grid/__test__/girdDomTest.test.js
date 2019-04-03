/**
 * Created by huangxiao3 on 2018/3/20.
 */
import * as React from "react";
import renderer from 'react-test-renderer';
import { Col, Row } from '../index';
describe('<Input/>', () => {
    it('demo test Snapshot', () => {
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
    });
});