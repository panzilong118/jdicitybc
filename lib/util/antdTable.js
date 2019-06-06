'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pagination = exports.Pagination = function () {
  function Pagination() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'middle';
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
    var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Pagination);

    Object.assign(this, {
      size: size,
      pageSize: pageSize,
      current: current,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: function showTotal(total) {
        return '\u5171 ' + total + ' \u6761';
      }
    });
  }

  _createClass(Pagination, [{
    key: 'setPageInfo',
    value: function setPageInfo(_ref) {
      var total = _ref.total,
          pageNumber = _ref.pageNumber,
          pageSize = _ref.pageSize;

      return Object.assign(this, {
        total: total, current: pageNumber, pageSize: pageSize
      });
    }
  }, {
    key: 'pageInfo',
    get: function get() {
      return {
        pageSize: this.pageSize,
        pageNumber: this.current
      };
    }
  }]);

  return Pagination;
}();
//# sourceMappingURL=antdTable.js.map