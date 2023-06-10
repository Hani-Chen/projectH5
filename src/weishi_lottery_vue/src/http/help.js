/**
 * 助力接口
 * 
 */
import { request } from './request';

export function help(suid,yscsrf) {
  return request({
    method:'post',
     url: '/help',
    data: {
        'sUid': suid,
        '_yscsrf': yscsrf
    }
  });
}


