/**
 * 平台分类组件：四级类目级联选择框
 */
import React, { Component }  from 'react';
import { Select ,Tooltip } from 'jdcloudui';
import styles from './style/category.less';
import './style/style.css';

const Option = Select.Option;
const listTip = '请选择类目';
const allowClear = true;

export default class ShopCategory extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
      firstLeaf: false, //一级类目是否是叶子节点
      secondLeaf: false, //二级类目是否是叶子节点
      firstValue: null,
      secondValue: null,
    };

    this.firstCategoryOptions = null;
    this.secondCategoryOptions = null;
    this.firstLeaf = false;
    this.secondLeaf = false;
    
    this.currentIndex = 0;
    this.firstOn = true;
    this.secondOn = false;
    this.shopCids = ''; //用于保存类目回显数据
  }

  componentWillMount() {
    //请求一级类目
    let parentCid = -1;
    this.props.getFirstCid(parentCid);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.itemTmplPublishVo){
      if(nextProps.itemTmplPublishVo.shopCids && nextProps.itemTmplPublishVo.shopCids != this.shopCids){
        this.shopCids = nextProps.itemTmplPublishVo.shopCids;
        //数据回显
        let shopCids = this.shopCids.split('-');

        switch(shopCids.length){
          case 1: 
            this.setState({ firstLeaf:true });
            this.firstLeaf = true;
            this.handleFirstCategoryChange(shopCids[0]);
            return;
          case 2: 
            this.setState({ secondLeaf:true });
            this.secondLeaf = true;
            this.handleFirstCategoryChange(shopCids[0]);
            this.handleSecondCategoryChange(shopCids[1]);
            return;
        }
      }
    }
  }

  //保存终极类目cid
  handleChangeCategoryValue(cid, ifHasLeaf) {
    let itemTmplPublishVo = this.props.itemTmplPublishVo;
      if(cid == undefined){
        cid = null
      }
      itemTmplPublishVo.shopCid = cid
      this.props.updateItemTmplAction(itemTmplPublishVo)
  }

  detailIndex(cid, category , index){//判断当前是否是根节点
    let hasLeaf = false;
    if(category && category.length > 0){
      category.map((item, index) => {
        if(item.cid == cid){
          this.currentIndex = index;
          if(category[this.currentIndex].hasLeaf == 1){
            hasLeaf = true;
          }
        }
      });
    }
    switch (index){
      case 1:
        this.setState({firstLeaf: hasLeaf});
        this.firstLeaf = hasLeaf;
      case 2: 
        this.setState({secondLeaf: hasLeaf});
        this.secondLeaf = hasLeaf;
    }
  }

  /**
   * 获取二级类目cid，返回组件对外提供的方法上面，供父组件使用
   * @param cid
   */
  handleSecondCategoryChange=(cid)=> {
    this.setState({
      secondValue: cid
    });
    this.detailIndex(cid, this.props.getShopCidRedux.second.data.data, 2);
    this.handleChangeCategoryValue(cid, this.secondLeaf);
  }

  /**
   * 查询二级类目
   * @param cid
   */
  handleFirstCategoryChange=(cid)=> {
    this.setState({
      firstValue: cid,
      secondValue: null,
      secondLeaf: false,
    });
    this.firstOn = true;
    this.secondOn = true;
    this.secondCategoryOptions = null;
    if (cid) {
      this.detailIndex(cid, this.props.getShopCidRedux.first.data.data, 1);
      this.props.getSecondCid(cid).then(
        (result) => {
          if(result.data && result.data.length < 1){
            if(!this.state.firstLeaf){

              this.secondCategoryOptions = [];
              this.secondOn = false;
            }else{
               this.setState({
                  secondValue: null,
                });
              this.secondCategoryOptions = null;
            }
          }
        }
      );
    } else{
      this.secondCategoryOptions = null;
      this.props.clearData(1);
    }
    this.handleChangeCategoryValue(cid, this.firstLeaf);
  }

  dataSource() {
    return {
      first:()=>{
        if (this.props.getShopCidRedux.first.data){
          let firstResult = this.props.getShopCidRedux.first.data.data;
          if (firstResult && firstResult.length > 0){
            this.firstCategoryOptions = firstResult.map(first => <Option  title = {first.cName}  key={first.cid}>
                  {first.cName}
            </Option>);
          } 
        }
      },
      second:()=>{
        if (this.props.getShopCidRedux.second.data){
          let secondResult = this.props.getShopCidRedux.second.data.data;
          if (secondResult && secondResult.length > 0){
            this.secondCategoryOptions = secondResult.map(second => <Option title = {second.cName}  key={second.cid}>{second.cName}</Option>);
          }
        }
			}
    }
  }

  render() {
    this.firstOn && this.props.getShopCidRedux.first.firstloaded && this.dataSource().first();
    this.secondOn && this.props.getShopCidRedux.second.secondloaded && this.dataSource().second();

    return (
      <div className={styles.labelWrap}>
        <label className={styles.labelTitle}>店铺：</label>
        <div className={styles.labelCont}>
        {/*一级类目变化*/}
          <Select
              placeholder='请选择'
              value = {this.state.firstValue} 
              notFoundContent={listTip} 
              allowClear={allowClear} 
              size="large" 
              className="select"
              onChange={this.handleFirstCategoryChange}>
                  {this.firstCategoryOptions}
          </Select>
        {/*二级类目变化*/}
          <Select
              disabled = { this.state.firstLeaf } 
              placeholder='请选择'
              notFoundContent={listTip} 
              allowClear={allowClear} 
              size="large" 
              className="select"
              onChange={this.handleSecondCategoryChange}
              value = {this.state.secondValue} >
                  {this.secondCategoryOptions} 
          </Select>
        </div>
      </div>
    );
  }
}