'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _SelectionBox = require('./SelectionBox');

var _SelectionBox2 = _interopRequireDefault(_SelectionBox);

var _SelectionCheckboxAll = require('./SelectionCheckboxAll');

var _SelectionCheckboxAll2 = _interopRequireDefault(_SelectionCheckboxAll);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColumnGroup = require('./ColumnGroup');

var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

var _createBodyRow = require('./createBodyRow');

var _createBodyRow2 = _interopRequireDefault(_createBodyRow);

var _util = require('./util');

var _interface = require('./interface');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}

var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};

/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */
var emptyObject = {};

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _initialiseProps.call(_this);

        (0, _warning2.default)(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: https://u.ant.design/fixed-columns.');
        _this.components = undefined;

        _this.columns = props.columns || (0, _util.normalizeColumns)(props.children);

        _this.createComponents(props.components);

        _this.state = _extends({}, _this.getDefaultSortOrder(_this.columns), {
            // 减少状态
            filters: _this.getFiltersFromColumns(),
            pagination: _this.getDefaultPagination(props)
        });

        _this.CheckboxPropsCache = {};

        _this.store = (0, _createStore2.default)({
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    _createClass(Table, [{
        key: 'getDefaultSelection',
        value: function getDefaultSelection() {
            var _this2 = this;

            var _props$rowSelection = this.props.rowSelection,
                rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

            if (!rowSelection.getCheckboxProps) {
                return [];
            }
            return this.getFlatData().filter(function (item, rowIndex) {
                return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
            }).map(function (record, rowIndex) {
                return _this2.getRecordKey(record, rowIndex);
            });
        }
    }, {
        key: 'getDefaultPagination',
        value: function getDefaultPagination(props) {
            var pagination = props.pagination || {};
            return this.hasPagination(props) ? _extends({}, defaultPagination, pagination, {
                current: pagination.defaultCurrent || pagination.current || 1,
                pageSize: pagination.defaultPageSize || pagination.pageSize || 10
            }) : {};
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.columns = nextProps.columns || (0, _util.normalizeColumns)(nextProps.children);
            if ('pagination' in nextProps || 'pagination' in this.props) {
                this.setState(function (previousState) {
                    var newPagination = _extends({}, defaultPagination, previousState.pagination, nextProps.pagination);
                    newPagination.current = newPagination.current || 1;
                    newPagination.pageSize = newPagination.pageSize || 10;
                    return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
                });
            }
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                this.store.setState({
                    selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
                });
                var rowSelection = this.props.rowSelection;

                if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                    this.CheckboxPropsCache = {};
                }
            }
            if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
                this.store.setState({
                    selectionDirty: false
                });
                this.CheckboxPropsCache = {};
            }

            if (this.getSortOrderColumns(this.columns).length > 0) {
                var sortState = this.getSortStateFromColumns(this.columns);
                if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                    this.setState(sortState);
                }
            }

            var filteredValueColumns = this.getFilteredValueColumns(this.columns);
            if (filteredValueColumns.length > 0) {
                var filtersFromColumns = this.getFiltersFromColumns(this.columns);
                var newFilters = _extends({}, this.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (this.isFiltersChanged(newFilters)) {
                    this.setState({ filters: newFilters });
                }
            }

            this.createComponents(nextProps.components, this.props.components);
        }
    }, {
        key: 'setSelectedRowKeys',
        value: function setSelectedRowKeys(selectedRowKeys, _ref) {
            var _this3 = this;

            var selectWay = _ref.selectWay,
                record = _ref.record,
                checked = _ref.checked,
                changeRowKeys = _ref.changeRowKeys,
                nativeEvent = _ref.nativeEvent;
            var _props$rowSelection2 = this.props.rowSelection,
                rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

            if (rowSelection && !('selectedRowKeys' in rowSelection)) {
                this.store.setState({ selectedRowKeys: selectedRowKeys });
            }
            var data = this.getFlatData();
            if (!rowSelection.onChange && !rowSelection[selectWay]) {
                return;
            }
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            if (rowSelection.onChange) {
                rowSelection.onChange(selectedRowKeys, selectedRows);
            }
            if (selectWay === 'onSelect' && rowSelection.onSelect) {
                rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
            } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
                });
                rowSelection.onSelectAll(checked, selectedRows, changeRows);
            } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
                rowSelection.onSelectInvert(selectedRowKeys);
            }
        }
    }, {
        key: 'hasPagination',
        value: function hasPagination(props) {
            return (props || this.props).pagination !== false;
        }
    }, {
        key: 'isFiltersChanged',
        value: function isFiltersChanged(filters) {
            var _this4 = this;

            var filtersChanged = false;
            if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
                filtersChanged = true;
            } else {
                Object.keys(filters).forEach(function (columnKey) {
                    if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                        filtersChanged = true;
                    }
                });
            }
            return filtersChanged;
        }
    }, {
        key: 'getSortOrderColumns',
        value: function getSortOrderColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return 'sortOrder' in column;
            });
        }
    }, {
        key: 'getFilteredValueColumns',
        value: function getFilteredValueColumns(columns) {
            return (0, _util.flatFilter)(columns || this.columns || [], function (column) {
                return typeof column.filteredValue !== 'undefined';
            });
        }
    }, {
        key: 'getFiltersFromColumns',
        value: function getFiltersFromColumns(columns) {
            var _this5 = this;

            var filters = {};
            this.getFilteredValueColumns(columns).forEach(function (col) {
                var colKey = _this5.getColumnKey(col);
                filters[colKey] = col.filteredValue;
            });
            return filters;
        }
    }, {
        key: 'getDefaultSortOrder',
        value: function getDefaultSortOrder(columns) {
            var definedSortState = this.getSortStateFromColumns(columns);

            var defaultSortedColumn = (0, _util.flatFilter)(columns || [], function (column) {
                return column.defaultSortOrder != null;
            })[0];

            if (defaultSortedColumn && !definedSortState.sortColumn) {
                return {
                    sortColumn: defaultSortedColumn,
                    sortOrder: defaultSortedColumn.defaultSortOrder
                };
            }

            return definedSortState;
        }
    }, {
        key: 'getSortStateFromColumns',
        value: function getSortStateFromColumns(columns) {
            // return first column which sortOrder is not falsy
            var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
                return col.sortOrder;
            })[0];

            if (sortedColumn) {
                return {
                    sortColumn: sortedColumn,
                    sortOrder: sortedColumn.sortOrder
                };
            }

            return {
                sortColumn: null,
                sortOrder: null
            };
        }
    }, {
        key: 'getSorterFn',
        value: function getSorterFn() {
            var _state = this.state,
                sortOrder = _state.sortOrder,
                sortColumn = _state.sortColumn;

            if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
                return;
            }

            return function (a, b) {
                var result = sortColumn.sorter(a, b);
                if (result !== 0) {
                    return sortOrder === 'descend' ? -result : result;
                }
                return 0;
            };
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder(order, column) {
            var _state2 = this.state,
                sortColumn = _state2.sortColumn,
                sortOrder = _state2.sortOrder;
            // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

            var isSortColumn = this.isSortColumn(column);
            if (!isSortColumn) {
                // 当前列未排序
                sortOrder = order;
                sortColumn = column;
            } else {
                // 当前列已排序
                if (sortOrder === order) {
                    // 切换为未排序状态
                    sortOrder = '';
                    sortColumn = null;
                } else {
                    // 切换为排序状态
                    sortOrder = order;
                }
            }
            var newState = {
                sortOrder: sortOrder,
                sortColumn: sortColumn
            };

            // Controlled
            if (this.getSortOrderColumns().length === 0) {
                this.setState(newState);
            }

            var onChange = this.props.onChange;
            if (onChange) {
                onChange.apply(null, this.prepareParamsArguments(_extends({}, this.state, newState)));
            }
        }
    }, {
        key: 'renderRowSelection',
        value: function renderRowSelection(locale) {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                rowSelection = _props.rowSelection;

            var columns = this.columns.concat();
            if (rowSelection) {
                var data = this.getFlatCurrentPageData().filter(function (item, index) {
                    if (rowSelection.getCheckboxProps) {
                        return !_this6.getCheckboxPropsByItem(item, index).disabled;
                    }
                    return true;
                });
                var selectionColumnClass = (0, _classnames2.default)(prefixCls + '-selection-column', _defineProperty({}, prefixCls + '-selection-column-custom', rowSelection.selections));
                var selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionBox(rowSelection.type),
                    className: selectionColumnClass,
                    fixed: rowSelection.fixed,
                    width: rowSelection.columnWidth
                };
                if (rowSelection.type !== 'radio') {
                    var checkboxAllDisabled = data.every(function (item, index) {
                        return _this6.getCheckboxPropsByItem(item, index).disabled;
                    });
                    selectionColumn.title = React.createElement(_SelectionCheckboxAll2.default, {
                        store: this.store,
                        locale: locale,
                        data: data,
                        getCheckboxPropsByItem: this.getCheckboxPropsByItem,
                        getRecordKey: this.getRecordKey,
                        disabled: checkboxAllDisabled,
                        prefixCls: prefixCls,
                        onSelect: this.handleSelectRow,
                        selections: rowSelection.selections,
                        hideDefaultSelections: rowSelection.hideDefaultSelections,
                        getPopupContainer: this.getPopupContainer
                    });
                }
                if ('fixed' in rowSelection) {
                    selectionColumn.fixed = rowSelection.fixed;
                } else if (columns.some(function (column) {
                    return column.fixed === 'left' || column.fixed === true;
                })) {
                    selectionColumn.fixed = 'left';
                }
                if (columns[0] && columns[0].key === 'selection-column') {
                    columns[0] = selectionColumn;
                } else {
                    columns.unshift(selectionColumn);
                }
            }
            return columns;
        }
    }, {
        key: 'getColumnKey',
        value: function getColumnKey(column, index) {
            return column.key || column.dataIndex || index;
        }
    }, {
        key: 'getMaxCurrent',
        value: function getMaxCurrent(total) {
            var _state$pagination = this.state.pagination,
                current = _state$pagination.current,
                pageSize = _state$pagination.pageSize;

            if ((current - 1) * pageSize >= total) {
                return Math.floor((total - 1) / pageSize) + 1;
            }
            return current;
        }
    }, {
        key: 'isSortColumn',
        value: function isSortColumn(column) {
            var sortColumn = this.state.sortColumn;

            if (!column || !sortColumn) {
                return false;
            }
            return this.getColumnKey(sortColumn) === this.getColumnKey(column);
        }
    }, {
        key: 'renderColumnsDropdown',
        value: function renderColumnsDropdown(columns, locale) {
            var _this7 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                dropdownPrefixCls = _props2.dropdownPrefixCls;
            var sortOrder = this.state.sortOrder;

            return (0, _util.treeMap)(columns, function (originColumn, i) {
                var column = _extends({}, originColumn);
                var key = _this7.getColumnKey(column, i);
                var filterDropdown = void 0;
                var sortButton = void 0;
                if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                    var colFilters = _this7.state.filters[key] || [];
                    filterDropdown = React.createElement(_filterDropdown2.default, {
                        locale: locale,
                        column: column,
                        selectedKeys: colFilters,
                        confirmFilter: _this7.handleFilter,
                        prefixCls: prefixCls + '-filter',
                        dropdownPrefixCls: dropdownPrefixCls || 'jc-dropdown',
                        getPopupContainer: _this7.getPopupContainer
                    });
                }
                if (column.sorter) {
                    var isSortColumn = _this7.isSortColumn(column);
                    if (isSortColumn) {
                        column.className = (0, _classnames2.default)(column.className, _defineProperty({}, prefixCls + '-column-sort', sortOrder));
                    }
                    var isAscend = isSortColumn && sortOrder === 'ascend';
                    var isDescend = isSortColumn && sortOrder === 'descend';
                    sortButton = React.createElement(
                        'div',
                        { className: prefixCls + '-column-sorter' },
                        React.createElement(
                            'span',
                            {
                                className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'),
                                title: '\u2191',
                                onClick: function onClick() {
                                    return _this7.toggleSortOrder('ascend', column);
                                }
                            },
                            React.createElement(_icon2.default, { type: 'caret-up' })
                        ),
                        React.createElement(
                            'span',
                            {
                                className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'),
                                title: '\u2193',
                                onClick: function onClick() {
                                    return _this7.toggleSortOrder('descend', column);
                                }
                            },
                            React.createElement(_icon2.default, { type: 'caret-down' })
                        )
                    );
                }
                column.title = React.createElement(
                    'span',
                    { key: key },
                    column.title,
                    sortButton,
                    filterDropdown
                );

                if (sortButton || filterDropdown) {
                    column.className = (0, _classnames2.default)(prefixCls + '-column-has-filters', column.className);
                }

                return column;
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination(paginationPosition) {
            // 强制不需要分页
            if (!this.hasPagination()) {
                return null;
            }
            var size = 'default';
            var pagination = this.state.pagination;

            if (pagination.size) {
                size = pagination.size;
            } else if (this.props.size === 'middle' || this.props.size === 'small') {
                size = 'small';
            }
            var position = pagination.position || 'bottom';
            var total = pagination.total || this.getLocalData().length;
            return total > 0 && (position === paginationPosition || position === 'both') ? React.createElement(_pagination2.default, _extends({
                key: 'pagination-' + paginationPosition
            }, pagination, {
                className: (0, _classnames2.default)(pagination.className, this.props.prefixCls + '-pagination'),
                onChange: this.handlePageChange,
                total: total,
                size: size,
                current: this.getMaxCurrent(total),
                onShowSizeChange: this.handleShowSizeChange
            })) : null;
        }

        // Get pagination, filters, sorter

    }, {
        key: 'prepareParamsArguments',
        value: function prepareParamsArguments(state) {
            var pagination = _extends({}, state.pagination);
            // remove useless handle function in Table.onChange
            delete pagination.onChange;
            delete pagination.onShowSizeChange;
            var filters = state.filters;
            var sorter = {};
            if (state.sortColumn && state.sortOrder) {
                sorter.column = state.sortColumn;
                sorter.order = state.sortOrder;
                sorter.field = state.sortColumn.dataIndex;
                sorter.columnKey = this.getColumnKey(state.sortColumn);
            }
            return [pagination, filters, sorter];
        }
    }, {
        key: 'findColumn',
        value: function findColumn(myKey) {
            var _this8 = this;

            var column = void 0;
            (0, _util.treeMap)(this.columns, function (c) {
                if (_this8.getColumnKey(c) === myKey) {
                    column = c;
                }
            });
            return column;
        }
    }, {
        key: 'getCurrentPageData',
        value: function getCurrentPageData() {
            var data = this.getLocalData();
            var current = void 0;
            var pageSize = void 0;
            var state = this.state;
            // 如果没有分页的话，默认全部展示
            if (!this.hasPagination()) {
                pageSize = Number.MAX_VALUE;
                current = 1;
            } else {
                pageSize = state.pagination.pageSize;
                current = this.getMaxCurrent(state.pagination.total || data.length);
            }

            // 分页
            // ---
            // 当数据量少于等于每页数量时，直接设置数据
            // 否则进行读取分页数据
            if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
                data = data.filter(function (_, i) {
                    return i >= (current - 1) * pageSize && i < current * pageSize;
                });
            }
            return data;
        }
    }, {
        key: 'getFlatData',
        value: function getFlatData() {
            return (0, _util.flatArray)(this.getLocalData());
        }
    }, {
        key: 'getFlatCurrentPageData',
        value: function getFlatCurrentPageData() {
            return (0, _util.flatArray)(this.getCurrentPageData());
        }
    }, {
        key: 'recursiveSort',
        value: function recursiveSort(data, sorterFn) {
            var _this9 = this;

            var _props$childrenColumn = this.props.childrenColumnName,
                childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

            return data.sort(sorterFn).map(function (item) {
                return item[childrenColumnName] ? _extends({}, item, _defineProperty({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
            });
        }
    }, {
        key: 'getLocalData',
        value: function getLocalData() {
            var _this10 = this;

            var state = this.state;
            var dataSource = this.props.dataSource;

            var data = dataSource || [];
            // 优化本地排序
            data = data.slice(0);
            var sorterFn = this.getSorterFn();
            if (sorterFn) {
                data = this.recursiveSort(data, sorterFn);
            }
            // 筛选
            if (state.filters) {
                Object.keys(state.filters).forEach(function (columnKey) {
                    var col = _this10.findColumn(columnKey);
                    if (!col) {
                        return;
                    }
                    var values = state.filters[columnKey] || [];
                    if (values.length === 0) {
                        return;
                    }
                    var onFilter = col.onFilter;
                    data = onFilter ? data.filter(function (record) {
                        return values.some(function (v) {
                            return onFilter(v, record);
                        });
                    }) : data;
                });
            }
            return data;
        }
    }, {
        key: 'createComponents',
        value: function createComponents() {
            var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var prevComponents = arguments[1];

            var bodyRow = components && components.body && components.body.row;
            var preBodyRow = prevComponents && prevComponents.body && prevComponents.body.row;
            if (!this.components || bodyRow !== preBodyRow) {
                this.components = _extends({}, components);
                this.components.body = _extends({}, components.body, {
                    row: (0, _createBodyRow2.default)(bodyRow)
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _props3 = this.props,
                style = _props3.style,
                className = _props3.className,
                prefixCls = _props3.prefixCls;

            var data = this.getCurrentPageData();

            var loading = this.props.loading;
            if (typeof loading === 'boolean') {
                loading = {
                    spinning: loading
                };
            }

            var table = React.createElement(
                _LocaleReceiver2.default,
                {
                    componentName: 'Table',
                    defaultLocale: _default2.default.Table
                },
                function (locale) {
                    return _this11.renderTable(locale, loading);
                }
            );

            // if there is no pagination or no data,
            // the height of spin should decrease by half of pagination
            var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';

            return React.createElement(
                'div',
                { className: (0, _classnames2.default)(prefixCls + '-wrapper', className), style: style },
                React.createElement(
                    _spin2.default,
                    _extends({}, loading, {
                        className: loading.spinning ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : ''
                    }),
                    this.renderPagination('top'),
                    table,
                    this.renderPagination('bottom')
                )
            );
        }
    }]);

    return Table;
}(React.Component);

Table.Column = _Column2.default;
Table.ColumnGroup = _ColumnGroup2.default;
Table.propTypes = _extends({}, _interface.TableProps, {
    dataSource: _propTypes2.default.array,
    columns: _propTypes2.default.array,
    prefixCls: _propTypes2.default.string,
    useFixedHeader: _propTypes2.default.bool,
    rowSelection: _propTypes2.default.object,
    className: _propTypes2.default.string,
    size: _propTypes2.default.string,
    loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object]),
    bordered: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    locale: _propTypes2.default.object,
    dropdownPrefixCls: _propTypes2.default.string
});
Table.defaultProps = {
    style: {},
    dataSource: [],
    prefixCls: 'jc-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};

var _initialiseProps = function _initialiseProps() {
    var _this12 = this;

    this.getCheckboxPropsByItem = function (item, index) {
        var _props$rowSelection3 = _this12.props.rowSelection,
            rowSelection = _props$rowSelection3 === undefined ? {} : _props$rowSelection3;

        if (!rowSelection.getCheckboxProps) {
            return {};
        }
        var key = _this12.getRecordKey(item, index);
        // Cache checkboxProps
        if (!_this12.CheckboxPropsCache[key]) {
            _this12.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
        }
        return _this12.CheckboxPropsCache[key];
    };

    this.onRow = function (record, index) {
        var _props4 = _this12.props,
            onRow = _props4.onRow,
            prefixCls = _props4.prefixCls;

        var custom = onRow ? onRow(record, index) : {};
        return _extends({}, custom, {
            prefixCls: prefixCls,
            store: _this12.store,
            rowKey: _this12.getRecordKey(record, index)
        });
    };

    this.handleFilter = function (column, nextFilters) {
        var props = _this12.props;
        var pagination = _extends({}, _this12.state.pagination);
        var filters = _extends({}, _this12.state.filters, _defineProperty({}, _this12.getColumnKey(column), nextFilters));
        // Remove filters not in current columns
        var currentColumnKeys = [];
        (0, _util.treeMap)(_this12.columns, function (c) {
            if (!c.children) {
                currentColumnKeys.push(_this12.getColumnKey(c));
            }
        });
        Object.keys(filters).forEach(function (columnKey) {
            if (currentColumnKeys.indexOf(columnKey) < 0) {
                delete filters[columnKey];
            }
        });

        if (props.pagination) {
            // Reset current prop
            pagination.current = 1;
            pagination.onChange(pagination.current);
        }

        var newState = {
            pagination: pagination,
            filters: {}
        };
        var filtersToSetState = _extends({}, filters);
        // Remove filters which is controlled
        _this12.getFilteredValueColumns().forEach(function (col) {
            var columnKey = _this12.getColumnKey(col);
            if (columnKey) {
                delete filtersToSetState[columnKey];
            }
        });
        if (Object.keys(filtersToSetState).length > 0) {
            newState.filters = filtersToSetState;
        }

        // Controlled current prop will not respond user interaction
        if (_typeof(props.pagination) === 'object' && 'current' in props.pagination) {
            newState.pagination = _extends({}, pagination, {
                current: _this12.state.pagination.current
            });
        }

        _this12.setState(newState, function () {
            _this12.store.setState({
                selectionDirty: false
            });
            var onChange = _this12.props.onChange;
            if (onChange) {
                onChange.apply(null, _this12.prepareParamsArguments(_extends({}, _this12.state, {
                    selectionDirty: false,
                    filters: filters,
                    pagination: pagination
                })));
            }
        });
    };

    this.handleSelect = function (record, rowIndex, e) {
        var checked = e.target.checked;
        var nativeEvent = e.nativeEvent;
        var defaultSelection = _this12.store.getState().selectionDirty ? [] : _this12.getDefaultSelection();
        var selectedRowKeys = _this12.store.getState().selectedRowKeys.concat(defaultSelection);
        var key = _this12.getRecordKey(record, rowIndex);
        if (checked) {
            selectedRowKeys.push(_this12.getRecordKey(record, rowIndex));
        } else {
            selectedRowKeys = selectedRowKeys.filter(function (i) {
                return key !== i;
            });
        }
        _this12.store.setState({
            selectionDirty: true
        });
        _this12.setSelectedRowKeys(selectedRowKeys, {
            selectWay: 'onSelect',
            record: record,
            checked: checked,
            changeRowKeys: [],
            nativeEvent: nativeEvent
        });
    };

    this.handleRadioSelect = function (record, rowIndex, e) {
        var checked = e.target.checked;
        var nativeEvent = e.nativeEvent;
        var defaultSelection = _this12.store.getState().selectionDirty ? [] : _this12.getDefaultSelection();
        var selectedRowKeys = _this12.store.getState().selectedRowKeys.concat(defaultSelection);
        var key = _this12.getRecordKey(record, rowIndex);
        selectedRowKeys = [key];
        _this12.store.setState({
            selectionDirty: true
        });
        _this12.setSelectedRowKeys(selectedRowKeys, {
            selectWay: 'onSelect',
            record: record,
            checked: checked,
            changeRowKeys: [],
            nativeEvent: nativeEvent
        });
    };

    this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
        var data = _this12.getFlatCurrentPageData();
        var defaultSelection = _this12.store.getState().selectionDirty ? [] : _this12.getDefaultSelection();
        var selectedRowKeys = _this12.store.getState().selectedRowKeys.concat(defaultSelection);
        var changeableRowKeys = data.filter(function (item, i) {
            return !_this12.getCheckboxPropsByItem(item, i).disabled;
        }).map(function (item, i) {
            return _this12.getRecordKey(item, i);
        });

        var changeRowKeys = [];
        var selectWay = '';
        var checked = void 0;
        // handle default selection
        switch (selectionKey) {
            case 'all':
                changeableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) < 0) {
                        selectedRowKeys.push(key);
                        changeRowKeys.push(key);
                    }
                });
                selectWay = 'onSelectAll';
                checked = true;
                break;
            case 'removeAll':
                changeableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) >= 0) {
                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        changeRowKeys.push(key);
                    }
                });
                selectWay = 'onSelectAll';
                checked = false;
                break;
            case 'invert':
                changeableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) < 0) {
                        selectedRowKeys.push(key);
                    } else {
                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                    }
                    changeRowKeys.push(key);
                    selectWay = 'onSelectInvert';
                });
                break;
            default:
                break;
        }

        _this12.store.setState({
            selectionDirty: true
        });
        // when select custom selection, callback selections[n].onSelect
        var rowSelection = _this12.props.rowSelection;

        var customSelectionStartIndex = 2;
        if (rowSelection && rowSelection.hideDefaultSelections) {
            customSelectionStartIndex = 0;
        }
        if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
            return onSelectFunc(changeableRowKeys);
        }
        _this12.setSelectedRowKeys(selectedRowKeys, {
            selectWay: selectWay,
            checked: checked,
            changeRowKeys: changeRowKeys
        });
    };

    this.handlePageChange = function (current) {
        for (var _len = arguments.length, otherArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            otherArguments[_key - 1] = arguments[_key];
        }

        var props = _this12.props;
        var pagination = _extends({}, _this12.state.pagination);
        if (current) {
            pagination.current = current;
        } else {
            pagination.current = pagination.current || 1;
        }
        pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));

        var newState = {
            pagination: pagination
        };
        // Controlled current prop will not respond user interaction
        if (props.pagination && _typeof(props.pagination) === 'object' && 'current' in props.pagination) {
            newState.pagination = _extends({}, pagination, {
                current: _this12.state.pagination.current
            });
        }
        _this12.setState(newState);

        _this12.store.setState({
            selectionDirty: false
        });

        var onChange = _this12.props.onChange;
        if (onChange) {
            onChange.apply(null, _this12.prepareParamsArguments(_extends({}, _this12.state, {
                selectionDirty: false,
                pagination: pagination
            })));
        }
    };

    this.renderSelectionBox = function (type) {
        return function (_, record, index) {
            var rowIndex = _this12.getRecordKey(record, index); // 从 1 开始
            var props = _this12.getCheckboxPropsByItem(record, index);
            var handleChange = function handleChange(e) {
                type === 'radio' ? _this12.handleRadioSelect(record, rowIndex, e) : _this12.handleSelect(record, rowIndex, e);
            };

            return React.createElement(
                'span',
                { onClick: stopPropagation },
                React.createElement(_SelectionBox2.default, _extends({
                    type: type,
                    store: _this12.store,
                    rowIndex: rowIndex,
                    onChange: handleChange,
                    defaultSelection: _this12.getDefaultSelection()
                }, props))
            );
        };
    };

    this.getRecordKey = function (record, index) {
        var rowKey = _this12.props.rowKey;
        var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
        (0, _warning2.default)(recordKey !== undefined, 'Each record in dataSource of table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see https://u.ant.design/table-row-key');
        return recordKey === undefined ? index : recordKey;
    };

    this.getPopupContainer = function () {
        return ReactDOM.findDOMNode(_this12);
    };

    this.handleShowSizeChange = function (current, pageSize) {
        var pagination = _this12.state.pagination;
        pagination.onShowSizeChange(current, pageSize);
        var nextPagination = _extends({}, pagination, {
            pageSize: pageSize,
            current: current
        });
        _this12.setState({ pagination: nextPagination });

        var onChange = _this12.props.onChange;
        if (onChange) {
            onChange.apply(null, _this12.prepareParamsArguments(_extends({}, _this12.state, {
                pagination: nextPagination
            })));
        }
    };

    this.renderTable = function (contextLocale, loading) {
        var _classNames3;

        var locale = _extends({}, contextLocale, _this12.props.locale);

        var _props5 = _this12.props,
            style = _props5.style,
            className = _props5.className,
            prefixCls = _props5.prefixCls,
            showHeader = _props5.showHeader,
            restProps = _objectWithoutProperties(_props5, ['style', 'className', 'prefixCls', 'showHeader']);

        var data = _this12.getCurrentPageData();
        var expandIconAsCell = _this12.props.expandedRowRender && _this12.props.expandIconAsCell !== false;

        var classString = (0, _classnames2.default)((_classNames3 = {}, _defineProperty(_classNames3, prefixCls + '-' + _this12.props.size, true), _defineProperty(_classNames3, prefixCls + '-bordered', _this12.props.bordered), _defineProperty(_classNames3, prefixCls + '-empty', !data.length), _defineProperty(_classNames3, prefixCls + '-without-column-header', !showHeader), _classNames3));

        var columns = _this12.renderRowSelection(locale);
        columns = _this12.renderColumnsDropdown(columns, locale);
        columns = columns.map(function (column, i) {
            var newColumn = _extends({}, column);
            newColumn.key = _this12.getColumnKey(newColumn, i);
            return newColumn;
        });
        var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
        if ('expandIconColumnIndex' in restProps) {
            expandIconColumnIndex = restProps.expandIconColumnIndex;
        }

        return React.createElement(_rcTable2.default, _extends({
            key: 'table'
        }, restProps, {
            onRow: _this12.onRow,
            components: _this12.components,
            prefixCls: prefixCls,
            data: data,
            columns: columns,
            showHeader: showHeader,
            className: classString,
            expandIconColumnIndex: expandIconColumnIndex,
            expandIconAsCell: expandIconAsCell,
            emptyText: !loading.spinning && locale.emptyText
        }));
    };
};

exports.default = Table;
//# sourceMappingURL=Table.js.map