/**
 * 结束指引页面
 * 
 */
import { request } from './request'

export function endguide(tag,yscsrf) {
  return request({
    method:'post',
     url: '/edit-guide',
    data: {
      'tag': tag,
      '_yscsrf': yscsrf
    }
  })
}

