import PropTypes from 'prop-types';
import defaultLocale from '../locale-provider/default';

export const ModalLocale = {
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    justOkText: PropTypes.string
};

let runtimeLocale = {
    ...defaultLocale.Modal,
};

export function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = {
            ...runtimeLocale,
            ...newLocale,
        };
    } else {
        runtimeLocale = {
            ...defaultLocale.Modal,
        };
    }
}

export function getConfirmLocale() {
    return runtimeLocale;
}
changeConfirmLocale.propTypes = {
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    justOkText: PropTypes.string,
};
