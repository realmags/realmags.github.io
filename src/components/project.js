import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
// import useDimensions from 'react-use-dimensions'

import Section from './section'
import * as css from '../styles/project.module.css'

export default function Project() {
    const {projects} = useStaticQuery(graphql`
        query AllProjects {
            projects: allGraphCmsProject {
                nodes {
                    title
                    tags
                    slug
                    bannerImage {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
                            }
                        }
                        url
                    }
                }
            }
        }
    `)

    return (
        <Section title='Projects' to='projects'>
            <div className={css.container}>
                {projects.nodes.map(({title, tags, slug, bannerImage}, index) => {
                    if(index % 2 !== 0) {
                        return (
                            <ProjectCard
                            key={slug}
                            slug={slug}
                            title={title}
                            tags={tags.join(', ')}
                            bannerImage={bannerImage}
                            isEven
                            />
                            )
                        }
                        return (
                            <ProjectCard 
                            key={slug}
                            slug={slug}
                            title={title}
                            tags={tags.join(', ')}
                            bannerImage={bannerImage}
                        />
                    )
                })}
            </div>
        </Section>
    );
}

const ProjectCard = ({title, tags, slug, bannerImage, isEven}) => {
    return (
        <Link to={`/projects/${slug}`} >
            <div className={`${css.card} ${isEven ? css.transform : ''}`}>
                {/* this is wrapper for image for animation */}
                <div className={css.imgBg} >
                    <GatsbyImage 
                    image={bannerImage.localFile.childImageSharp.gatsbyImageData}
                    alt={title}
                    style={{
                        background: 'transparent'
                    }}
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
    slug: PropTypes.string.isRequired,
    bannerImage: PropTypes.object.isRequired,
    isEven: PropTypes.bool
}