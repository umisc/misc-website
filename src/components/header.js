import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'

import '../styles/header.sass'

const Header = () => (
    <header>
        <div className="header-container">
            <h4 className="header-title">
                <AniLink fade duration={0.2} to="/" className="header-link">
            UNIVERSITY OF MELBOURNE INFORMATION SECURITY CLUB
                </AniLink>
            </h4>

            <ul className="header-nav">
                <li>
                    <AniLink fade duration={0.2} to="/about" activeClassName="active" className="hvr-underline-from-center">ABOUT
                    </AniLink>
                </li>
                <li>
                    <AniLink fade duration={0.2} to="/join" activeClassName="active" className="hvr-underline-from-center">JOIN
                    </AniLink>
                </li>
                <li>
                    <AniLink fade duration={0.2} to="/events" activeClassName="active" className="hvr-underline-from-center">
                        EVENTS
                    </AniLink>
                </li>
            </ul>


        </div>
    </header>
)

                // <li>
                //     <AniLink fade duration={0.2} to="/news" activeClassName="active" className="hvr-underline-from-center news-link">
                //         NEWS
                //     </AniLink>
                // </li>

export default Header
