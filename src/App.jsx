import React from 'react'
import {Routes, Route} from "react-router-dom"
import './styles/App.css'
import Headers from "./Header"
import Landingpage from './Landingpage'
import About from './About'
import Project from './Project'
import Contact from './Contact'

function App (){
  return(
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </>
  )
}

export default App
