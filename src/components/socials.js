import React from 'react'

import '../styles/icomoon.css'
import '../styles/socials.sass'

const Socials = () => (
    <div className="socials-container">
        <SocialButton icon="facebook" link="https://facebook.com/uomisc" colour="#4267b2"/>
        <SocialButton icon="github" link="https://github.com/umisc" colour="#282828"/>
        <SocialButton icon="linkedin" link="https://www.linkedin.com/company/melbourne-information-security-club/" colour="#0077b5"/>
        <SocialButton icon="envelop" link="mailto:melb.info.sec.club@gmail.com" colour="#e173cb"/>
    </div>
)

const SocialButton = ({ icon, link, colour }) => (
    <a href={link} >
        <div style={{ background: colour, color: 'white' }} className="social-button">
            <div className={'icon-' + icon}></div>
        </div>
    </a>
)

export default Socials
