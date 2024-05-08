import {Suspense, useEffect, useState} from "react";
import Loading from "../Loading";
import {Button, Checkbox, Form, Input, Message, Grid} from "@arco-design/web-react";
import css from './index.module.css'
import {IconLock, IconRobot, IconShrink, IconUser} from "@arco-design/web-react/icon";
import {getCaptcha, login} from "../../api/public";
import {resolveResponse} from "../../utils/response.ts";
import {loginProps, responseType} from "../../types";
import {getPassword, getUserName, savePassword, saveUserName} from "../../utils/cookies.ts";
import {useNavigate} from "react-router-dom";
import {setToken} from "../../utils/localStorage.ts";
import {useDispatch} from "react-redux";
import {setUsername} from "../../store/modules/user";
import {Header} from "antd/es/layout/layout";

const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = () => {
    const data = form.getFields();
    if (!data.username) {
      return Message.warning('请填写用户名');
    }
    if (!data.password) {
      return Message.warning('请填写密码');
    }
    if (!data.captcha) {
      return Message.warning('请填写验证码');
    }
    if (data.remember) {
      saveUserName(data.username);
      savePassword(data.password);
    }
    setLoading(true);
    const captchaId = captcha.match(/\/profile\/captcha\/(.*?)\.png/i)
    login({captchaId:captchaId?.[1], ...data} as unknown as loginProps)
      .then(response => {
        resolveResponse(response as unknown as responseType);
        setToken(response.data);
        // setUsername(data.username);
        dispatch(setUsername(data.username));
        navigate('/home')
        setLoading(false);
      })
      .finally(() => setLoading(false))
  };

  const handleUsernameChange = (value: string) => {
    const isSaved = form.getFieldValue('remember');
    if (!isSaved) {
      return;
    }
    saveUserName(value);
  }

  const handlePasswordChange = (value: string) => {
    const isSaved = form.getFieldValue('remember');
    if (!isSaved) {
      return;
    }
    savePassword(value);
  };

  const handleBackHome = () => {
    navigate('/')
  }

  const getCaptchaUrl = () => {
    getCaptcha()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      .then((response: { code: number, data: string, message: string }) => {
        if (response.code == 200) {
          return setCaptcha(response.data)
        }
        return Message.error(response.message);
      })
  }


  useEffect(() => {
    const username = getUserName();
    const password = getPassword();
    const isSaved = username && password;
    form.setFieldsValue({
      username,
      password,
      remember: !!isSaved,
    })
    getCaptchaUrl();
  }, []);


  return (
    <Suspense fallback={<Loading/>}>
      <div className={'flex h-screen ' + css.content}>
        <Header className={css.header}>
          <Button
            type={'outline'}
            shape={'round'}
            size='large'
            onClick={handleBackHome}
            icon={<IconShrink style={{fontSize: 32, strokeWidth: 5}}/>}></Button>
        </Header>
        <Form
          form={form}
          className={'w-1/4 p-8 border-2 rounded-lg m-auto ' + css.form_bg} layout={'vertical'}>
          <FormItem>
            <h1 className={'text-4xl'}>Gaming Study Admin</h1>
          </FormItem>
          <FormItem field={'username'} rules={[{required: true, message: '请填写用户名'}]}>
            <Input
              placeholder='用户名'
              onChange={handleUsernameChange}
              prefix={<IconUser/>}
              className={'border-1 border-gray-300 border-lg'}/>
          </FormItem>
          <FormItem field={'password'} rules={[{required: true, message: '请填写密码'}]}>
            <Input.Password
              placeholder='密码'
              prefix={<IconLock/>}
              className={'border-1 border-gray-300 border-lg'}
              onChange={handlePasswordChange}
            />
          </FormItem>
          <Grid.Row gutter={8}>
            <Grid.Col span={16}>
              <FormItem field={'captcha'} rules={[{required: true, message: '请填写验证码'}]}
                        className={'w-full flex justify-between'}>
                <Input
                  placeholder='验证码'
                  prefix={<IconRobot/>}
                  className={'w-full border-1 border-gray-300 border-lg'}
                />
              </FormItem>
            </Grid.Col>
            <Grid.Col span={8}>
              <img
                className={'h-10 cursor-pointer'}
                src={`http://localhost:8080${captcha}`}
                alt="captcha"
                onClick={getCaptchaUrl}
              />
            </Grid.Col>
          </Grid.Row>
          <FormItem field={'remember'}>
            <Checkbox>记住密码</Checkbox>
          </FormItem>
          <FormItem field={'submit'} wrapperCol={{offset: 5}}>
            <Button
              type={'outline'}
              shape={'round'}
              htmlType='submit'
              className={'w-2/3'}
              onClick={onSubmit}
              loading={loading}
              icon={<span>🎐</span>}>登录</Button>
          </FormItem>
          <FormItem wrapperCol={{offset: 1}}>
            or <Button
            type={'text'}
            className={'bg-white hover:bg-white'}>注册</Button>
          </FormItem>
        </Form>
      </div>
    </Suspense>
  )
}

export default Login;
