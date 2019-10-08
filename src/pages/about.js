import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/banner.sass'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Banner class_suffix="about"/>
        </Layout>
    )

} 
export default AboutPage
