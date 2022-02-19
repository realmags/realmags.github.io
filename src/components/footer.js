import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

export default function Footer() {
    return (
        <footer
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '5rem'
        }}
        >
            <p>© 2022 Cagayan de Oro</p>
            <span>
                <AnchorLink to='/#main'>Back to Top</AnchorLink>
            </span>
        </footer>
    )
}