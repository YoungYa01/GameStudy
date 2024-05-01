import {Fragment, useEffect, useState} from "react";
import {Card, List, Pagination} from 'antd';
import {CourseType} from "../../types";
import css from './index.module.css';
import {getCourseList} from "../../api/public";

const {Meta} = Card;


const CourseList = () => {

  const [list, setList] = useState<CourseType[]>([]);

  const [queryParams, setQueryParams] = useState({
    currentPage: 1,
    pageSize: 8,
  });
  const [total, setTotal] = useState(0);

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


  return (
    <Fragment>
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
            <Card
              hoverable
              style={{maxWidth: 350, height: 350, boxSizing: 'border-box'}}
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
              <div className={css.money}>{}</div>
            </Card>
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
