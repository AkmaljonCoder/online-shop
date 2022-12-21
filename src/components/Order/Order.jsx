import React from 'react'
import { Button, CloseIc, Input, InpWrapper, LogoImg, Title, Wrapper } from './style'

import Close from '../../Assets/close.svg'
import Logo from '../../Assets/logo.png'

const Order = ({order,setOrder}) => {



  return (
    <Wrapper>
        <div className={order===false? 'order-none' : 'order-flex'}>
            <div className="card">
                <LogoImg src={Logo} />
                <Title>Забронировать столик</Title>
                <Input placeholder='Имя'/>
                <Input placeholder='Телефон'/>
                <InpWrapper>
                    <input placeholder='Гостей' type="text" className="input" />
                    <input placeholder='Время' type="text" className="input" />
                </InpWrapper>
                <Button>Забронировать</Button>
                <CloseIc
                onClick={()=>setOrder(false)} 
                src={Close} alt="" className="close"
                /> {/* close icon */}
            </div>
        </div>
    </Wrapper>
  )
}

export default Order