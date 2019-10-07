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
                            title
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

    var posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }, i) => {
        var prev = i === 0 ? null : posts[i - 1].node
        var next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
            path: node.frontmatter.path,
            component: blog_post_template,
            context: {
                prev,
                next
            }
        })
    })
}
