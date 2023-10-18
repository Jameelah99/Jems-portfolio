import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/hamburger.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };

  return (
    <>
      <div
        className={`hamburger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <button className="hamburger" >
        {isOpen ? (
          <FontAwesomeIcon icon={faBars} size={'2x'} color={'white'}/>
        ) : (
          <FontAwesomeIcon icon={faXmark} size={'2x'} color={'white'}/>
        )}
        </button>

        <ul className={`Links ${isOpen ? "icon" : ""}`}>
          <li className="nav-item">
            <Link to={"/"} className="navlink">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="navlink">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/project"} className="navlink">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="navlink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hamburger;
