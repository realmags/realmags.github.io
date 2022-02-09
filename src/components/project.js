import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';
import useDimensions from 'react-use-dimensions'

import Section from './section'
import * as css from '../styles/project.module.css'
import {imgBg} from '../styles/project-page.module.css'

export default function Project() {
    const test = [1,2,3,4]
    return (
        <Section title='Projects' to='projects'>
            <div className={css.container}>
                {test.map((value, index) => {
                    if(index % 2 !== 0) {
                        return (
                            <ProjectCard
                            key={index}
                            id={index}
                            isEven
                            title='Hallyu Store - Online Menu'
                            tags='Design, Development' />
                        )
                    }
                    return (
                        <ProjectCard
                        key={index}
                        id={index}
                        title='Hallyu Store - Online Menu'
                        tags='Design, Development' />
                    )
                })}
            </div>
        </Section>
    );
}

// ! add img from cms
const ProjectCard = ({title, tags, isEven, id}) => {
    // const [ref, {x, y, width, height, top, right, bottom, left}] = useMeasure()
    // const [ref, {x, y, width, height}] = useDimensions()
    const [ref, imageDims] = useDimensions()

    // useEffect(() => {
    //   console.log(`project ${id}`, x, y, width, height)
    
    // }, [x, y, width, height, id])
    

    return (
        <Link to='/project-page/' state={imageDims}>
            <div className={`${css.card} ${isEven ? css.transform : ''}`}>
                {/* this is wrapper for image for animation */}
                <div ref={ref} className={css.imgBg} >
                    <StaticImage
                        src="../images/gatsby-astronaut.png"
                        // width={"100%"}
                        // height={"100%"}
                        aspectRatio={1/2}
                        // layout='fullWidth'
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt="A Gatsby astronaut"
                    />
                </div>
                <p className={css.title}>{title}</p>
                <p className={css.tags}>{tags}</p>
            </div>
        </Link>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    isEven: PropTypes.bool
}