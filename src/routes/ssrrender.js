import React from 'react';
import ReactDOM from 'react-dom/server';
import path from 'path';
import createMemoryHistory from 'history/createMemoryHistory';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { trigger } from 'redial';
import serialize from 'serialize-javascript';
import asyncMatchRoutes from './asyncMatchRoutes';
import ReduxAsyncConnect from './ReduxAsyncConnect';
import getChunks, { waitChunks } from '../helpers/getChunks';
import ApiClient from '../apiClient/ApiClient';
import createStore from '../redux/create';

export default async function(req,res, template, routes,reducer = {},data = {}, config) {
    const micro_service_name = config.micro_service_name.replace("b2b-","")
    Object.assign(data,{_b2b_static_server_:config._b2b_static_server_+"/"+micro_service_name+"/"});
    __DEVELOPMENT__ && webpackIsomorphicTools.refresh();
    var client = new ApiClient(config, req, res);
    const providers = {
        ...client
    };
    //const client = new ApiClient(req,res); //TODO
    const history = createMemoryHistory({ initialEntries: [req.originalUrl] });
    const store = createStore({ history, data, helpers: providers,reducer });

    function render() {
      //const script = "window.__data="+serialize(store.getState()); //TODO
      const assets = webpackIsomorphicTools.assets();
      res.render(template, {css:assets.styles,js:assets.javascript,...data});
    }

    if (__DISABLE_SSR__) {
      return render();
    }
    try {
      const { components, match, params } = await asyncMatchRoutes(routes, req.baseUrl+req.path);
      await trigger('fetch', components, {
        ...providers,
        store,
        match,
        params,
        history,
        location: history.location
      });

      const modules = [];
      const context = {};
      const component = (
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
          <Provider store={store} {...providers}>
            <ConnectedRouter history={history}>
              <StaticRouter location={req.originalUrl} context={context}>
                <ReduxAsyncConnect routes={routes} store={store} helpers={providers}>
                  {renderRoutes(routes)}
                </ReduxAsyncConnect>
              </StaticRouter>
            </ConnectedRouter>
          </Provider>
        </Loadable.Capture>
      );
      const content = ReactDOM.renderToString(component);
      if (context.url) {
        return res.redirect(301, context.url);
      }

      const locationState = store.getState().router.location;
      if (req.originalUrl !== locationState.pathname + locationState.search) {
        return res.redirect(301, locationState.pathname);
      }

      const bundles = getBundles(getChunks(), modules);
      console.log("------------",modules,bundles)
      const assets = webpackIsomorphicTools.assets();
      const serverData = "window.__data="+serialize(store.getState());
        console.log('&&&&&&&&&&&&&&&&&&&&&&',{micro_service_name});
      res.render(template, {css:assets.styles,js:assets.javascript,content,serverData,mode:__DEVELOPMENT__,micro_service_name,...data});

    } catch (mountError) {
      console.error('MOUNT ERROR:', mountError);
      res.status(500);
      render();
    }
};