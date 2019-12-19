import Layout from '@/layout'
const msgRouter = {
  path: '/exam',
  component: Layout,
  redirect: 'noRedirect',
  name: 'exammsg',
  meta: {
    title: '考试试卷管理',
    icon: 'documentation'
  },
  children: [
    {
      path: '/addexam',
      component: () => import('@/views/exam/addexam'),
      name: 'Addexam',
      meta: {
        title: '添加试题',
        noCache: true
      }
    },
    {
      path: '/examdetail',
      component: () => import('@/views/exam/exam'),
      name: 'Exam',
      meta: {
        title: '试题分类',
        noCache: true
      }
    },
    {
      path: '/searchexam',
      component: () => import('@/views/exam/searchexam'),
      name: 'Serachexam',
      meta: {
        title: '搜索试题',
        noCache: true
      }
    }
  ]
}
export default msgRouter
