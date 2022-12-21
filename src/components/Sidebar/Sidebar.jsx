import React, { useState } from 'react'
import { BottomDiv, MainWr, TopDiv } from './style'
import { BurgerClose as Burger } from "react-burger-icons";
import { useNavigate } from 'react-router-dom';

import Logo from '../../Assets/logo.png'
import Open from '../../Assets/open.svg'
import Close from '../../Assets/close.svg'

// icons

import YouTube from '@mui/icons-material/YouTube';
import Instagram from '@mui/icons-material/Instagram';
import Telegram from '@mui/icons-material/Telegram';

const Sidebar = ({order,setOrder}) => {
  const [isClosed, setIsClosed] = useState(false);

  const Navigate = useNavigate();

  return (
    <MainWr>
      <div className={isClosed===false? 'menu1' : 'menu2'}>
        <TopDiv>
          <img src={Logo} alt="" className="logo" />
          <img onClick={()=>setIsClosed(!isClosed)} src={isClosed===false? Open : Close} alt="" className="menu" />
        </TopDiv>
        <div className={isClosed===true? 'flex-div' : 'link-div'} >
          <h2 onClick={()=>{Navigate('/');setIsClosed(!isClosed)}} style={{animationDelay:'0.6s'}} >Home</h2>
          <h2 onClick={()=>{Navigate('/menu');setIsClosed(!isClosed)}} style={{animationDelay:'0.7s'}} >Menu</h2>
          <button onClick={()=>setOrder(true)} style={{animationDelay:'0.8s'}} className="button">Бронь столика</button>
        </div>
        <BottomDiv>
          <YouTube className='icon' />
          <Instagram className='icon' />
          <Telegram className='icon' />
        </BottomDiv>
      </div>
    </MainWr>
  )
}

export default Sidebar