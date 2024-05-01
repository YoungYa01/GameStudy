import Loading from "../../components/Loading";
import {useEffect, useState} from "react";
import {ConfigProvider, Layout, Menu} from 'antd'
import {getLocalTheme, getToken} from "../../utils/localStorage.ts";
import CourseCarousel from "../../components/CourseCarousel";
import CourseList from "../../components/CourseList";
import {HotIcon} from "../../icons/WelcomeIcon";
import css from './index.module.css'

const {Header, Content, Footer} = Layout;

const isLogin = getToken() !== null;

const MenuItem = isLogin ? [
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
      ]
    }
  ] :
  [
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


const Welcome = () => {
  const [loading, setLoading] = useState(true);

  const [theme] = useState(getLocalTheme());

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            // headerBg: theme === 'light' ? '#ffffff' : '#001529',
            bodyBg: theme === 'light' ? '#f5f5f5' : '#003350',
            footerBg: theme === 'light' ? '#ffffff' : '#001529',
          },
        },
      }}
    >
      {
        loading ? <Loading/> :
          <Layout>
            <Header className={css.header}>
              <div className={css.logo}></div>
              <Menu
                theme={getLocalTheme() as 'light' | 'dark'}
                style={{backgroundColor: 'transparent'}}
                mode="horizontal"
                defaultSelectedKeys={[]}
                items={MenuItem}
              />
            </Header>
            <Content style={{
              color: theme === 'light' ? '#000000' : '#86adb4',
            }} className={css.content}>
              <CourseCarousel style={{
                width: '100%',
                margin: '1rem auto',
                padding: '2rem',
                border: '1px solid #f0f0f0',
                borderRadius: '1rem'
              }}/>
              <p className={css.courseTitle}><HotIcon width={30} height={30}/>热门课程</p>
              <CourseList/>
              {/*<p className={css.courseTitle}><HotIcon width={30} height={30}/>精品课程</p>*/}
              {/*<CourseList/>*/}
              {/*<p className={css.courseTitle}><HotIcon width={30} height={30}/>进阶课程</p>*/}
              {/*<CourseList/>*/}
              {/*<p className={css.courseTitle}><HotIcon width={30} height={30}/>免费课程</p>*/}
              {/*<CourseList/>*/}
            </Content>
            <Footer style={{
              textAlign: 'center',
              color: theme === 'light' ? '#000000' : '#86adb4',
              borderTop: '1px solid #f0f0f0'
            }}>
              Copyright ©{new Date().getFullYear()} Created by YoungYa
            </Footer>
          </Layout>
        // <div className={'w-full h-screen flex justify-center items-center'}>
        //   <h1>Main Page</h1>
        // </div>
      }
    </ConfigProvider>
  )
}
export default Welcome;
