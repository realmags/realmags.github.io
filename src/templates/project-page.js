import React from 'react';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import {GatsbyImage} from 'gatsby-plugin-image'

import * as css from '../styles/project-page.module.css'
import Seo from '../components/seo'

import { BackIcon, ExternalLinkIcon } from '../assets/svg-files';

export const query = graphql`
    query ProductQuery($id: String!) {
        project: graphCmsProject(id: {eq: $id}) {
            title
            description
            tags
            year
            solution
            challenge
            bannerImage {
                localFile {
                    childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR, height: 600)
                    }
                }
            }
            contentImages {
                localFile {
                    childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR, height: 600)
                    }
                }
            }
        }
    }
`

export default function ProjectPage({data: {project}}) {
    return (
        <div> 
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
                    duration: 0.8,
                    ease: [0.6, 0.01, -0.05, 0.9]
                }}
                className={css.title}>{project.title}</motion.h4>
                <motion.div
                initial={{
                    y: "-50%",
                    opacity: 0,
                    scale: 0.2,
                    width: '50%',
                    borderRadius: '100%'
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    width: '100%',
                    borderRadius: '0%'
                }}
                transition={{
                    delay: 0.2,
                    duration: 1.4,
                    ease: [0.6, 0.01, -0.05, 0.9]
                }}
                className={css.banner} >
                    <motion.div initial={{opacity: 0, scale: 1.1}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        delay: 2,
                        ease: [0.6, 0.01, -0.05, 0.9]
                    }}
                    className={css.bannerInner}>
                        {/* config image */}
                        <GatsbyImage
                        image={project.bannerImage.localFile.childImageSharp.gatsbyImageData}
                        alt={project.title}
                        // height={600}
                        style={{
                            margin: '0 auto'
                        }}
                        />
                    </motion.div>
                </motion.div>
                <div className={css.descWrapper}>
                    <span className={css.info}>info /</span>
                    <p className={css.description}>
                    {project.description}
                    </p>
                    <span className={css.year}>{project.year}</span>
                </div>
                <div className={css.detailsWrapper}>
                    <div className={css.detailsContent}>
                        <span>The Challenge</span>
                        <p>{project.challenge}</p>
                    </div>
                    <div className={css.detailsContent}>
                        <span>The Solution</span>
                        <p>{project.solution}</p>
                    </div>
                </div>
                <div className={css.imgsWrapper}>
                    {project.contentImages.map((image, index) => {
                        return (
                            <GatsbyImage
                            image={image.localFile.childImageSharp.gatsbyImageData}
                            alt={project.title}
                            key={`image-${index}`}
                            />
                        )
                    })}
                </div>
                {project.link ? 
                    <ExternalLink text='View Demo'
                    to={project.link}
                    icon={<ExternalLinkIcon />} /> : null
                }
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
            <span className={`${isIconSmall ? css.smallIcon : css.normalIcon}`}>
                {icon}
            </span>
            <button>{text}</button>
        </span>
    )
}