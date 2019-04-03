/*
*@auth chenyanhua
*/
/*********  基础组件 上传插件  *********/
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { Icon, message, Modal, Spin } from 'jdcloudui';
import ApiClient from '../../apiClient/ApiClient';
import './style/style.css';

export default class UploadSelect extends Component {
  constructor(props) {
    super(props);
    let param="";
    if(!props.multiple){
      param = "?single=1";
    }
    this.state = {
      multiple: props.multiple,
      visible: false,
      iframeId: "iframe" + Math.random().toString(36).substr(3),
      iframeDomain: "",
      iframeUrl: "/photo-space-view/html/select.html"+param,
      imgUrl: props.imgUrl
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imgUrl: nextProps.imgUrl
    });
  }
  componentWillMount() {
    this.getIframeDomain();
  }

  componentDidMount() {
    let that = this;
    if (window) {
      window.addEventListener("message", (e) => {
        
        var data = e.data;
        let iframeWrap = document.getElementById(that.state.iframeId);
        if (typeof data == "string") {
          data = JSON.parse(data.toString());
        }

        if (data.event == "close") {
          that.setState({ visible: false });
        } else if (data.event == "select-images") {

          let isOK=true; //所选图片满足要求

          if(!data.images || (data.images instanceof Array && data.images.length<=0)){
              isOK=false;
              if(iframeWrap){
                var message = JSON.stringify({ event: "show-message", msg: "请选择图片！" });
                iframeWrap.contentWindow.postMessage(message, "*");
              }
              return false;
            
          } else if(data.images instanceof Array && iframeWrap ){ //如果是多图
            for(let i=0;i<data.images.length;i++){
              isOK = that.limitIsOK(that,iframeWrap,data.images[i], that.props.limit);
              if(!isOK){
                  break;
              }
            }
          } else if (data.images instanceof Object && iframeWrap) { //如果是单图
            isOK = that.limitIsOK(that,iframeWrap,data.images, that.props.limit);
          } 
          
          //如果图片满足要求
          if(isOK && iframeWrap){

            iframeWrap.contentWindow.postMessage(JSON.stringify({ event: "close" }), "*");
          
            //更新图片
            if(that.props.onChange && typeof that.props.onChange=='function'){
              that.props.onChange(data.images);
            }
            
            //关闭弹窗
            that.setState({
                visible: false
            });

            if(!that.state.multiple){
                //单图的话，回显图片
                that.setState({
                    imgUrl: data.images.url
                });
            }

          }
        }
      });
    }
  }

  limitIsOK = (that,iframeWrap, images, limit) => {
    let limit_width = limit && limit.width || "auto";
    let limit_height = limit && limit.height || "auto";
    let limit_suffix = limit &&  limit.suffix || ["jpg","jpeg","png","bmp","gif"];
    let limit_size = limit && limit.size || 5;

    let img_width = images.width;
    let img_height = images.height;
    let img_suffix = images.type;
    let img_size = images.size;
    img_size = parseFloat(img_size / (1024 * 1024)).toFixed(2);

    //限制图片尺寸
    if((typeof limit_width == 'number' && limit_width != img_width) || (typeof limit_height == 'number' && limit_height != img_height)){
      let message = JSON.stringify({ event: "show-message", msg: "请上传图片尺寸为"+limit_width+"*" + limit_height+"的图片" });
      iframeWrap.contentWindow.postMessage(message, "*");
      return false;
    }
    //限制图片大小
    if(img_size >= limit_size){
      var message = JSON.stringify({ event: "show-message", msg: "图片的大小不能超过"+limit_size+"M！" });
      iframeWrap.contentWindow.postMessage(message, "*");
      return false;
    }

   //限制图片格式
   let isSuitable=false;//格式不符合要求
   for(let i=0;i<limit_suffix.length;i++){
     if(img_suffix.toLowerCase()==limit_suffix[i].toLowerCase()){
       isSuitable = true;
     }
   }

   if(!isSuitable){
      var message = JSON.stringify({ event: "show-message", msg: "请上传"+limit_suffix.join("/")+"格式图片"});
      iframeWrap.contentWindow.postMessage(message, "*");
      return false;
    }

    return true;
  }

  render() {
     let wrapClassName = 'upload-select-wrap ' + this.props.className;
      if(this.state.imgUrl && this.state.imgUrl.length>0){
        wrapClassName+=' solid-border';
      }
    return (
      <div key={this.state.iframeId} className={wrapClassName} style={this.props.style}>
        <div className='upload-select-box'>
          { this.renderChildren() }
          { this.renderFooter() }
        </div>
        <Modal
          visible={this.state.visible}
          title="上传"
          footer={null}
          width={660}
          style={{ top: 20 }}
          onCancel={this.handleCancel}
          wrapClassName='upload-select-iframe'
        >
          {
            this.state.visible ?
              <iframe id={this.state.iframeId}
                src={this.state.iframeDomain + this.state.iframeUrl}
                frameborder="0" >
              </iframe> : <Spin />
          }
        </Modal>
      </div>
    );
  }

  //移除
  onRemove = ()=>{
    //更新图片
    if(this.props.onRemove && typeof this.props.onRemove=='function'){
      this.props.onRemove({url: this.state.imgUrl});
    }
    this.setState({
      imgUrl:undefined
    });
  }

  renderChildren = ()=>{
    if(this.props.children){
      return this.props.children;
    } else if(this.state.imgUrl && this.state.imgUrl.length > 0){
      return <img src={this.state.imgUrl} alt="" />;
    } else {
      return "";
    }
  }

  renderFooter = ()=>{
    if(this.state.imgUrl && this.state.imgUrl.length>0){ //重新上传
      if(this.props.showRemoveIcon){
        return <div className='upload-select-footer'>
                  <div className="upload-select-btn" onClick={this.showContent}>重新上传</div>
                  <div className='upload-select-removebtn' onClick={this.onRemove}>删除</div>
               </div>;
      }else{
        return <div className='upload-select-footer'>
                  <div className="upload-select-btn" onClick={this.showContent}>重新上传</div>
               </div>;
      }
    } else {
      return  <div className='upload-select-defaultbtn' onClick={this.showContent}>
              <Icon type="plus" className='upload-plus'  /> <br/>上传图片
              </div>;
    }
  }

  //弹窗右上部关闭按钮
  handleCancel = () => {
    this.setState({ visible: false });
  }

  //获取域名
  getIframeDomain() {
    var client = new ApiClient(null, null, null, true);
    client.get('/passport/logout')
      .then(
      (res) => {
        if (res.code == 0 && res.data) {
          res.data.map(_item => {
            if (_item.domainType == 12) {
              let iframeDomain = `//${_item.domain}`;
              this.setState({ iframeDomain: iframeDomain });
            }
          });
        }
      },
      (err) => {
      }
      );
  }

  //打开弹窗
  showContent = () => {
    this.setState({
      visible: true
    });
  }
}
