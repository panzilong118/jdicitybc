import * as React from 'react';

import PropTypes from 'prop-types';

export const FilterDropdownMenuWrapperProps = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string
}

function FilterDropdownMenuWrapper(props) {
    return (
        <div className={props.className} onClick={props.onClick}>
            {props.children}
        </div>
    );
}
FilterDropdownMenuWrapper.propTypes = {...FilterDropdownMenuWrapperProps};

export default FilterDropdownMenuWrapper;
