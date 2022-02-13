/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import { AnimatePresence } from "framer-motion"

import "@fontsource/playfair-display/variable.css"
import "@fontsource/playfair-display/variable-italic.css"
import "@fontsource/raleway/variable.css"
import '../styles/normalize.css'
import * as css from '../styles/layout.module.css'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <div className={css.wrapper}>
        <div className={css.layout}>
          {children}
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
