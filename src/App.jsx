import {React, useState} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// components

import Sidebar from './components/Sidebar/Sidebar'
import Order from './components/Order/Order'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Item from './components/Menu/Item/Item'
import Footer from './components/Footer/Footer'

const App = () => {

  const [order, setOrder] = useState(false);

  return (
    <> 
      <Sidebar order={order} setOrder={setOrder} />
      <Order order={order} setOrder={setOrder} />
      <Routes>
        <Route path='/' element={<Home order={order} setOrder={setOrder} />}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/item' element={<Item/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App