/**
 * 我参与的夺宝
 * 
 */
import { request } from './request';

export function myjoin (page) {
  return request({
     url: '/my-join',
    params: {
      page: page
    }
  });
}

