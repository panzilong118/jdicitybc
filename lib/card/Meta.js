'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardMetaProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CardMetaProps = exports.CardMetaProps = {
    prefixCls: _propTypes2.default.string,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    avatar: _propTypes2.default.node,
    title: _propTypes2.default.node,
    description: _propTypes2.default.node
};

function CardMeta(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'jc-card' : _props$prefixCls,
        _props$className = props.className,
        className = _props$className === undefined ? '' : _props$className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = _objectWithoutProperties(props, ['prefixCls', 'className', 'avatar', 'title', 'description']);

    var classString = (0, _classnames2.default)(prefixCls + '-meta', className);

    var avatarDom = avatar ? React.createElement(
        'div',
        { className: prefixCls + '-meta-avatar' },
        avatar
    ) : null;

    var titleDom = title ? React.createElement(
        'div',
        { className: prefixCls + '-meta-title' },
        title
    ) : null;

    var descriptionDom = description ? React.createElement(
        'div',
        { className: prefixCls + '-meta-description' },
        description
    ) : null;

    var MetaDetail = titleDom || descriptionDom ? React.createElement(
        'div',
        { className: prefixCls + '-meta-detail' },
        titleDom,
        descriptionDom
    ) : null;

    return React.createElement(
        'div',
        _extends({}, others, { className: classString }),
        avatarDom,
        MetaDetail
    );
}

CardMeta.propTypes = _extends({}, CardMetaProps);

exports.default = CardMeta;
//# sourceMappingURL=Meta.js.map