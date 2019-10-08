import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'

import '../styles/header.sass'

const Header = () => (
    <header>
        <div className="header-container">
            <h4 className="header-title">
                <AniLink fade to="/" className="header-link">
            UNIVERSITY OF MELBOURNE INFORMATION SECURITY CLUB
                </AniLink>
            </h4>

            <ul className="header-nav">
                <li>
                    <AniLink fade to="/about" activeClassName="active" className="hvr-underline-from-center about-link" >ABOUT
                    </AniLink>
                </li>
                <li>
                    <AniLink fade to="/news" activeClassName="active" className="hvr-underline-from-center news-link">
                        NEWS
                    </AniLink>
                </li>
                <li>
                    <AniLink fade to="/events" activeClassName="active" className="hvr-underline-from-center events-link">
                        EVENTS
                    </AniLink>
                </li>
            </ul>


        </div>
    </header>
)

export default Header
