import request from '@/utils/request'

export function getSubject() {
  return request({
    url:"/exam/subject", // 获取所有的课程
    method: 'get'
  })
}