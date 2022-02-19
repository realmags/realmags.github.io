import React from 'react';
import {motion} from 'framer-motion'

import Section from './section';
import * as css from '../styles/contact.module.css'
import Facebook from '../assets/facebook.inline.svg'
import Github from '../assets/github.inline.svg'

const links = [
    {
        link: "https://www.facebook.com/kentbryan.maglinao", 
        icon: Facebook, 
        id: 'social-facebook',
        position: {y: -15, left: '50%'}
    },
    {
        link: "https://github.com/realmags",
        icon: Github,
        id: 'social-github',
        position: {y: 25, left: '80%'}
    }
]

export default function Contact() {
    return (
        <Section title='Contact' to='contact'>
            <div className={css.container}>
                <div className={css.mail}>
                    <h3>Wanna&nbsp;
                        <span className={css.emphasis}>collaborate</span>
                        <br />with me?
                    </h3>
                    <p>
                        <a href="mailto:kentbryan.maglinao@ustp.edu.ph?subject=Work Collab"
                        rel='noopener noreferrer'>
                        kentbryan.maglinao@ustp.edu.ph
                        </a>
                    </p>
                    {links.map(({link, icon, id, position}) => (
                        <SocialIcon 
                        link={link} 
                        icon={icon} 
                        animateY={position.y}
                        positionLeft={position.left}
                        key={id} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

const SocialIcon = ({link, icon, animateY, positionLeft, floatDuration}) => {
    return (
        <motion.span
        className={css.social}
        style={{
            '--left-val': positionLeft || 0,
            // '--top-val': top || 0
        }}
        animate={{
            y: [0, animateY],
        }}
        transition={{
            type: "tween",
            ease: [0.6, 0.05, -0.01, 0.9],
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
            },
          }}
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.3,
            },
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.3,
            },
          }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                {React.createElement(icon)}
            </a>
        </motion.span>
    )
}
