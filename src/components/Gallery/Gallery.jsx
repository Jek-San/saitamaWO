import React from "react"
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs"

import { SubHeading } from "../SubHeading/SubHeading"
import { images } from "../../constants"
import "./Gallery.css"
import img from "../../assets/avatar1.jpg"
import img2 from "../../assets/avatar2.jpg"
import img3 from "../../assets/avatar3.jpg"

import Carousel from "react-bootstrap/Carousel"

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === "left") {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <section className="section__gallery">
      <div className="app__gallery flex__center">
        <div style={{ marginBottom: "1rem" }}>
          <p className="p__cormorant">Lorem ipsum dolor sit amet.</p>
          <img src={img} alt="spoon_image" className="spoon__img" />
        </div>
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.gallery01,
              images.gallery02,
              images.gallery03,
              images.gallery04,
            ].map((image, index) => (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))}
          </div>

          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort
              className="gallery__arrow-icon"
              onClick={() => scroll("left")}
            />
            <BsArrowRightShort
              className="gallery__arrow-icon"
              onClick={() => scroll("right")}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
