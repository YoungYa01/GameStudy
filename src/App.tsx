import "@arco-design/web-react/dist/css/arco.css";
import './App.css'
import router from "./router";
import {RouterProvider} from "react-router-dom";

function App() {

  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
