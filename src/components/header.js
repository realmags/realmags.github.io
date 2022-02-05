import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

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
        <li className={css.navItem}><Link to='/'>About</Link></li>
        <li className={css.navItem}><Link to='/'>Contact</Link></li>
        <li className={css.navItem}><Link to='/'>Projects</Link></li>
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
