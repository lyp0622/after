import Layout from '@/layout'
const testRouter = {
  path: '/testmsg',
  component: Layout,
  redirect: 'noRedirect',
  name: 'testmsg',
  meta: {
    title: '考试管理',
    icon: 'form'
  },
  children: [
    {
      path: '/addtest',
      component: () => import('@/views/test/addtest'),
      name: 'Addtest',
      meta: {
        title: '添加考试',
        noCache: true
      }
    },
    {
      path: '/testlist',
      component: () => import('@/views/test/testlist'),
      name: 'Testlist',
      meta: {
        title: '试卷列表',
        noCache: true
      }
    },{
      path:"/edit",
      component:()=>import("@/views/test/editTest")
    },{
      path:"/detail",
      component:()=>import("@/views/test/testDetail")
    }
  ]
}
export default testRouter
