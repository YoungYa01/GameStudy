import {removeToken} from "../../utils/localStorage.ts";

export const loginMenu = [
  {
    label: '精品课程',
    key: 'HQ_courses',
  },
  {
    label: '热门课程',
    key: 'Hot_courses',
  },
  {
    label: '最新课程',
    key: 'New_courses',
  },
  {
    label: '推荐课程',
    key: 'Recommend_courses',
  },
  {
    label: '我的课程',
    key: 'My_courses',
    children: [

      {
        label: '我的收藏',
        key: 'My_collection',
      },
      {
        label: '我的消息',
        key: 'My_message',
      },
      {
        label: '我的资料',
        key: 'My_profile',
      },
      {
        label: '我的设置',
        key: 'My_setting',
      },
      {
        label: '我的主页',
        key: 'My_home',
      },
      {
        label: '退出登录',
        key: 'Logout',
        onClick: () => {
          removeToken();
          location.href = '/';
        }
      }
    ]
  }
]

export const unLoginMenu = [
  {
    label: '精品课程',
    key: 'HQ_courses',
  },
  {
    label: '热门课程',
    key: 'Hot_courses',
  },
  {
    label: '最新课程',
    key: 'New_courses',
  },
  {
    label: '推荐课程',
    key: 'Recommend_courses',
  },
  {
    label: '登录',
    key: 'Login',
    onClick: () => {
      location.href = '/login';
    }
  },
  {
    label: '注册',
    key: 'Register',
    onClick: () => {
      location.href = '/register';
    }
  },
]
