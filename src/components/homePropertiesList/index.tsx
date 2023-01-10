import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Lazy, Pagination, Navigation } from "swiper"
import "./index.scss"
import CardProperty from "../cardProperty"
import property1 from "../../images/property1.jpg"
import property2 from "../../images/property2.jpg"


const HomePropertiesList: React.FC = () => {
  const data = [{
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
    url: "/eid",
    image: property1
  }, {
    propId: "VRC/SD221/XR720B",
    location: "DAMAC Hills 2",
    url: "/eid",
    image: property2
  }]

  return (
    <div className="home-property-list-wrap">
      <h2 className="home-section__title">My Properties</h2>
      <ul className="home-property-list">
        {data.map(property => (
          <li className="home-property-list__li">
            <CardProperty data={property} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePropertiesList
