import * as React from 'react';

import PropTypes from 'prop-types';

import { SpinProps } from '../spin';

import { Store } from './createStore';

export const ColumnFilterItem = { 
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape(ColumnFilterItem))
};

export const ColumnProps = {
  title: PropTypes.node,
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  dataIndex: PropTypes.string,
  render: PropTypes.func,
  align: PropTypes.oneOf(['left', 'right', 'center']),
  filters: PropTypes.arrayOf(PropTypes.shape(ColumnFilterItem)),
  onFilter: PropTypes.func,
  filterMultiple: PropTypes.bool,
  filterDropdown: PropTypes.node,
  filterDropdownVisible: PropTypes.bool,
  onFilterDropdownVisibleChange: PropTypes.func,
  sorter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  defaultSortOrder: PropTypes.oneOf(['ascend', 'descend']),
  colSpan: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['left', 'right'])]),
  filterIcon: PropTypes.node,
  filteredValue: PropTypes.array,
  sortOrder: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['ascend', 'descend'])]),
  children: PropTypes.arrayOf(PropTypes.shape(ColumnProps)),
  onCellClick: PropTypes.func,
  onCell: PropTypes.func,
  onHeaderCell: PropTypes.func
};

export const TableComponents = {
  table: PropTypes.any,
  header: PropTypes.shape({
    wrapper: PropTypes.any,
    row: PropTypes.any,
    cell: PropTypes.any
  }),
  body: PropTypes.shape({
    wrapper: PropTypes.any,
    row: PropTypes.any,
    cell: PropTypes.any
  })
};

export const TableLocale = {
  filterTitle: PropTypes.string,
  filterConfirm: PropTypes.node,
  filterReset: PropTypes.node,
  emptyText: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  selectAll: PropTypes.node,
  selectInvert: PropTypes.node
};
export const RowSelectionType = ['checkbox', 'radio'];

export const TablePaginationConfig = {
  total: PropTypes.number,
  defaultCurrent: PropTypes.number,
  current: PropTypes.number,
  defaultPageSize: PropTypes.number,
  pageSize: PropTypes.number,
  onChange: PropTypes.func,
  hideOnSinglePage: PropTypes.bool,
  showSizeChanger: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
  onShowSizeChange: PropTypes.func,
  showQuickJumper: PropTypes.bool,
  showTotal: PropTypes.func,
  size: PropTypes.string,
  simple: PropTypes.bool,
  style: PropTypes.object,
  locale: PropTypes.object,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  selectPrefixCls: PropTypes.string,
  itemRender: PropTypes.func,
  position: PropTypes.oneOf(['top', 'bottom', 'both'])
};

export const SelectionItem = {
  key: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
  onSelect: PropTypes.func
};

export const TableRowSelection = {
  type: PropTypes.oneOf(RowSelectionType),
  selectedRowKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  getCheckboxProps:  PropTypes.func,
  onSelect: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectInvert: PropTypes.func,
  selections:PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(SelectionItem)), PropTypes.bool]),
  hideDefaultSelections: PropTypes.bool,
  fixed: PropTypes.bool,
  columnWidth:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export const TableProps =  {
  prefixCls: PropTypes.string,
  dropdownPrefixCls:  PropTypes.string,
  rowSelection: PropTypes.shape(PropTypes.shape(TableRowSelection)),
  pagination: PropTypes.oneOfType([PropTypes.shape(TablePaginationConfig), PropTypes.bool]),
  size: PropTypes.oneOf(['default', 'middle', 'small']),
  dataSource:  PropTypes.array,
  components: PropTypes.shape(TableComponents),
  columns: PropTypes.arrayOf(PropTypes.shape(ColumnProps)),
  rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rowClassName: PropTypes.func,
  expandedRowRender:  PropTypes.any,
  defaultExpandAllRows: PropTypes.bool,
  defaultExpandedRowKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.number)]),
  expandedRowKeys: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.arrayOf(PropTypes.number)]),
  expandIconAsCell: PropTypes.bool,
  expandIconColumnIndex: PropTypes.number,
  expandRowByClick: PropTypes.bool,
  onExpandedRowsChange: PropTypes.func,
  onExpand: PropTypes.func,
  onChange: PropTypes.func,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape(SpinProps)]),
  locale: PropTypes.object,
  indentSize: PropTypes.number,
  onRowClick: PropTypes.func,
  onRow: PropTypes.func,
  onHeaderRow: PropTypes.func,
  useFixedHeader: PropTypes.bool,
  bordered: PropTypes.bool,
  showHeader: PropTypes.bool,
  footer: PropTypes.func,
  title: PropTypes.func,
  scroll: PropTypes.shape({
      x: PropTypes.oneOfType([PropTypes.bool, PropTypes.number,PropTypes.string]),
      y: PropTypes.oneOfType([PropTypes.bool, PropTypes.number,PropTypes.string])
  }),
  childrenColumnName: PropTypes.string,
  bodyStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
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

export const SelectionCheckboxAllProps = {
  store: PropTypes.shape(Store).isRequired,
  locale: PropTypes.any.isRequired,
  disabled: PropTypes.bool.isRequired,
  getCheckboxPropsByItem: PropTypes.func.isRequired,
  getRecordKey: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  prefixCls: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined])]).isRequired,
  onSelect: PropTypes.func.isRequired,
  hideDefaultSelections: PropTypes.bool,
  selections: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(SelectionItem)), PropTypes.bool]),
  getPopupContainer: PropTypes.func.isRequired
};

// export const SelectionCheckboxAllState = {
//   checked: PropTypes.bool.isRequired,
//   indeterminate: PropTypes.bool.isRequired
// };

export const SelectionBoxProps = {
  store: PropTypes.shape(Store).isRequired,
  type: PropTypes.oneOf(RowSelectionType),
  defaultSelection: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

// export const SelectionBoxState = {
//   checked: PropTypes.bool
// };

export const FilterMenuProps = {
  locale: PropTypes.shape(TableLocale).isRequired,
  selectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  column: PropTypes.shape(ColumnProps).isRequired,
  confirmFilter: PropTypes.func.isRequired,
  prefixCls: PropTypes.string.isRequired,
  dropdownPrefixCls: PropTypes.string.isRequired,
  getPopupContainer: PropTypes.func.isRequired
};

// export const FilterMenuState = {
//   selectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
//   keyPathOfSelectedItem: PropTypes.object.isRequired,
//   visible: PropTypes.bool
// };
