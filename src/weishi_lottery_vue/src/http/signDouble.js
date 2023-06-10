/**
 * 签到翻倍
 * 
 */
import { request } from './request';

export function signDouble (yscsrf) {
  return request({
    method:'post',
     url: '/sign-double',
    data: {
      '_yscsrf': yscsrf
    }
  });
}


