import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/about.sass'

const JoinPage = () => {
    return (
        <Layout>
            <SEO title="Join" />
            <Banner class_suffix="deep"/>
            <div className="about-container">
                <div className="about-content">
                    <a href="https://forms.gle/g3Dn81zGYw5sjJeS6">
                        <button className="signup-button">SIGN UP NOW</button>
                    </a>
                    <p>
                        Join us for weekly lessons on InfoSec and CySec fundamentals as well as talks and networking events with industry professionals.
                    </p>
                    <h1>How To Join</h1>
                    <p>
                        <ol>
                            <li>Provide us with your details via the <a href="https://forms.gle/g3Dn81zGYw5sjJeS6">sign up form</a>.</li>
                            {/*<li>Come see us any time (e.g. workshops, events) to make payment, or see the signup form for bank details if you prefer to pay via bank transfer.</li>*/}
                        </ol>
                        {/*Membership is $5 annually for University of Melbourne students. <span style={{ fontSize: '9px' }}><br/>(very worth it for a year of weekly pizza and awesome events)</span>.*/}
                        There is no membership fee for the rest of 2020.
                        <br/><br/>
                        Feel free to join our <a href="https://discord.gg/sUAJ9b3">Discord server</a> where we discuss challenges and post details about upcoming events.
                    </p>
                    <h1>Workshops</h1>
                    <p>
                        Weekly workshops typically take place throughout the semester on <b>Thursdays</b> from <b>1:15pm - 3pm</b> at some location in the Parkville campus (see the <Link to="/events">events page</Link> or our <a href="https://facebook.com/uomisc">Facebook page</a> for more details about workshops and other events). These workshops are aimed at giving you essential knowledge and letting you improve your practical skills with custom designed CTF-style challenges. We cover a range of topics including:
                    <ul>
                        <li>General Linux Skills</li>
                        <li>Web Application Security</li>
                        <li>Mobile Security</li>
                        <li>Reverse Engineering</li>
                        <li>Binary Exploitation</li>
                        <li>Forensics</li>
                        <li>Steganography</li>
                        <li>Cryptography</li>
                        <li>Penetration Testing</li>
                    </ul>
                    </p>
                    <h1>Constitution</h1>
                    <p>The club's constitution can be found <a href="/misc-constitution-2018aug.pdf">here</a>.</p>
                </div>
            </div>
        </Layout>
    )

} 
export default JoinPage
