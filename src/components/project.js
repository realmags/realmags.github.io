import React from 'react';
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
// import useDimensions from 'react-use-dimensions'

import Section from './section'
import * as css from '../styles/project.module.css'

export default function Project() {
    // ! sort query by rank
    const {projects} = useStaticQuery(graphql`
        query AllPosts {
            projects: allGraphCmsPost {
                nodes {
                    title
                    tags
                    slug
                    thumbnail {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
                            }
                        }
                        fileName
                    }
                }
            }
        }
    `)

    return (
        <Section title='Projects' to='projects'>
            <div className={css.container}>
                {projects.nodes.map(({title, tags, slug, thumbnail}, index) => {
                    if(index % 2 !== 0) {
                        return (
                            <ProjectCard
                            key={slug}
                            slug={slug}
                            title={title}
                            tags={tags.join(', ')}
                            thumbnail={thumbnail}
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
                            thumbnail={thumbnail}
                        />
                    )
                })}
            </div>
        </Section>
    );
}

const ProjectCard = ({title, tags, slug, thumbnail, isEven}) => {
    return (
        <Link to={`/projects/${slug}`} >
            <div className={`${css.card} ${isEven ? css.transform : ''}`}>
                {/* this is wrapper for image for animation */}
                <div className={css.imgBg} >
                    <GatsbyImage 
                    image={thumbnail.localFile.childImageSharp.gatsbyImageData}
                    alt={thumbnail.fileName}
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
    thumbnail: PropTypes.object.isRequired,
    isEven: PropTypes.bool
}