import {Form, Input, Select, Tooltip, Grid, Button, Space} from "@arco-design/web-react";
import {IconExclamationCircle} from "@arco-design/web-react/icon";
import axios from "axios";
import style from './index.module.css'

const expressList: { name: string, code: string }[] = [
  {
    name: '申通',
    code: 'shentong'
  }, {
    name: 'EMS',
    code: 'ems'
  }, {
    name: '顺丰',
    code: 'shunfeng'
  }, {
    name: '圆通',
    code: 'yuantong'
  }, {
    name: '中通',
    code: 'zhongtong'
  }, {
    name: '韵达',
    code: 'yunda'
  }, {
    name: '天天',
    code: 'tiantian'
  }, {
    name: '汇通',
    code: 'huitongkuaidi'
  }, {
    name: '全峰',
    code: 'quanfengkuaidi'
  }, {
    name: '德邦',
    code: 'debangwuliu'
  }, {
    name: '宅急送',
    code: 'zhaijisong'
  }
]

export default () => {

  return (
    <div className={style.root}>
      <Form
        style={{maxWidth: 500}}
        initialValues={{}}
        autoComplete='off'
        onSubmit={(values) => {
          console.log(values);
          axios(
            {
              method: 'GET',
              url: `http://www.kuaidi100.com/query`,
              params: {
                type: values.name,
                postid: values.code
              },
              headers:{
                'Access-Control-Allow-Origin': '*'
              }
            }
          ).then(res => {
            console.log(res);
          })
        }}
      >
        <Form.Item label='快递公司名' required>
          <Grid.Row align='center'>
            <Form.Item field='name' noStyle={{showErrorTip: true}} rules={[{required: true}]}>
              <Select
                placeholder='请选择快递公司'
                style={{flex: 1}}
              >
                {
                  expressList.map(item => (
                    <Select.Option key={item.code} value={item.code}>
                      {item.name}
                    </Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
            <Tooltip content='必须填写哦'>
              <IconExclamationCircle style={{margin: '0 8px', color: 'rgb(var(--arcoblue-6))'}}/>
            </Tooltip>
          </Grid.Row>
        </Form.Item>
        <Form.Item label='快递单号' required>
          <Grid.Row align='center'>
            <Form.Item field='code' noStyle={{showErrorTip: true}} rules={[{required: true}]}>
              <Input
                placeholder='请输入你的快递单号'
                style={{flex: 1}}/>
            </Form.Item>
            <Tooltip content='必须填写哦'>
              <IconExclamationCircle style={{margin: '0 8px', color: 'rgb(var(--arcoblue-6))'}}/>
            </Tooltip>
          </Grid.Row>
        </Form.Item>
        <Form.Item label=' '>
          <Space size={24}>
            <Button type='primary' htmlType='submit' shape='round' long={true}>
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}
