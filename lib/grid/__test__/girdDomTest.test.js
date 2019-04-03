'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('<Input/>', function () {
    it('demo test Snapshot', function () {
        var componentGrid = _reactTestRenderer2.default.create(React.createElement(
            _index.Row,
            { gutter: 16 },
            React.createElement(
                _index.Col,
                { span: 8 },
                '123'
            ),
            React.createElement(
                _index.Col,
                { span: 8 },
                '456'
            ),
            React.createElement(
                _index.Col,
                { span: 8 },
                '789'
            )
        ));
        var snapsGrid = componentGrid.toJSON();
        expect(snapsGrid).toMatchSnapshot();
    });
}); /**
     * Created by huangxiao3 on 2018/3/20.
     */
//# sourceMappingURL=girdDomTest.test.js.map