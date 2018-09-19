import Vue from 'vue'
import PersonalCenter from '@/view/personal-center/index.vue'
import TeacherManagement from '@/view/teacher-management/index.vue'
import TypeCourse from '@/view/type-course/index.vue'
import WechatUserManagement from '@/view/wechat-user-management/index.vue'
import CourseDetailsList from '@/view/course-management/course-details-list/index.vue'
import CourseList from '@/view/course-management/course-list/index.vue'
import CourseNew from '@/view/course-management/course-new/index.vue'
import CourseNewItem from '@/view/course-management/course-new-item/index.vue'

const Layout = Vue.extend({template: '<router-view/>'})

export default [
  {
    path: '/course',
    name: 'course',
    component: Layout,
    meta: {
      title: '课程管理'
    },
    children: [
      {
        path: '/course-list',
        name: 'course-list',
        component: CourseDetailsList,
        meta: {
          title: '课程列表'
        }
      },
      {
        path: '/course-details-list/:id',
        name: 'course-details-list',
        component: CourseList,
        meta: {
          title: '课程详情',
          hide: true
        }
      },
      {
        path: '/course-new',
        name: 'course-new',
        component: CourseNew,
        meta: {
          title: '课程新增'
        }
      },
      {
        path: '/course-new-item/:id',
        name: 'course-new-item',
        component: CourseNewItem,
        meta: {
          title: '课程项新增',
          hide: true
        }
      }
    ]
  },
  {
    path: '/wechat-user',
    name: 'wechat-user',
    component: Layout,
    meta: {
      title: '微信用户管理'
    },
    children: [
      {
        path: '/wechat-user-management',
        name: 'wechat-user-management',
        component: WechatUserManagement,
        meta: {
          title: '微信用户管理'
        }
      }
    ]
  },
  {
    path: '/teacher-management',
    name: 'teacher-management',
    component: Layout,
    meta: {
      title: '老师管理'
    },
    children: [
      {
        path: '/teacher-management',
        name: 'teacher-management',
        component: TeacherManagement,
        meta: {
          title: '老师列表'
        }
      }
    ]
  },
  {
    path: '/type-course',
    name: 'type-course',
    component: Layout,
    meta: {
      title: '课程类型'
    },
    children: [
      {
        path: '/type-course-list',
        name: 'type-course-list',
        component: TypeCourse,
        meta: {
          title: '课程类型列表'
        }
      }
    ]
  },
  {
    path: '/personal',
    name: 'personal',
    component: Layout,
    meta: {
      title: '个人中心'
    },
    children: [
      {
        path: '/personal-center',
        name: 'personal-center',
        component: PersonalCenter,
        meta: {
          title: '个人简介'
        }
      }
    ]
  }
]
