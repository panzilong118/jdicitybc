'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cycleLineChart = cycleLineChart;
exports.heatMapChart = heatMapChart;
exports.airLineChart = airLineChart;

var _echarts = require('echarts/lib/echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/lib/chart/bar');

require('echarts/lib/chart/line');

require('echarts/lib/component/dataZoom');

require('echarts/lib/component/title');

require('echarts/lib/component/legend');

require('echarts/lib/chart/heatmap');

require('echarts/lib/component/visualMap');

require('echarts/lib/component/timeline');

require('echarts/lib/component/markArea');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function xAxisData(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}
// import echarts from 'echarts';
// eslint-disable-next-line


function initHeatMapData(data) {
  var heatMapDataArr = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      var arr = [i, j, data[i][j]];
      heatMapDataArr.push(arr);
    }
  }
  return heatMapDataArr;
}

function initChartData(data, chartType) {
  var timeline = [];
  var seriesData = [];
  for (var i = 0; i < data.length; i++) {
    if (chartType === 'TaxiBJ') {
      timeline.push(i / 2);
    } else {
      timeline.push(i);
    }
    seriesData.push({
      series: [{
        data: initHeatMapData(data[i])
      }]
    });
  }
  return {
    timeline: timeline, seriesData: seriesData
  };
}

function getConfig(chartType) {
  var config = {};
  if (chartType === 'BikeNYC') {
    config.min = 0;
    config.max = 3;
  } else if (chartType === 'TaxiBJ') {
    config.min = 0;
    config.max = 200;
  }

  return config;
}

function cycleLineChart(dom, data, directionType) {
  var chartDom = _echarts2.default.init(dom);
  var options = {
    color: ['#1890FF', '#2FC25B'],
    title: {
      text: directionType === 'in' ? '任意区域流入量预测' : '任意区域流出量预测',
      x: 'center',
      align: 'center',
      textStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 14
      },
      top: 20
    },
    grid: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50
    },
    legend: {
      data: [{
        name: '真实值',
        icon: 'rect'
      }, {
        name: '预测值',
        icon: 'rect'
      }],
      top: 20,
      itemHeight: 2,
      x: 'right',
      selectedMode: false
    },
    xAxis: {
      type: 'category',
      name: '(小时)',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 12
      },
      data: xAxisData(240),
      axisLine: {
        lineStyle: {
          color: '#E9E9E9'
        }
      },
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLabel: {
        show: true,
        interval: 23,
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12
        }
      }
    },
    yAxis: {
      type: 'value',
      name: '(人数)',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.65)',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: '#E9E9E9'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12
        }
      }
    },
    series: [{
      name: '真实值',
      data: data.labels_broken,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#1890FF',
        width: 2,
        type: 'solid'
      },
      symbol: 'none'
    }, {
      name: '预测值',
      data: data.preds_broken,
      type: 'line',
      smooth: true,
      lineStyle: {
        color: '#2FC25B',
        width: 2,
        type: 'solid'
      },
      symbol: 'none'
    }]
  };
  chartDom.setOption(options);
}

function heatMapChart(dom, data, directionType, chartType) {
  var config = getConfig(chartType);
  var chartDom = _echarts2.default.init(dom);
  var options = {
    baseOption: {
      title: {
        text: directionType === 'in' ? '任意区域流入热力图' : '任意区域流出热力图',
        x: 'center',
        align: 'center',
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 14
        },
        top: 20
      },
      grid: {
        top: 50,
        bottom: 50,
        left: 0,
        right: 0
      },
      xAxis: {
        show: false,
        type: 'category'
      },
      yAxis: {
        show: false,
        type: 'category'
      },
      timeline: {
        axisType: 'category',
        realtime: true,
        x: '5%',
        x2: '5%',
        loop: true,
        autoPlay: true,
        // currentIndex: 2,
        playInterval: 3000,
        controlStyle: {
          position: 'left'
        },
        // type: 'number',
        height: '30',
        symbol: 'circle',
        symbolSize: '8',
        lineStyle: {
          // show: false,
          width: 1
        },
        data: initChartData(data, chartType).timeline
      },
      visualMap: {
        show: false,
        min: config.min,
        max: config.max,
        calculable: false,
        orient: 'horizontal',
        left: 'center',
        bottom: '5%',
        inRange: {
          color: directionType === 'in' ? ['#F6FFED', '#94DE66', '#52C41D', '#207802'] : ['#E6F6FF', '#90D4FF', '#40A9FE', '#1990FF', '#0E6DDA', '#0050B3']
        }
      },
      series: [{
        type: 'heatmap',
        // data: initHeatMapData(data),
        // data,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: '#207802'
          }
        }
      }]
    },
    options: initChartData(data, chartType).seriesData
  };
  chartDom.setOption(options);
}

