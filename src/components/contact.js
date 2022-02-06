import React from 'react';

import Section from './section';
import * as css from '../styles/contact.module.css'

export default function Contact() {
    return (
        <Section title='Contact'>
            <div className={css.container}>
                <div className={css.mail}>
                    <h3>Wanna &nbsp;
                        <span className={css.emphasis}>collaborate</span>
                        <br />with me?
                    </h3>
                    <p>
                        <a href="mailto:kentbryan.maglinao@ustp.edu.ph?subject=Work Collab"
                        rel='noopener noreferrer'>
                        kentbryan.maglinao@ustp.edu.ph
                        </a>
                    </p>
                </div>
            </div>
        </Section>
    );
}

