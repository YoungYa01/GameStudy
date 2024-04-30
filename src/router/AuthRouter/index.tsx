import {useNavigate} from "react-router-dom";
import {getToken} from "../../utils/localStorage.ts";
import {useEffect} from "react";
import {Message} from "@arco-design/web-react";

const AuthRouter: React.FC<{ children: React.ReactNode }> = ({children}) => {
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {

    if (!token) {
      if (location.pathname === '/login' || location.pathname === '/register'){
        return;
      }
      Message.error('请先登录');
      navigate('/login');
    }
    if (token) {
      if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/') {
        navigate('/home');
      } else {
        navigate(location.pathname);
      }
    }
  }, [token, location.pathname]);

  return children;
}

export default AuthRouter;
