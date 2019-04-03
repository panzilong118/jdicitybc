import * as React from 'react';
import RcPagination from 'rc-pagination';
import enUS from 'rc-pagination/lib/locale/en_US';
import classNames from 'classnames';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import Select from '../select';
import MiniSelect from './MiniSelect';

export default class Pagination extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderPagination = (locale) => {
        const { className, size, ...restProps } = this.props;
        const isSmall = size === 'small';
        return (
            <RcPagination
                {...restProps}
                className={classNames(className, { mini: isSmall })}
                selectComponentClass={isSmall ? MiniSelect : Select}
                locale={locale}
            />
        );
    }
    render() {
        return (
            <LocaleReceiver
                componentName='Pagination'
                defaultLocale={enUS}
            >
                {this.renderPagination}
            </LocaleReceiver>
        );
    }
}

Pagination.defaultProps = {
    prefixCls: 'jc-pagination',
    selectPrefixCls: 'jc-select',
};
