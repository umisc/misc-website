import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const NewsPage = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark
    return (
        <div className="news-page-container">
            <Helmet title="MISC - News" />
            {posts.map(({ node: post }) => {
                return (
                    <div className="news-page-item" key={post.frontmatter.path}>
                        <h1>
                            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                        </h1>
                        <div className="news-page-item-details">
                            <span className="author">{post.frontmatter.author}</span>
                            <span className="date">{post.frontmatter.date}</span>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export const pageQuery = graphql`
    query NewsQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        author
                    }
                }
            }
        }
    }
`

export default NewsPage
