import React from "react"
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.comhttps://github.com/Jek-San"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/ihsanzack/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocial
