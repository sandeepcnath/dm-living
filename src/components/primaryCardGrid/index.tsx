import React from "react"
import CardImageTextHorizontal from "../cardImageTextHorizontal"
import "./index.scss"

import imgAmenities from "../../images/amenities.jpg"
import imgRequest from "../../images/move-in.jpg"


const PrimaryCardGrid: React.FC = () => {
  const data = [{
    title: "Amenities",
    subtitle: "Book the amenities of your building in one easy hub.",
    url: "/services/amenities",
    actionText: "Book now",
    image: imgAmenities
  }, {
    title: "Raise a request",
    subtitle: "Sea View Apartment",
    text: "AV2/SD156/XN1774C is ready to move in.",
    url: "/services/request",
    actionText: "Move in now",
    image: imgRequest
  }]

  return (
    <section className="home-section">
      <ul className="primary-card-grid">
        {data.map(action => (
          <li className="quick-actions-list__li">
            <CardImageTextHorizontal data={action} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PrimaryCardGrid
