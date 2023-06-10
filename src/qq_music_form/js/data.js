// 多级联动数据
var selectDtat = [
  // 多级联动 - 一级联动数据
  select1 = [
    {
      "name": "省份_1",
      "value": "省份_1"
    },
    {
      "name": "省份_2",
      "value": "省份_2"
    },
    {
      "name": "省份_3",
      "value": "省份_3"
    },
    {
      "name": "省份_4",
      "value": "省份_4"
    }
  ],
  // 多级联动 - 二级联动数据
  select2= [
    {
      "name": "省份_1的城市_1",
      "value": "省份_1的城市_1",
      // 多级联动 - 二级联动对应的一级联动的值 [必须对应: 这个对应的意思是当前这个二级 "省份_1的城市_1" 联动,属于哪一个一级联动]
      "dependentValue": [
        "省份_1"
      ]
    },
    {
      "name": "省份_1的城市_2",
      "value": "省份_1的城市_2",
      "dependentValue": [
        "省份_1"
      ]
    },
    {
      "name": "省份_2的城市_3",
      "value": "省份_2的城市_3",
      "dependentValue": [
        "省份_2"
      ]
    },
    {
      "name": "省份_2的城市_4",
      "value": "省份_2的城市_4",
      "dependentValue": [
        "省份_2"
      ]
    },
    {
      "name": "省份_3的城市_5",
      "value": "省份_3的城市_5",
      "dependentValue": [
        "省份_3"
      ]
    },
    {
      "name": "省份_3的城市_6",
      "value": "省份_3的城市_6",
      "dependentValue": [
        "省份_3"
      ]
    },
    {
      "name": "省份_4的城市_7",
      "value": "省份_4的城市_7",
      "dependentValue": [
        "省份_4"
      ]
    },
    {
      "name": "省份_4的城市_8",
      "value": "省份_4的城市_8",
      "dependentValue": [
        "省份_4"
      ]
    },
  ],
  // 多级联动 - 三级联动数据
  select3= [
    {
      "name": "城市_1的经销商_1",
      "value": "城市_1的经销商_1",
      // 多级联动 - 三级联动对应的二级联动的值 [必须对应: 这个对应的意思是当前这个三级 "城市_1的经销商_1" 联动,属于哪一个二级联动]
      "dependentValue": [
        "省份_1的城市_1"
      ]
    },
    {
      "name": "城市_1的经销商_2",
      "value": "城市_1的经销商_2",
      "dependentValue": [
        "省份_1的城市_1"
      ]
    },
    {
      "name": "城市_2的经销商_3",
      "value": "城市_2的经销商_3",
      "dependentValue": [
        "省份_1的城市_2"
      ]
    },
    {
      "name": "城市_2的经销商_4",
      "value": "城市_2的经销商_4",
      "dependentValue": [
        "省份_1的城市_2"
      ]
    },
    {
      "name": "城市_3的经销商_5",
      "value": "城市_3的经销商_5",
      "dependentValue": [
        "省份_2的城市_3"
      ]
    },
    {
      "name": "城市_3的经销商_6",
      "value": "城市_3的经销商_6",
      "dependentValue": [
        "省份_2的城市_3"
      ]
    },
    {
      "name": "城市_4的经销商_7",
      "value": "城市_4的经销商_7",
      "dependentValue": [
        "省份_2的城市_4"
      ]
    },
    {
      "name": "城市_4的经销商_8",
      "value": "城市_4的经销商_8",
      "dependentValue": [
        "省份_2的城市_4"
      ]
    },
    {
      "name": "城市_5的经销商_9",
      "value": "城市_5的经销商_9",
      "dependentValue": [
        "省份_3的城市_5"
      ]
    },
    {
      "name": "城市_5的经销商_10",
      "value": "城市_5的经销商_10",
      "dependentValue": [
        "省份_3的城市_5"
      ]
    },
    {
      "name": "城市_6的经销商_11",
      "value": "城市_6的经销商_11",
      "dependentValue": [
        "省份_3的城市_6"
      ]
    },
    {
      "name": "城市_6的经销商_12",
      "value": "城市_6的经销商_12",
      "dependentValue": [
        "省份_3的城市_6"
      ]
    },
    {
      "name": "城市_7的经销商_13",
      "value": "城市_7的经销商_13",
      "dependentValue": [
        "省份_4的城市_7"
      ]
    },
    {
      "name": "城市_7的经销商_14",
      "value": "城市_7的经销商_14",
      "dependentValue": [
        "省份_4的城市_7"
      ]
    },
    {
      "name": "城市_8的经销商_15",
      "value": "城市_8的经销商_15",
      "dependentValue": [
        "省份_4的城市_8"
      ]
    },
    {
      "name": "城市_8的经销商_16",
      "value": "城市_8的经销商_16",
      "dependentValue": [
        "省份_4的城市_8"
      ]
    },
  ],
]

// 输入框数据
var formListData = [{
  // 必填值 - 输入框类型 - 【input || select】
  demoType: 'input',
  // 选填值 - 如果是input框可规定 input框的类型
  type: 'text',
  // 必填值 - 输入框前缀名字 
  value: '姓名',
  // 必填值 - 不可重复，用途：输入框id、输入框类名后缀、输入框name属性值
  name: 'name',
  // 选填值 - 当前输入框是否为必填字段
  isRequired: true,
},
{
  demoType: 'input',
  type: 'number',
  value: '手机号码',
  // 不可修改值 - 验证码需要通过id获取到手机号是否为空
  name: 'phone',
  isPhone: true,
  isRequired: true,
  // 选填值 - 当前输入框的正则判断 【为空或移除字段则不判断正则】
  regular: /^1[3456789]\d{9}$/,
},
{
  demoType: 'input',
  type: 'number',
  value: '验证码',
  // 不可修改值 - 验证码样式特殊id、类名必须使用 【verification】,
  name: 'verification',
  // 必填值&不可修改 - 验证码需要变量特殊判断
  isVerification: true,
  isRequired: true
},
{
  demoType: 'select',
  type: '',
  value: '省份选择',
  defaultValue: '省份',
  // 必填值 - 多级联动顺序 *注意 前缀 【select】不可修改， 后面的数值也必须递增, 如果需要配置更多级联动需要在 'selectDtat'变量 添加对应的联动数据
  name: 'select1',
  isRequired: true
},
{
  demoType: 'select',
  type: '',
  value: '城市选择',
  defaultValue: '城市',
  name: 'select2',
  isRequired: true
},
{
  demoType: 'select',
  type: '',
  value: '经销商',
  defaultValue: '经销商',
  name: 'select3',
  isRequired: true
},
]