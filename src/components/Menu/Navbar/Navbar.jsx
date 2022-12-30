import React, { useState } from 'react'
import { Container, LinkDiv, LinksWr, Pages, Wrapper } from './style'
import { useNavigate } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  const [Filter, setFilter] = useState('all');

  const Navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Pages>
          <h3>Личный кабинет</h3>
          <PersonIcon className='mui-icon'/>
          <ShoppingBasketIcon onClick={()=>{Navigate('/menu/cart');setFilter('cart')}} className='mui-icon m-right'/>
        </Pages>
        <LinksWr>
          <LinkDiv className='t-left'>
            <h3 onClick={()=>setFilter('all')} >все</h3>
            <div style={{opacity:Filter==='all'? '1' : '0'}}></div>
          </LinkDiv>
          <LinkDiv>
            <h3 onClick={()=>setFilter('breakfast')} >Завтраки</h3>
            <div style={{opacity:Filter==='breakfast'? '1' : '0'}} ></div>
          </LinkDiv>
          <LinkDiv>
            <h3 onClick={()=>setFilter('fish')} >Рыба</h3>
            <div style={{opacity:Filter==='fish'? '1' : '0'}} ></div>
          </LinkDiv>
          <LinkDiv>
            <h3 onClick={()=>setFilter('salads')} >Салаты</h3>
            <div style={{opacity:Filter==='salads'? '1' : '0'}} ></div>
          </LinkDiv>
        </LinksWr>
      </Container>
    </Wrapper>
  )
}

export default Navbar