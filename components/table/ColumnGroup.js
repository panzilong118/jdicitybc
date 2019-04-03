import * as React from 'react';

import PropTypes from 'prop-types';

export const ColumnGroupProps = {
  title: PropTypes.node
};

export default class ColumnGroup extends React.Component {
  static __JC_TABLE_COLUMN_GROUP = true;
  static propTypes = {...ColumnGroupProps};
}
