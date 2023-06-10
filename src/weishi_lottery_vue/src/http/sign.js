/**
 * 签到数据
 * 
 */
import { request } from './request';

export function getSign (yscsrf) {
  return request({
    method:'post',
     url: '/sign-in',
    data: {
      '_yscsrf': yscsrf
    }
  });
}


