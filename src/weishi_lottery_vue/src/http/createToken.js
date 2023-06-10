/**
 * 创建csrf校验值数据
 * 
 */

import { request } from './request';

export function createToken(urlPath,yscsrf) {
  return request({
     url: '/create-token'
  });
}