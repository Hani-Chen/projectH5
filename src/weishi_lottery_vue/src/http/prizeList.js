/**
 * 中奖轮播列表
 * 
 */
import { request } from './request';

export function prizeList () {
  return request({
     url: '/prize-list'
  });
}


