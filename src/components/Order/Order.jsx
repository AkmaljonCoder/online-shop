import React,{useState} from 'react'
import { Button, CloseIc, Input, InpWrapper, LogoImg, Title, Wrapper } from './style'

import Close from '../../Assets/close.svg'
import Logo from '../../Assets/logo.png'

const Order = ({order,setOrder}) => {
    const [name, setname] = useState('');
    const [number, setnumber] = useState('');
    const [guest, setguest] = useState('');
    const [time, settime] = useState('');

    const SendFunc = () => {
        setname('');
        setnumber('');
        setguest('');
        settime('');
        setOrder(false);
    }

  return (
    <Wrapper>
        <div className={order===false? 'order-none' : 'order-flex'}>
            <div className="card">
                <LogoImg src={Logo} />
                <Title>Забронировать столик</Title>
                <Input onChange={(e)=>setname(e.target.value)} value={name} placeholder='Имя'/>
                <Input type={'number'} onChange={(e)=>setnumber(e.target.value)} value={number} placeholder='Телефон'/>
                <InpWrapper>
                    <input type={'number'} value={guest} onChange={(e)=>setguest(e.target.value)} placeholder='Гостей' className="input" />
                    <input onChange={(e)=>settime(e.target.value)} value={time} placeholder='Время' className="input" />
                </InpWrapper>
                <Button onClick={SendFunc}>Забронировать</Button>
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