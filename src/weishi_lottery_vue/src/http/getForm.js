/**
 * 表单提交
 */
import { request } from './request'

export function getForm(productId,name, phone,address,codeStr,yscsrf) {
  return request({
    method:'post',
     url: '/cash-prize',
    data: {
      'id': productId,
      'name': name,
      'phone': phone,
      'address': address,
      'codeStr': codeStr,
      '_yscsrf': yscsrf
    }
  })
}
