import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Grid from './Grid/Grid';
import Search from './Search/Search';
import {query, queryCol} from './redux';

@connect(
    state => ({}),
    dispatch => bindActionCreators({query, queryCol}, dispatch)
)

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            data: {}
        }
        this.props.handleChangeRef(this);
    }
    componentWillMount() {
        const {search} = this.props;
        this.onSubmit(search);
    }
    onSubmit(params, opt){
        const {url, async, search} = this.props;
        if(opt) params = search;
        this.props.query(url, params).then(
            result => {
                if(result.code == 0) {
                    this.setState({data: result.data});
                    if(async && async.url) {
                        if(!result.data || !result.data.result || !result.data.result.length) return;
                        let arr = [];
                        for(let i = 0 ; i < result.data.result.length ; i++) {
                            for(let key in async.urlParam) {
                                arr.push(result.data.result[i][async.urlParam[key]]);
                            }
                        }
                        let param = {}
                        for(let key in async.urlParam) {
                            param[key] = arr;
                        }
                        this.props.queryCol(async.url, param).then(
                            res => {
                                if(res.code == 0) {
                                    let obj = Object.assign({}, this.state.data);
                                    for(let i = 0 ; i < res.data.length ; i++) {
                                        for(let j = 0 ; j < async.col.length ; j++)
                                        obj.result[i][async.col[j]] = res.data[i][async.col[j]];
                                    }
                                    this.setState({data: obj});
                                }
                            }
                        )
                    }
                }
            }
        );
    }
    render() {
        return <div>
            <Search
                {...this.props}
                dataSource={this.state.data}
                onSubmit={(params) => this.onSubmit(params)}
            />
            <Grid
                {...this.props}
                dataSource={this.state.data}
                onSubmit={(params) => this.onSubmit(params)}
            />
        </div>
    }
}