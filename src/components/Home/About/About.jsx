import React from 'react'
import { Box, ButtonDiv, Container, ImageDiv, LittleDiv, TextDiv } from './style'

import Card1 from '../../../Assets/Home/card1.png'
import Card2 from '../../../Assets/Home/card2.png'

const About = () => {
  return (
    <Container>
      <Box>
        <LittleDiv>
          <h3>о ресторане</h3>
          <div></div>
        </LittleDiv>
        <TextDiv>
          <h1>Food Exxe Relo</h1>
          <p>
            Sed vel ornare ut rhoncus, ac ut nibh. 
            Amet at sit et nibh. In lectus phasellus 
            non ornare eget velit. Facilisi urna, 
            tristique dui, rhoncus, dolor. Tincidunt 
            enim gravida dignissim leo pulvinar sit 
            volutpat nulla vestibulum. <br /><br />
            Morbi pellentesque enim massa laoreet vel id. Lectus 
            ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. 
            Amet quis pellentesque enim porttitor lectus interdum. Nisi, 
            faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. 
            In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, 
            scelerisque vulputate risus massa dictum. Cras at quis in eu, 
            faucibus feugiat vel. At.
          </p>
        </TextDiv>
      </Box>
      <Box>
        <LittleDiv>
          <h3>меню</h3>
          <div></div>
        </LittleDiv>
        <TextDiv>
          <h1>Меню</h1>
          <p>
          At faucibus nullam mauris vitae ut non. 
          Augue libero non nibh nec, et eget erat. 
          Nascetur nunc neque, varius massa aliquam 
          interdum turpis massa. Ac tortor aliquam 
          risus, interdum nisl mauris sit. Ut 
          placerat fermentum pellentesque ac at. 
          Vitae venenatis faucibus urna mi eget 
          vitae quam eu. Euismod sed mauris id 
          turpis iaculis. Erat rutrum dolor, vitae 
          morbi. <br /><br />
          Nunc cras cras aliquet blandit faucibus massa 
          sagittis semper. 
          </p>
        </TextDiv>
      </Box>
      <ImageDiv>
        <div className="box">
          <div className="outline-div">
            <img src={Card1} alt="" />
          </div>
          <div className="line-div">
            <h3>Основное меню</h3>
            <div></div>
          </div>
        </div>
        <div className="box">
          <div className="outline-div">
            <img src={Card2} alt="" />
          </div>
          <div className="line-div">
            <h3>Барная карта</h3>
            <div></div>
          </div>
        </div>
      </ImageDiv>
      <Box>
        <LittleDiv>
          <h3>доставка</h3>
          <div></div>
        </LittleDiv>
        <TextDiv>
          <h1>Служба доставки</h1>
          <ButtonDiv>
            <p>
            At faucibus nullam mauris vitae ut non. 
            Augue libero non nibh nec, et eget erat. 
            Nascetur nunc neque, varius massa aliquam 
            interdum turpis massa. Ac tortor aliquam 
            risus, interdum nisl mauris sit. Ut 
            placerat fermentum pellentesque ac at. 
            Vitae venenatis faucibus urna mi eget 
            vitae quam eu. Euismod sed mauris id 
            turpis iaculis. Erat rutrum dolor, vitae 
            morbi. <br /><br />
            Nunc cras cras aliquet blandit faucibus massa 
            sagittis semper. 
            </p>
            <div className="buttons">
              <button className='gold'>Подробнее</button>
              <button className='white'>Условия доставки</button>
            </div>
          </ButtonDiv>
        </TextDiv>
      </Box>
    </Container>
  )
}

export default About