'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitChunks = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var waitChunks = exports.waitChunks = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(chunksPath, timeout) {
    var chunksStatsJson;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return waitWatchFile({
              path: chunksPath,
              onChange: function onChange(err, stats) {
                if (err) {
                  throw new Error('Unable to load chunks');
                }
                chunksStats = parse(stats);
              },

              timeout: timeout
            });

          case 2:
            chunksStatsJson = _context.sent;


            chunksStats = parse(chunksStatsJson);

            return _context.abrupt('return', chunksStats);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function waitChunks(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = getChunks;
exports.waitWatchFile = waitWatchFile;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var chunksStats = [];

function getChunks() {
  return chunksStats;
}

function waitWatchFile() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      path = _ref.path,
      onChange = _ref.onChange,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === undefined ? 60000 : _ref$timeout;

  function watch(loaded, timeleft) {
    return new _promise2.default(function (resolve, reject) {
      if (timeleft < 0) {
        loaded = true;
        return reject(new Error('waitFile: timeout (' + timeout + 'ms): ' + path));
      }

      // Simple first read for production
      if (!loaded) {
        _fs2.default.access(path, _fs2.default.constants.R_OK, function (err) {
          if (!err && !loaded) {
            _fs2.default.readFile(path, 'utf8', function (err2, data) {
              if (err2) return reject(err2);
              loaded = true;
              resolve(data);
            });
          }
        });
      }

      if (!__DEVELOPMENT__) {
        return;
      }

      try {
        var watcher = _fs2.default.watch(path, 'utf8', function (eventType) {
          if (eventType !== 'change') return;
          _fs2.default.readFile(path, 'utf8', function (err2, data) {
            if (err2) return onChange(err2);
            loaded = true;
            onChange(null, data);
          });
        });

        setTimeout(function () {
          watcher.close();
          if (!loaded) {
            loaded = true;
            reject(new Error('waitFile: timeout (' + timeout + 'ms): ' + path));
          }
        }, timeleft);
      } catch (err) {
        if (err.code === 'ENOENT') {
          return setTimeout(function () {
            return resolve(watch(loaded, timeleft - 100));
          }, 100);
        }
        loaded = true;
        reject(err);
      }
    });
  }

  return watch(false, timeout);
}

function parse(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return chunksStats;
  }
}

;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(chunksStats, 'chunksStats', '../../src/helpers/getChunks.js');
  reactHotLoader.register(getChunks, 'getChunks', '../../src/helpers/getChunks.js');
  reactHotLoader.register(waitWatchFile, 'waitWatchFile', '../../src/helpers/getChunks.js');
  reactHotLoader.register(parse, 'parse', '../../src/helpers/getChunks.js');
  reactHotLoader.register(waitChunks, 'waitChunks', '../../src/helpers/getChunks.js');
  leaveModule(module);
})();

;
//# sourceMappingURL=getChunks.js.map