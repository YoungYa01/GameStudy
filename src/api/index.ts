import axios, {AxiosInstance} from 'axios'
import {getToken, removeToken} from "../utils/localStorage.ts";
import {Message} from "@arco-design/web-react";

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 5000,          // request timeout
})

service.interceptors.request.use(
  config => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    if (getToken() && !isToken) {
      config.headers["Authorization"] = getToken();
    }
    return config
  },
  error => {
    console.log(error) // for debug
    Message.error(error);
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  response => {
    const {code, message, data} = response.data
    if (code !== 200) {
      Message.error(message || '未知错误！');
      return Promise.reject(data)
    } else {
      return response.data;
    }
  },
  error => {
    Message.error(error.response.data.message);
    console.log('Token 无效' === error.response.data.message)
    if ('Token 无效' === error?.response?.data?.message) {
      removeToken();
      location.pathname = '/login';
    }
    return Promise.reject(error)
  },
)

export default service
