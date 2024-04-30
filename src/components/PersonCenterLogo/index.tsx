import {Avatar, Dropdown, Menu, Message} from "@arco-design/web-react";
import {PersonCenterProps} from "../../types";
import {removeToken} from "../../utils/localStorage.ts";
import {useNavigate} from "react-router-dom";

const PersonCenterLogo = ({nickname, avatar}: PersonCenterProps) => {
  const navigate = useNavigate();

  const logout = () => {
    removeToken();
    navigate('/');
    Message.success('退出成功');
  }

  const dropList = (
    <Menu>
      <Menu.ItemGroup>
        <Menu.Item key='1'>个人中心</Menu.Item>
        <Menu.Item key='2'>个人设置</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup>
        <Menu.Item key='3' onClick={logout}>退出登录</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )

  return (
    <Dropdown droplist={dropList} position='bl'>
      <Avatar>
        <img src={avatar} alt={nickname}/>
      </Avatar>
      <span className={'text-2xl ml-2'}>{nickname}</span>
    </Dropdown>
  )
}

export default PersonCenterLogo;
