'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @author sunjianguo
 * @version 3.3.3
 */

var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'jc-message';
var transitionName = 'move-up';
var getContainer = void 0;

function getMessageInstance() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    _rcNotification2.default.newInstance({
        prefixCls: prefixCls,
        transitionName: transitionName,
        style: { top: defaultTop }, // 覆盖原来的样式
        getContainer: getContainer
    }, function (instance) {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}

function notice(content, duration, type, onClose) {
    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];

    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }

    var target = key;
    key += 1;
    getMessageInstance(function (instance) {
        instance.notice({
            key: target,
            duration: duration,
            style: {},
            content: _react2.default.createElement(
                'div',
                { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
                _react2.default.createElement(_icon2.default, { type: iconType }),
                _react2.default.createElement(
                    'span',
                    null,
                    content
                )
            ),
            onClose: onClose
        });
    });
    return function () {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
}

notice.propTypes = {
    // 你可以将属性声明为以下 JS 原生类型
    type: _propTypes2.default.oneOf(['info', 'success', 'error', 'warning', 'loading']),
    duration: _propTypes2.default.number,
    onClose: _propTypes2.default.func
};

exports.default = {

    content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    duration: _propTypes2.default.number,
    onClose: _propTypes2.default.func,
    top: _propTypes2.default.number,
    prefixCls: _propTypes2.default.string,
    getContainer: _propTypes2.default.func,
    transitionName: _propTypes2.default.string,

    info: function info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success: function success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error: function error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning: function warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading: function loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            var prefixClsAssist = options.prefixCls;
            prefixCls = prefixClsAssist;
        }
        if (options.getContainer !== undefined) {
            var getContainerAssist = options.getContainer;
            getContainer = getContainerAssist;
        }
        if (options.transitionName !== undefined) {
            var transitionNameAssist = options.transitionName;
            transitionName = transitionNameAssist;
            messageInstance = null; // delete messageInstance for new transitionName
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
//# sourceMappingURL=index.js.map