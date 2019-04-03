'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterMenuProps = exports.SelectionBoxProps = exports.SelectionCheckboxAllProps = exports.TableProps = exports.TableRowSelection = exports.SelectionItem = exports.TablePaginationConfig = exports.RowSelectionType = exports.TableLocale = exports.TableComponents = exports.ColumnProps = exports.ColumnFilterItem = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _spin = require('../spin');

var _createStore = require('./createStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var ColumnFilterItem = exports.ColumnFilterItem = {
  text: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.arrayOf(_propTypes2.default.shape(ColumnFilterItem))
};

var ColumnProps = exports.ColumnProps = {
  title: _propTypes2.default.node,
  key: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.string]),
  dataIndex: _propTypes2.default.string,
  render: _propTypes2.default.func,
  align: _propTypes2.default.oneOf(['left', 'right', 'center']),
  filters: _propTypes2.default.arrayOf(_propTypes2.default.shape(ColumnFilterItem)),
  onFilter: _propTypes2.default.func,
  filterMultiple: _propTypes2.default.bool,
  filterDropdown: _propTypes2.default.node,
  filterDropdownVisible: _propTypes2.default.bool,
  onFilterDropdownVisibleChange: _propTypes2.default.func,
  sorter: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.func]),
  defaultSortOrder: _propTypes2.default.oneOf(['ascend', 'descend']),
  colSpan: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  className: _propTypes2.default.string,
  fixed: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['left', 'right'])]),
  filterIcon: _propTypes2.default.node,
  filteredValue: _propTypes2.default.array,
  sortOrder: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['ascend', 'descend'])]),
  children: _propTypes2.default.arrayOf(_propTypes2.default.shape(ColumnProps)),
  onCellClick: _propTypes2.default.func,
  onCell: _propTypes2.default.func,
  onHeaderCell: _propTypes2.default.func
};

var TableComponents = exports.TableComponents = {
  table: _propTypes2.default.any,
  header: _propTypes2.default.shape({
    wrapper: _propTypes2.default.any,
    row: _propTypes2.default.any,
    cell: _propTypes2.default.any
  }),
  body: _propTypes2.default.shape({
    wrapper: _propTypes2.default.any,
    row: _propTypes2.default.any,
    cell: _propTypes2.default.any
  })
};

var TableLocale = exports.TableLocale = {
  filterTitle: _propTypes2.default.string,
  filterConfirm: _propTypes2.default.node,
  filterReset: _propTypes2.default.node,
  emptyText: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  selectAll: _propTypes2.default.node,
  selectInvert: _propTypes2.default.node
};
var RowSelectionType = exports.RowSelectionType = ['checkbox', 'radio'];

var TablePaginationConfig = exports.TablePaginationConfig = {
  total: _propTypes2.default.number,
  defaultCurrent: _propTypes2.default.number,
  current: _propTypes2.default.number,
  defaultPageSize: _propTypes2.default.number,
  pageSize: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  hideOnSinglePage: _propTypes2.default.bool,
  showSizeChanger: _propTypes2.default.bool,
  pageSizeOptions: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onShowSizeChange: _propTypes2.default.func,
  showQuickJumper: _propTypes2.default.bool,
  showTotal: _propTypes2.default.func,
  size: _propTypes2.default.string,
  simple: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  locale: _propTypes2.default.object,
  className: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  selectPrefixCls: _propTypes2.default.string,
  itemRender: _propTypes2.default.func,
  position: _propTypes2.default.oneOf(['top', 'bottom', 'both'])
};

var SelectionItem = exports.SelectionItem = {
  key: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.node.isRequired,
  onSelect: _propTypes2.default.func
};

var TableRowSelection = exports.TableRowSelection = {
  type: _propTypes2.default.oneOf(RowSelectionType),
  selectedRowKeys: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  onChange: _propTypes2.default.func,
  getCheckboxProps: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onSelectAll: _propTypes2.default.func,
  onSelectInvert: _propTypes2.default.func,
  selections: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape(SelectionItem)), _propTypes2.default.bool]),
  hideDefaultSelections: _propTypes2.default.bool,
  fixed: _propTypes2.default.bool,
  columnWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

