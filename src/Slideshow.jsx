import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './styles/slideshow.css'
import image57 from "./assets/Screenshot (57).png"
import image69 from "./assets/Screenshot (69).png"
import image64 from "./assets/Screenshot (64).png"
import image65 from "./assets/Screenshot (65).png"
import image66 from "./assets/Screenshot (66).png"
import image68 from "./assets/Screenshot (68).png"

    const images = [
      image57, image64, image65, image66, image68, image69
    ]

    const titles = [
      "TiideHr JS version Role management page",
      "TiideHr React version Role management page",
      "Interactive Card Details",
      "Rolan Hotel Website Landing page",
      "TiideHr React version Landing page",
      "TiideHr React version Employee Dashboard"
    ]
    
   const Slideshow = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
    
        const nextSlide = () =>{
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    
        const prevSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        }

        return (
          <>
          <div className="slideshow">
            <div className='prevAngle' onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft} size={'2x'}/></div>
            <img className='projectImages' src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <div className='nextAngle' onClick={nextSlide}><FontAwesomeIcon icon={faAngleRight} size={'2x'}/></div>
          </div>

          <div className='text'>
            <span>{titles[currentIndex]}</span>
          </div>
          </>
        )
    }

export default Slideshow