import ErrorImage from '../../assets/images/error_404.png'
import {Button} from "@arco-design/web-react";

const Error = () => {
  const goBack = () => {
    window.history.back()
  }

  const goHome = () => {
    window.location.href = '/home'
  }

  return (
    <div className={'text-center'}>
      <img src={ErrorImage} alt="Error Access" className={'max-w-[60%] m-auto'}/>
      <p>
        诶呀，找不到当前页面了... RBA
      </p>
      <p>
        <Button onClick={goBack} type={"text"}>返回</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={goHome} type={"text"}>首页</Button>
      </p>
    </div>
  )
}

export default Error;
