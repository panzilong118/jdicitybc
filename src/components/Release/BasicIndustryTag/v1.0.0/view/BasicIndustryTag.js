/**
 * @file 发布商品-基础设置- 商品名称
 */

import React, {Component} from 'react';
import { Checkbox ,message} from "jdcloudui";
import styles from "./style/basic.less";
import { getIndustryTagData } from "./redux/queryData";

class BasicIndustryTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkboxData: []
        };
        this.cid =  this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.cid;
    }

    componentDidMount(){
        //查询行业标签接口
        if(this.cid){
            this.props.getIndustryTagData({cId: this.cid},this.props.type);
        }

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.itemTmplPublishVo.cid && nextProps.itemTmplPublishVo.cid !=this.cid){
            this.cid = nextProps.itemTmplPublishVo.cid;
            this.props.getIndustryTagData({cId:this.cid},nextProps.type)
        }
        if(nextProps.industryTagData && nextProps.industryTagData.data && nextProps.industryTagData.data.data){
            let checkboxArr = [];
            if(!this.props.editData.checkboxArr && this.props.edit && this.props.ifValid) {
                let industryLabel = nextProps.itemTmplPublishVo.industryLabel || '';
                let newCheckboxArr = [];
                if(industryLabel) {
                    newCheckboxArr = nextProps.industryTagData.data.data.filter(item => industryLabel.indexOf(item.id + '') !== -1);
                }
                this.props.setEditData('checkboxArr', newCheckboxArr);
            }
            console.log(this.props.editData.checkboxArr);
            if(this.props.editData.checkboxArr && this.props.editData.checkboxArr.length > 0) {
                let flag = false;
                this.props.editData.checkboxArr.map(item => {
                    nextProps.industryTagData.data.data.map(_item => {
                        if(item.id == _item.id) {
                            flag = true;
                        }
                    });
                    if(!flag) {
                        checkboxArr.push(item);
                    }
                });
                checkboxArr = [...nextProps.industryTagData.data.data, ...checkboxArr]
            } else {
                checkboxArr = nextProps.industryTagData.data.data;
            }
            this.setState({
                checkboxData: checkboxArr
            });
        }

    }


    handelCheckChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        const itemTmplPublishVo = JSON.parse(JSON.stringify(this.props.itemTmplPublishVo));
        const industryArr = this.props.itemTmplPublishVo.industryLabel ? this.props.itemTmplPublishVo.industryLabel.split(';') : [];

        if (checked) {
            industryArr.push(value);
            itemTmplPublishVo.industryLabel = industryArr.join(';');
        } else {
            industryArr.splice(industryArr.indexOf((value + '')), 1);
            itemTmplPublishVo.industryLabel = industryArr.join(';')
        }
        this.props.updateItemTmplAction(itemTmplPublishVo);

    };


    render() {
        let { checkboxData } = this.state;
        const params = this.props.itemTmplPublishVo;
        this.id  = this.props.itemTmplPublishVo && this.props.itemTmplPublishVo.cid;
        return(
            <div className={styles.labelWrap}>
                <label htmlFor="行业标签" className={styles.labelTitle}>行业标签：</label>
                <div className={styles.labelCont}>
                    {
                        checkboxData.map((_item, index) => {
                            return (
                            <Checkbox key={index} value={_item.id} onChange={(e) => this.handelCheckChange(e)} checked={params.industryLabel ? params.industryLabel.indexOf(_item.id + '') !== -1 : false}>
                                {_item.tagName}
                            </Checkbox>
                         )
                        })
                    }
                </div>
            </div>
        )
    }


}
export default BasicIndustryTag;
