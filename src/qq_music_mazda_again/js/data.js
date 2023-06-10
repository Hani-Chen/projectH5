var provinceOptions = [
  {
    "name": "辽宁",
    "value": "辽宁"
  },
  {
    "name": "内蒙古",
    "value": "内蒙古"
  },
  {
    "name": "黑龙江",
    "value": "黑龙江"
  },
  {
    "name": "吉林",
    "value": "吉林"
  },
  {
    "name": "山西",
    "value": "山西"
  },
  {
    "name": "天津",
    "value": "天津"
  },
  {
    "name": "山东",
    "value": "山东"
  },
  {
    "name": "河北",
    "value": "河北"
  },
  {
    "name": "北京",
    "value": "北京"
  },
  {
    "name": "江西",
    "value": "江西"
  },
  {
    "name": "浙江",
    "value": "浙江"
  },
  {
    "name": "安徽",
    "value": "安徽"
  },
  {
    "name": "河南",
    "value": "河南"
  },
  {
    "name": "河南省",
    "value": "河南省"
  },
  {
    "name": "江苏",
    "value": "江苏"
  },
  {
    "name": "上海",
    "value": "上海"
  },
  {
    "name": "福建",
    "value": "福建"
  },
  {
    "name": "海南",
    "value": "海南"
  },
  {
    "name": "广西",
    "value": "广西"
  },
  {
    "name": "湖南",
    "value": "湖南"
  },
  {
    "name": "广东",
    "value": "广东"
  },
  {
    "name": "湖北",
    "value": "湖北"
  },
  {
    "name": "湖北省",
    "value": "湖北省"
  },
  {
    "name": "云南",
    "value": "云南"
  },
  {
    "name": "重庆",
    "value": "重庆"
  },
  {
    "name": "新疆",
    "value": "新疆"
  },
  {
    "name": "四川",
    "value": "四川"
  },
  {
    "name": "贵州",
    "value": "贵州"
  },
  {
    "name": "宁夏",
    "value": "宁夏"
  },
  {
    "name": "甘肃",
    "value": "甘肃"
  },
  {
    "name": "青海",
    "value": "青海"
  },
  {
    "name": "陕西",
    "value": "陕西"
  }
]
var cityOptions = [
  {
    "name": "鞍山市",
    "value": "鞍山市",
    "dependentValue": [
      "辽宁"
    ]
  },
  {
    "name": "大连市",
    "value": "大连市",
    "dependentValue": [
      "辽宁"
    ]
  },
  {
    "name": "辽阳市",
    "value": "辽阳市",
    "dependentValue": [
      "辽宁"
    ]
  },
  {
    "name": "盘锦市",
    "value": "盘锦市",
    "dependentValue": [
      "辽宁"
    ]
  },
  {
    "name": "沈阳市",
    "value": "沈阳市",
    "dependentValue": [
      "辽宁"
    ]
  },
  {
    "name": "赤峰",
    "value": "赤峰",
    "dependentValue": [
      "内蒙古"
    ]
  },
  {
    "name": "呼和浩特",
    "value": "呼和浩特",
    "dependentValue": [
      "内蒙古"
    ]
  },
  {
    "name": "哈尔滨市",
    "value": "哈尔滨市",
    "dependentValue": [
      "黑龙江"
    ]
  },
  {
    "name": "长春市",
    "value": "长春市",
    "dependentValue": [
      "吉林"
    ]
  },
  {
    "name": "松原市",
    "value": "松原市",
    "dependentValue": [
      "吉林"
    ]
  },
  {
    "name": "长治市",
    "value": "长治市",
    "dependentValue": [
      "山西"
    ]
  },
  {
    "name": "大同市",
    "value": "大同市",
    "dependentValue": [
      "山西"
    ]
  },
  {
    "name": "晋城市",
    "value": "晋城市",
    "dependentValue": [
      "山西"
    ]
  },
  {
    "name": "太原市",
    "value": "太原市",
    "dependentValue": [
      "山西"
    ]
  },
  {
    "name": "天津市",
    "value": "天津市",
    "dependentValue": [
      "天津"
    ]
  },
  {
    "name": "青州市",
    "value": "青州市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "日照市",
    "value": "日照市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "潍坊市",
    "value": "潍坊市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "烟台市",
    "value": "烟台市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "青岛市",
    "value": "青岛市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "德州市",
    "value": "德州市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "济南市",
    "value": "济南市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "济宁市",
    "value": "济宁市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "聊城市",
    "value": "聊城市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "临沂市",
    "value": "临沂市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "淄博市",
    "value": "淄博市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "威海市",
    "value": "威海市",
    "dependentValue": [
      "山东"
    ]
  },
  {
    "name": "保定市",
    "value": "保定市",
    "dependentValue": [
      "河北"
    ]
  },
  {
    "name": "廊坊市",
    "value": "廊坊市",
    "dependentValue": [
      "河北"
    ]
  },
  {
    "name": "石家庄市",
    "value": "石家庄市",
    "dependentValue": [
      "河北"
    ]
  },
  {
    "name": "唐山市",
    "value": "唐山市",
    "dependentValue": [
      "河北"
    ]
  },
  {
    "name": "张家口市",
    "value": "张家口市",
    "dependentValue": [
      "河北"
    ]
  },
  {
    "name": "北京市",
    "value": "北京市",
    "dependentValue": [
      "北京"
    ]
  },
  {
    "name": "赣州市",
    "value": "赣州市",
    "dependentValue": [
      "江西"
    ]
  },
  {
    "name": "南昌市",
    "value": "南昌市",
    "dependentValue": [
      "江西"
    ]
  },
  {
    "name": "上饶市",
    "value": "上饶市",
    "dependentValue": [
      "江西"
    ]
  },
  {
    "name": "宜春市",
    "value": "宜春市",
    "dependentValue": [
      "江西"
    ]
  },
  {
    "name": "温州市",
    "value": "温州市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "苍南县",
    "value": "苍南县",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "合肥市",
    "value": "合肥市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "安庆市",
    "value": "安庆市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "蚌埠市",
    "value": "蚌埠市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "阜阳市",
    "value": "阜阳市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "六安市",
    "value": "六安市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "芜湖市",
    "value": "芜湖市",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "宿州",
    "value": "宿州",
    "dependentValue": [
      "安徽"
    ]
  },
  {
    "name": "嘉兴市",
    "value": "嘉兴市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "海宁市",
    "value": "海宁市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "桐乡市",
    "value": "桐乡市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "绍兴市",
    "value": "绍兴市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "湖州市",
    "value": "湖州市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "金华市",
    "value": "金华市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "义乌市",
    "value": "义乌市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "杭州市",
    "value": "杭州市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "临海市",
    "value": "临海市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "台州市",
    "value": "台州市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "慈溪市",
    "value": "慈溪市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "宁波市",
    "value": "宁波市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "宁海县",
    "value": "宁海县",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "舟山市",
    "value": "舟山市",
    "dependentValue": [
      "浙江"
    ]
  },
  {
    "name": "郑州市",
    "value": "郑州市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "南阳市",
    "value": "南阳市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "焦作市",
    "value": "焦作市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "开封市",
    "value": "开封市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "新乡市",
    "value": "新乡市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "信阳市",
    "value": "信阳市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "许昌市",
    "value": "许昌市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "商丘市",
    "value": "商丘市",
    "dependentValue": [
      "河南省"
    ]
  },
  {
    "name": "洛阳市",
    "value": "洛阳市",
    "dependentValue": [
      "河南"
    ]
  },
  {
    "name": "连云港市",
    "value": "连云港市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "徐州市",
    "value": "徐州市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "盐城市",
    "value": "盐城市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "南京市",
    "value": "南京市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "淮安市",
    "value": "淮安市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "泰州市",
    "value": "泰州市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "扬州市",
    "value": "扬州市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "南通市",
    "value": "南通市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "上海市",
    "value": "上海市",
    "dependentValue": [
      "上海"
    ]
  },
  {
    "name": "太仓市",
    "value": "太仓市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "常熟市",
    "value": "常熟市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "江阴市",
    "value": "江阴市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "无锡市",
    "value": "无锡市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "宜兴市",
    "value": "宜兴市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "常州市",
    "value": "常州市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "镇江市",
    "value": "镇江市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "张家港市",
    "value": "张家港市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "昆山",
    "value": "昆山",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "苏州市",
    "value": "苏州市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "吴江市",
    "value": "吴江市",
    "dependentValue": [
      "江苏"
    ]
  },
  {
    "name": "福州市",
    "value": "福州市",
    "dependentValue": [
      "福建"
    ]
  },
  {
    "name": "晋江市",
    "value": "晋江市",
    "dependentValue": [
      "福建"
    ]
  },
  {
    "name": "泉州市",
    "value": "泉州市",
    "dependentValue": [
      "福建"
    ]
  },
  {
    "name": "三明市",
    "value": "三明市",
    "dependentValue": [
      "福建"
    ]
  },
  {
    "name": "厦门市",
    "value": "厦门市",
    "dependentValue": [
      "福建"
    ]
  },
  {
    "name": "海口市",
    "value": "海口市",
    "dependentValue": [
      "海南"
    ]
  },
  {
    "name": "三亚市",
    "value": "三亚市",
    "dependentValue": [
      "海南"
    ]
  },
  {
    "name": "百色市",
    "value": "百色市",
    "dependentValue": [
      "广西"
    ]
  },
  {
    "name": "桂林市",
    "value": "桂林市",
    "dependentValue": [
      "广西"
    ]
  },
  {
    "name": "柳州市",
    "value": "柳州市",
    "dependentValue": [
      "广西"
    ]
  },
  {
    "name": "南宁市",
    "value": "南宁市",
    "dependentValue": [
      "广西"
    ]
  },
  {
    "name": "长沙市",
    "value": "长沙市",
    "dependentValue": [
      "湖南"
    ]
  },
  {
    "name": "常德市",
    "value": "常德市",
    "dependentValue": [
      "湖南"
    ]
  },
  {
    "name": "郴州市",
    "value": "郴州市",
    "dependentValue": [
      "湖南"
    ]
  },
  {
    "name": "岳阳市",
    "value": "岳阳市",
    "dependentValue": [
      "湖南"
    ]
  },
  {
    "name": "株洲市",
    "value": "株洲市",
    "dependentValue": [
      "湖南"
    ]
  },
  {
    "name": "佛山市",
    "value": "佛山市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "清远市",
    "value": "清远市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "广州市",
    "value": "广州市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "中山市",
    "value": "中山市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "珠海市",
    "value": "珠海市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "惠州市",
    "value": "惠州市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "江门市",
    "value": "江门市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "东莞市",
    "value": "东莞市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "深圳市",
    "value": "深圳市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "汕头市",
    "value": "汕头市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "肇庆市",
    "value": "肇庆市",
    "dependentValue": [
      "广东"
    ]
  },
  {
    "name": "武汉市",
    "value": "武汉市",
    "dependentValue": [
      "湖北"
    ]
  },
  {
    "name": "宜昌市",
    "value": "宜昌市",
    "dependentValue": [
      "湖北"
    ]
  },
  {
    "name": "襄阳市",
    "value": "襄阳市",
    "dependentValue": [
      "湖北省"
    ]
  },
  {
    "name": "昆明市",
    "value": "昆明市",
    "dependentValue": [
      "云南"
    ]
  },
  {
    "name": "昆明",
    "value": "昆明",
    "dependentValue": [
      "云南"
    ]
  },
  {
    "name": "重庆市",
    "value": "重庆市",
    "dependentValue": [
      "重庆"
    ]
  },
  {
    "name": "乌鲁木齐市",
    "value": "乌鲁木齐市",
    "dependentValue": [
      "新疆"
    ]
  },
  {
    "name": "成都市",
    "value": "成都市",
    "dependentValue": [
      "四川"
    ]
  },
  {
    "name": "达州市",
    "value": "达州市",
    "dependentValue": [
      "四川"
    ]
  },
  {
    "name": "德阳市",
    "value": "德阳市",
    "dependentValue": [
      "四川"
    ]
  },
  {
    "name": "宜宾市",
    "value": "宜宾市",
    "dependentValue": [
      "四川"
    ]
  },
  {
    "name": "绵阳市",
    "value": "绵阳市",
    "dependentValue": [
      "四川"
    ]
  },
  {
    "name": "贵阳市",
    "value": "贵阳市",
    "dependentValue": [
      "贵州"
    ]
  },
  {
    "name": "遵义市",
    "value": "遵义市",
    "dependentValue": [
      "贵州"
    ]
  },
  {
    "name": "银川市",
    "value": "银川市",
    "dependentValue": [
      "宁夏"
    ]
  },
  {
    "name": "兰州市",
    "value": "兰州市",
    "dependentValue": [
      "甘肃"
    ]
  },
  {
    "name": "西宁市",
    "value": "西宁市",
    "dependentValue": [
      "青海"
    ]
  },
  {
    "name": "西安市",
    "value": "西安市",
    "dependentValue": [
      "陕西"
    ]
  },
  {
    "name": "邢台市",
    "value": "邢台市",
    "dependentValue": [
      "河北"
    ]
  }
]
var regionOptions = [
  {
    "name": "鞍山北方马自达汽车销售服务有限公司",
    "value": 10389,
    "dependentValue": [
      "鞍山市"
    ]
  },
  {
    "name": "大连百利加汽车贸易有限公司",
    "value": 10297,
    "dependentValue": [
      "大连市"
    ]
  },
  {
    "name": "大连中晨先达汽车销售服务有限公司",
    "value": 21005,
    "dependentValue": [
      "大连市"
    ]
  },
  {
    "name": "辽阳合兴汽车销售服务有限公司",
    "value": 10863,
    "dependentValue": [
      "辽阳市"
    ]
  },
  {
    "name": "盘锦富田富达汽车销售服务有限公司",
    "value": 10868,
    "dependentValue": [
      "盘锦市"
    ]
  },
  {
    "name": "沈阳中联汽车服务有限公司",
    "value": 10325,
    "dependentValue": [
      "沈阳市"
    ]
  },
  {
    "name": "辽宁福达汽车销售服务有限公司",
    "value": 10296,
    "dependentValue": [
      "沈阳市"
    ]
  },
  {
    "name": "沈阳鑫盛达汽车销售有限公司",
    "value": 20959,
    "dependentValue": [
      "沈阳市"
    ]
  },
  {
    "name": "赤峰泽泰汽车销售服务有限公司",
    "value": 20951,
    "dependentValue": [
      "赤峰"
    ]
  },
  {
    "name": "内蒙古燕达汽车销售服务有限公司",
    "value": 20885,
    "dependentValue": [
      "呼和浩特"
    ]
  },
  {
    "name": "哈尔滨森华汽车销售服务有限公司",
    "value": 10333,
    "dependentValue": [
      "哈尔滨市"
    ]
  },
  {
    "name": "哈尔滨乾丰汽车销售服务有限责任公司",
    "value": 10319,
    "dependentValue": [
      "哈尔滨市"
    ]
  },
  {
    "name": "吉林省华达汽车销售服务有限公司",
    "value": 10314,
    "dependentValue": [
      "长春市"
    ]
  },
  {
    "name": "吉林省仁德汽车销售服务有限公司",
    "value": 10467,
    "dependentValue": [
      "长春市"
    ]
  },
  {
    "name": "吉林省国兴汽车服务有限公司",
    "value": 10332,
    "dependentValue": [
      "长春市"
    ]
  },
  {
    "name": "长春久鼎汽车销售服务有限公司",
    "value": 11539,
    "dependentValue": [
      "长春市"
    ]
  },
  {
    "name": "松原市征途路达汽车销售有限公司",
    "value": 10464,
    "dependentValue": [
      "松原市"
    ]
  },
  {
    "name": "长治市汇众汇达汽车销售服务有限公司",
    "value": 10435,
    "dependentValue": [
      "长治市"
    ]
  },
  {
    "name": "山西中盛瑞达贸易有限公司",
    "value": 10441,
    "dependentValue": [
      "大同市"
    ]
  },
  {
    "name": "晋城市长淮汽车销售服务有限公司",
    "value": 10462,
    "dependentValue": [
      "晋城市"
    ]
  },
  {
    "name": "山西汇众汇达汽车销售服务有限公司",
    "value": 10385,
    "dependentValue": [
      "太原市"
    ]
  },
  {
    "name": "天津市骏达汽车销售服务有限公司",
    "value": 10294,
    "dependentValue": [
      "天津市"
    ]
  },
  {
    "name": "天津市中乒北骏汽车销售有限公司",
    "value": 10317,
    "dependentValue": [
      "天津市"
    ]
  },
  {
    "name": "青州长兴汽车贸易有限公司",
    "value": 11537,
    "dependentValue": [
      "青州市"
    ]
  },
  {
    "name": "日照市佰世达汽车销售服务有限公司",
    "value": 10408,
    "dependentValue": [
      "日照市"
    ]
  },
  {
    "name": "潍坊天虹汽车销售服务有限公司",
    "value": 10356,
    "dependentValue": [
      "潍坊市"
    ]
  },
  {
    "name": "烟台大成金马汽车销售服务有限公司",
    "value": 10355,
    "dependentValue": [
      "烟台市"
    ]
  },
  {
    "name": "青岛中联信汽车管理有限公司",
    "value": 20902,
    "dependentValue": [
      "青岛市"
    ]
  },
  {
    "name": "青岛恒昌汽车销售有限公司",
    "value": 20960,
    "dependentValue": [
      "青岛市"
    ]
  },
  {
    "name": "德州通达汽车销售服务有限公司",
    "value": 10442,
    "dependentValue": [
      "德州市"
    ]
  },
  {
    "name": "济南明盛汽车销售服务有限公司",
    "value": 10476,
    "dependentValue": [
      "济南市"
    ]
  },
  {
    "name": "山东新骏汽车销售服务有限公司",
    "value": 11587,
    "dependentValue": [
      "济南市"
    ]
  },
  {
    "name": "济宁福乐途汽车贸易有限公司",
    "value": 20323,
    "dependentValue": [
      "济宁市"
    ]
  },
  {
    "name": "聊城金源汽车销售服务有限公司",
    "value": 10414,
    "dependentValue": [
      "聊城市"
    ]
  },
  {
    "name": "临沂骏骐汽车贸易有限公司",
    "value": 10357,
    "dependentValue": [
      "临沂市"
    ]
  },
  {
    "name": "山东鸿达汽车发展有限公司",
    "value": 10349,
    "dependentValue": [
      "淄博市"
    ]
  },
  {
    "name": "威海驰航豪马汽车销售服务有限公司",
    "value": 20954,
    "dependentValue": [
      "威海市"
    ]
  },
  {
    "name": "保定市威达汽车销售服务有限公司",
    "value": 10354,
    "dependentValue": [
      "保定市"
    ]
  },
  {
    "name": "廊坊庞大赫峰汽车销售服务有限公司",
    "value": 10432,
    "dependentValue": [
      "廊坊市"
    ]
  },
  {
    "name": "石家庄市冀东汽车贸易有限公司",
    "value": 10295,
    "dependentValue": [
      "石家庄市"
    ]
  },
  {
    "name": "唐山冀东赫峰汽车销售服务有限公司",
    "value": 10353,
    "dependentValue": [
      "唐山市"
    ]
  },
  {
    "name": "张家口庞大赫峰汽车销售服务有限公司",
    "value": 10430,
    "dependentValue": [
      "张家口市"
    ]
  },
  {
    "name": "北京博瑞翔达汽车销售服务有限公司",
    "value": 14803,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京首汽腾达汽车销售服务有限公司",
    "value": 10324,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京华日通汽车销售服务有限公司",
    "value": 10293,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京东仁隆达汽车销售服务有限公司",
    "value": 10336,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京车豪汽车有限公司",
    "value": 10329,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京宏源亚兴汽车贸易有限公司",
    "value": 10400,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京天一恒远汽车销售服务有限责任公司",
    "value": 20886,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "北京瑞豪成商贸有限公司",
    "value": 20976,
    "dependentValue": [
      "北京市"
    ]
  },
  {
    "name": "赣州金马汽车销售服务有限公司",
    "value": 10460,
    "dependentValue": [
      "赣州市"
    ]
  },
  {
    "name": "江西戎马汽车发展有限公司",
    "value": 10306,
    "dependentValue": [
      "南昌市"
    ]
  },
  {
    "name": "江西省亚泰汽车贸易有限公司",
    "value": 10344,
    "dependentValue": [
      "南昌市"
    ]
  },
  {
    "name": "上饶戎马汽车销售服务有限公司",
    "value": 10931,
    "dependentValue": [
      "上饶市"
    ]
  },
  {
    "name": "宜春华达汽车销售服务有限公司",
    "value": 20952,
    "dependentValue": [
      "宜春市"
    ]
  },
  {
    "name": "温州华腾汽车销售服务有限公司",
    "value": 10367,
    "dependentValue": [
      "温州市"
    ]
  },
  {
    "name": "温州将军汽车销售服务有限公司",
    "value": 10366,
    "dependentValue": [
      "温州市"
    ]
  },
  {
    "name": "温州华祺汽车销售服务有限公司",
    "value": 21004,
    "dependentValue": [
      "温州市"
    ]
  },
  {
    "name": "苍南县荣睿汽车销售服务有限公司",
    "value": 11107,
    "dependentValue": [
      "苍南县"
    ]
  },
  {
    "name": "合肥市贺悦汽车销售服务有限公司",
    "value": 20950,
    "dependentValue": [
      "合肥市"
    ]
  },
  {
    "name": "安庆宜马汽车销售服务有限公司",
    "value": 20942,
    "dependentValue": [
      "安庆市"
    ]
  },
  {
    "name": "蚌埠市臣功汽车销售服务有限公司",
    "value": 11543,
    "dependentValue": [
      "蚌埠市"
    ]
  },
  {
    "name": "阜阳赛达汽车销售服务有限公司",
    "value": 10265,
    "dependentValue": [
      "阜阳市"
    ]
  },
  {
    "name": "安徽亚达汽车销售服务有限公司",
    "value": 10305,
    "dependentValue": [
      "合肥市"
    ]
  },
  {
    "name": "安徽伟新行汽车销售服务有限公司",
    "value": 10388,
    "dependentValue": [
      "合肥市"
    ]
  },
  {
    "name": "六安市泰源汽车销售服务有限公司",
    "value": 10268,
    "dependentValue": [
      "六安市"
    ]
  },
  {
    "name": "芜湖华达汽车销售服务有限公司",
    "value": 11067,
    "dependentValue": [
      "芜湖市"
    ]
  },
  {
    "name": "宿州蓝航汽车销售服务有限公司",
    "value": 11534,
    "dependentValue": [
      "宿州"
    ]
  },
  {
    "name": "嘉兴市禾通汽车销售服务有限公司",
    "value": 10371,
    "dependentValue": [
      "嘉兴市"
    ]
  },
  {
    "name": "海宁市禾通汽车销售服务有限公司",
    "value": 10472,
    "dependentValue": [
      "海宁市"
    ]
  },
  {
    "name": "桐乡市禾通汽车销售服务有限公司",
    "value": 11103,
    "dependentValue": [
      "桐乡市"
    ]
  },
  {
    "name": "绍兴骏捷汽车有限公司",
    "value": 10409,
    "dependentValue": [
      "绍兴市"
    ]
  },
  {
    "name": "绍兴瑞达汽车有限公司",
    "value": 10424,
    "dependentValue": [
      "绍兴市"
    ]
  },
  {
    "name": "湖州康宏汽车有限公司",
    "value": 10375,
    "dependentValue": [
      "湖州市"
    ]
  },
  {
    "name": "金华金宇汽车贸易有限公司",
    "value": 10374,
    "dependentValue": [
      "金华市"
    ]
  },
  {
    "name": "义乌市龙马汽车销售有限公司",
    "value": 10372,
    "dependentValue": [
      "义乌市"
    ]
  },
  {
    "name": "杭州富阳万达汽车贸易有限公司",
    "value": 11090,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "浙江康桥宏马汽车有限公司",
    "value": 10338,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "浙江元通瑞达汽车有限公司",
    "value": 11097,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "浙江孚达汽车有限公司",
    "value": 10341,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "杭州骏马汽车销售服务有限公司",
    "value": 10339,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "杭州睿马汽车有限公司",
    "value": 10425,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "绍兴诸暨爱马汽车有限公司",
    "value": 11079,
    "dependentValue": [
      "绍兴市"
    ]
  },
  
  {
    "name": "杭州森悦一达汽车有限公司",
    "value": 10452,
    "dependentValue": [
      "杭州市"
    ]
  },
  {
    "name": "临海市驭马汽车销售服务有限公司",
    "value": 10288,
    "dependentValue": [
      "临海市"
    ]
  },
  {
    "name": "台州市隆马汽车销售服务有限公司",
    "value": 10369,
    "dependentValue": [
      "台州市"
    ]
  },
  {
    "name": "台州运通博阳汽车销售服务有限公司",
    "value": 10370,
    "dependentValue": [
      "台州市"
    ]
  },
  {
    "name": "慈溪市新亚汽车销售服务有限公司",
    "value": 10373,
    "dependentValue": [
      "慈溪市"
    ]
  },
  {
    "name": "宁波合辰汽车销售服务有限公司",
    "value": 13359,
    "dependentValue": [
      "宁波市"
    ]
  },
  {
    "name": "宁波鑫之恒汽车有限公司",
    "value": 10368,
    "dependentValue": [
      "宁波市"
    ]
  },
  {
    "name": "宁波中基鑫通达汽车销售服务有限公司",
    "value": 20033,
    "dependentValue": [
      "宁波市"
    ]
  },
  {
    "name": "宁波万事得汽车有限公司",
    "value": 10267,
    "dependentValue": [
      "宁波市"
    ]
  },
  {
    "name": "宁波宏亚汽车销售服务有限公司",
    "value": 10439,
    "dependentValue": [
      "宁海县"
    ]
  },
  {
    "name": "舟山明桥汽车销售服务有限公司",
    "value": 11075,
    "dependentValue": [
      "舟山市"
    ]
  },
  {
    "name": "河南冠豪汽车销售有限公司",
    "value": 20936,
    "dependentValue": [
      "郑州市"
    ]
  },
  {
    "name": "南阳兴业汽车销售服务有限公司",
    "value": 20907,
    "dependentValue": [
      "南阳市"
    ]
  },
  {
    "name": "焦作双达汽车销售服务有限公司",
    "value": 10405,
    "dependentValue": [
      "焦作市"
    ]
  },
  {
    "name": "开封市恒嘉汽车销售服务有限公司",
    "value": 11533,
    "dependentValue": [
      "开封市"
    ]
  },
  {
    "name": "新乡市弘森汽车销售服务有限公司",
    "value": 10284,
    "dependentValue": [
      "新乡市"
    ]
  },
  {
    "name": "信阳鑫联汽车销售服务有限公司",
    "value": 10984,
    "dependentValue": [
      "信阳市"
    ]
  },
  {
    "name": "许昌正通马六汽车销售服务有限公司",
    "value": 10471,
    "dependentValue": [
      "许昌市"
    ]
  },
  {
    "name": "河南裕华紫光汽车销售有限公司",
    "value": 10320,
    "dependentValue": [
      "郑州市"
    ]
  },
  {
    "name": "商丘市宝利鑫凯汽车销售服务有限公司",
    "value": 20997,
    "dependentValue": [
      "商丘市"
    ]
  },
  {
    "name": "连云港上达汽车销售服务有限公司",
    "value": 10418,
    "dependentValue": [
      "连云港市"
    ]
  },
  {
    "name": "江苏远方汽车工贸实业有限责任公司",
    "value": 10359,
    "dependentValue": [
      "徐州市"
    ]
  },
  {
    "name": "森风集团盐城义德汽车有限公司",
    "value": 10465,
    "dependentValue": [
      "盐城市"
    ]
  },
  {
    "name": "江苏乾丰汽车销售有限公司",
    "value": 10282,
    "dependentValue": [
      "南京市"
    ]
  },
  {
    "name": "南京通孚源汽车销售服务有限公司",
    "value": 20534,
    "dependentValue": [
      "南京市"
    ]
  },
  {
    "name": "淮安市宏宇翔舜汽车销售服务有限公司",
    "value": 10451,
    "dependentValue": [
      "淮安市"
    ]
  },
  {
    "name": "泰州明雅汽车销售服务有限公司",
    "value": 10416,
    "dependentValue": [
      "泰州市"
    ]
  },
  {
    "name": "扬州华美达汽车销售服务有限公司",
    "value": 10877,
    "dependentValue": [
      "扬州市"
    ]
  },
  {
    "name": "南通银达汽车销售服务有限公司",
    "value": 10360,
    "dependentValue": [
      "南通市"
    ]
  },
  {
    "name": "南通弘业汽车销售有限公司",
    "value": 10882,
    "dependentValue": [
      "南通市"
    ]
  },
  {
    "name": "上海绿地东汽车销售有限公司",
    "value": 10302,
    "dependentValue": [
      "上海市"
    ]
  },
  {
    "name": "上海路帅汽车销售有限公司",
    "value": 10316,
    "dependentValue": [
      "上海市"
    ]
  },
  {
    "name": "上海通锐汽车销售服务有限公司",
    "value": 10393,
    "dependentValue": [
      "上海市"
    ]
  },
  {
    "name": "上海交运起荣汽车销售服务有限公司",
    "value": 21002,
    "dependentValue": [
      "上海市"
    ]
  },
  {
    "name": "上海景和金沙汽车销售有限公司",
    "value": 10364,
    "dependentValue": [
      "上海市"
    ]
  },
  {
    "name": "太仓博泰汽车销售服务有限公司",
    "value": 11541,
    "dependentValue": [
      "太仓市"
    ]
  },
  {
    "name": "常熟市华通汽车销售服务有限公司",
    "value": 10386,
    "dependentValue": [
      "常熟市"
    ]
  },
  {
    "name": "江阴市盛达佳颖汽车销售有限公司",
    "value": 10459,
    "dependentValue": [
      "江阴市"
    ]
  },
  {
    "name": "无锡联众汽车销售服务有限公司",
    "value": 10346,
    "dependentValue": [
      "无锡市"
    ]
  },
  {
    "name": "无锡市众达汽车销售服务有限公司",
    "value": 10347,
    "dependentValue": [
      "无锡市"
    ]
  },
  {
    "name": "无锡荣事达汽车贸易服务有限公司",
    "value": 10280,
    "dependentValue": [
      "无锡市"
    ]
  },
  {
    "name": "宜兴市荣诚汽车销售服务有限公司",
    "value": 10417,
    "dependentValue": [
      "宜兴市"
    ]
  },
  {
    "name": "常州神马汽车销售服务有限公司",
    "value": 10361,
    "dependentValue": [
      "常州市"
    ]
  },
  {
    "name": "常州外汽金程汽车销售服务有限公司",
    "value": 10272,
    "dependentValue": [
      "常州市"
    ]
  },
  {
    "name": "镇江维力达汽车销售有限公司",
    "value": 10410,
    "dependentValue": [
      "镇江市"
    ]
  },
  {
    "name": "张家港通城汽车销售服务有限公司",
    "value": 10387,
    "dependentValue": [
      "张家港市"
    ]
  },
  {
    "name": "昆山豪骏汽车销售服务有限公司",
    "value": 21033,
    "dependentValue": [
      "昆山"
    ]
  },
  {
    "name": "苏州苏天汽车销售服务有限公司",
    "value": 10363,
    "dependentValue": [
      "苏州市"
    ]
  },
  {
    "name": "苏州国亚达汽车服务有限公司",
    "value": 10362,
    "dependentValue": [
      "苏州市"
    ]
  },
  {
    "name": "苏州浚和汽车销售服务有限公司",
    "value": 10469,
    "dependentValue": [
      "苏州市"
    ]
  },
  {
    "name": "吴江市东顺汽车销售服务有限公司",
    "value": 14637,
    "dependentValue": [
      "吴江市"
    ]
  },
  {
    "name": "福建太元马自达汽车销售服务有限公司",
    "value": 10261,
    "dependentValue": [
      "福州市"
    ]
  },
  {
    "name": "福州杰龙车业发展有限公司",
    "value": 20998,
    "dependentValue": [
      "福州市"
    ]
  },
  {
    "name": "晋江成达汽车销售服务有限公司",
    "value": 10270,
    "dependentValue": [
      "晋江市"
    ]
  },
  {
    "name": "泉州鑫达汽车销售服务有限公司",
    "value": 10396,
    "dependentValue": [
      "泉州市"
    ]
  },
  {
    "name": "三明鹭翔汽车销售服务有限公司",
    "value": 10851,
    "dependentValue": [
      "三明市"
    ]
  },
  {
    "name": "厦门吉顺丰汽车贸易有限公司",
    "value": 10849,
    "dependentValue": [
      "厦门市"
    ]
  },
  {
    "name": "海南优之杰汽车有限公司",
    "value": 10382,
    "dependentValue": [
      "海口市"
    ]
  },
  {
    "name": "三亚优之杰汽车服务有限公司",
    "value": 10262,
    "dependentValue": [
      "三亚市"
    ]
  },
  {
    "name": "百色方泰汽车销售服务有限公司",
    "value": 10844,
    "dependentValue": [
      "百色市"
    ]
  },
  {
    "name": "桂林鑫广达博达汽车销售服务有限公司",
    "value": 10281,
    "dependentValue": [
      "桂林市"
    ]
  },
  {
    "name": "柳州鑫广达汽车销售服务有限公司",
    "value": 10422,
    "dependentValue": [
      "柳州市"
    ]
  },
  {
    "name": "广西鑫广达汽车销售服务有限公司",
    "value": 10401,
    "dependentValue": [
      "南宁市"
    ]
  },
  {
    "name": "广西马之悦汽车销售服务有限公司",
    "value": 20947,
    "dependentValue": [
      "南宁市"
    ]
  },
  {
    "name": "长沙德顺汽车销售服务有限公司",
    "value": 10307,
    "dependentValue": [
      "长沙市"
    ]
  },
  {
    "name": "湖南长驰瑞马汽车销售服务有限公司",
    "value": 10327,
    "dependentValue": [
      "长沙市"
    ]
  },
  {
    "name": "长沙博程骏粤汽车销售有限公司",
    "value": 20957,
    "dependentValue": [
      "长沙市"
    ]
  },
  {
    "name": "常德时代阳光汽车销售服务有限公司",
    "value": 10445,
    "dependentValue": [
      "常德市"
    ]
  },
  {
    "name": "郴州大利汽车销售服务有限公司",
    "value": 10290,
    "dependentValue": [
      "郴州市"
    ]
  },
  {
    "name": "岳阳华通汽车销售服务有限公司",
    "value": 10278,
    "dependentValue": [
      "岳阳市"
    ]
  },
  {
    "name": "株洲市华兴汽车销售服务有限公司",
    "value": 10446,
    "dependentValue": [
      "株洲市"
    ]
  },
  {
    "name": "佛山市合自达汽车销售服务有限公司",
    "value": 10343,
    "dependentValue": [
      "佛山市"
    ]
  },
  {
    "name": "佛山市顺德区万事得汽车销售服务有限公司",
    "value": 10402,
    "dependentValue": [
      "佛山市"
    ]
  },
  {
    "name": "佛山市中衡骏达汽车销售服务有限公司",
    "value": 10350,
    "dependentValue": [
      "佛山市"
    ]
  },
  {
    "name": "佛山市广物驭达汽车销售服务有限公司",
    "value": 11033,
    "dependentValue": [
      "佛山市"
    ]
  },
  {
    "name": "清远市中衡骏达汽车销售服务有限公司",
    "value": 20943,
    "dependentValue": [
      "清远市"
    ]
  },
  {
    "name": "广州博程汽车有限公司",
    "value": 10308,
    "dependentValue": [
      "广州市"
    ]
  },
  {
    "name": "广州成远汽车有限公司",
    "value": 10310,
    "dependentValue": [
      "广州市"
    ]
  },
  {
    "name": "广东物通驭达汽车有限公司",
    "value": 10376,
    "dependentValue": [
      "广州市"
    ]
  },
  {
    "name": "中山市中达汽车销售服务有限公司",
    "value": 10413,
    "dependentValue": [
      "中山市"
    ]
  },
  {
    "name": "珠海市钜荣汽车贸易有限公司",
    "value": 10379,
    "dependentValue": [
      "珠海市"
    ]
  },
  {
    "name": "惠州市大华汽车销售有限公司",
    "value": 10381,
    "dependentValue": [
      "惠州市"
    ]
  },
  {
    "name": "江门博腾汽车有限公司",
    "value": 20948,
    "dependentValue": [
      "江门市"
    ]
  },
  {
    "name": "东莞市久驰汽车贸易有限公司",
    "value": 10378,
    "dependentValue": [
      "东莞市"
    ]
  },
  {
    "name": "东莞市新天地汽车销售服务有限公司",
    "value": 10377,
    "dependentValue": [
      "东莞市"
    ]
  },
  {
    "name": "东莞市欣达汽车销售服务有限公司",
    "value": 20953,
    "dependentValue": [
      "东莞市"
    ]
  },
  {
    "name": "深圳市众深联汽车贸易有限公司",
    "value": 10399,
    "dependentValue": [
      "深圳市"
    ]
  },
  {
    "name": "深圳市安进机电设备有限公司",
    "value": 10311,
    "dependentValue": [
      "深圳市"
    ]
  },
  {
    "name": "深圳通利华龙岗汽车销售服务有限公司",
    "value": 10342,
    "dependentValue": [
      "深圳市"
    ]
  },
  {
    "name": "深圳市通利华汽车销售服务有限公司",
    "value": 10397,
    "dependentValue": [
      "深圳市"
    ]
  },
  {
    "name": "深圳市通利华前海汽车销售服务有限公司",
    "value": 20324,
    "dependentValue": [
      "深圳市"
    ]
  },
  {
    "name": "汕头市通利华月浦汽车服务有限公司",
    "value": 20955,
    "dependentValue": [
      "汕头市"
    ]
  },
  {
    "name": "东莞市通华汽车销售服务有限公司",
    "value": 20956,
    "dependentValue": [
      "东莞市"
    ]
  },
  {
    "name": "肇庆美轮庆马汽车有限公司",
    "value": 20982,
    "dependentValue": [
      "肇庆市"
    ]
  },
  {
    "name": "武汉利达汽车销售有限责任公司",
    "value": 10335,
    "dependentValue": [
      "武汉市"
    ]
  },
  {
    "name": "武汉龙泰汽车销售服务有限公司",
    "value": 10321,
    "dependentValue": [
      "武汉市"
    ]
  },
  {
    "name": "湖北捷运宜通汽车销售服务有限公司",
    "value": 10933,
    "dependentValue": [
      "武汉市"
    ]
  },
  {
    "name": "宜昌恒信天龙汽车销售服务有限公司",
    "value": 10428,
    "dependentValue": [
      "宜昌市"
    ]
  },
  {
    "name": "襄阳战轩汽车销售服务有限公司",
    "value": 21029,
    "dependentValue": [
      "襄阳市"
    ]
  },
  {
    "name": "云南善为汽车销售服务有限公司",
    "value": 21032,
    "dependentValue": [
      "昆明市"
    ]
  },
  {
    "name": "云南正马汽车销售服务有限公司",
    "value": 20944,
    "dependentValue": [
      "昆明"
    ]
  },
  {
    "name": "重庆万事新汽车销售服务有限公司",
    "value": 10318,
    "dependentValue": [
      "重庆市"
    ]
  },
  {
    "name": "重庆云迅汽车销售服务有限公司",
    "value": 10337,
    "dependentValue": [
      "重庆市"
    ]
  },
  {
    "name": "新疆华达汽车销售服务有限责任公司",
    "value": 10301,
    "dependentValue": [
      "乌鲁木齐市"
    ]
  },
  {
    "name": "四川中鹏汽车销售服务有限公司",
    "value": 10315,
    "dependentValue": [
      "成都市"
    ]
  },
  {
    "name": "成都东成汽车销售服务有限公司",
    "value": 10322,
    "dependentValue": [
      "成都市"
    ]
  },
  {
    "name": "成都明友西物汽车贸易有限公司",
    "value": 10323,
    "dependentValue": [
      "成都市"
    ]
  },
  {
    "name": "四川城市车辆维修服务有限公司",
    "value": 10274,
    "dependentValue": [
      "成都市"
    ]
  },
  {
    "name": "达州市天一航旗铭峻汽车销售有限公司",
    "value": 11022,
    "dependentValue": [
      "达州市"
    ]
  },
  {
    "name": "德阳永信汽车销售服务有限公司",
    "value": 10440,
    "dependentValue": [
      "德阳市"
    ]
  },
  {
    "name": "宜宾一马汽车销售服务有限公司",
    "value": 11535,
    "dependentValue": [
      "宜宾市"
    ]
  },
  {
    "name": "绵阳嘉成汽车销售服务有限公司",
    "value": 20937,
    "dependentValue": [
      "绵阳市"
    ]
  },
  {
    "name": "贵州兴新田源烨汽车销售服务有限公司",
    "value": 20945,
    "dependentValue": [
      "贵阳市"
    ]
  },
  {
    "name": "贵州四扬日达汽车销售服务有限公司",
    "value": 10334,
    "dependentValue": [
      "贵阳市"
    ]
  },
  {
    "name": "贵州首运汽车销售有限公司",
    "value": 21034,
    "dependentValue": [
      "贵阳市"
    ]
  },
  {
    "name": "遵义锦驰汽车有限公司",
    "value": 11016,
    "dependentValue": [
      "遵义市"
    ]
  },
  {
    "name": "宁夏自立升汽车销售服务有限公司",
    "value": 10390,
    "dependentValue": [
      "银川市"
    ]
  },
  {
    "name": "兰州金岛骄马汽车销售有限公司",
    "value": 10383,
    "dependentValue": [
      "兰州市"
    ]
  },
  {
    "name": "青海泰洲弘车辆销售有限公司",
    "value": 10918,
    "dependentValue": [
      "西宁市"
    ]
  },
  {
    "name": "陕西唐兴汽车销售服务有限公司",
    "value": 10331,
    "dependentValue": [
      "西安市"
    ]
  },
  {
    "name": "陕西欣达汽车贸易有限公司",
    "value": 10448,
    "dependentValue": [
      "西安市"
    ]
  },
  {
    "name": "陕西润达汽车销售服务有限公司",
    "value": 20946,
    "dependentValue": [
      "西安市"
    ]
  },
  {
    "name": "昆明金益汽车销售服务有限公司",
    "value": 20987,
    "dependentValue": [
      "昆明市"
    ]
  },
  {
    "name": "邢台弘美汽车销售有限公司",
    "value": 20972,
    "dependentValue": [
      "邢台市"
    ]
  }
]