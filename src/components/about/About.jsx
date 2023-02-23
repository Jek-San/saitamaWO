import React from "react"
import "./about.css"
import ME from "../../assets/profile.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Still Looking For Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>Still dont have 😥</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 Project Completes</small>
            </article>
          </div>
          <p>
            Tak hanya sebagai upacara sakral bagi mereka yang ingin mengikat
            janji suci di hadapan Tuhan, pernikahan menjadi salah satu tradisi
            dalam budaya Batak Toba. Kami memiliki visi dan misi demi menjadikan
            setiap upacara menjadi memori terindah untuk setiap pasangan.
            Saitama akan mendampingi, mempersiapkan, dan memastikan segala
            kebutuhan agar upacara dapat berjalan dengan baik.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
