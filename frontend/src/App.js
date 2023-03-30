import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/LogIn'
import SignUp from './components/SignUp'
import NextPage from './components/AfterLogin'
import ForgotPassword from './components/ForgotPassword'
import Home from './Home'

function App() {

  const isLoggedIn = window.localStorage.getItem("loggedIn")

  return (
    <>
    <Router>      
      <Routes>
        <Route exact path="/" element={isLoggedIn === "true" ? <NextPage/> : <Home/>} />
        <Route path="/sign-in" element={isLoggedIn === "true" ? <NextPage/> : <Login />} />
        <Route path="/sign-up" element={isLoggedIn === "true" ? <NextPage/> : <SignUp />} />
        <Route path="/userData" element={isLoggedIn === "true" ? <NextPage/> : <Home />} />
        <Route path="/forgot-password" element={isLoggedIn === "true" ? <NextPage/> : <ForgotPassword />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
