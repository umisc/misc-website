import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from '../components/header.js'

import '../styles/prism-onedark.css'
import 'prismjs/plugins/command-line/prism-command-line.css'
import 'katex/dist/katex.min.css'
import '../styles/blog.sass'
import 'typeface-fira-sans'

export default function Template({ data, pageContext }) {
    const { markdownRemark: post } = data
    const { prev, next } = pageContext
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
                <hr />
                <div className="blog-post-footer">
                    {prev && (
                        <Link
                            to={prev.frontmatter.path}
                            rel="prev"
                            className="prev-link"
                        >
                            ← {prev.frontmatter.title}
                        </Link>
                    )}
                    {next && (
                        <Link
                            to={next.frontmatter.path}
                            rel="next"
                            className="next-link"
                        >
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </div>
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