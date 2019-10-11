import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/events.sass'

const EventsPage = ({ data }) => {
    const { edges: events } = data.allMarkdownRemark
    return (
        <Layout>
            <SEO title="MISC - Events" />
            <div className="news-page-container">
                {events.map(({ node: e }) => {
                    return (
                        <div className="events-page-item" key={e.frontmatter.path}>
                            <Link to={e.frontmatter.path}>
                                <Img fixed={e.frontmatter.image.childImageSharp.fixed} />
                            </Link>
                        </div>
                    )
                }) }
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query EventsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "\/events\/" } },
            sort: { order: DESC, fields: [frontmatter___created_on] }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        created_on(formatString: "MMMM DD, YYYY")
                        path
                        image {
                            childImageSharp {
                                fixed {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default EventsPage
