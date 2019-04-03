/**
 * Creat by gaoqingli on 2018/3/26.
 */
import classNames from 'classnames';

import { Circle } from 'rc-progress';

import PropTypes from 'prop-types';

import * as React from 'react';

import Icon from '../icon';

const statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068',
};

export default class Progress extends React.Component {
    static line;
    static Circle;
    render() {
        const { prefixCls, className, percent = 0, status, format, trailColor, size, successPercent, type, strokeWidth, width, showInfo, gapDegree = 0, gapPosition, ...restProps } = this.props;
        const progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in this.props) ? 'success' : (status || 'normal');
        let progressInfo;
        let progress;
        const textFormatter = format || (percentNumber => `${percentNumber}%`);

        if (showInfo) {
            let text;
            const iconType = (type === 'circle' || type === 'dashboard') ? '' : '-circle';
            if (progressStatus === 'exception') {
                text = format ? textFormatter(percent) : <Icon type={`cross${iconType}`} />;
            } else if (progressStatus === 'success') {
                text = format ? textFormatter(percent) : <Icon type={`check${iconType}`} />;
            } else {
                text = textFormatter(percent);
            }
            progressInfo = <span className={`${prefixCls}-text`}>{text}</span>;
        }

        // 进度条类型
        if (type === 'line') {
            const percentStyle = {
                width: `${percent}%`,
                height: strokeWidth || (size === 'small' ? 6 : 8),
            };
            const successPercentStyle = {
                width: `${successPercent}%`,
                height: strokeWidth || (size === 'small' ? 6 : 8),
            };
            const successSegment = successPercent !== undefined ? <div className={`${prefixCls}-success-bg`} style={successPercentStyle} /> : null;
            progress = (
                <div>
                    <div className={`${prefixCls}-outer`}>
                        <div className={`${prefixCls}-inner`}>
                            <div className={`${prefixCls}-bg`} style={percentStyle} />
                            {successSegment}
                        </div>
                    </div>
                    {progressInfo}
                </div>
            );
        } else if (type === 'circle' || type === 'dashboard') {
            const circleSize = width || 120;
            const circleStyle = {
                width: circleSize,
                height: circleSize,
                fontSize: (circleSize * 0.15) + 6,
            };
            const circleWidth = strokeWidth || 6;
            const gapPos = gapPosition || (type === 'dashboard' && 'bottom') || 'top';
            const gapDeg = gapDegree || (type === 'dashboard' && 75);
            progress = (
                <div className={`${prefixCls}-inner`} style={circleStyle}>
                    <Circle
                        percent={percent}
                        strokeWidth={circleWidth}
                        trailWidth={circleWidth}
                        strokeColor={(statusColorMap)[progressStatus]}
                        trailColor={trailColor}
                        prefixCls={prefixCls}
                        gapDegree={gapDeg}
                        gapPosition={gapPos}
                    />
                    {progressInfo}
                </div>
            );
        }
        const classString = classNames(prefixCls, {
            [`${prefixCls}-${(type === 'dashboard' && 'circle') || type}`]: true,
            [`${prefixCls}-status-${progressStatus}`]: true,
            [`${prefixCls}-show-info`]: showInfo,
            [`${prefixCls}-${size}`]: size,
        }, className);
        return (
            <div {...restProps} className={classString}>
                {progress}
            </div>
        );
    }
}
// 默认属性
Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'jc-progress',
    size: 'default',
};
// 参数类型校验
Progress.propTypes = {
    size: PropTypes.string,
    prefixCls: PropTypes.string,
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    trailColor: PropTypes.string,
    format: PropTypes.func,
    gapDegree: PropTypes.number,
    default: PropTypes.oneOf(['default', 'small']),
};
