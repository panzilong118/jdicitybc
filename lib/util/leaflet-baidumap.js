'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * usage:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * normal:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  const map = L.map('map', {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    crs: L.CRS.Baidu, // if use baidu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    center: [31.59, 120.29],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    zoom: 12,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    maxZoom: 18,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    minZoom: 5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  L.tileLayer.chinaProvider('TianDiTu.Normal.Map').addTo(map)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion').addTo(map)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */
/* eslint-disable */


var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('proj4leaflet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_leaflet2.default.TileLayer.ChinaProvider = _leaflet2.default.TileLayer.extend({
  initialize: function initialize(type) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // (type, Object)
    var _L$TileLayer$ChinaPro = _leaflet2.default.TileLayer.ChinaProvider.getProviderConf(type, options),
        url = _L$TileLayer$ChinaPro.url,
        opt = _L$TileLayer$ChinaPro.options;

    _leaflet2.default.TileLayer.prototype.initialize.call(this, url, opt);
  }
});

_leaflet2.default.TileLayer.ChinaProvider.getProviderConf = function (type) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _type$split = type.split('.'),
      _type$split2 = _slicedToArray(_type$split, 3),
      providerName = _type$split2[0],
      mapName = _type$split2[1],
      mapType = _type$split2[2];

  var _L$TileLayer$ChinaPro2 = _leaflet2.default.TileLayer.ChinaProvider.providers[providerName],
      subdomains = _L$TileLayer$ChinaPro2.subdomains,
      mapConf = _L$TileLayer$ChinaPro2[mapName];

  var url = mapConf[mapType];
  var _mapConf$options = mapConf.options,
      mapOptions = _mapConf$options === undefined ? {} : _mapConf$options;

  if (providerName === 'Baidu') {
    var styles = mapOptions.styles;

    if (typeof styles === 'function') {
      mapOptions.styles = styles(options);
    }
    options = Object.assign(mapOptions, {
      name: options.name,
      tms: true
    }, options);
  }
  options.subdomains = mapOptions.subdomains || subdomains;
  return { url: url, options: options };
};

_leaflet2.default.TileLayer.ChinaProvider.providers = {
  TianDiTu: {
    Normal: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}"
    },
    Satellite: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}"
    },
    Terrain: {
      Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
      Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}"
    },
    subdomains: ['0', '1', '2', '3', '4', '5', '6', '7']
  },
  Baidu: {
    Normal: {
      Map: 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&scaler=1&p=1',
      options: {
        styles: function styles(_ref) {
          var bigfont = _ref.bigfont;
          return bigfont ? 'ph' : 'pl';
        }
      }
    },
    Satellite: {
      Map: 'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
      Annotion: 'http://online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles={styles}&v=020',
      options: {
        styles: function styles(_ref2) {
          var bigfont = _ref2.bigfont;
          return bigfont ? 'sh' : 'sl';
        }
      }
    },
    Custom: {
      Map: 'http://api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid={customid}',
      options: {
        subdomains: '012'
      }
    },
    Time: {
      Map: 'http://its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time={time}&label=web2D&v=017',
      options: {
        time: Date.now()
      }
    },
    subdomains: '0123456789'
  },
  GaoDe: {
    Normal: {
      Map: 'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
    },
    Satellite: {
      Map: 'http://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
      Annotion: 'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}'
    },
    subdomains: ["1", "2", "3", "4"]
  },

  Google: {
    Normal: {
      Map: "http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
    },
    Satellite: {
      Map: "http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}"
    },
    subdomains: []
  },

  Geoq: {
    Normal: {
      Map: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
      Color: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetColor/MapServer/tile/{z}/{y}/{x}",
      PurplishBlue: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      Gray: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}",
      Warm: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
      Cold: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetCold/MapServer/tile/{z}/{y}/{x}"
    },
    subdomains: []
  }
};

_leaflet2.default.tileLayer.chinaProvider = function (type, options) {
  return new _leaflet2.default.TileLayer.ChinaProvider(type, options);
};

//请引入 proj4.js 和 proj4leaflet.js
_leaflet2.default.CRS.Baidu = new _leaflet2.default.Proj.CRS('EPSG:900913', '+proj=merc\n    +a=6378206\n    +b=6356584.314245179\n    +lat_ts=0.0\n    +lon_0=0.0\n    +x_0=0\n    +y_0=0\n    +k=1.0\n    +units=m\n    +nadgrids=@null\n    +wktext\n    +no_defs', {
  resolutions: function () {
    var res = [],
        level = 19;
    res[0] = Math.pow(2, 18);
    for (var i = 1; i < level; i++) {
      res[i] = Math.pow(2, 18 - i);
    }
    return res;
  }(),
  origin: [0, 0],
  bounds: _leaflet2.default.bounds([20037508.342789244, 0], [0, 20037508.342789244])
});
//# sourceMappingURL=leaflet-baidumap.js.map