var TableProps = exports.TableProps = {
  prefixCls: _propTypes2.default.string,
  dropdownPrefixCls: _propTypes2.default.string,
  rowSelection: _propTypes2.default.shape(_propTypes2.default.shape(TableRowSelection)),
  pagination: _propTypes2.default.oneOfType([_propTypes2.default.shape(TablePaginationConfig), _propTypes2.default.bool]),
  size: _propTypes2.default.oneOf(['default', 'middle', 'small']),
  dataSource: _propTypes2.default.array,
  components: _propTypes2.default.shape(TableComponents),
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape(ColumnProps)),
  rowKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  rowClassName: _propTypes2.default.func,
  expandedRowRender: _propTypes2.default.any,
  defaultExpandAllRows: _propTypes2.default.bool,
  defaultExpandedRowKeys: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  expandedRowKeys: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.string), _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  expandIconAsCell: _propTypes2.default.bool,
  expandIconColumnIndex: _propTypes2.default.number,
  expandRowByClick: _propTypes2.default.bool,
  onExpandedRowsChange: _propTypes2.default.func,
  onExpand: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape(_spin.SpinProps)]),
  locale: _propTypes2.default.object,
  indentSize: _propTypes2.default.number,
  onRowClick: _propTypes2.default.func,
  onRow: _propTypes2.default.func,
  onHeaderRow: _propTypes2.default.func,
  useFixedHeader: _propTypes2.default.bool,
  bordered: _propTypes2.default.bool,
  showHeader: _propTypes2.default.bool,
  footer: _propTypes2.default.func,
  title: _propTypes2.default.func,
  scroll: _propTypes2.default.shape({
    x: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
    y: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string])
  }),
  childrenColumnName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node
};

// export const TableStateFilters = {
//   [key]: PropTypes.arrayOf(PropTypes.string)
// };

// export const TableState = {
//   pagination: PropTypes.shape(TablePaginationConfig),
//   filters: PropTypes.object, // PropTypes.shape(TableStateFilters),
//   sortColumn: PropTypes.oneOfType([PropTypes.shape(ColumnProps), PropTypes.oneOf([null])]),
//   sortOrder: PropTypes.string
// };

var SelectionCheckboxAllProps = exports.SelectionCheckboxAllProps = {
  store: _propTypes2.default.shape(_createStore.Store).isRequired,
  locale: _propTypes2.default.any.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  getCheckboxPropsByItem: _propTypes2.default.func.isRequired,
  getRecordKey: _propTypes2.default.func.isRequired,
  data: _propTypes2.default.array.isRequired,
  prefixCls: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf([undefined])]).isRequired,
  onSelect: _propTypes2.default.func.isRequired,
  hideDefaultSelections: _propTypes2.default.bool,
  selections: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape(SelectionItem)), _propTypes2.default.bool]),
  getPopupContainer: _propTypes2.default.func.isRequired
};

// export const SelectionCheckboxAllState = {
//   checked: PropTypes.bool.isRequired,
//   indeterminate: PropTypes.bool.isRequired
// };

var SelectionBoxProps = exports.SelectionBoxProps = {
  store: _propTypes2.default.shape(_createStore.Store).isRequired,
  type: _propTypes2.default.oneOf(RowSelectionType),
  defaultSelection: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  rowIndex: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  name: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired
};

// export const SelectionBoxState = {
//   checked: PropTypes.bool
// };

var FilterMenuProps = exports.FilterMenuProps = {
  locale: _propTypes2.default.shape(TableLocale).isRequired,
  selectedKeys: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  column: _propTypes2.default.shape(ColumnProps).isRequired,
  confirmFilter: _propTypes2.default.func.isRequired,
  prefixCls: _propTypes2.default.string.isRequired,
  dropdownPrefixCls: _propTypes2.default.string.isRequired,
  getPopupContainer: _propTypes2.default.func.isRequired
};

// export const FilterMenuState = {
//   selectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
//   keyPathOfSelectedItem: PropTypes.object.isRequired,
//   visible: PropTypes.bool
// };
//# sourceMappingURL=interface.js.map