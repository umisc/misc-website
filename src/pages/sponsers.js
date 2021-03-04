import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import atlassian_logo from '../images/atlassian-logo.png'
import cybersecpeople_logo from '../images/cybersecpeople-logo.png'
import dronesec_logo from '../images/dronesec-logo-transparent.png'
import kaspersky_logo from '../images/kaspersky-logo.png'
import pentesterlab_logo from '../images/pentesterlab-logo.jpg'
import commbank_logo from '../images/CommBank-Logo.png'
import optiver_logo from '../images/optiver-logo.png'
import accenture_logo from '../images/accenture-logo.png'
import puresecurity_logo from '../images/Pure Security Transparent.png'


import '../styles/sponsers.sass'

const SponsersPage = () => {
    return (
        <Layout>
            <SEO title="Sponsers" />
            <div className="gallery-container">
                <h1 className="gold-heading">Gold Sponsers</h1>
                <div className="sponsors-container">
	                <div className="sponsors-logos">
	                    <a href="https://www.atlassian.com/"><img src={atlassian_logo} className="atlassian-logo"/></a>
	                </div>
	                <div className="sponsors-logos">
	                    <a href="https://www.cybersecpeople.com/"><img src={cybersecpeople_logo} className="cybersecpeople-logo"/></a>
	                </div>
	                <div className="sponsors-logos">
                        <a href="https://dronesec.com/"><img src={dronesec_logo} className="dronesec-logo"/></a>
                    </div>
                    <div className="sponsors-logos">
                        <a href="https://www.kaspersky.com.au/"><img src={kaspersky_logo} className="kaspersky-logo"/></a>
                    </div>
                    <div className="sponsors-logos">
                        <a href="https://pentesterlab.com/"><img src={pentesterlab_logo} className="pentesterlab-logo"/></a>
                    </div>
                    <div className="sponsors-logos">
                        <a href="https://www.commbank.com.au/"><img src={commbank_logo} className="commbank-logo"/></a>
                    </div>
                    <div className="sponsors-logos">
                        <a href="https://pure.security/"><img src={puresecurity_logo} className="puresecurity-logo"/></a>
                    </div>
                </div>
                <h1 className="silver-heading">Silver Sponsers</h1>
                <div className="sponsors-container">
                <div className="sponsors-logos">
                    <a href="https://www.optiver.com/"><img src={optiver_logo} className="optiver-logo"/></a>
                </div>
                <div className="sponsors-logos">
                    <a href="https://www.accenture.com/au-en"><img src={accenture_logo} className="accenture-logo"/></a>
                </div>
                </div>
            </div>
        </Layout>
    )

} 
export default SponsersPage
