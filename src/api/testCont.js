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
  // console.log(JSON.stringify(params),'payload')
  return request({                                                                               
    url:"/exam/exam/fsadq-q80vlu",
    method:"put",
    data:{question_ids:JSON.stringify(params)}
  })
}