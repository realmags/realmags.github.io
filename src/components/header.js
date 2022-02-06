import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import {AnchorLink} from 'gatsby-plugin-anchor-links'

import * as css from '../styles/header.module.css'
import {LogoBg} from '../assets/svg-files'

const Header = ({ siteTitle }) => (
  <header className={css.header}>
    <span className={css.titleContainer}>
      <LogoBg />
      <span className={css.titleText}>{siteTitle}</span>
    </span>
    <nav>
      <ul className={css.navList}>
        <li className={css.navItem}><AnchorLink to='/#about'>About</AnchorLink></li>
        <li className={css.navItem}><AnchorLink to='/#projects'>Projects</AnchorLink></li>
        <li className={css.navItem}><AnchorLink to='/#contact'>Contact</AnchorLink></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
