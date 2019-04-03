'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _interface = require('./interface');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectionCheckboxAll = function (_React$Component) {
    _inherits(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        _classCallCheck(this, SelectionCheckboxAll);

        var _this = _possibleConstructorReturn(this, (SelectionCheckboxAll.__proto__ || Object.getPrototypeOf(SelectionCheckboxAll)).call(this, props));

        _this.handleSelectAllChagne = function (e) {
            var checked = e.target.checked;
            _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
        };

        _this.defaultSelections = props.hideDefaultSelections ? [] : [{
            key: 'all',
            text: props.locale.selectAll,
            onSelect: function onSelect() {}
        }, {
            key: 'invert',
            text: props.locale.selectInvert,
            onSelect: function onSelect() {}
        }];

        _this.unsubscribe = function () {};

        _this.state = {
            checked: _this.getCheckState(props),
            indeterminate: _this.getIndeterminateState(props)
        };
        return _this;
    }

    _createClass(SelectionCheckboxAll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setCheckState(nextProps);
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

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                _this2.setCheckState(_this2.props);
            });
        }
    }, {
        key: 'checkSelection',
        value: function checkSelection(data, type, byDefaultChecked) {
            var _props = this.props,
                store = _props.store,
                getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
                getRecordKey = _props.getRecordKey;
            // type should be 'every' | 'some'

            if (type === 'every' || type === 'some') {
                return byDefaultChecked ? data[type](function (item, i) {
                    return getCheckboxPropsByItem(item, i).defaultChecked;
                }) : data[type](function (item, i) {
                    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
                });
            }
            return false;
        }
    }, {
        key: 'setCheckState',
        value: function setCheckState(props) {
            var checked = this.getCheckState(props);
            var indeterminate = this.getIndeterminateState(props);
            if (checked !== this.state.checked) {
                this.setState({ checked: checked });
            }
            if (indeterminate !== this.state.indeterminate) {
                this.setState({ indeterminate: indeterminate });
            }
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                data = props.data;

            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
            }
            return checked;
        }
    }, {
        key: 'getIndeterminateState',
        value: function getIndeterminateState(props) {
            var store = props.store,
                data = props.data;

            var indeterminate = void 0;
            if (!data.length) {
                indeterminate = false;
            } else {
                indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            return indeterminate;
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus() {
            var _this3 = this;

            var selections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            return selections.map(function (selection, index) {
                return React.createElement(
                    _menu2.default.Item,
                    { key: selection.key || index },
                    React.createElement(
                        'div',
                        { onClick: function onClick() {
                                _this3.props.onSelect(selection.key, index, selection.onSelect);
                            } },
                        selection.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                prefixCls = _props2.prefixCls,
                selections = _props2.selections,
                getPopupContainer = _props2.getPopupContainer;
            var _state = this.state,
                checked = _state.checked,
                indeterminate = _state.indeterminate;


            var selectionPrefixCls = prefixCls + '-selection';

            var customSelections = null;

            if (selections) {
                var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;

                var menu = React.createElement(
                    _menu2.default,
                    { className: selectionPrefixCls + '-menu', selectedKeys: [] },
                    this.renderMenus(newSelections)
                );

                customSelections = newSelections.length > 0 ? React.createElement(
                    _dropdown2.default,
                    { overlay: menu, getPopupContainer: getPopupContainer },
                    React.createElement(
                        'div',
                        { className: selectionPrefixCls + '-down' },
                        React.createElement(_icon2.default, { type: 'down' })
                    )
                ) : null;
            }

            return React.createElement(
                'div',
                { className: selectionPrefixCls },
                React.createElement(_checkbox2.default, {
                    className: (0, _classnames2.default)(_defineProperty({}, selectionPrefixCls + '-select-all-custom', customSelections)),
                    checked: checked,
                    indeterminate: indeterminate,
                    disabled: disabled,
                    onChange: this.handleSelectAllChagne
                }),
                customSelections
            );
        }
    }]);

    return SelectionCheckboxAll;
}(React.Component);

SelectionCheckboxAll.propTypes = _extends({}, _interface.SelectionCheckboxAllProps);
exports.default = SelectionCheckboxAll;
//# sourceMappingURL=SelectionCheckboxAll.js.map