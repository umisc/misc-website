import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/index.sass'
import logo_svg from '../images/umisc_logo_white.png'

const IndexPage = (props) => {
    return (
        <div className="index-wrapper">
            <a href="https://ctfd.umisc.info/about">
                <button className="ctfd-button"><i className="icon-flag"></i> PLAY OUR 24/7 CTF</button>
            </a>
            <Layout>
                <SEO title="Home" />
                <Banner />
                <div className="index-container">
                    <div className="misc-logo-container">
                        <img src={logo_svg} />
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: '<!-- MISCWEBCTF{yes_this_site_is_filled_with_more_flags_like_this_one_try_and_find_them_all!} flags can be submitted on our 24/7 CTF at https://ctfd.umisc.info !! -->' }}></span>
                    <div className="titles-container">
                        <div className="title">University of Melbourne Information Security Club</div>
                        <div className="subtitle">A Community of White Hat Hackers.</div>
                        <AniLink fade duration={0.2} to="/join"><button className="join-button">guest@misc:~ $ <strong>join</strong></button></AniLink>
                    </div>
                </div>
            </Layout>
        </div>
    )
}


export default IndexPage
