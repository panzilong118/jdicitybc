export const RankNetFcL2 = {
  background: `深度贯彻“聚焦、创新、合作”的战略思想，牢牢把握“毛利增加和门店盈利”这一根本目标，
  规划一幅面向未来、规模适当、布局合理、结构科学，以自控厅为主、业务代理渠道为辅的实体门店蓝图，
  持续推动实体门店转型再上新台阶。京东城市计算平台充分发挥京东3亿+活跃用户的消费画像数据，
  为企业建设提供最优选址方案。`,
  intro: `智能选址模型数据集包括栅格级的各项数据以及京东栅格级消费画像数据。
  数据集共包含271条上述栅格数据，且特征为141维。`,
  table: {
    columns: [
      {
        title: '字段名',
        key: 'name',
        dataIndex: 'name'
      },
      {
        title: '所属',
        key: 'parent',
        dataIndex: 'parent'
      },
      {
        title: '类型',
        key: 'type',
        dataIndex: 'type'
      },
      {
        title: '描述',
        key: 'desc',
        dataIndex: 'desc'
      }
    ],
    dataSource: [
      {
        key: 0,
        name: '房价均价',
        parent: '企业',
        type: 'float',
        desc: '当前栅格的平均房价'
      },
      {
        key: 1,
        name: '核心用户数',
        parent: '企业',
        type: 'int',
        desc: '当前栅格的联通核心用户数量'
      },
      {
        key: 2,
        name: 'POI类别统计_8',
        parent: '企业',
        type: 'int',
        desc: '当前栅格的体育休闲服务设施数量'
      },
      {
        key: 3,
        name: '用户年龄统计_06',
        parent: '企业',
        type: 'int',
        desc: '当前栅格年龄为25~29岁的联通用户数量'
      },
      {
        key: 4,
        name: '手机品牌统计_苹果',
        parent: '企业',
        type: 'int',
        desc: '当前栅格使用苹果手机的联通用户数量'
      },
      {
        key: 5,
        name: 'ulevel_hist_钻石会员',
        parent: '京东',
        type: 'int',
        desc: '当前栅格里的京东钻石会员级别用户数量'
      },
      {
        key: 6,
        name: 'age_hist_16-25岁',
        parent: '京东',
        type: 'int',
        desc: '当前栅格年龄为16~25岁的京东用户数量'
      },
      {
        key: 7,
        name: 'edu_hist_4',
        parent: '京东',
        type: 'int',
        desc: '当前栅格学历为硕士及以上的京东用户数量'
      },
      {
        key: 8,
        name: 'marriage_hist_未婚',
        parent: '京东',
        type: 'int',
        desc: '当前栅格的未婚京东用户数量'
      },
      {
        key: 9,
        name: 'grip_hist_汽车用品',
        parent: '京东',
        type: 'int',
        desc: '当前栅格购买汽车用品的京东用户数量'
      }
    ]
  },
  process: [
    {
      title: '特征标准化'
    },
    {
      title: '标签归一化'
    },
    {
      title: '数据拆分'
    },
    {
      title: '特征选择',
      children: [
        '首先计算每一维度特征的方差，将方差小于指定阈值的特征剔除掉，因为这些特征基本变化不大，对于模型的训练效果不大.',
        '通过随机森林进行筛选，利用AI平台特征工程中的组件可以计算每一维度特征的重要性，选择重要性靠前的部分特征.',
        '计算每一维度特征与标签之间的皮尔森系数，该系数能反映出特征与标签之间的线性关系，选择关系比较大的部分特征. '
      ]
    }
  ],
  paramDesc: [{
    columns: [
      {
        title: '参数名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '值',
        dataIndex: 'value',
        key: 'value'
      }
    ],
    dataSource: [
      {
        key: 0,
        name: 'num_hiddens1',
        value: '10',
        info: 'ranknet网络第一层全连接层的隐藏节点个数'
      },
      {
        key: 1,
        name: 'num_hiddens2',
        value: '10',
        info: 'ranknet网络第二层全连接层的隐藏节点个数'
      },
      {
        key: 2,
        name: 'epochs',
        value: '10',
        info: 'ranknet模型的训练轮数'
      },
      {
        key: 3,
        name: 'lr',
        value: '0.5',
        info: 'ranknet模型的训练学习率'
      },
      {
        key: 4,
        name: 'keep_prob',
        value: '0.8',
        info: 'ranknet模型的训练全连接层保持有效的节点数'
      },
      {
        key: 5,
        name: 'batch_size',
        value: '32',
        info: 'ranknet模型每一次迭代所输入样本个数'
      }
    ]
  }]
};

