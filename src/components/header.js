import * as React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"
import {AnchorLink} from 'gatsby-plugin-anchor-links'
import {motion} from 'framer-motion'

import * as css from '../styles/header.module.css'
import {LogoBg} from '../assets/svg-files'

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <motion.header
    initial={{
      opacity: 0,
      y: -50
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    transition={{
      ease: 'easeInOut',
      duration: 0.8,
      delay: 0.6
    }}
    className={css.header}>
      <span className={css.titleContainer}>
        <LogoBg />
        <span className={css.titleText}>{data.site.siteMetadata?.title || `Title`}</span>
      </span>
      <nav>
        <ul className={css.navList}>
          <li className={css.navItem}><AnchorLink to='/#about'>About</AnchorLink></li>
          <li className={css.navItem}><AnchorLink to='/#projects'>Projects</AnchorLink></li>
          <li className={css.navItem}><AnchorLink to='/#contact'>Contact</AnchorLink></li>
        </ul>
      </nav>
    </motion.header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
