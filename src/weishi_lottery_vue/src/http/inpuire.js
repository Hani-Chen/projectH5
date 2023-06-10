/**
 * 查询是否有参与的产品开奖
 * 
 */
import { request } from './request';

export function inpuire () {
  return request({
     url: '/check-open'
  });
}

