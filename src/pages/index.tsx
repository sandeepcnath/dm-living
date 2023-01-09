import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import QuickActions from "../components/quickActions"
import PrimaryCardGrid from "../components/primaryCardGrid"
import HomeHelp from "../components/homeHelp"
import ImageSupport from "../images/icons/support.svg"
import ImageWhatsapp from "../images/icons/whatsapp.svg"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <QuickActions />
      <PrimaryCardGrid />
      <HomeHelp />
      <div className="fixed-help">
        <a href="wa.me/+971131231231" className="fixed-help__icon" title="Chat with us in WhatsApp">
          <img src={ImageWhatsapp} alt="" />
        </a>
        <a href="wa.me/+971131231231" className="fixed-help__icon" title="Chat with us">
          <img src={ImageSupport} alt="" />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
