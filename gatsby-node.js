exports.createPages = async ({ graphql, actions: {createPage} }) => {
  // const { createPage } = actions
  const {
    data: {projects},
  } = await graphql(`
    query AllProjects {
      projects: allGraphCmsProject {
        nodes {
          id
          slug
        }
      }
    }
  `)

  projects.nodes.forEach(({id, slug}) =>
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve(`./src/templates/project-page.js`),
      context: {
        id,
      },
    })
  )
}
