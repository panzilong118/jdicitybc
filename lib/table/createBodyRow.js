'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createTableRow;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _createStore = require('./createStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createTableRow() {
    var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';

    var BodyRow = function (_React$Component) {
        _inherits(BodyRow, _React$Component);

        function BodyRow(props) {
            _classCallCheck(this, BodyRow);

            var _this = _possibleConstructorReturn(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).call(this, props));

            _this.store = props.store;

            var _this$store$getState = _this.store.getState(),
                selectedRowKeys = _this$store$getState.selectedRowKeys;

            _this.unsubscribe = function () {};

            _this.state = {
                selected: selectedRowKeys.indexOf(props.rowKey) >= 0
            };
            return _this;
        }

        _createClass(BodyRow, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.subscribe();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        }, {
            key: 'subscribe',
            value: function subscribe() {
                var _this2 = this;

                var _props = this.props,
                    store = _props.store,
                    rowKey = _props.rowKey;

                this.unsubscribe = store.subscribe(function () {
                    var _store$getState = _this2.store.getState(),
                        selectedRowKeys = _store$getState.selectedRowKeys;

                    var selected = selectedRowKeys.indexOf(rowKey) >= 0;
                    if (selected !== _this2.state.selected) {
                        _this2.setState({ selected: selected });
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var rowProps = (0, _omit2.default)(this.props, ['prefixCls', 'rowKey', 'store']);
                var className = (0, _classnames3.default)(this.props.className, _defineProperty({}, this.props.prefixCls + '-row-selected', this.state.selected));

                return React.createElement(
                    Component,
                    _extends({}, rowProps, { className: className }),
                    this.props.children
                );
            }
        }]);

        return BodyRow;
    }(React.Component);

    return BodyRow;
}
//# sourceMappingURL=createBodyRow.js.map