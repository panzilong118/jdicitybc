'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RankNetFcL2 = exports.RankNetFcL2 = {
  background: '\u6DF1\u5EA6\u8D2F\u5F7B\u201C\u805A\u7126\u3001\u521B\u65B0\u3001\u5408\u4F5C\u201D\u7684\u6218\u7565\u601D\u60F3\uFF0C\u7262\u7262\u628A\u63E1\u201C\u6BDB\u5229\u589E\u52A0\u548C\u95E8\u5E97\u76C8\u5229\u201D\u8FD9\u4E00\u6839\u672C\u76EE\u6807\uFF0C\n  \u89C4\u5212\u4E00\u5E45\u9762\u5411\u672A\u6765\u3001\u89C4\u6A21\u9002\u5F53\u3001\u5E03\u5C40\u5408\u7406\u3001\u7ED3\u6784\u79D1\u5B66\uFF0C\u4EE5\u81EA\u63A7\u5385\u4E3A\u4E3B\u3001\u4E1A\u52A1\u4EE3\u7406\u6E20\u9053\u4E3A\u8F85\u7684\u5B9E\u4F53\u95E8\u5E97\u84DD\u56FE\uFF0C\n  \u6301\u7EED\u63A8\u52A8\u5B9E\u4F53\u95E8\u5E97\u8F6C\u578B\u518D\u4E0A\u65B0\u53F0\u9636\u3002\u4EAC\u4E1C\u57CE\u5E02\u8BA1\u7B97\u5E73\u53F0\u5145\u5206\u53D1\u6325\u4EAC\u4E1C3\u4EBF+\u6D3B\u8DC3\u7528\u6237\u7684\u6D88\u8D39\u753B\u50CF\u6570\u636E\uFF0C\n  \u4E3A\u4F01\u4E1A\u5EFA\u8BBE\u63D0\u4F9B\u6700\u4F18\u9009\u5740\u65B9\u6848\u3002',
  intro: '\u667A\u80FD\u9009\u5740\u6A21\u578B\u6570\u636E\u96C6\u5305\u62EC\u6805\u683C\u7EA7\u7684\u5404\u9879\u6570\u636E\u4EE5\u53CA\u4EAC\u4E1C\u6805\u683C\u7EA7\u6D88\u8D39\u753B\u50CF\u6570\u636E\u3002\n  \u6570\u636E\u96C6\u5171\u5305\u542B271\u6761\u4E0A\u8FF0\u6805\u683C\u6570\u636E\uFF0C\u4E14\u7279\u5F81\u4E3A141\u7EF4\u3002',
  table: {
    columns: [{
      title: '字段名',
      key: 'name',
      dataIndex: 'name'
    }, {
      title: '所属',
      key: 'parent',
      dataIndex: 'parent'
    }, {
      title: '类型',
      key: 'type',
      dataIndex: 'type'
    }, {
      title: '描述',
      key: 'desc',
      dataIndex: 'desc'
    }],
    dataSource: [{
      key: 0,
      name: '房价均价',
      parent: '企业',
      type: 'float',
      desc: '当前栅格的平均房价'
    }, {
      key: 1,
      name: '核心用户数',
      parent: '企业',
      type: 'int',
      desc: '当前栅格的联通核心用户数量'
    }, {
      key: 2,
      name: 'POI类别统计_8',
      parent: '企业',
      type: 'int',
      desc: '当前栅格的体育休闲服务设施数量'
    }, {
      key: 3,
      name: '用户年龄统计_06',
      parent: '企业',
      type: 'int',
      desc: '当前栅格年龄为25~29岁的联通用户数量'
    }, {
      key: 4,
      name: '手机品牌统计_苹果',
      parent: '企业',
      type: 'int',
      desc: '当前栅格使用苹果手机的联通用户数量'
    }, {
      key: 5,
      name: 'ulevel_hist_钻石会员',
      parent: '京东',
      type: 'int',
      desc: '当前栅格里的京东钻石会员级别用户数量'
    }, {
      key: 6,
      name: 'age_hist_16-25岁',
      parent: '京东',
      type: 'int',
      desc: '当前栅格年龄为16~25岁的京东用户数量'
    }, {
      key: 7,
      name: 'edu_hist_4',
      parent: '京东',
      type: 'int',
      desc: '当前栅格学历为硕士及以上的京东用户数量'
    }, {
      key: 8,
      name: 'marriage_hist_未婚',
      parent: '京东',
      type: 'int',
      desc: '当前栅格的未婚京东用户数量'
    }, {
      key: 9,
      name: 'grip_hist_汽车用品',
      parent: '京东',
      type: 'int',
      desc: '当前栅格购买汽车用品的京东用户数量'
    }]
  },
  process: [{
    title: '特征标准化'
  }, {
    title: '标签归一化'
  }, {
    title: '数据拆分'
  }, {
    title: '特征选择',
    children: ['首先计算每一维度特征的方差，将方差小于指定阈值的特征剔除掉，因为这些特征基本变化不大，对于模型的训练效果不大.', '通过随机森林进行筛选，利用AI平台特征工程中的组件可以计算每一维度特征的重要性，选择重要性靠前的部分特征.', '计算每一维度特征与标签之间的皮尔森系数，该系数能反映出特征与标签之间的线性关系，选择关系比较大的部分特征. ']
  }],
  paramDesc: [{
    columns: [{
      title: '参数名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '值',
      dataIndex: 'value',
      key: 'value'
    }],
    dataSource: [{
      key: 0,
      name: 'num_hiddens1',
      value: '10',
      info: 'ranknet网络第一层全连接层的隐藏节点个数'
    }, {
      key: 1,
      name: 'num_hiddens2',
      value: '10',
      info: 'ranknet网络第二层全连接层的隐藏节点个数'
    }, {
      key: 2,
      name: 'epochs',
      value: '10',
      info: 'ranknet模型的训练轮数'
    }, {
      key: 3,
      name: 'lr',
      value: '0.5',
      info: 'ranknet模型的训练学习率'
    }, {
      key: 4,
      name: 'keep_prob',
      value: '0.8',
      info: 'ranknet模型的训练全连接层保持有效的节点数'
    }, {
      key: 5,
      name: 'batch_size',
      value: '32',
      info: 'ranknet模型每一次迭代所输入样本个数'
    }]
  }]
};

