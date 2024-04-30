import {Dispatch, SetStateAction} from "react";

export interface buttonProps {
  size?: "small" | "mini" | "default" | "large" | undefined
}

export interface tutorialProps {
  content: string,
  image: string,
  video: string,
  multiQuestion: {
    title: '题目示例',
    options: [
      {
        title: '选项1',
        image: 'https://picsum.photos/200/300',
        correct: true
      },
      {
        title: '选项2',
        image: 'https://picsum.photos/200/300',
        correct: false
      },
      {
        title: '选项3',
        image: 'https://picsum.photos/200/300',
        correct: false
      }
    ]
  }
}

export interface playerProps {
  url: string,
  width?: number,
  controlPlugins?: [],
  pip?: boolean //打开画中画功能
  fluid?: boolean //播放器宽度跟随父元素的宽度大小变化
  fitVideoSize?: 'fixWidth' | 'fixHeight' | 'auto'
}

export interface nextButtonProps {
  status: 'next' | 'question' | 'finish',
  setDatas: Dispatch<SetStateAction<tutorialProps[]>>,
  setTotal: Dispatch<SetStateAction<number>>,
  datas: Array<tutorialProps>
}

export interface buttonIconProps {
  width?: number,
  height?: number,
  color?: string,
}

export interface loginProps {
  username: string,
  password: string,
}

export interface registerProps {
  username: string,
  password: string,
  nickname?: string,
  role: string,
  sex?: '0' | '1',
  avatar: string,
  remark: string,
}

export type responseType = {
  code: number,
  message: string,
  data?: unknown
}

export interface PersonCenterProps {
  nickname?: string,
  avatar?: string,
}


export interface UserInfoProps {
  avatar: string
  create_time: string
  email: string
  nickname: string
  password: string
  phone: string
  role: string
  sex: '0' | 1
  username: string
}