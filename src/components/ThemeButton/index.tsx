import {useEffect, useState} from "react";
import {IconMoon, IconSun} from "@arco-design/web-react/icon";
import {getLocalTheme, setLocalTheme} from "../../utils/localStorage.ts";

/**
 * 主题切换按钮
 * @constructor
 */
const ThemeButton = () => {

  const [isDark, setIsDark] = useState(getLocalTheme() === 'dark');

  useEffect(() => {
    if (isDark) {
      handleThemeChange2Dark();
    } else {
      handleThemeChange2light();
    }
  }, [isDark])

  // 设置为暗黑主题
  const handleThemeChange2Dark = () => {
    document.body.setAttribute('arco-theme', 'dark');
    setLocalTheme('dark')
  }

  // 恢复亮色主题
  const handleThemeChange2light = () => {
    document.body.removeAttribute('arco-theme');
    setLocalTheme('light')
  }

  return (
    // <Button type={'text'} shape={'round'} icon={isDark ? <IconMoon/> : <IconSun/>} size={props.size}
    //         onClick={() => setIsDark(!isDark)}></Button>
    <span onClick={() => setIsDark(!isDark)}>{isDark ? <IconMoon/> : <IconSun/>}</span>
  )
}

export default ThemeButton;
