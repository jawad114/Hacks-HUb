import { useState } from 'react'
import { useSelector } from "react-redux"
import { selectSelectedRole } from "./State/Reducers/roleSlice"
import './App.css'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Home from './Components/HomeScreen/Home'
// import Header from './Components/Header/Header'
import Hackathons from './Components/Hackathons/Hackathons'
import Organize from './Components/Organize/Organize'
import OrganizerLayout from './Layouts/OrganizerLayout'
import ParticipantLayout from './Layouts/ParticipantLayout'

function App() {
  const rolehistory = localStorage.getItem("selectedRole")
  const selectedRole = useSelector(selectSelectedRole) || rolehistory

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        {/* <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} /> */}
        {selectedRole && (
          <Route
            path={`/${selectedRole.toLowerCase()}/*`}
            element={
              selectedRole === "Organizer" ? (
                <OrganizerLayout>
                  <Routes>
                    <Route path='home' element={<Home />} />
                    <Route path='hackathons' element={<Hackathons />} />
                    {/* <Route path='compiler' element={<AffCreate />} />
                    <Route path='ai-bot' element={<AffCreate />} /> */}
                    <Route path='organize-hackathons' element={<Organize />} />
                  </Routes>
                </OrganizerLayout>
              ) : selectedRole === "Participant" ? (
                <ParticipantLayout>
                  <Routes>
                  <Route path='home' element={<Home />} />
                    <Route path='hackathons' element={<Hackathons />} />
                    {/* <Route path='compiler' element={<AffCreate />} />
                    <Route path='ai-bot' element={<AffCreate />} /> */}
                  </Routes>
                </ParticipantLayout>
              ) : null
            }
          />
        )}
      </Routes>
    </Router>
  )
}

export default App
