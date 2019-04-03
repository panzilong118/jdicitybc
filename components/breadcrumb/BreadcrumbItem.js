import * as React from 'react';
import PropTypes from 'prop-types';

export default class BreadcrumbItem extends React.Component {
    static __JC_BREADCRUMB_ITEM = true;
    constructor(props) {
        super(props);
        // const __ANT_BREADCRUMB_ITEM = true;
    }
    render() {
        const { prefixCls, separator, children, ...restProps } = this.props;
        let link;
        /* 如果有herf就用a标签，没有则用span标签 */
        if ('href' in this.props) {
            link = <a className={`${prefixCls}-link`} {...restProps}>{children}</a>;
        } else {
            link = <span className={`${prefixCls}-link`} {...restProps}>{children}</span>;
        }
        if (children) {
            return (
                <span>
                    {link}
                    <span className={`${prefixCls}-separator`}>{separator}</span>
                </span>
            );
        }
        return null;
    }
}
BreadcrumbItem.defaultProps = {
    prefixCls: 'jc-breadcrumb',
    separator: '/',
};
BreadcrumbItem.propTypes = {
    prefixCls: PropTypes.string,
    separator: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    href: PropTypes.string,
};
