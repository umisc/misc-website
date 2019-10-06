import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export default function Template({ data }) {
    const { markdownRemark: post } = data
    return (
        <div className="blog-post-container">
            <Helmet title={`MISC - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <small>{post.frontmatter.date}</small>
                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
              html
              frontmatter {
                    date(formatString: "YYYY MMMM DD")
                    path
                    author
                    title
              }
        }
    }
`
