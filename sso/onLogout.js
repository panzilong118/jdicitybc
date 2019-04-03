'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (logouts, loginType) {
	var client = new _ApiClient2.default();
	client.post('passport/logout').then(function (res) {
		var ds = res.data,
		    domain = null,
		    loginUrl = {};
		for (var i = 0; i < ds.length; i++) {
			if (ds[i].domainType == 1) {
				domain = ds[i].domain;
			}
			if (ds[i].domainType == 5) {
				loginUrl["login"] = ds[i].domain + "/service-passport-view/login";
			}
			if (ds[i].domainType == 8) {
				loginUrl["mlogin"] = ds[i].domain + "/mobile-service-passport-view/signin";
			}
			if (ds[i].domainType == 9) {
				loginUrl["plogin"] = ds[i].domain + "/passport-operating-view/login";
			}
		}
		window.logoutSuccess = function (event) {
			var key = event.target.id.replace("logout-", "");
			var flag = true;
			logouts[key][1] = true;
			for (var i in logouts) {
				flag = flag && logouts[i][1];
			}
			var reutrnUrl = loginType == "mlogin" ? "//" + domain + "/mobile-website-view/home" : window.location.href;
			if (flag) window.location.href = "//" + loginUrl[loginType || "login"] + "?return_url=" + encodeURIComponent(reutrnUrl);
		};
		if (domain != null) {
			var html = "";
			for (var i in logouts) {
				html += "<iframe style='display:none' onload='logoutSuccess(event)' src='//" + (i == "main" ? "" : i + ".") + domain + logouts[i][0] + "?_v=" + Math.random() + "' id='logout-" + i + "'></iframe>";
			}
			var div = document.createElement("div");
			div.innerHTML = html;
			document.body.insertBefore(div, document.body.childNodes[0]);
		}
	});
};

var _ApiClient = require('../apiClient/ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=onLogout.js.map