export const DeepAirTrain = {
  background: `随着城市化越来越快，许多发展中国家正遭受着严重的空气污染问题。
  预测未来空气质量的需求对政府的决策（如进行交通管制）和个人的决策（如是否进行户外锻炼
  也越来越重要。基于对时空数据的处理以及更先进的人工智能算法的研究，我们开发了针对城市
  未来空气污染物的预测系统，为政府和个人的决策提供了可靠的参考。`,
  intro: `Data91数据是北京三年（从2014年5月1日到2017年4月30日）的数据,
  数据集包含北京36个监测站的空气质量以及北京方圆100公里内的74个邻近站点。`,
  process: [
    '数据预处理',
    '数据读取',
    '截取将要预测数据的时间区间',
    '数据拆分',
    '构建模型',
    '对测试数据进行预测'
  ],
  paramDesc: [{
    columns: [
      {
        title: '参数名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '值',
        dataIndex: 'value',
        key: 'value'
      }
    ],
    dataSource: [
      {
        key: 0,
        name: 'str',
        value: 'data91',
        info: '数据文件名字'
      },
      {
        key: 1,
        name: 'batch_size',
        value: '512',
        info: '每批数据的大小'
      },
      {
        key: 2,
        name: 'hidden_size',
        value: '24',
        info: 'fusion net中神经元个数'
      },
      {
        key: 3,
        name: 'main_feature_size',
        value: '36',
        info: 'main feature（在我们的模型中设定AOIs为主要特征）全连接层的神经元个数'
      },
      {
        key: 4,
        name: 'auxiliary_feature_size',
        value: '6',
        info: `auxiliary feature（在我们的模型中设定meteorology, weather forecast, other pollutants,
        time and station ID为辅助特征）全连接层的神经元个数`
      },
      {
        key: 5,
        name: 'drop_rate',
        value: '0.5',
        info: 'fusion net的dropout层drop掉节点的概率（比例）'
      },
      {
        key: 6,
        name: 'spatial_shape',
        value: '[6, 17]',
        info: 'spatial数据的形状（shape）'
      },
      {
        key: 7,
        name: 'meteo_shape',
        value: '[6, 16]',
        info: 'meteorology数据的形状（shape）'
      },
      {
        key: 8,
        name: 'weafor_shape',
        value: '[16, 12]',
        info: 'weather forecast数据的形状（shape）'
      },
      {
        key: 9,
        name: 'id_shape',
        value: '[36, ]',
        info: 'id数据的形状（shape）'
      },
      {
        key: 10,
        name: 'time_shape',
        value: '[10, ]',
        info: 'time数据的形状（shape）'
      },
      {
        key: 11,
        name: 'pollution_shape',
        value: '[6, 5]',
        info: 'pollution数据的形状（shape）'
      },
      {
        key: 12,
        name: 'spatial_embed_hidden_size',
        value: '6',
        info: 'spatial数据所处网络的embed神经元个数'
      },
      {
        key: 13,
        name: 'meteo_embed_hidden_size',
        value: '3',
        info: 'meteorology数据所处网络的embed神经元个数'
      },
      {
        key: 14,
        name: 'weafor_embed_hidden_size',
        value: '3',
        info: 'weather forecast数据所处网络的embed神经元个数'
      },
      {
        key: 15,
        name: 'id_embed_hidden_size',
        value: '6',
        info: 'id数据所处网络的embed神经元个数'
      },
      {
        key: 16,
        name: 'time_embed_hidden_size',
        value: '6',
        info: 'time数据所处网络的embed神经元个数'
      },
      {
        key: 17,
        name: 'pollution_embed_hidden_size',
        value: '3',
        info: 'pollution数据所处网络的embed神经元个数'
      },
      {
        key: 18,
        name: 'start_time',
        value: '0',
        info: '数据的起始时间'
      },
      {
        key: 19,
        name: 'end_time',
        value: '6',
        info: '数据的截止时间'
      },
      {
        key: 20,
        name: 'pm2dot5_max',
        value: '500',
        info: 'PM2.5最大值'
      }
    ]
  }]
};

