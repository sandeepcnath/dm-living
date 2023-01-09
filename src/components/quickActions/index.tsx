import React from "react"
import CardQuickActions from "../cardQuickActions"
import "./index.scss"

import imgAmenities from "../../images/icons/amenities.png"
import imgRequest from "../../images/icons/request.png"
import imgAutopay from "../../images/icons/autopay.png"
import imgStatement from "../../images/icons/statement.png"
import imgPayments from "../../images/icons/payments.png"
import imgAppointment from "../../images/icons/appointment.png"
import imgMaintenance from "../../images/icons/maintenance.png"


const QuickActions: React.FC = () => {
  const data = [{
    title: "Amenities",
    url: "/services/amenities",
    image: imgAmenities
  }, {
    title: "Raise a request",
    url: "/services/request",
    image: imgRequest
  }, {
    title: "AutoPay",
    url: "/services/autopay",
    image: imgAutopay
  }, {
    title: "Statement of account",
    url: "/services/statement",
    image: imgStatement
  }, {
    title: "Payments",
    url: "/services/payments",
    image: imgPayments
  }, {
    title: "Appointment",
    url: "/services/appointment",
    image: imgAppointment
  }, {
    title: "Maintenance",
    url: "/services/maintenance",
    image: imgMaintenance
  }]

  return (
    <section className="home-section">
      <ul className="quick-actions-list">
        {data.map(action => (
          <li className="quick-actions-list__li">
            {/* <img src={action.image} /> */}
            <CardQuickActions data={action} />
          </li>
        ))}

      </ul>
    </section>
  )
}

export default QuickActions
