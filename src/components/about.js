import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Section from './section';
import * as css from '../styles/about.module.css'

export default function About() {
    return (
        <Section title='About' to='about'>
            <div className={css.container}>
                <div className={css.aboutWrapper}>
                    <StaticImage
                    src="../images/me.jpg"
                    width={500}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="Me posing by the bamboos"
                    style={{ marginBottom: `2rem` }}
                    />
                    <div className={css.aboutText}>
                        <p>I am a self-taught developer who always looks for ways
                            to expand what I know. As such, I am willing to learn
                            and adapt to new technologies.
                        </p>
                        <p><em>I am very much open to employment offers
                            and intern opportunities.</em>
                        </p>
                    </div>
                </div>
                <div className={css.skillsWrapper}>
                    <h3 className={css.skillsHeading}>
                        <span>What are</span>
                        <span>my <em>skills</em>?</span>
                    </h3>
                    <div className={css.techWrapper}>
                        <div className={css.techCard}>
                            <div className={css.techContainer}>
                                {/* svgs here in grid */}
                            </div>
                            <p>Programming Languages</p>
                        </div>
                        <div className={css.techCard}>
                            <div className={css.techContainer}>
                                {/* svgs here in grid */}
                            </div>
                            <p>Web Technologies</p>
                        </div>
                        <div className={css.techCard}>
                            <div className={css.techContainer}>
                                {/* svgs here in grid */}
                            </div>
                            <p>Principles</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
