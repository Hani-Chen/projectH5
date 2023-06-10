/**
 * 指引页面
 * 
 */
import { request } from './request';

export function guideStatus () {
  return request({
     url: '/guide-status'
  });
}

