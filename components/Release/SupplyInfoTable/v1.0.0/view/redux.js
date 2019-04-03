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
        case SALE_REGIONAL_PRICE_LOAD:
            return (0, _extends3.default)({}, state, {
                loading: true
            });
        case SALE_REGIONAL_PRICE_SUCCESS:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                data: action.result
            });
        case SALE_REGIONAL_PRICE_FAIL:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                error: action.msg
            });
        default:
            return state;
    }
};

exports.getRegionalPrice = getRegionalPrice;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALE_REGIONAL_PRICE_LOAD = 'SALE_REGIONAL_PRICE_LOAD';
var SALE_REGIONAL_PRICE_SUCCESS = 'SALE_REGIONAL_PRICE_SUCCESS';
var SALE_REGIONAL_PRICE_FAIL = 'SALE_REGIONAL_PRICE_FAIL';

function getRegionalPrice(param) {
    return {
        types: [SALE_REGIONAL_PRICE_LOAD, SALE_REGIONAL_PRICE_SUCCESS, SALE_REGIONAL_PRICE_FAIL],
        promise: function promise(client) {
            return client.get('/shop/seller/addressRange/queryAllSellAreaBySellerIdV2', { params: param });
        }
    };
}
//# sourceMappingURL=redux.js.map