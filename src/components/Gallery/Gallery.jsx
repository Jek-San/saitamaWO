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
        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {[
              images.img1,
              images.img2,
              images.img3,
              images.img4,
              images.img5,
              images.img6,
              images.img7,
              images.img8,
              images.img9,
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
