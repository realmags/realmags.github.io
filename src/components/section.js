import React, {useEffect} from 'react';
import PropTypes from 'prop-types'

// ! react-intersection-observer
import {useInView} from 'react-intersection-observer'
import {useAnimation, motion} from 'framer-motion'

import * as css from '../styles/section.module.css'

export default function Section({title, children, to}) {
    const animation = useAnimation()
    const [titleRef, inView] = useInView({
        triggerOnce: true,
    })
    const variants = {
        initial: {
            width: '0%',
        },
        visible: {
            width: '100%',
            transition: {
                duration: 5,
                ease: [.19,1,.22,1],
            },
        }
    }

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } else {
            animation.start('initial')
        }

    }, [animation, inView]);
    

    return (
        <section className={css.section} id={to}>
            <div ref={titleRef} className={css.title}>
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