import service from "../index.ts";
import {loginProps, registerProps} from "../../types";

export const login = (data: loginProps) => service({
  url: `/login`,
  method: 'post',
  data
})

export const register = (data: registerProps) => service({
  url: `/register`,
  method: 'post',
  data
})
