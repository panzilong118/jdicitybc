import { connect } from 'react-redux';
import brandData, { getShopBrandData } from './redux/queryData';
import inject from "../../../../../../../src/redux/inject";
import K from "./BasicBrand";

@inject({ brandData })
@connect(store => ({ brandData: store.brandData }), { getShopBrandData })
export default class BindBasicBrand extends K {}
