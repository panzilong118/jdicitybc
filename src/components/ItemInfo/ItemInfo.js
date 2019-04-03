import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

export default class TableChild extends Component {

  render() {
    return (

      <div className={styles.goodsInfo}>
        <a className={styles.goodsImgLink} target="_blank" href={'//'+this.props.host+'/search-website-view/item/'+this.props.itemId}>
          <img className={styles.goodsImg} src={this.props.pictureUrl} alt=""/>
        </a>
        <div className={styles.goodsTextInfo}>
          <a className={"text-link f-toe " + styles.goodsName} target="_blank" href={'//'+this.props.host+'/search-website-view/item/'+this.props.itemId} title={this.props.itemName}>
            {this.props.itemName}
          </a>
          <span className={"f-toe " + styles.goodsDiscription} title={this.props.attributes}>
              {
                this.props.attributes
              }
              </span>
        </div>
      </div>


    );
  }

}