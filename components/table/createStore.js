import PropTypes from 'prop-types';

export const Store = {
    setState: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired
};

export default function createStore(initialState) {
    let state = initialState;
    let listeners = [];

    function setState(partial) {
        state = {
        ...state,
        ...partial,
        };
        for (let i = 0; i < listeners.length; i++) {
        listeners[i]();
        }
    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return function unsubscribe() {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
        };
    }

    return {
        setState,
        getState,
        subscribe
    };
}
