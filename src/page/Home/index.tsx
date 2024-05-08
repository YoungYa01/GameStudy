import style from './index.module.css'
import {ReactElement, useEffect, useState} from "react";
import {getUserInfo} from "../../api/user";
import HeaderMenu from "../../components/HeaderMenu";
import {getUserName} from "../../utils/cookies.ts";
import {Card, Grid,} from "@arco-design/web-react";


export default (): JSX.Element => {
  const username = getUserName();

  const [userInfo, setUserInfo] = useState<any>();

  const ChartCard = (props: { children?: ReactElement }) => (
    <Card
      bordered
      hoverable
      className={style['card-custom-hover-style'] + ' w-full rounded-3xl flex-1 overflow-hidden border-5'}
    >
      {
        props.children
      }
    </Card>
  )


  useEffect(() => {
    getUserInfo(username!)
      .then(res => {
        console.log(res);
        setUserInfo(res.data);
      })
  }, []);

  return (
    <div className={style.root}>
      <div className={style.header}>
        <HeaderMenu {...userInfo}/>
      </div>
      <Grid cols={3} colGap={20} rowGap={15} className={'w-full p-5'}>
        <Grid.GridItem className={'w-full'}>
          <ChartCard>
            {/*<DotGraph/>*/}
          </ChartCard>
        </Grid.GridItem>
        <Grid.GridItem>
          <ChartCard>
            {/*<Heatmap/>*/}
          </ChartCard>
        </Grid.GridItem>
        <Grid.GridItem>
          <ChartCard>
            {/*<LineBarChart/>*/}
            <div className={'text-left'}>
              <h1>通知：</h1>
              <p>
                最新通知。
                最新通知。
                最新通知。
              </p>
            </div>
          </ChartCard>
        </Grid.GridItem>
        <Grid.GridItem span={3}>
          <ChartCard>
            {/*<LongLineChar/>*/}
          </ChartCard>
        </Grid.GridItem>
      </Grid>
    </div>
  )
}
