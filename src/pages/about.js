import React from 'react'

import Link from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/about.sass'
import accenture_logo from '../images/accenture-logo.png'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About" />
            <Banner class_suffix="deep"/>
            <div className="about-container">
                <div className="about-content">
                    <h1>SECURE. PROTECT. INFILTRATE.</h1>
                    <p>
                        Established in 2017, The University of Melbourne's Information Security Club (UMISC) provides an inclusive community of like-minded students, who are either working towards a career in cybersecurity, or just looking to broaden their skillset. The club was originally found with the intention of building a team for CySCA, an annual Capture The Flag (CTF) competition that pits Australian Universities against each other in a hacking competition. Our members come from various backgrounds including Arts, Science and Commerce, and keeping them in mind, our workshops and events are organised to cater to members of all skill levels.
                    </p>
                    <h1>Our Aims</h1>
                    <ul>
                        <li>To promote/ facilitate the discussion of cyber-security pertaining to the modern state of technology and politics</li>
                        <li>To legally and ethically improve the offensive security skills of the club’s participants in a practical manner</li>
                        <li>To teach corporate network defence, mitigation and defensive security to members of the club</li>
                        <li>To participate in CTFs on behalf of the University</li>
                        <li>To connect with industry professionals such as “Red Teamers”, “Blue Teamers”, journalists, engineers, etc. through guest lectures</li>
                        <li>To prepare club members with the skills and network required to pursue a career in cybersecurity</li>
                    </ul>
                    <h1>Our Committee</h1>
                    <p> Information about our current and past committees can be found <Link to="/committee">here.</Link></p>
                    <h1>Our Sponsors</h1>
                    <center>
                        <div className="sponsors-logos">
                            <a href="https://www.accenture.com/au-en"><img src={accenture_logo} className="accenture-logo"/></a>
                        </div>
                    </center>
                </div>
            </div>
        </Layout>
    )

} 
export default AboutPage
