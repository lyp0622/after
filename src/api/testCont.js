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
export function updataTest(params){
  return request({
    url:"/exam/exam/w5tcy-g2dts",
    method:"put",
    question_ids:params
  })
}