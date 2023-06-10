/**
 * 翻倍开始计时
 * 
 */
import { request } from './request'

export function editVtime(tag,yscsrf) {
  return request({
    method:'post',
     url: '/edit-vtime',
    data: {
      'tag': tag,
      '_yscsrf': yscsrf
    }
  })
}

