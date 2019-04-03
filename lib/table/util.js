'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.flatArray = flatArray;
exports.treeMap = treeMap;
exports.flatFilter = flatFilter;
exports.normalizeColumns = normalizeColumns;

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            if (item[childrenName]) {
                var newItem = _extends({}, item);
                delete newItem[childrenName];
                result.push(newItem);
                if (item[childrenName].length > 0) {
                    loop(item[childrenName]);
                }
            } else {
                result.push(item);
            }
        });
    };
    loop(data);
    return result;
}

function treeMap() {
    var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var mapper = arguments[1];
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return _extends({}, mapper(node, index), extra);
    });
}

function flatFilter() {
    var tree = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var callback = arguments[1];

    return tree.reduce(function (acc, node) {
        if (callback(node)) {
            acc.push(node);
        }
        if (node.children) {
            var children = flatFilter(node.children, callback);
            acc.push.apply(acc, _toConsumableArray(children));
        }
        return acc;
    }, []);
}

function normalizeColumns(elements) {
    var columns = [];
    React.Children.forEach(elements, function (element) {
        if (!React.isValidElement(element)) {
            return;
        }
        var column = _extends({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type && element.type.__JC_TABLE_COLUMN_GROUP) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}
//# sourceMappingURL=util.js.map