/**
 * @file modal
 * @author jiayi
 * @version: 3.4.0
 */

import PropTypes from 'prop-types';
import confirm from './confirm';
import Modal from './Modal';

Modal.info = function (props) {
    const config = {
        type: 'info',
        iconType: 'info-circle',
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.success = function (props) {
    const config = {
        type: 'success',
        iconType: 'check-circle',
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.error = function (props) {
    const config = {
        type: 'error',
        iconType: 'cross-circle',
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.warning = Modal.warn = function (props) {
    const config = {
        type: 'warning',
        iconType: 'exclamation-circle',
        okCancel: false,
        ...props,
    };
    return confirm(config);
};

Modal.confirm = function (props) {
    const config = {
        type: 'confirm',
        okCancel: true,
        ...props,
    };
    return confirm(config);
};

export default Modal;

Modal.defaultProps = {
    prefixCls: 'jc-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary',

};

Modal.propTypes = {
    mousePosition: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
    mousePositionEventBinded: PropTypes.bool,
    prefixCls: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    confirmLoading: PropTypes.bool,
    visible: PropTypes.bool,
    align: PropTypes.object,
    footer: PropTypes.node,
    title: PropTypes.node,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    wrapClassName: PropTypes.string,
    maskTransitionName: PropTypes.string,
    transitionName: PropTypes.string,
    className: PropTypes.string,
    zIndex: PropTypes.number,
    mask: PropTypes.bool,
    keyboard: PropTypes.bool,
    iconClassName: PropTypes.string,
    iconType: PropTypes.string,
    okCancel: PropTypes.bool,
    type: PropTypes.string,
    okType: PropTypes.string,
};
