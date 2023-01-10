import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import HomeWhatsNew from "../components/homeWhatsNew"
import QuickActions from "../components/quickActions"
import PrimaryCardGrid from "../components/primaryCardGrid"
import HomeHelp from "../components/homeHelp"
import FloatingHelp from "../components/floatingHelp"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO />
      <HomeWhatsNew />
      <QuickActions />
      <PrimaryCardGrid />
      <HomeHelp />
      <FloatingHelp />
    </Layout>
  )
}

export default IndexPage
