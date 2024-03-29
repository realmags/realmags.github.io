import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Section from "./section"
import * as css from "../styles/about.module.css"
import * as grid from "../styles/grid.module.css"

import Java from "../assets/java.inline.svg"
import CLang from "../assets/c-prog.inline.svg"
import MachineLearning from "../assets/machine-learning.inline.svg"
import Dev from "../assets/dev.inline.svg"
import UiDesign from "../assets/ui.inline.svg"
import Prototype from "../assets/proto.inline.svg"
import ReactWeb from "../assets/react.inline.svg"
import Gatsby from "../assets/gatsby.inline.svg"
// import Html from "../assets/html5.inline.svg"
// import Css from "../assets/css3.inline.svg"
import Php from "../assets/php.inline.svg"
import Laravel from "../assets/laravel.inline.svg"
import Javascript from "../assets/javascript.inline.svg"
import Nodejs from "../assets/nodejs.inline.svg"
import Typescript from "../assets/typescript.inline.svg"

export default function About() {
  return (
    <Section title="About" to="about">
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
            <p>
              I am a self-taught developer who always looks for ways to expand
              what I know. As such, I am willing to learn and adapt to new
              technologies.
            </p>
            <p>
              <em>
                I am very much open to employment offers and work opportunities.
              </em>
            </p>
          </div>
        </div>
        <div className={css.skillsWrapper}>
          <h3 className={css.skillsHeading}>
            <span>What are</span>
            <span>
              my <em>skills</em>?
            </span>
          </h3>
          <div className={css.techWrapper}>
            <div className={css.techCard}>
              <div className={`${css.techInner} ${grid.technologies}`}>
                <Icon id={"react"} icon={<ReactWeb />} label="React" />
                <Icon id={"gatsby"} icon={<Gatsby />} label="Gatsby" />
                <Icon id={"html"} icon={<Nodejs />} label="Node JS" />
                <Icon id={"css"} icon={<Typescript />} label="TypeScript" />
                <Icon id={"js"} icon={<Javascript />} label="JavaScript" />
                <Icon id={"php"} icon={<Php />} label="PHP" />
                <Icon id={"laravel"} icon={<Laravel />} label="Laravel" />
              </div>
              <p>Web Technologies</p>
            </div>
            <div className={css.techCard}>
              <div className={`${css.techInner} ${grid.process}`}>
                <Icon id="development" icon={<Dev />} label="Development" />
                <Icon id="ui" icon={<UiDesign />} label="Conceptualization" />
                <Icon id="prototype" icon={<Prototype />} label="Prototyping" />
              </div>
              <p>Process</p>
            </div>
            <div className={css.techCard}>
              <div className={`${css.techInner} ${grid.others}`}>
                <Icon
                  id="ml"
                  icon={<MachineLearning />}
                  label="Machine Learning"
                />
                <Icon id="c" icon={<CLang />} label="C" />
                <Icon id="java" icon={<Java />} label="Java" />
              </div>
              <p>Others</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Icon = ({ icon, id, label }) => {
  return (
    <span className={`${grid[id]} ${css.iconWrapper}`}>
      <span className={css.icon}>{icon}</span>
      <span className={css.label}>{label}</span>
    </span>
  )
}
