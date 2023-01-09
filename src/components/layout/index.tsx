import * as React from "react"
import Header from "../header"
import Footer from "../footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <Header location={location} title={title} /> */}
      <main id="main">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
