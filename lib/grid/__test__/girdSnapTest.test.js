'use strict';

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _index = require('../index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by huangxiao3 on 2018/3/20.
 */
(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });


var setup = function setup() {
    return (0, _enzyme.shallow)(React.createElement(
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
};

describe('Input', function () {
    var testComponent = setup();
    // case1
    // 通过查找是否存在 Input,测试组件正常渲染
    it('Input Component should render', function () {
        //.find(selector) 是 Enzyme shallow Rendering 提供的语法, 用于查找节点
        // 详细用法见 Enzyme 文档 http://airbnb.io/enzyme/docs/api/shallow.html
        expect(testComponent.find('div').exists());
    });
});
//# sourceMappingURL=girdSnapTest.test.js.map