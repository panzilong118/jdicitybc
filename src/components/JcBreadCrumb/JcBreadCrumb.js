/*Created by chenyanhua at 2017/6/6 */
import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./style/style.css";

class JcBreadCrumb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: props.menu || []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.menu){
            this.setState({
                menu: nextProps.menu || []
            });
        }
    }

    render() {
        return (
            <div className='jc-breadcurmb-business' key="jc-breadcurmb-business" >
               { this.renderBreadCrumb() }
            </div>
        )
    }

    renderBreadCrumb = ()=>{
        let lastIndex = this.state.menu.length-1;
        return this.state.menu.map((item,index)=>{
            if(index==lastIndex){
                return <span key={index}  className='jc-bc-item'>{item.name}</span>;
            }else{
                return  <span key={index} className='jc-bc-item' >
                            <a href={item.url} target='_blank' >{item.name}</a><span className='jc-bc-split'>/</span>
                        </span>;
            }
        });
    }
}

export default JcBreadCrumb;