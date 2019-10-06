const { graphql } = require('gatsby')
const path = require('path')

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blog_post_template = path.resolve('src/templates/blog-post.js')

    const res = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)

    if(res.errors) {
        reporter.panicOnBuild('Error while creating blog pages (GraphQL query)')
        return
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blog_post_template,
            context: {}
        })
    })
}
