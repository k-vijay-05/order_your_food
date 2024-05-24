import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'

const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setshowLogin={setshowLogin}/>:<></>}
     <div className='app'>
    <Navbar setshowLogin={setshowLogin}/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/order' element={<Placeorder/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
