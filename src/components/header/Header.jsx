import React from "react"
import CTA from "./CTA"
import "./header.css"
// import ME from "../../assets/me.png"
import ME from "../../assets/profile.png"
import US from "../../assets/imgheader.JPEG"
import img from "../../assets/photos/img8.JPEG"
import HeaderSocial from "./HeaderSocial"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>We are</h5>
        <h1>Saitama Wedding</h1>
        <h5 className="text-light">SPESIALIS PERNIKAHAN ADAT BATAK</h5>
        <CTA />
        <HeaderSocial />
        <div className=" me">
          <img src={img} alt="me" className="img-header" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
