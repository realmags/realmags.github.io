import * as React from "react"
import { motion } from "framer-motion"

import Seo from "../components/seo"
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import Project from "../components/project"
import Contact from "../components/contact"

const IndexPage = () => (
  <>
    <Header />
    <motion.main exit={{opacity: 0}} id='main'>
      <Seo title="Home" />
      <Banner />
      <About />
      <Project />
      <Contact />
    </motion.main>
    <footer
      style={{
        marginTop: `2rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
)

export default IndexPage
