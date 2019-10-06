import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/header.js'

import '../styles/prism-onedark.css'
import 'prismjs/plugins/command-line/prism-command-line.css'
import '../styles/blog.sass'
import 'typeface-fira-sans'

export default function Template({ data }) {
    const { markdownRemark: post } = data
    return (
        <div className="blog-post-container">
            <Helmet title={`MISC - ${post.frontmatter.title}`} />
            <Header />
            <div className="blog-post">
                <br />
                <div className="blog-post-header">
                    <h1 className="title">{post.frontmatter.title}</h1>
                    <span className="author">By <span className="author-name">{post.frontmatter.author}</span></span>
                    <span className="date">{post.frontmatter.date}</span>
                </div>
                <hr className="blog-header-separator"/>
                <br />
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
                    date(formatString: "MMMM DD, YYYY")
                    path
                    author
                    title
              }
        }
    }
`
