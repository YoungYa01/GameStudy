import React, {
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from "react";
import {Button, Card, Input, List, Pagination, Badge} from 'antd';
import {CourseType} from "../../types";
import css from './index.module.css';
import {getCourseList, queryCourse} from "../../api/public";
import {RedoOutlined, SearchOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {Message} from "@arco-design/web-react";

const {Meta} = Card;

interface T {
  title: ReactElement,
}

const CourseList: React.FC<T> = (props: T) => {

  const [list, setList] = useState<CourseType[]>([]);

  const [queryParams, setQueryParams] = useState({
    currentPage: 1,
    pageSize: 8,
  });

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const handleQueryList = (params?: { currentPage: number, pageSize: number }) => {
    getCourseList(params || queryParams)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      .then((response: {
        code: number,
        data: { data: CourseType[], currentPage: number, pageSize: number, total: number },
        message: string
      }) => {
        setQueryParams({
          currentPage: response.data.currentPage,
          pageSize: response.data.pageSize,
        });
        setTotal(response.data.total)
        setList(response.data.data)
      })
  }

  const handlePageChange = (page: number, pageSize: number) => {
    handleQueryList({pageSize: pageSize, currentPage: page});
    setQueryParams({
      ...queryParams,
      currentPage: page,
      pageSize: pageSize,
    })
  }

  useEffect(() => {
    handleQueryList();
  }, []);

  const [keyword, setKeyword] = useState('');

  const handleInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    // 后续这里改为复合事件优化一下
    setKeyword(e.target.value);
  }, [])

  const handleOnSearch = () => {
    if(!keyword){
      return Message.warning('请输入搜索内容');
    }
    queryCourse(keyword)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      .then(({code, data}: {
        code: number,
        data: { data: CourseType[], currentPage: number, pageSize: number, total: number },
        message: string
      }) => {
        if (code === 200) {
          setList(data.data);
        }
      })
  }

  const handleClick = (id: number, title: string) => {
    navigate(`/course-detail/${id}/${title}`)
  }

  const CourseCard = (props: { item: CourseType }) => {
    const {item} = props;
    return (
      <Card
        hoverable
        style={{maxWidth: 350, height: 350, boxSizing: 'border-box'}}
        onClick={() => handleClick(item.id, item.title)}
        cover={<div className={'w-full h-52 flex justify-center items-center overflow-hidden'}>
          {
            item.cover ? <img alt={item.title} width={'100%'} src={item.cover}/> :
              <div
                className={'w-full h-full flex justify-center items-center text-blue-500 text-3xl font-medium border-2 rounded-md bg-gray-200'}>
                {item.title}
              </div>
          }
        </div>
        }
      >
        <Meta title={item.title} description={item.description}/>
        <div className={css.money}>{item.discount_price ? <del>{item.price}</del> : item.price}</div>
      </Card>
    )
  }


  return (
    <Fragment>
      <div className={'flex justify-between items-center'}>
        {props.title}
        <span className={css.search}>
        <Input
          placeholder="请输入课程名"
          onChange={handleInputChange}
          style={{width: 200}}
          addonAfter={
            <Button type={'link'} icon={<SearchOutlined/>} onClick={handleOnSearch}/>
          }/>
        <Button shape="circle" type={'link'} icon={<RedoOutlined/>} onClick={() => handleQueryList()}/>
      </span>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            {
              item.discount_price ? <Badge.Ribbon
                text={item.discount_price}
                color="red"
                className={'-translate-x-3'}>
                <CourseCard item={item}/>
              </Badge.Ribbon> : <CourseCard item={item}/>
            }
          </List.Item>
        )}
      />
      <div className={'text-right'}>
        <Pagination
          total={total}
          defaultPageSize={8}
          defaultCurrent={1}
          onChange={handlePageChange}
        />
      </div>
    </Fragment>
  )
}

export default CourseList;
