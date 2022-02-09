import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
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
    <motion.main exit={{opacity: 0}}>
      <Seo title="Home" />
      <Banner />
      <About />
      <Project />
      <Contact />
    </motion.main>
    <p>
      <Link to="/project-page/">Go to project page</Link> <br />
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link> */}
    </p>
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
