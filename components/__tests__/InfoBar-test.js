'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _chai = require('chai');

var _components = require('components');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _create = require('redux/create');

var _create2 = _interopRequireDefault(_create);

var _ApiClient = require('helpers/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _ApiClient2.default();

describe('InfoBar', function () {
  var mockStore = {
    info: {
      load: function load() {},
      loaded: true,
      loading: false,
      data: {
        message: 'This came from the api server',
        time: Date.now()
      }
    }
  };
  var store = (0, _create2.default)(_reactRouter.browserHistory, client, mockStore);
  var renderer = (0, _reactAddonsTestUtils.renderIntoDocument)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store, key: 'provider' },
    _react2.default.createElement(_components.InfoBar, null)
  ));
  var dom = _reactDom2.default.findDOMNode(renderer);

  it('should render correctly', function () {
    return (0, _chai.expect)(renderer).to.be.ok;
  });

  it('should render with correct value', function () {
    var text = dom.getElementsByTagName('strong')[0].textContent;
    (0, _chai.expect)(text).to.equal(mockStore.info.data.message);
  });

  it('should render with a reload button', function () {
    var text = dom.getElementsByTagName('button')[0].textContent;
    (0, _chai.expect)(text).to.be.a('string');
  });

  it('should render the correct className', function () {
    var styles = require('components/InfoBar/InfoBar.scss');
    (0, _chai.expect)(styles.infoBar).to.be.a('string');
    (0, _chai.expect)(dom.className).to.include(styles.infoBar);
  });
});
//# sourceMappingURL=InfoBar-test.js.map