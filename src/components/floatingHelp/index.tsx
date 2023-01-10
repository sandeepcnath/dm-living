import React from "react"
import "./index.scss"

import ImageSupport from "../../images/icons/support.svg"
import ImageWhatsapp from "../../images/icons/whatsapp.svg"


const FloatingHelp: React.FC = () => {
  return (
    <div className="fixed-help">
      <a href="wa.me/+971131231231" className="fixed-help__icon" title="Chat with us in WhatsApp">
        <img src={ImageWhatsapp} alt="" />
      </a>
      <a href="wa.me/+971131231231" className="fixed-help__icon" title="Chat with us">
        <img src={ImageSupport} alt="" />
      </a>
    </div>
  )
}

export default FloatingHelp
