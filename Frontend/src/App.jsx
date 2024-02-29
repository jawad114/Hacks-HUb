import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Components/HomeScreen/Home'
import Header from './Components/Header/Header'
import Hackathons from './Components/Hackathons/Hackathons'
import Organize from './Components/Organize/Organize'

function App() {
  return (
    <>
<Router>
<Routes>
<Route path="/" element={<Navigate to="/login"/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/header" element={<Header/>} />
  <Route path="/hackathons" element={<Hackathons/>} />
  <Route path="/organize-hackathons" element={<Organize/>} />

</Routes>
</Router>
    </>
  )
}

export default App
