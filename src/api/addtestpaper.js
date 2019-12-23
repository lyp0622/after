import request from '@/utils/request'

export function addtest(data) {
  return request({
    url: '/exam/exam',
    method: 'post',
    data
  })
}
