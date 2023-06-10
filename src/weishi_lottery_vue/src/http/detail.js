/**
 * 详情数据
 */
import { request } from './request';

export function detailInfo (param) {
  return request({
     url: '/product-detail',
    params: { 
      id: param
    }
  });
}