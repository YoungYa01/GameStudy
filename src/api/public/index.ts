import service from "../index.ts";
import {loginProps, registerProps} from "../../types";

/**
 * 登录
 * @param data
 */
export const login = (data: loginProps) => service({
  url: `/login`,
  method: 'post',
  data
})


/**
 * 注册
 * @param data
 */
export const register = (data: registerProps) => service({
  url: `/register`,
  method: 'post',
  data
})

/**
 * 获取轮播图
 */
export const getCarousel = () => service({
  url: `/public/carousel`,
  method: 'get',
})

/**
 * 获取课程列表
 * @param currentPage
 * @param pageSize
 */
export const getCourseList = ({currentPage, pageSize}: {
  currentPage: number,
  pageSize: number,
}) => service({
  url: `/public/all-course?currentPage=${currentPage}&pageSize=${pageSize}`,
  method: 'get',
})

/**
 * 模糊查询课程
 * @param keyword
 */
export const queryCourse = (keyword: string) => service({
  url: `/public/fuzzy/course?keyword=${keyword}`,
  method: 'get',
})

/**
 * 获取验证码
 */
export const getCaptcha = () => service({
  url: `/getCaptcha`,
  method: 'get',
})
