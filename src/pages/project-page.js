import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

import * as css from '../styles/project-page.module.css'
import Seo from '../components/seo'

import { BackIcon, ExternalLinkIcon } from '../assets/svg-files';

export default function ProjectPage({id, location}) {
    const {x, y, width, height} = location.state
    const test = {
        title: 'Hallyu Store - Online Menu',
        description: 'A modest online menu solution that allows management of customer orders for a small food business.',
    }
    return (
        <div className={css.container}> 
            <Seo title='Project' />
            <InternalLink text='Back' to='/' icon={<BackIcon />} />
            <article className={css.contentWrapper}>
                <motion.h4 
                initial={{
                    opacity: 0,
                    y: -10,
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    delay: 1.6,
                    duration: 1,
                    ease: [0.6, 0.01, -0.05, 0.9]
                }}
                className={css.title}>{test.title}</motion.h4>
                <motion.div
                initial={{
                    // x: '50%',
                    y: "-50%",
                    width: '50%',
                    // height
                }}
                animate={{
                    x: 0,
                    y: 0,
                    width: '100%',
                    // height: '600px'
                }}
                transition={{
                    delay: 0.2,
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9]
                }}
                className={css.imgBg} >
                    {x, y, width, height}
                </motion.div>
                <div className={css.descWrapper}>
                    <span className={css.info}>info /</span>
                    <p className={css.description}>
                    {test.description}
                    </p>
                    <span className={css.year}>2020</span>
                </div>
                <div className={css.detailsWrapper}>
                    <div className={css.detailsContent}>
                        <span>The Challenge</span>
                        <p>{test.description}</p>
                    </div>
                    <div className={css.detailsContent}>
                        <span>The Solution</span>
                        <p>{test.description}</p>
                    </div>
                </div>
                <div className={css.imgsWrapper}>
                    {/* imgs */}
                </div>
                <ExternalLink text='View Demo'
                to='github.com'
                icon={<ExternalLinkIcon />} />
            </article>
        </div>
    )
}

const InternalLink = ({text, icon, to}) => {
    return (
        <div className={css.internalWrapper}>
            <Link to={to}>
                <Button text={text} icon={icon} />
            </Link>
        </div>
    )
}

const ExternalLink = ({text, icon, to}) => {
    return (
        <div className={css.externalWrapper}>
            <a href={to} target='_blank' rel='noreferrer'>
                <Button text={text} icon={icon} isReverse isIconSmall/>
            </a>
        </div>
    )
}

const Button = ({text, icon, isReverse, isIconSmall}) => {
    return (
        <span className={`${css.bttnWrapper} ${isReverse ? css.rowReverse : ''}`}>
            <span className={`${isIconSmall ? css.smallIcon : css.normalIcon}`}>{icon}</span>
            <button>{text}</button>
        </span>
    )
}