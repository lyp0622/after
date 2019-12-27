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
// 更新试卷的试题和确认状态
export function updataTest(params){
  // console.log(params,'payload')
  let {testArr}=params
  let {exam_exam_id}=params
  // console.log(JSON.stringify(testArr),'payload',exam_exam_id)
  return request({                                                                               
    url:`/exam/exam/${exam_exam_id}`,
    method:"put",
    data:{question_ids:JSON.stringify(testArr)}
  })
}