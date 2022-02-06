import React from 'react';

// import { BackSlash, FrontSlash } from '../assets/svg-files';
import * as css from '../styles/banner.module.css'

export default function Banner() {
  return (
      <div className={css.container}>
          <div className={css.heading}>
              <h1 className={css.headingText}>K<em>e</em>nt Bry<em>a</em>n<br/>C. Magli<em>n</em>ao</h1>
              <p className={css.subtitle}>You can call me "Mags," all my friends do.
              I like to design sickening websites and turn them to reality.</p>
          </div>
          <div className={css.subheading}>
              <p className={css.subheadingText}>
                  <span className={css.article}>A</span>
                  <span className={css.content}>
                    <span className={css.role}>
                        <span className={css.first}>front-end</span>
                        <span className={css.second}>developer</span>
                    </span>
                    <span className={css.divider}>
                        <span>/</span>
                        {/* <BackSlash /> */}
                        {/* <FrontSlash /> */}
                    </span>
                    <span className={css.role}>
                        <span className={css.first}>computer</span>
                        <span className={css.second}>engineer</span>
                    </span>
                  </span>
              </p>
          </div>
      </div>
  );
}
