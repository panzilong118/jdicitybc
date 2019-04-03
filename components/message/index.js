/**
 * @author sunjianguo
 * @version 3.3.3
 */


import React from 'react';
import Notification from 'rc-notification';
import PropTypes from 'prop-types';
import Icon from '../icon';

let defaultDuration = 3;
let defaultTop;
let messageInstance;
let key = 1;
let prefixCls = 'jc-message';
let transitionName = 'move-up';
let getContainer;


function getMessageInstance(callback = () => {}) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    Notification.newInstance({
        prefixCls,
        transitionName,
        style: { top: defaultTop }, // 覆盖原来的样式
        getContainer,
    }, (instance) => {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}


function notice(
    content,
    duration,
    type,
    onClose,
) {
    const iconType = ({
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading',
    })[type];

    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }

    const target = key;
    key += 1;
    getMessageInstance((instance) => {
        instance.notice({
            key: target,
            duration,
            style: {},
            content: (
                <div className={`${prefixCls}-custom-content ${prefixCls}-${type}`}>
                    <Icon type={iconType} />
                    <span>{content}</span>
                </div>
            ),
            onClose,
        });
    });
    return () => {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
}

notice.propTypes = {
    // 你可以将属性声明为以下 JS 原生类型
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning', 'loading']),
    duration: PropTypes.number,
    onClose: PropTypes.func,
};


export default {

    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    duration: PropTypes.number,
    onClose: PropTypes.func,
    top: PropTypes.number,
    prefixCls: PropTypes.string,
    getContainer: PropTypes.func,
    transitionName: PropTypes.string,

    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    // Departed usage, please use warning()
    warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            const prefixClsAssist = options.prefixCls;
            prefixCls = prefixClsAssist;
        }
        if (options.getContainer !== undefined) {
            const getContainerAssist = options.getContainer;
            getContainer = getContainerAssist;
        }
        if (options.transitionName !== undefined) {
            const transitionNameAssist = options.transitionName;
            transitionName = transitionNameAssist;
            messageInstance = null; // delete messageInstance for new transitionName
        }
    },
    destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    },
};
