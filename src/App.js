import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPages from './Pages/AboutPages'
import ProductPage from './Pages/ProductPage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPages/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App