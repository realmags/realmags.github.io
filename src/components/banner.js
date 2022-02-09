import React from 'react';

import * as css from '../styles/banner.module.css'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Banner() {
    const yRange = [0, 0.2]
    const wghtRange = [600, 400]
    const {scrollYProgress} = useViewportScroll()
    const wght = useTransform(scrollYProgress, yRange, wghtRange)

    // variants
    const stagger = {
        animate: {
            transition: {
                // delayChildren: 0.,
                staggerChildren: 0.4
            }
        }
    }

    const headingAnim = {
        initial: {
            opacity: 0,
            y: 80
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
                // ease: 'easeIn',
                duration: 1
            }
        }
    }

    const subtitleAnim = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
                // ease: 'easeIn',
                // duration: 0.4
            }
        }
    }
    
    const subheadingAnim = {
        initial: {
            opacity: 0,
            y: -5
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: [.19,1,.22,1],
            duration: 2
        }
    }

    return (
        <motion.div 
        className={css.container}>
            <motion.div 
            variants={stagger}
            initial='initial'
            animate='animate'
            className={css.heading}>
                <motion.h1
                variants={headingAnim}
                style={{fontWeight: wght}}
                className={css.headingText}>
                    K<em>e</em>nt Bry<em>a</em>n
                    <br/>C. Magli<em>n</em>ao
                </motion.h1>
                <motion.p
                variants={subtitleAnim}
                className={css.subtitle}>
                    You can call me "Mags," all my friends do.
                    I like to design sickening websites and turn them to reality.
                </motion.p>
            </motion.div>
            <div className={css.subheading}>
                <p className={css.subheadingText}>
                    <motion.span 
                    // variants={subheadingAnim}
                    className={css.article}>A</motion.span>
                    <span className={css.content}>
                        <motion.span
                        // variants={subheadingAnim}
                        className={css.role}>
                            <motion.span 
                            className={css.first}>front-end</motion.span>
                            <motion.span 
                            className={css.second}>developer</motion.span>
                        </motion.span>
                        <motion.span
                        // variants={subheadingAnim}
                        className={css.divider}>
                            <span>/</span>
                        </motion.span>
                        <motion.span
                        // variants={subheadingAnim}
                        className={css.role}>
                            <motion.span 
                            className={css.first}>computer</motion.span>
                            <motion.span 
                            className={css.second}>engineer</motion.span>
                        </motion.span>
                    </span>
                </p>
            </div>
        </motion.div>
    );
}
