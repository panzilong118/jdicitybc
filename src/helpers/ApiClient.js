import superagent from 'superagent'
import config from '../config'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl (path,system,domain) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path
  if (__SERVER__) {
    if(config.apiPort && config.apiPort!="" && config.apiPort!="80") {
       if(system && system!="") {
          return 'http://' + system+"." + domain + ':' + config.apiPort + adjustedPath
       }else{
          return 'http://' + domain + ':' + config.apiPort + adjustedPath
       }
    }else{
       if(system && system!="") {
          return 'http://' + system+"." + domain + adjustedPath
       }else{
          return 'http://' + domain + adjustedPath
       }
    }
    // Prepend host and port of the API server to the path.
    return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  //return '/proxy/' + adjustedPath;
  return '/proxy/' + system + adjustedPath;
}

export default class ApiClient {
  constructor (req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}, system=config.apiSystem, domain) => new Promise((resolve, reject) => {
        __SERVER__ && !domain && (domain=req.get('host').replace(config.apiSystem+".","").replace(/(:\d+)|(view.)/gi,""));
        let url = formatUrl(path,system,domain);
        console.log("domain:"+domain);
        console.log("system:"+system);
        console.log("request Url:"+url);
        const request = superagent[method](formatUrl(path,system,domain))
        if (params) {
          request.query(params);
        }
        __SERVER__ && req.get('cookie') && request.set('cookie', req.get('cookie'));
        if (data) {
          request.type("form").send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body))
      }))
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  empty () {}
}
