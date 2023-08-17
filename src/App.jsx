
import './App.css'
import "./index.css"

import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Dashboard from './pages/Dashboard/Dashboard'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="signup" element= {<SignUp  setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="dashboard" element= {<Dashboard/>}/>
      </Routes>
  
    </div>
  )
} 

export default App
