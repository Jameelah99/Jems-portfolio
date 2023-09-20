import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

function Header() {
  return (
    <>
     <header>
     <nav className="navlinks-wrapper">
        <h1 className="logo">R O J</h1>
        <ul className="Links">
          <li className="nav-item"><Link to={'/'} className="navlink"> Home </Link></li>
          <li className="nav-item"> <Link to={'/about'} className="navlink"> About </Link></li>
          <li className="nav-item"><Link to={'/project'} className="navlink"> Project </Link></li>
          <li className="nav-item"> <Link to={'/contact'} className="navlink"> Contact </Link></li>
        </ul>
        <div className="hamburger">
          <span className="icon"></span>
          <span className="icon"></span>
          <span className="icon"></span>
        </div>
      </nav>
    </header>
    
    </>
  )
}

export default Header