const { graphql } = require('gatsby')
const path = require('path')

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blog_post_template = path.resolve('src/templates/blog-post.js')
    const event_post_template = path.resolve('src/templates/event-post.js')

    const res = await graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
                edges {
                    node {
                        fileAbsolutePath
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

    var nodes = res.data.allMarkdownRemark.edges

    var blog_nodes = nodes.filter(({ node }) => get_post_type(node.fileAbsolutePath) == 'blog_post')
    blog_nodes.forEach(({ node }, i) => {
        var prev = i === 0 ? null : blog_nodes[i - 1].node
        var next = i === blog_nodes.length - 1 ? null : blog_nodes[i + 1].node
        createPage({
            path: node.frontmatter.path,
            component: blog_post_template,
            context: {
                prev,
                next
            }
        })
    })

    var event_nodes = nodes.filter(({ node }) => get_post_type(node.fileAbsolutePath) == 'event_post')
    event_nodes.forEach(({ node }, i) => {
        var prev = i === 0 ? null : event_nodes[i - 1].node
        var next = i === event_nodes.length - 1 ? null : event_nodes[i + 1].node
        createPage({
            path: node.frontmatter.path,
            component: event_post_template,
            context: {
                prev,
                next
            }
        })
    })
}

function get_post_type(abs_path) {
    if(/\/posts\//.test(abs_path)) {
        return 'blog_post'
    } else if(/\/events\//.test(abs_path)) {
        return 'event_post'
    }
    return ''
}
