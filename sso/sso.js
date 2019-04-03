"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function (req, res, client) {
   var host = req.get("host");
   var refer = req.get("referer");
   var url = "/passport/cookie/checkStAndCreateCookie";
   if (/platform/.test(host) || /passport-platform/.test(refer) || /view-zone/.test(host)) {
      url = "/platform-passport/cookie/checkStAndCreateCookie";
   }
   var returnUrl = req.query.return_url;
   var serviceTicket = req.query.st;
   var autosign = req.query.autosign || "1";
   var platformId = 2;
   console.log("requerst params:", "returnUrl:", returnUrl, ",serviceTicket:", serviceTicket);
   client.post(url, { data: { returnUrl: returnUrl, platformId: platformId, serviceTicket: serviceTicket, autosign: autosign } }).then(function (result) {
      console.log("responese result:", result);
      if (result.code == "0") {
         // res.header("Set-Cookie", result.data + ";Path=/");
         var cookieDomain = host.replace(/buyer\.|shop\.|\bmall\./, "");
         console.log(cookieDomain, "------------------------");
         res.header("Set-Cookie", result.data + ";Path=/;httpOnly=true;Domain=" + cookieDomain);
         res.redirect(returnUrl);
      } else {
         console.log("无效的ST跳转的地址:cookieDomain" + cookieDomain);
         console.log("无效的ST跳转的地址:host" + host);

         if (/platform/.test(host) || /passport-platform/.test(refer) || /view-zone/.test(host)) {
            url =cookieDomain+"/passport-operating-view/login";
         }else{
            url = cookieDomain+"/service-passport-view/login";
         }
         console.log("无效的ST跳转的地址:" + url);
         res.redirect(url);
      }
   }, function (error) {
      res.send(error);
   });
};

module.exports = exports["default"];
//# sourceMappingURL=sso.js.map