var DeepAirTrain = exports.DeepAirTrain = {
  background: '\u968F\u7740\u57CE\u5E02\u5316\u8D8A\u6765\u8D8A\u5FEB\uFF0C\u8BB8\u591A\u53D1\u5C55\u4E2D\u56FD\u5BB6\u6B63\u906D\u53D7\u7740\u4E25\u91CD\u7684\u7A7A\u6C14\u6C61\u67D3\u95EE\u9898\u3002\n  \u9884\u6D4B\u672A\u6765\u7A7A\u6C14\u8D28\u91CF\u7684\u9700\u6C42\u5BF9\u653F\u5E9C\u7684\u51B3\u7B56\uFF08\u5982\u8FDB\u884C\u4EA4\u901A\u7BA1\u5236\uFF09\u548C\u4E2A\u4EBA\u7684\u51B3\u7B56\uFF08\u5982\u662F\u5426\u8FDB\u884C\u6237\u5916\u953B\u70BC\n  \u4E5F\u8D8A\u6765\u8D8A\u91CD\u8981\u3002\u57FA\u4E8E\u5BF9\u65F6\u7A7A\u6570\u636E\u7684\u5904\u7406\u4EE5\u53CA\u66F4\u5148\u8FDB\u7684\u4EBA\u5DE5\u667A\u80FD\u7B97\u6CD5\u7684\u7814\u7A76\uFF0C\u6211\u4EEC\u5F00\u53D1\u4E86\u9488\u5BF9\u57CE\u5E02\n  \u672A\u6765\u7A7A\u6C14\u6C61\u67D3\u7269\u7684\u9884\u6D4B\u7CFB\u7EDF\uFF0C\u4E3A\u653F\u5E9C\u548C\u4E2A\u4EBA\u7684\u51B3\u7B56\u63D0\u4F9B\u4E86\u53EF\u9760\u7684\u53C2\u8003\u3002',
  intro: 'Data91\u6570\u636E\u662F\u5317\u4EAC\u4E09\u5E74\uFF08\u4ECE2014\u5E745\u67081\u65E5\u52302017\u5E744\u670830\u65E5\uFF09\u7684\u6570\u636E,\n  \u6570\u636E\u96C6\u5305\u542B\u5317\u4EAC36\u4E2A\u76D1\u6D4B\u7AD9\u7684\u7A7A\u6C14\u8D28\u91CF\u4EE5\u53CA\u5317\u4EAC\u65B9\u5706100\u516C\u91CC\u5185\u768474\u4E2A\u90BB\u8FD1\u7AD9\u70B9\u3002',
  process: ['数据预处理', '数据读取', '截取将要预测数据的时间区间', '数据拆分', '构建模型', '对测试数据进行预测'],
  paramDesc: [{
    columns: [{
      title: '参数名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '值',
      dataIndex: 'value',
      key: 'value'
    }],
    dataSource: [{
      key: 0,
      name: 'str',
      value: 'data91',
      info: '数据文件名字'
    }, {
      key: 1,
      name: 'batch_size',
      value: '512',
      info: '每批数据的大小'
    }, {
      key: 2,
      name: 'hidden_size',
      value: '24',
      info: 'fusion net中神经元个数'
    }, {
      key: 3,
      name: 'main_feature_size',
      value: '36',
      info: 'main feature（在我们的模型中设定AOIs为主要特征）全连接层的神经元个数'
    }, {
      key: 4,
      name: 'auxiliary_feature_size',
      value: '6',
      info: 'auxiliary feature\uFF08\u5728\u6211\u4EEC\u7684\u6A21\u578B\u4E2D\u8BBE\u5B9Ameteorology, weather forecast, other pollutants,\n        time and station ID\u4E3A\u8F85\u52A9\u7279\u5F81\uFF09\u5168\u8FDE\u63A5\u5C42\u7684\u795E\u7ECF\u5143\u4E2A\u6570'
    }, {
      key: 5,
      name: 'drop_rate',
      value: '0.5',
      info: 'fusion net的dropout层drop掉节点的概率（比例）'
    }, {
      key: 6,
      name: 'spatial_shape',
      value: '[6, 17]',
      info: 'spatial数据的形状（shape）'
    }, {
      key: 7,
      name: 'meteo_shape',
      value: '[6, 16]',
      info: 'meteorology数据的形状（shape）'
    }, {
      key: 8,
      name: 'weafor_shape',
      value: '[16, 12]',
      info: 'weather forecast数据的形状（shape）'
    }, {
      key: 9,
      name: 'id_shape',
      value: '[36, ]',
      info: 'id数据的形状（shape）'
    }, {
      key: 10,
      name: 'time_shape',
      value: '[10, ]',
      info: 'time数据的形状（shape）'
    }, {
      key: 11,
      name: 'pollution_shape',
      value: '[6, 5]',
      info: 'pollution数据的形状（shape）'
    }, {
      key: 12,
      name: 'spatial_embed_hidden_size',
      value: '6',
      info: 'spatial数据所处网络的embed神经元个数'
    }, {
      key: 13,
      name: 'meteo_embed_hidden_size',
      value: '3',
      info: 'meteorology数据所处网络的embed神经元个数'
    }, {
      key: 14,
      name: 'weafor_embed_hidden_size',
      value: '3',
      info: 'weather forecast数据所处网络的embed神经元个数'
    }, {
      key: 15,
      name: 'id_embed_hidden_size',
      value: '6',
      info: 'id数据所处网络的embed神经元个数'
    }, {
      key: 16,
      name: 'time_embed_hidden_size',
      value: '6',
      info: 'time数据所处网络的embed神经元个数'
    }, {
      key: 17,
      name: 'pollution_embed_hidden_size',
      value: '3',
      info: 'pollution数据所处网络的embed神经元个数'
    }, {
      key: 18,
      name: 'start_time',
      value: '0',
      info: '数据的起始时间'
    }, {
      key: 19,
      name: 'end_time',
      value: '6',
      info: '数据的截止时间'
    }, {
      key: 20,
      name: 'pm2dot5_max',
      value: '500',
      info: 'PM2.5最大值'
    }]
  }]
};

