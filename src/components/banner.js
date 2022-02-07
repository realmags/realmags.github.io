import React from 'react';

import * as css from '../styles/banner.module.css'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Banner() {
    const yRange = [0, 0.2]
    const wghtRange = [400, 600]
    const {scrollYProgress} = useViewportScroll()
    const wght = useTransform(scrollYProgress, yRange, wghtRange)

    return (
        <div className={css.container}>
            <motion.div 
            className={css.heading}>
                <motion.h1
                style={{
                    fontWeight: wght,
                }}
                className={css.headingText}>
                    K<em>e</em>nt Bry<em>a</em>n
                    <br/>C. Magli<em>n</em>ao
                </motion.h1>
                <p className={css.subtitle}>You can call me "Mags," all my friends do.
                I like to design sickening websites and turn them to reality.</p>
            </motion.div>
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
