import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'

// ! react-intersection-observer
import {useAnimation, motion} from 'framer-motion'

import * as css from '../styles/section.module.css'

export default function Section({title, children, to}) {
    const animation = useAnimation()
    const [inView, setInView] = useState(false);
    const variants = {
        initial: {
            width: '0%',
        },
        visible: {
            width: '100%',
            transition: {
                duration: 2,
                ease: [.19,1,.22,1],
            },
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setInView(true)
            console.log(inView);
        }, 5000);
        if (inView) {
            animation.start('visible')
        } else {
            animation.start('initial')
        }

        return () => {
            clearTimeout()
        }
    
    }, [animation, inView]);
    

    return (
        <section className={css.section} id={to}>
            <div className={css.title}>
                <h2>{title}</h2>
                {/* <span className={css.line}></span> */}
                <motion.hr 
                animate={animation}
                initial={'initial'}
                variants={variants}
                className={css.line}/>
            </div>
            {children}
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}