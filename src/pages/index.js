import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/index.sass'
import 'typeface-oswald'
import logo_svg from '../images/umisc_logo_white.svg'

const IndexPage = (props) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Banner />
            <div className="index-container">
                <div style={{ background: `url('${logo_svg}')` }}
                    className="misc-logo"></div>
                <div className="titles-container">
                    <div className="title">University of Melbourne Information Security Club</div>
                    <div className="subtitle">A Community of White Hat Hackers.</div>
                    <button className="join-button">guest@misc:~ $ <strong>join</strong></button>
                </div>
            </div>
        </Layout>
    )
}


export default IndexPage
