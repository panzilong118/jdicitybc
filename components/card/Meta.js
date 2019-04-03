import * as React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

export const CardMetaProps = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    avatar: PropTypes.node,
    title: PropTypes.node,
    description: PropTypes.node
};

function CardMeta(props) {
    const { prefixCls = 'jc-card', className = '', avatar, title, description, ...others } = props;

    const classString = classNames(`${prefixCls}-meta`, className);

    const avatarDom = avatar ? <div className={`${prefixCls}-meta-avatar`}>{avatar}</div> : null;

    const titleDom = title ? <div className={`${prefixCls}-meta-title`}>{title}</div> : null;

    const descriptionDom = description ? <div className={`${prefixCls}-meta-description`}>{description}</div> : null;

    const MetaDetail = titleDom || descriptionDom ?
        (
            <div className={`${prefixCls}-meta-detail`} >
                {titleDom}
                {descriptionDom}
            </div>
        ) : null;

    return (
        <div {...others} className={classString}>
            {avatarDom}
            {MetaDetail}
        </div>
    );
}

CardMeta.propTypes = { ...CardMetaProps };

export default CardMeta;
