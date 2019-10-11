import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/index.sass'
import logo_svg from '../images/umisc_logo_white.svg'

const IndexPage = (props) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Banner />
            <div className="index-container">
                <div className="misc-logo-container">
                    <img src={logo_svg} />
                </div>
                <span dangerouslySetInnerHTML={{ __html: '<!-- MISCWEBCTF{yes_this_site_is_filled_with_more_flags_like_this_one_try_and_find_them_all!} -->' }}></span>
                <div className="titles-container">
                    <div className="title">University of Melbourne Information Security Club</div>
                    <div className="subtitle">A Community of White Hat Hackers.</div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc6yxrJFwokhd7GiJGSdd7YUn8kDvk4AGsnfjYv6yloEVuUaA/viewform"><button className="join-button">guest@misc:~ $ <strong>join</strong></button></a>
                </div>
            </div>
        </Layout>
    )
}


export default IndexPage
