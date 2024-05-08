import {Menu} from "@arco-design/web-react";
import ThemeButton from "../ThemeButton";
import LanguishDropList from "../LanguishDropList";
import PersonCenterLogo from "../PersonCenterLogo";
import {useNavigate} from "react-router-dom";


const MenuItem = Menu.Item;
const HeaderMenu = (props: { nickname: string, avatar: string }) => {

  const navigate = useNavigate();

  return (
    <div>
      <Menu mode={'horizontal'} defaultSelectedKeys={['1']}>
        <MenuItem key={'home'} onClick={()=>{
          navigate('/');
          window.location.reload();
        }}>
          首页
        </MenuItem>
        <MenuItem key={'blank1'}>
          <div className={'w-96'}></div>
        </MenuItem>
        <MenuItem key={'blank2'}>
          <div className={'w-96'}></div>
        </MenuItem>
        <MenuItem key={'blank3'}>
          <div className={'w-96'}></div>
        </MenuItem>
        <MenuItem key={'lang'}>
          <LanguishDropList size='large'></LanguishDropList>
        </MenuItem>
        <MenuItem key={'theme'}>
          <ThemeButton></ThemeButton>
        </MenuItem>
        <MenuItem key={'last'}>
          <PersonCenterLogo {...props}/>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default HeaderMenu;
