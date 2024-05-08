import Loading from "../../components/Loading";
import { useEffect,  useState} from "react";
import {ConfigProvider, Layout, Menu, } from 'antd'
import {getLocalTheme, getToken} from "../../utils/localStorage.ts";
import CourseCarousel from "../../components/CourseCarousel";
import CourseList from "../../components/CourseList";
import {HotIcon} from "../../icons/WelcomeIcon";
import css from './index.module.css'
import {loginMenu, unLoginMenu} from "./menu.ts";

const {Header, Content, Footer} = Layout;

const isLogin = getToken() !== null;

const MenuItem = isLogin ? loginMenu : unLoginMenu

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
                style={{backgroundColor: 'transparent',color: theme === 'light' ? '#000000' : '#eff5ff'}}
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

              <CourseList title={
                <p className={css.courseTitle}>
                  <HotIcon width={30} height={30}/>热门课程
                </p>
              }/>
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
