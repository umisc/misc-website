import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/events.sass'

const EventsPage = ({ data }) => {
    const { edges: events } = data.allMarkdownRemark
    const past_events = events.filter(({ node: e }) => !is_curr_month(e.frontmatter.date))
    const curr_events = events.filter(({node: e}) => is_curr_month(e.frontmatter.date))
    return (
        <Layout>
            <SEO title="MISC - Events" />
            <div className="events-page-container">
                <h1>On This Month</h1>
                {curr_events.length == 0 ? <div className="no-events">Nothing yet... Check back later this month!</div> : 
                    <div className="events-items-contaner">
                        {curr_events.map(({ node: e }) => EventsPageItem(e.frontmatter))}
                    </div>
                }
                <h1>Past Events</h1>
                <div className="events-items-container">
                    {past_events.map(({ node: e }) => EventsPageItem(e.frontmatter))}
                </div>
            </div>
        </Layout>
    )
}

const EventsPageItem = ({ path, image: { childImageSharp: { fluid } }, title, date }) => {
    return (
        <div className="events-page-item" key={path}>
            <Link to={path}>
                <div className="image-container">
                    <Img fluid={fluid} />
                </div>
                <div className="text">
                    <span className="title">{title}</span>
                    <br/>
                    <span className="details">{date}</span>
                </div>
            </Link>
        </div>
    )
}

const is_curr_month = date => {
    var curr_date = new Date()
    var targ_date = new Date(date)
    return curr_date.getYear() == targ_date.getYear() && curr_date.getMonth() == targ_date.getMonth()
}

export const pageQuery = graphql`
    query EventsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "\/events\/" } },
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        image {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
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
