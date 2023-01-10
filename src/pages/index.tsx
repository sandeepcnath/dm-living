import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import HomePropertiesList from "../components/homePropertiesList"
import HomeWhatsNew from "../components/homeWhatsNew"
import QuickActions from "../components/quickActions"
import PrimaryCardGrid from "../components/primaryCardGrid"
import HomeHelp from "../components/homeHelp"
import FloatingHelp from "../components/floatingHelp"
import "../styles/home.scss"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <section className="home-section home-banner">
        <HomePropertiesList />
        <HomeWhatsNew />
      </section>
      <QuickActions />
      <PrimaryCardGrid />
      <HomeHelp />
      <FloatingHelp />
    </Layout>
  )
}

export default IndexPage
