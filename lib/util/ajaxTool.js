'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ajax = exports.ajax = function ajax(url, option, callback) {
  var defaultOption = {
    method: 'GET',
    dataType: 'JSON'
  };

  if (typeof option === 'function') {
    /* eslint-disable */
    callback = option;
    option = defaultOption;
  } else {
    /* eslint-disable */
    for (var key in defaultOption) {
      if (defaultOption.hasOwnProperty(key) && option[key] === undefined) {
        option[key] = defaultOption[key];
      }
    }
  }

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == 'file:') {
        var response = xhr.responseText;

        if (option.dataType === 'JSON') {
          try {
            response = JSON.parse(response);
          } catch (err) {
            return callback(err);
          }

          callback(null, response);
        } else {
          callback(new Error(url + ' request failed'));
        }
      }
    }
  };

  xhr.open(option.method || 'GET', url);
  xhr.send();
};
//# sourceMappingURL=ajaxTool.js.map