import * as React from 'react';
import PropTypes from 'prop-types';
import RcTree, { TreeNode } from 'rc-tree';
import animation from '../_util/openAnimation';

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


export default class Tree extends React.Component {
    static TreeNode = TreeNode;

    render() {
        const props = this.props;
        const { prefixCls, className } = props;
        const checkable = props.checkable;
        return (
            <RcTree
                {...props}
                className={className}
                checkable={checkable ? <span className={`${prefixCls}-checkbox-inner`} /> : checkable}
            >
                {this.props.children}
            </RcTree>
        );
    }
}
Tree.defaultProps = {
    prefixCls: 'jc-tree',
    checkable: false,
    showIcon: false,
    openAnimation: animation,
};
Tree.propTypes = {
    showIcon: false,
    openAnimation: animation,
    showLine: PropTypes.bool,
    className: PropTypes.string,
    /** 是否支持多选 */
    multiple: PropTypes.bool,
    /** 是否自动展开父节点 */
    autoExpandParent: PropTypes.bool,
    // checkable状态下节点选择完全受控（父子节点选中状态不再关联）
    checkStrictly: PropTypes.bool,
    /** 是否支持选中 */
    checkable: PropTypes.bool,
    /** 默认展开所有树节点 */
    defaultExpandAll: PropTypes.bool,
    // 设置节点可拖拽（IE>8）*/
    draggable: PropTypes.bool,
    prefixCls: PropTypes.string,
    // AntTreeNodeProps
    disabled: PropTypes.bool,
    disableCheckbox: PropTypes.bool,
    title: PropTypes.string,
    key: PropTypes.string,
    isLeaf: PropTypes.bool,
    // AntTreeNodeEvent
    event: PropTypes.oneOf(['check', 'select']),
    checked: PropTypes.bool,
    selected: PropTypes.bool,
};
