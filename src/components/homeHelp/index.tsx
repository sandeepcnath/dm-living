import React from "react"
import CardIconText from "../cardIconText"
import "./index.scss"

const HomeHelp: React.FC = () => {
  const data = [{
    title: "via WhatsApp",
    text: "Connect with us on WhatsApp instantly to solve your queries.",
    externalUrl: true,
    url: "wa.me/fsfsdf",
    actionText: "Connect now",
    image: "supportWhatsapp"
  }, {
    title: "Support ticket",
    text: "Raise a support ticket and our team will get back to you within 12 hours.",
    externalUrl: false,
    url: "/services/request",
    actionText: "Raise a support ticket",
    image: "supportTicket"
  }, {
    title: "FAQ’s",
    text: "Here are frequently asked questions. Might help you as well.",
    externalUrl: false,
    url: "/services/faq",
    actionText: "View FAQ’s",
    image: "faq"
  }, {
    title: "Follow us",
    text: "Keep in touch with us on Our social channels.",
    socialShare: true,
    externalUrl: false,
    url: "/services/request",
    image: "followUs"
  }]

  return (
    <section className="home-section">
      <h2 className="home-section__title">Let us help you</h2>
      <ul className="home-help">
        {data.map(options => (
          <li className="">
            <CardIconText data={options} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HomeHelp
