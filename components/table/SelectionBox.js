import * as React from 'react';

import PropTypes from 'prop-types';

import Checkbox from '../checkbox';

import Radio from '../radio';

import { SelectionBoxProps } from './interface';

export default class SelectionBox extends React.Component {
    static propTypes = {...SelectionBoxProps};

    constructor(props) {
        super(props);

        this.state = {
            checked: this.getCheckState(props),
        };
        this.unsubscribe = () => {};
    }

    componentDidMount() {
        this.subscribe();
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    subscribe() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => {
            const checked = this.getCheckState(this.props);
            this.setState({ checked });
        });
    }

    getCheckState(props) {
        const { store, defaultSelection, rowIndex } = props;
        let checked = false;
        const selectionDirty = store && store.getState() && store.getState().selectionDirty || '';
        const selectedRowKeys = store && store.getState() && store.getState().selectedRowKeys || '';
        
        if (selectionDirty) {
            checked = selectedRowKeys.indexOf(rowIndex) >= 0;
        } else {
            checked = selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0 || false;
        }
        return checked;
    }

    render() {
        const { type, rowIndex, ...rest } = this.props;
        const { checked } = this.state;

        if (type === 'radio') {
            return (
                <Radio
                    checked={checked}
                    value={rowIndex}
                    {...rest}
                />
            );
        } else {
            return (
                <Checkbox
                    checked={checked}
                    {...rest}
                />
            );
        }
    }
}
