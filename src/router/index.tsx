import {createBrowserRouter} from "react-router-dom";
import Welcome from "../page/Welcome";
import {lazy} from "react";
import AuthRouter from "./AuthRouter";
import Error403 from "../components/Error403";

const Login = lazy(() => import('../components/Login'))
const Register = lazy(() => import('../components/Register'))
const Home = lazy(() => import('../page/Home'))
const CourseDetail = lazy(() => import('../page/CourseDetail'))

const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/course-detail/:id/:title",
      element: <CourseDetail/>,
    }
  ].map(r => (
    {
      ...r,
      element: <AuthRouter>{r.element}</AuthRouter>,
      errorElement: <Error403/>
    }
  ))
)

console.log(router);
export default router;
