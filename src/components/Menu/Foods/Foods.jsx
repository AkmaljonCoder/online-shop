import React from 'react'
import { BottomDiv, Box, Button, Container, FoodImg, Price, Title, Wrapper } from './style'

import { FoodData } from '../../../data'

const Foods = () => {

  return (
    <Wrapper>
      <Container>
        {
          FoodData.map((item,index)=>{
            return(
              <Box key={index}>
                <FoodImg src={item.image} />
                <Title>{item.name}</Title>
                <BottomDiv>
                  <Price>{item.price} ₽</Price>
                  <Button>В корзину</Button>
                </BottomDiv>
              </Box>
            )
          })
        }
      </Container>
    </Wrapper>
  )
}

export default Foods