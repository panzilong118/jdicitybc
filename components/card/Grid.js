import * as React from 'react';

import PropTypes from 'prop-types';

import classNames from 'classnames';

import omit from 'omit.js';

export const CardGridProps = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string
};

function CardGrid(props) {
    const { prefixCls = 'jc-card', className = '', ...others } = props;
    const classString = classNames(`${prefixCls}-grid`, className);
    const otherProps = omit(others, ['prefixCls']);
    return <div {...otherProps} className={classString} />;
}

CardGrid.propTypes = { ...CardGridProps };

export default CardGrid;
