import Cookies from 'js-cookie';

export const saveUserName = (username:string) => {
  Cookies.set('GS_username', username, { expires: 7 });    //有效期7天
}

export const getUserName = () => {
  return Cookies.get('GS_username');
}

export const savePassword = (password: string) => {
    Cookies.set('GS_password', password, { expires: 7 });
}

export const getPassword = () => {
  return Cookies.get('GS_password');
}

