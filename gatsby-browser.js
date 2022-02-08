/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/layout';

export const wrapPageElement = ({element, props}) => {
    return <Layout {...props}>
        {element}
    </Layout>
}
