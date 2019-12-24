import request from '@/utils/request'

export function addtest(payload) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data:payload
  })
}
