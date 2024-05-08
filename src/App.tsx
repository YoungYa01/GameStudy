import {Suspense} from "react";
import "@arco-design/web-react/dist/css/arco.css";
import './App.css'
import router from "./router";
import {RouterProvider} from "react-router-dom";
import Loading from "./components/Loading";

function App() {

  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
}

export default App
