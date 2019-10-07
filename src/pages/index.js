import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Particles from 'react-particles-js'

import '../styles/index.sass'
import 'typeface-oswald'
import logo_svg from '../images/umisc_logo_white.svg'

const IndexPage = () => (
  <Layout>
    <div className="index-background"></div>
    <div className="index-container">
        <SEO title="Home" />
        <div className="banner-arrow-wrapper">
            <div className="banner-arrow">
                  <Particles params={particlesjs_config} className="bg-particles" />
            </div>
            <div style={{ background: `url('${logo_svg}')` }}
                    className="misc-logo"></div>
        </div>
        <div className="titles-container">
            <div className="title">University of Melbourne Information Security Club</div>
            <div className="subtitle">A Community of White Hat Hackers.</div>
            <button className="join-button">guest@misc:~ $ <strong>join</strong></button>
        </div>
    </div>
  </Layout>
)

const particlesjs_config = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#73d6e1"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 12,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#73d6e1",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 2
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

export default IndexPage
