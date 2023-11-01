import React from 'react'
import "./styles/landingpage.css"
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHands } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";


function Landingpage() {
  return (
    <>

  {/* HEADER SECTION */}
  <section id="hero-wrapper">
  <section className="hero-wrapper-content">
    <img src="http://github.com/Jameelah99.png" alt="Jemilat's profile picture" className="profile-image" />
    <p className="greeting"> HI <FontAwesomeIcon icon={faHands} /></p> 
    <p className="full-name"> I'm Rotimi Oluwatoyin Jemilat</p>
    <p className="brief"> A Frontend Developer</p>
    <section className="hero-media-wrapper">
      {/* twitter svg */}
      <Link to="https://twitter.com/Jemgem14?t=0xfx2mAYpfjH2T368txj6A&s=09" target="_blank">
      <FontAwesomeIcon icon={faXTwitter} className='fontLandingIcon'/>
      </Link>
      {/* github svg */}
      <Link to="https://github.com/Jameelah99" target="_blank">
      <FontAwesomeIcon icon={faGithub} className='fontLandingIcon'/>
      </Link>
      {/* linkedin svg */}
      <Link to="https://www.linkedin.com/in/jemilat-rotimi" target="_blank">
      <FontAwesomeIcon icon={faLinkedinIn} className='fontLandingIcon'/>
      </Link>
    </section>
    <section className="hero-btns-wrapper">
      <Link to="https://drive.google.com/file/d/1BjrrNYWXCYsBkl91BCTUqXyjynbTuqMx/view?usp=drivesdk" target="_blank"> <button className="btn download-btn">Download CV</button> </Link> 
    </section>
  </section>
</section>

    
    </>
  )
}

export default Landingpage