import { connect } from 'react-redux';
import attributeData, { getAttributeByCategoryIdForShop,getAttributeByCategoryIdForPlatform } from './redux';
import inject from "../../../../../../../src/redux/inject";
import K from "./ReleaseSaleSpecification";

@inject({ attributeData })
@connect(store => ({ attributeData: store.attributeData }), { getAttributeByCategoryIdForShop,getAttributeByCategoryIdForPlatform })
export default class BindReleaseSpecification extends K {}
