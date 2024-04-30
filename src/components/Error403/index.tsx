import Error403Image from "../../assets/images/error_403.png";
import {Button} from "@arco-design/web-react";

const Error403 = () => {
  const goBack = () => {
    window.history.back()
  }

  const goHome = () => {
    window.location.href = '/home'
  }

  return (
    <div className={'text-center'}>
      <img src={Error403Image} alt="403 error"  className={'max-w-[60%] m-auto'}/>
      <p>哎呀···好像出问题了</p>
      <p>
        <Button onClick={goBack} type={"text"}>返回</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={goHome} type={"text"}>首页</Button>
      </p>
    </div>
  )
}

export default Error403;
