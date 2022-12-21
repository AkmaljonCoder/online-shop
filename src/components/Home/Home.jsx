import React from 'react'

// components

import Main from './Main/Main'
import About from './About/About'

const Home = ({order,setOrder}) => {

  return (
    <>
      <Main order={order} setOrder={setOrder}/>
      <About/>
    </>
  )
}

export default Home