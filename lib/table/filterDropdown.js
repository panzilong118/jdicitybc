'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _domClosest = require('dom-closest');

var _domClosest2 = _interopRequireDefault(_domClosest);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _FilterDropdownMenuWrapper = require('./FilterDropdownMenuWrapper');

var _FilterDropdownMenuWrapper2 = _interopRequireDefault(_FilterDropdownMenuWrapper);

var _interface = require('./interface');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterMenu = function (_React$Component) {
    _inherits(FilterMenu, _React$Component);

    function FilterMenu(props) {
        _classCallCheck(this, FilterMenu);

        var _this = _possibleConstructorReturn(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

        _initialiseProps.call(_this);

        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;

        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {}, // 记录所有有选中子菜单的祖先菜单
            visible: visible
        };

        _this.neverShown = false;
        return _this;
    }

    _createClass(FilterMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var column = this.props.column;

            this.setNeverShown(column);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var column = nextProps.column;

            this.setNeverShown(column);
            var newState = {
                selectedKeys: [],
                visible: false
            };
            if ('selectedKeys' in nextProps) {
                newState.selectedKeys = nextProps.selectedKeys;
            }
            if ('filterDropdownVisible' in column) {
                newState.visible = column.filterDropdownVisible;
            }
            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            var column = this.props.column;

            if (!('filterDropdownVisible' in column)) {
                this.setState({ visible: visible });
            }
            if (column.onFilterDropdownVisibleChange) {
                column.onFilterDropdownVisibleChange(visible);
            }
        }
    }, {
        key: 'confirmFilter',
        value: function confirmFilter() {
            if (this.state.selectedKeys !== this.props.selectedKeys) {
                this.props.confirmFilter(this.props.column, this.state.selectedKeys);
            }
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(item) {
            var column = this.props.column;

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var input = multiple ? React.createElement(_checkbox2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : React.createElement(_radio2.default, { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });

            return React.createElement(
                _rcMenu.Item,
                { key: item.value },
                input,
                React.createElement(
                    'span',
                    null,
                    item.text
                )
            );
        }
    }, {
        key: 'hasSubMenu',
        value: function hasSubMenu() {
            var _props$column$filters = this.props.column.filters,
                filters = _props$column$filters === undefined ? [] : _props$column$filters;

            return filters.some(function (item) {
                return !!(item.children && item.children.length > 0);
            });
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(items) {
            var _this2 = this;

            return items.map(function (item) {
                if (item.children && item.children.length > 0) {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return React.createElement(
                        _rcMenu.SubMenu,
                        { title: item.text, className: subMenuCls, key: item.value.toString() },
                        _this2.renderMenus(item.children)
                    );
                }
                return _this2.renderMenuItem(item);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                column = _props.column,
                locale = _props.locale,
                prefixCls = _props.prefixCls,
                dropdownPrefixCls = _props.dropdownPrefixCls,
                getPopupContainer = _props.getPopupContainer;
            // default multiple selection in filter dropdown

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var dropdownMenuClass = (0, _classnames2.default)(_defineProperty({}, dropdownPrefixCls + '-menu-without-submenu', !this.hasSubMenu()));
            var menus = column.filterDropdown ? React.createElement(
                _FilterDropdownMenuWrapper2.default,
                null,
                column.filterDropdown
            ) : React.createElement(
                _FilterDropdownMenuWrapper2.default,
                { className: prefixCls + '-dropdown' },
                React.createElement(
                    _rcMenu2.default,
                    {
                        multiple: multiple,
                        onClick: this.handleMenuItemClick,
                        prefixCls: dropdownPrefixCls + '-menu',
                        className: dropdownMenuClass,
                        onSelect: this.setSelectedKeys,
                        onDeselect: this.setSelectedKeys,
                        selectedKeys: this.state.selectedKeys,
                        getPopupContainer: function getPopupContainer(triggerNode) {
                            return triggerNode.parentNode;
                        }
                    },
                    this.renderMenus(column.filters)
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-dropdown-btns' },
                    React.createElement(
                        'a',
                        {
                            className: prefixCls + '-dropdown-link confirm',
                            onClick: this.handleConfirm
                        },
                        locale.filterConfirm
                    ),
                    React.createElement(
                        'a',
                        {
                            className: prefixCls + '-dropdown-link clear',
                            onClick: this.handleClearFilters
                        },
                        locale.filterReset
                    )
                )
            );

            return React.createElement(
                _dropdown2.default,
                {
                    trigger: ['click'],
                    overlay: menus,
                    visible: this.neverShown ? false : this.state.visible,
                    onVisibleChange: this.onVisibleChange,
                    getPopupContainer: getPopupContainer,
                    forceRender: true
                },
                this.renderFilterIcon()
            );
        }
    }]);

    return FilterMenu;
}(React.Component);

FilterMenu.propTypes = _extends({}, _interface.FilterMenuProps);
FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},
    column: {}
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNeverShown = function (column) {
        var rootNode = ReactDOM.findDOMNode(_this3);
        var filterBelongToScrollBody = !!(0, _domClosest2.default)(rootNode, '.jc-table-scroll');
        if (filterBelongToScrollBody) {
            // When fixed column have filters, there will be two dropdown menus
            // Filter dropdown menu inside scroll body should never be shown
            // To fix https://github.com/ant-design/ant-design/issues/5010 and
            // https://github.com/ant-design/ant-design/issues/7909
            _this3.neverShown = !!column.fixed;
        }
    };

    this.setSelectedKeys = function (_ref) {
        var selectedKeys = _ref.selectedKeys;

        _this3.setState({ selectedKeys: selectedKeys });
    };

    this.handleClearFilters = function () {
        _this3.setState({
            selectedKeys: []
        }, _this3.handleConfirm);
    };

    this.handleConfirm = function () {
        _this3.setVisible(false);
        _this3.confirmFilter();
    };

    this.onVisibleChange = function (visible) {
        _this3.setVisible(visible);
        if (!visible) {
            _this3.confirmFilter();
        }
    };

    this.handleMenuItemClick = function () {
        var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { keyPath: '', key: '' };

        if (info.keyPath.length <= 1) {
            return;
        }
        var keyPathOfSelectedItem = _this3.state.keyPathOfSelectedItem;
        if (_this3.state.selectedKeys.indexOf(info.key) >= 0) {
            // deselect SubMenu child
            delete keyPathOfSelectedItem[info.key];
        } else {
            // select SubMenu child
            keyPathOfSelectedItem[info.key] = info.keyPath;
        }
        _this3.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
    };

    this.renderFilterIcon = function () {
        var _props2 = _this3.props,
            column = _props2.column,
            locale = _props2.locale,
            prefixCls = _props2.prefixCls;

        var filterIcon = column.filterIcon;
        var dropdownSelectedClass = _this3.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';

        return filterIcon ? React.cloneElement(filterIcon, {
            title: locale.filterTitle,
            className: (0, _classnames2.default)(filterIcon.className, _defineProperty({}, prefixCls + '-icon', true))
        }) : React.createElement(_icon2.default, { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass });
    };
};

exports.default = FilterMenu;
//# sourceMappingURL=filterDropdown.js.map