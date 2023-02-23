import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Testimoni from "./components/testimoni/Testimoni"
import Footer from "./components/footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Gallery from "./components/Gallery/Gallery"

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <About />
      <Header />
      <Nav />
      {/* <Experience /> */}
      <Services />
      <Gallery />
      <Portfolio />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  )
}

export default App
