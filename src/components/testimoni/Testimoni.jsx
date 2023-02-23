import React from "react"
import "./Testimoni.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const data = [
  {
    avatar: AVTR1,
    name: "-Peggy Tobing",
    review: `"Anak-anakku, keluarga, dan para tamu sangat puas dengan pelayanan yang diberikan, terutama makanan katering dari Paket."`,
  },
  {
    avatar: AVTR2,
    name: "- Fortson & Renata",
    review: `" Setelah sekian lama tertunda karena keadaan sekarang, puji syukur acara lancar dan keluarga besar memuji suasana saat pernikahan kamu."
`,
  },
  {
    avatar: AVTR3,
    name: "April & Igo",
    review: `" Acara kita sukses melampaui ekspetasi aku dan suami, acaranya teratur dengan baik. Semakin meroket ! "`,
  },
]
const Testimoni = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review }, i) => {
          return (
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimoni
