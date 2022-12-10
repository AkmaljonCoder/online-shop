import {React} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// components

import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Item from './components/Menu/Item/Item'
import Footer from './components/Footer/Footer'

const App = () => {  

  return (
    <> 
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/item' element={<Item/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App