import axios from 'axios';
import qs from 'qs'
export function request (config) {
  const instance = axios.create({
    // 默认基础请求路径
    baseURL: 'http://weishi.perpower.cn/',
    timeout: 5000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    // transformResponse
    transformRequest: [function (data) {
      // Do whatever you want to transform the data
      return qs.stringify(data);
    }],
  });

  return instance(config);
}
