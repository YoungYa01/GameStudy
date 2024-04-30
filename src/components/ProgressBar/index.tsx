import {Progress} from "@arco-design/web-react";
import {useEffect, useState} from "react";

export default (props: {
  total: number,
  current: number,
  className?: string
}) => {

  const [value, setValue] = useState(10);

  useEffect(() => {
    setValue(props.current / props.total * 100);
  }, [props.total, props.current]);

  return (
    <div className={props.className}>
      <Progress
        steps={10}
        percent={value}
        size={'large'}
        status='success'
        style={{}}
      />
    </div>
  )
}
