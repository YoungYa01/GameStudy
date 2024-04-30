import css from './index.module.css'
import {nextButtonProps} from "../../types";
import {NEXT, QUESTION} from "../../utils/buttonStatus.ts";
import {Message} from "@arco-design/web-react";
import data from "./data.ts";
import {useEffect} from "react";
import {EnterIcon, SpaceIcon} from "../../icons/NextButton";

export default (props: nextButtonProps) => {
  const {status, datas, setDatas, setTotal} = props;

  const list = data;

  useEffect(() => {
    setTotal(data.length);
    handleClick();
    // handleKeyboardClick();
    return () => {};
  }, []);

  useEffect(() => {
    list.shift();
  }, [datas]);

  const handleClick = () => {
    if (!list.length) {
      return Message.success("您已经学完了所有课程了！");
    }
    console.log(list[0])
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setDatas([...datas, list[0]]);
  }

  // const handleKeyboardClick = () => {
  //   window.addEventListener('keyup', (e) => {
  //     if (e.code === 'Enter' || e.code === 'Space') {
  //       if (!list.length) {
  //         return Message.success("您已经学完了所有课程了！");
  //       }
  //       setDatas([...datas, list[0]]);
  //     }
  //   })
  // }

  return (
    <div className={css.root}>
      <div
        className={css.btn_content}
        style={{cursor: status === QUESTION ? 'not-allowed' : 'pointer'}}
        onClick={handleClick}
      >
        <span>
          <EnterIcon width={50} height={60}/>/ <SpaceIcon width={50} height={60}/>
          {status === NEXT ? '继续' : status === QUESTION ? '练习中......' : '已学完'}
        </span>
      </div>
    </div>
  )
}
