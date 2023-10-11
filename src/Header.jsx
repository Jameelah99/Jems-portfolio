import React from 'react'
import "./styles/header.css"
import Hamburger from './Hamburger'

function Header() {
  return (
    <>
     <header>
     <nav className="navlinks-wrapper">
        <h1 className="logo">R O J</h1>
        <Hamburger/>
      </nav>
    </header>
    
    </>
  )
}

export default Header