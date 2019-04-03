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

export default class SecondCategory extends Component {
  constructor(props,context) {
    super(props,context);
    this.state={
      firstLeaf: false, //一级类目是否是叶子节点
      secondLeft: false, //二级类目是否是叶子节点
      thirdLeaf: false, //三级类目是否是叶子节点
      fourLeaf: false, //四级类目是否是叶子节点
      firstValue: null,
      secondValue: null,
      thirdValue: null,
      fourValue: null,
    };

    this.firstCategoryOptions = null;
    this.secondCategoryOptions = null;
    this.thirdCategoryOptions = null;
    this.fourCategoryOptions = null;

    this.firstLeaf = false;
    this.secondLeaf = false;
    this.thirdLeaf = false;
    this.fourLeaf = false;

    this.currentIndex = 0;
    this.firstOn = true;
    this.secondOn = false;
    this.thirdOn = false;
    this.fourOn = false;
    this.secondCids = ''; //用于保存类目回显数据
  }

  componentWillMount() {
    //请求一级类目
    let parentCid = -1;
    this.props.getFirstCid(parentCid,this.props.type);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.itemTmplPublishVo){
      if(nextProps.itemTmplPublishVo.secondCids && nextProps.itemTmplPublishVo.secondCids != this.secondCids){
        this.secondCids = nextProps.itemTmplPublishVo.secondCids;
        //数据回显
        let secondCids = this.secondCids.split('-');

        switch(secondCids.length){
          case 1: 
            this.setState({ firstLeaf:true });
            this.firstLeaf = true;
            this.handleFirstCategoryChange(secondCids[0],'',true);
            return;
          case 2: 
            this.setState({ secondLeaf:true });
            this.secondLeaf = true;
            this.handleFirstCategoryChange(secondCids[0],'',true);
            this.handleSecondCategoryChange(secondCids[1],'',true);
            return;
          case 3: 
            this.setState({ thirdLeaf:true });
            this.thirdLeaf = true;
            this.handleFirstCategoryChange(secondCids[0],'',true);
            this.handleSecondCategoryChange(secondCids[1],'',true);
            this.handleThirdCategoryChange(secondCids[2],'',true);
            return;
          case 4: 
            this.setState({ fourLeaf:true });
            this.fourLeaf = true;
            this.handleFirstCategoryChange(secondCids[0],'',true);
            this.handleSecondCategoryChange(secondCids[1],'',true);
            this.handleThirdCategoryChange(secondCids[2],'',true);
            this.handleFourCategoryChange(secondCids[3],'',true);
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
      itemTmplPublishVo.secondCid = cid
      this.props.updateItemTmplAction(itemTmplPublishVo)
  }

  detailIndex(cid, category , index){//判断当前是否是根节点
    this.setState({
      secondLeaf: false,
      thirdLeaf: false,
      fourLeaf: false,
    })
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
        return;
      case 2: 
        this.setState({secondLeaf: hasLeaf});
        this.secondLeaf = hasLeaf;
        return;
      case 3: 
        this.setState({thirdLeaf: hasLeaf});
        this.thirdLeaf = hasLeaf;
        return;
      case 4: 
        this.setState({fourLeaf: hasLeaf});
        this.fourLeaf = hasLeaf;
        return;
    }
  }

  /**
   * 获取四级类目cid，返回组件对外提供的方法上面，供父组件使用
   * @param cid
   */
  handleFourCategoryChange=(cid,option,isInit)=> {
    this.setState({
      fourValue: cid
    });
    if(!isInit){
      this.detailIndex(cid, this.props.getSecondCidRedux.four.data.data, 4);
    }
    this.handleChangeCategoryValue(cid, this.fourLeaf);    
  }

  /**
   * 查询四级类目
   * @param cid
   */
  handleThirdCategoryChange=(cid,option,isInit)=> {
    
    this.firstOn = true;
    this.secondOn = true;
    this.thirdOn = true;
    this.fourOn = true;
    this.setState({
      thirdValue: cid,
      fourValue: null,
    });
    this.fourCategoryOptions = [];
    if (cid){
      if(!isInit){
        this.detailIndex(cid, this.props.getSecondCidRedux.third.data.data, 3);
      }
      this.props.getFourCid(cid,this.props.type).then(
         (result) => {
          if(result.data && result.data.length < 1){
              if(!this.state.thirdLeaf){
                this.fourCategoryOptions = [];
                this.firstOn = true;
                this.secondOn = true;
                this.thirdOn = true;
                this.fourOn = false;
              }else{
                this.setState({
                    fourValue: null,
                  });
                this.fourCategoryOptions = null;
              }
            }
           }
        );
    } else {
      this.fourCategoryOptions = null;
      this.props.clearData(3);
    }
    this.handleChangeCategoryValue(cid, this.thirdLeaf);
  }
  /**
   * 查询三级类目
   * @param cid
   */
  handleSecondCategoryChange=(cid,option,isInit)=> {

    this.setState({
      secondValue: cid,
      thirdValue: null,
      fourValue: null,
    });
    this.firstOn = true;
    this.secondOn = true;
    this.thirdOn = true;
    this.fourOn = false;
    this.thirdCategoryOptions = null;
    this.fourCategoryOptions = null;
    if (cid){
      if(!isInit){
        this.detailIndex(cid, this.props.getSecondCidRedux.second.data.data, 2);
      }
      this.props.getThirdCid(cid,this.props.type).then(
        (result) => {
          if(result.data && result.data.length < 1){
              if(!this.state.secondLeaf){
                  this.thirdCategoryOptions = [];
                  this.fourCategoryOptions = [];
                  this.firstOn = true;
                  this.secondOn = true;
                  this.thirdOn = false;
                  this.fourOn = false;
              }else{
                  this.setState({
                      thirdValue: null,
                      fourValue: null,
                  });
                  this.thirdCategoryOptions = null;
                  this.fourCategoryOptions = null;
              }
          }
        }
      )
    }else{
      this.thirdCategoryOptions = null;
      this.fourCategoryOptions = null;
      this.props.clearData(2);
    }
    this.handleChangeCategoryValue(cid, this.secondLeaf);
  }
  /**
   * 查询二级类目
   * @param cid
   */
  handleFirstCategoryChange=(cid,option,isInit)=> {

    this.setState({
      firstValue: cid,
      secondValue: null,
      thirdValue: null,
      fourValue: null,
    });
    this.firstOn = true;
    this.secondOn = true;
    this.thirdOn = false;
    this.fourOn = false;
    this.secondCategoryOptions = null;
    this.thirdCategoryOptions = null;
    this.fourCategoryOptions = null;
    if (cid) {
      if(!isInit){
        this.detailIndex(cid, this.props.getSecondCidRedux.first.data.data, 1);
      }
      this.props.getSecondCid(cid,this.props.type).then(
        (result) => {
          if(result.data && result.data.length < 1){
            if(!this.state.firstLeaf){
              this.secondCategoryOptions = [];
              this.thirdCategoryOptions = [];
              this.fourCategoryOptions = [];
              this.secondOn = false;
              this.thirdOn = false;
              this.fourOn = false;  
            }else{
               this.setState({
                  secondValue: null,
                  thirdValue: null,
                  fourValue: null,
                });
              this.secondCategoryOptions = null;
              this.thirdCategoryOptions = null;
              this.fourCategoryOptions = null;
            }
          }
        }
      );
    } else{
      this.secondCategoryOptions = null;
      this.thirdCategoryOptions = null;
      this.fourCategoryOptions = null;
      this.props.clearData(1);
    }
    this.handleChangeCategoryValue(cid, this.firstLeaf);
  }

  dataSource() {
    return {
      first:()=>{
        if (this.props.getSecondCidRedux.first.data){
          let firstResult = this.props.getSecondCidRedux.first.data.data;
          if (firstResult && firstResult.length > 0){
            this.firstCategoryOptions = firstResult.map(first => <Option  title = {first.categoryName}  key={first.cid}>
                  {first.categoryName}
            </Option>);
          } 
        }
      },
      second:()=>{
        if (this.props.getSecondCidRedux.second.data){
          let secondResult = this.props.getSecondCidRedux.second.data.data;
          if (secondResult && secondResult.length > 0){
            this.secondCategoryOptions = secondResult.map(second => <Option title = {second.categoryName}  key={second.cid}>{second.categoryName}</Option>);
          }
        }
      },
      third:()=>{
        if (this.props.getSecondCidRedux.third.data){
          let thirdResult = this.props.getSecondCidRedux.third.data.data;
          if (thirdResult && thirdResult.length > 0){
            this.thirdCategoryOptions = thirdResult.map(third => <Option title = {third.categoryName}  key={third.cid}>{third.categoryName}</Option>);
          }
        }
      },
      four:()=>{
        if (this.props.getSecondCidRedux.four.data){
          let fourResult = this.props.getSecondCidRedux.four.data.data;
          if (fourResult && fourResult.length > 0){
            this.fourCategoryOptions = fourResult.map(four => <Option title = {four.categoryName}  key={four.cid}>{four.categoryName}</Option>);
          }
        }
      }
    }
  }

  render() {
    this.firstOn && this.props.getSecondCidRedux.first.firstloaded && this.dataSource().first();
    this.secondOn && this.props.getSecondCidRedux.second.secondloaded && this.dataSource().second();
    this.thirdOn && this.props.getSecondCidRedux.third.thirdloaded && this.dataSource().third();
    this.fourOn && this.props.getSecondCidRedux.four.fourloaded && this.dataSource().four();

    return (
      <div className={styles.labelWrap}>
        <label className={styles.labelTitle}>第二分类：</label>
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
        {/*三级类目变化*/}
          <Select 
              disabled = { this.state.secondLeaf || this.state.firstLeaf } 
              placeholder='请选择'
              notFoundContent={listTip} 
              allowClear={allowClear} 
              size="large" 
              className="select"
              onChange={this.handleThirdCategoryChange}
              value = {this.state.thirdValue} >
                  {this.thirdCategoryOptions}
          </Select>
        {/*四级类目变化*/}
          <Select 
              disabled = { this.state.firstLeaf||this.state.secondLeaf || this.state.thirdLeaf } 
              placeholder='请选择'
              notFoundContent={listTip} 
              allowClear={allowClear} 
              size="large" 
              className="select"
              value = {this.state.fourValue}  
              onChange={this.handleFourCategoryChange}>
                  {this.fourCategoryOptions}
          </Select>
        </div>
      </div>
    );
  }
}
