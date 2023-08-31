import * as React from "react"

import Footer from './Footer'


function Layout({ children }) {
  return (
    <>
      <nav>nav</nav>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
