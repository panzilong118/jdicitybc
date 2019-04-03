import React, {Component} from 'react';
import {Badge, Icon, Menu, Dropdown} from 'jdcloudui';
import {Link} from 'react-router';
import logo from './style/logo.png';
import "./style/templateHader.css";
import ApiClient from '../../../apiClient/ApiClient';
import CompanyLayer from '../../TopTools/CompanyLayer/CompanyLayer';
const company = new CompanyLayer();

/* ****  ajax  **** */
import {connect} from 'react-redux';
import getTitleForHook, {getTitleForHookAction} from '../get_components_redux';
@connect(state => ({}), {getTitleForHookAction})

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            mainDomain: '/',
            title: ''
        };
    }

    componentWillMount() {
        this.getMainDomainForLogo();
        this.props.getTitleForHookAction().then(rs => {
            if (JSON.parse(rs[0].config).buyer) {
                this.setState({title: JSON.parse(rs[0].config).buyer})
            }
        });
    }


    // 获取域名
    getMainDomainForLogo() {
        var client = new ApiClient();
        client.get('/passport/logout')
            .then(
                (res) => {
                    if (res.code == 0 && res.data) {
                        res.data.map(_item => {
                            if (_item.domainType == 1) {
                                let mainDomain = `//${_item.domain}`;
                                this.setState({mainDomain: mainDomain});
                            }
                        });
                    }
                },
                (err) => {
                }
            );
        // client.get('/platform-service/mallInfo/getMallInfo')
        //   .then(
        //     (res) => {
        //       if(res.code == 0 && res.data) {
        //         this.priceUrl = res.data.userLogo;
        //       }
        //     },
        //     (err) => {
        //     }
        //   );
    }

    //
    render() {
        company.isCompanyId();
        // 优先级3
        let titleNName = this.props.type && this.props.type == 'subaccount' ? '组织架构' : this.state.title;
        // 优先级2
        if (this.props.typeKey && this.props.typeKey == 'companymanage') {
            titleNName = '账号管理'
        }
        // 优先级1
        if (this.props.menuType && this.props.menuType == 'companymanage') {
            titleNName = '公司店铺/财务管理';
        }
        // 优先级0
        if (this.props.titleName) {
            titleNName = this.props.titleName;
        }
        const {menus, selectKey} = this.props;
        const horizontal = menus.map((menu) => {
            return <Menu.Item key={menu.id}><a href={menu.href} target={menu.target}>{menu.name}</a></Menu.Item>;
        });
        return (
            <div className="buyer-framework-header">
                <div className="buyer-framework-container">
                    <ul>
                        <li><a className="buyer-framework-logo company-a" href={this.state.mainDomain}
                               target="_blank">{this.props.logo ? <img src={this.props.logo}/> : ''}</a></li>
                        <li><span className="buyer-framework-title">{titleNName}</span></li>
                    </ul>
                    {
                        (this.props.type && this.props.type == 'subaccount') || (this.props.typeKey && this.props.typeKey == 'companymanage') || (this.props.noFirstLevelMenu) ?
                            ''
                            :
                            <Menu
                                theme="light"
                                mode="horizontal"
                                selectedKeys={[String(selectKey)]}
                                style={{lineHeight: '62px', float: 'right'}}
                            >
                                {horizontal}
                            </Menu>
                    }
                </div>
            </div>
        )
    }
}