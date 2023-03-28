import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login_component'
import SignUp from './components/signup_component'
import NextPage from './components/afterLoginPage'
import ForgotPassword from './components/forgotPassword'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Card from './components/Card'

function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn")

  return (
    <>
    <Router>
      <Navbar/>
      <Carousel/>
      <Card/>
      
            <Routes>
              {/* <Route exact path='/' element={<Navbar/>}/> */}
              {/* <Route exact path='/' element={<Footer/>}/> */}
              {/* <Route exact path="/" element={isLoggedIn == "true" ? <NextPage/> : <Navbar />} /> */}
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userData" element={<NextPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
