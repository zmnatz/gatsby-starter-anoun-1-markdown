import React from "react"
import Header from "./Header"
import Footer from "./Footer"

// import instagramIcon from "../images/icons/instagram-round-white-24px.svg"

import styles from "./blogLayout.module.scss"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={styles.siteContainer}>
        <Header />
        <div className={styles.siteMain}>{children}</div>
        <Footer />
      </div>
    )
  }
}

export default BlogLayout
