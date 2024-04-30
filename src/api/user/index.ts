import service from "../index.ts";

export const getUserInfo = (username: string) => service({
  url: `/user/info?username=${username}`,
  method: 'get'
})
