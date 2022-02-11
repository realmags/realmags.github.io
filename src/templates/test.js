import React, {useEffect} from 'react'
import { graphql } from 'gatsby'

// export const pageQuery = graphql`
//     query ProductPageQuery($id: String!) {
//         project: graphCmsProduct(id: {eq: $id}) {
//             title
//             description
//         }
//     }
// `


const Test = ({data: {project}}) => {
    // useEffect(() => {
    //   console.log(project)
    // }, [project])
    
    
    return (
    <>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
    </>
    )
}

export default Test