var STResNetDemo = exports.STResNetDemo = {
  background: '\u5BF9\u4E8E\u57CE\u5E02\u7BA1\u7406\u8005\u6765\u8BF4\uFF0C\u5982\u679C\u80FD\u63D0\u524D\u9884\u77E5\u57CE\u5E02\u7684\u4EBA\u6D41\u52A8\u5411\uFF0C\u5E76\u53CA\u65F6\u505A\u51FA\u758F\u5BFC\uFF0C\u4F1A\u5927\u5927\u51CF\u5C11\u53D1\u751F\u4EA4\u901A\u62E5\u5835\u3001\u8E29\u8E0F\u7B49\u516C\u4F17\u4E8B\u4EF6\u7684\u53EF\u80FD\u6027\u3002\n  \u57FA\u4E8E\u4EAC\u4E1C\u57CE\u5E02\u5F3A\u5927\u7684\u65F6\u7A7A\u6570\u636E\u5904\u7406\u80FD\u529B\u548C\u5148\u8FDB\u7684\u4EBA\u5DE5\u667A\u80FD\u7B97\u6CD5\uFF0C\u6211\u4EEC\u5F00\u53D1\u4E86\u4E00\u5957\u5B9E\u65F6\u57CE\u5E02\u4EBA\u6D41\u53CA\u6D41\u8F6C\u76D1\u63A7\u548C\u9884\u6D4B\u7CFB\u7EDF\u3002\u672A\u6765\uFF0C\u57CE\u5E02\u7BA1\u7406\u8005\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u6A21\u578B\u9884\u6D4B\u4EBA\u6D41\u52A8\u5411\uFF0C\u63D0\u65E9\u505A\u597D\u7BA1\u63A7\u3002',
  intro: 'BikeNYC\u6570\u636E\u96C6\u4E3A\u7EBD\u7EA6\u5E02\u81EA\u884C\u8F662014\u5E744\u67081\u65E5\u81F39\u670830\u65E5\u5404\u533A\u57DF\u8F66\u8F86\u6D41\u5165\u6D41\u51FA\u7684\u6570\u636E\u96C6\u5408\uFF0C\u57CE\u5E02\u88AB\u5212\u5206\u4E3A\u9AD816\u5BBD8\u7684\u7F51\u683C\uFF0C\u65F6\u95F4\u95F4\u9694\u4E3A1h\u3002  \n  TaxiBJ\u6570\u636E\u96C6\u4E3A\u5317\u4EAC\u5E02\u51FA\u79DF\u8F662013\u5E74\u81F32016\u5E74\u5404\u533A\u57DF\u8F66\u8F86\u6D41\u5165\u6D41\u51FA\u7684\u6570\u636E\u96C6\u5408\uFF0C\u57CE\u5E02\u88AB\u5212\u5206\u4E3A\u9AD832\u5BBD32\u7684\u7F51\u683C\uFF0C\u65F6\u95F4\u95F4\u9694\u4E3A30min\u3002',
  process: ['数据读取及归一化', '提取有效样本', '数据拆分', '构建模型'],
  paramDesc: [{
    title: 'BikeNYC参数',
    columns: [{
      title: '参数名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '值',
      dataIndex: 'value',
      key: 'value'
    }],
    dataSource: [{
      key: 0,
      name: 'BikeNYC',
      value: '',
      info: '数据集名称'
    }, {
      key: 1,
      name: 'T',
      value: '24',
      info: '一天内的数据数量'
    }, {
      key: 2,
      name: 'in_height',
      value: '16',
      info: '城市网格的高'
    }, {
      key: 3,
      name: 'in_width',
      value: '8',
      info: '城市网格的宽'
    }, {
      key: 4,
      name: 'external',
      value: 'false',
      info: '是否有外部数据'
    }, {
      key: 5,
      name: 'test_size',
      value: '240',
      info: '测试集数量'
    }, {
      key: 6,
      name: 'valid_size',
      value: '240',
      info: '验证集数量'
    }, {
      key: 7,
      name: 'index_type',
      value: 'eaq',
      info: '下标提取方式'
    }, {
      key: 8,
      name: 'len_external',
      value: '4',
      info: '每个样本外部特征的数据的长度'
    }, {
      key: 9,
      name: 'len_closeness',
      value: '4',
      info: '每个样本近期数据的长度'
    }, {
      key: 10,
      name: 'len_period',
      value: '4',
      info: '每个样本周期数据长度'
    }, {
      key: 11,
      name: 'len_trend',
      value: '4',
      info: '每个样本趋势数据长度'
    }, {
      key: 12,
      name: 'timesteps',
      value: '1',
      info: '预测步长'
    }, {
      key: 13,
      name: 'batch_size',
      value: '24',
      info: '一个批次数据的数量'
    }, {
      key: 14,
      name: 'output_activation',
      value: 'tanh',
      info: '激活函数'
    }, {
      key: 15,
      name: 'loss',
      value: 'mse',
      info: '损失函数'
    }, {
      key: 16,
      name: 'nb_residual_unit',
      value: '4',
      info: 'nb_residual_unit'
    }, {
      key: 17,
      name: 'external_embed_units',
      value: '10',
      info: '外部因素编码维度'
    }]
  }, {
    title: 'TaxiBJ参数',
    columns: [{
      title: '参数名称',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: '值',
      dataIndex: 'value',
      key: 'value'
    }],
    dataSource: [{
      key: 0,
      name: 'TaxiBJ',
      value: '',
      info: '数据集名称'
    }, {
      key: 1,
      name: 'T',
      value: '48',
      info: '一天内的数据数量'
    }, {
      key: 2,
      name: 'in_height',
      value: '32',
      info: '城市网格的高'
    }, {
      key: 3,
      name: 'in_width',
      value: '32',
      info: '城市网格的宽'
    }, {
      key: 4,
      name: 'external',
      value: 'true',
      info: '是否有外部数据'
    }, {
      key: 5,
      name: 'meta_data',
      value: 'true',
      info: '是否有工作日、非工作日的标记数据'
    }, {
      key: 6,
      name: 'timeofday',
      value: 'true',
      info: '是否有时刻数据'
    }, {
      key: 7,
      name: 'holiday_data',
      value: 'true',
      info: '是否有假期数据'
    }, {
      key: 8,
      name: 'meteorol_data',
      value: 'true',
      info: '是否有气候数据'
    }, {
      key: 9,
      name: 'test_size',
      value: '2400',
      info: '测试集数量'
    }, {
      key: 10,
      name: 'valid_size',
      value: '2400',
      info: '验证集数量'
    }, {
      key: 11,
      name: 'index_type',
      value: 'eaq',
      info: '下标提取方式'
    }, {
      key: 12,
      name: 'len_external',
      value: '4',
      info: '每个样本外部特征的数据的长度'
    }, {
      key: 13,
      name: 'len_closeness',
      value: '4',
      info: '每个样本近期数据的长度'
    }, {
      key: 14,
      name: 'len_period',
      value: '4',
      info: '每个样本周期数据长度'
    }, {
      key: 15,
      name: 'len_trend',
      value: '4',
      info: '每个样本趋势数据长度'
    }, {
      key: 16,
      name: 'timesteps',
      value: '1',
      info: '预测步长'
    }, {
      key: 17,
      name: 'batch_size',
      value: '48',
      info: '一个批次数据的数量'
    }, {
      key: 18,
      name: 'output_activation',
      value: 'tanh',
      info: '激活函数'
    }, {
      key: 19,
      name: 'loss',
      value: 'mse',
      info: '损失函数'
    }, {
      key: 20,
      name: 'nb_residual_unit',
      value: '4',
      info: 'nb_residual_unit'
    }, {
      key: 21,
      name: 'external_embed_units',
      value: '10',
      info: '外部因素编码维度'
    }]
  }]
};
//# sourceMappingURL=application.js.map