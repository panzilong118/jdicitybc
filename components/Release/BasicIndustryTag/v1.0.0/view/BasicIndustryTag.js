"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _checkbox = require("jdcloudui/lib/checkbox");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

require("jdcloudui/lib/checkbox/style");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _basic = require("./style/basic.less");

var _basic2 = _interopRequireDefault(_basic);

var _queryData = require("./redux/queryData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicIndustryTag = function (_Component) {
    (0, _inherits3.default)(BasicIndustryTag, _Component);

    function BasicIndustryTag(props) {
        (0, _classCallCheck3.default)(this, BasicIndustryTag);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BasicIndustryTag.__proto__ || (0, _getPrototypeOf2.default)(BasicIndustryTag)).call(this, props));

        _this.handelCheckChange = function (e) {
            var checked = e.target.checked;
            var value = e.target.value;
            var itemTmplPublishVo = JSON.parse((0, _stringify2.default)(_this.props.itemTmplPublishVo));
            var industryArr = _this.props.itemTmplPublishVo.industryLabel ? _this.props.itemTmplPublishVo.industryLabel.split(';') : [];

            if (checked) {
                industryArr.push(value);
                itemTmplPublishVo.industryLabel = industryArr.join(';');
            } else {
                industryArr.splice(industryArr.indexOf(value + ''), 1);
                itemTmplPublishVo.industryLabel = industryArr.join(';');
            }
            _this.props.updateItemTmplAction(itemTmplPublishVo);
        };

        _this.state = {
            checkboxData: []
        };
        _this.cid = _this.props.itemTmplPublishVo && _this.props.itemTmplPublishVo.cid;
        return _this;
    }

    (0, _createClass3.default)(BasicIndustryTag, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //查询行业标签接口
            if (this.cid) {
                this.props.getIndustryTagData({ cId: this.cid }, this.props.type);
            }
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.itemTmplPublishVo.cid && nextProps.itemTmplPublishVo.cid != this.cid) {
                this.cid = nextProps.itemTmplPublishVo.cid;
                this.props.getIndustryTagData({ cId: this.cid }, nextProps.type);
            }
            if (nextProps.industryTagData && nextProps.industryTagData.data && nextProps.industryTagData.data.data) {
                var checkboxArr = [];
                if (!this.props.editData.checkboxArr && this.props.edit && this.props.ifValid) {
                    var industryLabel = nextProps.itemTmplPublishVo.industryLabel || '';
                    var newCheckboxArr = [];
                    if (industryLabel) {
                        newCheckboxArr = nextProps.industryTagData.data.data.filter(function (item) {
                            return industryLabel.indexOf(item.id + '') !== -1;
                        });
                    }
                    this.props.setEditData('checkboxArr', newCheckboxArr);
                }
                console.log(this.props.editData.checkboxArr);
                if (this.props.editData.checkboxArr && this.props.editData.checkboxArr.length > 0) {
                    var flag = false;
                    this.props.editData.checkboxArr.map(function (item) {
                        nextProps.industryTagData.data.data.map(function (_item) {
                            if (item.id == _item.id) {
                                flag = true;
                            }
                        });
                        if (!flag) {
                            checkboxArr.push(item);
                        }
                    });
                    checkboxArr = [].concat((0, _toConsumableArray3.default)(nextProps.industryTagData.data.data), (0, _toConsumableArray3.default)(checkboxArr));
                } else {
                    checkboxArr = nextProps.industryTagData.data.data;
                }
                this.setState({
                    checkboxData: checkboxArr
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var checkboxData = this.state.checkboxData;

            var params = this.props.itemTmplPublishVo;
            this.id = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.cid;
            return _react2.default.createElement(
                "div",
                { className: _basic2.default.labelWrap },
                _react2.default.createElement(
                    "label",
                    { htmlFor: "\u884C\u4E1A\u6807\u7B7E", className: _basic2.default.labelTitle },
                    "\u884C\u4E1A\u6807\u7B7E\uFF1A"
                ),
                _react2.default.createElement(
                    "div",
                    { className: _basic2.default.labelCont },
                    checkboxData.map(function (_item, index) {
                        return _react2.default.createElement(
                            _checkbox2.default,
                            { key: index, value: _item.id, onChange: function onChange(e) {
                                    return _this2.handelCheckChange(e);
                                }, checked: params.industryLabel ? params.industryLabel.indexOf(_item.id + '') !== -1 : false },
                            _item.tagName
                        );
                    })
                )
            );
        }
    }]);
    return BasicIndustryTag;
}(_react.Component); /**
                      * @file 发布商品-基础设置- 商品名称
                      */

exports.default = BasicIndustryTag;
module.exports = exports["default"];
//# sourceMappingURL=BasicIndustryTag.js.map