function airLineChart(dom, data) {
  var chartDom = _echarts2.default.init(dom);
  var option = {
    grid: {
      top: 50,
      bottom: 50,
      left: 50,
      right: 20
    },
    legend: {
      data: [{
        name: '站点1',
        icon: 'rect'
      }, {
        name: '站点2',
        icon: 'rect'
      }, {
        name: '站点3',
        icon: 'rect'
      }, {
        name: '站点4',
        icon: 'rect'
      }, {
        name: '站点5',
        icon: 'rect'
      }],
      top: 20,
      itemHeight: 2,
      x: 'right',
      selectedMode: false
    },
    xAxis: {
      name: '时间(h)',
      nameLocation: 'center',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.45)',
        fontSize: 12
      },
      nameGap: 25,
      type: 'category',
      data: xAxisData(24),
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: 'rgba(0,0,0,0.25)'
        }
      },
      axisTick: {
        lineStyle: {
          color: 'rgba(0,0,0,0.25)'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12
        }
      }
    },
    yAxis: {
      name: 'PM2.5(ug/m3)',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.45)',
        fontSize: 12
      },
      type: 'value',
      min: 0,
      max: 500,
      interval: 50,
      boundaryGap: false,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          type: 'dotted'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12
        }
      }
    },
    series: [{
      type: 'line',
      markArea: {
        data: [[{
          yAxis: 0,
          itemStyle: {
            color: 'rgba(207,255,169,0.2)'
          }
        }, {
          yAxis: 50
        }], [{
          yAxis: 50,
          itemStyle: {
            color: 'rgba(245,220,137,0.2)'
          }
        }, {
          yAxis: 100
        }], [{
          yAxis: 100,
          itemStyle: {
            color: 'rgba(255,191,105,0.2)'
          }
        }, {
          yAxis: 150
        }], [{
          yAxis: 150,
          itemStyle: {
            color: 'rgba(255,122,70,0.2)'
          }
        }, {
          yAxis: 200
        }], [{
          yAxis: 200,
          itemStyle: {
            color: 'rgba(240,73,100,0.2)'
          }
        }, {
          yAxis: 300
        }], [{
          yAxis: 300,
          itemStyle: {
            color: 'rgba(168,8,25,0.2)'
          }
        }, {
          yAxis: 500
        }]]
      }
    }, {
      name: '站点1',
      type: 'line',
      data: data[0],
      lineStyle: {
        color: '#1890FF'
      },
      smooth: true,
      symbol: 'none'
    }, {
      name: '站点2',
      type: 'line',
      data: data[1],
      lineStyle: {
        color: '#2FC25B'
      },
      smooth: true,
      symbol: 'none'
    }, {
      name: '站点3',
      type: 'line',
      data: data[2],
      lineStyle: {
        color: '#14CCCC'
      },
      smooth: true,
      symbol: 'none'
    }, {
      name: '站点4',
      type: 'line',
      data: data[3],
      lineStyle: {
        color: '#793DCC'
      },
      smooth: true,
      symbol: 'none'
    }, {
      name: '站点5',
      type: 'line',
      data: data[4],
      lineStyle: {
        color: '#D141D9'
      },
      smooth: true,
      symbol: 'none'
    }]
  };
  chartDom.setOption(option);
}
//# sourceMappingURL=echarts.config.js.map