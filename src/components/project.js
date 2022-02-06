import React from 'react';
import PropTypes from 'prop-types'
import { StaticImage } from "gatsby-plugin-image"

import Section from './section'
import * as css from '../styles/project.module.css'

export default function Project() {
    const test = [1,2,3,4]
    return (
        <Section title='Projects'>
            <div className={css.container}>
                {test.map((value, index) => {
                    if(index % 2 !== 0) {
                        return (
                            <ProjectCard
                            isEven
                            title='Hallyu Store - Online Menu'
                            tags='Design, Development' />
                        )
                    }
                    return (
                        <ProjectCard
                        title='Hallyu Store - Online Menu'
                        tags='Design, Development' />
                    )
                })}
            </div>
        </Section>
    );
}

// ! add img from cms
const ProjectCard = ({title, tags, isEven}) => {
    return (
        <div className={`${css.card} ${isEven ? css.transform : ''}`}>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={320}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
            />
            <p className={css.title}>{title}</p>
            <p className={css.tags}>{tags}</p>
        </div>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    isEven: PropTypes.bool
}