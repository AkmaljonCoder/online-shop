import React from 'react'

import { BottomText, Container, Navbar, Wrapper } from './style'

const Main = ({order,setOrder}) => {

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <h3 className="link">Меню</h3>
          <h3 className="link">Доставка</h3>
          <h3 className="link">Оплата</h3>
          <button onClick={()=>setOrder(true)}>Бронь столика</button>
        </Navbar>
        <BottomText>
        Видовой ресторан Food Exxe Relo на Крестовском острове
        </BottomText>
      </Container>
    </Wrapper>
  )
}

export default Main