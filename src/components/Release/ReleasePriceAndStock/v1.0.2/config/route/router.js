
import App from '../../../../AppConfig/App';
import ReleasePriceAndStockConfig from '../Container/ReleasePriceAndStockConfig';

const routes = [
  
  {
    component: App,
    exact: false,
    routes: [
      { path: '/item-shop-view/configs/components-react/ReleasePriceAndStock/v1.0.1', exact: false, component: ReleasePriceAndStockConfig }
    ]
  }
];

export default routes;