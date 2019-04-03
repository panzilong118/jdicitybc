import React, { Component } from 'react';
import {Table, message} from 'jdcloudui';
import './style.css';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }
    //创建Clums
    createColumns = (columns) => {
        const result = [];
        for(let i = 0 ; i < (columns || []).length ; i++){
            let temp = {};
            try{
                temp.title = columns[i].title;
                temp.key = columns[i].key;
                temp.dataIndex = columns[i].dataIndex;
                temp.render = columns[i].render;
                temp.sorter = columns[i].sort || null;
            }catch(err){
                throw new Error('参数错误');
            }
            result.push(temp);
        }
        return result;
    }
    //创建分页
    createPagination = (page) => {
        if(!page) return false;
        let current = this.props.dataSource && this.props.dataSource.pageNum;
        let total = this.props.dataSource && this.props.dataSource.totalCount;
        return {
            current: current,
            total: total,
            showQuickJumper: true,
            pageSize: 10,
            onChange: this.onChange.bind(this)
        };
    }
    //分页的change方法
    onChange = (pagination) => {
        const {search} = this.props;
        const params = {
            ...search,
            pageNum: pagination,
        }
        typeof this.props.onChangeSearch === "function" && this.props.onChangeSearch(params);
        this.props.onSubmit(params);
    }
    render() {
        const {columns, dataSource, page, rowSelection, rowKey, options} = this.props;
        return (
            <div>
                {options && options.length &&
                    <div className="buttonBox">
                        {options.map((item) => {
                            return item;
                        })}
                    </div>
                }
                <Table
                    columns={this.createColumns(columns)}
                    dataSource={dataSource && dataSource.result}
                    pagination={this.createPagination(page)}
                    rowSelection={rowSelection || null}
                    rowKey={rowKey || 'key'}
                />
            </div>
        )
    }
}