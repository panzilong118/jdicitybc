import * as React from 'react';

import Tooltip from '../tooltip';

// eslint校验不通过，代码里面未找到使用的地方暂时注释掉
// import { AbstractTooltipProps, TooltipPlacement, TooltipTrigger } from '../tooltip';

import warning from '../_util/warning';

export default class Popover extends React.Component {
    constructor(props) {
        super(props);
        this.tooltip = {};
    }

    static defaultProps = {
        prefixCls: 'jc-popover',
        placement: 'top',
        transitionName: 'zoom-big',
        trigger: 'hover',
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        overlayStyle: {},
    };

    getPopupDomNode() {
        return this.tooltip.getPopupDomNode();
    }

    getOverlay() {
        const { title, prefixCls, content } = this.props;
        warning(
            !('overlay' in this.props),
            'Popover[overlay] is removed, please use Popover[content] instead, ' +
            'see: https://u.ant.design/popover-content',
        );
        return (
            <div>
                {title && <div className={`${prefixCls}-title`}>{title}</div>}
                <div className={`${prefixCls}-inner-content`}>
                    {content}
                </div>
            </div>
        );
    }

    saveTooltip = (node) => {
        this.tooltip = node;
    }

    render() {
        const props = { ...this.props };
        delete props.title;
        return (
            <Tooltip
                {...props}
                ref={this.saveTooltip}
                overlay={this.getOverlay()}
            />
        );
    }
}
