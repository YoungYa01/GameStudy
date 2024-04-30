import {useEffect, useState} from "react";
import {Avatar, Image} from '@arco-design/web-react';
import style from './index.module.css'
import {tutorialProps} from "../../types";
import VideoPlayer from "../../components/VideoPlayer";
import ProgressBar from "../../components/ProgressBar";
import NextButton from "../../components/NextButton";

export default () => {

  const [datas, setDatas] = useState<Array<tutorialProps>>([]);

  const [btnStatus, setBtnStatus] = useState<'next' | 'question' | 'finish'>('next');

  const [total,setTotal] = useState(0);

  useEffect(() => {
    const el = document.getElementById(`target${datas.length-1}`);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: "start"})
    }
  }, [datas]);

  return (
    <div className={style.root}>
      <div className={style['course_title']}>
        课程名称
      </div>
      <ProgressBar
        className={style['progress_bar']}
        total={total}
        current={datas.length}
      />
      {
        datas.map((item, index) => {
          return (
            <div className={style['tutorial_title']} key={index} id={`target${index}`}>
              <div className={style['tutorial_block']}>
                <Avatar>
                  <span style={{color:"skyblue"}}>YoungYa</span>
                </Avatar>
                {index}.
                {item.content}
              </div>
              {
                item.image && <div className={style['tutorial_block']}>
                  <Image
                    width={200}
                    src={item.image}
                    alt={item.image}
                  />
                </div>
              }
              {
                item.video && <div className={style['tutorial_block']}>
                  <VideoPlayer
                    id={`player${index}`}
                    url={item.video}
                    autoplay={true}
                    width={1500}
                    videoFillMode={'auto'}
                    controls={true}
                    autoplayMuted={true}>
                  </VideoPlayer>
                </div>
              }
            </div>
          )
        })
      }
      <NextButton status={btnStatus} datas={datas} setDatas={setDatas} setTotal={setTotal}></NextButton>
    </div>
  )
}
