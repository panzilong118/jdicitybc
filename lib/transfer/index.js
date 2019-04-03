'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TransferSearchProps = exports.TransferOperationProps = exports.TransferListProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./list');

Object.defineProperty(exports, 'TransferListProps', {
  enumerable: true,
  get: function get() {
    return _list.TransferListProps;
  }
});

var _operation = require('./operation');

Object.defineProperty(exports, 'TransferOperationProps', {
  enumerable: true,
  get: function get() {
    return _operation.TransferOperationProps;
  }
});

var _search = require('./search');

Object.defineProperty(exports, 'TransferSearchProps', {
  enumerable: true,
  get: function get() {
    return _search.TransferSearchProps;
  }
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _list2 = _interopRequireDefault(_list);

var _operation2 = _interopRequireDefault(_operation);

var _search2 = _interopRequireDefault(_search);

var _LocaleReceiver = require('../locale-provider/LocaleReceiver');

var _LocaleReceiver2 = _interopRequireDefault(_LocaleReceiver);

var _default = require('../locale-provider/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author panzilong
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


function noop() {}

var Transfer = function (_React$Component) {
  _inherits(Transfer, _React$Component);

  // splitedDataSource: {
  //   leftDataSource: TransferItem[],
  //   rightDataSource: TransferItem[],
  // } | null;

  function Transfer(props) {
    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));

    _initialiseProps.call(_this);

    var _props$selectedKeys = props.selectedKeys,
        selectedKeys = _props$selectedKeys === undefined ? [] : _props$selectedKeys,
        _props$targetKeys = props.targetKeys,
        targetKeys = _props$targetKeys === undefined ? [] : _props$targetKeys;

    _this.state = {
      leftFilter: '',
      rightFilter: '',
      sourceSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) === -1;
      }),
      targetSelectedKeys: selectedKeys.filter(function (key) {
        return targetKeys.indexOf(key) > -1;
      })
    };
    return _this;
  }
  // For high-level customized Transfer @dqaria


  _createClass(Transfer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _state = this.state,
          sourceSelectedKeys = _state.sourceSelectedKeys,
          targetSelectedKeys = _state.targetSelectedKeys;


      if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
        // clear cached splited dataSource
        this.splitedDataSource = null;

        if (!nextProps.selectedKeys) {
          // clear key nolonger existed
          // clear checkedKeys according to targetKeys
          var dataSource = nextProps.dataSource,
              _nextProps$targetKeys = nextProps.targetKeys,
              targetKeys = _nextProps$targetKeys === undefined ? [] : _nextProps$targetKeys;


          var newSourceSelectedKeys = [];
          var newTargetSelectedKeys = [];
          dataSource.forEach(function (_ref) {
            var key = _ref.key;

            if (sourceSelectedKeys.includes(key) && !targetKeys.includes(key)) {
              newSourceSelectedKeys.push(key);
            }
            if (targetSelectedKeys.includes(key) && targetKeys.includes(key)) {
              newTargetSelectedKeys.push(key);
            }
          });
          this.setState({
            sourceSelectedKeys: newSourceSelectedKeys,
            targetSelectedKeys: newTargetSelectedKeys
          });
        }
      }

      if (nextProps.selectedKeys) {
        var _targetKeys = nextProps.targetKeys || [];
        this.setState({
          sourceSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return !_targetKeys.includes(key);
          }),
          targetSelectedKeys: nextProps.selectedKeys.filter(function (key) {
            return _targetKeys.includes(key);
          })
        });
      }
    }
  }, {
    key: 'splitDataSource',
    value: function splitDataSource(props) {
      if (this.splitedDataSource) {
        return this.splitedDataSource;
      }

      var dataSource = props.dataSource,
          rowKey = props.rowKey,
          _props$targetKeys2 = props.targetKeys,
          targetKeys = _props$targetKeys2 === undefined ? [] : _props$targetKeys2;


      var leftDataSource = [];
      var rightDataSource = new Array(targetKeys.length);
      dataSource.forEach(function (record) {
        if (rowKey) {
          record.key = rowKey(record);
        }

        // rightDataSource should be ordered by targetKeys
        // leftDataSource should be ordered by dataSource
        var indexOfKey = targetKeys.indexOf(record.key);
        if (indexOfKey !== -1) {
          rightDataSource[indexOfKey] = record;
        } else {
          leftDataSource.push(record);
        }
      });

      this.splitedDataSource = {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };

      return this.splitedDataSource;
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(direction, holder) {
      var _state2 = this.state,
          sourceSelectedKeys = _state2.sourceSelectedKeys,
          targetSelectedKeys = _state2.targetSelectedKeys;

      var onSelectChange = this.props.onSelectChange;
      if (!onSelectChange) {
        return;
      }

      if (direction === 'left') {
        onSelectChange(holder, targetSelectedKeys);
      } else {
        onSelectChange(sourceSelectedKeys, holder);
      }
    }
  }, {
    key: 'getTitles',
    value: function getTitles(transferLocale) {
      var props = this.props;

      if (props.titles) {
        return props.titles;
      }
      return transferLocale.titles;
    }
  }, {
    key: 'getSelectedKeysName',
    value: function getSelectedKeysName(direction) {
      return direction === 'left' ? 'sourceSelectedKeys' : 'targetSelectedKeys';
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        _LocaleReceiver2.default,
        {
          componentName: 'Transfer',
          defaultLocale: _default2.default.Transfer
        },
        this.renderTransfer
      );
    }
  }]);

  return Transfer;
}(React.Component);

