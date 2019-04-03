'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// export
// interface
// AntTreeNode
// extends
// React.Component < AntTreeNodeProps, {} > {}

// export
// interface
// AntTreeNodeMouseEvent
// {
//     node: AntTreeNode;
//     event: React.MouseEventHandler < any >;
// }


var Tree = function (_React$Component) {
    _inherits(Tree, _React$Component);

    function Tree() {
        _classCallCheck(this, Tree);

        return _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));
    }

    _createClass(Tree, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                className = props.className;

            var checkable = props.checkable;
            return React.createElement(
                _rcTree2.default,
                _extends({}, props, {
                    className: className,
                    checkable: checkable ? React.createElement('span', { className: prefixCls + '-checkbox-inner' }) : checkable
                }),
                this.props.children
            );
        }
    }]);

    return Tree;
}(React.Component);

Tree.TreeNode = _rcTree.TreeNode;
exports.default = Tree;

Tree.defaultProps = {
    prefixCls: 'jc-tree',
    checkable: false,
    showIcon: false,
    openAnimation: _openAnimation2.default
};
Tree.propTypes = {
    showIcon: false,
    openAnimation: _openAnimation2.default,
    showLine: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    /** 是否支持多选 */
    multiple: _propTypes2.default.bool,
    /** 是否自动展开父节点 */
    autoExpandParent: _propTypes2.default.bool,
    // checkable状态下节点选择完全受控（父子节点选中状态不再关联）
    checkStrictly: _propTypes2.default.bool,
    /** 是否支持选中 */
    checkable: _propTypes2.default.bool,
    /** 默认展开所有树节点 */
    defaultExpandAll: _propTypes2.default.bool,
    // 设置节点可拖拽（IE>8）*/
    draggable: _propTypes2.default.bool,
    prefixCls: _propTypes2.default.string,
    // AntTreeNodeProps
    disabled: _propTypes2.default.bool,
    disableCheckbox: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    key: _propTypes2.default.string,
    isLeaf: _propTypes2.default.bool,
    // AntTreeNodeEvent
    event: _propTypes2.default.oneOf(['check', 'select']),
    checked: _propTypes2.default.bool,
    selected: _propTypes2.default.bool
};
//# sourceMappingURL=index.js.map