/**
 * Created by huangxiao3 on 2018/3/27.
 */
import * as React from 'react';
import RcDropdown from 'rc-dropdown';
import classNames from 'classnames';
// import warning from '../_util/warning';
export default class Dropdown extends React.Component {
    getTransitionName() {
        const { placement = '', transitionName } = this.props;
        if (transitionName !== undefined) {
            return transitionName;
        }
        if (placement.indexOf('top') >= 0) {
            return 'slide-down';
        }
        return 'slide-up';
    }
    componentDidMount() {
        const { overlay } = this.props;
        const overlayProps = overlay.props;
        // warning(!overlayProps.mode || overlayProps.mode === 'vertical', `mode="${overlayProps.mode}" is not supported for Dropdown\'s Menu.`);
    }
    render() {
        const { children, prefixCls, overlay: overlayElements, trigger, disabled } = this.props;
        const child = React.Children.only(children);
        const overlay = React.Children.only(overlayElements);
        const dropdownTrigger = React.cloneElement(child, {
            className: classNames(child.props.className, `${prefixCls}-trigger`),
            disabled,
        });
        // menu cannot be selectable in dropdown defaultly
        const selectable = overlay.props.selectable || false;
        const fixedModeOverlay = React.cloneElement(overlay, {
            mode: 'vertical',
            selectable,
        });
        return (<RcDropdown {...this.props} transitionName={this.getTransitionName()} trigger={disabled ? [] : trigger} overlay={fixedModeOverlay}>
            {dropdownTrigger}
        </RcDropdown>);
    }
}
Dropdown.defaultProps = {
    prefixCls: 'jc-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft',
};
