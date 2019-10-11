import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/404.sass'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <center>
            <h1 style={{ fontSize: '800%' }}>404 NOT FOUND</h1>
            <p style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>The 404 (Not Found) status code indicates that the origin server did
 not find a current representation for the target resource or is not
 willing to disclose that one exists. A 404 status code does not
 indicate whether this lack of representation is temporary or
 permanent; the 410 (Gone) status code is preferred over 404 if the
 origin server knows, presumably through some configurable means, that
 the condition is likely to be permanent.<br/><br/><br/><br/>
            <span style={{ fontSize: "10px" }}>What that means is... you may not have been able to find the page you were looking for, but if you look close enough around this page, you might find a flag!</span></p>
        </center>
    </Layout>
)

export default NotFoundPage
