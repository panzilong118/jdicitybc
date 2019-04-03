/**
 * Created by huangxiao3 on 2017/8/21.
 */
import React, {Component} from 'react';
import './styles/styles.css';
import ApiClient from '../../apiClient/ApiClient';
export default class RiskUser extends Component {

  constructor(context) {
    super(context);
    this.state = {
      isRiskUser: false,
    };
  }

  isRiskUser(){
    if(this.props.riskState!=null && this.props.riskState!=undefined && (this.props.riskState==0 || this.props.riskState=='0')){
      this.setState({isRiskUser:true});
    }else if( this.props.id && this.props.companyId ){
      this.queryIsRiskUser(this.props.id, this.props.companyId);
    }else{

    }
  }

  queryIsRiskUser(id,companyId){
    var client = new ApiClient(null, null, null, true);
    client.get('/platform-service/platform/blacklistuser/checkUser', {params: {platformId: 2, userId1: id, companyId:companyId}})
      .then(
        (res) => {
          if (res.code == 0 && res.data) {
            if(res.data.userType!=null && res.data.userType!=undefined && (res.data.userType==0 || res.data.userType=='0'))
            this.setState({
              isRiskUser: true,
            });
          }else{
          }
        },
        (err) => {
        }
      );
  }

  componentWillMount(){
    this.isRiskUser();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.id && nextProps.companyId){
      this.queryIsRiskUser(nextProps.id, nextProps.companyId);
    }
  }
  render() {
    return (
      <span>
        {this.props.children}{this.state.isRiskUser && <div className="riskname">风险</div>}
      </span>
    );
  }
}

