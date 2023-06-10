/**
 * 下注
 */
import { request } from './request'

export function productBet(productId,codeStr, betNumber,yscsrf) {
  return request({
    method:'post',
    // headers: {'Auth-User': 'text/html; charset=UTF-8'},
    // headers : {
    //   'Content-Type':'application/json;charset=UTF-8'
    // },
    // headers: {'Content-Type': 'multipart/form-data'},

    // transformResponse: [function (data) {
    //   // 对 data 进行任意转换处理
    //   return JSON.stringify(data);
    // }],
     url: '/join',
    data: {
      'id': productId,
      'codeStr': codeStr,
      'num': betNumber,
      '_yscsrf': yscsrf
    }
  })
}
