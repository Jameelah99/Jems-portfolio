import React from 'react'
import "./styles/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faSquareGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
    <section class="connect-with-me">
        <h2>Connect With Me</h2>
        <section className="social-account-wrapper">
          {/* twitter */}
          <a href="https://twitter.com/Jemgem14?t=0xfx2mAYpfjH2T368txj6A&s=09" target="_blank">
          <FontAwesomeIcon icon={faSquareXTwitter} className='fontIcon'/>
          <div className="sMedia">Twitter</div>
          </a>

          {/* <github svg */}
          <a href="https://github.com/Jameelah99" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className='fontIcon'/>
          <div class="sMedia">GitHub</div>
          </a>

          {/* linkedin svg */}
          <a href="https://www.linkedin.com/in/jemilat-rotimi" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className='fontIcon'/>
          <div class="sMedia">LinkedIn</div>
          </a>
        </section>
      </section>
    </>
  )
}

export default Contact