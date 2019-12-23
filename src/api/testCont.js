import request from '@/utils/request'
export function getTestType() {
  return request({
    url: '/exam/examType',
    method: 'get'
  })
}
export function getClassList() {
  return request({
    url: '/exam/subject',
    method: 'get'
  })
}
