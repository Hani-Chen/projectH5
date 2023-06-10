/**
 * 微信分享数据
 * 
 */
import { request } from './request'

export function wxshare(urlPath,yscsrf) {
  return request({
    method:'post',
     url: '/wx-share',
    data: {
        'urlPath': urlPath,
        '_yscsrf': yscsrf
    }
  })
}