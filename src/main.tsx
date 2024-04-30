import ReactDOM from 'react-dom/client'
import {ConfigProvider} from '@arco-design/web-react';
import enUS from '@arco-design/web-react/es/locale/en-US';
import "@arco-design/web-react/dist/css/arco.css";
import {Suspense} from "react";
import Loading from "./components/Loading";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App.tsx";
import './index.css';
import './tailwind.css';
import {initVChartArcoTheme} from "@visactor/vchart-arco-theme";

document.title = import.meta.env.VITE_APP_TITLE;

initVChartArcoTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={enUS}>
    <Suspense fallback={<Loading/>}>
      <Provider store={store}>
        <App/>
      </Provider>
    </Suspense>
  </ConfigProvider>
)
