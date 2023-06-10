/**
 * 
 * 首次进入获得金币
 */
import { request } from './request';

export function firstCoin (yscsrf) {
  return request({
    method:'post',
     url: '/first-coin',
    data: {
      '_yscsrf': yscsrf
    }
  });
}

