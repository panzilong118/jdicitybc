import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {Form,Input,Select,message,Radio,Upload,Icon} from 'jdcloudui';
import './style/UploadImg.css';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span:6},
};
const formItemLayout2 = {
  labelCol: { span: 2 },
  wrapperCol: { span:10},
};
const tailFormItemLayout = {
  wrapperCol: {
    span: 10,
    offset: 2,
  },
};
message.config({
  top: 300,
  duration: 2,
});
function getBase64(img, callback,imgURL) {
  const reader = new FileReader();
  if(imgURL && imgURL!=''){
    reader.addEventListener('load', () => callback(imgURL));
    //reader.readAsDataURL(imgURL);
  }else{
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
}
export default class UploadImg extends Component {
  constructor(props, context) {
    super(props, context);
    this.state={imageUrl:''};
    this.imgUrl='';
  }
  beforeUpload =(file)=>{
    const maxFileSize = this.props.maxFileSize;
    let fileSizeType = this.props.fileSizeType;
    let imgTypes = this.props.imgType;
    var isLt2M = true,isImgTypes=true;
    var fileName = file.name;
    //var validate= file.type === 'image/jpeg';
    if(imgTypes && imgTypes.length>0){
      var fileTypes=fileName.split('.');
      var type = fileTypes[fileTypes.length-1];
      type = type.toUpperCase();
      imgTypes = imgTypes.map((types,index)=>{
        return types.toUpperCase();
      });
      if(imgTypes.indexOf(type)=== -1){//文件类型不在用户指定的范围内
        isImgTypes =false;
      }
    }
    if(maxFileSize){
      if(fileSizeType && (fileSizeType.toUpperCase()=='M' ||
        fileSizeType.toUpperCase()=='MB')){
        isLt2M = file.size <= parseInt(maxFileSize)*1024*1024;
      }else if(fileSizeType && fileSizeType.toUpperCase()=='KB'){
        isLt2M = file.size <= parseInt(maxFileSize)*1024;
      }else if(fileSizeType && fileSizeType.toUpperCase()=='B'){
        isLt2M = file.size <= parseInt(maxFileSize);
      }else{
        isLt2M = file.size <= parseInt(maxFileSize)*1024*1024;//默认fileSizeType=='M'
      }
    }
    if(!isImgTypes){
      message.error('上传图片的文件格式有误!');
      return false;
    }
    if (!isLt2M) {
      if(!fileSizeType){
        fileSizeType ='M';
      }
      message.error('上传图片的文件大小必须小于'+maxFileSize+fileSizeType+'!');
      return false;
    }
    return true;
  }
  handleChange = (info) => {
    if (info.file.status === 'done') {
      var response=info.file.response;
      if(response && response.code=='0'){
        var picture = response.data;
        if(typeof(picture)=='string'){
          picture=JSON.parse(picture);
        }
        this.imgUrl = picture.pictureURL;
        this.setState({imageUrl:picture.pictureURL});
        var attr = this.props.relation;
        let {onChangeValue} = this.props;
        var obj={};
        obj[attr]=picture.pictureURL;
        onChangeValue(obj);
        //getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }),picture.pictureURL);
      }else{
        let {onChangeValue} = this.props;
        var obj={};
        onChangeValue(obj);
      }
    }
    if (info.file.status === 'error') {
      message.error("上传失败！")
    }
  }

  render(){
    //const styles = require('./style/UploadImg.less');
    let style = this.props.style;
    const action = this.props.action;
    const data =this.props.data;
    const name = this.props.name;
    let defaultValue = this.props.defaultValue;
    let imageUrl = '';
    if(defaultValue){
      if(this.state.imageUrl){
        imageUrl = this.state.imageUrl;
      }else{
        imageUrl = defaultValue;
      }
    }else{
      imageUrl = this.state.imageUrl;
    }
    console.log(imageUrl);
    if(!style || style==''){
      style ={width:'150px',height:'150px'};
    }
    return(
      <div>
        <Upload className="avatar-uploader"
                name={name}
                showUploadList={false}
                action={action}
                beforeUpload={this.beforeUpload.bind(this)}
                onChange={this.handleChange.bind(this)}
                data={data}
        >
          {imageUrl&& imageUrl!='' ?
              <img src={imageUrl} alt="" className="avatar" style={style}/> :
              <Icon type="plus" className="avatar-uploader-trigger" style={style}/>
          }
        </Upload>
      </div>
    )
  }
}