import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import NextPage from './Pages/AfterLogin'
import ForgotPassword from './Pages/ForgotPassword'
import Home from './Home'
import AddNewUser from './Pages/Admin Pages/AddNewUser'
import ViewAllUser from './Pages/Admin Pages/ViewAllUser'
import AddNewPdf from './Pages/Admin Pages/AddNewPdf'
import UserHome from './Pages/User Pages/UserHome'
import ViewAllUploadedPdf from './Pages/Admin Pages/ViewAllUploadedPdf'
import UserFindAllPdf from './Pages/User Pages/UserFindAllPdf'
import TakeTest from './Pages/User Pages/TakeTest'
import WebCode from './Pages/CodeEditor/WebCode'
import NotesPage from './Pages/User Pages/NotesPage'

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
        <Route path="/addNewUser" element={isLoggedIn === "true" ? <AddNewUser/> : <Home />} />
        <Route path="/addNewPdf" element={isLoggedIn === "true" ? <AddNewPdf/> : <Home />} />
        <Route path="/viewAllUser" element={isLoggedIn === "true" ? <ViewAllUser/> : <Home />} />
        <Route path="/viewAllUploadedPdf" element={isLoggedIn === "true" ? <ViewAllUploadedPdf/> : <Home />} />
        {/* <Route path="/userFindPdf" element={isLoggedIn === "true" ? <UserFindPdf/> : <Home />} /> */}
        <Route path="/userFindAllPdf" element={isLoggedIn === "true" ? <UserFindAllPdf/> : <Home />} />
        <Route path="/getAllPdf" element={isLoggedIn === "true" ? <UserHome/> : <Home />} />
        <Route path="/takeTest" element={isLoggedIn === "true" ? <TakeTest/> : <Home />} />
        <Route path="/notes" element={isLoggedIn === "true" ? <NotesPage/> : <Home />} />
        <Route path="/webCode" element={<WebCode/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
