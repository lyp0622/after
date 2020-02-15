import request from '@/utils/request'

export function getStudent() {
  return request({
    url: '/exam/student', // 获取学生试卷列表接口
    method: 'get'
  })
}