Transfer.List = _list2.default;
Transfer.Operation = _operation2.default;
Transfer.Search = _search2.default;
Transfer.defaultProps = {
  dataSource: [],
  render: noop,
  showSearch: false
};
Transfer.propTypes = {
  prefixCls: _propTypes2.default.string,
  dataSource: _propTypes2.default.array,
  render: _propTypes2.default.func,
  targetKeys: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  height: _propTypes2.default.number,
  listStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  titles: _propTypes2.default.array,
  operations: _propTypes2.default.array,
  showSearch: _propTypes2.default.bool,
  filterOption: _propTypes2.default.func,
  searchPlaceholder: _propTypes2.default.string,
  notFoundContent: _propTypes2.default.node,
  body: _propTypes2.default.func,
  footer: _propTypes2.default.func,
  rowKey: _propTypes2.default.func,
  lazy: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool])
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.moveTo = function (direction) {
    var _props = _this2.props,
        _props$targetKeys3 = _props.targetKeys,
        targetKeys = _props$targetKeys3 === undefined ? [] : _props$targetKeys3,
        _props$dataSource = _props.dataSource,
        dataSource = _props$dataSource === undefined ? [] : _props$dataSource,
        onChange = _props.onChange;
    var _state3 = _this2.state,
        sourceSelectedKeys = _state3.sourceSelectedKeys,
        targetSelectedKeys = _state3.targetSelectedKeys;

    var moveKeys = direction === 'right' ? sourceSelectedKeys : targetSelectedKeys;
    // filter the disabled options
    var newMoveKeys = moveKeys.filter(function (key) {
      return !dataSource.some(function (data) {
        return !!(key === data.key && data.disabled);
      });
    });
    // move items to target box
    var newTargetKeys = direction === 'right' ? newMoveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
      return newMoveKeys.indexOf(targetKey) === -1;
    });

    // empty checked keys
    var oppositeDirection = direction === 'right' ? 'left' : 'right';
    _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(oppositeDirection), []));
    _this2.handleSelectChange(oppositeDirection, []);

    if (onChange) {
      onChange(newTargetKeys, direction, newMoveKeys);
    }
  };

  this.moveToLeft = function () {
    return _this2.moveTo('left');
  };

  this.moveToRight = function () {
    return _this2.moveTo('right');
  };

  this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
    var originalSelectedKeys = _this2.state[_this2.getSelectedKeysName(direction)] || [];
    var currentKeys = filteredDataSource.map(function (item) {
      return item.key;
    });
    // Only operate current keys from original selected keys
    var newKeys1 = originalSelectedKeys.filter(function (key) {
      return currentKeys.indexOf(key) === -1;
    });
    var newKeys2 = [].concat(_toConsumableArray(originalSelectedKeys));
    currentKeys.forEach(function (key) {
      if (newKeys2.indexOf(key) === -1) {
        newKeys2.push(key);
      }
    });
    var holder = checkAll ? newKeys1 : newKeys2;
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('left', filteredDataSource, checkAll);
  };

  this.handleRightSelectAll = function (filteredDataSource, checkAll) {
    return _this2.handleSelectAll('right', filteredDataSource, checkAll);
  };

  this.handleFilter = function (direction, e) {
    _this2.setState(_defineProperty({}, direction + 'Filter', e.target.value));
    if (_this2.props.onSearchChange) {
      _this2.props.onSearchChange(direction, e);
    }
  };

  this.handleLeftFilter = function (e) {
    return _this2.handleFilter('left', e);
  };

  this.handleRightFilter = function (e) {
    return _this2.handleFilter('right', e);
  };

  this.handleClear = function (direction) {
    _this2.setState(_defineProperty({}, direction + 'Filter', ''));
  };

  this.handleLeftClear = function () {
    return _this2.handleClear('left');
  };

  this.handleRightClear = function () {
    return _this2.handleClear('right');
  };

  this.handleSelect = function (direction, selectedItem, checked) {
    var _state4 = _this2.state,
        sourceSelectedKeys = _state4.sourceSelectedKeys,
        targetSelectedKeys = _state4.targetSelectedKeys;

    var holder = direction === 'left' ? [].concat(_toConsumableArray(sourceSelectedKeys)) : [].concat(_toConsumableArray(targetSelectedKeys));
    var index = holder.indexOf(selectedItem.key);
    if (index > -1) {
      holder.splice(index, 1);
    }
    if (checked) {
      holder.push(selectedItem.key);
    }
    _this2.handleSelectChange(direction, holder);

    if (!_this2.props.selectedKeys) {
      _this2.setState(_defineProperty({}, _this2.getSelectedKeysName(direction), holder));
    }
  };

  this.handleLeftSelect = function (selectedItem, checked) {
    return _this2.handleSelect('left', selectedItem, checked);
  };

  this.handleRightSelect = function (selectedItem, checked) {
    return _this2.handleSelect('right', selectedItem, checked);
  };

  this.handleScroll = function (direction, e) {
    var onScroll = _this2.props.onScroll;

    if (onScroll) {
      onScroll(direction, e);
    }
  };

  this.handleLeftScroll = function (e) {
    return _this2.handleScroll('left', e);
  };

  this.handleRightScroll = function (e) {
    return _this2.handleScroll('right', e);
  };

  this.renderTransfer = function (locale) {
    var _props2 = _this2.props,
        _props2$prefixCls = _props2.prefixCls,
        prefixCls = _props2$prefixCls === undefined ? 'jc-transfer' : _props2$prefixCls,
        className = _props2.className,
        _props2$operations = _props2.operations,
        operations = _props2$operations === undefined ? [] : _props2$operations,
        showSearch = _props2.showSearch,
        notFoundContent = _props2.notFoundContent,
        searchPlaceholder = _props2.searchPlaceholder,
        body = _props2.body,
        footer = _props2.footer,
        listStyle = _props2.listStyle,
        filterOption = _props2.filterOption,
        render = _props2.render,
        lazy = _props2.lazy;
    var _state5 = _this2.state,
        leftFilter = _state5.leftFilter,
        rightFilter = _state5.rightFilter,
        sourceSelectedKeys = _state5.sourceSelectedKeys,
        targetSelectedKeys = _state5.targetSelectedKeys;

    var _splitDataSource = _this2.splitDataSource(_this2.props),
        leftDataSource = _splitDataSource.leftDataSource,
        rightDataSource = _splitDataSource.rightDataSource;

    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;

    var cls = (0, _classnames2.default)(className, prefixCls);

    var titles = _this2.getTitles(locale);
    return React.createElement(
      'div',
      { className: cls },
      React.createElement(_list2.default, {
        prefixCls: prefixCls + '-list',
        titleText: titles[0],
        dataSource: leftDataSource,
        filter: leftFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: sourceSelectedKeys,
        handleFilter: _this2.handleLeftFilter,
        handleClear: _this2.handleLeftClear,
        handleSelect: _this2.handleLeftSelect,
        handleSelectAll: _this2.handleLeftSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder || locale.searchPlaceholder,
        notFoundContent: notFoundContent || locale.notFoundContent,
        itemUnit: locale.itemUnit,
        itemsUnit: locale.itemsUnit,
        body: body,
        footer: footer,
        lazy: lazy,
        onScroll: _this2.handleLeftScroll
      }),
      React.createElement(_operation2.default, {
        className: prefixCls + '-operation',
        rightActive: rightActive,
        rightArrowText: operations[0],
        moveToRight: _this2.moveToRight,
        leftActive: leftActive,
        leftArrowText: operations[1],
        moveToLeft: _this2.moveToLeft
      }),
      React.createElement(_list2.default, {
        prefixCls: prefixCls + '-list',
        titleText: titles[1],
        dataSource: rightDataSource,
        filter: rightFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: targetSelectedKeys,
        handleFilter: _this2.handleRightFilter,
        handleClear: _this2.handleRightClear,
        handleSelect: _this2.handleRightSelect,
        handleSelectAll: _this2.handleRightSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder || locale.searchPlaceholder,
        notFoundContent: notFoundContent || locale.notFoundContent,
        itemUnit: locale.itemUnit,
        itemsUnit: locale.itemsUnit,
        body: body,
        footer: footer,
        lazy: lazy,
        onScroll: _this2.handleRightScroll
      })
    );
  };
};

exports.default = Transfer;
//# sourceMappingURL=index.js.map