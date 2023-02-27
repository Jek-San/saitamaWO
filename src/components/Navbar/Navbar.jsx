import React, { useState } from "react"

import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images"
import "./Navbar.css"
import ME from "../../assets/profile.png"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={ME} alt="app__logo" />
      </div>

      <nav>
        <a
          href="#"
          onClick={() => {
            setActiveNav("#")
          }}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {
            setActiveNav("#about")
          }}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => {
            setActiveNav("#experience")
          }}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() => {
            setActiveNav("#services")
          }}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => {
            setActiveNav("#contact")
          }}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
