/**
 * 查询翻倍的计时
 * 
 */
import { request } from './request'

export function checkVtime() {
  return request({
     url: '/check-vtime'
  })
}

