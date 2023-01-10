import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Lazy, Pagination, Navigation } from "swiper"
import "./index.scss"

import imgBanner from "../../images/banner3.jpg"


const HomeWhatsNew: React.FC = () => {
  const data = [{
    title: "Eid Mubarak",
    url: "/eid",
    image: imgBanner
  }, {
    title: "Eid Mubarak",
    url: "/eid",
    image: imgBanner
  }, {
    title: "Eid Mubarak",
    url: "/eid",
    image: imgBanner
  }, {
    title: "Eid Mubarak",
    url: "/eid",
    image: imgBanner
  }, {
    title: "Eid Mubarak",
    url: "/eid",
    image: imgBanner
  }]

  return (
    <div className="whatsnew-wrap">
      <h2 className="home-section__title">What’s New</h2>
      <img className="whatsnew__image" src={imgBanner} alt="Eid Mubarak" />
    </div>
  )
}

export default HomeWhatsNew