export const STResNetDemo = {
  background: `对于城市管理者来说，如果能提前预知城市的人流动向，并及时做出疏导，会大大减少发生交通拥堵、踩踏等公众事件的可能性。
  基于京东城市强大的时空数据处理能力和先进的人工智能算法，我们开发了一套实时城市人流及流转监控和预测系统。未来，城市管理者可以根据这个模型预测人流动向，提早做好管控。`,
  intro: `BikeNYC数据集为纽约市自行车2014年4月1日至9月30日各区域车辆流入流出的数据集合，城市被划分为高16宽8的网格，时间间隔为1h。  
  TaxiBJ数据集为北京市出租车2013年至2016年各区域车辆流入流出的数据集合，城市被划分为高32宽32的网格，时间间隔为30min。`,
  process: [
    '数据读取及归一化',
    '提取有效样本',
    '数据拆分',
    '构建模型'
  ],
  paramDesc: [
    {
      title: 'BikeNYC参数',
      columns: [
        {
          title: '参数名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '值',
          dataIndex: 'value',
          key: 'value'
        }
      ],
      dataSource: [
        {
          key: 0,
          name: 'BikeNYC',
          value: '',
          info: '数据集名称'
        },
        {
          key: 1,
          name: 'T',
          value: '24',
          info: '一天内的数据数量'
        },
        {
          key: 2,
          name: 'in_height',
          value: '16',
          info: '城市网格的高'
        },
        {
          key: 3,
          name: 'in_width',
          value: '8',
          info: '城市网格的宽'
        },
        {
          key: 4,
          name: 'external',
          value: 'false',
          info: '是否有外部数据'
        },
        {
          key: 5,
          name: 'test_size',
          value: '240',
          info: '测试集数量'
        },
        {
          key: 6,
          name: 'valid_size',
          value: '240',
          info: '验证集数量'
        },
        {
          key: 7,
          name: 'index_type',
          value: 'eaq',
          info: '下标提取方式'
        },
        {
          key: 8,
          name: 'len_external',
          value: '4',
          info: '每个样本外部特征的数据的长度'
        },
        {
          key: 9,
          name: 'len_closeness',
          value: '4',
          info: '每个样本近期数据的长度'
        },
        {
          key: 10,
          name: 'len_period',
          value: '4',
          info: '每个样本周期数据长度'
        },
        {
          key: 11,
          name: 'len_trend',
          value: '4',
          info: '每个样本趋势数据长度'
        },
        {
          key: 12,
          name: 'timesteps',
          value: '1',
          info: '预测步长'
        },
        {
          key: 13,
          name: 'batch_size',
          value: '24',
          info: '一个批次数据的数量'
        },
        {
          key: 14,
          name: 'output_activation',
          value: 'tanh',
          info: '激活函数'
        },
        {
          key: 15,
          name: 'loss',
          value: 'mse',
          info: '损失函数'
        },
        {
          key: 16,
          name: 'nb_residual_unit',
          value: '4',
          info: 'nb_residual_unit'
        },
        {
          key: 17,
          name: 'external_embed_units',
          value: '10',
          info: '外部因素编码维度'
        }
      ]
    }, {
      title: 'TaxiBJ参数',
      columns: [
        {
          title: '参数名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '值',
          dataIndex: 'value',
          key: 'value'
        }
      ],
      dataSource: [
        {
          key: 0,
          name: 'TaxiBJ',
          value: '',
          info: '数据集名称'
        },
        {
          key: 1,
          name: 'T',
          value: '48',
          info: '一天内的数据数量'
        },
        {
          key: 2,
          name: 'in_height',
          value: '32',
          info: '城市网格的高'
        },
        {
          key: 3,
          name: 'in_width',
          value: '32',
          info: '城市网格的宽'
        },
        {
          key: 4,
          name: 'external',
          value: 'true',
          info: '是否有外部数据'
        },
        {
          key: 5,
          name: 'meta_data',
          value: 'true',
          info: '是否有工作日、非工作日的标记数据'
        },
        {
          key: 6,
          name: 'timeofday',
          value: 'true',
          info: '是否有时刻数据'
        },
        {
          key: 7,
          name: 'holiday_data',
          value: 'true',
          info: '是否有假期数据'
        },
        {
          key: 8,
          name: 'meteorol_data',
          value: 'true',
          info: '是否有气候数据'
        },
        {
          key: 9,
          name: 'test_size',
          value: '2400',
          info: '测试集数量'
        },
        {
          key: 10,
          name: 'valid_size',
          value: '2400',
          info: '验证集数量'
        },
        {
          key: 11,
          name: 'index_type',
          value: 'eaq',
          info: '下标提取方式'
        },
        {
          key: 12,
          name: 'len_external',
          value: '4',
          info: '每个样本外部特征的数据的长度'
        },
        {
          key: 13,
          name: 'len_closeness',
          value: '4',
          info: '每个样本近期数据的长度'
        },
        {
          key: 14,
          name: 'len_period',
          value: '4',
          info: '每个样本周期数据长度'
        },
        {
          key: 15,
          name: 'len_trend',
          value: '4',
          info: '每个样本趋势数据长度'
        },
        {
          key: 16,
          name: 'timesteps',
          value: '1',
          info: '预测步长'
        },
        {
          key: 17,
          name: 'batch_size',
          value: '48',
          info: '一个批次数据的数量'
        },
        {
          key: 18,
          name: 'output_activation',
          value: 'tanh',
          info: '激活函数'
        },
        {
          key: 19,
          name: 'loss',
          value: 'mse',
          info: '损失函数'
        },
        {
          key: 20,
          name: 'nb_residual_unit',
          value: '4',
          info: 'nb_residual_unit'
        },
        {
          key: 21,
          name: 'external_embed_units',
          value: '10',
          info: '外部因素编码维度'
        }
      ]
    }
  ]
};
