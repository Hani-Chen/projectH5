/**
 * 今日开抢产品列表数据
 */
import { request } from './request';

export function drawListData (page) {
  return request({
     url: '/product',
    params: {
      page: page
    }
  });
}