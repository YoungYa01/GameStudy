import {buttonIconProps} from "../../types";

export const EnterIcon = (props:buttonIconProps) => <>
  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
       width={props.width || 100} height={props.height || 100} {...props}>
    <path
      d="M128 597.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h512a128 128 0 0 0 128-128V256a42.666667 42.666667 0 1 1 85.333333 0v170.666667a213.333333 213.333333 0 0 1-213.333333 213.333333H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667z"
      fill="#0D0D0D"></path>
    <path
      d="M140.501333 627.498667a42.666667 42.666667 0 0 1 0-60.330667l170.666667-170.666667a42.666667 42.666667 0 0 1 60.330667 60.330667L230.997333 597.333333l140.501334 140.501334a42.666667 42.666667 0 1 1-60.330667 60.330666l-170.666667-170.666666z"
      fill="#0D0D0D"></path>
  </svg>
</>

export const SpaceIcon = (props:buttonIconProps) => <>
  <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
       width={props.width || 100} height={props.height || 100} {...props}>
    <path
      d="M213.333333 640v-149.333333a21.333333 21.333333 0 0 0-21.333333-21.333334h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333334V640a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333v-149.333333a21.333333 21.333333 0 0 0-21.333333-21.333334h-42.666667a21.333333 21.333333 0 0 0-21.333333 21.333334V640z"
      ></path>
  </svg>
</>