import React from 'react'

import Particles from 'react-particles-js'
import '../styles/banner.sass'

const Banner = (props) => {
    let class_suffix = props.class_suffix || ''
    return (
        <div className={"banner-background banner-background-" + class_suffix}>
            <div className={"banner-arrow-wrapper banner-arrow-wrapper-" + class_suffix}>
                <div className={"banner-arrow banner-arrow-" + class_suffix}>
                    <Particles params={particlesjs_config} className="bg-particles" />
                </div>
            </div>
        </div>
    )
}

const particlesjs_config = {
    'particles': {
        'number': {
            'value': 80,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
        'color': {
            'value': '#73d6e1'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0,
                'color': '#000000'
            },
            'polygon': {
                'nb_sides': 5
            }
        },
        'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
            }
        },
        'size': {
            'value': 3,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 12,
                'size_min': 0.1,
                'sync': false
            }
        },
        'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#73d6e1',
            'opacity': 0.4,
            'width': 1
        },
        'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            // 'resize': true
        },
        'modes': {
            'grab': {
                'distance': 400,
                'line_linked': {
                    'opacity': 1
                }
            },
            'bubble': {
                'distance': 400,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
            },
            'push': {
                'particles_nb': 2
            }
        }
    },
    'retina_detect': false
}

export default Banner
