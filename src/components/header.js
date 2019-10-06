import { Link } from "gatsby"
import React from "react"

import '../styles/header.sass'

const Header = () => (
    <header>
        <div className="header-container">
            <h4 className="header-title">
                <Link to="/" className="header-link">
            UNIVERSITY OF MELBOURNE INFORMATION SECURITY CLUB
                </Link>
            </h4>

            <ul className="header-nav">
                <li>
                    <Link to="/about" className="hvr-underline-from-center about-link">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/news" className="hvr-underline-from-center news-link">
                        NEWS
                    </Link>
                </li>
                <li>
                    <Link to="/events" className="hvr-underline-from-center events-link">
                        EVENTS
                    </Link>
                </li>
            </ul>


        </div>
    </header>
)

export default Header
