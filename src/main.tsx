import ReactDOM from 'react-dom/client'
import {ConfigProvider} from '@arco-design/web-react';
import enUS from '@arco-design/web-react/es/locale/en-US';
import "@arco-design/web-react/dist/css/arco.css";
import {Provider} from "react-redux";
import store from "./store";
import './index.css';
import './tailwind.css';
import {initVChartArcoTheme} from "@visactor/vchart-arco-theme";
import App from "./App.tsx";


document.title = import.meta.env.VITE_APP_TITLE;    // 设置TITLE
document.querySelector('html')!.lang = navigator.language;
console.log(navigator);

initVChartArcoTheme();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={enUS}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ConfigProvider>
)
