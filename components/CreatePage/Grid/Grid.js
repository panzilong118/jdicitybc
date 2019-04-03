'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _table = require('jdcloudui/lib/table');

var _table2 = _interopRequireDefault(_table);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('jdcloudui/lib/table/style');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
    (0, _inherits3.default)(Grid, _Component);

    function Grid(props) {
        (0, _classCallCheck3.default)(this, Grid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).call(this, props));

        _this.createColumns = function (columns) {
            var result = [];
            for (var i = 0; i < (columns || []).length; i++) {
                var temp = {};
                try {
                    temp.title = columns[i].title;
                    temp.key = columns[i].key;
                    temp.dataIndex = columns[i].dataIndex;
                    temp.render = columns[i].render;
                    temp.sorter = columns[i].sort || null;
                } catch (err) {
                    throw new Error('参数错误');
                }
                result.push(temp);
            }
            return result;
        };

        _this.createPagination = function (page) {
            if (!page) return false;
            var current = _this.props.dataSource && _this.props.dataSource.pageNum;
            var total = _this.props.dataSource && _this.props.dataSource.totalCount;
            return {
                current: current,
                total: total,
                showQuickJumper: true,
                pageSize: 10,
                onChange: _this.onChange.bind(_this)
            };
        };

        _this.onChange = function (pagination) {
            var search = _this.props.search;

            var params = (0, _extends3.default)({}, search, {
                pageNum: pagination
            });
            typeof _this.props.onChangeSearch === "function" && _this.props.onChangeSearch(params);
            _this.props.onSubmit(params);
        };

        return _this;
    }
    //创建Clums

    //创建分页

    //分页的change方法


    (0, _createClass3.default)(Grid, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                columns = _props.columns,
                dataSource = _props.dataSource,
                page = _props.page,
                rowSelection = _props.rowSelection,
                rowKey = _props.rowKey,
                options = _props.options;

            return _react2.default.createElement(
                'div',
                null,
                options && options.length && _react2.default.createElement(
                    'div',
                    { className: 'buttonBox' },
                    options.map(function (item) {
                        return item;
                    })
                ),
                _react2.default.createElement(_table2.default, {
                    columns: this.createColumns(columns),
                    dataSource: dataSource && dataSource.result,
                    pagination: this.createPagination(page),
                    rowSelection: rowSelection || null,
                    rowKey: rowKey || 'key'
                })
            );
        }
    }]);
    return Grid;
}(_react.Component);

exports.default = Grid;
module.exports = exports['default'];
//# sourceMappingURL=Grid.js.map