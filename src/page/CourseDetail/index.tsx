import {useEffect} from "react";
import {useParams} from "react-router-dom";

const CourseDetail = () => {


  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);

  return (
    <div className={'w-full h-screen flex justify-center items-center'}>
      <h1 className={'text-4xl'}>
        {
          params.title
        }
      </h1>
    </div>
  )

}

export default CourseDetail;
