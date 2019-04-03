'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case SALE_ADDRESS_LOAD:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case SALE_ADDRESS_SUCCESS:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                data: action.result
            });
        case SALE_ADDRESS_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                error: action.msg
            });
        default:
            return state;
    }
};

exports.getAddressInfo = getAddressInfo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALE_ADDRESS_LOAD = 'SALE_ADDRESS_LOAD';
var SALE_ADDRESS_SUCCESS = 'SALE_ADDRESS_SUCCESS';
var SALE_ADDRESS_FAIL = 'SALE_ADDRESS_FAIL';

function getAddressInfo(param) {
    return {
        types: [SALE_ADDRESS_LOAD, SALE_ADDRESS_SUCCESS, SALE_ADDRESS_FAIL],
        promise: function promise(client) {
            return client.get('/shop/seller/address/queryShopInfoAddress', { params: param });
        }
    };
}
//# sourceMappingURL=redux.js.map