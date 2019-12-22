import request from '@/utils/request'

export function getGrand() {
  return request({
    url:"/manger/grade/new", // 获取学生试卷列表接口
    method: 'get'
  })
}
