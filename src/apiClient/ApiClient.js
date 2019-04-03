import superagent from 'superagent';
import Cookies from '../common/Cookies';
let cookie = '';
if (!__SERVER__) {
  cookie = new Cookies();
}
const methods = ['get', 'post', 'put', 'patch', 'del'];
function getProtocol(req) {
  return "http:";
  //return req.headers["x-proto"]=="http"?"http:":"https:";
}
function formatUrl(path, config, req) {
  if (/^(https?:)|^(\/\/)/.test(path)) return path;
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    var protocol = getProtocol(req);
    //var protocol = req.headers["x-proto"]=="http"?"http":"https";
    if (config.apiPort != "" && config.apiPort != "80") {
      return protocol + '//' + config.apiHost + ':' + config.apiPort + adjustedPath;
    } else {
      return protocol + '//' + config.apiHost + adjustedPath;
    }
    // Prepend host and port of the API server to the path.
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/proxy' + adjustedPath;
}

export default class ApiClient {
  constructor(config, req, res, operating) {
    methods.forEach((method) =>
      this[method] = (path, {params, data} = {}, noLogin, jsonFlag, shopFlag, companyIdFlag) => new Promise((resolve, reject) => {
        var url = formatUrl(path, config, req);
        const request = superagent[method](url);
        console.log(__SERVER__ ? "Server" : "Client", "---ajax:", url);
        params = params || {};

        /*
         * node端判断companyId
         * */
        if (__SERVER__) {

          var userAgent = req.headers['user-agent'];
          request.set("user-agent", userAgent);
          
          // 判断params中是否存在companyId，如果不存在则添加
          if (!params.companyId) {
            // 如果cookie里不存在companyId，读取session里的companyId,否则从cookie读取
            if (!req.cookies['companyId']) {
              params.companyId = req.session && req.session.companyId || undefined;
            } else {
              params.companyId = req.cookies['companyId'];
            }
          }
        }
        if (!__SERVER__ && !data) {
          /*
           * 获取cookie中的shopId，通过为空判断，将shopId添加到params对象中
           * 实现为每个请求添加shopId参数
           * */
          if (!shopFlag && !params.shopId) {
            params.shopId = cookie.get('shopId');
          }
          /*
           * 获取cookie中的companyId，通过为空判断，将companyId添加到params对象中
           * 实现为每个请求添加companyId参数
           * */
          if (!companyIdFlag && !params.companyId) {
            params.companyId = cookie.get('companyId');
          }
        }

        params._ = +new Date();
        request.query(params);

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'));
        }
        if (__SERVER__) {
          request.set('original-host', req.get("host"));
          console.log("host:---------------->", request.get("original-host"));

          // // 根据店铺用户权限，跳转到查询出的菜单第1个链接
          // const _params = {};
          // const menuUrl = '/proxy/authority-service/mall/resource/queryResourceMenuBySellerId';
          // const request1 = superagent[method](menuUrl);
          // request1.set('original-host', req.get('host'));
          // request1.set('cookie', req.get('cookie'));
          // _params.shopType = req.cookies['shopType'];
          // _params.shopId = req.cookies['shopId'];
          // _params.companyId = req.cookies['companyId'];
          // _params._ = +new Date();
          // request1.query(_params);
          // request1.end((err, response) => {
          //   if (response.body.code == 0) {
          //     // 从返回的数据中截取第1个有效url做为跳转路径
          //     const _data = JSON.stringify(response.body.data);
          //     const urlArr1 = _data.substr(_data.indexOf('"url":"/') + 7);
          //     const urlArr2 = urlArr1.substr(0, urlArr1.indexOf('"'));
          //     // 如果当前url中含有shop(即认为是在店铺页面下)，则重定向url到第1个有并向路径
          //     if (req.headers.host.indexOf('shop.') >= 0) {
          //       req.redirect(302, '//' + req.headers.host + urlArr2);
          //     }
          //   }
          // });
        }
        if (data) {
          /*
           * node端判断companyId
           * */
          if (__SERVER__) {
            // 判断params中是否存在companyId，如果不存在则添加
            if (typeof data === 'object') {
              if (!data.companyId) {
                if (!req.cookies['companyId']) {
                  data.companyId = req.session && req.session.companyId || undefined;
                } else {
                  data.companyId = req.cookies['companyId'];
                }
              }
            }
          }
          if (!__SERVER__) {
            if (typeof data === 'object') {
              /*
               * 获取cookie中的shopId，通过为空判断，将shopId添加到params对象中
               * 实现为每个请求添加shopId参数
               * */
              if (!shopFlag && !data.shopId) {
                data.shopId = cookie.get('shopId');
              }
              /*
               * 获取cookie中的companyId，通过为空判断，将companyId添加到params对象中
               * 实现为每个请求添加companyId参数
               * */
              if (!companyIdFlag && !data.companyId) {
                data.companyId = cookie.get('companyId');
              }
            }
          }
          if (jsonFlag) {
            request.type("json").send(data);
          } else {
            request.type("form").send(data);
          }

        }
        function sso(body) {
          const ssoSystem = operating ? "passport-platform" : "passport";
          const service = operating ? "passport-operating-view" : "service-passport-view";
          let redirectUrl = `//@/${service}/determine/login?return_url=`;
          if (noLogin) {
            resolve(body)
          } else {
            if (__SERVER__ && body.code == "0-0004") {
              var urls = req.get('host').replace("www.", "").split(".");
              if (urls.length > 2) {
                if (urls[0] == "mall" || urls[0] == "shop" || urls[0] == "buyer" || urls[0] == "passport" || urls[0] == "platform" || urls[0] == "passport-platform" || urls[0] == "view-zone"
                ) {
                  urls.splice(0, 1, ssoSystem);
                } else {
                  urls.unshift(ssoSystem);
                }
              } else {
                urls.unshift(ssoSystem)
              }
              var protocol = getProtocol(req);
              redirectUrl = protocol + redirectUrl.replace("@", urls.join("."));
              try {
                var fullUrl = protocol + '//' + req.get('host') + req.originalUrl;
                res && res.redirect(redirectUrl + encodeURIComponent(fullUrl));
              } catch (e) {
              }
            } else if (body.code == "0-0004") {
              let hostMatch = window.location.href.replace("www.", "").match(/.*?\/\/(.*?)\/|.*?\/\/(.*)/);
              let urls = hostMatch[1] || hostMatch[2];
              urls = urls.split(".");
              if (urls.length > 2) {
                if (urls[0] == "mall" || urls[0] == "shop" || urls[0] == "buyer" || urls[0] == "passport" || urls[0] == "platform" || urls[0] == "passport-platform" || urls[0] == "view-zone"
                ) {
                  urls.splice(0, 1, ssoSystem);
                } else {
                  urls.unshift(ssoSystem);
                }
              } else {
                urls.unshift(ssoSystem);
              }
              redirectUrl = redirectUrl.replace("@", urls.join("."));
              window.location.href = redirectUrl + encodeURIComponent(window.location.href);
            } else if (!!!__SERVER__ && body.code == "000001020001") {
              let hostMatch = window.location.href.match(/.*?\/\/(.*?)\/|.*?\/\/(.*)/);
              let urls = hostMatch[1] || hostMatch[2]
              // console.log("hostMatch")
              //  console.log(hostMatch)
              // console.log("hostMatch")
              // console.log("2222222222")
              let redirectUrls = "/user-shop-view/sellerinfo/defaultsupplyhome";
              window.location.href = '//' + urls + redirectUrls
            } else {
              resolve(body);
            }
          }
        }

        function error(err) {
          reject(err)
        }

        //request.end((err, { body , text }) => err ? error(body||err) : sso(JSON.stringify(body)=="{}"?text:body));
        request.end(function (err, response) {
          try {
            if (response) {
              response = response || {};
              var body = response.body || {}, text = response.text || "";
              err ? error(body || err) : sso(JSON.stringify(body) == "{}" ? text : body);
            } else {
              __SERVER__ && res.send("请求后端接口：" + url + "，请求参数:" + JSON.stringify(params) + ",返回异常" + err + ",response:" + response)
            }
          } catch (e) {
            __SERVER__ && res.send("请求后端接口：" + url + "，请求参数:" + JSON.stringify(params) + ",返回异常" + err + ",response:" + response)
          }

        });


      }));
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
  empty() {
  }
}
