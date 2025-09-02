import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blogs from './components/Blogs'
import Cart from './components/Cart'
import Contact from './components/Contact'
import Login from './components/Login'
import Payment from './components/Payment'
import Products from './components/Products'
import Posts from './components/Posts'
import AxiosEx from './components/AxiosEx'
import Register from './components/Register'
import Checkout from './components/Checkout'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/products' element={<Products />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/axios' element={<AxiosEx />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
/**
 * Firebase: Backend as a service
 * 
 * 
 */