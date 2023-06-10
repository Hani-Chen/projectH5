/**
 * 明日开抢数据
 * 
 */

import { request } from './request';

export function getTomorrow () {
  return request({
     url: '/product-mr'
  });
}