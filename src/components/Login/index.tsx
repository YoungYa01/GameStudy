import {Suspense, useEffect, useState} from "react";
import Loading from "../Loading";
import {Button, Checkbox, Form, Input, Message} from "@arco-design/web-react";
import css from './index.module.css'
import {IconLock, IconUser} from "@arco-design/web-react/icon";
import {login} from "../../api/public";
import {resolveResponse} from "../../utils/response.ts";
import {loginProps, responseType} from "../../types";
import {getPassword, getUserName, savePassword, saveUserName} from "../../utils/cookies.ts";
import {useNavigate} from "react-router-dom";
import {setToken} from "../../utils/localStorage.ts";
import {useDispatch} from "react-redux";
import {setUsername} from "../../store/modules/user";

const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
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
    if (data.remember) {
      saveUserName(data.username);
      savePassword(data.password);
    }
    setLoading(true);
    login(data as loginProps)
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

  useEffect(() => {
    const username = getUserName();
    const password = getPassword();
    const isSaved = username && password;
    form.setFieldsValue({
      username,
      password,
      remember: !!isSaved,
    })
  }, []);


  return (
    <Suspense fallback={<Loading/>}>
      <div className={'flex h-screen ' + css.content}>
        <Form
          form={form}
          className={'w-1/4 h-2/5 p-8 border-2 rounded-lg m-auto ' + css.form_bg} layout={'vertical'}>
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
