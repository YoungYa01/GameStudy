import {Carousel} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {getCarousel} from "../../api/public";

interface T {
  imageSrc?: string[],
  style?: React.CSSProperties,
}

interface CourseType {
  id: number,
  src: string,
  title: string,
  order: number,
  show: number
}

const CourseCarousel: React.FC<T> = (props: T) => {

  const [imageSrc, setImageSrc] = useState<CourseType[]>([]);

  useEffect(() => {
    getCarousel()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
      // @ts-expect-error
      .then(({data, code}) => {
        if (code === 200) {
          setImageSrc(data)
        }
      })
  }, []);


  return (
    <Carousel
      autoPlay
      animation='card'
      showArrow='never'
      indicatorPosition='outer'
      style={props.style}
      indicatorType={'line'}
      trigger={'hover'}
    >
      {imageSrc.map((item) => (
        <div
          key={item.id}
          style={{width: '60%'}}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{height: '550px'}}
          />
        </div>
      ))}
    </Carousel>
  )
}

export default CourseCarousel;
