import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/index.sass'
import logo_svg from '../images/umisc_logo_white.svg'

const IndexPage = () => (
  <Layout>
    <div className="index-container">
        <SEO title="Home" />
        <div className="misc-logo"></div>
        <div style={{ background: `url('${logo_svg}')` }}
            className="banner-arrow"></div>
    </div>
  </Layout>
)

export default IndexPage
