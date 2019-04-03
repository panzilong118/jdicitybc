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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _createDOMForm = require('rc-form/lib/createDOMForm');

var _createDOMForm2 = _interopRequireDefault(_createDOMForm);

var _createFormField = require('rc-form/lib/createFormField');

var _createFormField2 = _interopRequireDefault(_createFormField);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by huangxiao3 on 2018/3/26.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// 依赖情况
// rc-form form功能型组件
// rc-util 工具型

// import warning from '../_util/warning';


var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form(props) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
        // warning(!props.form, 'It is unnecessary to pass `form` to `Form` after antd@1.7.0.');
    }

    _createClass(Form, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _PureRenderMixin2.default.shouldComponentUpdate.apply(this, args);
        }
    }, {
        key: 'getChildContext',
        value: function getChildContext() {
            var layout = this.props.layout;

            return {
                vertical: layout === 'vertical'
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                hideRequiredMark = _props.hideRequiredMark,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                layout = _props.layout;

            var formClassName = (0, _classnames2.default)(prefixCls, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-horizontal', layout === 'horizontal'), _defineProperty(_classNames, prefixCls + '-vertical', layout === 'vertical'), _defineProperty(_classNames, prefixCls + '-inline', layout === 'inline'), _defineProperty(_classNames, prefixCls + '-hide-required-mark', hideRequiredMark), _classNames), className);
            var formProps = (0, _omit2.default)(this.props, ['prefixCls', 'className', 'layout', 'form', 'hideRequiredMark']);
            return React.createElement('form', _extends({}, formProps, { className: formClassName }));
        }
    }]);

    return Form;
}(React.Component);

exports.default = Form;

Form.defaultProps = {
    prefixCls: 'jc-form',
    layout: 'horizontal',
    hideRequiredMark: false,
    onSubmit: function onSubmit(e) {
        e.preventDefault();
    }
};
Form.propTypes = {
    prefixCls: _propTypes2.default.string,
    layout: _propTypes2.default.oneOf(['horizontal', 'inline', 'vertical']),
    children: _propTypes2.default.any,
    onSubmit: _propTypes2.default.func,
    hideRequiredMark: _propTypes2.default.bool
};
Form.childContextTypes = {
    vertical: _propTypes2.default.bool
};
Form.Item = _FormItem2.default;
Form.createFormField = _createFormField2.default;
Form.create = function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _createDOMForm2.default)(Object.assign({ fieldNameProp: 'id' }, options, { fieldMetaProp: _constants.FIELD_META_PROP, fieldDataProp: _constants.FIELD_DATA_PROP }));
};
//# sourceMappingURL=Form.js.map