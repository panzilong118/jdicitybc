import * as React from 'react';

import PropTypes from 'prop-types';

import RcSlider from 'rc-slider/lib/Slider';

import RcRange from 'rc-slider/lib/Range';

import RcHandle from 'rc-slider/lib/Handle';

import Tooltip from '../tooltip';

export const SliderProps = {
    prefixCls: PropTypes.string,
    tooltipPrefixCls: PropTypes.string,
    range: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.oneOfType([PropTypes.number,PropTypes.oneOf([null])]),
    marks: PropTypes.object,
    dots: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
    included: PropTypes.bool,
    disabled: PropTypes.bool,
    vertical: PropTypes.bool,
    onChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    tipFormatter: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
    className: PropTypes.string,
    id: PropTypes.string
};

export default class Slider extends React.Component {
    static defaultProps = {
        prefixCls: 'jc-slider',
        tooltipPrefixCls: 'jc-tooltip',
        tipFormatter: (value) => {
            return value.toString();
        }
    };
    static propTypes = {...SliderProps}

    constructor(props) {
        super(props);
        this.state = {
            visibles: {}
        };
        this.rcSlider = undefined;
    }

    toggleTooltipVisible = (index, visible) => {
        this.setState(({ visibles }) => ({
            visibles: {
                ...visibles,
                [index]: visible
            }
        }));
    }
    handleWithTooltip = ({ value, dragging, index, ...restProps }) => {
        const { tooltipPrefixCls, tipFormatter } = this.props;
        const { visibles } = this.state;
        const visible = tipFormatter ? (visibles[index] || dragging) : false;
        return (
            <Tooltip
                prefixCls={tooltipPrefixCls}
                title={tipFormatter ? tipFormatter(value) : ''}
                visible={visible}
                placement='top'
                transitionName='zoom-down'
                key={index}
                align={{
                    offset: [0, 0] // 解决tooltip不随slider滚动问题
                }}
            >
                <RcHandle
                    {...restProps}
                    value={value}
                    onMouseEnter={() => this.toggleTooltipVisible(index, true)}
                    onMouseLeave={() => this.toggleTooltipVisible(index, false)}
                />
            </Tooltip>
        );
    }

    focus() {
        this.rcSlider.focus();
    }

    blur() {
        this.rcSlider.focus();
    }

    saveSlider = (node) => {
        this.rcSlider = node;
    }

    render() {
        const { range, ...restProps } = this.props;
        if (range) {
            return <RcRange {...restProps} ref={this.saveSlider} handle={this.handleWithTooltip} />;
        }
        return <RcSlider {...restProps} ref={this.saveSlider} handle={this.handleWithTooltip} />;
    }
}
