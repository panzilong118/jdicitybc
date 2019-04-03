'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Grid = require('./Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Search = require('./Search/Search');

var _Search2 = _interopRequireDefault(_Search);

var _redux2 = require('./redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreatePage = (_dec = (0, _reactRedux.connect)(function (state) {
    return {};
}, function (dispatch) {
    return (0, _redux.bindActionCreators)({ query: _redux2.query, queryCol: _redux2.queryCol }, dispatch);
}), _dec(_class = function (_Component) {
    (0, _inherits3.default)(CreatePage, _Component);

    function CreatePage(props) {
        (0, _classCallCheck3.default)(this, CreatePage);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CreatePage.__proto__ || (0, _getPrototypeOf2.default)(CreatePage)).call(this, props));

        _this.onSubmit = _this.onSubmit.bind(_this);
        _this.state = {
            data: {}
        };
        _this.props.handleChangeRef(_this);
        return _this;
    }

    (0, _createClass3.default)(CreatePage, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var search = this.props.search;

            this.onSubmit(search);
        }
    }, {
        key: 'onSubmit',
        value: function onSubmit(params, opt) {
            var _this2 = this;

            var _props = this.props,
                url = _props.url,
                async = _props.async,
                search = _props.search;

            if (opt) params = search;
            this.props.query(url, params).then(function (result) {
                if (result.code == 0) {
                    _this2.setState({ data: result.data });
                    if (async && async.url) {
                        if (!result.data || !result.data.result || !result.data.result.length) return;
                        var arr = [];
                        for (var i = 0; i < result.data.result.length; i++) {
                            for (var key in async.urlParam) {
                                arr.push(result.data.result[i][async.urlParam[key]]);
                            }
                        }
                        var param = {};
                        for (var _key in async.urlParam) {
                            param[_key] = arr;
                        }
                        _this2.props.queryCol(async.url, param).then(function (res) {
                            if (res.code == 0) {
                                var obj = (0, _assign2.default)({}, _this2.state.data);
                                for (var _i = 0; _i < res.data.length; _i++) {
                                    for (var j = 0; j < async.col.length; j++) {
                                        obj.result[_i][async.col[j]] = res.data[_i][async.col[j]];
                                    }
                                }
                                _this2.setState({ data: obj });
                            }
                        });
                    }
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Search2.default, (0, _extends3.default)({}, this.props, {
                    dataSource: this.state.data,
                    onSubmit: function onSubmit(params) {
                        return _this3.onSubmit(params);
                    }
                })),
                _react2.default.createElement(_Grid2.default, (0, _extends3.default)({}, this.props, {
                    dataSource: this.state.data,
                    onSubmit: function onSubmit(params) {
                        return _this3.onSubmit(params);
                    }
                }))
            );
        }
    }]);
    return CreatePage;
}(_react.Component)) || _class);
exports.default = CreatePage;
module.exports = exports['default'];
//# sourceMappingURL=CreatePageWrap.js.map