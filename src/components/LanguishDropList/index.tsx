import {ConfigProvider, Select} from "@arco-design/web-react";
import {useState} from "react";
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import jaJP from '@arco-design/web-react/es/locale/ja-JP';
import zhHK from '@arco-design/web-react/es/locale/zh-HK';
import {Locale} from "@arco-design/web-react/es/locale/interface";
import {buttonProps} from "../../types";


const LanguishDropList = (props: buttonProps): JSX.Element => {
  const [locale, setLocale] = useState('zh-CN');
  const options = [
    'zh-CN',
    'en-US',
    'ja-JP',
  ];

  function getLocale(): Locale {
    switch (locale) {
      case 'zh-CN':
        return zhCN;

      case 'en-US':
        return enUS;

      case 'ja-JP':
        return jaJP;

      case 'zh-HK':
        return zhHK;

      default:
        return zhCN;
    }
  }

  return (
    <>
      <ConfigProvider locale={getLocale()}>
        <Select
          defaultValue={"zh-CN"}
          size={props.size}
          style={{
            width: "10rem",
          }}
          onChange={setLocale}>
          {
            options.map(item => <Select.Option key={item} value={item}>{item}</Select.Option>)
          }
        </Select>
      </ConfigProvider>
    </>
  )
}

export default LanguishDropList;
