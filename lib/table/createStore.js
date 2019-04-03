'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Store = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createStore;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Store = exports.Store = {
    setState: _propTypes2.default.func.isRequired,
    getState: _propTypes2.default.func.isRequired,
    subscribe: _propTypes2.default.func.isRequired
};

function createStore(initialState) {
    var state = initialState;
    var listeners = [];

    function setState(partial) {
        state = _extends({}, state, partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }

    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe
    };
}
//# sourceMappingURL=createStore.js.map