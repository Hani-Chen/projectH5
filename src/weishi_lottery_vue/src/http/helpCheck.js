/**
 * 助力接口
 * 
 */
import { request } from './request';

export function helpCheck(suid) {
  return request({
    // method:'post',
     url: '/help-check',
    // data: {
    //     'sUid': suid,
    //     '_yscsrf': yscsrf
    // }
    params: {
      'sUid': suid
    }
  });
}


