"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var IsJsonString = exports.IsJsonString = function IsJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
//# sourceMappingURL=isJsonString.js.map