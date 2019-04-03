'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    switch (action.type) {
        case SAVESKULIST:
            return (0, _extends3.default)({}, state, {
                loading: false,
                loaded: true,
                skuListData: action.data
            });
        default:
            return state;

    }
};

exports.saveSkuListAction = saveSkuListAction;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**存储销售规格组件使用数据的redux */
var SAVESKULIST = 'SAVESKULIST';

function saveSkuListAction(data) {
    return {
        type: SAVESKULIST,
        data: data
    };
}
//# sourceMappingURL=saveskulist_redux.js.map